import type { WeaponDamageType } from "../core/contentTypes";

export const CALLED_SHOT_MODS = { damageMultiplier: 1.25, accuracyMultiplier: 0.8 };
export const BRACE_DAMAGE_REDUCTION = 0.4;

export const CALLED_SHOT_TIP =
  "Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.";
export const BRACE_TIP =
  "Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.";

type DamageTypeEffect = {
  vsShields: number;
  vsHull: number;
  description: string;
};

export const DAMAGE_TYPE_EFFECTS: Record<WeaponDamageType, DamageTypeEffect> = {
  kinetic: {
    vsShields: 0.8,
    vsHull: 1.2,
    description: "Kinetic projectiles punch through armor but have less effect on energy shields."
  },
  energy: {
    vsShields: 1.2,
    vsHull: 0.8,
    description: "Energy beams focus on shields and finesse hulls."
  },
  explosive: {
    vsShields: 1.0,
    vsHull: 1.3,
    description: "Explosives blast both layers but leave hull plating the most damaged."
  },
  disruptive: {
    vsShields: 1.3,
    vsHull: 1.0,
    description: "Disruptive rounds disable shields aggressively while nicking hull."
  }
};

export interface DamageTypeGuideEntry {
  type: WeaponDamageType;
  shieldMultiplier: number;
  hullMultiplier: number;
  description: string;
}

export const DAMAGE_TYPE_GUIDE: DamageTypeGuideEntry[] = (Object.keys(
  DAMAGE_TYPE_EFFECTS
) as WeaponDamageType[]).map((type) => ({
  type,
  shieldMultiplier: DAMAGE_TYPE_EFFECTS[type].vsShields,
  hullMultiplier: DAMAGE_TYPE_EFFECTS[type].vsHull,
  description: DAMAGE_TYPE_EFFECTS[type].description
}));

export const DAMAGE_TYPE_VS_DEFENSE = DAMAGE_TYPE_EFFECTS;
