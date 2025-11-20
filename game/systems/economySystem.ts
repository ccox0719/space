import { gameState } from "../core/state";
import type { GameState, MarketEvent, MarketIntelSnapshot } from "../core/state";
import { content, getSystemById } from "../core/engine";
import type { CommodityDef, SystemDef } from "../core/contentTypes";

const MARKET_GLOBAL_MODIFIER = "__global__";
const DEFAULT_SPREAD = { buyMultiplier: 1, sellMultiplier: 0.85 };
const TIER_PRICE_MODIFIERS: Record<string, number> = {
  basic: 0.9,
  standard: 1,
  strategic: 1.2,
  luxury: 1.35
};

export type MarketTrend = "high" | "low" | "stable";

export interface MarketPriceQuote {
  base: number;
  buy: number;
  sell: number;
  high: number;
  low: number;
  trend: MarketTrend;
}

function ensureCargo(): Record<string, number> {
  if (!gameState.ship.cargo) {
    gameState.ship.cargo = {};
  }
  return gameState.ship.cargo;
}

function getCargoLoad(): number {
  const cargo = ensureCargo();
  return Object.values(cargo).reduce((sum, qty) => sum + qty, 0);
}

export function getAllCommodities(): CommodityDef[] {
  return content?.commodities ?? [];
}

export function getCommodityById(id: string): CommodityDef | null {
  const commodities = getAllCommodities();
  return commodities.find((commodity) => commodity.id === id) ?? null;
}

function ensureMarketState(): NonNullable<GameState["marketState"]> {
  if (!gameState.marketState) {
    gameState.marketState = {
      temporaryModifiers: {},
      activeEvents: [],
      localAdjustments: {},
      priceIntel: {}
    };
  } else {
    gameState.marketState.temporaryModifiers = gameState.marketState.temporaryModifiers || {};
    gameState.marketState.activeEvents = gameState.marketState.activeEvents || [];
    gameState.marketState.localAdjustments = gameState.marketState.localAdjustments || {};
    gameState.marketState.priceIntel = gameState.marketState.priceIntel || {};
  }
  return gameState.marketState;
}

function touchPriceIntel(systemId: string): void {
  if (!gameState.intel) {
    gameState.intel = { systems: [] };
  }
  const entry =
    gameState.intel.systems.find((s) => s.systemId === systemId) ??
    (() => {
      const created = { systemId };
      gameState.intel.systems.push(created);
      return created;
    })();
  entry.lastPriceSeenDay = gameState.time.day;
}

function getTemporaryMarketMultiplier(commodityId: string): number {
  const state = ensureMarketState();
  let multiplier = 1;
  const global = state.temporaryModifiers[MARKET_GLOBAL_MODIFIER];
  if (global) {
    multiplier *= Math.max(0, global.multiplier);
  }
  const specific = state.temporaryModifiers[commodityId];
  if (specific) {
    multiplier *= Math.max(0, specific.multiplier);
  }
  return multiplier;
}

function determineTrend(current: number, reference: number): MarketTrend {
  const safeReference = reference > 0 ? reference : 1;
  const ratio = current / safeReference;
  if (ratio >= 1.15) return "high";
  if (ratio <= 0.85) return "low";
  return "stable";
}

function applyProfileModifiers(system: SystemDef, commodity: CommodityDef): number {
  const profile = system.marketProfile;
  if (!profile) return 1;
  let modifier = 1;
  const isImported = profile.imports?.includes(commodity.id);
  const isExported = profile.exports?.includes(commodity.id);
  if (isImported) modifier *= 1.2;
  if (isExported) modifier *= 0.85;
  if (commodity.legalStatus === "illegal") {
    modifier *= profile.blackMarket ? 1.1 : 1.25;
  } else if (profile.blackMarket) {
    modifier *= 0.95;
  }
  if (typeof profile.taxRate === "number") {
    modifier *= 1 + Math.max(0, profile.taxRate);
  }
  return modifier;
}

