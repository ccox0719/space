import { gameState } from "../core/state";

const WANTED_MIN = 0;
const WANTED_MAX = 100;

export function adjustWanted(delta: number): number {
  const next = Math.max(
    WANTED_MIN,
    Math.min(WANTED_MAX, (gameState.player.wanted ?? 0) + delta)
  );
  gameState.player.wanted = next;
  return next;
}
