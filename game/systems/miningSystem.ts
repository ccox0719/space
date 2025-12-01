import type {
  GameState,
  MiningBeltState,
  MiningSample,
  MiningCellState,
  MiningCluster
} from "../core/state";
import { addCreditsEarned, devTune, recordMiningYield, scaleTurnDelta } from "../core/state";
import { getPassiveEffects } from "../core/passives";
import { computePirateChance } from "./riskSystem";
import { getLocalPrice } from "./economySystem";
import { startCombat } from "./combatSystem";
import { getMaintenanceModifier } from "./maintenanceSystem";
import { awardXp, isPerkUnlocked } from "./perkManager";
import miningContent from "../content/mining_resources.json";
import depthConfig from "../content/mining_depth_config.json";
import miningBalance from "../content/mining_balance.json";

const PIRATE_ENCOUNTER_ID = "pirate_cutter";
const REFINERY_PRICE_MULT = 0.5; // refinery pays 50% of market (half cost)
const MINING_PAYOUT_REDUCTION = 0.5;
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

type DropRarity = "common" | "rare" | "ultra";

interface ClusterDefinition {
  chance: number;
  minSize: number;
  maxSize: number;
  maxClusters: number;
}

interface DepthBand {
  id: string;
  label: string;
  level: number;
  depthRange: [number, number];
  valueMultiplier: number;
  dropWeights: Partial<Record<DropRarity, number>>;
  lootTables: Partial<Record<DropRarity, string>>;
  cluster: ClusterDefinition;
  comboGain: number;
}

interface ComboConfig {
  threshold: number;
  duration: number;
  revealTiles: number;
  guaranteedRarityCount: number;
  threatReduction: number;
  bandBonus: number;
  skipBandBonus: number;
}

interface DepthConfig {
  bands: DepthBand[];
  combo: ComboConfig;
  clusterSettings: {
    maxAttemptsPerBand: number;
  };
  riskChain: {
    hazardBaseChance: number;
    hazardPerChain: number;
    hazardDamageRange: [number, number];
    hazardDamageMultiplierPerLevel: number;
    rewardMultipliers: { maxLevel: number; multiplier: number }[];
    milestones: number[];
    cashOutBase: number;
    cashOutPerLevel: number;
  };
}

const DEPTH_CONFIG = depthConfig as DepthConfig;
const DEPTH_BANDS = DEPTH_CONFIG.bands;
const DEPTH_BAND_MAP = new Map(DEPTH_BANDS.map((band) => [band.id, band]));
const DEPTH_BAND_LEVELS = new Map(DEPTH_BANDS.map((band) => [band.id, band.level]));
const COMBO_CONFIG = DEPTH_CONFIG.combo;
const CLUSTER_SETTINGS = DEPTH_CONFIG.clusterSettings;
const RISK_CHAIN_CONFIG = DEPTH_CONFIG.riskChain;

const SELL_PRICE_MULTIPLIERS: Record<DropRarity, number> = {
  common: 1,
  rare: 0.75,
  ultra: 0.6
};
type DrillTier = keyof typeof MINING_BALANCE.drillDepthCaps;
const DEFAULT_DRILL_TIER: DrillTier = "basic";

function getDrillTierCap(tier: DrillTier | undefined): number {
  if (!tier) return MINING_BALANCE.drillDepthCaps.basic;
  return MINING_BALANCE.drillDepthCaps[tier] ?? MINING_BALANCE.drillDepthCaps.basic;
}

function clampDepthByDrill(depth: number, session: MiningSessionState | null | undefined): number {
  if (!session) return depth;
  const cap = getDrillTierCap(session.drillTier ?? DEFAULT_DRILL_TIER);
  return Math.min(depth, cap);
}
interface DepthValueMultiplier {
  depthRange: [number, number];
  multiplier: number;
}

interface EmptyChanceBand {
  depthRange: [number, number];
  chance: number;
}

interface MiningBalanceConfig {
  depthValueMultipliers: DepthValueMultiplier[];
  yieldReduction: { min: number; max: number };
  emptyChance: EmptyChanceBand[];
  clusterGateDepth: number;
  fragmentation: {
    splitDepth: number;
    minFragments: number;
    maxFragments: number;
    fragmentValueRange: [number, number];
  };
  drillDepthCaps: Record<string, number>;
}

