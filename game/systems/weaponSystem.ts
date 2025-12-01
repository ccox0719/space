import { ensurePlayerInventory, gameState, persistLoadout } from "../core/state";
import { content, WeaponDef } from "../core/engine";
import { DAMAGE_TYPE_VS_DEFENSE } from "./combatConstants";
import type {
  WeaponDamageType,
  WeaponSize,
  WeaponTargetingMode,
  WeaponType
} from "../core/contentTypes";

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

const GLOBAL_ACCURACY_BOOST = 0.15;

/**
 * Damage calculation for combat, with optional modifiers for aim modes and stance.
 */
export function computeWeaponDamage(
  weapon: WeaponDef,
  opts: DamageOptions = {}
): number {
  const tags = weapon.tags || [];

  let accuracy =
    (weapon.accuracy * (opts.accuracyMultiplier ?? 1) + GLOBAL_ACCURACY_BOOST) || 0;
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

  const volatility = 0.2;
  const spread = 1 + (Math.random() * volatility * 2 - volatility);
  dmg = Math.max(1, Math.round(dmg * spread));

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

export type WeaponSlot = WeaponSize;

export type WeaponRarity = "starter" | "common" | "uncommon" | "rare" | "epic" | "legendary";

export interface WeaponBlueprint {
  id: string;
  name: string;
  slot: WeaponSlot;
  type: WeaponType;
  damageType: WeaponDamageType;
  rarity: WeaponRarity;
  tags: string[];
  targetingMode?: WeaponTargetingMode;
  canBypassCover?: boolean;
  splashRadius?: number;
  linePierce?: boolean;
  damageMin: number;
  damageMax: number;
  cooldownMin: number;
  cooldownMax: number;
  fireRateMin: number;
  fireRateMax: number;
  accuracyMin: number;
  accuracyMax: number;
  energyCostMin: number;
  energyCostMax: number;
  critChanceMin: number;
  critChanceMax: number;
  critMultiplierMin: number;
  critMultiplierMax: number;
  shieldModMin: number;
  shieldModMax: number;
  armorModMin: number;
  armorModMax: number;
  priceMin: number;
  priceMax: number;
}

export interface WeaponInstance {
  instanceId: string;
  blueprintId: string;
  name: string;
  type: WeaponType;
  size: WeaponSize;
  damageType: WeaponDamageType;
  rarity: WeaponRarity;
  damage: number;
  fireRate: number;
  cooldown: number;
  accuracy: number;
  energyCost: number;
  critChance: number;
  critMultiplier: number;
  shieldMod: number;
  armorMod: number;
  price: number;
  tags: string[];
  targetingMode?: WeaponTargetingMode;
  canBypassCover?: boolean;
  splashRadius?: number;
  linePierce?: boolean;
  rating: number;
  ratingGrade: string;
}

const RARITY_FLAGS: [WeaponRarity, string][] = [
  ["starter", "starter"],
  ["epic", "epic"],
  ["rare", "rare"],
  ["uncommon", "uncommon"],
  ["common", "common"],
  ["legendary", "legendary"]
];

function detectWeaponRarity(tags: string[] = []): WeaponRarity {
  const normalized = new Set(tags);
  for (const [rarity, marker] of RARITY_FLAGS) {
    if (normalized.has(marker)) {
      return rarity;
    }
  }
  return "common";
}

function createStatRange(
  value: number,
  minDelta: number,
  maxDelta: number,
  options: { clampMin?: number; clampMax?: number; fallback?: number } = {}
): { min: number; max: number } {
  const base = Math.max(Math.abs(value), options.fallback ?? 1);
  const lower = value - base * minDelta;
  const upper = value + base * maxDelta;
  const clampedMin = options.clampMin != null ? Math.max(options.clampMin, lower) : lower;
  const clampedMax = options.clampMax != null ? Math.min(options.clampMax, upper) : upper;
  const minValue = Math.min(clampedMin, clampedMax);
  const maxValue = Math.max(clampedMin, clampedMax);
  return { min: minValue, max: Math.max(maxValue, minValue) };
}

export function buildBlueprintFromWeaponDef(weapon: WeaponDef): WeaponBlueprint {
  const damageRange = createStatRange(weapon.damage ?? 0, 0.12, 0.25, { clampMin: 1 });
  const cooldownRange = createStatRange(weapon.cooldown ?? 1, 0.08, 0.25, {
    clampMin: 0.3,
    fallback: 0.5
  });
  const accuracyRange = createStatRange(weapon.accuracy ?? 0, 0.03, 0.12, {
    clampMin: 0,
    clampMax: 0.99,
    fallback: 0.2
  });
  const energyRange = createStatRange(weapon.energyCost ?? 0, 0.05, 0.2, { clampMin: 0 });
  const critChanceRange = createStatRange(weapon.critChance ?? 0, 0.05, 0.2, {
    clampMin: 0,
    clampMax: 0.5,
    fallback: 0.05
  });
  const critMultiplierRange = createStatRange(weapon.critMultiplier ?? 1, 0.05, 0.25, {
    clampMin: 1,
    fallback: 0.5
  });
  const shieldRange = createStatRange(weapon.shieldMod ?? 1, 0.05, 0.2, { clampMin: 0.5 });
  const armorRange = createStatRange(weapon.armorMod ?? 1, 0.05, 0.2, { clampMin: 0.5 });
  const priceRange = createStatRange(weapon.price ?? 0, 0.1, 0.3, { clampMin: 0 });

  const fireRateMin = 1 / Math.max(cooldownRange.max, 0.01);
  const fireRateMax = 1 / Math.max(cooldownRange.min, 0.01);

  return {
    id: weapon.id,
    name: weapon.name,
    slot: weapon.size,
    type: weapon.type,
    damageType: weapon.damageType,
    rarity: detectWeaponRarity(weapon.tags),
    tags: weapon.tags ?? [],
    targetingMode: weapon.targetingMode,
    canBypassCover: weapon.canBypassCover,
    splashRadius: weapon.splashRadius,
    linePierce: weapon.linePierce,
    damageMin: damageRange.min,
    damageMax: damageRange.max,
    cooldownMin: cooldownRange.min,
    cooldownMax: cooldownRange.max,
    fireRateMin,
    fireRateMax,
    accuracyMin: accuracyRange.min,
    accuracyMax: accuracyRange.max,
    energyCostMin: energyRange.min,
    energyCostMax: energyRange.max,
    critChanceMin: critChanceRange.min,
    critChanceMax: critChanceRange.max,
    critMultiplierMin: critMultiplierRange.min,
    critMultiplierMax: critMultiplierRange.max,
    shieldModMin: shieldRange.min,
    shieldModMax: shieldRange.max,
    armorModMin: armorRange.min,
    armorModMax: armorRange.max,
    priceMin: priceRange.min,
    priceMax: priceRange.max
  };
}

export function getWeaponBlueprints(): WeaponBlueprint[] {
  if (!content) return [];
  return content.weapons.map(buildBlueprintFromWeaponDef);
}

export function getWeaponBlueprintById(weaponId: string | null): WeaponBlueprint | null {
  if (!weaponId || !content) return null;
  const weapon = content.weapons.find((w) => w.id === weaponId);
  return weapon ? buildBlueprintFromWeaponDef(weapon) : null;
}

export function randRange(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

export function randBell(min: number, max: number): number {
  const a = Math.random();
  const b = Math.random();
  const t = (a + b) / 2;
  return min + t * (max - min);
}

function normalizeStat(value: number, min: number, max: number): number {
  const range = max - min;
  if (range <= 0) {
    return value >= max ? 1 : 0;
  }
  return Math.max(0, Math.min(1, (value - min) / range));
}

function generateInstanceId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID();
  }
  return `weapon-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function computeWeaponRating(
  weapon: { damage: number; fireRate: number; accuracy: number; energyCost: number; critChance: number; critMultiplier: number },
  bp: WeaponBlueprint
): number {
  const damageNorm = normalizeStat(weapon.damage, bp.damageMin, bp.damageMax);
  const fireRateNorm = normalizeStat(weapon.fireRate, bp.fireRateMin, bp.fireRateMax);
  const accuracyNorm = normalizeStat(weapon.accuracy, bp.accuracyMin, bp.accuracyMax);
  const energyScore = 1 - normalizeStat(weapon.energyCost, bp.energyCostMin, bp.energyCostMax);
  const critProduct = weapon.critChance * weapon.critMultiplier;
  const critMin = bp.critChanceMin * bp.critMultiplierMin;
  const critMax = bp.critChanceMax * bp.critMultiplierMax;
  const critNorm = normalizeStat(critProduct, critMin, critMax);

  const score =
    damageNorm * 0.3 +
    fireRateNorm * 0.3 +
    accuracyNorm * 0.2 +
    energyScore * 0.1 +
    critNorm * 0.1;

  return Math.round(Math.max(0, Math.min(1, score)) * 100);
}

export function gradeFromRating(r: number): string {
  if (r >= 90) return "S";
  if (r >= 80) return "A";
  if (r >= 70) return "B";
  if (r >= 60) return "C";
  if (r >= 50) return "D";
  return "F";
}

export function rollWeaponFromBlueprint(bp: WeaponBlueprint): WeaponInstance {
  const damage = Math.max(1, Math.round(randBell(bp.damageMin, bp.damageMax)));
  const cooldown = Math.max(0.1, +randBell(bp.cooldownMin, bp.cooldownMax).toFixed(2));
  const fireRate = +(1 / cooldown).toFixed(2);
  const accuracy = +randBell(bp.accuracyMin, bp.accuracyMax).toFixed(2);
  const energyCost = Math.max(0, Math.round(randBell(bp.energyCostMin, bp.energyCostMax)));
  const critChance = +randBell(bp.critChanceMin, bp.critChanceMax).toFixed(3);
  const critMultiplier = +randBell(bp.critMultiplierMin, bp.critMultiplierMax).toFixed(2);
  const shieldMod = +randBell(bp.shieldModMin, bp.shieldModMax).toFixed(2);
  const armorMod = +randBell(bp.armorModMin, bp.armorModMax).toFixed(2);
  const price = Math.max(0, Math.round(randRange(bp.priceMin, bp.priceMax)));

  const rating = computeWeaponRating(
    { damage, fireRate, accuracy, energyCost, critChance, critMultiplier },
    bp
  );

  return {
    instanceId: generateInstanceId(),
    blueprintId: bp.id,
    name: bp.name,
    type: bp.type,
    size: bp.slot,
    damageType: bp.damageType,
    rarity: bp.rarity,
    damage,
    fireRate,
    cooldown,
    accuracy,
    energyCost,
    critChance,
    critMultiplier,
    shieldMod,
    armorMod,
    price,
    tags: bp.tags,
    targetingMode: bp.targetingMode,
    canBypassCover: bp.canBypassCover,
    splashRadius: bp.splashRadius,
    linePierce: bp.linePierce,
    rating,
    ratingGrade: gradeFromRating(rating)
  };
}
