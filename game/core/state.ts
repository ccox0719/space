export interface TimeState {
  day: number;
  turn: number;
}

export interface LocationState {
  systemId: string;
  docked: boolean;
}

export interface MarketTemporaryModifier {
  multiplier: number;
  remainingTurns: number;
}

export interface MarketEvent {
  systemId: string;
  commodityId?: string | null;
  multiplier: number;
  expiresAtDay?: number;
  expiresAtTurn: number;
  label?: string;
}

export interface MarketIntelSnapshot {
  turn: number;
  prices: Record<string, { buy: number; sell: number }>;
}

export interface MarketState {
  temporaryModifiers: Record<string, MarketTemporaryModifier>;
  activeEvents: MarketEvent[];
  localAdjustments: Record<string, Record<string, number>>; // systemId -> commodityId -> multiplier
  priceIntel: Record<string, MarketIntelSnapshot>; // systemId -> snapshot
  initialDriftSeeded?: boolean;
}

export interface PlayerState {
  credits: number;
  roles: string[];
  wanted: number;
  hasChosenStarter: boolean;
}

export interface SystemIntel {
  systemId: string;
  lastPriceSeenDay?: number;
  lastRiskSeenDay?: number;
}

export interface IntelState {
  systems: SystemIntel[];
}

export interface RunStats {
  daysSurvived: number;
  jumpsMade: number;
  systemsVisited: number;
  creditsEarnedTotal: number;
  highestNetWorth: number;
  tradeProfitTotal: number;
  commodityVolumes: Record<string, number>;
  mostTradedCommodityId?: string;
  contractsCompleted: number;
  contractPayoutTotal: number;
  fightsSurvived: number;
  shipsDestroyed: number;
  damageDealtTotal: number;
  damageTakenTotal: number;
  miningRuns: number;
  oreMinedTotal: number;
  rareFinds: number;
}

export type GameOverReason = "ship_destroyed" | "out_of_fuel" | "story_fail" | "other";

export interface RunSummary {
  score: number;
  reason: GameOverReason;
  message: string;
  location: string;
  stats: RunStats;
}

export interface GameOverState {
  active: boolean;
  reason: GameOverReason | null;
  message?: string;
  summary?: RunSummary;
}

export interface HighScoreEntry {
  score: number;
  timestamp: number;
  reason: GameOverReason;
  daysSurvived: number;
  contractsCompleted: number;
  shipsDestroyed: number;
  message: string;
}

import shipsData from "../content/ships.json";
import type { ShipDef, ShipPassive } from "./contentTypes";

const shipsCatalog = shipsData as ShipDef[];
const starterTemplate = shipsCatalog.find((ship) => ship.starter) ?? shipsCatalog[0];
const starterHardpoints = starterTemplate?.hardpoints.length ?? 0;
const STARTER_WEAPON_BY_SLOT: Record<string, string | null> = {
  "small:energy": "laser_mk1",
  "small:projectile": "coil_autocannon",
  "small:missile": "stinger_missiles",
  "medium:energy": "storm_lance",
  "medium:projectile": "railgun_mk1",
  "medium:missile": "hailstorm_pod",
  "large:projectile": "mass_driver"
};

export interface ShipState {
  templateId: string;
  name: string;
  hp: number;
  maxHp: number;
  shields: number;
  maxShields: number;
  fuel: number;
  maxFuel: number;
  cargoCapacity: number;
  cargo: Record<string, number>;
  modules: string[];
  weapons: (string | null)[];
  weaponPower: number;
  evasion: number;
  maneuverRating: number;
  components: string[];
  hardpoints: {
    size: "small" | "medium" | "large";
    type: "energy" | "projectile" | "missile" | "hybrid";
  }[];
  passive?: ShipPassive | null;
}

export interface CombatState {
  enemyId: string;
  enemyName: string;
  enemyHp: number;
  enemyMaxHp: number;
  enemyShields: number;
  enemyMaxShields: number;
  enemyWeapons: string[];
  enemyCooldowns: number[];
  enemyTags?: string[];
  enemyCount?: number;
  playerCooldowns: number[];
  playerBracing: boolean;
  playerStance: "assault" | "balanced" | "evasive";
  playerStatus: {
    maneuverBonus: number;
    maneuverTurns: number;
    shieldBoost: number;
    shieldTurns: number;
  };
  enemyStatus: {
    weaponJammedTurns: number;
  };
  canEscape: boolean;
  totalRounds: number;
  startingHp: number;
  round: number;
  log: string[];
  adviceToken?: number;
}

export interface MiningSessionState {
  active: boolean;
  systemId: string;
  beltId?: string;
  resourceId?: string;
  minesTaken: number;
  totalValueMined: number;
  currentPirateChance: number;
  stability: number;
  maxStability: number;
  beltName?: string;
  lastMessage?: string;
  lastYield?: {
    commodityId: string;
    amount: number;
    approxValue: number;
    rareFind?: { id: string; amount: number } | null;
  };
}

