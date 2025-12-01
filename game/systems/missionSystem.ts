import {
  addCreditsEarned,
  devTune,
  ensurePlayerInventory,
  getCombatTune,
  gameState,
  recordContractCompletion,
  recordContractPayout
} from "../core/state";
import { getIncomeMultiplier, getPassiveEffects } from "../core/passives";
import type { ContractState, GameState } from "../core/state";
import { adjustReputationBatch } from "./reputationSystem";
import { getWeaponById } from "./weaponSystem";
import { getSystemById } from "../core/engine";
import { navigation } from "../core/navigation";
import { getStarMap, shortestPath } from "../core/map";
import { awardFactionXp } from "./perkManager";

export interface MissionTemplate {
  id: string;
  name: string;
  description: string;
  factionId?: string;
  type: string;
  requirements?: Record<string, unknown>;
  reward?: {
    credits?: number;
    rep?: Record<string, number>;
    weapon?: string;
  };
}

let missionTemplates: MissionTemplate[] = [];

export function setMissions(data: MissionTemplate[]): void {
  missionTemplates = data;
}

export function getMissionById(id: string): MissionTemplate | undefined {
  return missionTemplates.find((m) => m.id === id);
}

export function getAvailableMissions(): MissionTemplate[] {
  const activeIds = new Set(
    gameState.contracts.filter((c) => c.status === "active").map((c) => c.id)
  );
  return missionTemplates.filter((m) => !activeIds.has(m.id));
}

export function getActiveContracts(): ContractState[] {
  return gameState.contracts.filter((c) => c.status === "active");
}

export function describeMission(contract: ContractState): string {
  const req = contract.requirements as {
    travel?: { systemId?: string };
    deliver?: { commodityId?: string; quantity?: number; systemId?: string };
    combat?: { enemyId?: string };
  } | undefined;
  const highlightSystem = (id?: string) => {
    if (!id) return "";
    const system = getSystemById(id);
    const label = system?.name || id;
    return `<strong>${label}</strong>`;
  };

  const parts: string[] = [];
  if (req?.travel?.systemId) {
    const target = highlightSystem(req.travel.systemId);
    parts.push(`Travel to ${target}`);
  }
  if (req?.deliver?.commodityId) {
    const qty = req.deliver.quantity || 0;
    const target = req.deliver.systemId
      ? ` at ${highlightSystem(req.deliver.systemId)}`
      : "";
    parts.push(`Deliver ${qty} ${req.deliver.commodityId}${target}`);
  }
  if (req?.combat?.enemyId) parts.push(`Defeat ${req.combat.enemyId}`);
  return parts.join(" • ") || "No special requirements.";
}

export function getMissionProgress(contract: ContractState): string {
  const req = contract.requirements as {
    travel?: { systemId?: string };
    deliver?: { commodityId?: string; quantity?: number };
    combat?: { enemyId?: string };
  } | undefined;
  const progress = contract.progress || {};
  const parts: string[] = [];
  if (req?.travel) {
    parts.push(`Travel: ${progress.travelCompleted ? "Done" : "Pending"}`);
  }
  if (req?.deliver) {
    const delivered = (progress.deliveredQuantity as number) || 0;
    parts.push(`Delivery: ${delivered}/${req.deliver.quantity || 0}`);
  }
  if (req?.combat) {
    parts.push(`Combat: ${progress.combatCompleted ? "Done" : "Pending"}`);
  }
  return parts.join(" | ") || contract.status;
}

export function acceptMission(missionId: string): { success: boolean; reason?: string } {
  const tpl = getMissionById(missionId);
  if (!tpl) {
    return { success: false, reason: "Unknown mission" };
  }
  if (gameState.contracts.some((c) => c.id === missionId && c.status === "active")) {
    return { success: false, reason: "Mission already active" };
  }
  const reqTargetSystem = deriveTargetSystem(tpl.requirements);
  const contract: ContractState = {
    id: tpl.id,
    name: tpl.name,
    description: tpl.description,
    type: tpl.type,
    status: "active",
    sourceFaction: tpl.factionId,
    targetSystemId: reqTargetSystem,
    reward: tpl.reward,
    requirements: tpl.requirements,
    acceptedTurn: gameState.time.turn,
    progress: {}
  };
  gameState.contracts.push(contract);
  if (reqTargetSystem) {
    activateRouteForMission(contract.id, reqTargetSystem);
  }
  return { success: true };
}

export function completeMission(
  missionId: string,
  status: "completed" | "failed" = "completed"
): { success: boolean; reason?: string } {
  const contract = gameState.contracts.find((c) => c.id === missionId && c.status === "active");
  if (!contract) {
    return { success: false, reason: "Mission not active" };
  }
  contract.status = status;
  applyRewards(contract, status);
  return { success: true };
}