function computeBaseLocalPrice(system: SystemDef, commodity: CommodityDef): number {
  const base = Math.max(1, commodity.basePrice);
  const tierModifier = TIER_PRICE_MODIFIERS[commodity.tier ?? "standard"] ?? 1;
  const systemModifier = system.marketModifiers?.[commodity.id] ?? 1;
  const profileModifier = applyProfileModifiers(system, commodity);
  const volatility = Math.min(Math.max(commodity.volatility ?? 0.25, 0), 1);
  const volatilityBoost = 1 + volatility * 0.08;
  const temporary = getTemporaryMarketMultiplier(commodity.id);
  const eventMultiplier = getMarketEventMultiplier(system.id, commodity.id);
  const localDrift = getLocalAdjustment(system.id, commodity.id);
  const price =
    base *
    tierModifier *
    systemModifier *
    profileModifier *
    volatilityBoost *
    temporary *
    eventMultiplier *
    localDrift;
  return Math.max(1, Math.round(price));
}

export function getLocalPrice(systemId: string, commodityId: string): number {
  const quote = getBuySellPrices(systemId, commodityId);
  return quote.base;
}

export function getBuySellPrices(systemId: string, commodityId: string): MarketPriceQuote {
  const system = getSystemById(systemId);
  const commodity = getCommodityById(commodityId);
  if (!system || !commodity) {
    return {
      base: 0,
      buy: 0,
      sell: 0,
      high: 0,
      low: 0,
      trend: "stable"
    };
  }

  const basePrice = computeBaseLocalPrice(system, commodity);
  const spread = commodity.baseSpread ?? DEFAULT_SPREAD;
  const volatility = Math.min(Math.max(commodity.volatility ?? 0.25, 0), 1);
  const buy = Math.max(
    1,
    Math.round(basePrice * (spread.buyMultiplier ?? 1) * (1 + volatility * 0.05))
  );
  const sell = Math.max(
    1,
    Math.round(basePrice * (spread.sellMultiplier ?? 0.85) * Math.max(0.6, 1 - volatility * 0.05))
  );
  const high = Math.max(buy, sell, Math.round(basePrice * (1 + volatility * 0.1)));
  const low = Math.max(
    1,
    Math.min(
      buy,
      sell,
      Math.round(basePrice * Math.max(0.65, 1 - volatility * 0.2))
    )
  );
  const trend = determineTrend(basePrice, commodity.basePrice);

  touchPriceIntel(systemId);
  return { base: basePrice, buy, sell, high, low, trend };
}

export function applyTemporaryMarketModifier(
  commodityId: string | null | undefined,
  multiplier: number,
  duration: number = 2
): void {
  const state = ensureMarketState();
  const key = commodityId && commodityId.length ? commodityId : MARKET_GLOBAL_MODIFIER;
  state.temporaryModifiers[key] = {
    multiplier: Math.max(0, multiplier),
    remainingTurns: Math.max(1, Math.floor(duration))
  };
}

export function tickMarket(arg: GameState | number = 1): void {
  if (typeof arg === "number") {
    tickMarketByTurns(arg);
    return;
  }
  tickMarketByDay(arg ?? gameState);
}

function tickMarketByTurns(turns: number): void {
  if (turns <= 0) return;
  const state = ensureMarketState();
  const keys = Object.keys(state.temporaryModifiers);
  for (const key of keys) {
    const modifier = state.temporaryModifiers[key];
    modifier.remainingTurns -= turns;
    if (modifier.remainingTurns <= 0) {
      delete state.temporaryModifiers[key];
    }
  }

  const currentTurn = gameState.time.turn;
  state.activeEvents = state.activeEvents.filter((ev) => ev.expiresAtTurn > currentTurn);

  decayLocalAdjustments(state, 0.2 * turns);
}