export interface ReputationTrack {
  [factionId: string]: number;
}

export interface ContractState {
  id: string;
  name: string;
  description?: string;
  type: string;
  status: "active" | "completed" | "failed";
  sourceFaction?: string;
  targetSystemId?: string;
  reward?: { credits?: number; rep?: Record<string, number> };
  requirements?: Record<string, unknown>;
  progress?: Record<string, unknown>;
  acceptedTurn?: number;
  dueDay?: number;
}

export interface TradeLogEntry {
  action: "buy" | "sell";
  commodityId: string;
  quantity: number;
  price: number;
  systemId: string;
  turn: number;
}

export interface MiningBeltState {
  beltId: string;
  depletedUntilDay?: number;
}

export interface GameState {
  version: number;
  time: TimeState;
  location: LocationState;
  player: PlayerState;
  ship: ShipState;
  reputation: ReputationTrack;
  contracts: ContractState[];
  missions?: ContractState[]; // legacy alias
  combat: CombatState | null;
  miningSession?: MiningSessionState | null;
  miningBelts: MiningBeltState[];
  notifications: string[];
  transactions: TradeLogEntry[];
  inventory: {
    weapons: string[];
  };
  lastBattleResult?: import("./contentTypes").BattleResult | null;
  marketState: MarketState;
  intel: IntelState;
  runStats: RunStats;
  gameOver: GameOverState;
}

export function createRunStats(): RunStats {
  return {
    daysSurvived: 0,
    jumpsMade: 0,
    systemsVisited: 0,
    creditsEarnedTotal: 0,
    highestNetWorth: 0,
    tradeProfitTotal: 0,
    commodityVolumes: {},
    contractsCompleted: 0,
    contractPayoutTotal: 0,
    fightsSurvived: 0,
    shipsDestroyed: 0,
    damageDealtTotal: 0,
    damageTakenTotal: 0,
    miningRuns: 0,
    oreMinedTotal: 0,
    rareFinds: 0
  };
}

export let gameState: GameState;

const LOADOUT_KEY = "cosmo_weapon_loadout";

export function loadPersistedLoadout(): { weapons: (string | null)[]; inventory: string[] } | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  const raw = window.localStorage.getItem(LOADOUT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return {
      weapons: Array.isArray(parsed.weapons) ? parsed.weapons : [],
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : []
    };
  } catch {
    return null;
  }
}

export function persistLoadout(): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  const payload = {
    weapons: gameState.ship.weapons,
    inventory: gameState.inventory?.weapons ?? []
  };
  window.localStorage.setItem(LOADOUT_KEY, JSON.stringify(payload));
}

export function newGameState(): GameState {
  return {
    version: 1,
    time: { day: 1, turn: 0 },
    location: { systemId: "helion_prime", docked: true },
    player: {
      credits: 1000,
      roles: ["trader"],
      wanted: 0,
      hasChosenStarter: false
    },
    ship: {
      templateId: starterTemplate?.id ?? "none",
      name: starterTemplate?.name ?? "Undefined Hull",
      hp: starterTemplate?.hull ?? 0,
      maxHp: starterTemplate?.hull ?? 0,
      shields: starterTemplate?.shields ?? 0,
      maxShields: starterTemplate?.shields ?? 0,
      fuel: starterTemplate?.fuel ?? 0,
      maxFuel: starterTemplate?.fuel ?? 0,
      cargoCapacity: starterTemplate?.cargo ?? 0,
      cargo: {},
      modules: [],
      weapons:
        starterTemplate?.hardpoints.map(
          (hp) => STARTER_WEAPON_BY_SLOT[`${hp.size}:${hp.type}`] ?? null
        ) ?? Array(starterHardpoints).fill(null),
      weaponPower: 12,
      evasion: 5,
      maneuverRating: starterTemplate?.maneuverRating ?? 0,
      components: [],
      hardpoints: starterTemplate?.hardpoints.map((hp) => ({ ...hp })) ?? []
      ,
      passive: starterTemplate?.passive ?? null
    },
    reputation: {},
    contracts: [],
    missions: [],
    combat: null,
    miningSession: null,
    miningBelts: [],
    notifications: [],
    transactions: [],
    inventory: {
      weapons: ["laser_mk1"]
    },
    lastBattleResult: null,
    marketState: {
      temporaryModifiers: {},
      activeEvents: [],
      localAdjustments: {},
      priceIntel: {},
      initialDriftSeeded: false
    },
    intel: {
      systems: []
    }
    ,
    runStats: createRunStats(),
    gameOver: { active: false, reason: null }
  };
}

export function setGameState(state: GameState) {
  gameState = state;
}

