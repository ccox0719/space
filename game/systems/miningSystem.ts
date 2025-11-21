import type { GameState, MiningBeltState } from "../core/state";
import { devTune, recordMiningYield, scaleTurnDelta } from "../core/state";
import { computePirateChance } from "./riskSystem";
import { getLocalPrice } from "./economySystem";
import { startCombat } from "./combatSystem";
import miningContent from "../content/mining_resources.json";

const PIRATE_ENCOUNTER_ID = "pirate_cutter";

type MiningIntensity = "careful" | "standard" | "overcharge";

interface MiningTableEntry {
  type: "commodity";
  id: string;
  min: number;
  max: number;
  weight: number;
}

interface MiningTable {
  id: string;
  entries: MiningTableEntry[];
}

interface MiningBelt {
  id: string;
  name: string;
  systemId: string;
  tags?: string[];
  stability: {
    start: number;
    carefulLoss: { min: number; max: number };
    standardLoss: { min: number; max: number };
    overchargeLoss: { min: number; max: number };
  };
  commonTableId: string;
  rareTableId?: string;
  baseRareChance: number;
}

const miningData = miningContent as { belts: MiningBelt[]; tables: MiningTable[] };

const INTENSITY_RULES: Record<
  MiningIntensity,
  { yieldMultiplier: number; rareMod: number; lossKey: keyof MiningBelt["stability"] }
> = {
  careful: { yieldMultiplier: 0.8, rareMod: 0.5, lossKey: "carefulLoss" },
  standard: { yieldMultiplier: 1, rareMod: 1, lossKey: "standardLoss" },
  overcharge: { yieldMultiplier: 1.3, rareMod: 1.5, lossKey: "overchargeLoss" }
};

export interface MiningResult {
  minedCommodityId: string;
  minedAmount: number;
  pirateEncountered: boolean;
  pirateChance: number;
  rareFound?: { id: string; amount: number } | null;
  stability: number;
  collapsed: boolean;
}

function addCargoWithCapacity(state: GameState, commodityId: string, amount: number): number {
  const cargo = state.ship.cargo || {};
  const used = Object.values(cargo).reduce((sum, qty) => sum + qty, 0);
  const capacity = Math.max(0, state.ship.cargoCapacity - used);
  const toAdd = Math.max(0, Math.min(amount, capacity));
  if (toAdd > 0) {
    cargo[commodityId] = (cargo[commodityId] ?? 0) + toAdd;
    state.ship.cargo = cargo;
  }
  if (!state.notifications) {
    state.notifications = [];
  }
  if (toAdd < amount) {
    state.notifications.push(`Cargo constrained: stored ${toAdd}/${amount} ${commodityId}.`);
  }
  return toAdd;
}

