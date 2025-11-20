import { gameState } from "../core/state";
import type { ContractState, GameState } from "../core/state";
import { adjustReputationBatch } from "./reputationSystem";

export interface MissionTemplate {
  id: string;
  name: string;
  description: string;
  factionId?: string;
  type: string;
  requirements?: Record<string, unknown>;
  reward?: { credits?: number; rep?: Record<string, number> };
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
  const parts: string[] = [];
  if (req?.travel?.systemId) parts.push(`Travel to ${req.travel.systemId}`);
  if (req?.deliver?.commodityId) {
    const qty = req.deliver.quantity || 0;
    parts.push(
      `Deliver ${qty} ${req.deliver.commodityId}${
        req.deliver.systemId ? ` at ${req.deliver.systemId}` : ""
      }`
    );
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
  const contract: ContractState = {
    id: tpl.id,
    name: tpl.name,
    description: tpl.description,
    type: tpl.type,
    status: "active",
    sourceFaction: tpl.factionId,
    reward: tpl.reward,
    requirements: tpl.requirements,
    acceptedTurn: gameState.time.turn,
    progress: {}
  };
  gameState.contracts.push(contract);
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
  if (contract.reward.credits) {
    gameState.player.credits += contract.reward.credits;
  }
  if (contract.reward.rep) {
    adjustReputationBatch(contract.reward.rep);
  }
}

export function tickMissionTimers(): void {
  getActiveContracts().forEach((contract) => {
    const failure = contract.requirements?.failureAfterTurns as number | undefined;
    if (failure && contract.acceptedTurn != null) {
      if (gameState.time.turn - contract.acceptedTurn >= failure) {
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
    if (requirement?.systemId === systemId) {
      contract.progress = contract.progress || {};
      contract.progress.travelCompleted = true;
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

function tryAutoComplete(contract: ContractState): void {
  if (!contract.requirements) return;
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
  const multiDone = multi ? Boolean(progress.multiTravel) : true;

  if (travelDone && deliverDone && combatDone && multiDone) {
    contract.status = "completed";
    applyRewards(contract, "completed");
    pushNotification(`Mission completed: ${contract.name}`);
  }
}

function pushNotification(message: string): void {
  gameState.notifications.push(message);
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
