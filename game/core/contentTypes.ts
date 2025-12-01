export interface MarketProfile {
  imports?: string[];
  exports?: string[];
  taxRate?: number;
  blackMarket?: boolean;
}

export type LaneType = "core_lane" | "frontier_lane" | "wildspace";

export interface SystemNeighbor {
  id: string;
  distance: number;
  laneType: LaneType;
}

export interface SystemCoords {
  x: number;
  y: number;
}

export interface SystemDef {
  id: string;
  name: string;
  description?: string;
  region: "core" | "border" | "fringe" | "pirate" | "wild" | string;
  coords: SystemCoords;
  baseDanger: number;
  security: string;
  faction?: string;
  tags: string[];
  economyTags: string[];
  traits: string[];
  neighbors: SystemNeighbor[];
  marketModifiers?: Record<string, number>;
  marketProfile?: MarketProfile;
  eventWeights?: Record<string, number>;
}

export interface PirateBaseDef {
  id: string;
  systemId: string;
  name: string;
  type: "pirate_base";
  tier: number;
  maxWaves: number;
  wantedReward: number;
  lootProfile: string;
  description: string;
}

export interface MissionDef {
  id: string;
  name: string;
  description: string;
  type: string;
  factionId?: string;
  requirements?: Record<string, unknown>;
  reward?: Record<string, unknown>;
  steps?: Array<{ id: string; description: string }>;
}

export type EventType =
  | "combat"
  | "mining"
  | "exploration"
  | "anomaly"
  | "inspection"
  | "market"
  | "narrative";

export interface EventRisk {
  dangerChance?: number;
  onFail?: string;
  damageRange?: {
    min?: number;
    max?: number;
  };
}

export interface EventOutcome {
  giveCredits?: { min: number; max: number };
  giveCommodity?: { id: string; min: number; max: number };
  giveWeapon?: string;
  applyStatus?: Record<string, unknown>;
  triggerCombat?: { enemyId: string; ambush?: boolean };
  damageShip?: { min?: number; max?: number };
  modifyReputation?: { faction: string; amount: number };
  spawnMissionId?: string;
  creditsDelta?: number;
  fuelDelta?: number;
  cargoGain?: Record<string, number>;
  cargoLoss?: Record<string, number>;
  turnDelta?: number;
  flag?: string;
  market?: {
    commodityId?: string;
    multiplier: number;
    duration?: number;
  };
}

export interface EventChoice {
  id: string;
  label: string;
  description?: string;
  requires?: {
    roles?: string[];
    components?: string[];
    stats?: Record<string, number>;
  };
  risk?: EventRisk;
  outcomes?: EventOutcome;
}

export interface EventAutoResolve {
  mining?: {
    commodityId: string;
    quantity: { min: number; max: number };
    grade?: string;
  };
  combat?: {
    enemyId: string;
    ambush?: boolean;
  };
  exploration?: {
    lootTable?: string[];
    skillChecks?: Record<string, number>;
  };
  anomaly?: {
    stability?: number;
    effects?: Record<string, unknown>;
  };
  market?: {
    commodityId?: string;
    temporaryPriceBoost?: number;
    duration?: number;
  };
}

export interface EventSystemModifiers {
  onlyInSystemsWithTags?: string[];
  weightMultiplier?: number;
}

export interface GameEvent {
  id: string;
  name: string;
  description?: string;
  type: EventType;
  tags: string[];
  weight: number;
  choices?: EventChoice[];
  autoResolve?: EventAutoResolve;
  systemModifiers?: EventSystemModifiers;
  beltId?: string;
  miningCommodityId?: string;
}

export type LootItemType = "commodity" | "weapon" | "component" | "credits" | "mission";

export interface LootEntry {
  type: LootItemType;
  id?: string;
  min?: number;
  max?: number;
  weight: number;
}

export interface LootTable {
  id: string;
  enemyTags?: string[];
  common?: LootEntry[];
  uncommon?: LootEntry[];
  rare?: LootEntry[];
  guaranteed?: {
    credits?: { min: number; max: number };
  };
}

export interface BattleResult {
  enemyName: string;
  enemyId: string;
  creditsEarned: number;
  commodities: Array<{ id: string; qty: number }>;
  weapons: string[];
  components: string[];
  missionsGranted: string[];
  specialFlags?: Record<string, unknown>;
}

export interface HardpointDef {
  size: "small" | "medium" | "large";
  type: "energy" | "projectile" | "missile" | "hybrid";
}

export interface ShipPassive {
  id: string;
  name: string;
  description?: string;
  effects: Record<string, number>;
}

export interface ShipDef {
  id: string;
  name: string;
  description: string;
  roleHint: string;
  starter: boolean;
  cost: number;
  hull: number;
  shields: number;
  fuel: number;
  cargo: number;
  tags: string[];
  hardpoints: HardpointDef[];
  moduleSlots: number;
  powerGrid: number;
  cpuLimit: number;
  maneuverRating: number;
  passive?: ShipPassive;
}

export type ComponentAbilityType = "pull" | "push";

export type ComponentAbilityStatus = "jammed" | "immobilized";

export interface ComponentAbilityDef {
  id: string;
  type: ComponentAbilityType;
  description: string;
  cooldown?: number;
  statusEffect?: ComponentAbilityStatus;
  effectDuration?: number;
}