function randBetween(min: number, max: number): number {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  if (hi <= lo) return lo;
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

function pickBelt(systemId: string, beltId?: string): MiningBelt {
  const byId = beltId ? miningData.belts.find((b) => b.id === beltId) : null;
  if (byId) return byId;
  const bySystem = miningData.belts.find((b) => b.systemId === systemId);
  if (bySystem) return bySystem;
  // fallback minimal belt
  return {
    id: "default_belt",
    name: "Unmapped Belt",
    systemId,
    tags: ["ore"],
    stability: {
      start: 100,
      carefulLoss: { min: 2, max: 4 },
      standardLoss: { min: 5, max: 10 },
      overchargeLoss: { min: 10, max: 18 }
    },
    commonTableId: "basic_ore_common",
    rareTableId: "basic_ore_rare",
    baseRareChance: 0.02
  };
}

function getTable(tableId?: string | null): MiningTable | null {
  if (!tableId) return null;
  return miningData.tables.find((t) => t.id === tableId) ?? null;
}

function rollTableEntry(table: MiningTable | null): { id: string; amount: number } | null {
  if (!table || !table.entries.length) return null;
  const totalWeight = table.entries.reduce((sum, e) => sum + (e.weight || 0), 0);
  if (totalWeight <= 0) return null;
  let roll = Math.random() * totalWeight;
  let picked: MiningTableEntry | null = null;
  for (const entry of table.entries) {
    roll -= entry.weight || 0;
    if (roll <= 0) {
      picked = entry;
      break;
    }
  }
  const sel = picked ?? table.entries[table.entries.length - 1];
  const amount = randBetween(sel.min, sel.max);
  return { id: sel.id, amount };
}

function applyStabilityLoss(
  session: NonNullable<GameState["miningSession"]>,
  belt: MiningBelt,
  intensity: MiningIntensity
) {
  const lossRange = belt.stability[INTENSITY_RULES[intensity].lossKey] as { min: number; max: number };
  const loss = randBetween(lossRange.min, lossRange.max);
  session.stability = Math.max(0, session.stability - loss);
  session.lastMessage = `Stability dropped by ${loss}%.`;
}

export function startMiningSession(
  state: GameState,
  systemId: string,
  beltId?: string,
  resourceId?: string
) {
  const belt = pickBelt(systemId, beltId);
  const beltState = ensureBeltState(state, belt.id);
  if (beltState.depletedUntilDay !== undefined && state.time.day < beltState.depletedUntilDay) {
    state.notifications.push(
      `This belt is depleted. It will recover by day ${beltState.depletedUntilDay}.`
    );
    return;
  }
  const baseChance = computePirateChance({
    systemId,
    state,
    sessionFactor: 0
  });
  state.miningSession = {
    active: true,
    systemId,
    beltId: belt.id,
    resourceId: resourceId ?? undefined,
    minesTaken: 0,
    totalValueMined: 0,
    currentPirateChance: baseChance,
    stability: belt.stability.start,
    maxStability: belt.stability.start,
    beltName: belt.name,
    lastMessage: "Belt initialized. Stability nominal.",
    lastYield: undefined
  };
}

export function performMiningAction(
  state: GameState,
  intensity: MiningIntensity = "standard"
): MiningResult | null {
  const session = state.miningSession;
  if (!session || !session.active) return null;

  const belt = pickBelt(session.systemId, session.beltId);
  const table = getTable(belt.commonTableId);
  const rareTable = getTable(belt.rareTableId);
  const rules = INTENSITY_RULES[intensity];

  const commonDrop = rollTableEntry(table);
  const minedCommodityId = commonDrop?.id ?? session.resourceId ?? "aurite_ore";
  const baseAmount = commonDrop?.amount ?? randBetween(1, 3);
  const tunedYieldMultiplier = devTune.miningYieldMultiplier ?? 1;
  const minedAmount = Math.max(
    1,
    Math.round(baseAmount * rules.yieldMultiplier * tunedYieldMultiplier)
  );

  const added = addCargoWithCapacity(state, minedCommodityId, minedAmount);
  const localPrice = Math.max(1, getLocalPrice(session.systemId, minedCommodityId));
  const approxValue = localPrice * added;
  session.minesTaken += 1;
  session.totalValueMined += approxValue;

  applyStabilityLoss(session, belt, intensity);

  // Rare roll
  const stabilityRatio = session.stability / Math.max(1, session.maxStability);
  const depthBonus = (1 - stabilityRatio) * 0.5;
  const baseRareChance = belt.baseRareChance;
  const extraRareChance = Math.min(1, Math.max(0, (devTune.rareMineralChance ?? 0) / 100));
  const rareChance = Math.min(
    1,
    baseRareChance * rules.rareMod + depthBonus + extraRareChance
  );
  let rareFound: { id: string; amount: number } | null = null;
  let rareApproxValue = 0;
  if (rareTable && Math.random() <= rareChance) {
    const rareDrop = rollTableEntry(rareTable);
    if (rareDrop) {
      const addedRare = addCargoWithCapacity(state, rareDrop.id, rareDrop.amount);
      rareFound = { id: rareDrop.id, amount: addedRare };
      const rarePrice = Math.max(1, getLocalPrice(session.systemId, rareDrop.id));
      rareApproxValue = rarePrice * addedRare;
      session.totalValueMined += rareApproxValue;
    }
  }

  const pirateChance = computePirateChance({
    systemId: session.systemId,
    state,
    sessionFactor: session.minesTaken
  });
  session.currentPirateChance = pirateChance;

  const pirateEncountered = Math.random() <= pirateChance;
  if (pirateEncountered) {
    session.active = false;
    session.lastMessage = "Pirates detected! Breaking off the dig.";
    startCombat(PIRATE_ENCOUNTER_ID);
  }

  const collapsed = session.stability <= 0;
  if (collapsed) {
    const hullLoss = randBetween(2, 6);
    state.ship.hp = Math.max(0, state.ship.hp - hullLoss);
    session.active = false;
    session.lastMessage = `Vein collapse! Hull took ${hullLoss} damage.`;
    const beltState = ensureBeltState(state, belt.id);
    beltState.depletedUntilDay = state.time.day + 2;
  } else {
    session.lastMessage = `Mined ${added} ${minedCommodityId}${
      rareFound ? `; rare find: ${rareFound.amount} ${rareFound.id}` : ""
    }.`;
  }

  if (!state.notifications) {
    state.notifications = [];
  }
  state.notifications.push(
    `Mining haul: ${added} ${minedCommodityId} (~${Math.round(approxValue)} cr).`
  );
  if (rareFound) {
    state.notifications.push(`Rare find: ${rareFound.amount} ${rareFound.id}.`);
  }

  session.lastYield = {
    commodityId: minedCommodityId,
    amount: added,
    approxValue: Math.round(approxValue + rareApproxValue),
    rareFind: rareFound
  };

  const duration = devTune.miningDuration ?? 5;
  state.time.turn += scaleTurnDelta(duration);

  recordMiningYield(added + (rareFound?.amount || 0), Boolean(rareFound));

  return {
    minedCommodityId,
    minedAmount: added,
    pirateEncountered,
    pirateChance,
    rareFound,
    stability: session.stability,
    collapsed
  };
}

export function tickResources(state: GameState): void {
  const today = state.time.day;
  for (const belt of state.miningBelts) {
    if (belt.depletedUntilDay !== undefined && today >= belt.depletedUntilDay) {
      belt.depletedUntilDay = undefined;
      state.notifications.push(`Mining belt ${belt.beltId} has recovered.`);
    }
  }
}

function ensureBeltState(state: GameState, beltId: string): MiningBeltState {
  if (!state.miningBelts) state.miningBelts = [];
  const existing = state.miningBelts.find((b) => b.beltId === beltId);
  if (existing) return existing;
  const created: MiningBeltState = { beltId };
  state.miningBelts.push(created);
  return created;
}

export function endMiningSession(state: GameState) {
  state.miningSession = null;
}