const MINING_BALANCE = miningBalance as MiningBalanceConfig;

const XP_HAZARD_CHANCE_PER_POINT = 0.00004;
const XP_HAZARD_CHANCE_CAP = 0.12;
const XP_DAMAGE_BONUS_PER_POINT = 0.00018;
const XP_DAMAGE_BONUS_CAP = 0.35;
const XP_THREAT_SPEED_PER_POINT = 0.00045;
const XP_THREAT_SPEED_CAP = 0.28;

function getXpHazardBonus(xp: number): number {
  const normalizedXp = Math.max(0, xp);
  return Math.min(XP_HAZARD_CHANCE_CAP, normalizedXp * XP_HAZARD_CHANCE_PER_POINT);
}

function getXpDamageMultiplier(xp: number): number {
  const bonus = Math.min(XP_DAMAGE_BONUS_CAP, Math.max(0, xp) * XP_DAMAGE_BONUS_PER_POINT);
  return 1 + bonus;
}

function getXpThreatFactor(xp: number): number {
  const bonus = Math.min(XP_THREAT_SPEED_CAP, Math.max(0, xp) * XP_THREAT_SPEED_PER_POINT);
  return 1 + bonus;
}

function getDepthBand(depth: number): DepthBand {
  const found = DEPTH_BANDS.find((band) => depth >= band.depthRange[0] && depth <= band.depthRange[1]);
  return found ?? DEPTH_BANDS[0];
}

function getDepthValueMultiplier(depth: number): number {
  for (const entry of MINING_BALANCE.depthValueMultipliers) {
    if (depth >= entry.depthRange[0] && depth <= entry.depthRange[1]) {
      return entry.multiplier;
    }
  }
  return 1;
}

function getYieldReductionFactor(): number {
  const min = MINING_BALANCE.yieldReduction.min;
  const max = MINING_BALANCE.yieldReduction.max;
  const factor = Math.random() * (max - min) + min;
  return Math.max(min, Math.min(max, factor));
}

function getEmptyChance(depth: number): number {
  for (const entry of MINING_BALANCE.emptyChance) {
    if (depth >= entry.depthRange[0] && depth <= entry.depthRange[1]) {
      return entry.chance;
    }
  }
  return 0;
}

function chooseDropRarity(band: DepthBand, guaranteed?: DropRarity): DropRarity {
  if (guaranteed && band.lootTables[guaranteed]) {
    return guaranteed;
  }
  const weights: [DropRarity, number][] = (["common", "rare", "ultra"] as DropRarity[]).map((rarity) => [
    rarity,
    band.dropWeights[rarity] ?? 0
  ]);
  const total = weights.reduce((sum, [, weight]) => sum + weight, 0);
  if (total <= 0) return "common";
  let roll = Math.random() * total;
  for (const [rarity, weight] of weights) {
    roll -= weight;
    if (roll <= 0) return rarity;
  }
  return "common";
}

function rollBandLoot(band: DepthBand, rarity: DropRarity) {
  const tableId = band.lootTables[rarity] ?? band.lootTables.common;
  const table = getTable(tableId);
  return rollTableEntry(table);
}

function accumulatePendingOre(session: MiningSessionState, commodityId: string, amount: number) {
  if (amount <= 0) return;
  const buffer = session.pendingOre || {};
  buffer[commodityId] = (buffer[commodityId] ?? 0) + amount;
  session.pendingOre = buffer;
}

function flushPendingOre(session: MiningSessionState, state: GameState) {
  const buffer = session.pendingOre || {};
  const result: Record<string, number> = {};
  session.pendingOre = {};
  for (const [commodityId, qty] of Object.entries(buffer)) {
    const rounded = Math.ceil(Math.max(0, qty));
    if (rounded <= 0) continue;
    const added = addCargoWithCapacity(state, commodityId, rounded);
    if (added > 0) {
      recordOreGain(session, commodityId, added);
    }
    result[commodityId] = added;
  }
  return result;
}

