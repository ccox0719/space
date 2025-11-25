import type { GameState, MiningBeltState, MiningSample, MiningCellState } from "../core/state";
import { devTune, recordMiningYield, scaleTurnDelta } from "../core/state";
import { getPassiveEffects } from "../core/passives";
import { computePirateChance } from "./riskSystem";
import { getLocalPrice } from "./economySystem";
import { startCombat } from "./combatSystem";
import miningContent from "../content/mining_resources.json";

const PIRATE_ENCOUNTER_ID = "pirate_cutter";
const REFINERY_PRICE_MULT = 0.5; // refinery pays 50% of market (half cost)
const REFINERY_PRICE_CAP = 100;

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
const GRID_ROWS = 9;
const GRID_COLS = 9;
const MAX_GRID_SAMPLES = GRID_ROWS * GRID_COLS;
const MAX_DEPTH = 5;
const DEPTH_RULES: Record<
  number,
  {
    yieldMultiplier: number;
    noise: number;
    stabilityLossScale: number;
    drillDamageChance: number;
    drillDamageRange: [number, number];
  }
> = {
  1: { yieldMultiplier: 0.75, noise: 0.42, stabilityLossScale: 0.8, drillDamageChance: 0.01, drillDamageRange: [1, 2] },
  2: { yieldMultiplier: 0.9, noise: 0.3, stabilityLossScale: 0.9, drillDamageChance: 0.02, drillDamageRange: [1, 3] },
  3: { yieldMultiplier: 1, noise: 0.2, stabilityLossScale: 1, drillDamageChance: 0.04, drillDamageRange: [1, 4] },
  4: { yieldMultiplier: 1.18, noise: 0.14, stabilityLossScale: 1.15, drillDamageChance: 0.08, drillDamageRange: [2, 5] },
  5: { yieldMultiplier: 1.32, noise: 0.22, stabilityLossScale: 1.35, drillDamageChance: 0.12, drillDamageRange: [3, 6] }
};

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

function recordOreGain(session: MiningSessionState, commodityId: string, amount: number) {
  if (!session.accumulatedOre) session.accumulatedOre = {};
  session.accumulatedOre[commodityId] = (session.accumulatedOre[commodityId] ?? 0) + amount;
}

function rollbackOre(state: GameState, session: MiningSessionState) {
  if (!session.accumulatedOre) return;
  const cargo = state.ship.cargo || {};
  for (const [commodityId, amount] of Object.entries(session.accumulatedOre)) {
    cargo[commodityId] = Math.max(0, (cargo[commodityId] ?? 0) - amount);
  }
  state.ship.cargo = cargo;
  session.accumulatedOre = {};
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

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

function getRefineryPrice(systemId: string, commodityId: string): number {
  const marketPrice = Math.max(1, getLocalPrice(systemId, commodityId));
  const refined = Math.min(REFINERY_PRICE_CAP, marketPrice * REFINERY_PRICE_MULT);
  return Math.max(1, refined);
}

function computeMiningEfficiency(session: MiningSessionState): number {
  const base = Math.max(0.1, devTune.miningEfficiency ?? 0.55);
  const explorationBonus = Math.min(0.4, (session.explorationScore ?? 0) / 25);
  return Math.min(1, base + explorationBonus);
}

function createGrid(): MiningCellState[][] {
  const grid: MiningCellState[][] = [];
  for (let r = 0; r < GRID_ROWS; r++) {
    const row: MiningCellState[] = [];
    for (let c = 0; c < GRID_COLS; c++) {
      row.push({ signal: null, drilled: false, selected: false, depthHint: null, directionClass: null });
    }
    grid.push(row);
  }
  return grid;
}

function pickHiddenVein(): { row: number; col: number; depth: number } {
  const safeRow = Math.floor(Math.random() * (GRID_ROWS - 4)) + 2;
  const safeCol = Math.floor(Math.random() * (GRID_COLS - 4)) + 2;
  const depth = 2 + Math.floor(Math.random() * (MAX_DEPTH - 2));
  return { row: safeRow, col: safeCol, depth };
}

function computeDirectionClass(targetRow: number, targetCol: number, row: number, col: number): string | null {
  const dx = targetCol - col;
  const dy = targetRow - row;
  const dist = Math.sqrt(dx * dx + dy * dy);
  if (dist < 0.5) return null;
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);
  const norm = angle < 0 ? angle + 360 : angle;
  if (norm >= 337.5 || norm < 22.5) return "dir-e";
  if (norm < 67.5) return "dir-se";
  if (norm < 112.5) return "dir-s";
  if (norm < 157.5) return "dir-sw";
  if (norm < 202.5) return "dir-w";
  if (norm < 247.5) return "dir-nw";
  if (norm < 292.5) return "dir-n";
  return "dir-ne";
}

