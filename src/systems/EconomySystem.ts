// src/systems/EconomySystem.ts
// Trading, mining, and smuggling resolution using sector market/resource profiles.

import { Sector } from "../../galaxyTypes";
import { GameState } from "../game/GameState";
import {
  addCargo,
  adjustCredits,
  adjustFuel,
  adjustReputation,
  appendLog,
  removeCargo
} from "./PlayerState";
import { createRng, Rng } from "../rng/SeededRng";
import commoditiesJson from "../data/commodities.json";
import { applyMiningRisk, MiningMode } from "./RiskSystem";
import { applyPerkStatChain, getPerkMultiplier } from "./perkSystem";
import { addXp } from "./xpSystem";

type VolumeLevel = "none" | "low" | "medium" | "high" | "very_high";
type VolatilityLevel = "none" | "low" | "medium" | "high";
type ToleranceLevel = "n_a" | "very_low" | "low" | "medium" | "high" | "very_high";
type RichnessLevel = "low" | "medium" | "high" | "very_high";

export interface Commodity {
  id: string;
  name: string;
  basePrice: number;
  tags: string[];
  legality: "legal" | "illegal" | "restricted";
  category: string;
}

export interface MarketQuote {
  commodity: Commodity;
  buyPrice: number;
  sellPrice: number;
  availability: number;
  legality: Commodity["legality"];
  notes?: string[];
}

const ECONOMY_CONFIG = {
  volumePriceAdjust: {
    none: 0,
    low: 0.04,
    medium: 0,
    high: -0.05,
    very_high: -0.1
  } as Record<VolumeLevel, number>,
  volatilityRange: {
    none: 0,
    low: 0.05,
    medium: 0.12,
    high: 0.22
  } as Record<VolatilityLevel, number>,
  illegalMarkup: {
    n_a: 0.05,
    very_low: 0.25,
    low: 0.18,
    medium: 0.12,
    high: 0.05,
    very_high: -0.05
  } as Record<ToleranceLevel, number>,
  supplyMultiplier: 0.85,
  demandMultiplier: 1.2,
  sellSpread: 0.9,
  availabilityBase: 4,
  availabilityVolumeBonus: {
    none: -2,
    low: -1,
    medium: 0,
    high: 1,
    very_high: 2
  } as Record<VolumeLevel, number>,
  miningYieldByRichness: {
    low: 2,
    medium: 4,
    high: 6,
    very_high: 8
  } as Record<RichnessLevel, number>,
  miningCreditPerUnit: 40,
  miningFuelCost: 1,
  smuggling: {
    basePayoutPerUnit: 120,
    detectionByLaw: {
      none: 0.05,
      very_low: 0.08,
      low: 0.15,
      medium: 0.28,
      high: 0.4
    } as Record<"none" | "very_low" | "low" | "medium" | "high", number>,
    toleranceModifier: {
      n_a: -0.02,
      very_low: 0.08,
      low: 0.05,
      medium: 0,
      high: -0.05,
      very_high: -0.1
    } as Record<ToleranceLevel, number>,
    repEffect: {
      threshold: 30,
      reduction: 0.08 // detection reduction if syndicate rep high
    },
    penalties: {
      navyRep: -4,
      creditsFine: 200
    },
    rewards: {
      syndicateRep: 2,
      pirateRep: 1
    }
  }
};

const CATALOG = (commoditiesJson as { commodities: Commodity[] }).commodities;
const COMMODITY_BY_ID = new Map<string, Commodity>(CATALOG.map((c) => [c.id, c]));

export interface TradeOrder {
  type: "buy" | "sell";
  commodityId: string;
  quantity: number;
}

export interface TradeResult {
  commodity: Commodity;
  unitPrice: number;
  total: number;
  success: boolean;
  reason?: string;
  notes?: string[];
}

export interface MiningResult {
  commodityId: string;
  collected: number;
  overflow: number;
  fuelSpent: number;
}

export interface SmugglingOrder {
  cargoId: string;
  quantity: number;
}

export interface SmugglingResult {
  success: boolean;
  detection: boolean;
  payout: number;
}

export function getMarketQuotes(
  game: GameState,
  sector: Sector,
  cycleOverride?: number
): MarketQuote[] {
  if (!sector.marketProfile || !sector.marketProfile.isTradeHub) return [];
  const cycle = cycleOverride ?? game.time.cycle;
  return CATALOG.map((commodity) => {
    const priceRng = makePriceRng(game.seed, sector.id, commodity.id, cycle);
    return deriveQuote(commodity, sector, priceRng);
  });
}

