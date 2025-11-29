import { GameState } from "../core/state";

export interface MaintenanceModifier {
  level: number;
  fuel: number;
  repair: number;
  shield: number;
}

function getMaintenanceLevel(xp: number): number {
  return Math.min(10, Math.floor(xp / 200));
}

export function getMaintenanceModifier(state: GameState | null): MaintenanceModifier {
  const xp = state?.player?.xp ?? 0;
  const level = getMaintenanceLevel(xp);
  return {
    level,
    fuel: 1 + level * 0.015,
    repair: 1 + level * 0.02,
    shield: 1 + level * 0.025
  };
}