function depthHintClass(depth: number, sweetDepth: number): { hint: "shallow" | "deep" | "optimal"; className: string } {
  const diff = depth - sweetDepth;
  if (Math.abs(diff) <= 1) return { hint: "optimal", className: "depth-perfect" };
  if (diff < 0) return { hint: "shallow", className: "depth-deeper" }; // need to go deeper
  return { hint: "deep", className: "depth-shallower" }; // need to go shallower
}

function maybeApplyDrillDamage(
  state: GameState,
  chance: number,
  damageRange: [number, number],
  multiplier = 1
): number {
  if (chance <= 0 || Math.random() > chance) return 0;
  const dmg = randBetween(damageRange[0], damageRange[1]);
  const scaled = Math.max(1, Math.round(dmg * multiplier));
  state.ship.hp = Math.max(0, state.ship.hp - scaled);
  if (!state.notifications) state.notifications = [];
  state.notifications.push(`Drill backlash damaged hull for ${scaled}.`);
  return scaled;
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
  intensity: MiningIntensity,
  multiplier = 1
) {
  const lossRange = belt.stability[INTENSITY_RULES[intensity].lossKey] as { min: number; max: number };
  const loss = Math.round(randBetween(lossRange.min, lossRange.max) * multiplier);
  session.stability = Math.max(0, session.stability - loss);
  session.lastMessage = `Stability dropped by ${loss}%.`;
}

export function startMiningSession(
  state: GameState,
  systemId: string,
  beltId?: string,
  resourceId?: string,
  options?: { force?: boolean }
) {
  const belt = pickBelt(systemId, beltId);
  const beltState = ensureBeltState(state, belt.id);
  if (options?.force) {
    beltState.depletedUntilDay = undefined;
  }
  if (beltState.depletedUntilDay !== undefined && state.time.day < beltState.depletedUntilDay) {
    state.notifications.push(
      `This belt is depleted. It will recover by day ${beltState.depletedUntilDay}.`
    );
    return;
  }
  const baseChance = 0;
  const grid = createGrid();
  const { row, col, depth } = pickHiddenVein();
  state.miningSession = {
    active: true,
    systemId,
    beltId: belt.id,
    resourceId: resourceId ?? undefined,
    minesTaken: 0,
    totalValueMined: 0,
    currentPirateChance: baseChance,
    stability: belt.stability.start, // retained for legacy UI but not consumed in new mini-game
    maxStability: belt.stability.start,
    depth: 3,
    threat: 0,
    drillsUsed: 0,
    runComplete: false,
    grid,
    gridRows: GRID_ROWS,
    gridCols: GRID_COLS,
    explorationScore: 0,
    uniqueDrills: 0,
    selectedRow: null,
    selectedCol: null,
    veinRow: row,
    veinCol: col,
    veinDepth: depth,
    accumulatedOre: {},
    beltName: belt.name,
    lastMessage: "Belt initialized. Stability nominal.",
    lastYield: undefined,
    samples: []
  };
}

export function setMiningDepth(state: GameState, depth: number) {
  if (!state.miningSession) return;
  state.miningSession.depth = clamp(Math.round(depth), 1, MAX_DEPTH);
}

function selectCell(grid: MiningCellState[][], row: number, col: number) {
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      grid[r][c].selected = r === row && c === col;
    }
  }
}

