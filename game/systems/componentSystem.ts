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
      ship.maxHp += comp.value;
      ship.hp += comp.value;
      break;
    case "shields":
      ship.maxShields += comp.value;
      ship.shields += comp.value;
      break;
    case "fuel":
      ship.maxFuel += comp.value;
      ship.fuel += comp.value;
      break;
    case "cargo":
      ship.cargoCapacity += comp.value;
      break;
  }
}