function computeSurveySignal(
  session: MiningSessionState,
  row: number,
  col: number,
  depth: number
) {
  const dx = col - (session.veinCol ?? 0);
  const dy = row - (session.veinRow ?? 0);
  const dz = depth - (session.veinDepth ?? 3);
  const planarDist = Math.sqrt(dx * dx + dy * dy);
  const penalty = planarDist * 2.6 + Math.abs(dz) * 1.5;
  const noiseScale = Math.max(0.2, 1 - (session.drillsUsed ?? 0) * 0.04);
  const noise = (Math.random() * 2 - 1) * noiseScale;
  const baseSignal = 10 - penalty;
  let signal = clamp(Math.round(baseSignal + noise), 0, 10);
  if (session.lowSignalMode) {
    signal = clamp(signal, 0, 5);
  }
  const directionClass = computeDirectionClass(session.veinRow ?? 0, session.veinCol ?? 0, row, col);
  const depthHint = depthHintClass(depth, session.veinDepth ?? 3);
  const depthScale = depth <= 3 ? 0.6 : 1;
  const scaledSignal = clamp(Math.round(signal * depthScale), 0, 10);
  return {
    signal: scaledSignal,
    directionClass,
    depthHint
  };
}

function generateClusters(session: MiningSessionState): MiningCluster[] {
  const rows = session.gridRows ?? GRID_ROWS;
  const cols = session.gridCols ?? GRID_COLS;
  const clusters: MiningCluster[] = [];
  for (const band of DEPTH_BANDS) {
    const maxClusters = band.cluster.maxClusters;
    let placed = 0;
    for (let attempt = 0; attempt < CLUSTER_SETTINGS.maxAttemptsPerBand && placed < maxClusters; attempt++) {
      if (band.depthRange[0] < (MINING_BALANCE.clusterGateDepth ?? 0)) continue;
      if (Math.random() > band.cluster.chance) continue;
      const cells = buildClusterCells(rows, cols, band.cluster.minSize, band.cluster.maxSize, clusters);
      if (cells.length >= band.cluster.minSize) {
        clusters.push({ bandId: band.id, cells });
        placed += 1;
      }
    }
  }
  return clusters;
}

function buildClusterCells(
  rows: number,
  cols: number,
  minSize: number,
  maxSize: number,
  existing: MiningCluster[]
) {
  const occupied = new Set(existing.flatMap((cluster) => cluster.cells.map((cell) => `${cell.row}:${cell.col}`)));
  const targetSize = Math.max(minSize, Math.min(maxSize, randBetween(minSize, maxSize)));
  const cells: { row: number; col: number }[] = [];
  const startRow = Math.floor(Math.random() * rows);
  const startCol = Math.floor(Math.random() * cols);
  cells.push({ row: startRow, col: startCol });
  occupied.add(`${startRow}:${startCol}`);
  const directions = [
    { dr: -1, dc: 0 },
    { dr: 1, dc: 0 },
    { dr: 0, dc: -1 },
    { dr: 0, dc: 1 }
  ];
  let tries = 0;
  while (cells.length < targetSize && tries < 30) {
    const cursor = cells[Math.floor(Math.random() * cells.length)];
    const dir = directions[Math.floor(Math.random() * directions.length)];
    const candidate = { row: cursor.row + dir.dr, col: cursor.col + dir.dc };
    if (
      candidate.row < 0 ||
      candidate.row >= rows ||
      candidate.col < 0 ||
      candidate.col >= cols ||
      occupied.has(`${candidate.row}:${candidate.col}`)
    ) {
      tries += 1;
      continue;
    }
    occupied.add(`${candidate.row}:${candidate.col}`);
    cells.push(candidate);
  }
  return cells;
}

function findCluster(session: MiningSessionState, row: number, col: number) {
  return session.clusters?.find((cluster) =>
    cluster.cells.some((cell) => cell.row === row && cell.col === col)
  );
}

function triggerComboFlash(session: MiningSessionState, text: string) {
  session.comboFlash = text;
  session.comboFlashTimer = 40;
}

function tickComboFlash(session: MiningSessionState) {
  if (session.comboFlashTimer && session.comboFlashTimer > 0) {
    session.comboFlashTimer -= 1;
    if (session.comboFlashTimer <= 0) {
      session.comboFlash = undefined;
    }
  }
}

