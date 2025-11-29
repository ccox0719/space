import xpSystems from "../content/xp_systems.json";

export const XP_DEFINITIONS = xpSystems;

export interface XpTrackDefinition {
  id: string;
  displayName: string;
  description: string;
  type: string;
  levelThresholds: number[];
  maxLevel: number;
  rewardsByLevel?: Record<string, unknown>;
}

export interface XpTrackStatus {
  track: XpTrackDefinition;
  level: number;
  xpIntoLevel: number;
  xpNeededForNextLevel: number | null;
  nextThreshold: number | null;
  currentThreshold: number;
  xp: number;
}

const XP_TRACKS: Record<string, XpTrackDefinition> = xpSystems.xpTracks;

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
  const xpNeededForNextLevel =
    nextThreshold !== null ? Math.max(0, nextThreshold - currentThreshold) : null;
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
