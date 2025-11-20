// src/systems/RiskSystem.ts
// Risk accumulation and pirate encounter chances.

import { PlayerState, GameState } from "../game/GameState";
import { Sector } from "../../galaxyTypes";

export type MiningMode = "safe" | "aggressive";

export function applyMiningRisk(player: PlayerState, sector: Sector, mode: MiningMode): void {
  const base = mode === "safe" ? 3 : 7;
  const dangerMod = sector.danger === "high" ? 2 : sector.danger === "medium" ? 1.3 : 1;
  player.risk.pirateAttention = Math.min(100, player.risk.pirateAttention + base * dangerMod);
}

export function applyTravelRisk(player: PlayerState, sector: Sector): void {
  const travelBump = sector.danger === "high" ? 4 : sector.danger === "medium" ? 2 : 1;
  player.risk.pirateAttention = Math.min(100, player.risk.pirateAttention + travelBump);
}

export function pirateEncounterChance(player: PlayerState, sector: Sector): number {
  const base =
    sector.danger === "high" ? 0.25 : sector.danger === "medium" ? 0.15 : 0.05;
  const riskBonus = player.risk.pirateAttention / 200; // up to +0.5 at 100
  return Math.min(0.9, base + riskBonus);
}

export function decayPirateAttention(player: PlayerState, amount: number): void {
  player.risk.pirateAttention = Math.max(0, player.risk.pirateAttention - amount);
}
