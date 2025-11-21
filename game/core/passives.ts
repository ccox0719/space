import { getCombatTune, getShipPassive } from "./state";

export function getPassiveEffects(): Record<string, number> {
  return getShipPassive();
}

export function getIncomeMultiplier(): number {
  const passive = getPassiveEffects();
  const incomeMult = Math.max(0, passive.incomeMultiplier ?? 1);
  const globalIncome = Math.max(0, getCombatTune().globalIncomeMultiplier ?? 1);
  return incomeMult * globalIncome;
}

export function applyMultiplier(base: number, mult: number | undefined, clampMin = 0): number {
  return Math.max(clampMin, base * (mult ?? 1));
}
