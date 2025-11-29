import { addXp, gameState, persistXpState } from "../core/state";
import { getAllXpTrackStatuses, XP_DEFINITIONS } from "./xpSystem";

const PERK_DEFINITIONS = XP_DEFINITIONS.perks ?? {};
const XP_TRACKS = XP_DEFINITIONS.xpTracks ?? {};

function ensureUnlockedSet(): Set<string> {
  if (!gameState.player.perksUnlocked) {
    gameState.player.perksUnlocked = [];
  }
  return new Set(gameState.player.perksUnlocked);
}

function normalizeUnlockedSet(set: Set<string>): string[] {
  return Array.from(set);
}

function getPerkDefinition(perkId: string) {
  return PERK_DEFINITIONS[perkId] ?? null;
}

function getFactionTrackId(factionId: string): string {
  const normalized = (factionId ?? "").toLowerCase();
  if (/pirate|raider|rift|syndicate/.test(normalized)) {
    return "faction_pirate";
  }
  return "faction_civilian";
}

function getShipXpTrackId(): string | null {
  const templateId = gameState.ship?.templateId;
  if (!templateId) return null;
  const candidate = `ship_${templateId}`;
  return XP_TRACKS[candidate] ? candidate : null;
}

export function getUnlockedPerks(): string[] {
  if (!gameState || !gameState.player) return [];
  return gameState.player.perksUnlocked ?? [];
}

export function isPerkUnlocked(perkId: string): boolean {
  return getUnlockedPerks().includes(perkId);
}

function buildPerkSources(): Record<string, { trackId: string; level: number }> {
  const result: Record<string, { trackId: string; level: number }> = {};
  for (const [trackId, track] of Object.entries(XP_TRACKS)) {
    const rewardsByLevel = track.rewardsByLevel ?? {};
    for (const [levelKey, rewards] of Object.entries(rewardsByLevel)) {
      const levelNumber = Number(levelKey);
      if (Number.isNaN(levelNumber)) continue;
      for (const reward of rewards) {
        if (reward?.type === "perkUnlock" && reward.perkId) {
          if (!(reward.perkId in result)) {
            result[reward.perkId] = { trackId, level: levelNumber };
          }
        }
      }
    }
  }
  return result;
}

const PERK_SOURCES = buildPerkSources();

export interface PerkTreeEntry {
  id: string;
  displayName: string;
  description: string;
  branch: string;
  tier: number;
  unlocked: boolean;
  requires: string[];
  source?: { trackId: string; level: number };
  effectTargets: string[];
}

export function getPerkTreeData(): Record<string, PerkTreeEntry[]> {
  const unlocked = ensureUnlockedSet();
  const tree: Record<string, PerkTreeEntry[]> = {};
  for (const [perkId, def] of Object.entries(PERK_DEFINITIONS)) {
    const entry: PerkTreeEntry = {
      id: perkId,
      displayName: def.displayName,
      description: def.description,
      branch: def.branch ?? "general",
      tier: def.tier ?? 1,
      unlocked: unlocked.has(perkId),
      requires: def.requires ?? [],
      source: PERK_SOURCES[perkId]
      ,
      effectTargets: Array.from(
        new Set((def.effects ?? []).map((effect: any) => effect.target))
      )
    };
    if (!tree[entry.branch]) {
      tree[entry.branch] = [];
    }
    tree[entry.branch].push(entry);
  }
  for (const branch of Object.keys(tree)) {
    tree[branch].sort((a, b) => a.tier - b.tier || a.displayName.localeCompare(b.displayName));
  }
  return tree;
}

export function evaluatePerkUnlocks(): string[] {
  if (!gameState || !gameState.player) return [];
  const xpStatuses = getAllXpTrackStatuses(gameState.player.xpTracks ?? {});
  const unlocked = ensureUnlockedSet();
  const newlyUnlocked: string[] = [];
  for (const status of xpStatuses) {
    const rewardsByLevel = status.track.rewardsByLevel ?? {};
    for (const levelKey of Object.keys(rewardsByLevel)) {
      const levelNumber = Number(levelKey);
      if (Number.isNaN(levelNumber) || levelNumber > status.level) continue;
      const rewards = rewardsByLevel[levelKey] ?? [];
      for (const reward of rewards) {
        if (reward?.type !== "perkUnlock" || !reward.perkId) continue;
        const perkId = reward.perkId;
        if (unlocked.has(perkId)) continue;
        const perkDef = getPerkDefinition(perkId);
        if (!perkDef) continue;
        const requirements: string[] = perkDef.requires ?? [];
        const missing = requirements.some((req) => !unlocked.has(req));
        if (missing) continue;
        unlocked.add(perkId);
        newlyUnlocked.push(perkId);
      }
    }
  }
  const updated = normalizeUnlockedSet(unlocked);
  gameState.player.perksUnlocked = updated;
  if (newlyUnlocked.length > 0) {
    gameState.notifications.push(`Perks unlocked: ${newlyUnlocked.join(", ")}.`);
  }
  persistXpState();
  return newlyUnlocked;
}

export function awardXp(amount: number, trackId: string = "mining"): string[] {
  if (!gameState) return [];
  addXp(amount, trackId);
  return evaluatePerkUnlocks();
}

export function awardFactionXp(amount: number, factionId: string): string[] {
  if (!gameState) return [];
  if (amount <= 0) return [];
  const trackId = getFactionTrackId(factionId);
  return awardXp(amount, trackId);
}

export function awardShipXp(amount: number): string[] {
  if (!gameState) return [];
  if (amount <= 0) return [];
  const trackId = getShipXpTrackId();
  if (!trackId) return [];
  return awardXp(amount, trackId);
}