export function tradeCommodity(
  game: GameState,
  sector: Sector,
  order: TradeOrder
): TradeResult {
  const quotes = getMarketQuotes(game, sector);
  if (!quotes.length) {
    return {
      commodity: { id: order.commodityId, name: "Unknown", basePrice: 0, legality: "legal", category: "", tags: [] },
      unitPrice: 0,
      total: 0,
      success: false,
      reason: "no_market"
    };
  }
  const quote = quotes.find((q) => q.commodity.id === order.commodityId);
  if (!quote) {
    return {
      commodity: { id: order.commodityId, name: "Unknown", basePrice: 0, legality: "legal", category: "", tags: [] },
      unitPrice: 0,
      total: 0,
      success: false,
      reason: "unknown_commodity"
    };
  }

  const total = quote.buyPrice * order.quantity;

  if (order.type === "buy") {
    if (game.player.credits < total) {
      return { commodity: quote.commodity, unitPrice: quote.buyPrice, total, success: false, reason: "insufficient_credits" };
    }
    const added = addCargo(game.player, {
      id: quote.commodity.id,
      name: quote.commodity.name,
      quantity: order.quantity,
      legality: quote.commodity.legality
    });
    if (!added) {
      return { commodity: quote.commodity, unitPrice: quote.buyPrice, total, success: false, reason: "insufficient_cargo_space" };
    }
    adjustCredits(game.player, -total);
  } else {
    const removed = removeCargo(game.player, order.commodityId, order.quantity);
    if (!removed) {
      return { commodity: quote.commodity, unitPrice: quote.sellPrice, total: quote.sellPrice * order.quantity, success: false, reason: "insufficient_inventory" };
    }
    adjustCredits(game.player, quote.sellPrice * order.quantity);
  }

  appendLog(game, `Trade ${order.type}`, {
    commodity: order.commodityId,
    quantity: order.quantity,
    unitPrice: order.type === "buy" ? quote.buyPrice : quote.sellPrice,
    total: order.type === "buy" ? total : quote.sellPrice * order.quantity
  });

  return {
    commodity: quote.commodity,
    unitPrice: order.type === "buy" ? quote.buyPrice : quote.sellPrice,
    total: order.type === "buy" ? total : quote.sellPrice * order.quantity,
    success: true,
    notes: quote.notes
  };
}

// Backwards compatibility wrapper for older call sites
export function resolveTrade(
  game: GameState,
  sector: Sector,
  order: TradeOrder,
  rng: Rng
): TradeResult {
  // rng retained for signature compatibility; pricing is deterministic from seed+sector+cycle.
  return tradeCommodity(game, sector, order);
}

export function resolveMining(
  game: GameState,
  sector: Sector,
  rng: Rng,
  mode: MiningMode = "safe"
): MiningResult {
  const richness = sector.resourceRichness.minerals as RichnessLevel;
  const yieldUnits = ECONOMY_CONFIG.miningYieldByRichness[richness] ?? 0;
  const variance = rng.next() * 0.3 + 0.85; // slight randomness 0.85-1.15
  const finalYield = Math.max(1, Math.round(yieldUnits * variance));
  const perkAdjustedYield = Math.max(
    1,
    Math.round(applyPerkStatChain(game, "mining", ["oreYieldMultiplier", "rareYieldMultiplier"], finalYield))
  );

  const commodityId =
    richness === "very_high" || richness === "high" ? "ore_aurite" : "ore_ironite";

  adjustFuel(game.player, -ECONOMY_CONFIG.miningFuelCost);
  applyMiningRisk(game, sector, mode);

  const used = game.player.cargo.reduce((sum, c) => sum + c.quantity, 0);
  const free = Math.max(0, game.player.ship.cargoCapacity - used);
  const collected = Math.min(perkAdjustedYield, free);
  const overflow = Math.max(0, perkAdjustedYield - collected);
  if (collected > 0) {
    addCargo(game.player, { commodityId, quantity: collected });
  }

  appendLog(game, "Mining operation", {
    sector: sector.id,
    richness,
    collected,
    overflow,
    commodityId
  });

  const xpGain = Math.max(5, collected * 2 + (richness === "very_high" ? 4 : richness === "high" ? 3 : 1));
  addXp(game, "mining", xpGain);

  return {
    commodityId,
    collected,
    overflow,
    fuelSpent: ECONOMY_CONFIG.miningFuelCost
  };
}