export function drillSurveyCell(state: GameState, row: number, col: number) {
  const session = state.miningSession;
  if (!session || !session.active || session.runComplete) return null;

  const belt = pickBelt(session.systemId, session.beltId);

  const r = clamp(Math.round(row), 0, GRID_ROWS - 1);
  const c = clamp(Math.round(col), 0, GRID_COLS - 1);
  const depth = clamp(Math.round(session.depth ?? 3), 1, MAX_DEPTH);
  session.depth = depth;
  session.grid = session.grid ?? createGrid();
  session.drillsUsed = (session.drillsUsed ?? 0) + 1;

  const dx = c - (session.veinCol ?? 0);
  const dy = r - (session.veinRow ?? 0);
  const dz = depth - (session.veinDepth ?? 3);
  const planarDist = Math.sqrt(dx * dx + dy * dy);
  const penalty = planarDist * 2.6 + Math.abs(dz) * 1.5;
  const noiseScale = Math.max(0.2, 1 - session.drillsUsed * 0.04);
  const noise = (Math.random() * 2 - 1) * noiseScale;
  const baseSignal = 10 - penalty;
  const signal = clamp(Math.round(baseSignal + noise), 0, 10);

  const dirClass = computeDirectionClass(session.veinRow ?? 0, session.veinCol ?? 0, r, c);
  const depthHint = depthHintClass(depth, session.veinDepth ?? 3);

  const cell = session.grid[r][c];
  const firstDrill = !cell.drilled;
  cell.drilled = true;
  cell.signal = signal;
  cell.directionClass = dirClass;
  cell.depthHint = depthHint.hint;
  cell.depthClass = depthHint.className;
  selectCell(session.grid, r, c);
  session.selectedRow = r;
  session.selectedCol = c;
  if (firstDrill) {
    session.uniqueDrills = (session.uniqueDrills ?? 0) + 1;
    session.explorationScore = Math.min(10, (session.explorationScore ?? 0) + signal / 20);
  } else {
    session.explorationScore = Math.min(10, (session.explorationScore ?? 0) + signal / 50);
  }

  const threatMultiplier = Math.max(0, devTune.miningThreatMultiplier ?? 0.7);
  const baseThreatGain = 3 + depth;
  const threatGain = Math.max(0, Math.round(baseThreatGain * threatMultiplier));
  session.threat = clamp((session.threat ?? 0) + threatGain, 0, 100);
  session.currentPirateChance = (session.threat ?? 0) / 100;
  const orePerSignal = 0.0025;
  let orePulse = Math.max(0, Math.round(signal * orePerSignal));
  if (signal > 0 && orePulse === 0) orePulse = 1;
  const commodityId = session.resourceId ?? "aurite_ore";
  const addedOre = addCargoWithCapacity(state, commodityId, orePulse);
  recordOreGain(session, commodityId, addedOre);
  const refineryPrice = getRefineryPrice(session.systemId, commodityId);
  const approxValue = Math.round(refineryPrice * addedOre);
  session.totalValueMined += approxValue;
  session.lastYield = {
    commodityId,
    amount: addedOre,
    approxValue,
    rareFind: null
  };

  session.lastMessage = `Pulse at X${c + 1}, Y${r + 1}, Z${depth}: signal ${signal}. Depth ${depthHint.hint}. Threat +${threatGain}%. Ore +${addedOre}.`;

  const fightRoll = Math.random() * 100;
  let fightTriggered = false;
  const fightThreshold = session.threat * 0.9;
  if (fightRoll <= fightThreshold) {
    fightTriggered = true;
    session.runComplete = true;
    session.active = false;
    const beltState = ensureBeltState(state, belt.id);
    beltState.depletedUntilDay = state.time.day + 1;
    startCombat(PIRATE_ENCOUNTER_ID, {
      returnScreen: "mining",
      returnParams: { message: "Pirates forced you out of the claim." }
    });
    session.threat = 0;
    session.currentPirateChance = 0;
    session.lastMessage = "Pirates detected! Threat reset to 0%. Claim locked for 1 day.";
  }

  return {
    signal,
    directionClass: dirClass,
    depthHint: depthHint.hint,
    fightTriggered,
    threat: session.threat
  };
}

