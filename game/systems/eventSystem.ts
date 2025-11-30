import {
  addCreditsEarned,
  devTune,
  ensurePlayerInventory,
  gameState,
  getCombatTune,
  scaleTurnDelta
} from "../core/state";
import { getPassiveEffects } from "../core/passives";
import { content } from "../core/engine";
import type { GameState } from "../core/state";
import type { SystemDef, EventChoice, GameEvent } from "../core/contentTypes";
import { acceptMission, tickMissionTimers, getActiveContracts } from "./missionSystem";
import { adjustReputationBatch } from "./reputationSystem";
import { applyTemporaryMarketModifier, tickMarket } from "./economySystem";
import { triggerGameOver } from "../core/gameFlow";

const EVENT_CACHE_KEY = "space-events-cache";

export interface EventContext {
  context: "travel" | string;
  from?: SystemDef;
  to?: SystemDef;
  hazardChance?: number;
  routeType?: string;
  travelTime?: number;
}

export interface ChoiceResolution {
  triggerCombat?: { enemyId: string; ambush?: boolean };
  message?: string;
}

let events: GameEvent[] = [];

export function setEvents(data: GameEvent[]): void {
  const persisted = loadPersistedEvents();
  events = mergeEvents(data, persisted);
  persistEvents(events);
}

export function getEvents(): GameEvent[] {
  return events;
}

export function getEventById(id: string): GameEvent | undefined {
  return events.find((e) => e.id === id);
}

export function pickEvent(context: EventContext): GameEvent | undefined {
  if (context.context !== "travel" || !context.to) return undefined;

  const hazard = Math.max(0, Math.min(1, context.hazardChance ?? 0.4));
  if (Math.random() > hazard) return undefined;
  const combatTune = getCombatTune();
  const frequencyWeight =
    Math.max(0, combatTune.nonPirateEventWeight ?? 1) *
    Math.max(0, getPassiveEffects().anomalyChance ?? 1);
  const frequencyChance = Math.min(
    1,
    Math.max(0, ((devTune.eventFrequency ?? 50) / 100) * frequencyWeight)
  );
  if (Math.random() > frequencyChance) return undefined;

  const weighted = events
    .map((ev) => ({ ev, weight: computeEventWeight(ev, context) }))
    .filter((entry) => entry.weight > 0);

  if (!weighted.length) return undefined;

  const total = weighted.reduce((sum, entry) => sum + entry.weight, 0);
  let roll = Math.random() * total;
  for (const entry of weighted) {
    roll -= entry.weight;
    if (roll <= 0) {
      return entry.ev;
    }
  }

  return weighted[0].ev;
}

