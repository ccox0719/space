import { gameState } from "../core/state";
import type { GameState } from "../core/state";
import type { SystemDef, EventChoice, GameEvent } from "../core/contentTypes";
import { acceptMission, tickMissionTimers, getActiveContracts } from "./missionSystem";
import { adjustReputationBatch } from "./reputationSystem";
import { applyTemporaryMarketModifier, tickMarket } from "./economySystem";
import { content } from "../core/engine";

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
  events = data;
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

  const addCredits = (amount: number) => {
    gameState.player.credits += amount;
    if (gameState.player.credits < 0) {
      gameState.player.credits = 0;
    }
  };

  if (outcomes.giveCredits) {
    const min = outcomes.giveCredits.min ?? 0;
    const max = outcomes.giveCredits.max ?? min;
    const amount = randomInRange(min, max);
    addCredits(amount);
    gameState.notifications.push(`Received ${amount} credits.`);
  }

  if (typeof outcomes.creditsDelta === "number") {
    addCredits(outcomes.creditsDelta);
  }

  if (typeof outcomes.fuelDelta === "number") {
    const capacity = gameState.ship.maxFuel;
    gameState.ship.fuel = Math.max(
      0,
      Math.min(capacity, gameState.ship.fuel + outcomes.fuelDelta)
    );
  }

  if (typeof outcomes.turnDelta === "number") {
    gameState.time.turn += outcomes.turnDelta;
    tickMissionTimers();
    tickMarket(outcomes.turnDelta);
  }

  if (outcomes.cargoGain) {
    applyCargoDelta(outcomes.cargoGain, 1);
  }

  if (outcomes.cargoLoss) {
    applyCargoDelta(outcomes.cargoLoss, -1);
  }

  if (outcomes.giveCommodity) {
    const amount = randomInRange(
      outcomes.giveCommodity.min,
      outcomes.giveCommodity.max
    );
    addCargoWithCapacity(outcomes.giveCommodity.id, amount);
    gameState.notifications.push(`Collected ${amount} ${outcomes.giveCommodity.id}.`);
  }

  if (outcomes.giveWeapon) {
    gameState.inventory.weapons.push(outcomes.giveWeapon);
    gameState.notifications.push(`Acquired weapon: ${outcomes.giveWeapon}.`);
  }

  if (outcomes.damageShip) {
    const min = outcomes.damageShip.min ?? 0;
    const max = outcomes.damageShip.max ?? min;
    const damage = randomInRange(min, max);
    gameState.ship.hp = Math.max(0, gameState.ship.hp - damage);
    gameState.notifications.push(`Ship took ${damage} damage.`);
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

  if (auto.mining) {
    const qty = randomInRange(auto.mining.quantity.min, auto.mining.quantity.max);
    addCargoWithCapacity(auto.mining.commodityId, qty);
    gameState.notifications.push(
      `Mining yield: ${qty} ${auto.mining.commodityId} (${auto.mining.grade ?? "standard"}).`
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

  // Placeholder: a small chance to spawn local market shifts.
  const roll = Math.random();
  if (roll < 0.05 && state.location?.systemId) {
    const commodity = content?.commodities?.[Math.floor(Math.random() * (content?.commodities.length || 1))];
    if (commodity) {
      const systemId = state.location.systemId;
      const duration = 2;
      applyTemporaryMarketModifier(commodity.id, 1.1, duration);
      state.marketState.activeEvents.push({
        systemId,
        commodityId: commodity.id,
        multiplier: 1.15,
        expiresAtDay: today + duration,
        expiresAtTurn: state.time.turn + duration * 2,
        label: `${commodity.name} surge`
      });
    }
  }
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
