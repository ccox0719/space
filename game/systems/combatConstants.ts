import type { WeaponDamageType } from "../core/contentTypes";

export const CALLED_SHOT_MODS = { damageMultiplier: 1.25, accuracyMultiplier: 0.8 };
export const BRACE_DAMAGE_REDUCTION = 0.4;

export const CALLED_SHOT_TIP =
  "Called shots focus on the hull; you trade 20% accuracy for +25% damage, so use them once shields are down or when an armor-piercing weapon is ready.";
export const BRACE_TIP =
  "Brace reduces the next incoming volley to 60% strength and works well when the enemy reloads or you expect a heavy return fire.";

type DamageTypeEffect = {
  shield: number;
  hull: number;
  description: string;
};

export const DAMAGE_TYPE_EFFECTS: Record<WeaponDamageType, DamageTypeEffect> = {
  EM: {
    shield: 1.25,
    hull: 0.85,
    description: "EM arcs overload shields quickly but bleed off against plated hulls."
  },
  thermal: {
    shield: 1.1,
    hull: 1.0,
    description: "Thermal beams melt shielding and stay reliable against exposed hull."
  },
  kinetic: {
    shield: 0.9,
    hull: 1.2,
    description: "Kinetic projectiles punch through armor but have less effect on energy shields."
  },
  plasma: {
    shield: 1.05,
    hull: 1.15,
    description: "Plasma burns through both defenses and leaves hull plating glowing."
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
  shieldMultiplier: DAMAGE_TYPE_EFFECTS[type].shield,
  hullMultiplier: DAMAGE_TYPE_EFFECTS[type].hull,
  description: DAMAGE_TYPE_EFFECTS[type].description
}));
