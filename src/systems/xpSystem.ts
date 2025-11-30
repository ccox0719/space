import { GameState } from "../game/GameState";
import { XP_DEFINITIONS, XpTrackDefinition } from "./xpDefinitions";
import { evaluatePerkUnlocks, applyPerkEffects } from "./perkSystem";
import { pushNotification } from "./PlayerState";

export const XP_TRACKS: Record<string, XpTrackDefinition> = XP_DEFINITIONS.xpTracks ?? {};

export interface XpTrackStatus {
  track: XpTrackDefinition;
  level: number;
  xpIntoLevel: number;
  xpNeededForNextLevel: number | null;
  nextThreshold: number | null;
  currentThreshold: number;
  xp: number;
}

export function getXpTrackDefinition(trackId: string): XpTrackDefinition | undefined {
  return XP_TRACKS[trackId];
}

export function getXpTrackStatus(trackId: string, xp: number = 0): XpTrackStatus | null {
  const track = getXpTrackDefinition(trackId);
  if (!track) return null;
  const thresholds = track.levelThresholds ?? [];
  let level = 0;
  for (let i = 0; i < thresholds.length; i += 1) {
    if (xp >= thresholds[i]) {
      level = i;
    } else {
      break;
    }
  }
  const cappedLevel = thresholds.length ? Math.min(level, thresholds.length - 1) : 0;
  const currentThreshold = thresholds[cappedLevel] ?? 0;
  const nextThreshold = cappedLevel + 1 < thresholds.length ? thresholds[cappedLevel + 1] : null;
  const xpIntoLevel = Math.max(0, xp - currentThreshold);
  const xpNeededForNextLevel = nextThreshold !== null ? Math.max(0, nextThreshold - currentThreshold) : null;
  return {
    track,
    level: Math.min(cappedLevel, track.maxLevel),
    xpIntoLevel,
    xpNeededForNextLevel,
    nextThreshold,
    currentThreshold,
    xp
  };
}

export function getAllXpTrackStatuses(xpRecords: Record<string, number> = {}): XpTrackStatus[] {
  return Object.values(XP_TRACKS)
    .map((track) => getXpTrackStatus(track.id, Math.max(0, xpRecords[track.id] ?? 0)))
    .filter((status): status is XpTrackStatus => status !== null);
}

function rebuildPlayerLevel(game: GameState, statuses: XpTrackStatus[]): number {
  if (!game.player) return 1;
  if (!statuses.length) {
    game.player.level = 1;
    game.player.xpToNext = 0;
    return 1;
  }
  const highest = statuses.reduce((prev, current) => {
    if (current.level > prev.level) return current;
    if (current.level === prev.level && current.xpIntoLevel > prev.xpIntoLevel) return current;
    return prev;
  }, statuses[0]);
  game.player.level = Math.max(1, highest.level);
  game.player.xpToNext = highest.xpNeededForNextLevel ?? 0;
  return game.player.level;
}

export function addXp(game: GameState, trackId: string, amount: number): void {
  if (amount <= 0 || !game.player) return;
  const xpTracks = game.player.xpTracks || {};
  xpTracks[trackId] = Math.max(0, (xpTracks[trackId] ?? 0) + amount);
  game.player.xpTracks = xpTracks;
  game.player.xp += amount;
  console.debug("XP gain", { trackId, amount, total: xpTracks[trackId] });
  const statuses = getAllXpTrackStatuses(xpTracks);
  const previousLevel = game.player.level ?? 1;
  const newLevel = rebuildPlayerLevel(game, statuses);
  if (newLevel > previousLevel) {
    const gained = newLevel - previousLevel;
    game.player.perkPoints = (game.player.perkPoints ?? 0) + gained;
    console.debug("Perk points gained:", gained);
    pushNotification(game, `Level ${newLevel} reached!`);
  }
  const unlocked = evaluatePerkUnlocks(game, statuses);
  if (unlocked.length) {
    game.log.push({
      cycle: game.time.cycle,
      sectorId: game.currentSectorId,
      message: `Perks unlocked: ${unlocked.join(", ")}`
    });
  }
  applyPerkEffects(game);
}
