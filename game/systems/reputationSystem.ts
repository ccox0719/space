import { gameState } from "../core/state";

const MIN_REP = -100;
const MAX_REP = 100;

export function adjustReputation(factionId: string, delta: number): number {
  const current = gameState.reputation[factionId] || 0;
  const next = clamp(current + delta);
  gameState.reputation[factionId] = next;
  return next;
}

export function adjustReputationBatch(changes: Record<string, number>): void {
  for (const [factionId, delta] of Object.entries(changes)) {
    adjustReputation(factionId, delta);
  }
}

export function getReputation(factionId: string): number {
  return gameState.reputation[factionId] || 0;
}

export function getReputationSummary(): Array<{ factionId: string; value: number }> {
  const summary = Object.entries(gameState.reputation).map(([factionId, value]) => ({
    factionId,
    value
  }));
  summary.sort((a, b) => b.value - a.value);
  return summary;
}

function clamp(value: number): number {
  return Math.max(MIN_REP, Math.min(MAX_REP, value));
}
