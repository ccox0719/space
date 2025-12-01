import { getCombatTune, getShipPassive } from "./state";
import { getComponentPassiveEffects } from "../systems/componentSystem";

export function getPassiveEffects(): Record<string, number> {
  const shipPassive = getShipPassive();
  const componentPassive = getComponentPassiveEffects();
  const allKeys = new Set([...Object.keys(shipPassive), ...Object.keys(componentPassive)]);
  const merged: Record<string, number> = {};
  for (const key of allKeys) {
    const a = typeof shipPassive[key] === "number" ? (shipPassive[key] as number) : 1;
    const b = typeof componentPassive[key] === "number" ? (componentPassive[key] as number) : 1;
    merged[key] = a * b;
  }
  return merged;
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
