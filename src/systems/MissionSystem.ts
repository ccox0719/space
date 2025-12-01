// src/systems/MissionSystem.ts
// Mission offers and lifecycle driven by career_system.json.

import careerSystem from "../../career_system.json";
import { GameState, MissionDefinition, MissionInstance, MissionRiskLevel, RoleId } from "../game/GameState";
import { adjustCredits, adjustReputation, appendLog } from "./PlayerState";
import { Rng } from "../rng/SeededRng";
import { addXp } from "./xpSystem";

interface CareerDefinition {
  id: RoleId | string;
  missions: MissionDefinition[];
}

interface CareerSystemConfig {
  careers: CareerDefinition[];
}

const CAREER_DATA = careerSystem as unknown as CareerSystemConfig;

const MISSION_CONFIG = {
  durationByRisk: {
    low: 6,
    medium: 10,
    high: 14,
    very_high: 18
  } satisfies Record<MissionRiskLevel, number>,
  lootBasedReward: 450,
  dynamicRewardBase: {
    market_surge_multiplier: 400
  } as Record<string, number>,
  riskRewardMultiplier: {
    low: 1,
    medium: 1.2,
    high: 1.5,
    very_high: 1.8
  } satisfies Record<MissionRiskLevel, number>
};

export function getMissionDefinition(missionId: string): { definition: MissionDefinition; careerId: RoleId | string } | null {
  for (const career of CAREER_DATA.careers) {
    const found = career.missions.find((m) => m.id === missionId);
    if (found) return { definition: found, careerId: career.id };
  }
  return null;
}

export function createMissionOffer(
  game: GameState,
  missionId: string,
  sectorId: string | undefined,
  rng: Rng,
  autoAccept = true
): MissionInstance | null {
  const found = getMissionDefinition(missionId);
  if (!found) return null;
  const { definition, careerId } = found;
  const reward = calculateReward(definition);
  const instance: MissionInstance = {
    instanceId: `${missionId}_${Math.floor(rng.next() * 1_000_000)}`,
    missionId,
    careerId,
    sectorId,
    status: autoAccept ? "accepted" : "offered",
    expiresIn: MISSION_CONFIG.durationByRisk[definition.riskLevel],
    reward,
    reputationEffects: definition.reputationEffects,
    notes: []
  };
  game.activeMissions.push(instance);
  appendLog(game, `Mission ${autoAccept ? "accepted" : "offered"}: ${definition.name}`, {
    missionId,
    reward,
    expiresIn: instance.expiresIn
  });
  return instance;
}

export function acceptMission(game: GameState, instanceId: string): MissionInstance | null {
  const mission = game.activeMissions.find((m) => m.instanceId === instanceId);
  if (!mission) return null;
  mission.status = "accepted";
  appendLog(game, `Accepted mission ${mission.missionId}`, { instanceId });
  return mission;
}

export function completeMission(game: GameState, instanceId: string): MissionInstance | null {
  const idx = game.activeMissions.findIndex((m) => m.instanceId === instanceId);
  if (idx === -1) return null;
  const mission = game.activeMissions[idx];
  game.activeMissions.splice(idx, 1);
  mission.status = "completed";
  game.completedMissions.push(mission);
  adjustCredits(game.player, mission.reward);
  if (mission.reputationEffects) {
    adjustReputation(game.player, mission.reputationEffects);
  }
  appendLog(game, `Completed mission ${mission.missionId}`, {
    instanceId,
    reward: mission.reward
  });
  const xpByRisk: Record<MissionRiskLevel, number> = {
    low: 10,
    medium: 20,
    high: 30,
    very_high: 40
  };
  addXp(game, "combat", xpByRisk[definition.riskLevel] ?? 10);
  return mission;
}

export function failMission(game: GameState, instanceId: string, reason: string): MissionInstance | null {
  const idx = game.activeMissions.findIndex((m) => m.instanceId === instanceId);
  if (idx === -1) return null;
  const mission = game.activeMissions[idx];
  game.activeMissions.splice(idx, 1);
  mission.status = "failed";
  game.failedMissions.push(mission);
  appendLog(game, `Mission failed: ${mission.missionId}`, { reason, instanceId });
  return mission;
}

export function tickMissions(game: GameState): void {
  for (const mission of game.activeMissions) {
    if (typeof mission.expiresIn === "number") {
      mission.expiresIn = Math.max(0, mission.expiresIn - 1);
    }
  }
  const expired = game.activeMissions.filter((m) => m.expiresIn === 0);
  for (const mission of expired) {
    failMission(game, mission.instanceId, "expired");
  }
}

function calculateReward(definition: MissionDefinition): number {
  let reward = 0;
  if (typeof definition.baseReward === "number") {
    reward = definition.baseReward;
  } else if (definition.baseReward === "loot_based") {
    reward = MISSION_CONFIG.lootBasedReward;
  }
  if (definition.dynamicReward) {
    const extra = MISSION_CONFIG.dynamicRewardBase[definition.dynamicReward] ?? 0;
    reward += extra;
  }
  const riskMultiplier = MISSION_CONFIG.riskRewardMultiplier[definition.riskLevel] ?? 1;
  return Math.round(reward * riskMultiplier);
}