export function applyConsequence(choice: EventChoice): ChoiceResolution {
  const outcomes = choice.outcomes;
  if (!outcomes) {
    return {};
  }

  const resolution: ChoiceResolution = {};
  const passive = getPassiveEffects();
  const rewardMultiplier =
    Math.max(0.1, Math.min(5, devTune.eventRewardMultiplier ?? 1)) *
    Math.max(0.1, passive.eventRewardMultiplier ?? 1);

  const addCredits = (amount: number) => {
    gameState.player.credits += amount;
    addCreditsEarned(amount);
    if (gameState.player.credits < 0) {
      gameState.player.credits = 0;
    }
  };

  if (outcomes.giveCredits) {
    const min = outcomes.giveCredits.min ?? 0;
    const max = outcomes.giveCredits.max ?? min;
    const amount = randomInRange(min, max);
    const scaledAmount = Math.round(amount * rewardMultiplier);
    addCredits(scaledAmount);
    gameState.notifications.push(`Received ${scaledAmount} credits.`);
  }

  if (typeof outcomes.creditsDelta === "number") {
    const delta = Math.round(outcomes.creditsDelta * rewardMultiplier);
    addCredits(delta);
  }

  if (typeof outcomes.fuelDelta === "number") {
    const capacity = gameState.ship.maxFuel;
    const fuelDelta =
      outcomes.fuelDelta > 0
        ? Math.max(0, Math.round(outcomes.fuelDelta * rewardMultiplier))
        : outcomes.fuelDelta;
    gameState.ship.fuel = Math.max(
      0,
      Math.min(capacity, gameState.ship.fuel + fuelDelta)
    );
  }

  if (typeof outcomes.turnDelta === "number") {
    const turnDelta = scaleTurnDelta(outcomes.turnDelta);
    gameState.time.turn += turnDelta;
    tickMissionTimers();
    tickMarket(turnDelta);
  }

  if (outcomes.cargoGain) {
    applyCargoDelta(
      scaleDelta(outcomes.cargoGain, rewardMultiplier, 1),
      1
    );
  }

  if (outcomes.cargoLoss) {
    applyCargoDelta(outcomes.cargoLoss, -1);
  }

  if (outcomes.giveCommodity) {
    const amount = randomInRange(
      outcomes.giveCommodity.min,
      outcomes.giveCommodity.max
    );
    const scaledAmount = Math.max(0, Math.round(amount * rewardMultiplier));
    addCargoWithCapacity(outcomes.giveCommodity.id, scaledAmount);
    if (scaledAmount > 0) {
      gameState.notifications.push(
        `Collected ${scaledAmount} ${outcomes.giveCommodity.id}.`
      );
    }
  }

  if (outcomes.giveWeapon) {
    const inventory = ensurePlayerInventory();
    inventory.weapons.push(outcomes.giveWeapon);
    gameState.notifications.push(`Acquired weapon: ${outcomes.giveWeapon}.`);
  }

  if (outcomes.damageShip) {
    const min = outcomes.damageShip.min ?? 0;
    const max = outcomes.damageShip.max ?? min;
    const damage = randomInRange(min, max);
    gameState.ship.hp = Math.max(0, gameState.ship.hp - damage);
    gameState.notifications.push(`Ship took ${damage} damage.`);
    if (gameState.ship.hp <= 0) {
      triggerGameOver("ship_destroyed", "Ship destroyed by event.");
      return resolution;
    }
  }

  if (outcomes.applyStatus) {
    gameState.notifications.push(
      `Status effect applied: ${JSON.stringify(outcomes.applyStatus)}.`
    );
  }

  if (typeof outcomes.spawnMissionId === "string") {
    const result = acceptMission(outcomes.spawnMissionId);
    if (result.success) {
      gameState.notifications.push(
        `New mission received: ${outcomes.spawnMissionId}`
      );
    }
  }

  if (typeof outcomes.flag === "string") {
    gameState.notifications.push(`Event flag: ${outcomes.flag}`);
  }

  if (outcomes.market) {
    const market = outcomes.market;
    const multiplier = Math.max(0, market.multiplier);
    const duration = Math.max(1, Math.floor(market.duration ?? 2));
    applyTemporaryMarketModifier(market.commodityId, multiplier, duration);
    const systemId = gameState.location?.systemId;
    const commodity =
      market.commodityId && content?.commodities
        ? content.commodities.find((c) => c.id === market.commodityId)
        : undefined;
    const label = `${commodity?.name || "Local goods"} ${
      multiplier >= 1 ? "surge" : "slip"
    }`;
    if (systemId && gameState.marketState) {
      gameState.marketState.activeEvents.push({
        systemId,
        commodityId: market.commodityId ?? null,
        multiplier,
        expiresAtDay: gameState.time.day + duration,
        expiresAtTurn: gameState.time.turn + duration * 2,
        label
      });
    }
    gameState.notifications.push(
      `Market shift in ${systemId ?? "this system"}: ${commodity?.name || "local goods"} x${multiplier.toFixed(
        2
      )} for ${duration} turns.`
    );
  }

  if (outcomes.modifyReputation) {
    adjustReputationBatch({
      [outcomes.modifyReputation.faction]: outcomes.modifyReputation.amount
    });
  }

  if (outcomes.triggerCombat?.enemyId) {
    resolution.triggerCombat = outcomes.triggerCombat;
  }

  return resolution;
}