function updateComboGauge(session: MiningSessionState, band: DepthBand) {
  const prevLevel = session.lastComboBandId ? DEPTH_BAND_LEVELS.get(session.lastComboBandId) ?? band.level : band.level;
  let gain = band.comboGain;
  if (band.level > prevLevel) {
    const diff = band.level - prevLevel;
    gain += COMBO_CONFIG.bandBonus * diff;
    if (diff > 1) {
      gain += COMBO_CONFIG.skipBandBonus * (diff - 1);
    }
  }
  const prevGauge = session.comboGauge ?? 0;
  const nextGauge = Math.min(COMBO_CONFIG.threshold, prevGauge + gain);
  session.comboGauge = nextGauge;
  session.lastComboBandId = band.id;
  let triggered = false;
  if (nextGauge >= COMBO_CONFIG.threshold) {
    triggered = true;
    session.comboGauge = 0;
    session.comboBonusTurns = COMBO_CONFIG.duration;
    session.comboGuarantyRemaining = COMBO_CONFIG.guaranteedRarityCount;
    session.comboThreatReduction = COMBO_CONFIG.threatReduction;
    const reveals = pickComboReveals(session, COMBO_CONFIG.revealTiles);
    session.comboRevealedCells = reveals;
    revealCells(session, reveals);
  }
  return { gain: nextGauge - prevGauge, triggered };
}

function pickComboReveals(session: MiningSessionState, count: number) {
  const grid = session.grid ?? [];
  const candidates: { row: number; col: number }[] = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < (grid[r] ?? []).length; c++) {
      const cell = grid[r][c];
      if (cell && !cell.drilled && cell.hintSignal == null) {
        candidates.push({ row: r, col: c });
      }
    }
  }
  const picked: { row: number; col: number }[] = [];
  for (let i = 0; i < count && candidates.length; i++) {
    const idx = Math.floor(Math.random() * candidates.length);
    picked.push(candidates[idx]);
    candidates.splice(idx, 1);
  }
  return picked;
}

function revealCells(session: MiningSessionState, cells: { row: number; col: number }[]) {
  const depthCap = Math.min(MAX_DEPTH, getDrillTierCap(session.drillTier));
  const depth = clamp(Math.round(session.depth ?? 3), 1, depthCap);
  session.depth = depth;
  const depthBand = getDepthBand(depth);
  const riskLevel = updateRiskChainLevel(session, depthBand.level, { row: r, col: c });
  updateComboGauge(session, depthBand);
  for (const coord of cells) {
    const gridRow = session.grid?.[coord.row];
    if (!gridRow) continue;
    const cell = gridRow[coord.col];
    if (!cell) continue;
    const data = computeSurveySignal(session, coord.row, coord.col, depth);
    cell.hintSignal = data.signal;
  }
}

export function getRiskChainRewardMult(level: number): number {
  for (const tier of RISK_CHAIN_CONFIG.rewardMultipliers) {
    if (level <= tier.maxLevel) {
      return tier.multiplier;
    }
  }
  return 1;
}

export function getRiskChainHazardChance(level: number, xp: number = 0): number {
  const xpBonus = getXpHazardBonus(xp);
  return Math.min(
    1,
    RISK_CHAIN_CONFIG.hazardBaseChance +
      level * RISK_CHAIN_CONFIG.hazardPerChain +
      xpBonus
  );
}

function resetRiskChain(session: MiningSessionState) {
  session.riskChainLevel = 0;
  session.lastRiskBandLevel = null;
  session.nextRiskGuaranteedRarity = null;
  session.riskChainMilestoneLevel = 0;
}

function revealRiskNeighbors(
  session: MiningSessionState,
  coords: { row: number; col: number } | null,
  count: number
) {
  if (!coords || !session.grid) return;
  const deltas = [
    { dr: -1, dc: 0 },
    { dr: 1, dc: 0 },
    { dr: 0, dc: -1 },
    { dr: 0, dc: 1 }
  ];
  const cells: { row: number; col: number }[] = [];
  for (const delta of deltas) {
    const row = coords.row + delta.dr;
    const col = coords.col + delta.dc;
    if (row < 0 || row >= (session.grid?.length ?? 0)) continue;
    if (col < 0 || col >= (session.grid?.[row]?.length ?? 0)) continue;
    cells.push({ row, col });
    if (cells.length >= count) break;
  }
  if (cells.length) {
    revealCells(session, cells);
  }
}

