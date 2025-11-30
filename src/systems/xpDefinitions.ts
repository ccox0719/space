import xpSystems from "../../game/content/xp_systems.json";

export const XP_DEFINITIONS = xpSystems;

export interface XpTrackDefinition {
  id: string;
  displayName: string;
  description: string;
  type: string;
  levelThresholds: number[];
  maxLevel: number;
  rewardsByLevel?: Record<string, unknown>;
}

export interface PerkEffectDefinition {
  target: string;
  stat: string;
  operation: string;
  value: number;
}

export interface PerkDefinition {
  id: string;
  branch: string;
  tier: number;
  displayName: string;
  description: string;
  requires?: string[];
  effects?: PerkEffectDefinition[];
}

export type PerkDefinitions = Record<string, PerkDefinition>;