export function applyAutoResolve(ev: GameEvent): ChoiceResolution {
  const res: ChoiceResolution = {};
  const auto = ev.autoResolve;
  if (!auto) return res;
  const rewardMultiplier =
    Math.max(0.1, Math.min(5, devTune.eventRewardMultiplier ?? 1)) *
    Math.max(0.1, getPassiveEffects().eventRewardMultiplier ?? 1);

  if (auto.mining) {
    const qty = randomInRange(auto.mining.quantity.min, auto.mining.quantity.max);
    const scaledQty = Math.max(0, Math.round(qty * rewardMultiplier));
    addCargoWithCapacity(auto.mining.commodityId, scaledQty);
    gameState.notifications.push(
      `Mining yield: ${scaledQty} ${auto.mining.commodityId} (${auto.mining.grade ?? "standard"}).`
    );
  }

  if (auto.anomaly?.effects?.fuelLoss) {
    const loss = randomInRange(
      (auto.anomaly.effects.fuelLoss as { min: number; max: number }).min,
      (auto.anomaly.effects.fuelLoss as { min: number; max: number }).max
    );
    const capacity = gameState.ship.maxFuel;
    gameState.ship.fuel = Math.max(0, Math.min(capacity, gameState.ship.fuel - loss));
    gameState.notifications.push(`Anomaly drained ${loss} fuel.`);
  }

  if (auto.exploration?.lootTable?.length) {
    const loot =
      auto.exploration.lootTable[
        Math.floor(Math.random() * auto.exploration.lootTable.length)
      ];
    addCargoWithCapacity(loot, 1);
    gameState.notifications.push(`Recovered loot: ${loot}.`);
  }

  if (auto.market?.temporaryPriceBoost) {
    gameState.notifications.push(
      `Market shift: ${auto.market.commodityId ?? "local goods"} prices boosted x${
        auto.market.temporaryPriceBoost
      } for ${auto.market.duration ?? 1} turns.`
    );
    applyTemporaryMarketModifier(
      auto.market.commodityId,
      auto.market.temporaryPriceBoost,
      auto.market.duration ?? 2
    );
  }

  if (auto.combat?.enemyId) {
    res.triggerCombat = { enemyId: auto.combat.enemyId, ambush: auto.combat.ambush };
  }

  return res;
}

export function tickWorldEvents(state: GameState): void {
  // Remove expired day-based events or temporary flags.
  const today = state.time.day;
  if (state.marketState?.activeEvents) {
    state.marketState.activeEvents = state.marketState.activeEvents.filter(
      (ev) => ev.expiresAtDay === undefined || today < ev.expiresAtDay
    );
  }

  const burstChance = Math.min(1, Math.max(0, (devTune.marketBurstChance ?? 5) / 100));
  const crashChance = Math.min(1, Math.max(0, (devTune.marketCrashChance ?? 5) / 100));
  if (state.location?.systemId) {
    const commodity = content?.commodities?.[Math.floor(Math.random() * (content?.commodities.length || 1))];
    if (commodity) {
      const systemId = state.location.systemId;
      const duration = 2 + Math.ceil(Math.random() * 2);
      if (Math.random() < burstChance) {
        const boost = 1.1 + Math.random() * 0.35;
        applyTemporaryMarketModifier(commodity.id, boost, duration);
        state.marketState.activeEvents.push({
          systemId,
          commodityId: commodity.id,
          multiplier: Math.max(0, boost),
          expiresAtDay: today + duration,
          expiresAtTurn: state.time.turn + duration * 2,
          label: `${commodity.name} surge`
        });
        state.notifications.push(
          `Market surge in ${systemId}: ${commodity.name} prices x${boost.toFixed(2)} for ${duration} turns.`
        );
      } else if (Math.random() < crashChance) {
        const slip = Math.max(0.5, 0.85 - Math.random() * 0.25);
        applyTemporaryMarketModifier(commodity.id, slip, duration);
        state.marketState.activeEvents.push({
          systemId,
          commodityId: commodity.id,
          multiplier: slip,
          expiresAtDay: today + duration,
          expiresAtTurn: state.time.turn + duration * 2,
          label: `${commodity.name} slip`
        });
        state.notifications.push(
          `Market slip in ${systemId}: ${commodity.name} prices x${slip.toFixed(2)} for ${duration} turns.`
        );
      }
    }
  }
}

export function persistCurrentEvents(): void {
  persistEvents(events);
}

export function clearEventCache(): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  window.localStorage.removeItem(EVENT_CACHE_KEY);
}

function mergeEvents(base: GameEvent[], overrides: GameEvent[] | null): GameEvent[] {
  if (!overrides?.length) return base;
  const map = new Map<string, GameEvent>();
  for (const entry of base) map.set(entry.id, entry);
  for (const entry of overrides) map.set(entry.id, entry);
  return Array.from(map.values());
}