export interface CombatDevTuning {
  pirateEncounterRateBase: number;
  pirateCargoValueSensitivity: number;
  navyEncounterRateBase: number;
  maxEncountersPerDay: number;

  enemyHpMultiplier: number;
  enemyDamageMultiplier: number;
  enemyAccuracyMultiplier: number;
  enemyCountMin: number;
  enemyCountMax: number;
  difficultyScalePerDay: number;
  difficultyScalePerShipPower: number;

  creditsRewardMultiplier: number;
  lootDropChance: number;
  rareLootChance: number;
  repGainMultiplier: number;

  playerDamageTakenMultiplier: number;
  fleeSuccessBonus: number;
  globalIncomeMultiplier: number;
  globalDangerMultiplier: number;
  encounterChancePerJump: number;
  nonPirateEventWeight: number;
  showEncounterDebug: number;
}

export interface DevTuneConfig {
  miningYieldMultiplier: number;
  rareMineralChance: number;
  miningDuration: number;
  marketPriceVolatility: number;
  marketDailyTrendStrength: number;
  marketBurstChance: number;
  marketCrashChance: number;
  tradeProfitMultiplier: number;
  contractPayoutMultiplier: number;
  contractDifficultyMultiplier: number;
  fuelCostMultiplier: number;
  travelRiskScaling: number;
  eventFrequency: number;
  eventDangerMultiplier: number;
  eventRewardMultiplier: number;
  progressionSpeedMultiplier: number;
  combat: CombatDevTuning;
}

const DEV_TUNE_KEY = "space-dev-tune";

export const DEFAULT_DEV_TUNE: DevTuneConfig = {
  miningYieldMultiplier: 1,
  rareMineralChance: 0,
  miningDuration: 5,
  marketPriceVolatility: 100,
  marketDailyTrendStrength: 1,
  marketBurstChance: 5,
  marketCrashChance: 5,
  tradeProfitMultiplier: 1,
  contractPayoutMultiplier: 1,
  contractDifficultyMultiplier: 1,
  fuelCostMultiplier: 1,
  travelRiskScaling: 100,
  eventFrequency: 50,
  eventDangerMultiplier: 1,
  eventRewardMultiplier: 1,
  progressionSpeedMultiplier: 1,
  combat: {
    pirateEncounterRateBase: 0,
    pirateCargoValueSensitivity: 1,
    navyEncounterRateBase: 0,
    maxEncountersPerDay: 10,
    enemyHpMultiplier: 1,
    enemyDamageMultiplier: 1,
    enemyAccuracyMultiplier: 1,
    enemyCountMin: 1,
    enemyCountMax: 1,
    difficultyScalePerDay: 0,
    difficultyScalePerShipPower: 1,
    creditsRewardMultiplier: 1,
    lootDropChance: 100,
    rareLootChance: 12,
    repGainMultiplier: 1,
    playerDamageTakenMultiplier: 1,
    fleeSuccessBonus: 0,
    globalIncomeMultiplier: 1,
    globalDangerMultiplier: 1,
    encounterChancePerJump: 100,
    nonPirateEventWeight: 1,
    showEncounterDebug: 0
  }
};

export let devTune: DevTuneConfig = { ...DEFAULT_DEV_TUNE };

function mergeCombatTuning(
  incoming: Partial<CombatDevTuning> & Record<string, unknown>
): CombatDevTuning {
  return {
    ...DEFAULT_DEV_TUNE.combat,
    ...incoming
  };
}

export function loadDevTune(): void {
  if (typeof window === "undefined" || !window.localStorage) {
    devTune = { ...DEFAULT_DEV_TUNE };
    return;
  }

  const raw = window.localStorage.getItem(DEV_TUNE_KEY);
  if (!raw) {
    devTune = { ...DEFAULT_DEV_TUNE };
    return;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<DevTuneConfig> & Record<string, unknown>;

    // Backward compatibility: map legacy combat fields into the new combat bucket.
    const legacyCombat: Partial<CombatDevTuning> = {};
    if (typeof parsed.enemyHpMultiplier === "number") legacyCombat.enemyHpMultiplier = parsed.enemyHpMultiplier;
    if (typeof parsed.enemyDamageMultiplier === "number") legacyCombat.enemyDamageMultiplier = parsed.enemyDamageMultiplier;
    if (typeof parsed.combatRewardMultiplier === "number") legacyCombat.creditsRewardMultiplier = parsed.combatRewardMultiplier;
    if (typeof parsed.pirateEncounterRate === "number") legacyCombat.pirateEncounterRateBase = parsed.pirateEncounterRate;

    const combatPayload = mergeCombatTuning({
      ...(parsed.combat as Partial<CombatDevTuning>),
      ...legacyCombat
    });

    devTune = {
      ...DEFAULT_DEV_TUNE,
      ...parsed,
      combat: combatPayload
    };
  } catch {
    devTune = { ...DEFAULT_DEV_TUNE };
  }
}