export interface ComponentDef {
  id: string;
  name: string;
  description: string;
  cost: number;
  effectType?: "hull" | "shields" | "fuel" | "cargo";
  value?: number;
  effects?: Record<string, number>;
  slot?: string;
  ability?: ComponentAbilityDef;
}

export type WeaponType = "energy" | "projectile" | "missile" | "hybrid";
export type WeaponSize = "small" | "medium" | "large";
export type WeaponDamageType = "kinetic" | "energy" | "explosive" | "disruptive";

export type EncounterRow = "front" | "back";

export interface EnemyPosition {
  lane: number;
  row: EncounterRow;
}

export type EnemyRole = "frontline" | "backline" | "support";

export type EnemyBattleRole = "anchor" | "support" | "flanker";

export type EnemyIntentType =
  | "heavy_attack"
  | "shield_boost"
  | "flank_shot"
  | "debuff"
  | "retreat"
  | "charge_weapon";

export interface EnemyIntent {
  type: EnemyIntentType;
  targetId?: string;
  description: string;
  interruptible?: boolean;
}

export interface CounterMapping {
  intentType: EnemyIntentType;
  counterActionId: string;
  effect: "cancel" | "weaken" | "delay";
}

export type EncounterDifficultyBand = "tutorial" | "easy" | "normal" | "hard" | "elite";

export type EncounterObjective =
  | "destroy_all"
  | "survive_rounds"
  | "protect_ally"
  | "escape_after_rounds";

export type SpawnConditionType = "on_start" | "on_round_reached" | "on_enemy_destroyed";

export interface EncounterWaveSpawnCondition {
  type: SpawnConditionType;
  roundThreshold?: number;
  enemyIdTrigger?: string;
}

export type PositionHint = "front" | "mid" | "back" | "left_flank" | "right_flank";

export interface EncounterEnemySlot {
  enemyDefinitionId: string;
  roleOverride?: EnemyBattleRole;
  initialPosition?: PositionHint;
  focusHint?: "shields" | "hull" | "engines" | "weapons";
  nameOverride?: string;
}

export interface EncounterWave {
  id: string;
  spawnCondition: EncounterWaveSpawnCondition;
  enemies: EncounterEnemySlot[];
}

export type CombatPhase = "positioning" | "escalation" | "finisher";

export interface EncounterTemplate {
  id: string;
  name: string;
  description: string;
  difficulty: EncounterDifficultyBand;
  minPlayerPower?: number;
  maxPlayerPower?: number;
  startingPhase?: CombatPhase;
  objectives: EncounterObjective[];
  waves: EncounterWave[];
  playerModifiers?: {
    startingHullMultiplier?: number;
    startingShieldMultiplier?: number;
    disableRetreat?: boolean;
  };
  enemyModifiers?: {
    globalDamageMultiplier?: number;
    globalAccuracyMultiplier?: number;
    allowRetreat?: boolean;
  };
  rewardsOverride?: {
    credits?: number;
    reputationDelta?: number;
    rareLootTableId?: string;
  };
  tags?: string[];
}

export type WeaponTargetingMode =
  | "frontOnly"
  | "laneAny"
  | "ignoreCover"
  | "linePierce"
  | "splashLane";

export interface WeaponDef {
  id: string;
  name: string;
  description?: string;
  type: WeaponType;
  size: WeaponSize;
  damage: number;
  damageType: WeaponDamageType;
  shieldMod: number;
  armorMod: number;
  accuracy: number;
  critChance: number;
  critMultiplier: number;
  energyCost: number;
  cooldown: number;
  price: number;
  tags: string[];
  targetingMode?: WeaponTargetingMode;
  canBypassCover?: boolean;
  splashRadius?: number;
  linePierce?: boolean;
}

export interface CommodityDef {
  id: string;
  name: string;
  basePrice: number;
  mass: number;
  tags: string[];
  tier?: "basic" | "standard" | "strategic" | "luxury";
  volatility?: number;
  legalStatus?: "legal" | "restricted" | "illegal";
  tradeTags?: string[];
  baseSpread?: {
    buyMultiplier?: number;
    sellMultiplier?: number;
  };
}

export interface AiProfile {
  role: "tank" | "support" | "artillery" | "raider" | "disruptor" | "flagship";
  prefersFront: boolean;
  retreatThreshold: number;
  bravery: number;
  anchor: boolean;
}

export interface EnemyDef {
  id: string;
  name: string;
  hull: number;
  shields: number;
  canEscape: boolean;
  weaponIds: string[];
  hardpoints: HardpointDef[];
  tags?: string[];
  faction?: string;
  damageTypeFocus?: WeaponDamageType;
  aiProfile?: AiProfile;
  battleRole?: EnemyBattleRole;
}

export interface FactionDef {
  id: string;
  name: string;
  description: string;
  preferredDamage: WeaponDamageType[];
  role: string;
}

export interface GameContent {
  systems: SystemDef[];
  systemsById: Record<string, SystemDef>;
  bases: PirateBaseDef[];
  basesById: Record<string, PirateBaseDef>;
  ships: ShipDef[];
  components: ComponentDef[];
  weapons: WeaponDef[];
  commodities: CommodityDef[];
  enemies: EnemyDef[];
  encounters: EncounterTemplate[];
  events: GameEvent[];
  lootTables: LootTable[];
  missions: MissionDef[];
  factions: FactionDef[];
}
