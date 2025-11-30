import { gameState, ShipState, persistLoadout } from "../core/state";
import { content } from "../core/engine";
import type { ShipDef } from "../core/contentTypes";
import { autoEquipAvailableWeapons } from "./weaponSystem";
import { getMaintenanceModifier } from "./maintenanceSystem";

const DEFAULT_WEAPON_BY_SLOT: Record<string, string | null> = {
  "small:energy": "laser_mk1",
  "small:projectile": "coil_autocannon",
  "small:missile": "stinger_missiles",
  "medium:energy": "storm_lance",
  "medium:projectile": "railgun_mk1",
  "medium:missile": "hailstorm_pod",
  "large:projectile": "mass_driver"
};

/**
 * Look up a ship template from content by id.
 */
export function getShipTemplate(id: string): ShipDef | null {
  if (!content) return null;
  return content.ships.find((s) => s.id === id) ?? null;
}

/**
 * Get the template for the player's current ship.
 */
export function getCurrentShipTemplate(): ShipDef | null {
  return getShipTemplate(gameState.ship.templateId);
}

/**
 * Get all starter ship templates (for the initial selection).
 */
export function getStarterShips(): ShipDef[] {
  if (!content) return [];
  return content.ships.filter((s) => s.starter);
}

/**
 * Get all non-starter ships available to buy.
 */
export function getBuyableShips(): ShipDef[] {
  if (!content) return [];
  return content.ships.filter((s) => !s.starter);
}

/**
 * Replace the player's ship with a new template.
 * For starter selection and ship purchases.
 */
export function applyShipTemplate(templateId: string, customName?: string) {
  const tpl = getShipTemplate(templateId);
  if (!tpl) {
    console.warn(`Unknown ship template: ${templateId}`);
    return;
  }

  const emptyWeapons: (string | null)[] = tpl.hardpoints.map(() => null);
  const emptyComponents: string[] = [];

  const newShip: ShipState = {
    templateId: tpl.id,
    name: customName || tpl.name,
    hp: tpl.hull,
    maxHp: tpl.hull,
    shields: tpl.shields,
    maxShields: tpl.shields,
    fuel: tpl.fuel,
    maxFuel: tpl.fuel,
    cargo: {},
    cargoCapacity: tpl.cargo,
    modules: [],
    weapons: tpl.hardpoints.map(
      (hp, idx) => DEFAULT_WEAPON_BY_SLOT[`${hp.size}:${hp.type}`] ?? emptyWeapons[idx]
    ),
    passives: [],
    weaponPower: 0,
    evasion: 0,
    maneuverRating: tpl.maneuverRating,
    components: emptyComponents,
    hardpoints: tpl.hardpoints.map((hp) => ({ ...hp }))
    ,
    passive: tpl.passive ?? null
  };

  gameState.ship = newShip;
  persistLoadout();
  autoEquipAvailableWeapons();
}

/**
 * Choose a starter ship at the beginning of the game.
 */
export function chooseStarterShip(templateId: string) {
  applyShipTemplate(templateId);
  gameState.player.hasChosenStarter = true;
}

/**
 * Attempt to buy a new ship (replacing the current one).
 * For now this simply overwrites your ship.
 */
export function buyShip(templateId: string): boolean {
  const tpl = getShipTemplate(templateId);
  if (!tpl) {
    console.warn(`Unknown ship template: ${templateId}`);
    return false;
  }

  if (tpl.starter) {
    console.warn("Starter ships are not sold at shipyards.");
    return false;
  }

  if (gameState.player.credits < tpl.cost) {
    console.warn("Not enough credits to buy this ship.");
    return false;
  }

  gameState.player.credits -= tpl.cost;
  applyShipTemplate(templateId);
  return true;
}

export const SHIP_SELL_RATIO = 0.5;

export function sellShip(): boolean {
  const current = getCurrentShipTemplate();
  if (!current) {
    console.warn("Cannot sell an unknown ship.");
    return false;
  }

  const starter = getStarterShips()[0];
  if (!starter) {
    console.warn("No starter ship available to replace with after sale.");
    return false;
  }

  const sellPrice = Math.floor((current.cost ?? 0) * SHIP_SELL_RATIO);
  gameState.player.credits += sellPrice;
  applyShipTemplate(starter.id);
  return true;
}

/**
 * Simple repair: restore hull and shields to max for a flat credit cost.
 */
export function repairShip(): void {
  const ship = gameState.ship;
  const missingHull = ship.maxHp - ship.hp;
  const missingShields = ship.maxShields - ship.shields;

  if (missingHull <= 0 && missingShields <= 0) {
    return;
  }

  // Very simple formula: 1 credit per point for now
  const maintenance = getMaintenanceModifier(gameState);
  const cost = Math.max(0, Math.round((missingHull + missingShields) * maintenance.repair));

  if (gameState.player.credits < cost) {
    console.warn("Not enough credits to fully repair.");
    return;
  }

  gameState.player.credits -= cost;
  ship.hp = ship.maxHp;
  ship.shields = ship.maxShields;
}

/**
 * Simple refuel: top up to max for cost.
 */
export function refuelShip(): void {
  const ship = gameState.ship;
  const missingFuel = ship.maxFuel - ship.fuel;
  if (missingFuel <= 0) {
    return;
  }

  // Example: 2 credits per fuel for now
  const costPerUnit = 2;
  const cost = missingFuel * costPerUnit;

  if (gameState.player.credits < cost) {
    console.warn("Not enough credits to fully refuel.");
    return;
  }

  gameState.player.credits -= cost;
  ship.fuel = ship.maxFuel;
}