export function resolveSmuggling(
  game: GameState,
  sector: Sector,
  order: SmugglingOrder,
  rng: Rng
): SmugglingResult {
  const removed = removeCargo(game.player, order.cargoId, order.quantity);
  if (!removed) {
    return { success: false, detection: false, payout: 0 };
  }

  const profile = sector.marketProfile;
  const lawKey = sector.law as keyof typeof ECONOMY_CONFIG.smuggling.detectionByLaw;
  const baseDetection = ECONOMY_CONFIG.smuggling.detectionByLaw[lawKey] ?? 0.2;
  const tolerance = profile.illegalTolerance as ToleranceLevel;
  const toleranceModifier = ECONOMY_CONFIG.smuggling.toleranceModifier[tolerance] ?? 0;
  const repModifier =
    (game.player.reputation["syndicate"] ?? 0) >= ECONOMY_CONFIG.smuggling.repEffect.threshold
      ? -ECONOMY_CONFIG.smuggling.repEffect.reduction
      : 0;
  const detectionBaseline = getPerkMultiplier(game, "smuggling", "detectionBaseline");
  const detectionChance = Math.max(0, (baseDetection + toleranceModifier + repModifier) * detectionBaseline);
  const detected = rng.next() < detectionChance;

  if (detected) {
    adjustReputation(game.player, { navy: ECONOMY_CONFIG.smuggling.penalties.navyRep });
    adjustCredits(game.player, -ECONOMY_CONFIG.smuggling.penalties.creditsFine);
    appendLog(game, "Smuggling attempt detected", { sector: sector.id, detectionChance });
    return { success: false, detection: true, payout: 0 };
  }

  const payout =
    order.quantity *
    (ECONOMY_CONFIG.smuggling.basePayoutPerUnit +
      ECONOMY_CONFIG.smuggling.basePayoutPerUnit *
        (ECONOMY_CONFIG.illegalMarkup[tolerance] ?? 0));

  adjustCredits(game.player, payout);
  adjustReputation(game.player, {
    syndicate: ECONOMY_CONFIG.smuggling.rewards.syndicateRep,
    pirate: ECONOMY_CONFIG.smuggling.rewards.pirateRep
  });
  appendLog(game, "Smuggling success", {
    sector: sector.id,
    payout,
    detectionChance
  });

  return { success: true, detection: false, payout };
}

function deriveQuote(commodity: Commodity, sector: Sector, rng: Rng): MarketQuote {
  const demandMulti = computeDemandMultiplier(commodity, sector);
  const supplyMulti = computeSupplyMultiplier(commodity, sector);
  const priceMultiplier = computePriceMultiplier(
    commodity,
    sector,
    sector.marketProfile.volume as VolumeLevel,
    sector.marketProfile.priceVolatility as VolatilityLevel,
    sector.marketProfile.illegalTolerance as ToleranceLevel,
    rng
  );

  const buyPrice = Math.max(1, Math.round(commodity.basePrice * priceMultiplier * demandMulti * supplyMulti));
  const sellPrice = Math.max(1, Math.round(buyPrice * ECONOMY_CONFIG.sellSpread));
  const notes: string[] = [];
  if (demandMulti > 1) notes.push("Local demand raises price");
  if (supplyMulti < 1) notes.push("Local supply lowers price");
  if (commodity.legality !== "legal") notes.push("Risk: restricted/illegal cargo");

  const availability =
    ECONOMY_CONFIG.availabilityBase +
    (ECONOMY_CONFIG.availabilityVolumeBonus[sector.marketProfile.volume as VolumeLevel] ?? 0) +
    (supplyMulti < 1 ? 1 : 0) -
    (commodity.legality !== "legal" ? 1 : 0);

  return {
    commodity,
    buyPrice,
    sellPrice,
    availability: Math.max(1, availability),
    legality: commodity.legality,
    notes
  };
}

function computePriceMultiplier(
  commodity: Commodity,
  sector: Sector,
  volume: VolumeLevel,
  volatility: VolatilityLevel,
  tolerance: ToleranceLevel,
  rng: Rng
): number {
  const volumeAdj = ECONOMY_CONFIG.volumePriceAdjust[volume] ?? 0;
  const swing = ECONOMY_CONFIG.volatilityRange[volatility] ?? 0;
  const variance = swing ? rng.next() * swing * 2 - swing : 0; // symmetric variance
  const illegalAdj =
    commodity.legality === "illegal" || commodity.legality === "restricted"
      ? ECONOMY_CONFIG.illegalMarkup[tolerance] ?? 0
      : 0;
  return 1 + volumeAdj + variance + illegalAdj;
}

function hasTagMatch(sectorTags: string[], targetTags: string[]): boolean {
  return targetTags.some((t) => sectorTags.includes(t));
}

function computeDemandMultiplier(commodity: Commodity, sector: Sector): number {
  const demand = sector.marketProfile?.demandProfile;
  if (!demand) return 1;
  let multiplier = 1;
  if (demand.byTag) {
    for (const tag of commodity.tags) {
      multiplier *= demand.byTag[tag] ?? 1;
    }
  }
  if (demand.byCommodity && demand.byCommodity[commodity.id]) {
    multiplier *= demand.byCommodity[commodity.id];
  }
  return multiplier;
}

function computeSupplyMultiplier(commodity: Commodity, sector: Sector): number {
  const supply = sector.marketProfile?.supplyProfile;
  if (!supply) return 1;
  let multiplier = 1;
  if (supply.byTag) {
    for (const tag of commodity.tags) {
      multiplier *= supply.byTag[tag] ?? 1;
    }
  }
  if (supply.byCommodity && supply.byCommodity[commodity.id]) {
    multiplier *= supply.byCommodity[commodity.id];
  }
  // supply lowers price when multiplier > 1
  return multiplier > 1 ? 1 / multiplier : multiplier;
}

function makePriceRng(baseSeed: number, sectorId: string, commodityId: string, cycle: number): Rng {
  const combined = hashSeed(`${baseSeed}:${sectorId}:${commodityId}:${cycle}`);
  return createRng(combined);
}

function hashSeed(input: string): number {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h) || 1;
}
