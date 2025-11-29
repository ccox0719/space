// systems/travelSystem.ts

import { content } from "../core/engine";
import type { SystemDef, GameEvent, SystemNeighbor, LaneType } from "../core/contentTypes";
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
import { getTradeStrategyEffects } from "./tradeStrategySystem";
import { getMaintenanceModifier } from "./maintenanceSystem";
import { awardXp, isPerkUnlocked } from "./perkManager";

declare global {
  interface Window {
    travelToSystem: (id: string) => void;
  }
}

window.travelToSystem = (id: string) => {
  travelTo(id);
};

function getSystemsMap(): Record<string, SystemDef> | null {
  if (!content) return null;
  return content.systemsById;
}

function findSystem(id: string): SystemDef | null {
  const systems = getSystemsMap();
  return systems ? systems[id] ?? null : null;
}

function getNeighborRoute(from: SystemDef, targetId: string): SystemNeighbor | null {
  return from.neighbors.find((neighbor) => neighbor.id === targetId) ?? null;
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

export interface RouteProfile {
  travelTime: number;
  fuelCost: number;
  hazardChance: number;
  hazardMitigation?: number;
  routeType: "trade_lane" | "wild_jump" | "standard";
  laneType: LaneType;
  distance: number;
}

export interface NeighborRoute {
  system: SystemDef;
  route: SystemNeighbor;
  profile: RouteProfile;
}

export function getNeighbors(): NeighborRoute[] {
  const current = getCurrentSystem();
  if (!current) return [];
  const systems = getSystemsMap();
  if (!systems) return [];

  return current.neighbors
    .map((route) => {
      const target = systems[route.id];
      if (!target) return null;
      return {
        system: target,
        route,
        profile: computeRouteProfile(current, target, route)
      };
    })
    .filter((entry): entry is NeighborRoute => entry !== null);
}

function computeRouteProfile(from: SystemDef, to: SystemDef, route: SystemNeighbor): RouteProfile {
  const passive = getPassiveEffects();
  const averageDanger = (from.baseDanger + to.baseDanger) / 2;
  const regionModifiers: Record<string, number> = {
    core: -0.04,
    border: 0,
    fringe: 0.08,
    pirate: 0.14,
    wild: 0.12
  };
  const laneFuelFactor = route.laneType === "core_lane" ? 0.9 : route.laneType === "frontier_lane" ? 1.05 : 1.3;
  const laneTimeFactor = route.laneType === "core_lane" ? 0.85 : route.laneType === "frontier_lane" ? 1 : 1.25;
  const laneHazardBonus = route.laneType === "core_lane" ? -0.02 : route.laneType === "frontier_lane" ? 0.05 : 0.12;
  const regionModifier = (regionModifiers[from.region] ?? 0) + (regionModifiers[to.region] ?? 0);

  const travelTime = Math.max(
    1,
    Math.round(route.distance * laneTimeFactor + Math.max(0, regionModifier) * 2)
  );

  const hazardBase = clamp(
    0.1 * route.distance +
      averageDanger * 0.12 +
      laneHazardBonus +
      regionModifier +
      (route.laneType === "wildspace" ? 0.05 : 0),
    0.1,
    0.95
  );

  const hazardBeforePassive = Math.min(0.95, Math.max(0.1, hazardBase));
  const hazardChance = Math.max(0, hazardBeforePassive - Math.max(0, passive.hazardDetectionBonus ?? 0));
  const fuelBase = Math.max(1, Math.round(route.distance * laneFuelFactor * (1 + averageDanger * 0.06)));
  const fuelCost = Math.max(
    1,
    Math.round(fuelBase * Math.max(0.1, passive.fuelCostMultiplier ?? 1))
  );

  const routeType =
    route.laneType === "core_lane"
      ? "trade_lane"
      : route.laneType === "wildspace"
      ? "wild_jump"
      : "standard";

  return {
    travelTime,
    fuelCost,
    hazardChance,
    hazardMitigation: Math.max(0, hazardBeforePassive - hazardChance),
    routeType,
    laneType: route.laneType,
    distance: route.distance
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
    base += 0.08;
  }
  if (system.tags.includes("checkpoint") || system.tags.includes("trade_lane")) {
    base += 0.05;
  }
  if (routeType === "trade_lane") {
    base += 0.06;
  }

  const severity = 1 + Math.min(1.0, summary.illegalUnits * 0.06 + summary.restrictedUnits * 0.025);
  const scanMultiplier = Math.max(0, passive.scanDetectionMultiplier ?? 1);
  const tolerance = Math.max(0.5, passive.illegalTolerance ?? 1);
  const baseChance = clamp(base * severity * scanMultiplier / tolerance, 0, 0.95);
  const { detectionReduction } = getTradeStrategyEffects();
  return Math.max(0, baseChance - detectionReduction);
}

function maybeRunContrabandInspection(system: SystemDef, profile: RouteProfile): boolean {
  const summary = getContrabandSummary(system);
  if (!summary) return false;
  const passive = getPassiveEffects();
  const detectionChance = computeScanDetectionChance(summary, system, profile.routeType, passive);
  gameState.notifications.push(
    `Warning: checkpoint scan imminent (${Math.round(detectionChance * 100)}% detection chance).`
  );
  if (Math.random() > detectionChance) {
    return false;
  }

  const cargo = gameState.ship.cargo || {};
  let seizedUnits = 0;
  for (const [commodityId, qty] of Object.entries(cargo)) {
    if (!qty) continue;
    const commodity = getCommodityById(commodityId);
    if (!commodity) continue;
    if (commodity.legalStatus !== "illegal") continue;
    seizedUnits += qty;
    cargo[commodityId] = 0;
  }
  gameState.ship.cargo = cargo;

    const fightChoice =
      typeof window !== "undefined" &&
      window.confirm("Contraband detected. Fight the authorities to keep your haul?");
    if (fightChoice) {
      startCombat("navy_interceptor", {
        returnScreen: "travel",
        returnParams: { message: "You chose to fight the checkpoint." }
      });
      return true;
    }

    const baseFine = Math.max(25, Math.round(summary.estimatedValue * 0.35));
    const bonusFine = (summary.illegalUnits || 0) * 15 + (summary.restrictedUnits || 0) * 8;
    const fine = baseFine + bonusFine;
    const { fineDiscount } = getTradeStrategyEffects();
    const discount = Math.round(fine * fineDiscount);
    const finalFine = Math.max(0, fine - discount);
    gameState.player.credits = Math.max(0, gameState.player.credits - finalFine);
    const wantedGain = 3 + Math.min(12, Math.round(summary.illegalUnits * 0.5 + summary.restrictedUnits * 0.25));
    const wantedReduction = Math.round(wantedGain * fineDiscount * 0.6);
    const finalWanted = Math.max(0, wantedGain - wantedReduction);
    adjustWanted(finalWanted);

    const restrictedNote =
      summary.restrictedUnits > 0 ? ` (restricted goods fined, not seized)` : "";
    gameState.notifications.push(
      `Checkpoint scans flag contraband. Seized ${seizedUnits} illegal units, fined ${finalFine} credits${restrictedNote}, wanted +${finalWanted}.`
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
  const route = getNeighborRoute(current, targetSystemId);
  if (!route) return null;
  const target = findSystem(targetSystemId);
  if (!target) return null;
  return computeRouteProfile(current, target, route);
}

export function travelTo(targetSystemId: string): void {
  const current = getCurrentSystem();
  if (!content || !current) return;

  const route = getNeighborRoute(current, targetSystemId);
  if (!route) {
    const msg = `No direct route from ${current.name} to ${targetSystemId}.`;
    console.warn(msg);
    gameState.notifications.push(msg);
    navigation.go("main", { message: msg });
    return;
  }

  const target = findSystem(targetSystemId);
  if (!target) {
    const msg = `Destination ${targetSystemId} is unknown.`;
    console.warn(msg);
    gameState.notifications.push(msg);
    navigation.go("main", { message: msg });
    return;
  }

  const profile = computeRouteProfile(current, target, route);
  const fuelMultiplier = Math.max(0, devTune.fuelCostMultiplier ?? 1);
  const controlHazardReduction = isPerkUnlocked("control_t3_hazard_mapping") ? 0.03 : 0;
  const controlFuelFactor = isPerkUnlocked("control_t3_hazard_mapping") ? 0.95 : 1;
  const fuelCost = Math.max(0, Math.round(profile.fuelCost * fuelMultiplier * controlFuelFactor));
  const riskScale = Math.max(0, Math.min(3, (devTune.travelRiskScaling ?? 100) / 100));
  const combatTune = getCombatTune();
  const dangerMult = Math.max(0, combatTune.globalDangerMultiplier ?? 1);
  const scaledHazard = Math.min(
    0.95,
    Math.max(
      0,
      profile.hazardChance * riskScale * dangerMult - controlHazardReduction
    )
  );
  const scaledProfile: RouteProfile = {
    ...profile,
    fuelCost,
    hazardChance: scaledHazard
  };

  const maintenance = getMaintenanceModifier(gameState);
  const requiredFuel = Math.ceil(scaledProfile.fuelCost * maintenance.fuel);
  if (gameState.ship.fuel < requiredFuel) {
    console.warn("Not enough fuel to travel.");
    return;
  }

  gameState.ship.fuel -= requiredFuel;
    gameState.location.systemId = target.id;
    gameState.lastMiningSystemId = null;
    gameState.location.docked = true;
  navigation.advanceActiveRoute(target.id);
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

  const travelXp = Math.max(
    5,
    Math.round(
      profile.distance * 2 +
        scaledProfile.hazardChance * 75 +
        (scaledProfile.routeType === "wild_jump" ? 10 : 0)
    )
  );
  awardXp(travelXp, "travel");

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
  const { detectionReduction, fineDiscount } = getTradeStrategyEffects();
  const contrabandPressure = contraband ? 1 + Math.min(1.2, contraband.totalUnits * 0.02) : 1;
  const adjustedPressure = Math.max(0.6, contrabandPressure * Math.max(0, 1 - fineDiscount * 0.8));
  const scanMod = Math.max(0, passive.scanDetectionMultiplier ?? 1) / Math.max(0.5, passive.illegalTolerance ?? 1);
  const rawChance = base * encounterScale * securityMod * adjustedPressure * scanMod;
  const chance = Math.min(1, Math.max(0, rawChance * Math.max(0, 1 - detectionReduction * 0.6)));
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
  const extraMiningTags = ["wildspace", "anomaly", "mining"];
  if (extraMiningTags.some((tag) => tags.has(tag))) {
    push("mining_fragment_field");
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

  const MINING_BASE_CHANCE = 0.18;
  if (
    Math.random() < MINING_BASE_CHANCE &&
    !options.includes("mining_fragment_field")
  ) {
    push("mining_fragment_field");
  }
  if (!options.length) return null;
  return options[Math.floor(Math.random() * options.length)];
}