function applyRewards(contract: ContractState, status: "completed" | "failed"): void {
  if (status !== "completed" || !contract.reward) return;
  const reward = contract.reward;
  if (reward.credits) {
    const payoutMultiplier = Math.max(0.1, Math.min(5, devTune.contractPayoutMultiplier ?? 1));
    const incomeScale = getIncomeMultiplier();
    const passiveIncome = Math.max(0, getPassiveEffects().incomeMultiplier ?? 1);
    const scaledReward = Math.max(
      0,
      Math.round(reward.credits * 2 * payoutMultiplier * incomeScale * passiveIncome)
    );
    gameState.player.credits += scaledReward;
    addCreditsEarned(scaledReward);
    recordContractPayout(scaledReward);
    gameState.notifications.push(`Mission reward: +${scaledReward} credits.`);
  }
  if (reward.rep) {
    adjustReputationBatch(reward.rep);
    const repSummary = Object.entries(reward.rep)
      .map(([faction, delta]) => `${faction} ${delta >= 0 ? "+" : ""}${delta}`)
      .join(", ");
    if (repSummary) {
      gameState.notifications.push(`Mission reward: Reputation updated (${repSummary}).`);
    }
    for (const [factionId, delta] of Object.entries(reward.rep)) {
      if (delta > 0) {
        awardFactionXp(Math.max(2, Math.round(delta * 8)), factionId);
      }
    }
  }
  if (reward.weapon) {
    const inventory = ensurePlayerInventory();
    inventory.weapons.push(reward.weapon);
    const weaponName = getWeaponById(reward.weapon)?.name ?? reward.weapon;
    gameState.notifications.push(`Rewarded weapon: ${weaponName}.`);
  }
}

export function tickMissionTimers(): void {
  getActiveContracts().forEach((contract) => {
    const failure = contract.requirements?.failureAfterTurns as number | undefined;
    if (failure && contract.acceptedTurn != null) {
      const difficultyScale = Math.max(0.1, devTune.contractDifficultyMultiplier ?? 1);
      const allowedTurns = Math.max(1, Math.round(failure / difficultyScale));
      if (gameState.time.turn - contract.acceptedTurn >= allowedTurns) {
        failMission(contract.id);
      }
    }
  });
}

function failMission(missionId: string): void {
  const contract = gameState.contracts.find((c) => c.id === missionId && c.status === "active");
  if (!contract) return;
  contract.status = "failed";
  pushNotification(`Mission failed: ${contract.name}`);
  maybeClearRouteForMission(contract.id);
}

export function abandonMission(missionId: string): { success: boolean; reason?: string } {
  const contract = gameState.contracts.find((c) => c.id === missionId && c.status === "active");
  if (!contract) {
    return { success: false, reason: "Mission not active" };
  }
  contract.status = "failed";
  pushNotification(`Mission abandoned: ${contract.name}`);
  maybeClearRouteForMission(contract.id);
  return { success: true };
}

let pendingEventId: string | null = null;

function triggerMissionEvent(contract: ContractState): void {
  const requirement = contract.requirements as
    | { triggerEventId?: string }
    | undefined;
  if (requirement?.triggerEventId) {
    pendingEventId = requirement.triggerEventId;
  }
}

export function consumeMissionEventId(): string | null {
  const id = pendingEventId;
  pendingEventId = null;
  return id;
}

export function recordTravel(systemId: string): void {
  getActiveContracts().forEach((contract) => {
    const requirement = contract.requirements?.travel as { systemId?: string } | undefined;
    contract.progress = contract.progress || {};
    if (requirement?.systemId === systemId) {
      contract.progress.travelCompleted = true;
      tryAutoComplete(contract);
    }

    const multiTravel = contract.requirements?.multiTravel as string[] | undefined;
    if (multiTravel?.length) {
      const seen = new Set<string>(
        (contract.progress?.multiTravelVisited as string[] | undefined) ?? []
      );
      seen.add(systemId);
      contract.progress.multiTravelVisited = Array.from(seen);
      tryAutoComplete(contract);
    }
  });
}

export function recordDelivery(commodityId: string, quantity: number, systemId: string): void {
  getActiveContracts().forEach((contract) => {
    const requirement = contract.requirements?.deliver as
      | { commodityId?: string; quantity?: number; systemId?: string }
      | undefined;
    if (!requirement || requirement.commodityId !== commodityId) return;
    if (requirement.systemId && requirement.systemId !== systemId) return;
    const current = (contract.progress?.deliveredQuantity as number) || 0;
    contract.progress = contract.progress || {};
    contract.progress.deliveredQuantity = current + quantity;
    tryAutoComplete(contract);
  });
}

export function recordCombatKill(enemyId: string): void {
  getActiveContracts().forEach((contract) => {
    const requirement = contract.requirements?.combat as { enemyId?: string } | undefined;
    if (requirement?.enemyId === enemyId) {
      contract.progress = contract.progress || {};
      contract.progress.combatCompleted = true;
      tryAutoComplete(contract);
    }
  });
}

