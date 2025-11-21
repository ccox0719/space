export interface MarketProfile {
  imports?: string[];
  exports?: string[];
  taxRate?: number;
  blackMarket?: boolean;
}

export interface SystemDef {
  id: string;
  name: string;
  description: string;
  security: string;
  faction: string;
  tags: string[];
  neighbors: string[];
  marketModifiers?: Record<string, number>;
  marketProfile?: MarketProfile;
  eventWeights?: Record<string, number>;
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

export interface ComponentDef {
  id: string;
  name: string;
  description: string;
  cost: number;
  effectType: "hull" | "shields" | "fuel" | "cargo";
  value: number;
}

export type WeaponType = "energy" | "projectile" | "missile" | "hybrid";
export type WeaponSize = "small" | "medium" | "large";
export type WeaponDamageType = "kinetic" | "thermal" | "plasma" | "EM";

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

export interface EnemyDef {
  id: string;
  name: string;
  hull: number;
  shields: number;
  canEscape: boolean;
  weaponIds: string[];
  hardpoints: HardpointDef[];
   tags?: string[];
}

export interface GameContent {
  systems: SystemDef[];
  ships: ShipDef[];
  components: ComponentDef[];
  weapons: WeaponDef[];
  commodities: CommodityDef[];
  enemies: EnemyDef[];
  events: GameEvent[];
  lootTables: LootTable[];
  missions: MissionDef[];
}
