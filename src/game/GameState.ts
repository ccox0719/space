// src/game/GameState.ts
// Core game state and strongly typed structures that other systems mutate.

import { Galaxy, Sector } from "../../galaxyTypes";

export type RoleId =
  | "trader"
  | "miner"
  | "smuggler"
  | "pirate"
  | "bounty_hunter"
  | "navy"
  | "explorer"
  | "salvager";

export type MissionRiskLevel = "low" | "medium" | "high" | "very_high";

export interface ShipModules {
  engines: string[];
  scanners: string[];
  weapons: string[];
  utilities: string[];
}

export interface ShipStats {
  hull: number;
  maxHull: number;
  shields: number;
  maxShields: number;
  fuel: number;
  maxFuel: number;
  evasion: number;
  sensorStrength: number;
  enginePower: number;
  mass: number;
  agility: number;
  pilotSkill?: number;
  weaponDamage: number;
  cargoCapacity: number;
  passiveSlots: number;
  weaponSlots: number;
}

export interface CargoItem {
  commodityId: string;
  quantity: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  type: string;
}

export interface CrewMember {
  id: string;
  name: string;
  role: string;
  bonusTags: string[];
}

export interface ReputationMap {
  [factionId: string]: number;
}

export interface PlayerState {
  name: string;
  roleId: RoleId;
  level: number;
  xp: number;
  xpToNext: number;
  xpTracks: Record<string, number>;
  perkPoints: number;
  perks: string[];
  passives: string[];
  passiveInventory: string[];
  passiveEffects: Record<string, number>;
  perkEffects: Record<string, { multiplier: number; flat: number }>;
  credits: number;
  fuel: number;
  maxFuel: number;
  ship: ShipStats;
  modules: ShipModules;
  cargo: CargoItem[];
  inventory: InventoryItem[];
  crew: CrewMember[];
  reputation: ReputationMap;
  risk: {
    pirateAttention: number; // 0-100, influences pirate encounter chance
  };
  statuses: string[];
  notifications: string[];
}

export interface TimeState {
  cycle: number; // abstract cycles as hours or shifts
}

export interface MissionDefinition {
  id: string;
  name: string;
  description: string;
  riskLevel: MissionRiskLevel;
  baseReward: number | "loot_based";
  reputationEffects?: Record<string, number>;
  dangerModifiers?: string[];
  dynamicReward?: string;
  rareFindChance?: number;
  hazards?: string[];
}

export interface MissionInstance {
  instanceId: string;
  missionId: string;
  careerId: RoleId | string;
  status: "offered" | "accepted" | "completed" | "failed";
  sectorId?: string;
  expiresIn?: number; // cycles
  reward: number;
  reputationEffects?: Record<string, number>;
  notes?: string[];
}

export interface LogEntry {
  cycle: number;
  sectorId: string;
  message: string;
  data?: Record<string, unknown>;
}

export interface GameState {
  seed: number;
  galaxy: Galaxy;
  currentSectorId: string;
  player: PlayerState;
  time: TimeState;
  activeMissions: MissionInstance[];
  completedMissions: MissionInstance[];
  failedMissions: MissionInstance[];
  log: LogEntry[];
}

export interface EventSelection {
  eventId: string;
  category: string;
  description: string;
  choiceId: string;
  outcome: "success" | "failure";
  delta?: Record<string, unknown>;
}

export interface TravelResult {
  path: { from: Sector; to: Sector };
  fuelSpent: number;
  event?: EventSelection;
  segments?: {
    fromId: string;
    toId: string;
    event?: EventSelection | null;
  }[];
}