function loadPersistedEvents(): GameEvent[] | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  const raw = window.localStorage.getItem(EVENT_CACHE_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
  } catch {
    // ignore corruption
  }
  return null;
}

function persistEvents(payload: GameEvent[]): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  window.localStorage.setItem(EVENT_CACHE_KEY, JSON.stringify(payload));
}

function applyCargoDelta(
  delta: Record<string, number>,
  direction: 1 | -1
): void {
  for (const [commodityId, qty] of Object.entries(delta)) {
    const current = gameState.ship.cargo[commodityId] ?? 0;
    const next = Math.max(0, current + qty * direction);
    gameState.ship.cargo[commodityId] = next;
  }
}

function scaleDelta(
  delta: Record<string, number>,
  multiplier: number,
  minUnit = 1
): Record<string, number> {
  const result: Record<string, number> = {};
  for (const [commodityId, qty] of Object.entries(delta)) {
    if (qty <= 0) {
      result[commodityId] = qty;
      continue;
    }
    const scaled = Math.max(minUnit, Math.round(qty * multiplier));
    result[commodityId] = scaled;
  }
  return result;
}

function addCargoWithCapacity(commodityId: string, qty: number): void {
  const current = gameState.ship.cargo[commodityId] ?? 0;
  const used = Object.values(gameState.ship.cargo).reduce((sum, v) => sum + v, 0);
  const free = Math.max(0, gameState.ship.cargoCapacity - used);
  const toAdd = Math.max(0, Math.min(qty, free));
  gameState.ship.cargo[commodityId] = current + toAdd;
  if (toAdd < qty) {
    gameState.notifications.push(`Cargo full: stored ${toAdd}/${qty} ${commodityId}.`);
  }
}

function randomInRange(min: number, max: number): number {
  const safeMin = Number.isFinite(min) ? min : 0;
  const safeMax = Number.isFinite(max) ? max : safeMin;
  const floor = Math.ceil(safeMin);
  const ceil = Math.floor(Math.max(floor, safeMax));
  if (ceil <= floor) {
    return floor;
  }
  return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
}

function collectSystemTags(context: EventContext): Set<string> {
  const tags = new Set<string>();
  (context.to?.tags || []).forEach((tag) => tags.add(tag));
  (context.from?.tags || []).forEach((tag) => tags.add(tag));
  return tags;
}

function hasTag(tagSet: Set<string>, target: string): boolean {
  return tagSet.has(target);
}

function computeEventWeight(event: GameEvent, context: EventContext): number {
  let weight = event.weight ?? 0;
  const tags = collectSystemTags(context);

  if (context.to?.eventWeights?.[event.id]) {
    weight += context.to.eventWeights[event.id];
  }

  if (event.systemModifiers?.onlyInSystemsWithTags) {
    const allowed = event.systemModifiers.onlyInSystemsWithTags.some((tag) =>
      tags.has(tag)
    );
    if (!allowed) {
      return 0;
    }
  }

  if (event.systemModifiers?.weightMultiplier) {
    weight *= event.systemModifiers.weightMultiplier;
  }

  if (event.tags.includes("danger") || event.type === "combat") {
    const dangerMult = Math.max(0.1, devTune.eventDangerMultiplier ?? 1);
    weight *= dangerMult;
  }

  if (context.routeType === "wild_jump" && event.tags.includes("combat")) {
    weight += 0.15;
  }

  if (context.routeType === "trade_lane" && event.tags.includes("inspection")) {
    weight += 0.25;
  }

  if (context.to?.tags.includes("mining_belt") && (event.type === "mining" || event.tags.includes("mining"))) {
    weight += 0.35;
  }

  if ((context.to?.tags.includes("restricted") || context.to?.faction === "unity_church") && event.tags.includes("inspection")) {
    weight += 0.2;
  }

  if (hasTag(tags, "frontier") && event.tags.includes("combat")) {
    weight += 0.2;
  }

  if (hasTag(tags, "black_market") && event.tags.includes("smuggling")) {
    weight += 0.25;
  }

  const travelContracts = getActiveContracts().filter(
    (c) => (c.requirements as { travel?: { systemId?: string } } | undefined)?.travel?.systemId ===
      context.to?.id
  );
  if (travelContracts.length && event.id === "smuggler_contact") {
    weight += 0.2 * travelContracts.length;
  }

  return Math.max(0, weight);
}
