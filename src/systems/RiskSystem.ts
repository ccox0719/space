// src/systems/RiskSystem.ts
// Risk accumulation and pirate encounter chances.

import { GameState, PlayerState } from "../game/GameState";
import { Sector } from "../../galaxyTypes";
import { getPerkMultiplier, getPerkPercent } from "./perkSystem";

export type MiningMode = "safe" | "aggressive";

export function applyMiningRisk(game: GameState, sector: Sector, mode: MiningMode): void {
  const player = game.player;
  const base = mode === "safe" ? 3 : 7;
  const dangerMod = sector.danger === "high" ? 2 : sector.danger === "medium" ? 1.3 : 1;
  let risk = base * dangerMod;
  const hazardDamage = getPerkMultiplier(game, "mining", "hazardDamageMultiplier");
  const hazardControl = Math.max(0, getPerkPercent(game, "mining", "hazardControlBonus"));
  risk = Math.max(0, risk * hazardDamage * Math.max(0, 1 - hazardControl));
  player.risk.pirateAttention = Math.min(100, player.risk.pirateAttention + risk);
}

export function applyTravelRisk(game: GameState, sector: Sector): void {
  const travelBump = sector.danger === "high" ? 4 : sector.danger === "medium" ? 2 : 1;
  const hazardBonus = Math.max(0, getPerkPercent(game, "travel", "hazardDetectionBonus"));
  const reduction = travelBump * hazardBonus;
  const adjusted = Math.max(0, travelBump - reduction);
  game.player.risk.pirateAttention = Math.min(100, game.player.risk.pirateAttention + adjusted);
}

export function pirateEncounterChance(game: GameState, sector: Sector): number {
  const base =
    sector.danger === "high" ? 0.25 : sector.danger === "medium" ? 0.15 : 0.05;
  const hazardBonus = Math.max(0, getPerkPercent(game, "travel", "hazardDetectionBonus"));
  const reducedBase = Math.max(0, base - base * hazardBonus);
  const riskBonus = game.player.risk.pirateAttention / 200; // up to +0.5 at 100
  return Math.min(0.9, reducedBase + riskBonus);
}

export function decayPirateAttention(player: PlayerState, amount: number): void {
  player.risk.pirateAttention = Math.max(0, player.risk.pirateAttention - amount);
}