function tickMarketByDay(state: GameState): void {
  const market = ensureMarketState();
  const systems = content?.systems ?? [];
  const commodities = content?.commodities ?? [];
  const day = state.time.day;

  for (const system of systems) {
    for (const commodity of commodities) {
      const current = getLocalAdjustment(system.id, commodity.id);
      const volatility = Math.min(Math.max(commodity.volatility ?? 0.25, 0), 1);
      const drift = (1 - current) * 0.1;
      const noise = (Math.random() - 0.5) * 0.1 * (0.5 + volatility);
      const next = clampMultiplier(current + drift + noise);
      if (!market.localAdjustments[system.id]) market.localAdjustments[system.id] = {};
      market.localAdjustments[system.id][commodity.id] = next;
    }
  }

  market.activeEvents = market.activeEvents.filter((ev) => {
    if (ev.expiresAtDay !== undefined && day >= ev.expiresAtDay) return false;
    if (ev.expiresAtTurn && ev.expiresAtTurn <= state.time.turn) return false;
    return true;
  });

  decayLocalAdjustments(market, 0.1);
}

export function getCargoCount(commodityId: string): number {
  const cargo = ensureCargo();
  return cargo[commodityId] ?? 0;
}

function getMarketEventMultiplier(systemId: string, commodityId: string): number {
  const state = ensureMarketState();
  return state.activeEvents
    .filter(
      (ev) =>
        (ev.expiresAtDay === undefined || gameState.time.day < ev.expiresAtDay) &&
        ev.expiresAtTurn > gameState.time.turn &&
        (!ev.systemId || ev.systemId === systemId) &&
        (!ev.commodityId || ev.commodityId === commodityId)
    )
    .reduce((mult, ev) => mult * Math.max(0, ev.multiplier), 1);
}

export function addMarketEvent(event: MarketEvent): void {
  const state = ensureMarketState();
  state.activeEvents.push(event);
}

export function getActiveEventsForSystem(systemId: string): MarketEvent[] {
  const state = ensureMarketState();
  return state.activeEvents.filter(
    (ev) =>
      ev.expiresAtTurn > gameState.time.turn &&
      (ev.expiresAtDay === undefined || gameState.time.day < ev.expiresAtDay) &&
      (!ev.systemId || ev.systemId === systemId)
  );
}

export function getAllActiveMarketEvents(): MarketEvent[] {
  const state = ensureMarketState();
  return state.activeEvents.filter(
    (ev) =>
      ev.expiresAtTurn > gameState.time.turn &&
      (ev.expiresAtDay === undefined || gameState.time.day < ev.expiresAtDay)
  );
}

export function maybeSpawnMarketEvent(systemId: string): void {
  const roll = Math.random();
  if (roll > 0.08) return;
  if (!content?.commodities?.length) return;
  const commodity = content.commodities[Math.floor(Math.random() * content.commodities.length)];
  const duration = Math.ceil(3 + Math.random() * 3); // 3-6 turns
  const multiplier = 1.15 + Math.random() * 0.35; // 1.15-1.5
  const event: MarketEvent = {
    systemId,
    commodityId: commodity.id,
    multiplier,
    expiresAtTurn: gameState.time.turn + duration,
    label: `${commodity.name} market shift x${multiplier.toFixed(2)} (${duration}t)`
  };
  addMarketEvent(event);
  gameState.notifications.push(
    `Market shift in ${systemId}: ${commodity.name} prices x${multiplier.toFixed(2)} for ${duration} turns.`
  );
}

function applyTradeVolumeDrift(
  systemId: string,
  commodityId: string,
  quantity: number,
  unitPrice: number,
  direction: "buy" | "sell"
): void {
  if (quantity <= 0 || unitPrice <= 0) return;
  const value = quantity * unitPrice;
  const volumeFactor = value / 5000;
  const delta = Math.min(0.15, 0.03 * volumeFactor);
  const state = ensureMarketState();
  if (!state.localAdjustments[systemId]) state.localAdjustments[systemId] = {};
  const current = state.localAdjustments[systemId][commodityId] ?? 1;
  const modifier = direction === "buy" ? 1 + delta : 1 - delta;
  const next = clampMultiplier(current * modifier);
  state.localAdjustments[systemId][commodityId] = next;
}

