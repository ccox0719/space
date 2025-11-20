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

import shipsData from "../content/ships.json";
import type { ShipDef } from "./contentTypes";

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
      priceIntel: {}
    },
    intel: {
      systems: []
    }
  };
}

export function setGameState(state: GameState) {
  gameState = state;
}
