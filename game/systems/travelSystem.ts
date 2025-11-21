// systems/travelSystem.ts

import { content } from "../core/engine";
import type { SystemDef, GameEvent } from "../core/contentTypes";
import {
  devTune,
  gameState,
  scaleTurnDelta,
  recordJump,
  getCombatTune
} from "../core/state";
import { navigation } from "../core/navigation";
import { pickEvent, EventContext, applyAutoResolve, getEventById } from "./eventSystem";
import { startCombat, startScaledCombat } from "./combatSystem";
import { computePirateChance } from "./riskSystem";
import { maybeSpawnMarketEvent } from "./economySystem";
import { advanceDay } from "./timeSystem";
import { markRiskSeen } from "./intelSystem";
import { checkContractsOnArrival } from "./missionSystem";

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

let encountersToday = 0;
let encounterDay = 1;

function resetEncounterCounter(currentDay: number) {
  if (currentDay !== encounterDay) {
    encounterDay = currentDay;
    encountersToday = 0;
  }
}

function canStartEncounter(maxPerDay: number): boolean {
  if (maxPerDay <= 0) return false;
  return encountersToday < maxPerDay;
}

function markEncounterStarted() {
  encountersToday += 1;
}

function logEncounterDebug(message: string) {
  if (getCombatTune().showEncounterDebug) {
    gameState.notifications.push(`Encounter debug: ${message}`);
  }
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
  const fuelMultiplier = Math.max(0, devTune.fuelCostMultiplier ?? 1);
  const fuelCost = Math.max(0, Math.round(profile.fuelCost * fuelMultiplier));
  const riskScale = Math.max(0, Math.min(3, (devTune.travelRiskScaling ?? 100) / 100));
  const combatTune = getCombatTune();
  const dangerMult = Math.max(0, combatTune.globalDangerMultiplier ?? 1);
  const scaledHazard = Math.min(
    0.95,
    Math.max(0, profile.hazardChance * riskScale * dangerMult)
  );
  const scaledProfile: RouteProfile = {
    ...profile,
    fuelCost,
    hazardChance: scaledHazard
  };

  if (gameState.ship.fuel < scaledProfile.fuelCost) {
    console.warn("Not enough fuel to travel.");
    return;
  }

  gameState.ship.fuel -= scaledProfile.fuelCost;
  gameState.location.systemId = target.id;
  gameState.location.docked = true;
  const travelTurns = scaleTurnDelta(profile.travelTime);
  gameState.time.turn += travelTurns;
  maybeSpawnMarketEvent(target.id);
  advanceDay(gameState);
  resetEncounterCounter(gameState.time.day);
  markRiskSeen(gameState, target.id);
  recordJump();
  const contractCheck = checkContractsOnArrival(gameState, target.id);
  if (contractCheck.completed.length) {
    console.log(
      `Arrived at ${target.id}: checked ${contractCheck.checked} contracts, completed ${contractCheck.completed.join(
        ", "
      )}.`
    );
  }

  const travelTurnsDisplay = Number.isInteger(travelTurns) ? travelTurns.toFixed(0) : travelTurns.toFixed(2);
  const turnLabel = Math.abs(travelTurns - 1) < 0.01 ? "" : "s";
  const arrivalMessage = `Arrived at ${target.name} after a ${scaledProfile.routeType.replace(
    "_",
    " "
  )} (${travelTurnsDisplay} turn${turnLabel}).`;

  if (maybeTriggerPirateTravel(target)) {
    return;
  }

  if (maybeTriggerNavyIntercept(target)) {
    return;
  }

  if (maybeTriggerTravelEvent(current, target, scaledProfile, arrivalMessage)) {
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
  const combatTune = getCombatTune();
  const encounterScale = Math.max(0, (combatTune.encounterChancePerJump ?? 100) / 100);
  const context: EventContext = {
    context: "travel",
    from,
    to,
    hazardChance: Math.min(1, profile.hazardChance * encounterScale),
    routeType: profile.routeType,
    travelTime: profile.travelTime
  };

  const ev = getTaggedTravelEvent(to) ?? pickEvent(context);
  if (!ev) {
    navigation.go("main", { message: `${arrivalMessage} — Uneventful transit.` });
    return true;
  }
  logEncounterDebug(`Travel event triggered: ${ev.name || ev.id || "unknown"}`);

  // Always surface mining events so the mining UI/session can start,
  // even if they lack explicit choices.
  if (ev.type === "mining") {
    logEncounterDebug(`Mining event surfaced: ${ev.id}`);
    navigation.go("event", { eventId: ev.id });
    return true;
  }

  if (!ev.choices || ev.choices.length === 0) {
    logEncounterDebug(`Auto-resolving event: ${ev.name || ev.id || "unknown"}`);
    return resolveAutoEvent(ev, arrivalMessage);
  }

  navigation.go("event", { eventId: ev.id });
  return true;
}

function maybeTriggerPirateTravel(target: SystemDef): boolean {
  const combatTune = getCombatTune();
  const maxPerDay = Math.max(0, combatTune.maxEncountersPerDay ?? 0);
  if (!canStartEncounter(maxPerDay)) {
    return false;
  }
  const chance = computePirateChance({
    systemId: target.id,
    state: gameState,
    sessionFactor: 1
  });
  if (Math.random() <= chance) {
    markEncounterStarted();
    const message = `Pirates intercept you near ${target.name}!`;
    gameState.notifications.push(message);
    logEncounterDebug(`Pirate encounter triggered near ${target.name} (chance ${chance.toFixed(3)})`);
    startScaledCombat(target.id);
    return true;
  }
  return false;
}

function maybeTriggerNavyIntercept(target: SystemDef): boolean {
  const combatTune = getCombatTune();
  const maxPerDay = Math.max(0, combatTune.maxEncountersPerDay ?? 0);
  if (!canStartEncounter(maxPerDay)) {
    return false;
  }
  const base = Math.max(0, Math.min(1, (combatTune.navyEncounterRateBase ?? 0) / 100));
  if (base <= 0) return false;
  const encounterScale = Math.max(0, (combatTune.encounterChancePerJump ?? 100) / 100);
  const securityMod = target.security === "high" ? 1.15 : target.security === "low" ? 0.65 : 1;
  const chance = Math.min(1, base * encounterScale * securityMod);
  if (Math.random() <= chance) {
    markEncounterStarted();
    const message = `Patrol intercepts you near ${target.name}!`;
    gameState.notifications.push(message);
    logEncounterDebug(`Patrol encounter triggered near ${target.name} (chance ${chance.toFixed(3)})`);
    startCombat("navy_interceptor");
    return true;
  }
  return false;
}

function resolveAutoEvent(ev: GameEvent, arrivalMessage: string): boolean {
  const result = applyAutoResolve(ev);

  if (result.triggerCombat?.enemyId) {
    const combatTune = getCombatTune();
    const maxPerDay = Math.max(0, combatTune.maxEncountersPerDay ?? 0);
    if (!canStartEncounter(maxPerDay)) {
      navigation.go("main", { message: `${arrivalMessage} — Encounter skipped (cap reached).` });
      return true;
    }
    markEncounterStarted();
    const msg = `Event auto-resolved into combat (${result.triggerCombat.enemyId}).`;
    logEncounterDebug(msg);
    startCombat(result.triggerCombat.enemyId);
    return true;
  }

  navigation.go("main", {
    message: `${arrivalMessage} — ${ev.name || "Event"} resolved automatically.`
  });
  return true;
}

const MINING_EVENTS_BY_SYSTEM: Record<string, string> = {
  dawn_reach: "mining_fragment_field",
  aurora_belt: "mining_rich_vein"
};

function getTaggedTravelEvent(system: SystemDef): GameEvent | null {
  const eventId = getTaggedEventId(system);
  if (!eventId) return null;
  return getEventById(eventId) ?? null;
}

function getTaggedEventId(system: SystemDef): string | null {
  const options: string[] = [];
  const tags = new Set(system.tags || []);
  const push = (id: string) => {
    if (!options.includes(id)) {
      options.push(id);
    }
  };

  if (tags.has("frontier") || tags.has("pirate_stronghold") || tags.has("black_market")) {
    push("pirate_ambush");
  }
  if (tags.has("mining_belt")) {
    push(MINING_EVENTS_BY_SYSTEM[system.id] ?? "mining_fragment_field");
  }
  if (tags.has("checkpoint") || tags.has("trade_lane") || tags.has("trade_hub")) {
    push("navy_inspection");
  }
  if (
    tags.has("restricted") ||
    tags.has("religious") ||
    system.faction === "unity_church"
  ) {
    push("unity_checkpoint");
  }

  if (!options.length) return null;
  return options[Math.floor(Math.random() * options.length)];
}
