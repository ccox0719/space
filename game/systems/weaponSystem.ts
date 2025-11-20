import { gameState, persistLoadout } from "../core/state";
import { content, WeaponDef } from "../core/engine";

export type DamageType = "kinetic" | "thermal" | "plasma" | "EM";
type DefenseLayer = "shields" | "hull";

const DAMAGE_MATRIX: Record<DamageType, Record<DefenseLayer, number>> = {
  kinetic: { shields: 0.9, hull: 1.1 },
  thermal: { shields: 1.0, hull: 1.0 },
  plasma: { shields: 1.15, hull: 1.05 },
  EM: { shields: 1.25, hull: 0.8 }
};

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
  if (!gameState.inventory) {
    gameState.inventory = { weapons: [] };
  }
  return gameState.inventory;
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
  enemyState: { shields: number; hp: number },
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
  const layer: DefenseLayer = enemyState.shields > 0 ? "shields" : "hull";
  const layerMultiplier = DAMAGE_MATRIX[weapon.damageType as DamageType]?.[layer] ?? 1;
  const baseMod = layer === "shields" ? weapon.shieldMod : weapon.armorMod;
  dmg *= baseMod * layerMultiplier;

  if (layer === "shields" && tags.includes("shield_breaker")) {
    dmg *= 1.2;
  }
  if (layer === "hull" && tags.includes("armor_piercing")) {
    dmg *= 1.2;
  }

  if (Math.random() < weapon.critChance) {
    dmg *= weapon.critMultiplier;
  }

  dmg *= opts.damageMultiplier ?? 1;

  return Math.max(0, Math.round(dmg));
}

const TYPE_LABELS: Record<DamageType, string> = {
  kinetic: "Kinetic",
  thermal: "Thermal",
  plasma: "Plasma",
  EM: "EM"
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
  const dt = weapon.damageType as DamageType;
  const matrix = DAMAGE_MATRIX[dt] ?? DAMAGE_MATRIX.kinetic;

  const vsShields = describeValue(matrix.shields);
  const vsHull = describeValue(matrix.hull);

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
