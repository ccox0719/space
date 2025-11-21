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
import { adjustWanted } from "./wantedSystem";
import { getBuySellPrices, getCommodityById } from "./economySystem";
import { getPassiveEffects } from "../core/passives";

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
  hazardMitigation?: number;
  routeType: "trade_lane" | "wild_jump" | "standard";
}

function computeRouteProfile(from: SystemDef, to: SystemDef): RouteProfile {
  const passive = getPassiveEffects();
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
  const hazardBeforePassive = hazardChance;

  hazardChance = Math.max(0, hazardChance - Math.max(0, passive.hazardDetectionBonus ?? 0));
  return {
    travelTime,
    fuelCost: Math.max(1, Math.round(travelTime * Math.max(0.1, passive.fuelCostMultiplier ?? 1))),
    hazardChance,
    hazardMitigation: Math.max(0, hazardBeforePassive - hazardChance),
    routeType: isTradeLane ? "trade_lane" : isWild ? "wild_jump" : "standard"
  };
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

interface ContrabandSummary {
  illegalUnits: number;
  restrictedUnits: number;
  totalUnits: number;
  estimatedValue: number;
}

function getContrabandSummary(system: SystemDef): ContrabandSummary | null {
  const cargo = gameState.ship.cargo || {};
  let illegalUnits = 0;
  let restrictedUnits = 0;
  let estimatedValue = 0;
  for (const [commodityId, qty] of Object.entries(cargo)) {
    if (!qty) continue;
    const commodity = getCommodityById(commodityId);
    if (!commodity) continue;
    if (commodity.legalStatus !== "illegal" && commodity.legalStatus !== "restricted") {
      continue;
    }
    const quote = getBuySellPrices(system.id, commodityId);
    estimatedValue += quote.sell * qty;
    if (commodity.legalStatus === "illegal") {
      illegalUnits += qty;
    } else {
      restrictedUnits += qty;
    }
  }
  const totalUnits = illegalUnits + restrictedUnits;
  if (totalUnits <= 0) return null;
  return { illegalUnits, restrictedUnits, totalUnits, estimatedValue };
}

function computeScanDetectionChance(
  summary: ContrabandSummary,
  system: SystemDef,
  routeType: RouteProfile["routeType"],
  passive = getPassiveEffects()
): number {
  let base =
    system.security === "high" ? 0.35 : system.security === "low" ? 0.15 : 0.25;
  if (system.marketProfile?.blackMarket) {
    base *= 0.65;
  }
  if (system.tags.includes("restricted")) {
    base += 0.12;
  }
  if (system.tags.includes("checkpoint") || system.tags.includes("trade_lane")) {
    base += 0.08;
  }
  if (routeType === "trade_lane") {
    base += 0.06;
  }

  const severity = 1 + Math.min(1.5, summary.illegalUnits * 0.1 + summary.restrictedUnits * 0.04);
  const scanMultiplier = Math.max(0, passive.scanDetectionMultiplier ?? 1);
  const tolerance = Math.max(0.5, passive.illegalTolerance ?? 1);
  return clamp(base * severity * scanMultiplier / tolerance, 0, 0.95);
}

function maybeRunContrabandInspection(system: SystemDef, profile: RouteProfile): boolean {
  const summary = getContrabandSummary(system);
  if (!summary) return false;
  const passive = getPassiveEffects();
  const detectionChance = computeScanDetectionChance(summary, system, profile.routeType, passive);
  if (Math.random() > detectionChance) {
    return false;
  }

  const cargo = gameState.ship.cargo || {};
  let seizedUnits = 0;
  for (const [commodityId, qty] of Object.entries(cargo)) {
    if (!qty) continue;
    const commodity = getCommodityById(commodityId);
    if (!commodity) continue;
    if (commodity.legalStatus !== "illegal" && commodity.legalStatus !== "restricted") {
      continue;
    }
    seizedUnits += qty;
    cargo[commodityId] = 0;
  }
  gameState.ship.cargo = cargo;

  const baseFine = Math.max(25, Math.round(summary.estimatedValue * 0.35));
  const bonusFine = (summary.illegalUnits || 0) * 15 + (summary.restrictedUnits || 0) * 8;
  const fine = baseFine + bonusFine;
  gameState.player.credits = Math.max(
    0,
    gameState.player.credits - fine
  );
  const wantedGain = 3 + Math.min(12, Math.round(summary.illegalUnits * 0.5 + summary.restrictedUnits * 0.25));
  adjustWanted(wantedGain);

  gameState.notifications.push(
    `Checkpoint scans flag contraband. Seized ${seizedUnits} units, fined ${fine} credits, wanted +${wantedGain}.`
  );
  return true;
}

function logHazardMitigation(
  profile: RouteProfile,
  scaledHazard: number,
  riskScale: number,
  dangerMult: number
): void {
  const baseHazard =
    clamp((profile.hazardChance + (profile.hazardMitigation ?? 0)) * riskScale * dangerMult, 0, 0.95);
  const mitigated = clamp(scaledHazard, 0, 0.95);
  const reductionPct = Math.max(0, Math.round((baseHazard - mitigated) * 100));
  if (reductionPct > 0) {
    gameState.notifications.push(
      `Hazard scanners trimmed travel risk by ${reductionPct}% (current hazard ${(mitigated * 100).toFixed(0)}%).`
    );
  }
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

  logHazardMitigation(profile, scaledProfile.hazardChance, riskScale, dangerMult);
  const inspectionTriggered = maybeRunContrabandInspection(target, scaledProfile);
  if (inspectionTriggered) {
    logEncounterDebug("Contraband inspection triggered on arrival.");
  }

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
  const passive = getPassiveEffects();
  const contraband = getContrabandSummary(target);
  const contrabandPressure = contraband ? 1 + Math.min(1.2, contraband.totalUnits * 0.02) : 1;
  const scanMod = Math.max(0, passive.scanDetectionMultiplier ?? 1) / Math.max(0.5, passive.illegalTolerance ?? 1);
  const chance = Math.min(1, base * encounterScale * securityMod * contrabandPressure * scanMod);
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