export function finalizeSurveyExtraction(state: GameState) {
  const session = state.miningSession;
  if (!session || !session.active || session.runComplete) return null;
  const r = session.selectedRow ?? null;
  const c = session.selectedCol ?? null;
  if (r === null || c === null) return null;

  const depth = clamp(Math.round(session.depth ?? 3), 1, MAX_DEPTH);
  const dx = c - (session.veinCol ?? 0);
  const dy = r - (session.veinRow ?? 0);
  const dz = depth - (session.veinDepth ?? 3);
  const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
  const noise = (Math.random() * 1.5 - 0.75);
  const signal = clamp(Math.round(10 - dist * 2 + noise), 0, 10);

  const depthBonus = 1 + Math.max(0, depth - 2) * 0.12;
  const baseYieldPerSignal = 0.2;
  const rawYield = Math.max(0, Math.round((signal + depthBonus) * baseYieldPerSignal));
  const explorationBonus = Math.min(0.4, (session.explorationScore ?? 0) / 25);
  const efficiency = computeMiningEfficiency(session);
  const finalEfficiency = Math.min(1, efficiency + explorationBonus);
  const finalBonus = 0.1;
  let yieldWithBonus = Math.max(1, Math.round(rawYield * finalEfficiency * (1 + finalBonus)));
  yieldWithBonus = Math.max(1, Math.round(yieldWithBonus * 0.5));
  const commodityId = session.resourceId ?? "aurite_ore";
  const added = addCargoWithCapacity(state, commodityId, yieldWithBonus);
  recordOreGain(session, commodityId, added);
  const refineryPrice = getRefineryPrice(session.systemId, commodityId);
  const payoutMultiplier = Math.max(0.05, devTune.miningPayoutMultiplier ?? 0.35);
  let approxValue = Math.round(refineryPrice * added * payoutMultiplier);

  let rareFind: { id: string; amount: number } | null = null;
  if (signal >= 6 && Math.random() < 0.1 + explorationBonus * 0.5) {
    const rareAmount = Math.max(1, Math.round(signal / 3));
    const rareAdded = addCargoWithCapacity(state, "stellite_fragment", rareAmount);
    if (rareAdded > 0) {
      rareFind = { id: "stellite_fragment", amount: rareAdded };
      const rarePrice = Math.max(1, getLocalPrice(session.systemId, rareFind.id));
      approxValue += Math.round(rarePrice * rareAdded * payoutMultiplier);
      recordOreGain(session, rareFind.id, rareAdded);
    }
  }

  session.totalValueMined += approxValue;
  session.lastYield = {
    commodityId,
    amount: yieldWithBonus,
    approxValue,
    rareFind
  };
  session.runComplete = true;
  session.active = false;

  const finalThreatGain = 6 + depth * 2;
  const threatMultiplier = Math.max(0, devTune.miningThreatMultiplier ?? 0.7);
  const threatGain = Math.max(0, Math.round(finalThreatGain * threatMultiplier));
  session.threat = clamp((session.threat ?? 0) + threatGain, 0, 100);
  session.currentPirateChance = (session.threat ?? 0) / 100;
  session.lastMessage = `Final drill X${c + 1}, Y${r + 1}, Z${depth}: signal ${signal}, efficiency ${(finalEfficiency * 100).toFixed(
    0
  )}%, ore ${yieldWithBonus} (${added} stored). Threat +${threatGain}%.`;

  const fightRoll = Math.random() * 100;
  let fightTriggered = false;
  const fightThreshold = session.threat * 0.9;
  if (fightRoll <= fightThreshold) {
    fightTriggered = true;
    startCombat(PIRATE_ENCOUNTER_ID, {
      returnScreen: "mining",
      returnParams: { message: session.lastMessage || "Pirate encounter triggered!" }
    });
    session.threat = 0;
    session.currentPirateChance = 0;
    session.lastMessage = "Pirates detected during extraction! Threat reset.";
  }

  recordMiningYield(added + (rareFind?.amount || 0), Boolean(rareFind));
  return {
    signal,
    yieldAmount: added,
    commodityId,
    rareFind,
    fightTriggered,
    threat: session.threat
  };
}

