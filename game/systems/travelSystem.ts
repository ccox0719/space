// systems/travelSystem.ts

import { content } from "../core/engine";
import type { SystemDef, GameEvent } from "../core/contentTypes";
import { gameState } from "../core/state";
import { navigation } from "../core/navigation";
import { pickEvent, EventContext, applyAutoResolve } from "./eventSystem";
import { startCombat, startScaledCombat } from "./combatSystem";
import { computePirateChance } from "./riskSystem";
import { maybeSpawnMarketEvent } from "./economySystem";
import { advanceDay } from "./timeSystem";
import { markRiskSeen } from "./intelSystem";

declare global {
  interface Window {
    travelToSystem: (id: string) => void;
  }
}

window.travelToSystem = (id: string) => {
  travelTo(id);
};

function findSystem(id: string): SystemDef | null {
  if (!content) return null;
  return content.systems.find((s) => s.id === id) ?? null;
}

export function getCurrentSystem(): SystemDef | null {
  return findSystem(gameState.location.systemId);
}

export function getNeighbors(): SystemDef[] {
  const current = getCurrentSystem();
  if (!current) return [];

  return current.neighbors
    .map((id) => findSystem(id))
    .filter((s): s is SystemDef => s !== null);
}

interface RouteProfile {
  travelTime: number;
  fuelCost: number;
  hazardChance: number;
  routeType: "trade_lane" | "wild_jump" | "standard";
}

function computeRouteProfile(from: SystemDef, to: SystemDef): RouteProfile {
  const isTradeLane =
    to.tags.includes("trade_lane") ||
    to.tags.includes("checkpoint") ||
    from.tags.includes("trade_lane") ||
    from.tags.includes("checkpoint");
  const isWild =
    to.tags.includes("frontier") ||
    to.tags.includes("mining_belt") ||
    to.tags.includes("anomaly") ||
    from.tags.includes("frontier") ||
    from.tags.includes("mining_belt");

  let travelTime = isTradeLane ? 1 : 2;
  if (to.tags.includes("mining_belt") || to.tags.includes("frontier")) {
    travelTime += 1;
  }
  if (to.tags.includes("anomaly")) {
    travelTime += 1;
  }
  travelTime = Math.min(3, Math.max(1, travelTime));

  let hazardChance: number;
  switch (to.security) {
    case "high":
      hazardChance = 0.25;
      break;
    case "medium":
      hazardChance = 0.4;
      break;
    default:
      hazardChance = 0.6;
      break;
  }

  if (isTradeLane) {
    hazardChance *= 0.7;
  }
  if (isWild) {
    hazardChance = Math.min(1, hazardChance + 0.15);
  }
  if (to.tags.includes("restricted")) {
    hazardChance -= 0.05;
  }

  hazardChance = Math.min(0.95, Math.max(0.1, hazardChance));

  return {
    travelTime,
    fuelCost: travelTime,
    hazardChance,
    routeType: isTradeLane ? "trade_lane" : isWild ? "wild_jump" : "standard"
  };
}

export function getRouteProfile(targetSystemId: string): RouteProfile | null {
  const current = getCurrentSystem();
  if (!current) return null;
  const target = findSystem(targetSystemId);
  if (!target) return null;
  return computeRouteProfile(current, target);
}

export function travelTo(targetSystemId: string): void {
  const current = getCurrentSystem();
  if (!content || !current) return;

  if (!current.neighbors.includes(targetSystemId)) {
    console.warn(`System ${targetSystemId} is not a neighbor of ${current.id}`);
    return;
  }

  const target = findSystem(targetSystemId);
  if (!target) return;

  const profile = computeRouteProfile(current, target);
  if (gameState.ship.fuel < profile.fuelCost) {
    console.warn("Not enough fuel to travel.");
    return;
  }

  gameState.ship.fuel -= profile.fuelCost;
  gameState.location.systemId = target.id;
  gameState.location.docked = true;
  gameState.time.turn += profile.travelTime;
  maybeSpawnMarketEvent(target.id);
  advanceDay(gameState);
  markRiskSeen(gameState, target.id);

  const arrivalMessage = `Arrived at ${target.name} after a ${profile.routeType.replace("_", " ")} (${profile.travelTime} turn${profile.travelTime === 1 ? "" : "s"}).`;

  if (maybeTriggerPirateTravel(target.id)) {
    return;
  }

  if (maybeTriggerTravelEvent(current, target, profile, arrivalMessage)) {
    return;
  }

  navigation.go("main", { message: arrivalMessage });
}

function maybeTriggerTravelEvent(
  from: SystemDef,
  to: SystemDef,
  profile: RouteProfile,
  arrivalMessage: string
): boolean {
  const context: EventContext = {
    context: "travel",
    from,
    to,
    hazardChance: profile.hazardChance,
    routeType: profile.routeType,
    travelTime: profile.travelTime
  };

  const ev = pickEvent(context);
  if (!ev) {
    navigation.go("main", { message: `${arrivalMessage} — Uneventful transit.` });
    return true;
  }

  // Always surface mining events so the mining UI/session can start,
  // even if they lack explicit choices.
  if (ev.type === "mining") {
    navigation.go("event", { eventId: ev.id });
    return true;
  }

  if (!ev.choices || ev.choices.length === 0) {
    return resolveAutoEvent(ev, arrivalMessage);
  }

  navigation.go("event", { eventId: ev.id });
  return true;
}

function maybeTriggerPirateTravel(targetSystemId: string): boolean {
  const target = findSystem(targetSystemId);
  if (!target) return false;
  const chance = computePirateChance({
    systemId: targetSystemId,
    state: gameState,
    sessionFactor: 1
  });
  if (Math.random() <= chance) {
    gameState.notifications.push(`Pirates intercept you near ${target.name}!`);
    startScaledCombat(targetSystemId);
    return true;
  }
  return false;
}

function resolveAutoEvent(ev: GameEvent, arrivalMessage: string): boolean {
  const result = applyAutoResolve(ev);

  if (result.triggerCombat?.enemyId) {
    startCombat(result.triggerCombat.enemyId);
    return true;
  }

  navigation.go("main", {
    message: `${arrivalMessage} — ${ev.name || "Event"} resolved automatically.`
  });
  return true;
}
