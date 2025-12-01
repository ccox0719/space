import type {
  CombatPhase,
  CounterMapping,
  EnemyBattleRole,
  EnemyIntentType,
  EncounterDifficultyBand
} from "../core/contentTypes";

export const phaseThresholds = {
  positioning: 2,
  escalation: { min: 3, max: 5 },
  finisher: 6
};

export const instabilityConfig = {
  thresholds: {
    minor: 0.25,
    major: 0.15,
    critical: 0.1
  },
  misfireChanceAtMajor: 0.15,
  engineFlickerChanceAtCritical: 0.2,
  criticalDamagePenalty: 0.7
};

export const encounterPowerBands: Record<EncounterDifficultyBand, { min: number; max: number }> = {
  tutorial: { min: 0, max: 60 },
  easy: { min: 30, max: 110 },
  normal: { min: 90, max: 180 },
  hard: { min: 150, max: 260 },
  elite: { min: 220, max: 400 }
};

export const roleIntentProfiles: Record<
  EnemyBattleRole,
  Partial<Record<EnemyIntentType, number>>
> = {
  anchor: {
    heavy_attack: 5,
    shield_boost: 4,
    flank_shot: 2,
    debuff: 1,
    retreat: 0,
    charge_weapon: 2
  },
  support: {
    heavy_attack: 1,
    shield_boost: 5,
    flank_shot: 1,
    debuff: 4,
    retreat: 1,
    charge_weapon: 3
  },
  flanker: {
    heavy_attack: 3,
    shield_boost: 1,
    flank_shot: 5,
    debuff: 1,
    retreat: 2,
    charge_weapon: 1
  }
};

export const phaseIntentModifiers: Record<
  CombatPhase,
  Partial<Record<EnemyIntentType, number>>
> = {
  positioning: {
    heavy_attack: 0.5,
    shield_boost: 1.2,
    flank_shot: 0.8,
    charge_weapon: 1.1,
    debuff: 1
  },
  escalation: {
    heavy_attack: 1.1,
    flank_shot: 1.2,
    retreat: 0.5,
    shield_boost: 0.9
  },
  finisher: {
    heavy_attack: 1,
    flank_shot: 1,
    retreat: 1.5,
    charge_weapon: 1.2,
    debuff: 1.1
  }
};

export const counterplayMappings: CounterMapping[] = [
  { intentType: "heavy_attack", counterActionId: "focus_fire", effect: "weaken" },
  { intentType: "charge_weapon", counterActionId: "emp_blast", effect: "cancel" },
  { intentType: "shield_boost", counterActionId: "jam_enemy", effect: "delay" },
  { intentType: "flank_shot", counterActionId: "boost_engines", effect: "delay" }
];