function getLocalAdjustment(systemId: string, commodityId: string): number {
  const state = ensureMarketState();
  return state.localAdjustments[systemId]?.[commodityId] ?? 1;
}

function clampMultiplier(value: number): number {
  return Math.min(2, Math.max(0.5, value));
}

function decayLocalAdjustments(
  market: NonNullable<GameState["marketState"]>,
  rate: number
): void {
  for (const [systemId, map] of Object.entries(market.localAdjustments)) {
    for (const [commodityId, mult] of Object.entries(map)) {
      const delta = mult - 1;
      const decayed = mult - delta * rate;
      if (Math.abs(decayed - 1) < 0.01) {
        delete map[commodityId];
      } else {
        map[commodityId] = decayed;
      }
    }
    if (!Object.keys(map).length) {
      delete market.localAdjustments[systemId];
    }
  }
}

export function captureNeighborIntel(): { success: boolean; message: string } {
  const current = getSystemById(gameState.location.systemId);
  const neighbors = current?.neighbors
    .map((id) => getSystemById(id))
    .filter((s): s is SystemDef => !!s) || [];
  if (!neighbors.length) return { success: false, message: "No neighboring systems to scan." };
  const cost = 100;
  if (gameState.player.credits < cost) {
    return { success: false, message: "Not enough credits for intel." };
  }
  gameState.player.credits -= cost;
  const state = ensureMarketState();
  neighbors.forEach((system) => {
    const prices: Record<string, { buy: number; sell: number }> = {};
    (content?.commodities || []).forEach((c) => {
      const quote = getBuySellPrices(system.id, c.id);
      prices[c.id] = { buy: quote.buy, sell: quote.sell };
    });
    const snapshot: MarketIntelSnapshot = {
      turn: gameState.time.turn,
      prices
    };
    state.priceIntel[system.id] = snapshot;
  });
  return { success: true, message: "Purchased neighbor intel." };
}

export function getNeighborIntel(): Record<string, MarketIntelSnapshot> {
  return ensureMarketState().priceIntel;
}

export function canBuy(
  systemId: string,
  commodityId: string,
  amount: number
): boolean {
  if (amount <= 0) return false;
  const price = getBuySellPrices(systemId, commodityId).buy;
  if (price <= 0) return false;
  const total = price * amount;
  if (gameState.player.credits < total) return false;
  const capacity = gameState.ship.cargoCapacity;
  if (capacity <= 0) return false;
  return getCargoLoad() + amount <= capacity;
}

export function canSell(
  _systemId: string,
  commodityId: string,
  amount: number
): boolean {
  if (amount <= 0) return false;
  const held = getCargoCount(commodityId);
  return held >= amount;
}

export function buyCommodity(
  systemId: string,
  commodityId: string,
  amount: number
): boolean {
  if (!canBuy(systemId, commodityId, amount)) return false;
  const price = getBuySellPrices(systemId, commodityId).buy;
  const total = price * amount;
  gameState.player.credits -= total;
  const cargo = ensureCargo();
  cargo[commodityId] = (cargo[commodityId] || 0) + amount;
  applyTradeVolumeDrift(systemId, commodityId, amount, price, "buy");
  return true;
}

export function sellCommodity(
  systemId: string,
  commodityId: string,
  amount: number
): boolean {
  if (!canSell(systemId, commodityId, amount)) return false;
  const price = getBuySellPrices(systemId, commodityId).sell;
  const total = price * amount;
  const cargo = ensureCargo();
  cargo[commodityId] = Math.max(0, (cargo[commodityId] || 0) - amount);
  gameState.player.credits += total;
  applyTradeVolumeDrift(systemId, commodityId, amount, price, "sell");
  return true;
}

export function getCargoValue(state: GameState, systemId: string): number {
  const cargo = state.ship.cargo || {};
  return Object.entries(cargo).reduce((sum, [commodityId, qty]) => {
    if (!qty) return sum;
    const price = getBuySellPrices(systemId, commodityId).sell;
    return sum + price * qty;
  }, 0);
}
