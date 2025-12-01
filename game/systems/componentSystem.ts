import { ensurePlayerInventory, gameState, persistLoadout } from "../core/state";
import { content } from "../core/engine";
import type { ComponentDef } from "../core/contentTypes";

export const PASSIVE_SELL_RATIO = 0.4;

/**
 * Get all available components (upgrades) from content.
 */
export function getAllComponents(): ComponentDef[] {
  if (!content) return [];
  return content.components;
}

export function getComponentById(componentId: string): ComponentDef | null {
  if (!content) return null;
  return content.components.find((c) => c.id === componentId) ?? null;
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
  const installed = [...getInstalledComponents(), ...getInstalledPassiveSystems()];
  for (const comp of installed) {
    if (!comp.effects) continue;
    for (const [key, value] of Object.entries(comp.effects)) {
      if (typeof value !== "number") continue;
      effects[key] = (effects[key] ?? 1) * value;
    }
  }
  return effects;
}

export function getPassiveComponents(): ComponentDef[] {
  if (!content) return [];
  return content.components.filter((c) => c.slot === "passive");
}

export function getInstalledPassiveSystems(): ComponentDef[] {
  if (!content) return [];
  return content.components.filter((c) => gameState.ship.passives.includes(c.id));
}

export function getInventoryPassiveIds(): string[] {
  const inventory = ensurePlayerInventory();
  return [...inventory.passives];
}

export function buyPassiveSystem(componentId: string): boolean {
  if (!content) return false;
  const component = getComponentById(componentId);
  if (!component || component.slot !== "passive") {
    console.warn(`Passive component ${componentId} not found.`);
    return false;
  }
  if (gameState.player.credits < component.cost) {
    console.warn("Not enough credits to buy this passive system.");
    return false;
  }
  if (gameState.ship.passives.includes(componentId)) {
    console.warn("Passive already installed.");
    return false;
  }
  const inventory = ensurePlayerInventory();
  if (inventory.passives.includes(componentId)) {
    console.warn("Passive already purchased.");
    return false;
  }
  gameState.player.credits -= component.cost;
  inventory.passives.push(componentId);
  persistLoadout();
  return true;
}

export function installPassiveSystem(componentId: string): boolean {
  if (!content) return false;
  const component = getComponentById(componentId);
  if (!component || component.slot !== "passive") {
    console.warn(`Passive component ${componentId} not found.`);
    return false;
  }
  if (gameState.ship.passives.includes(componentId)) {
    console.warn("Passive already installed.");
    return false;
  }
  const inventory = ensurePlayerInventory();
  const inventoryIndex = inventory.passives.indexOf(componentId);
  if (inventoryIndex === -1) {
    console.warn("Passive not owned.");
    return false;
  }
  const shipData = content.ships.find((s) => s.id === gameState.ship.templateId);
  const maxSlots = shipData?.passiveSlots ?? 0;
  if (gameState.ship.passives.length >= maxSlots) {
    console.warn("No free passive slots.");
    return false;
  }
  inventory.passives.splice(inventoryIndex, 1);
  gameState.ship.passives.push(componentId);
  persistLoadout();
  return true;
}

export function sellPassiveSystem(componentId: string): boolean {
  if (!content) return false;
  const component = getComponentById(componentId);
  if (!component) {
    return false;
  }
  const inventory = ensurePlayerInventory();
  const shipIndex = gameState.ship.passives.indexOf(componentId);
  const inventoryIndex = inventory.passives.indexOf(componentId);
  if (shipIndex === -1 && inventoryIndex === -1) {
    return false;
  }
  if (shipIndex !== -1) {
    gameState.ship.passives.splice(shipIndex, 1);
  } else {
    inventory.passives.splice(inventoryIndex, 1);
  }
  const sellPrice = Math.floor((component.cost ?? 0) * PASSIVE_SELL_RATIO);
  gameState.player.credits += sellPrice;
  persistLoadout();
  return true;
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
