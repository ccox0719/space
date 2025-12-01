import type { GameState } from "../core/state";
import { getWeaponById } from "./weaponSystem";

export function computePlayerPower(state: GameState): number {
  const ship = state.ship;
  const hull = ship.maxHp || ship.hp || 0;
  const shields = ship.maxShields || ship.shields || 0;
  const cargoCap = ship.cargoCapacity || 0;

  const weaponRatingTotal = sumWeaponPower(ship.weapons);
  const moduleRatingTotal = sumModulePower(ship.modules);

  const credits = state.player?.credits ?? 0;
  const economicFactor = Math.log10(credits + 1) * 5;

  const basePower =
    hull +
    shields +
    weaponRatingTotal +
    moduleRatingTotal +
    cargoCap / 2 +
    economicFactor;

  return Math.max(1, Math.round(basePower));
}

export function computeDayPressure(day: number): number {
  const raw = day / 40;
  if (raw < 0) return 0;
  if (raw > 1) return 1;
  return raw;
}

export function computeGlobalDifficultyFactor(day: number): number {
  const pressure = computeDayPressure(day);
  const minFactor = 0.4;
  const maxFactor = 1.0;
  return minFactor + (maxFactor - minFactor) * pressure;
}

export function getDifficultyWeights(state: GameState): {
  easyWeight: number;
  mediumWeight: number;
  hardWeight: number;
} {
  const power = computePlayerPower(state);
  const dayPressure = computeDayPressure(state.time.day);

  const powerTier = power < 80 ? 1 : power < 150 ? 2 : power < 230 ? 3 : 4;

  const easyWeight = Math.max(1, 5 - dayPressure * 4 * powerTier);
  const mediumWeight = 1 + dayPressure * 3;
  const hardWeight = Math.max(0.5, dayPressure * powerTier);

  return { easyWeight, mediumWeight, hardWeight };
}

const PLAYER_POWER_DIVISOR = 30;

export function refreshDifficultyDay(state: GameState): void {
  if (!state.difficulty) return;
  state.difficulty.day = state.time.day;
  state.difficulty.playerPowerScore = Math.max(
    1,
    Math.round(computePlayerPower(state) / PLAYER_POWER_DIVISOR)
  );
}

export function adjustTension(state: GameState, delta: number): void {
  if (!state.difficulty) return;
  const tension = state.difficulty.tension + delta;
  state.difficulty.tension = Math.max(0, Math.min(100, tension));
}

export function getEnemyScale(state: GameState): number {
  if (!state.difficulty) return 1;
  const playerPowerScore = Math.max(
    1,
    Math.round(computePlayerPower(state) / PLAYER_POWER_DIVISOR)
  );
  state.difficulty.playerPowerScore = playerPowerScore;
  const dayFactor = state.difficulty.day * 0.03;
  const powerFactor = playerPowerScore * 0.02;
  const tensionFactor = state.difficulty.tension * 0.01;
  const scale = 1 + dayFactor + powerFactor + tensionFactor;
  return Math.max(1, scale);
}

export function tickDifficulty(state: GameState): void {
  if (!state.difficulty) return;
  const drain = Math.max(0.5, computeDayPressure(state.time.day)) * 0.05;
  adjustTension(state, -Math.min(state.difficulty.tension, drain));
}

function sumWeaponPower(weaponIds: (string | null | undefined)[]): number {
  return weaponIds.reduce((total, id) => {
    if (!id) return total;
    const weapon = getWeaponById(id);
    if (!weapon) return total;
    const base = weapon.damage ?? 0;
    const accuracy = weapon.accuracy ?? 0;
    const crit = (weapon.critChance ?? 0) * (weapon.critMultiplier ?? 0);
    return total + base * 1.5 + accuracy * 0.2 + crit;
  }, 0);
}

function sumModulePower(modules: string[] | undefined): number {
  if (!modules || !modules.length) return 0;
  return modules.length * 5;
}