export function performMiningAction(
  state: GameState,
  intensity: MiningIntensity = "standard"
): MiningResult | null {
  const session = state.miningSession;
  if (!session || !session.active) return null;

  session.samples = session.samples ?? [];
  const depth = clamp(Math.round(session.depth ?? 3), 1, 5);
  session.depth = depth;
  const depthRule = DEPTH_RULES[depth] ?? DEPTH_RULES[3];

  const belt = pickBelt(session.systemId, session.beltId);
  const table = getTable(belt.commonTableId);
  const rareTable = getTable(belt.rareTableId);
  const rules = INTENSITY_RULES[intensity];

  const commonDrop = rollTableEntry(table);
  const minedCommodityId = commonDrop?.id ?? session.resourceId ?? "aurite_ore";
  const baseAmount = commonDrop?.amount ?? randBetween(1, 3);
  const passive = getPassiveEffects();
  const tunedYieldMultiplier = (devTune.miningYieldMultiplier ?? 1) * (passive.miningYield ?? 1);
  const noiseFactor = 1 + (Math.random() * 2 - 1) * depthRule.noise;
  const minedAmount = Math.max(
    1,
    Math.round(
      baseAmount *
        rules.yieldMultiplier *
        depthRule.yieldMultiplier *
        tunedYieldMultiplier *
        noiseFactor
    )
  );

  const added = addCargoWithCapacity(state, minedCommodityId, minedAmount);
  recordOreGain(session, minedCommodityId, added);
  const localPrice = Math.max(1, getLocalPrice(session.systemId, minedCommodityId));
  const payoutMult = Math.max(0, (passive.miningPayoutMultiplier ?? 1));
  const approxValue = localPrice * added * payoutMult;
  session.minesTaken += 1;
  session.totalValueMined += approxValue;

  const stabilityBefore = session.stability;
  applyStabilityLoss(session, belt, intensity, depthRule.stabilityLossScale);
  const stabilityLoss = Math.max(0, stabilityBefore - session.stability);

  // Drill backlash risk scales with depth
  const drillDamage = maybeApplyDrillDamage(
    state,
    depthRule.drillDamageChance,
    depthRule.drillDamageRange
  );

  // Rare roll
  const stabilityRatio = session.stability / Math.max(1, session.maxStability);
  const depthBonus = (1 - stabilityRatio) * 0.5 + (depth - 3) * 0.02;
  const baseRareChance = belt.baseRareChance;
  const extraRareChance =
    Math.min(1, Math.max(0, (devTune.rareMineralChance ?? 0) / 100)) +
    Math.max(0, (passive.rareFindChance ?? 0) - 1);
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
    session.runComplete = true;
    session.threat = 0;
    session.currentPirateChance = 0;
    session.lastMessage = "Pirates detected! Breaking off the dig.";
    startCombat(PIRATE_ENCOUNTER_ID, {
      returnScreen: "mining",
      returnParams: { message: session.lastMessage }
    });
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
    const damageNote = drillDamage > 0 ? ` Drill backlash: -${drillDamage} hull.` : "";
    session.lastMessage = `Mined ${added} ${minedCommodityId}${
      rareFound ? `; rare find: ${rareFound.amount} ${rareFound.id}` : ""
    }.${damageNote}`;
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
  if (drillDamage > 0) {
    state.notifications.push(`Hull damaged by drill: -${drillDamage}.`);
  }

  session.lastYield = {
    commodityId: minedCommodityId,
    amount: added,
    approxValue: Math.round(approxValue + rareApproxValue),
    rareFind: rareFound
  };

  const baseSignal = (added + (rareFound?.amount || 0)) * 2;
  const signalNoise = (Math.random() * 2 - 1) * depthRule.noise * 5;
  const sampleSignal = clamp(Math.round(baseSignal + signalNoise), 0, 10);
  const sample: MiningSample = {
    id: session.samples.length + 1,
    intensity,
    commodityId: minedCommodityId,
    amount: added,
    approxValue: Math.round(approxValue + rareApproxValue),
    rareFind: rareFound,
    pirate: pirateEncountered,
    collapsed,
    stability: session.stability,
    stabilityLoss,
    risk: pirateChance,
    signal: sampleSignal,
    depth,
    hullDamage: drillDamage || undefined,
    timestamp: Date.now(),
    note: session.lastMessage
  };
  session.samples = [...session.samples, sample].slice(-MAX_GRID_SAMPLES);

  const duration = Math.max(1, Math.round((devTune.miningDuration ?? 5) * Math.max(0.1, passive.miningSpeed ?? 1)));
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

export function abortMiningSession(state: GameState, message: string) {
  const session = state.miningSession;
  if (!session) return;
  rollbackOre(state, session);
  session.active = false;
  session.runComplete = true;
  session.threat = 0;
  session.currentPirateChance = 0;
  session.lastMessage = message;
  if (!state.notifications) state.notifications = [];
  state.notifications.push(message);
  state.miningSession = null;
}
