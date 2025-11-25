import { gameState } from "../core/state";
import { content } from "../core/engine";
import type { ComponentDef } from "../core/contentTypes";

/**
 * Get all available components (upgrades) from content.
 */
export function getAllComponents(): ComponentDef[] {
  if (!content) return [];
  return content.components;
}

/**
 * Get components currently installed on the player's ship.
 */
export function getInstalledComponents(): ComponentDef[] {
  if (!content) return [];
  const ids = gameState.ship.components;
  return content.components.filter((c) => ids.includes(c.id));
}

/**
 * Aggregate passive-style effects from installed components (multiplicative).
 */
export function getComponentPassiveEffects(): Record<string, number> {
  if (!content) return {};
  const effects: Record<string, number> = {};
  for (const comp of getInstalledComponents()) {
    if (!comp.effects) continue;
    for (const [key, value] of Object.entries(comp.effects)) {
      if (typeof value !== "number") continue;
      effects[key] = (effects[key] ?? 1) * value;
    }
  }
  return effects;
}

/**
 * Attempt to buy & install a component.
 * Applies its effect immediately and records it on the ship.
 */
export function buyAndInstallComponent(componentId: string): boolean {
  if (!content) return false;
  const comp = content.components.find((c) => c.id === componentId);
  if (!comp) {
    console.warn(`Unknown component: ${componentId}`);
    return false;
  }

  if (gameState.player.credits < comp.cost) {
    console.warn("Not enough credits to buy this component.");
    return false;
  }

  // Prevent duplicates for now (simple rule)
  if (gameState.ship.components.includes(componentId)) {
    console.warn("Component already installed.");
    return false;
  }

  gameState.player.credits -= comp.cost;
  gameState.ship.components.push(componentId);

  applyComponentEffect(comp);
  return true;
}

/**
 * Apply component effect directly to ship stats.
 */
function applyComponentEffect(comp: ComponentDef) {
  const ship = gameState.ship;

  switch (comp.effectType) {
    case "hull":
      ship.maxHp += comp.value ?? 0;
      ship.hp += comp.value ?? 0;
      break;
    case "shields":
      ship.maxShields += comp.value ?? 0;
      ship.shields += comp.value ?? 0;
      break;
    case "fuel":
      ship.maxFuel += comp.value ?? 0;
      ship.fuel += comp.value ?? 0;
      break;
    case "cargo":
      ship.cargoCapacity += comp.value ?? 0;
      break;
    default:
      // Passive-style effects are handled via getComponentPassiveEffects.
      break;
  }
}