function handleRiskChainMilestone(
  session: MiningSessionState,
  level: number,
  coords: { row: number; col: number }
) {
  const milestones = RISK_CHAIN_CONFIG.milestones ?? [];
  let currentMilestone = session.riskChainMilestoneLevel ?? 0;
  for (const milestone of milestones) {
    if (level >= milestone && currentMilestone < milestone) {
      currentMilestone = milestone;
      session.riskChainMilestoneLevel = milestone;
      if (milestone === 3) {
        triggerComboFlash(session, "Steady Dig! Rewards climbing.");
        revealRiskNeighbors(session, coords, 1);
      } else if (milestone === 5) {
        triggerComboFlash(session, "Deep Run! Hidden tiles revealed.");
        revealRiskNeighbors(session, coords, 2);
        session.nextRiskGuaranteedRarity = "rare";
      } else if (milestone === 8) {
        triggerComboFlash(session, "Loaded Veins! Next dig at least uncommon.");
        session.nextRiskGuaranteedRarity = "rare";
      } else if (milestone >= 10) {
        triggerComboFlash(session, "Jackpot Depth! Artifacts imminent.");
        session.nextRiskGuaranteedRarity = "rare";
      }
    }
  }
}

function consumeGuaranteedRarity(session: MiningSessionState): DropRarity | undefined {
  if (session.comboGuarantyRemaining && session.comboGuarantyRemaining > 0) {
    session.comboGuarantyRemaining -= 1;
    return "rare";
  }
  const next = session.nextRiskGuaranteedRarity;
  if (next) {
    session.nextRiskGuaranteedRarity = null;
    return next as DropRarity;
  }
  return undefined;
}

function updateRiskChainLevel(
  session: MiningSessionState,
  bandLevel: number,
  coords: { row: number; col: number }
) {
  const prevBand = session.lastRiskBandLevel ?? -1;
  if (bandLevel < prevBand) {
    resetRiskChain(session);
  }
  session.lastRiskBandLevel = bandLevel;
  const nextLevel = Math.max(1, (session.riskChainLevel ?? 0) + 1);
  session.riskChainLevel = nextLevel;
  handleRiskChainMilestone(session, nextLevel, coords);
  return nextLevel;
}

function applyRiskHazard(
  session: MiningSessionState,
  state: GameState,
  level: number,
  playerXp: number,
  extraMultiplier = 1
) {
  const baseMultiplier = 1 + level * RISK_CHAIN_CONFIG.hazardDamageMultiplierPerLevel;
  const multiplier =
    baseMultiplier * getXpDamageMultiplier(playerXp) * Math.max(0, extraMultiplier);
  const damage = maybeApplyDrillDamage(
    state,
    1,
    [RISK_CHAIN_CONFIG.hazardDamageRange[0], RISK_CHAIN_CONFIG.hazardDamageRange[1]],
    multiplier
  );
  triggerComboFlash(session, `Risk hazard! -${damage} hull.`);
  resetRiskChain(session);
  return damage;
}
function decrementComboBonus(session: MiningSessionState) {
  if (session.comboBonusTurns && session.comboBonusTurns > 0) {
    session.comboBonusTurns -= 1;
    if (session.comboBonusTurns <= 0) {
      session.comboThreatReduction = 0;
    }
  }
}

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
  const baseEfficiency = Math.max(0.05, devTune.miningEfficiency ?? 0.35);
  const explorationBonus = Math.min(0.2, (session.explorationScore ?? 0) / 40);
  const efficiency = baseEfficiency + explorationBonus;
  return Math.min(0.6, efficiency);
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
  const maintenance = getMaintenanceModifier(state);
  const shieldDrain = Math.round(scaled * (maintenance.shield - 1));
  if (shieldDrain > 0) {
    const drained = Math.min(shieldDrain, state.ship.shields);
    state.ship.shields = Math.max(0, state.ship.shields - drained);
    if (drained > 0) {
      state.notifications.push(`Shield wear due to upkeep drains ${drained} shield.`);
    }
  }
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
  options?: { force?: boolean; easySignals?: boolean }
): boolean {
  if (state.lastMiningSystemId === systemId) {
    state.notifications.push("You need to travel to another system before mining again.");
    return false;
  }

  const belt = pickBelt(systemId, beltId);
  const beltState = ensureBeltState(state, belt.id);
  if (options?.force) {
    beltState.depletedUntilDay = undefined;
  }
  if (beltState.depletedUntilDay !== undefined && state.time.day < beltState.depletedUntilDay) {
    state.notifications.push(
      `This belt is depleted. It will recover by day ${beltState.depletedUntilDay}.`
    );
    return false;
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
    lowSignalMode: Boolean(options?.easySignals),
    accumulatedOre: {},
    beltName: belt.name,
    lastMessage: "Belt initialized. Stability nominal.",
    lastYield: undefined,
    samples: [],
    comboGauge: 0,
    comboBonusTurns: 0,
    comboGuarantyRemaining: 0,
    comboThreatReduction: 0,
    lastComboBandId: null,
    comboRevealedCells: [],
    riskChainLevel: 0,
    lastRiskBandLevel: null,
    nextRiskGuaranteedRarity: null,
    riskChainMilestoneLevel: 0,
    clusters: [],
    drillTier: DEFAULT_DRILL_TIER
  };
  state.miningSession.clusters = generateClusters(state.miningSession);
  resetRiskChain(state.miningSession);
  state.lastMiningSystemId = systemId;
  return true;
}

