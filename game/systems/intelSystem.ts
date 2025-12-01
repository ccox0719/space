import type { GameState } from "../core/state";

export function tickIntel(_state: GameState): void {
  // Staleness is derived: UI can compare (today - lastSeen) to a threshold.
  // This placeholder keeps the daily tick in place for future decay side-effects.
}

export function markPriceSeen(state: GameState, systemId: string): void {
  ensureIntel(state, systemId).lastPriceSeenDay = state.time.day;
}

export function markRiskSeen(state: GameState, systemId: string): void {
  ensureIntel(state, systemId).lastRiskSeenDay = state.time.day;
}

function ensureIntel(state: GameState, systemId: string) {
  if (!state.intel) state.intel = { systems: [] };
  const existing = state.intel.systems.find((s) => s.systemId === systemId);
  if (existing) return existing;
  const created = { systemId };
  state.intel.systems.push(created);
  return created;
}
