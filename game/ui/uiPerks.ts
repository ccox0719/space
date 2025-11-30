import { GameState } from "../core/state"; // adjust? need GameState type? existing file uses GameState from core state
import { getAllXpTrackStatuses } from "../systems/xpSystem";
import { getPerkTreeData } from "../systems/perkManager";

export interface UiXpTrackRow {
  id: string;
  displayName: string;
  level: number;
  xpIntoLevel: number;
  xpNeeded: number | null;
  percent: number;
  type: string;
}

export interface UiPerkEntry {
  id: string;
  displayName: string;
  description: string;
  tier: number;
  branch: string;
  unlocked: boolean;
  source?: { trackId: string; level: number };
  hasRequirements: boolean;
  requires: string[];
  effectTargets: string[];
}

export interface UiPerkBranch {
  branch: string;
  entries: UiPerkEntry[];
}

export function getXpDashboard(game: GameState): UiXpTrackRow[] {
  const statuses = getAllXpTrackStatuses(game.player.xpTracks ?? {});
  return statuses.map((status) => {
    const xpNeeded = status.xpNeededForNextLevel;
    const percent = xpNeeded && xpNeeded > 0 ? Math.min(100, Math.round((status.xpIntoLevel / xpNeeded) * 100)) : 100;
    return {
      id: status.track.id,
      displayName: status.track.displayName,
      level: status.level,
      xpIntoLevel: status.xpIntoLevel,
      xpNeeded,
      percent,
      type: status.track.type
    };
  });
}

export function getUiPerkTree(game: GameState): UiPerkBranch[] {
  const rawTree = getPerkTreeData();
  return Object.entries(rawTree).map(([branch, entries]) => ({
    branch,
    entries: entries.map((entry) => ({
      id: entry.id,
      displayName: entry.displayName,
      description: entry.description,
      tier: entry.tier,
      branch: entry.branch,
      unlocked: entry.unlocked,
      source: entry.source,
      hasRequirements: entry.requires.length > 0,
      requires: entry.requires,
      effectTargets: entry.effectTargets
    }))
  }));
}

export interface UiUpcomingPerk {
  id: string;
  displayName: string;
  branch: string;
  tier: number;
  description: string;
  requires: string[];
}

export function getUpcomingPerks(game: GameState): UiUpcomingPerk[] {
  const unlocked = new Set(game.player.perks ?? []);
  const branches = getUiPerkTree(game);
  const upcoming: UiUpcomingPerk[] = [];
  for (const branch of branches) {
    const candidate = branch.entries
      .filter((entry) => !entry.unlocked)
      .filter((entry) => entry.requires.every((req) => unlocked.has(req)))
      .sort((a, b) => a.tier - b.tier);
    if (candidate.length) {
      upcoming.push({
        id: candidate[0].id,
        displayName: candidate[0].displayName,
        branch: branch.branch,
        tier: candidate[0].tier,
        description: candidate[0].description,
        requires: candidate[0].requires
      });
    }
  }
  return upcoming;
}

export function getLatestNotifications(game: GameState, limit = 5): string[] {
  const notifications = game.player.notifications || [];
  return notifications.slice(-limit).reverse();
}
