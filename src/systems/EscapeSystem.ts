// src/systems/EscapeSystem.ts
// Calculates flee chance and resolves run attempts during pirate encounters.

import { ShipStats } from "../game/GameState";
import { DangerLevel } from "../../galaxyTypes";
import { clamp } from "./math";

export interface FleeContext {
  playerShip: ShipStats;
  enemySpeedRating: number; // 1-10
  sectorDanger: DangerLevel;
  pirateAttention: number; // 0-100
}

export function calculateFleeChance(ctx: FleeContext): number {
  const { playerShip, enemySpeedRating, sectorDanger, pirateAttention } = ctx;
  const engine = playerShip.enginePower;
  const agility = playerShip.agility;
  const mass = playerShip.mass;
  const pilot = playerShip.pilotSkill ?? 0;

  const speedScore = (engine + agility * 0.7 + pilot * 0.5) / Math.max(1, mass);
  const enemyScore = enemySpeedRating;
  let base = 0.5 + (speedScore - enemyScore) * 0.05;

  const hullRatio = playerShip.hull / Math.max(1, playerShip.maxHull);
  const damagePenalty = (1 - hullRatio) * 0.2;
  const dangerPenalty =
    sectorDanger === "high" ? 0.15 : sectorDanger === "medium" ? 0.07 : 0;
  const riskPenalty = (pirateAttention / 100) * 0.15;

  return clamp(0.1, 0.9, base - damagePenalty - dangerPenalty - riskPenalty);
}