export function setMiningDepth(state: GameState, depth: number) {
  const session = state.miningSession;
  if (!session) return;
  let target = clamp(Math.round(depth), 1, Math.min(MAX_DEPTH, getDrillTierCap(session.drillTier)));
  target = clampDepthByDrill(target, session);
  session.depth = target;
}

export function setDrillTier(state: GameState, tier: DrillTier) {
  const session = state.miningSession;
  if (!session) return;
  session.drillTier = tier;
  session.depth = clampDepthByDrill(session.depth ?? 1, session);
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
  const depthCap = Math.min(MAX_DEPTH, getDrillTierCap(session.drillTier));
  const depth = clamp(Math.round(session.depth ?? 3), 1, depthCap);
  session.depth = depth;
  const riskLevel = session.riskChainLevel ?? 0;
  tickComboFlash(session);
  session.grid = session.grid ?? createGrid();
  session.drillsUsed = (session.drillsUsed ?? 0) + 1;

  const signalData = computeSurveySignal(session, r, c, depth);
  const cell = session.grid[r][c];
  const firstDrill = !cell.drilled;
  cell.drilled = true;
  cell.signal = signalData.signal;
  cell.directionClass = signalData.directionClass;
  cell.depthHint = signalData.depthHint.hint;
  cell.depthClass = signalData.depthHint.className;
  cell.hintSignal = null;
  selectCell(session.grid, r, c);
  session.selectedRow = r;
  session.selectedCol = c;

  if (firstDrill) {
    session.uniqueDrills = (session.uniqueDrills ?? 0) + 1;
    session.explorationScore = Math.min(10, (session.explorationScore ?? 0) + signalData.signal / 20);
  } else {
    session.explorationScore = Math.min(10, (session.explorationScore ?? 0) + signalData.signal / 50);
  }

  const depthBand = getDepthBand(depth);
  updateComboGauge(session, depthBand);

  const cluster = findCluster(session, r, c);
  const clusterActive = Boolean(
    cluster && depthBand.level >= (DEPTH_BAND_LEVELS.get(cluster.bandId) ?? -1)
  );
  cell.clusterHint = clusterActive;

  const orePerSignal = 0.001;
  let orePulse = Math.max(0, signalData.signal * orePerSignal);
  if (signalData.signal > 0 && orePulse < 1) orePulse = 1;
  if (clusterActive) {
    orePulse += signalData.signal * 0.25;
  }

  const guaranteedRarity = consumeGuaranteedRarity(session);
  const rarity = chooseDropRarity(depthBand, guaranteedRarity);
  const loot = rollBandLoot(depthBand, rarity);
  const commodityId = loot?.id ?? session.resourceId ?? "aurite_ore";
  const bonusAmount = loot?.amount ?? 0;
  const totalOre = orePulse + bonusAmount;
  accumulatePendingOre(session, commodityId, totalOre);

  const playerXp = Math.max(0, state.player.xp ?? 0);
  const threatMultiplier = Math.max(0, devTune.miningThreatMultiplier ?? 0.7);
  const baseThreatGain = 3 + depth;
  const threatReduction = session.comboThreatReduction ?? 0;
  const xpThreatFactor = getXpThreatFactor(playerXp);
  const threatGain = Math.max(
    0,
    Math.round(
      baseThreatGain * threatMultiplier * xpThreatFactor * Math.max(0, 1 - threatReduction)
    )
  );
  session.threat = clamp((session.threat ?? 0) + threatGain, 0, 100);
  session.currentPirateChance = (session.threat ?? 0) / 100;
  const clusterNote = clusterActive ? " vein" : "";
  session.lastMessage = `Pulse at X${c + 1}, Y${r + 1}, Z${depth} (${depthBand.label}${clusterNote}): signal ${signalData.signal}. Threat +${threatGain}%. Ore +${Math.round(totalOre)} (queued) Risk x${riskLevel}.`;
  decrementComboBonus(session);

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
    state.lastMiningSystemId = null;
    session.currentPirateChance = 0;
    session.lastMessage = "Pirates detected! Threat reset to 0%. Claim locked for 1 day.";
  }

  return {
    signal: signalData.signal,
    directionClass: signalData.directionClass,
    depthHint: signalData.depthHint.hint,
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
  const depthBand = getDepthBand(depth);
  const riskLevel = session.riskChainLevel ?? 0;
  const comboResults = updateComboGauge(session, depthBand);
  if (comboResults.triggered) {
    triggerComboFlash(session, "Combo bonus ready!");
  } else if (comboResults.gain > 0) {
    triggerComboFlash(session, `Combo +${comboResults.gain}`);
  }
  const playerXp = Math.max(0, state.player.xp ?? 0);
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
  const reductionFactor = getYieldReductionFactor();
  yieldWithBonus = Math.max(0, Math.ceil(yieldWithBonus * reductionFactor));
  const emptyChance = getEmptyChance(depth);
  const dryHit = Math.random() < emptyChance;
  if (dryHit) {
    yieldWithBonus = 0;
    session.lastMessage = `Drill at depth ${depth} hit barren rock.`;
  }
  const depthRule = DEPTH_RULES[depth] ?? DEPTH_RULES[3];
  const drillDamage = maybeApplyDrillDamage(
    state,
    depthRule.drillDamageChance,
    depthRule.drillDamageRange,
    1 + depthBand.level * 0.1
  );
    if (drillDamage > 0) {
      state.notifications = state.notifications || [];
      state.notifications.push(`Final drill backlash: -${drillDamage} hull.`);
    }
  const guaranteedRarity = consumeGuaranteedRarity(session);
  const rarity = chooseDropRarity(depthBand, guaranteedRarity);
  const loot = rollBandLoot(depthBand, rarity);
  const commodityId = loot?.id ?? session.resourceId ?? "aurite_ore";
  const yieldReductionFactor = 0.7;
  const reducedYield =
    yieldWithBonus > 0 ? Math.max(1, Math.round(yieldWithBonus * yieldReductionFactor)) : 0;
  yieldWithBonus = reducedYield;
    accumulatePendingOre(session, commodityId, yieldWithBonus);
    const flushResult = flushPendingOre(session, state);
  const added = flushResult[commodityId] ?? 0;
  const localPrice = Math.max(1, getLocalPrice(session.systemId, commodityId));
  const payoutMultiplier = Math.max(
    0.05,
    ((devTune.miningPayoutMultiplier ?? 0.35) * MINING_PAYOUT_REDUCTION)
  );
  let approxValue = Math.round(localPrice * added * payoutMultiplier * depthBand.valueMultiplier);
  const depthValueMult = getDepthValueMultiplier(depth);
  approxValue = Math.round(approxValue * depthValueMult);
  const rewardMult = getRiskChainRewardMult(riskLevel);
  approxValue = Math.round(approxValue * rewardMult);
  const rarityPriceBonus = SELL_PRICE_MULTIPLIERS[rarity] ?? 1;
  approxValue = Math.round(approxValue * rarityPriceBonus);
  const xpGain = Math.max(
    0,
    Math.round(added * depthBand.valueMultiplier * rewardMult * 0.35)
  );
  if (xpGain > 0) {
    awardXp(xpGain, "mining");
    session.xpEarned = (session.xpEarned ?? 0) + xpGain;
  }

  let rareFind: { id: string; amount: number } | null = null;
  if (signal >= 6 && Math.random() < 0.1 + explorationBonus * 0.5) {
    const rareAmount = Math.max(1, Math.round(signal / 3));
    const rareAdded = addCargoWithCapacity(state, "stellite_fragment", rareAmount);
    if (rareAdded > 0) {
      rareFind = { id: "stellite_fragment", amount: rareAdded };
      const rarePrice = Math.max(1, getLocalPrice(session.systemId, rareFind.id));
      approxValue += Math.round(
        rarePrice * rareAdded * payoutMultiplier * SELL_PRICE_MULTIPLIERS.rare
      );
      recordOreGain(session, rareFind.id, rareAdded);
    }
  }
  const depthRareFind = rarity !== "common" ? { id: commodityId, amount: added } : null;
  const finalRareFind = rareFind ?? depthRareFind;

    session.totalValueMined += approxValue;
    session.lastYield = {
      commodityId,
      amount: added,
      approxValue,
      rareFind: finalRareFind
    };

  const finalThreatGain = 6 + depth * 2;
  const threatMultiplier = Math.max(0, devTune.miningThreatMultiplier ?? 0.7);
  const threatReduction = session.comboThreatReduction ?? 0;
  const xpThreatFactor = getXpThreatFactor(playerXp);
  const threatGain = Math.max(
    0,
    Math.round(
      finalThreatGain * threatMultiplier * xpThreatFactor * Math.max(0, 1 - threatReduction)
    )
  );
  session.threat = clamp((session.threat ?? 0) + threatGain, 0, 100);
  session.currentPirateChance = (session.threat ?? 0) / 100;
  const damageNote = drillDamage > 0 ? ` Drill backlash: -${drillDamage} hull.` : "";
  const dryNote = dryHit ? " Barren strike, no ore collected." : "";
  session.lastMessage = `Final drill X${c + 1}, Y${r + 1}, Z${depth} (${depthBand.label}): signal ${signal}, efficiency ${(finalEfficiency * 100).toFixed(
    0
  )}%, ore ${added} stored. Threat +${threatGain}%.${damageNote}${dryNote} Risk x${riskLevel}`;
  resetRiskChain(session);

  decrementComboBonus(session);
  const hazardBonus = isPerkUnlocked("extraction_t3_deep_delver") ? 0.05 : 0;
  const hazardChance = Math.max(
    0,
    getRiskChainHazardChance(riskLevel, playerXp) - hazardBonus
  );
  let hazardDamage = 0;
  if (Math.random() < hazardChance) {
    const haulerReduction = isPerkUnlocked("ship_hauler_hazard_steadiness") ? 0.85 : 1;
    hazardDamage = applyRiskHazard(session, state, riskLevel, playerXp, haulerReduction);
  }
  const fightTriggered = false;
  session.runComplete = true;
  session.active = false;

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
  const depthCap = Math.min(MAX_DEPTH, getDrillTierCap(session.drillTier));
  const depth = clamp(Math.round(session.depth ?? 3), 1, depthCap);
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
    resetRiskChain(session);
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
  resetRiskChain(session);
  if (!state.notifications) state.notifications = [];
  state.notifications.push(message);
  state.miningSession = null;
}

