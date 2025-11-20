// src/systems/PlayerState.ts
// Player and ship state helpers. All values are deterministic and capped safely.

import { GameState, PlayerState, RoleId, ReputationMap } from "../game/GameState";
import reputationEngine from "../../reputation_engine.json";
import { Galaxy } from "../../galaxyTypes";

interface NewPlayerOptions {
  name: string;
  roleId: RoleId;
  startingCredits?: number;
  startingFuel?: number;
}

const STARTING_SHIP: Omit<PlayerState, "name" | "roleId" | "reputation" | "credits" | "fuel" | "maxFuel"> = {
  ship: {
    hull: 100,
    maxHull: 100,
    shields: 50,
    maxShields: 50,
    fuel: 0,
    maxFuel: 0,
    evasion: 10,
    sensorStrength: 10,
    enginePower: 10,
    mass: 8,
    agility: 6,
    pilotSkill: 2,
    weaponDamage: 10,
    cargoCapacity: 20
  },
  modules: {
    engines: ["basic_thrusters"],
    scanners: ["short_range_scanner"],
    weapons: ["civilian_lasers"],
    utilities: []
  },
  cargo: [],
  inventory: [],
  crew: [],
  statuses: [],
  risk: {
    pirateAttention: 0
  }
};

export function createPlayerState(
  galaxy: Galaxy,
  options: NewPlayerOptions
): PlayerState {
  const reputation = seedReputation(galaxy, 0);
  const fuel = options.startingFuel ?? 10;
  const maxFuel = 15;
  return {
    name: options.name,
    roleId: options.roleId,
    credits: options.startingCredits ?? 500,
    fuel,
    maxFuel,
    ...STARTING_SHIP,
    reputation,
    ship: {
      ...STARTING_SHIP.ship,
      fuel,
      maxFuel
    }
  };
}

export function seedReputation(
  galaxy: Galaxy,
  baseline: number
): ReputationMap {
  const rep: ReputationMap = {};
  for (const faction of galaxy.factions || []) rep[faction.id] = baseline;
  const tracks = (reputationEngine as { reputationSystem: { tracks: { id: string }[] } }).reputationSystem.tracks;
  for (const track of tracks) rep[track.id] = baseline;
  return rep;
}

export function adjustCredits(player: PlayerState, delta: number): void {
  player.credits = Math.max(0, player.credits + delta);
}

export function adjustFuel(player: PlayerState, delta: number): void {
  const newFuel = Math.max(0, Math.min(player.maxFuel, player.fuel + delta));
  player.fuel = newFuel;
  player.ship.fuel = Math.min(player.ship.maxFuel, newFuel);
}

export function applyDamage(player: PlayerState, severity: "light" | "medium" | "heavy"): void {
  const map = { light: 10, medium: 25, heavy: 40 };
  const dmg = map[severity] ?? 0;
  const preShield = player.ship.shields;
  player.ship.shields = Math.max(0, preShield - dmg);
  const spill = Math.max(0, dmg - preShield);
  player.ship.hull = Math.max(0, player.ship.hull - spill);
}

export function repairHull(player: PlayerState, amount: number): void {
  player.ship.hull = Math.min(player.ship.maxHull, player.ship.hull + amount);
}

export function adjustReputation(
  player: PlayerState,
  delta: Record<string, number>
): void {
  for (const k of Object.keys(delta)) {
    if (!(k in player.reputation)) continue;
    player.reputation[k] += delta[k];
  }
}

export function addStatus(player: PlayerState, status: string): void {
  if (!player.statuses.includes(status)) player.statuses.push(status);
}

export function addCargo(
  player: PlayerState,
  item: { commodityId: string; quantity: number }
): boolean {
  const used = player.cargo.reduce((sum, c) => sum + c.quantity, 0);
  if (used + item.quantity > player.ship.cargoCapacity) return false;
  const existing = player.cargo.find((c) => c.commodityId === item.commodityId);
  if (existing) existing.quantity += item.quantity;
  else player.cargo.push({ ...item });
  return true;
}

export function removeCargo(
  player: PlayerState,
  commodityId: string,
  quantity: number
): boolean {
  const existing = player.cargo.find((c) => c.commodityId === commodityId);
  if (!existing || existing.quantity < quantity) return false;
  existing.quantity -= quantity;
  if (existing.quantity === 0) {
    player.cargo = player.cargo.filter((c) => c.commodityId !== commodityId);
  }
  return true;
}

export function removeRandomCargo(player: PlayerState, rng: () => number): void {
  if (!player.cargo.length) return;
  const idx = Math.floor(rng() * player.cargo.length);
  const target = player.cargo[idx];
  if (target.quantity > 1) target.quantity -= 1;
  else player.cargo.splice(idx, 1);
}

export function appendLog(game: GameState, message: string, data?: Record<string, unknown>): void {
  game.log.push({
    cycle: game.time.cycle,
    sectorId: game.currentSectorId,
    message,
    data
  });
}