export function persistDevTune(): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  window.localStorage.setItem(DEV_TUNE_KEY, JSON.stringify(devTune));
}

export function scaleTurnDelta(turns: number): number {
  const multiplier = devTune.progressionSpeedMultiplier ?? 1;
  return turns * multiplier;
}

export function resetCombatTuning(): void {
  devTune.combat = { ...DEFAULT_DEV_TUNE.combat };
}

export function getCombatTune(): CombatDevTuning {
  return devTune.combat ?? DEFAULT_DEV_TUNE.combat;
}

export function getShipPassive() {
  return gameState.ship.passive?.effects ?? {};
}

const RUN_HIGH_SCORES_KEY = "cosmo_run_high_scores";
const MAX_HIGH_SCORE_ENTRIES = 5;

export function snapshotRunStats(): RunStats {
  if (!gameState) return createRunStats();
  return {
    ...gameState.runStats,
    commodityVolumes: { ...gameState.runStats.commodityVolumes }
  };
}

export function computeRunScore(stats: RunStats): number {
  return Math.round(
    stats.creditsEarnedTotal / 10 +
      stats.contractsCompleted * 50 +
      stats.shipsDestroyed * 30 +
      stats.rareFinds * 40 +
      stats.systemsVisited * 5 +
      stats.daysSurvived * 3
  );
}

function loadHighScoreEntries(): HighScoreEntry[] {
  if (typeof window === "undefined" || !window.localStorage) return [];
  const raw = window.localStorage.getItem(RUN_HIGH_SCORES_KEY);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.slice(0, MAX_HIGH_SCORE_ENTRIES);
  } catch {
    return [];
  }
}

function saveHighScoreEntries(entries: HighScoreEntry[]): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  window.localStorage.setItem(RUN_HIGH_SCORES_KEY, JSON.stringify(entries.slice(0, MAX_HIGH_SCORE_ENTRIES)));
}

export function getHighScores(): HighScoreEntry[] {
  return loadHighScoreEntries();
}

export function recordHighScore(entry: HighScoreEntry): void {
  const entries = loadHighScoreEntries();
  entries.push(entry);
  entries.sort((a, b) => b.score - a.score);
  saveHighScoreEntries(entries);
}

export function clearHighScores(): void {
  if (typeof window === "undefined" || !window.localStorage) return;
  window.localStorage.removeItem(RUN_HIGH_SCORES_KEY);
}

export function addCreditsEarned(amount: number): void {
  if (!gameState || amount <= 0) return;
  gameState.runStats.creditsEarnedTotal += amount;
  const netWorth = gameState.player.credits;
  if (netWorth > gameState.runStats.highestNetWorth) {
    gameState.runStats.highestNetWorth = netWorth;
  }
}

export function addCommodityTrade(commodityId: string, quantity: number, revenue: number): void {
  if (!gameState) return;
  gameState.runStats.tradeProfitTotal += Math.max(0, revenue);
  const volumes = gameState.runStats.commodityVolumes;
  volumes[commodityId] = (volumes[commodityId] || 0) + quantity;
  const mostTraded = gameState.runStats.mostTradedCommodityId;
  if (!mostTraded || volumes[commodityId] > volumes[mostTraded]) {
    gameState.runStats.mostTradedCommodityId = commodityId;
  }
}

export function recordContractPayout(amount: number): void {
  if (!gameState || amount <= 0) return;
  gameState.runStats.contractPayoutTotal += amount;
}

export function recordContractCompletion(): void {
  if (!gameState) return;
  gameState.runStats.contractsCompleted += 1;
}

export function recordCombatDamageDealt(amount: number): void {
  if (!gameState || amount <= 0) return;
  gameState.runStats.damageDealtTotal += amount;
}

export function recordCombatDamageTaken(amount: number): void {
  if (!gameState || amount <= 0) return;
  gameState.runStats.damageTakenTotal += amount;
}

export function recordCombatVictory(): void {
  if (!gameState) return;
  gameState.runStats.fightsSurvived += 1;
}

export function recordShipDestroyed(): void {
  if (!gameState) return;
  gameState.runStats.shipsDestroyed += 1;
}

export function recordMiningYield(amount: number, rare: boolean): void {
  if (!gameState || amount <= 0) return;
  gameState.runStats.miningRuns += 1;
  gameState.runStats.oreMinedTotal += amount;
  if (rare) {
    gameState.runStats.rareFinds += 1;
  }
}

export function recordJump(): void {
  if (!gameState) return;
  gameState.runStats.jumpsMade += 1;
  gameState.runStats.systemsVisited += 1;
}

export function recordDaySurvived(day: number): void {
  if (!gameState) return;
  gameState.runStats.daysSurvived = Math.max(gameState.runStats.daysSurvived, day);
}
