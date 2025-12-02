export interface TimeState {
  day: number;
  turn: number;
}

export interface DifficultyState {
  day: number;
  playerPowerScore: number;
  tension: number; // 0-100
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
  xp: number;
  xpTracks: Record<string, number>;
  perksUnlocked: string[];
}

export interface SystemIntel {
  systemId: string;
  lastPriceSeenDay?: number;
  lastRiskSeenDay?: number;
}

export interface IntelState {
  systems: SystemIntel[];
}

export interface TradeStrategyState {
  taxEvasion: number;
  smuggling: number;
  bribery: number;
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
  xpEarned: number;
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
import { setStarMap } from "./map";
import type {
  AiProfile,
  CombatPhase,
  EncounterObjective,
  EncounterWave,
  EnemyBattleRole,
  EnemyIntent,
  EnemyPosition,
  EnemyRole,
  WeaponDamageType
} from "./contentTypes";

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
  passives: string[];
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

export type DamageType = WeaponDamageType;

export type StatusEffectType = "breach" | "jammed" | "burn" | "immobilized";

export interface StatusEffect {
  type: StatusEffectType;
  duration: number;
}

export type EnemyBlockState = "blocking" | "blocked" | "exposed" | "alone" | "none";

export type StanceId = "balanced" | "brace" | "evasive" | "overcharge";

export interface StanceDefinition {
  id: StanceId;
  label: string;
  description: string;
  damageTakenMultipliers: Partial<Record<DamageType, number>>;
  evasionBonus: number;
  shieldBonus?: number;
}

export const STANCES: Record<StanceId, StanceDefinition> = {
  balanced: {
    id: "balanced",
    label: "Balanced",
    description: "Steady posture that treats every attack equally while keeping systems synced.",
    damageTakenMultipliers: {},
    evasionBonus: 0
  },
  brace: {
    id: "brace",
    label: "Brace",
    description: "Tighten defenses—absorbs kinetic/explosive hits but lets in energy fire.",
    damageTakenMultipliers: {
      kinetic: 0.7,
      explosive: 0.7,
      energy: 1.1,
      disruptive: 1.1
    },
    evasionBonus: 0.05
  },
  evasive: {
    id: "evasive",
    label: "Evasive",
    description: "Skinny, agile frame—decreases all damage via maneuvering.",
    damageTakenMultipliers: {
      kinetic: 0.85,
      explosive: 0.85,
      energy: 0.85,
      disruptive: 0.85
    },
    evasionBonus: 0.15
  },
  overcharge: {
    id: "overcharge",
    label: "Overcharge",
    description: "Pour power to shields and weapons but disruptives tear through you.",
    damageTakenMultipliers: {
      disruptive: 1.25,
      kinetic: 0.95,
      explosive: 0.95,
      energy: 0.9
    },
    evasionBonus: -0.05,
    shieldBonus: 15
  }
};

export function getStanceDefinition(id: StanceId): StanceDefinition {
  return STANCES[id];
}

export interface ActionCooldownState {
  actionId: string;
  remainingRounds: number;
}

export interface EnemySlot {
  id: string;
  side: "player" | "enemy";
  templateId: string;
  name: string;
  hp: number;
  maxHp: number;
  shields: number;
  maxShields: number;
  weaponIds: string[];
  weaponCooldowns: number[];
  position: EnemyPosition;
  statusEffects: StatusEffect[];
  tags: string[];
  canEscape: boolean;
  alive: boolean;
  factionId?: string;
  factionLabel?: string;
  role?: EnemyRole;
  prefersLane?: number | "any";
  aiProfile?: AiProfile;
  lastMovedRound?: number;
  battleRole?: EnemyBattleRole;
  focusHint?: string;
  nextIntent?: EnemyIntent;
  intentDamageMultiplier?: number;
  cooldowns?: ActionCooldownState[];
  intentCharged?: boolean;
  blockState?: EnemyBlockState;
}

export interface ActionCooldownState {
  actionId: string;
  remainingRounds: number;
}

export interface EncounterState {
  id: string;
  name: string;
  enemies: EnemySlot[];
  tags: string[];
  templateId?: string;
  objectives?: EncounterObjective[];
  waves?: EncounterWave[];
  pendingWaves?: EncounterWave[];
}

export interface CombatState {
  encounter: EncounterState;
  selectedEnemyId: string | null;
  playerCooldowns: number[];
  playerBracing: boolean;
  playerStance: StanceId;
  playerStatus: {
    maneuverBonus: number;
    maneuverTurns: number;
    shieldBoost: number;
    shieldTurns: number;
    hullBuffer?: number;
    instabilityFlags?: string[];
  };
  enemyStatus: {
    weaponJammedTurns: number;
    accuracyModifier?: number;
    shieldLockoutTurns: number;
  };
  canEscape: boolean;
  totalRounds: number;
  startingHp: number;
  round: number;
  log: string[];
  enemyMovementUsedThisRound: boolean;
  adviceToken?: number;
  returnTo?: import("./navigation").ScreenID;
  returnParams?: Record<string, unknown>;
  comboMeter?: import("../systems/combatSystem").ComboMeterState;
  moduleAbilityCooldowns: Record<string, number>;
  phase: CombatPhase;
  encounterTemplateId?: string;
  playerActionCooldowns: ActionCooldownState[];
  enemyModifiers?: {
    globalDamageMultiplier?: number;
    globalAccuracyMultiplier?: number;
    allowRetreat?: boolean;
  };
}

export interface MiningSample {
  id: number;
  intensity: "careful" | "standard" | "overcharge";
  commodityId: string;
  amount: number;
  approxValue: number;
  rareFind?: { id: string; amount: number } | null;
  pirate?: boolean;
  collapsed?: boolean;
  stability: number;
  stabilityLoss: number;
  risk: number;
  signal: number;
  depth: number;
  hullDamage?: number;
  timestamp: number;
  note?: string;
}

export interface MiningCellState {
  signal?: number | null;
  directionClass?: string | null;
  depthHint?: "shallow" | "deep" | "optimal" | null;
  depthClass?: string | null;
  drilled?: boolean;
  selected?: boolean;
  hintSignal?: number | null;
  clusterHint?: boolean;
}

export interface MiningCluster {
  bandId: string;
  cells: { row: number; col: number }[];
}

export interface MiningSessionState {
  active: boolean;
  systemId: string;
  beltId?: string;
  resourceId?: string;
  minesTaken: number;
  totalValueMined: number;
  currentPirateChance: number; // threat as fraction 0-1
  stability: number;
  maxStability: number;
  depth: number;
  threat: number;
  drillsUsed: number;
  runComplete?: boolean;
  grid?: MiningCellState[][];
  selectedRow?: number | null;
  selectedCol?: number | null;
  veinRow?: number;
  veinCol?: number;
  veinDepth?: number;
  accumulatedOre?: Record<string, number>;
  gridRows?: number;
  gridCols?: number;
  explorationScore?: number;
  uniqueDrills?: number;
  beltName?: string;
  lastMessage?: string;
  lastYield?: {
    commodityId: string;
    amount: number;
    approxValue: number;
    rareFind?: { id: string; amount: number } | null;
  };
  samples?: MiningSample[];
  lowSignalMode?: boolean;
  comboGauge?: number;
  lastComboBandId?: string | null;
  comboBonusTurns?: number;
  comboGuarantyRemaining?: number;
  comboRevealedCells?: { row: number; col: number }[];
  comboThreatReduction?: number;
  comboFlash?: string;
  comboFlashTimer?: number;
  clusters?: MiningCluster[];
  pendingOre?: Record<string, number>;
  xpEarned?: number;
  riskChainLevel?: number;
  lastRiskBandLevel?: number | null;
  nextRiskGuaranteedRarity?: string | null;
  riskChainMilestoneLevel?: number;
  drillTier?: "basic" | "mid" | "advanced";
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

export interface InventoryState {
  weapons: string[];
  passives: string[];
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
  lastMiningSystemId?: string | null;
  miningBelts: MiningBeltState[];
  notifications: string[];
  transactions: TradeLogEntry[];
  inventory: InventoryState;
  lastBattleResult?: import("./contentTypes").BattleResult | null;
  marketState: MarketState;
  tradeStrategy: TradeStrategyState;
  intel: IntelState;
  runStats: RunStats;
  gameOver: GameOverState;
  map?: import("./map").StarMap | null;
  difficulty: DifficultyState;
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
    rareFinds: 0,
    xpEarned: 0
  };
}

export let gameState: GameState;

export function ensurePlayerInventory(): InventoryState {
  if (!gameState) {
    throw new Error("Game state not initialized");
  }
  if (!gameState.inventory) {
    gameState.inventory = { weapons: [], passives: [] };
  }
  if (!gameState.inventory.weapons) {
    gameState.inventory.weapons = [];
  }
  if (!gameState.inventory.passives) {
    gameState.inventory.passives = [];
  }
  return gameState.inventory;
}

const LOADOUT_KEY = "cosmo_weapon_loadout";

export interface PersistedLoadout {
  weapons: (string | null)[];
  passives: string[];
  inventoryWeapons: string[];
  inventoryPassives: string[];
}

export function loadPersistedLoadout(): PersistedLoadout | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  const raw = window.localStorage.getItem(LOADOUT_KEY);
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw);
    return {
      weapons: Array.isArray(parsed.weapons) ? parsed.weapons : [],
      passives: Array.isArray(parsed.passives) ? parsed.passives : [],
      inventoryWeapons: Array.isArray(parsed.inventoryWeapons) ? parsed.inventoryWeapons : [],
      inventoryPassives: Array.isArray(parsed.inventoryPassives) ? parsed.inventoryPassives : []
    };
  } catch {
    return null;
  }
}

