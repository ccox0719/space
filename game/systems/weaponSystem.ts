import { ensurePlayerInventory, gameState, persistLoadout } from "../core/state";
import { content, WeaponDef } from "../core/engine";
import { DAMAGE_TYPE_VS_DEFENSE } from "./combatConstants";
import type { WeaponDamageType } from "../core/contentTypes";

/**
 * Get all available weapons (raw data).
 */
export function getAllWeapons(): WeaponDef[] {
  if (!content) return [];
  return content.weapons;
}

/**
 * Player's equipped weapons (by hardpoint index).
 */
export function getEquippedWeapons(): (WeaponDef | null)[] {
  if (!content) return [];
  const ship = gameState.ship;
  return ship.weapons.map((id) => content.weapons.find((w) => w.id === id) || null);
}

function ensureInventory() {
  return ensurePlayerInventory();
}

export function getInventoryWeaponIds(): string[] {
  const inventory = ensureInventory();
  return [...inventory.weapons];
}

export function autoEquipAvailableWeapons(): void {
  if (!content) return;
  const inv = getInventoryWeaponIds();
  if (!inv.length) return;

  const ship = gameState.ship;
  ship.weapons = ship.weapons.map((current, idx) => {
    if (current) return current; // already equipped
    const candidates = inv.filter((id) => canEquipWeapon(idx, id));
    if (!candidates.length) return current;
    const pick = candidates[Math.floor(Math.random() * candidates.length)];
    return pick;
  });
}

/**
 * Validate compatibility: size & type must match hardpoint.
 */
export function canEquipWeapon(hardpointIndex: number, weaponId: string): boolean {
  const ship = gameState.ship;
  const weapon = content?.weapons.find((w) => w.id === weaponId);
  if (!weapon) return false;

  const hardpoint = ship.hardpoints[hardpointIndex];
  if (!hardpoint) return false;

  return weapon.size === hardpoint.size && weapon.type === hardpoint.type;
}

/**
 * Equip weapon into a slot.
 */
export function equipWeapon(hardpointIndex: number, weaponId: string): boolean {
  if (!canEquipWeapon(hardpointIndex, weaponId)) return false;

  gameState.ship.weapons[hardpointIndex] = weaponId;
  persistLoadout();
  return true;
}

export function getWeaponById(weaponId: string | null): WeaponDef | null {
  if (!weaponId || !content) return null;
  return content.weapons.find((w) => w.id === weaponId) ?? null;
}

export function buyWeapon(weaponId: string): boolean {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return false;
  if (gameState.player.credits < weapon.price) return false;
  const inventory = ensureInventory();
  inventory.weapons.push(weaponId);
  gameState.player.credits -= weapon.price;
  persistLoadout();
  return true;
}

export const WEAPON_SELL_RATIO = 0.4;

export function sellWeapon(weaponId: string): boolean {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return false;

  const inventory = ensureInventory();
  const slotIndex = gameState.ship.weapons.findIndex((id) => id === weaponId);
  const inventoryIndex = inventory.weapons.indexOf(weaponId);

  if (slotIndex === -1 && inventoryIndex === -1) {
    return false;
  }

  if (slotIndex !== -1) {
    gameState.ship.weapons[slotIndex] = null;
  }

  if (inventoryIndex !== -1) {
    inventory.weapons.splice(inventoryIndex, 1);
  }

  const sellPrice = Math.floor((weapon.price ?? 0) * WEAPON_SELL_RATIO);
  gameState.player.credits += sellPrice;
  persistLoadout();
  return true;
}
/**
 * Damage calculation for combat.
 */
export interface DamageOptions {
  accuracyMultiplier?: number;
  damageMultiplier?: number;
}

/**
 * Damage calculation for combat, with optional modifiers for aim modes and stance.
 */
export function computeWeaponDamage(
  weapon: WeaponDef,
  opts: DamageOptions = {}
): number {
  const tags = weapon.tags || [];

  let accuracy = (weapon.accuracy * (opts.accuracyMultiplier ?? 1)) || 0;
  if (tags.includes("accurate")) {
    accuracy += 0.05;
  }
  accuracy = Math.min(0.95, Math.max(0, accuracy));
  if (Math.random() > accuracy) {
    return 0;
  }

  let dmg = weapon.damage;
  if (Math.random() < weapon.critChance) {
    dmg *= weapon.critMultiplier;
  }

  dmg *= opts.damageMultiplier ?? 1;
  return Math.max(0, Math.round(dmg));
}

const TYPE_LABELS: Record<WeaponDamageType, string> = {
  kinetic: "Kinetic",
  energy: "Energy",
  explosive: "Explosive",
  disruptive: "Disruptive"
};

const TAG_NOTES: Record<string, string> = {
  shield_breaker: "Bonus vs shields",
  armor_piercing: "Bonus vs hull",
  accurate: "Improved accuracy",
  disruptor: "Can jam enemy weapons"
};

function describeValue(value: number): "Strong" | "Weak" | "Normal" {
  if (value > 1.1) return "Strong";
  if (value < 0.95) return "Weak";
  return "Normal";
}

const ROLE_LABELS: Record<string, string> = {
  shields: "Shield-breaker",
  hull: "Hull buster"
};

export interface WeaponHint {
  role: string;
  vsShields: string;
  vsHull: string;
  typeLabel: string;
  tagNotes: string[];
}

export function getWeaponHint(weapon: WeaponDef): WeaponHint {
  const dt = weapon.damageType as WeaponDamageType;
  const matrix = DAMAGE_TYPE_VS_DEFENSE[dt] ?? DAMAGE_TYPE_VS_DEFENSE.kinetic;

  const vsShields = describeValue(matrix.vsShields);
  const vsHull = describeValue(matrix.vsHull);

  let role = "Balanced";
  if (vsShields === "Strong" && vsHull === "Weak") {
    role = ROLE_LABELS.shields;
  } else if (vsHull === "Strong" && vsShields === "Weak") {
    role = ROLE_LABELS.hull;
  } else if (vsShields === "Strong" && vsHull === "Strong") {
    role = "Devastating";
  }

  const tagNotes = (weapon.tags || [])
    .map((tag) => TAG_NOTES[tag])
    .filter(Boolean);

  return {
    role,
    vsShields,
    vsHull,
    typeLabel: TYPE_LABELS[dt] ?? dt,
    tagNotes
  };
}