export function cashOutMiningSession(state: GameState): string | null {
  const session = state.miningSession;
  if (!session || !session.active) return null;
  const level = session.riskChainLevel ?? 0;
  if (level < 3) return null;
  const flushResult = flushPendingOre(session, state);
  const total = Object.values(flushResult).reduce((sum, qty) => sum + qty, 0);
  const bonus = Math.max(
    0,
    Math.round(RISK_CHAIN_CONFIG.cashOutBase + level * RISK_CHAIN_CONFIG.cashOutPerLevel)
  );
  const depthBand = getDepthBand(session.depth ?? 3);
  const rewardMult = getRiskChainRewardMult(level);
  const xpGain = Math.max(
    0,
    Math.round(total * depthBand.valueMultiplier * rewardMult * 0.35)
  );
  if (xpGain > 0) {
    awardXp(xpGain, "mining");
    session.xpEarned = (session.xpEarned ?? 0) + xpGain;
  }
  addCreditsEarned(bonus);
  state.player.credits = Math.max(0, state.player.credits + bonus);
  resetRiskChain(session);
  session.runComplete = true;
  session.active = false;
  const message = `Cash out (Risk ${level}): rounded ${total} ore + ${bonus} cr bonus.`;
  session.lastMessage = message;
  return message;
}