export function persistLoadout(): void {
  if (typeof window === "undefined" || !window.localStorage || !gameState) return;
  const inventory = ensurePlayerInventory();
  const payload = {
    weapons: gameState.ship.weapons,
    passives: gameState.ship.passives,
    inventoryWeapons: inventory.weapons,
    inventoryPassives: inventory.passives
  };
  window.localStorage.setItem(LOADOUT_KEY, JSON.stringify(payload));
}

const XP_STATE_KEY = "cosmo_xp_state";
const SAVE_GAME_STATE_KEY = "cosmo_save_game";
const SAVE_GAME_TIMESTAMP_KEY = `${SAVE_GAME_STATE_KEY}_timestamp`;

export interface PersistedXpState {
  xp: number;
  xpTracks: Record<string, number>;
  perksUnlocked: string[];
}

export function persistXpState(): void {
  if (typeof window === "undefined" || !window.localStorage || !gameState) return;
  const payload: PersistedXpState = {
    xp: gameState.player.xp,
    xpTracks: gameState.player.xpTracks ?? {},
    perksUnlocked: gameState.player.perksUnlocked ?? []
  };
  window.localStorage.setItem(XP_STATE_KEY, JSON.stringify(payload));
}

export function loadPersistedXpState(): PersistedXpState | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  const raw = window.localStorage.getItem(XP_STATE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as PersistedXpState;
  } catch {
    return null;
  }
}

