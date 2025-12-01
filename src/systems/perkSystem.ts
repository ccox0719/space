import { GameState } from "../game/GameState";
import { XP_DEFINITIONS, PerkDefinition } from "./xpDefinitions";
import type { XpTrackStatus } from "./xpSystem";
import { pushNotification } from "./PlayerState";

interface PerkSource {
  trackId: string;
  level: number;
}

interface PerkReward {
  type?: string;
  perkId?: string;
}

export interface PerkEffectEntry {
  multiplier: number;
  flat: number;
}

export type PerkEffectRecord = Record<string, PerkEffectEntry>;

const PERK_DEFINITIONS: Record<string, PerkDefinition> = (XP_DEFINITIONS.perks as Record<string, PerkDefinition>) ?? {};

function buildPerkSources(): Record<string, PerkSource> {
  const sources: Record<string, PerkSource> = {};
  const tracks = XP_DEFINITIONS.xpTracks ?? {};
  for (const [trackId, definition] of Object.entries(tracks)) {
    const rewardsByLevel = definition.rewardsByLevel ?? {};
    for (const [levelKey, rewards] of Object.entries(rewardsByLevel)) {
      const level = Number(levelKey);
      if (Number.isNaN(level)) continue;
      for (const reward of rewards as PerkReward[]) {
        if (reward?.type === "perkUnlock" && reward.perkId) {
          if (!(reward.perkId in sources)) {
            sources[reward.perkId] = { trackId, level };
          }
        }
      }
    }
  }
  return sources;
}

const PERK_SOURCES = buildPerkSources();

export function getPerkDefinition(perkId: string): PerkDefinition | null {
  return PERK_DEFINITIONS[perkId] ?? null;
}

export function getPerkSource(perkId: string): PerkSource | undefined {
  return PERK_SOURCES[perkId];
}

export function getUnlockedPerks(game: GameState): string[] {
  return game.player?.perks ?? [];
}

function meetsRequirements(game: GameState, requirements: string[]): boolean {
  if (!requirements.length) return true;
  const unlocked = new Set(getUnlockedPerks(game));
  return requirements.every((req) => unlocked.has(req));
}

export function unlockPerk(game: GameState, perkId: string): boolean {
  if (!game.player || !perkId) return false;
  if (game.player.perks.includes(perkId)) return false;
  const def = getPerkDefinition(perkId);
  if (!def) return false;
  if (!meetsRequirements(game, def.requires ?? [])) return false;
  game.player.perks.push(perkId);
  console.debug("Perk unlocked", perkId);
  pushNotification(game, `Perk unlocked: ${def.displayName}`);
  applyPerkEffects(game);
  return true;
}

export function unlockPerkWithPoints(game: GameState, perkId: string): boolean {
  if (!game.player) return false;
  if (!spendPerkPoints(game, 1, `Unlock ${perkId}`)) return false;
  if (!unlockPerk(game, perkId)) {
    game.player.perkPoints += 1;
    return false;
  }
  return true;
}

export function evaluatePerkUnlocks(game: GameState, statuses: XpTrackStatus[]): string[] {
  if (!game.player) return [];
  const unlocked = new Set(getUnlockedPerks(game));
  const newlyUnlocked: string[] = [];
  for (const status of statuses) {
    const rewardsByLevel = status.track.rewardsByLevel ?? {};
    for (const [levelKey, rewards] of Object.entries(rewardsByLevel)) {
      const level = Number(levelKey);
      if (Number.isNaN(level) || level > status.level) continue;
      for (const reward of rewards as PerkReward[]) {
        if (reward?.type !== "perkUnlock" || !reward.perkId) continue;
        const perkId = reward.perkId;
        if (unlocked.has(perkId)) continue;
        const perkDef = getPerkDefinition(perkId);
        if (!perkDef) continue;
        if (!meetsRequirements(game, perkDef.requires ?? [])) continue;
        unlocked.add(perkId);
        newlyUnlocked.push(perkId);
        game.player.perks.push(perkId);
        console.debug("Perk unlocked via XP", perkId);
        pushNotification(game, `Perk unlocked: ${perkDef.displayName}`);
      }
    }
  }
  if (newlyUnlocked.length) {
    applyPerkEffects(game);
  }
  return newlyUnlocked;
}

export function applyPerkEffects(game: GameState): PerkEffectRecord {
  if (!game.player) return {};
  const effects: PerkEffectRecord = {};
  for (const perkId of getUnlockedPerks(game)) {
    const def = getPerkDefinition(perkId);
    if (!def?.effects?.length) continue;
    for (const effect of def.effects) {
      const key = `${effect.target}.${effect.stat}`;
      const entry = effects[key] ?? { multiplier: 1, flat: 0 };
      switch (effect.operation) {
        case "mul":
          entry.multiplier *= effect.value;
          break;
        case "addPercent":
          entry.multiplier *= 1 + effect.value;
          break;
        case "add":
        case "addFlat":
          entry.flat += effect.value;
          break;
        default:
          break;
      }
      effects[key] = entry;
    }
  }
  game.player.perkEffects = effects;
  console.debug("Perk effects recalculated", Object.keys(effects).length);
  return effects;
}

function getEffectEntry(game: GameState, target: string, stat: string): PerkEffectEntry | undefined {
  return game.player?.perkEffects?.[`${target}.${stat}`];
}

export function getPerkMultiplier(game: GameState, target: string, stat: string): number {
  return getEffectEntry(game, target, stat)?.multiplier ?? 1;
}

export function getPerkFlat(game: GameState, target: string, stat: string): number {
  return getEffectEntry(game, target, stat)?.flat ?? 0;
}

export function getPerkPercent(game: GameState, target: string, stat: string): number {
  const entry = getEffectEntry(game, target, stat);
  if (!entry) return 0;
  return entry.multiplier - 1;
}

export function applyPerkStatChain(game: GameState, target: string, stats: string[], base: number): number {
  if (!stats.length) return base;
  let multiplier = 1;
  let flat = 0;
  for (const stat of stats) {
    const entry = getEffectEntry(game, target, stat);
    if (!entry) continue;
    multiplier *= entry.multiplier;
    flat += entry.flat;
  }
  return base * multiplier + flat;
}

export function spendPerkPoints(game: GameState, amount: number = 1, reason?: string): boolean {
  if (!game.player || amount <= 0) return false;
  if (game.player.perkPoints < amount) return false;
  game.player.perkPoints -= amount;
  console.debug("Perk points spent", amount, reason);
  pushNotification(
    game,
    reason ? `Perk points spent: ${reason}` : `Perk points spent: ${amount}`
  );
  return true;
}
