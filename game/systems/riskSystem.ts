import { content, getShipById } from "../core/engine";
import type { GameState } from "../core/state";
import { devTune, getCombatTune } from "../core/state";
import { getPassiveEffects } from "../core/passives";
import { getCargoValue, getBuySellPrices, getCommodityById } from "./economySystem";
import { computeDayPressure } from "./difficultySystem";
import { systemHasTag } from "./systemHelpers";

export interface PirateRiskContext {
  systemId: string;
  state: GameState;
  sessionFactor: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function computePirateChance(ctx: PirateRiskContext): number {
  const { systemId, state, sessionFactor } = ctx;
  const system = content?.systems.find((s) => s.id === systemId);
  const security = system?.security ?? "medium";
  const combatTune = getCombatTune();
  const passive = getPassiveEffects();

  let baseRisk: number;
  switch (security) {
    case "high":
      baseRisk = 0.02;
      break;
    case "low":
      baseRisk = 0.12;
      break;
    default:
      baseRisk = 0.06;
      break;
  }

  if (system?.tags.includes("mining_belt")) {
    baseRisk += 0.02;
  }

  if (system?.marketProfile?.blackMarket) {
    baseRisk += 0.03;
  }

  const cargoValue = getCargoValue(state, systemId);
  const shipValue = getShipById(state.ship.templateId)?.cost ?? 0;
  const assetValue = cargoValue + shipValue;
  const cargoRisk = Math.min(0.15, assetValue / 5000) * Math.max(0, combatTune.pirateCargoValueSensitivity ?? 1);
  const marginBonus = computeMarginBonus(state, systemId);
  const sessionRisk = sessionFactor * 0.03;

  const pirateBase = Math.max(0, Math.min(1, (combatTune.pirateEncounterRateBase ?? 0) / 100));
  const legacyExtraPirate = Math.max(0, Math.min(1, ((devTune as any).pirateEncounterRate ?? 0) / 100));

  const encounterScale = Math.max(0, (combatTune.encounterChancePerJump ?? 100) / 100);
  const dangerMult =
    Math.max(0, combatTune.globalDangerMultiplier ?? 1) *
    Math.max(0, passive.pirateDetectionMultiplier ?? 1);
  let chance =
    (baseRisk + cargoRisk + sessionRisk + marginBonus + pirateBase + legacyExtraPirate) *
    dangerMult *
    encounterScale;
  return clampPirateChance(chance, state, systemId);
}

function computeMarginBonus(state: GameState, systemId: string): number {
  const cargo = state.ship.cargo || {};
  const entries = Object.entries(cargo);
  if (!entries.length) return 0;
  let weightedMargin = 0;
  let weightSum = 0;
  for (const [commodityId, qty] of entries) {
    if (!qty) continue;
    const quote = getBuySellPrices(systemId, commodityId);
    const base = getCommodityById(commodityId)?.basePrice ?? quote.sell;
    if (base <= 0) continue;
    const margin = (quote.sell - base) / base;
    weightedMargin += margin * qty;
    weightSum += qty;
  }
  if (weightSum <= 0) return 0;
  const avgMargin = weightedMargin / weightSum;
  const bonus = clamp(avgMargin * 0.2, 0, 0.15);
  return bonus;
}

export function clampPirateChance(
  baseChance: number,
  state: GameState,
  systemId: string
): number {
  const dayPressure = computeDayPressure(state.time.day);

  const maxBase = 0.4;
  const maxLate = 0.75;
  const maxChance = maxBase + (maxLate - maxBase) * dayPressure;

  let chance = baseChance;
  if (systemHasTag(systemId, "core")) {
    const coreMax = 0.25;
    if (chance > coreMax) chance = coreMax;
    if (chance < 0.01) chance = 0.01;
    return chance;
  }

  if (chance > maxChance) chance = maxChance;
  if (chance < 0.01) chance = 0.01;
  return chance;
}