export function persistGameState(): void {
  if (typeof window === "undefined" || !window.localStorage || !gameState) return;
  try {
    window.localStorage.setItem(SAVE_GAME_STATE_KEY, JSON.stringify(gameState));
    window.localStorage.setItem(SAVE_GAME_TIMESTAMP_KEY, Date.now().toString());
  } catch (error) {
    console.warn("Unable to persist game state:", error);
  }
}

export function getSavedGameTimestamp(): number | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  const raw = window.localStorage.getItem(SAVE_GAME_TIMESTAMP_KEY);
  if (!raw) return null;
  const parsed = Number(raw);
  return Number.isNaN(parsed) ? null : parsed;
}

export function loadSavedGameState(): GameState | null {
  if (typeof window === "undefined" || !window.localStorage) return null;
  const raw = window.localStorage.getItem(SAVE_GAME_STATE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as GameState;
  } catch {
    window.localStorage.removeItem(SAVE_GAME_STATE_KEY);
    window.localStorage.removeItem(SAVE_GAME_TIMESTAMP_KEY);
    return null;
  }
}

export function restoreSavedGameState(): boolean {
  const saved = loadSavedGameState();
  if (!saved) return false;
  if (saved.map) {
    setStarMap(saved.map);
  }
  setGameState(saved);
  return true;
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
      hasChosenStarter: false,
      xp: 0,
      xpTracks: {
        mining: 0
      },
      perksUnlocked: []
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
      passives: [],
      weaponPower: 12,
      evasion: 5,
      maneuverRating: starterTemplate?.maneuverRating ?? 0,
      components: [],
      hardpoints: starterTemplate?.hardpoints.map((hp) => ({ ...hp })) ?? [],
      passive: starterTemplate?.passive ?? null
    },
    reputation: {},
    contracts: [],
    missions: [],
    combat: null,
    miningSession: null,
    lastMiningSystemId: null,
    miningBelts: [],
    notifications: [],
    transactions: [],
    inventory: {
      weapons: ["laser_mk1"],
      passives: []
    },
    lastBattleResult: null,
    marketState: {
      temporaryModifiers: {},
      activeEvents: [],
      localAdjustments: {},
      priceIntel: {},
      initialDriftSeeded: false
    },
    tradeStrategy: {
      taxEvasion: 0,
      smuggling: 0,
      bribery: 0
    },
    intel: {
      systems: []
    },
    runStats: createRunStats(),
    gameOver: { active: false, reason: null },
    map: null,
    difficulty: {
      day: 1,
      playerPowerScore: 1,
      tension: 0
    }
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
  miningEfficiency: number;
  miningPayoutMultiplier: number;
  drillDamageMultiplier: number;
  miningThreatMultiplier: number;
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
  contractPayoutMultiplier: 1.7,
  contractDifficultyMultiplier: 1,
  fuelCostMultiplier: 1,
  travelRiskScaling: 100,
  eventFrequency: 50,
  eventDangerMultiplier: 1,
  eventRewardMultiplier: 1,
  progressionSpeedMultiplier: 1,
  miningEfficiency: 0.8,
  miningPayoutMultiplier: 0.75,
  drillDamageMultiplier: 1,
  miningThreatMultiplier: 1,
  combat: {
    pirateEncounterRateBase: 0,
    pirateCargoValueSensitivity: 1,
    navyEncounterRateBase: 0,
    maxEncountersPerDay: 10,
    enemyHpMultiplier: 0.6,
    enemyDamageMultiplier: 0.85,
    enemyAccuracyMultiplier: 1,
    enemyCountMin: 1,
    enemyCountMax: 5,
    difficultyScalePerDay: 0,
    difficultyScalePerShipPower: 0,
    creditsRewardMultiplier: 1.9,
    lootDropChance: 100,
    rareLootChance: 12,
    repGainMultiplier: 1,
    playerDamageTakenMultiplier: 1,
    fleeSuccessBonus: 0,
    globalIncomeMultiplier: 1,
    globalDangerMultiplier: 1,
    encounterChancePerJump: 70,
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

function normalizeCombatDifficulty(combat: CombatDevTuning): CombatDevTuning {
  const minFloor = 0.1;
  return {
    ...combat,
    enemyHpMultiplier: Math.min(
      DEFAULT_DEV_TUNE.combat.enemyHpMultiplier,
      Math.max(minFloor, combat.enemyHpMultiplier ?? DEFAULT_DEV_TUNE.combat.enemyHpMultiplier)
    ),
    enemyDamageMultiplier: Math.min(
      DEFAULT_DEV_TUNE.combat.enemyDamageMultiplier,
      Math.max(minFloor, combat.enemyDamageMultiplier ?? DEFAULT_DEV_TUNE.combat.enemyDamageMultiplier)
    ),
    enemyAccuracyMultiplier: Math.min(
      DEFAULT_DEV_TUNE.combat.enemyAccuracyMultiplier,
      Math.max(minFloor, combat.enemyAccuracyMultiplier ?? DEFAULT_DEV_TUNE.combat.enemyAccuracyMultiplier)
    )
  };
}

export function loadDevTune(): void {
  if (typeof window === "undefined" || !window.localStorage) {
    devTune = { ...DEFAULT_DEV_TUNE };
    return;
  }

  const raw = window.localStorage.getItem(DEV_TUNE_KEY);
  if (!raw) {
    devTune = {
      ...DEFAULT_DEV_TUNE,
      combat: normalizeCombatDifficulty(DEFAULT_DEV_TUNE.combat)
    };
    persistDevTune();
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
      combat: normalizeCombatDifficulty(combatPayload)
    };
    persistDevTune();
  } catch {
    devTune = {
      ...DEFAULT_DEV_TUNE,
      combat: normalizeCombatDifficulty(DEFAULT_DEV_TUNE.combat)
    };
    persistDevTune();
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

export function addXp(amount: number, trackId: string = "mining"): void {
  if (!gameState || amount <= 0) return;
  const multiplier = devTune.progressionSpeedMultiplier ?? 1;
  const scaledAmount = Math.max(0, Math.round(amount * multiplier));
  if (scaledAmount <= 0) return;
  gameState.player.xp += scaledAmount;
  gameState.runStats.xpEarned += scaledAmount;
  const xpTracks = gameState.player.xpTracks || {};
  xpTracks[trackId] = (xpTracks[trackId] ?? 0) + scaledAmount;
  gameState.player.xpTracks = xpTracks;
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