export function checkContractsOnArrival(
  state: GameState,
  systemId: string
): { checked: number; completed: string[] } {
  recordTravel(systemId);
  const cargo = (state.ship.cargo ||= {});
  let checked = 0;
  const completed: string[] = [];

  for (const contract of getActiveContracts()) {
    const beforeStatus = contract.status;
    const deliverReq = contract.requirements?.deliver as
      | {
          commodityId?: string;
          quantity?: number;
          systemId?: string;
          retain?: boolean;
        }
      | undefined;
    if (!deliverReq || !deliverReq.commodityId) {
      continue;
    }
    const targetSystem = deliverReq.systemId ?? systemId;
    if (targetSystem !== systemId) continue;
    checked += 1;

    if (!hasRequiredCommodities(cargo, deliverReq)) {
      continue;
    }

    if (!deliverReq.retain) {
      consumeRequiredCommodities(cargo, deliverReq);
    }

    contract.progress = contract.progress || {};
    const delivered = (contract.progress.deliveredQuantity as number) || 0;
    contract.progress.deliveredQuantity = delivered + (deliverReq.quantity || 1);
    tryAutoComplete(contract);

    if (beforeStatus !== "completed" && contract.status === "completed") {
      completed.push(contract.name);
    }
  }

  if (completed.length) {
    const summary = `Contracts completed: ${completed.join(", ")}`;
    state.notifications.push(summary);
  }

  return { checked, completed };
}

function hasRequiredCommodities(
  cargo: Record<string, number>,
  requirement: { commodityId: string; quantity?: number }
): boolean {
  const qty = Math.max(1, requirement.quantity ?? 1);
  return (cargo[requirement.commodityId] ?? 0) >= qty;
}

function consumeRequiredCommodities(
  cargo: Record<string, number>,
  requirement: { commodityId: string; quantity?: number }
): void {
  const qty = Math.max(1, requirement.quantity ?? 1);
  const current = cargo[requirement.commodityId] ?? 0;
  cargo[requirement.commodityId] = Math.max(0, current - qty);
}

function tryAutoComplete(contract: ContractState): void {
  if (!contract.requirements || contract.status !== "active") return;
  const { travel, deliver, combat } = contract.requirements as {
    travel?: { systemId?: string };
    deliver?: { commodityId?: string; quantity?: number };
    combat?: { enemyId?: string };
  };
  const progress = contract.progress || {};
  const multi = contract.requirements?.multiTravel as string[] | undefined;
  const travelDone = travel ? Boolean(progress.travelCompleted) : true;
  const deliverDone = deliver
    ? (progress.deliveredQuantity as number) >= (deliver.quantity || 0)
    : true;
  const combatDone = combat ? Boolean(progress.combatCompleted) : true;
  const multiVisited = (progress.multiTravelVisited as string[] | undefined) ?? [];
  const multiDone = multi ? multi.every((id) => multiVisited.includes(id)) : true;

  if (travelDone && deliverDone && combatDone && multiDone) {
    contract.status = "completed";
    applyRewards(contract, "completed");
    recordContractCompletion();
    pushNotification(`Mission completed: ${contract.name}`);
    maybeClearRouteForMission(contract.id);
  }
}

function pushNotification(message: string): void {
  gameState.notifications.push(message);
}

interface MissionRequirements {
  travel?: { systemId?: string };
  deliver?: { systemId?: string };
  multiTravel?: string[];
}

function deriveTargetSystem(requirements?: Record<string, unknown>): string | undefined {
  const req = requirements as MissionRequirements | undefined;
  if (!req) return undefined;
  if (req.travel?.systemId) return req.travel.systemId;
  if (req.deliver?.systemId) return req.deliver.systemId;
  if (req.multiTravel && req.multiTravel.length) return req.multiTravel[0];
  return undefined;
}

function activateRouteForMission(missionId: string, targetSystemId: string): void {
  const map = getStarMap();
  if (!map) return;
  const start = gameState.location.systemId;
  const path = shortestPath(map, start, targetSystemId);
  if (!path.length || path.length <= 1) {
    return;
  }
  navigation.setActiveRoute({
    nodes: path,
    currentIndex: 0,
    source: "mission",
    missionId
  });
}

function maybeClearRouteForMission(missionId: string): void {
  if (navigation.activeRoute?.missionId === missionId) {
    navigation.clearActiveRoute();
  }
}

export function tickMissions(state: GameState): void {
  const today = state.time.day;
  for (const contract of state.contracts) {
    if (contract.status === "active" && contract.dueDay !== undefined && today > contract.dueDay) {
      contract.status = "failed";
      pushNotification(`Mission failed (expired): ${contract.name}`);
    }
  }
}
