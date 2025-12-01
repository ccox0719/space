import {
  devTune,
  gameState,
  newGameState,
  setGameState,
  loadDevTune,
  getHighScore,
  setHighScore,
  DEFAULT_DEV_TUNE,
  getCombatTune,
  getStanceDefinition
} from "../core/state";
import { getPassiveEffects } from "../core/passives";
import { navigation } from "../core/navigation";
import { content, getSystemById } from "../core/engine";
import { computeWeaponDamage, getWeaponById } from "./weaponSystem";
import { rollLoot } from "./lootSystem";
import { triggerGameOver } from "../core/gameFlow";
import {
  recordCombatDamageDealt,
  recordCombatDamageTaken,
  recordCombatVictory,
  recordShipDestroyed
} from "../core/state";
import {
  BRACE_DAMAGE_REDUCTION,
  CALLED_SHOT_MODS,
  CALLED_SHOT_TIP,
  BRACE_TIP,
  DAMAGE_TYPE_GUIDE,
  DAMAGE_TYPE_VS_DEFENSE
} from "./combatConstants";
export { CALLED_SHOT_TIP, BRACE_TIP, DAMAGE_TYPE_GUIDE } from "./combatConstants";
import { computePlayerPower, computeDayPressure, getEnemyScale, adjustTension } from "./difficultySystem";
import { systemHasTag } from "./systemHelpers";
import { recordCombatKill } from "./missionSystem";
import { adjustWanted } from "./wantedSystem";
import { abortMiningSession } from "./miningSystem";
import { getComponentById } from "./componentSystem";
import { awardXp, awardShipXp, isPerkUnlocked } from "./perkManager";
import { counterplayMappings, instabilityConfig, phaseIntentModifiers, phaseThresholds, roleIntentProfiles } from "./combatConfig";
import {
  formatAttackLog,
  formatCounterplayLog,
  formatInstabilityLog,
  formatIntentReveal,
  formatPhaseChange
} from "./combatNarration";
import { getEncounterById } from "../content/encounters";
import type { ScreenID } from "../core/navigation";
import type {
  CombatState,
  DamageType,
  EnemySlot,
  EnemyPosition,
  StatusEffectType,
  StanceId,
  EncounterState
} from "../core/state";
import type {
  ComponentAbilityDef,
  ComponentDef,
  CombatPhase,
  CounterMapping,
  EnemyBattleRole,
  EnemyIntent,
  EnemyIntentType,
  EncounterTemplate,
  PositionHint,
  WeaponDef,
  WeaponDamageType
} from "../core/contentTypes";

type AimMode = "normal" | "called_shot";

function getCombatProgress(): number {
  const system = getSystemById(gameState.location.systemId);
  const baseDanger = system?.baseDanger ?? 1;
  const dayBonus = Math.min(4, Math.floor((gameState.time.day ?? 1 - 1) / 10));
  return Math.min(10, Math.max(1, baseDanger * 2 + dayBonus));
}

function getEnemyCountFromProgress(progress: number): number {
  const normalized = Math.max(0, Math.min(1, (progress - 1) / 9));
  const scaled = 1 + Math.floor(normalized * 4);
  const variance = Math.random() < 0.3 ? (Math.random() < 0.5 ? -1 : 1) : 0;
  return clamp(scaled + variance, 1, 5);
}

function getEnemyTemplate(id: string) {
  if (!content) {
    throw new Error("Content has not been loaded.");
  }
  const tpl = content.enemies.find((e) => e.id === id);
  if (!tpl) {
    throw new Error(`Unknown enemy template: ${id}`);
  }
  return tpl;
}

function randBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateEnemyPositions(count: number): EnemyPosition[] {
  const positions: EnemyPosition[] = [];
  const laneUsage: Record<number, number> = {};
  for (let i = 0; i < count; i += 1) {
    const lane = i % 3;
    const usage = laneUsage[lane] ?? 0;
    const row: EnemyPosition["row"] = usage === 0 ? "front" : "back";
    laneUsage[lane] = usage + 1;
    positions.push({ lane, row });
  }
  return positions;
}

const SOLO_FIRE_BONUS = 1.25;
const ENEMY_DAMAGE_SCALE = 0.7;

const PLAYER_ACTION_IDS = [
  "adaptive_strike",
  "shield_focus",
  "hull_focus",
  "overcharge_shields",
  "alpha_strike",
  "boost_engines",
  "emp_blast",
  "focus_fire",
  "jam_enemy"
] as const;

type PlayerActionId = typeof PLAYER_ACTION_IDS[number];

export interface PlayerActionDefinition {
  id: PlayerActionId;
  label: string;
  description: string;
  cooldown: number;
  effect: (combat: CombatState, target?: EnemySlot) => boolean;
}

export const ALPHA_STRIKE_WEAPON: WeaponDef = {
  id: "alpha_strike",
  name: "Alpha Strike",
  description: "Charge mass drivers and slam them into one chassis.",
  type: "projectile",
  size: "medium",
  damage: 0,
  damageType: "kinetic",
  shieldMod: 1,
  armorMod: 1,
  accuracy: 1,
  critChance: 0.05,
  critMultiplier: 1.5,
  energyCost: 0,
  cooldown: 0,
  price: 0,
  tags: [],
  targetingMode: "laneAny"
};

export const PLAYER_ACTIONS: PlayerActionDefinition[] = [
  {
    id: "adaptive_strike",
    label: "Adaptive Strike",
    description: "Sweep your batteries evenly across the selected target.",
    cooldown: 1,
    effect: (combat) => fireReadyWeaponsWithTarget(combat, "normal")
  },
  {
    id: "shield_focus",
    label: "Shield Focus",
    description: "Target shields first before letting hulls take the brunt.",
    cooldown: 2,
    effect: (combat) => {
      const target = pickShieldFocusedTarget(combat);
      return fireReadyWeaponsWithTarget(combat, "normal", target);
    }
  },
  {
    id: "hull_focus",
    label: "Hull Focus",
    description: "Aim for weakened hulls with precision targeting.",
    cooldown: 2,
    effect: (combat) => {
      const target = pickHullFocusedTarget(combat) ?? ensureSelectedEnemy(combat);
      return fireReadyWeaponsWithTarget(combat, "called_shot", target);
    }
  },
  {
    id: "overcharge_shields",
    label: "Overcharge Shields",
    description: "Divert power to shields for 2 turns, reducing incoming damage while lowering maneuver.",
    cooldown: 2,
    effect: (combat) => {
      combat.playerStatus.shieldBoost = Math.max(combat.playerStatus.shieldBoost, 15);
      combat.playerStatus.shieldTurns = 2;
      combat.playerStatus.maneuverBonus = Math.max(-10, combat.playerStatus.maneuverBonus - 4);
      log("You gratefully inhale energy into the shields, locking down the hull.");
      return true;
    }
  },
  {
    id: "alpha_strike",
    label: "Alpha Strike",
    description: "Unload a massive kinetic salvo for high damage at the cost of reduced maneuver.",
    cooldown: 3,
    effect: (combat, target) => {
      if (!target) {
        log("Alpha Strike needs a live target.");
        return false;
      }
      const base = Math.max(8, Math.round((gameState.ship.weaponPower ?? 10) * 1.7));
      const damageDone = applyDamageToEnemySlot(
        base,
        "kinetic",
        ALPHA_STRIKE_WEAPON,
        target
      );
      if (damageDone > 0) {
        recordCombatDamageDealt(damageDone);
      }
      log(
        formatAttackLog({
          attackerName: "You",
          defenderName: target.name,
          damage: damageDone,
          weaponType: "Alpha Strike",
          phase: combat.phase,
          defenderLowHp: target.hp / Math.max(1, target.maxHp) <= 0.35
        })
      );
      combat.playerStatus.maneuverBonus = Math.max(-10, combat.playerStatus.maneuverBonus - 3);
      if (target.hp <= 0) {
        log(`${target.name} collapses under the Alpha Strike!`);
        removeEnemySlotFromEncounter(combat, target.id);
      }
      return true;
    }
  },
  {
    id: "boost_engines",
    label: "Boost Engines",
    description: "Boost maneuver rating for 2 turns, trading a turn of offensive pressure for agility.",
    cooldown: 2,
    effect: (combat) => {
      combat.playerStatus.maneuverBonus = (combat.playerStatus.maneuverBonus || 0) + 12;
      combat.playerStatus.maneuverTurns = 2;
      log("Thrusters spool hotter, drifting across firing arcs.");
      return true;
    }
  },
  {
    id: "emp_blast",
    label: "EMP Blast",
    description: "Jam enemy weapon systems for several turns; great against focused batteries.",
    cooldown: 4,
    effect: (combat, target) => {
      if (!target) {
        log("EMP Blast sputters without a target.");
        return false;
      }
      combat.enemyStatus.weaponJammedTurns = Math.min(3, combat.enemyStatus.weaponJammedTurns + 2);
      log(`EMP energy floods ${target.name}, rattling its systems.`);
      return true;
    }
  },
  {
    id: "focus_fire",
    label: "Focus Fire",
    description: "Focus every weapon on one hull to burst through armor and force the foe to retaliate.",
    cooldown: 3,
    effect: (combat, target) => {
      if (!target) {
        log("Focus Fire needs an engaged enemy.");
        return false;
      }
      const bonus = Math.max(5, Math.round((gameState.ship.weaponPower ?? 10) * 0.6));
      const damageDone = applyDamageToEnemySlot(
        bonus,
        "energy",
        ALPHA_STRIKE_WEAPON,
        target
      );
      if (damageDone > 0) {
        recordCombatDamageDealt(damageDone);
      }
      target.intentDamageMultiplier = Math.min(
        1,
        (target.intentDamageMultiplier ?? 1) * 0.6
      );
      log(
        formatAttackLog({
          attackerName: "You",
          defenderName: target.name,
          damage: damageDone,
          weaponType: "Focus Fire",
          phase: combat.phase,
          defenderLowHp: target.hp / Math.max(1, target.maxHp) <= 0.35
        })
      );
      if (target.hp <= 0) {
        log(`${target.name} shudders as focus fire ruptures its hull.`);
        removeEnemySlotFromEncounter(combat, target.id);
      }
      return true;
    }
  },
  {
    id: "jam_enemy",
    label: "Signal Jam",
    description: "Flood sensors to delay boosts and buff casts.",
    cooldown: 3,
    effect: (combat, target) => {
      if (!target) {
        log("Signal Jam needs a foe to latch onto.");
        return false;
      }
      log(`Signal noise blankets ${target.name}, muddying its preparations.`);
      return true;
    }
  }
];

function getPlayerActionDefinition(actionId: PlayerActionId): PlayerActionDefinition | undefined {
  return PLAYER_ACTIONS.find((entry) => entry.id === actionId);
}

function applyPlayerActionCooldown(combat: CombatState, actionId: PlayerActionId, cooldown: number): void {
  const entry = combat.playerActionCooldowns.find((item) => item.actionId === actionId);
  if (entry) {
    entry.remainingRounds = Math.max(entry.remainingRounds, cooldown);
    return;
  }
  combat.playerActionCooldowns.push({ actionId, remainingRounds: cooldown });
}

function attemptCounterplay(
  combat: CombatState,
  target: EnemySlot | undefined,
  actionId: PlayerActionId
): void {
  if (!target || !target.nextIntent) return;
  const mapping = counterplayMappings.find((entry) => entry.counterActionId === actionId);
  if (!mapping || mapping.intentType !== target.nextIntent.type) return;
  const intent = target.nextIntent;
  switch (mapping.effect) {
    case "cancel":
      target.nextIntent = undefined;
      log(formatCounterplayLog(actionId, intent, target.name));
      break;
    case "weaken":
      target.intentDamageMultiplier = Math.min(1, (target.intentDamageMultiplier ?? 1) * 0.5);
      log(formatCounterplayLog(actionId, intent, target.name));
      break;
    case "delay":
      target.intentCharged = true;
      log(formatCounterplayLog(actionId, intent, target.name));
      break;
  }
}

interface EnemySlotCustomization {
  battleRole?: EnemyBattleRole;
  focusHint?: string;
}

function buildEncounterSlots(
  template: ReturnType<typeof getEnemyTemplate>,
  hpMultiplier: number,
  positions: EnemyPosition[],
  customizations: EnemySlotCustomization[] = []
): EnemySlot[] {
  const baseHp = Math.max(1, Math.round(template.hull * hpMultiplier));
  const baseShields = Math.max(0, Math.round(template.shields * hpMultiplier));
  return positions.map((position, index) => {
    const customization = customizations[index];
    const battleRole = customization?.battleRole ?? template.battleRole ?? "anchor";
    const focusHint = customization?.focusHint;
    return {
      id: `${template.id}-${position.lane}-${position.row}-${index}-${Math.round(Math.random() * 10000)}`,
      templateId: template.id,
      name: template.name,
      hp: baseHp,
      maxHp: baseHp,
      shields: baseShields,
      maxShields: baseShields,
      weaponIds: template.weaponIds.slice(),
      weaponCooldowns: template.weaponIds.map(() => 0),
      position,
      alive: true,
      side: "enemy",
      factionId: template.faction,
      factionLabel:
        (content?.factions.find((faction) => faction.id === template.faction)?.name) ?? undefined,
      statusEffects: [],
      tags: template.tags ? [...template.tags] : [],
      canEscape: template.canEscape,
      battleRole,
      focusHint,
      intentDamageMultiplier: 1,
      cooldowns: []
    };
  });
}

function buildEncounterName(template: ReturnType<typeof getEnemyTemplate>, count: number): string {
  if (count <= 1) return template.name;
  return `${template.name} Squadron`;
}

function getStanceAccuracyFactor(stance: StanceId): number {
  const definition = getStanceDefinition(stance);
  const factor = 1 - definition.evasionBonus;
  return Math.max(0, factor);
}

function applyStanceDamageMultiplier(
  damage: number,
  damageType: DamageType,
  stance: StanceId
): number {
  const definition = getStanceDefinition(stance);
  const multiplier = definition.damageTakenMultipliers?.[damageType] ?? 1;
  return Math.max(0, Math.round(damage * multiplier));
}

type BoardState = {
  encounter: EncounterState;
};

interface ActiveModuleAbility {
  componentId: string;
  componentName: string;
  ability: ComponentAbilityDef;
  cooldown: number;
  ready: boolean;
}

const VOLLEY_ORDER: WeaponDamageType[] = ["disruptive", "energy", "kinetic", "explosive"];
const PRECISION_SHIELD_BONUS = 1.2;

type ComboFinishType = "risk" | "variation" | "dodge";
type ComboSource = "variation" | "risk" | "dodge";

export interface ComboMeterState {
  charge: number;
  variationPoints: number;
  riskPoints: number;
  dodgePoints: number;
  recentCategories: string[];
  ready?: {
    type: ComboFinishType;
    label: string;
  };
}

const COMBO_MAX = 100;
const COMBO_HISTORY_LENGTH = 5;

const FRONT_RETREAT_HP_THRESHOLD = 0.4;

const BREACH_DURATION = 2;
const JAMMED_DURATION = 2;
const BURN_DURATION = 3;
const BREACH_TICK_DAMAGE = 2;
const BURN_TICK_DAMAGE = 3;
const JAMMED_ACCURACY_PENALTY = 0.7;

function addStatusEffect(slot: EnemySlot, type: StatusEffectType, duration: number): boolean {
  const existing = slot.statusEffects.find((status) => status.type === type);
  if (existing) {
    existing.duration = Math.max(existing.duration, duration);
    return false;
  }
  slot.statusEffects.push({ type, duration });
  return true;
}

function hasStatusEffect(slot: EnemySlot, type: StatusEffectType): boolean {
  return slot.statusEffects.some((status) => status.type === type);
}

function getShipAt(board: BoardState, lane: number, row: "front" | "back", side?: "player" | "enemy"): EnemySlot | undefined {
  return board.encounter.enemies.find(
    (ship) => ship.position.lane === lane && ship.position.row === row && (!side || ship.side === side)
  );
}

function getLaneShips(board: BoardState, lane: number, side?: "player" | "enemy"): EnemySlot[] {
  return board.encounter.enemies.filter(
    (ship) => ship.position.lane === lane && (!side || ship.side === side)
  );
}

function getAliveShips(board: BoardState, side: "player" | "enemy"): EnemySlot[] {
  return board.encounter.enemies.filter((ship) => ship.side === side && ship.alive);
}

function canTargetSlot(board: BoardState, weapon: WeaponDef, target: EnemySlot): boolean {
  if (!target.alive) return false;
  const frontInLane = getShipAt(board, target.position.lane, "front", target.side);
  if (target.position.row === "back" && frontInLane && frontInLane.alive && !weapon.canBypassCover) {
    return false;
  }
  switch (weapon.targetingMode) {
    case "frontOnly":
      return target.position.row === "front";
    case "linePierce":
      return target.position.row === "front";
    case "splashLane":
      return target.position.row === "front";
    default:
      return true;
  }
}

function getFactionDefinition(factionId?: string) {
  if (!factionId || !content) return undefined;
  return content.factions.find((faction) => faction.id === factionId);
}

const FACTION_PREFERENCE_BONUS = 2;

function scoreTarget(attacker: EnemySlot, weapon: WeaponDef, target: EnemySlot): number {
  let score = 0;
  const shieldPct = target.maxShields ? target.shields / target.maxShields : 0;
  const hpPct = target.maxHp ? target.hp / target.maxHp : 0;
  score += (1 - shieldPct) * 3;
  score += (1 - hpPct) * 5;
  if (target.isFragile) score += 3;
  if (target.role === "support" || target.role === "artillery") score += 2;
  if (!weapon.canBypassCover && target.position.row === "front") score += 1;
  if (weapon.linePierce && target.position.row === "front") score += 1;
  if (weapon.damageType === target.damageProfile) score += 1;
  const faction = getFactionDefinition(attacker.factionId);
  if (faction && faction.preferredDamage.includes(weapon.damageType)) {
    score += FACTION_PREFERENCE_BONUS;
  }
  return score;
}

function buildPlayerSlot(): EnemySlot {
  const ship = gameState.ship;
  return {
    id: "player",
    side: "player",
    templateId: "player",
    name: ship.name,
    hp: ship.hp,
    maxHp: ship.maxHp,
    shields: ship.shields,
    maxShields: ship.maxShields,
    weaponIds: [],
    weaponCooldowns: [],
    position: { lane: 1, row: "front" },
    statusEffects: [],
    tags: [],
    canEscape: false,
    alive: ship.hp > 0
  };
}

function chooseTarget(
  attacker: EnemySlot,
  weapon: WeaponDef,
  board: BoardState,
  extraTargets: EnemySlot[] = []
): EnemySlot | null {
  const valid = [
    ...board.encounter.enemies.filter(
      (slot) => slot.side !== attacker.side && canTargetSlot(board, weapon, slot)
    ),
    ...extraTargets.filter((slot) => slot.side !== attacker.side && canTargetSlot(board, weapon, slot))
  ];
  if (!valid.length) return null;
  const coverRestricted = !weapon.canBypassCover;
  const frontTargets = valid.filter((slot) => slot.position.row === "front");
  const targetPool = coverRestricted && frontTargets.length ? frontTargets : valid;
  const scored = targetPool
    .map((slot) => ({ slot, score: scoreTarget(attacker, weapon, slot) }))
    .sort((a, b) => b.score - a.score);
  return scored[0].slot;
}

function applyAreaEffects(board: BoardState, weapon: WeaponDef, primary: EnemySlot | null, damage: number) {
  if (!primary || primary.side !== "enemy") return;
  if (weapon.linePierce && primary.position.row === "front") {
    const back = getShipAt(board, primary.position.lane, "back");
    if (back && back.alive && back.side !== primary.side) {
      const pierceDamage = Math.max(0, Math.round(damage * 0.5));
      applyDamageToEnemySlot(pierceDamage, weapon.damageType as DamageType, weapon, back);
      log(`${weapon.name} pierces through ${primary.name} and grazes ${back.name} for ${pierceDamage}.`);
    }
  }
  if (weapon.splashRadius && primary.position.row === "front") {
    const laneTargets = board.encounter.enemies.filter(
      (slot) =>
        slot.position.lane === primary.position.lane &&
        slot.id !== primary.id &&
        slot.alive
    );
    const splashDamage = Math.max(0, Math.round(damage * 0.35));
    for (const slot of laneTargets) {
      applyDamageToEnemySlot(splashDamage, weapon.damageType as DamageType, weapon, slot);
      log(`${weapon.name} splashes ${slot.name} for ${splashDamage} damage.`);
    }
  }
}

function maybeApplyStatus(
  damageType: DamageType,
  damageDone: number,
  slot: EnemySlot
) {
  if (damageType === "explosive" && slot.shields <= 0 && damageDone >= 8) {
    if (Math.random() <= 0.3 && addStatusEffect(slot, "breach", BREACH_DURATION)) {
      log(`${slot.name} suffers a hull breach!`);
    }
  }
  if (damageType === "disruptive" && damageDone >= 5) {
    if (Math.random() <= 0.3 && addStatusEffect(slot, "jammed", JAMMED_DURATION)) {
      log(`${slot.name} is jammed and struggles to stay online!`);
    }
  }
  if (damageType === "energy" && slot.shields <= 0 && damageDone >= 6) {
    if (Math.random() <= 0.25 && addStatusEffect(slot, "burn", BURN_DURATION)) {
      log(`${slot.name} is singed by the energy barrage!`);
    }
  }
}

function tickStatusEffects(combat: CombatState) {
  for (const slot of [...combat.encounter.enemies]) {
    if (slot.statusEffects.length === 0) continue;
    const next: typeof slot.statusEffects = [];
    for (const status of slot.statusEffects) {
      if (status.type === "breach" && slot.hp > 0) {
        const overflow = Math.min(slot.hp, BREACH_TICK_DAMAGE);
        slot.hp = Math.max(0, slot.hp - BREACH_TICK_DAMAGE);
        if (overflow > 0) {
          log(`${slot.name} leaks atmosphere from the breach (-${overflow} hull).`);
        }
      }
      if (status.type === "burn" && slot.hp > 0) {
        const damage = Math.min(slot.hp, BURN_TICK_DAMAGE);
        slot.hp = Math.max(0, slot.hp - BURN_TICK_DAMAGE);
        if (damage > 0) {
          log(`${slot.name} suffers burning damage (-${damage} hull).`);
        }
      }
      status.duration -= 1;
      if (status.duration > 0) {
        next.push(status);
      } else {
        log(`${slot.name} recovers from ${status.type}.`);
      }
    }
    slot.statusEffects = next;
    if (slot.hp <= 0) {
      removeEnemySlotFromEncounter(combat, slot.id);
    }
  }
}
function getSelectedEnemySlot(combat: CombatState): EnemySlot | undefined {
  return combat.encounter.enemies.find((slot) => slot.id === combat.selectedEnemyId);
}

function ensureSelectedEnemy(combat: CombatState): EnemySlot | undefined {
  const current = getSelectedEnemySlot(combat);
  if (current) return current;
  const fallback =
    combat.encounter.enemies.find((slot) => slot.position.row === "front") ?? combat.encounter.enemies[0];
  if (fallback) {
    combat.selectedEnemyId = fallback.id;
  } else {
    combat.selectedEnemyId = null;
  }
  return fallback;
}

function promoteBackRowSlot(combat: CombatState, lane: number): void {
  const backSlot = combat.encounter.enemies.find(
    (enemy) => enemy.position.lane === lane && enemy.position.row === "back"
  );
  if (!backSlot) return;
  backSlot.position.row = "front";
  log(`${backSlot.name} steps forward to lane ${lane}.`);
}

function removeEnemySlotFromEncounter(combat: CombatState, slotId: string): void {
  const idx = combat.encounter.enemies.findIndex((slot) => slot.id === slotId);
  if (idx === -1) return;
  const [removed] = combat.encounter.enemies.splice(idx, 1);
    if (removed.position.row === "front") {
      promoteBackRowSlot(combat, removed.position.lane);
    }
    if (combat.selectedEnemyId === slotId) {
      const nextTarget =
        combat.encounter.enemies.find((slot) => slot.position.row === "front") ??
        combat.encounter.enemies[0];
      combat.selectedEnemyId = nextTarget?.id ?? null;
    }
    processWaveTriggers(combat, "enemy_destroyed", removed.templateId);
  }

function tryDefensiveRetreat(combat: CombatState, side: "player" | "enemy") {
  const board: BoardState = combat;
  for (let lane = 0; lane < 3; lane += 1) {
    const front = getShipAt(board, lane, "front", side);
    const back = getShipAt(board, lane, "back", side);
    if (!front || !back) continue;
    if (!front.alive || !back.alive) continue;

    const frontHpPct = front.maxHp > 0 ? front.hp / front.maxHp : 0;
    const backHpPct = back.maxHp > 0 ? back.hp / back.maxHp : 0;

    const frontDamaged =
      front.shields < front.maxShields || front.hp < front.maxHp;
    const frontInTrouble =
      frontDamaged &&
      (front.shields === 0 || frontHpPct < FRONT_RETREAT_HP_THRESHOLD);
    const backIsFragile = back.isFragile ?? false;
    const backCanFrontline = !backIsFragile && backHpPct >= frontHpPct;

    if (frontInTrouble && backCanFrontline) {
      front.position.row = "back";
      back.position.row = "front";
      log(
        `${back.name} surges forward in lane ${lane + 1} as ${front.name} pulls back to recover.`
      );
    }
  }
}

function tryOffensiveAdvance(combat: CombatState, side: "player" | "enemy") {
  const board: BoardState = combat;
  for (let lane = 0; lane < 3; lane += 1) {
    const front = getShipAt(board, lane, "front", side);
    if (front && front.alive) continue;
    const back = getShipAt(board, lane, "back", side);
    if (!back || !back.alive) continue;

    const backIsFragile = back.isFragile ?? false;
    const canFrontline = back.wantsFrontline || !backIsFragile;
    if (!canFrontline) continue;

    back.position.row = "front";
    log(`${back.name} fills the empty front line in lane ${lane + 1}.`);
  }
}

function handleFormationMovement(combat: CombatState) {
  tryDefensiveRetreat(combat, "player");
  tryDefensiveRetreat(combat, "enemy");
  tryOffensiveAdvance(combat, "player");
  tryOffensiveAdvance(combat, "enemy");
  relocateBacklineToCover(combat);
  fillEmptyBackSlots(combat);
  ensureSelectedEnemy(combat);
}

function fillEmptyBackSlots(combat: CombatState) {
  const board: BoardState = combat;
  for (let lane = 0; lane < 3; lane += 1) {
    const front = getShipAt(board, lane, "front", "enemy");
    const back = getShipAt(board, lane, "back", "enemy");
    if (!front || !front.alive) continue;
    if (back && back.alive) continue;

    const donor = board.encounter.enemies.find(
      (slot) =>
        slot.side === "enemy" &&
        slot.alive &&
        slot.position.row === "front" &&
        slot.id !== front.id &&
        slot.position.lane !== lane &&
        !(slot.wantsFrontline ?? false)
    );
    if (!donor) continue;

    donor.position = { lane, row: "back" };
    log(`${donor.name} drops into lane ${lane + 1} to shelter behind ${front.name}.`);
  }
}

function relocateBacklineToCover(combat: CombatState) {
  const board: BoardState = combat;
  for (let lane = 0; lane < 3; lane += 1) {
    const front = getShipAt(board, lane, "front", "enemy");
    const back = getShipAt(board, lane, "back", "enemy");
    if (!front || !front.alive || (back && back.alive)) continue;

    const donor = board.encounter.enemies.find((slot) => {
      if (
        slot.side !== "enemy" ||
        !slot.alive ||
        slot.position.row !== "front" ||
        slot.position.lane === lane ||
        (slot.wantsFrontline ?? false)
      ) {
        return false;
      }
      const laneMates = getLaneShips(board, slot.position.lane, "enemy").filter(
        (mate) => mate.alive && mate.id !== slot.id
      );
      return laneMates.length > 0;
    });
    if (!donor) continue;

    donor.position = { lane, row: "back" };
    const coverName = front.name ?? `Lane ${lane + 1}`;
    log(
      `${donor.name} maneuvers into lane ${lane + 1} to take cover behind ${coverName}.`
    );
  }
}

function applyDamageToEnemySlot(
  baseDamage: number,
  damageType: DamageType,
  weapon: WeaponDef,
  slot: EnemySlot
): number {
  const tableEntry = DAMAGE_TYPE_VS_DEFENSE[damageType];
  if (!tableEntry || baseDamage <= 0) return 0;
  const tags = weapon.tags || [];
  if (slot.shields > 0) {
    let multiplier = tableEntry.vsShields * (weapon.shieldMod ?? 1);
    if (tags.includes("shield_breaker")) {
      multiplier *= 1.2;
    }
    const damage = Math.max(0, Math.round(baseDamage * multiplier));
    slot.shields = Math.max(0, slot.shields - damage);
    return damage;
  }
  let multiplier = tableEntry.vsHull * (weapon.armorMod ?? 1);
  if (tags.includes("armor_piercing")) {
    multiplier *= 1.2;
  }
  const damage = Math.max(0, Math.round(baseDamage * multiplier));
  slot.hp = Math.max(0, slot.hp - damage);
  slot.alive = slot.hp > 0;
  return damage;
}

function computeEncounterHpMultiplier(): number {
  const tune = getCombatTune();
  const difficultyScale = getEnemyScale(gameState);
  return Math.max(1, (tune.enemyHpMultiplier ?? 1) * difficultyScale);
}

function resolvePositionForHint(encounter: EncounterState, hint?: PositionHint): EnemyPosition {
  const priority =
    hint === "right_flank"
      ? [2, 1, 0]
      : hint === "left_flank"
      ? [0, 1, 2]
      : [1, 0, 2];
  for (const lane of priority) {
    const laneShips = encounter.enemies.filter((ship) => ship.position.lane === lane);
    const frontTaken = laneShips.some((ship) => ship.position.row === "front");
    const backTaken = laneShips.some((ship) => ship.position.row === "back");
    const wantsBack = hint === "back";
    if (!frontTaken && !wantsBack) {
      return { lane, row: "front" };
    }
    if (!backTaken && wantsBack) {
      return { lane, row: "back" };
    }
    if (!frontTaken) {
      return { lane, row: "front" };
    }
    if (!backTaken) {
      return { lane, row: "back" };
    }
  }
  return { lane: priority[0], row: "front" };
}

function spawnWave(combat: CombatState, wave: EncounterWave, hpMultiplier: number): void {
  for (const enemySlot of wave.enemies) {
    const template = getEnemyTemplate(enemySlot.enemyDefinitionId);
    const position = resolvePositionForHint(combat.encounter, enemySlot.initialPosition);
    const slots = buildEncounterSlots(template, hpMultiplier, [position], [
      {
        battleRole: enemySlot.roleOverride,
        focusHint: enemySlot.focusHint
      }
    ]);
    const slot = slots[0];
    if (enemySlot.nameOverride) {
      slot.name = enemySlot.nameOverride;
    }
    if (combat.enemyModifiers?.allowRetreat === false) {
      slot.canEscape = false;
    }
    combat.encounter.enemies.push(slot);
  }
  log(`Wave ${wave.id} drops into battle!`);
}

function processWaveTriggers(
  combat: CombatState,
  trigger: "round_reached" | "enemy_destroyed",
  triggerValue?: string
): void {
  const pending = combat.encounter.pendingWaves ?? [];
  const matches = pending.filter((wave) => {
    if (trigger === "round_reached") {
      return (
        wave.spawnCondition.type === "on_round_reached" &&
        wave.spawnCondition.roundThreshold === combat.round
      );
    }
    if (trigger === "enemy_destroyed") {
      return (
        wave.spawnCondition.type === "on_enemy_destroyed" &&
        wave.spawnCondition.enemyIdTrigger === triggerValue
      );
    }
    return false;
  });
  if (!matches.length) return;
  for (const match of matches) {
    spawnWave(combat, match, computeEncounterHpMultiplier());
    combat.encounter.pendingWaves = (combat.encounter.pendingWaves ?? []).filter(
      (entry) => entry.id !== match.id
    );
  }
}

function getPhaseForRound(round: number): CombatPhase {
  if (round <= phaseThresholds.positioning) return "positioning";
  if (round <= (phaseThresholds.escalation.max ?? 5)) return "escalation";
  return "finisher";
}

function updateCombatPhase(combat: CombatState): void {
  const nextPhase = getPhaseForRound(combat.round);
  if (combat.phase !== nextPhase) {
    combat.phase = nextPhase;
    log(formatPhaseChange(nextPhase));
  }
}

function getInstabilityStage(hpPct: number): "normal" | "minor" | "major" | "critical" {
  if (hpPct <= instabilityConfig.thresholds.critical) return "critical";
  if (hpPct <= instabilityConfig.thresholds.major) return "major";
  if (hpPct <= instabilityConfig.thresholds.minor) return "minor";
  return "normal";
}

function telegraphEnemyIntents(combat: CombatState): void {
  for (const slot of combat.encounter.enemies.filter((enemy) => enemy.alive)) {
    const intent = chooseEnemyIntent(slot, combat);
    slot.nextIntent = intent;
    log(formatIntentReveal(intent, slot.name));
  }
}

const INTENT_TYPES: EnemyIntentType[] = [
  "heavy_attack",
  "shield_boost",
  "flank_shot",
  "debuff",
  "retreat",
  "charge_weapon"
];

const INTENT_DESCRIPTIONS: Record<EnemyIntentType, string> = {
  heavy_attack: "Loads primary batteries for a brutal volley.",
  shield_boost: "Reinforces shields, searching for openings.",
  flank_shot: "Angles for a sidelong strike on weaker arcs.",
  debuff: "Launches a sensor scrambler to scramble your systems.",
  retreat: "Shifts toward cover to buy time.",
  charge_weapon: "Helps build a heavy cannon discharge."
};

function chooseEnemyIntent(enemy: EnemySlot, combat: CombatState): EnemyIntent {
  if (enemy.intentCharged) {
    enemy.intentCharged = false;
    return {
      type: "heavy_attack",
      description: "Previously charged weapons unleash stored brutality.",
      interruptible: true,
      targetId: "player"
    };
  }

  const roleProfile = roleIntentProfiles[enemy.battleRole ?? "anchor"];
  const phaseOverrides = phaseIntentModifiers[combat.phase] ?? {};
  const weights = INTENT_TYPES.map((type) => {
    const base = roleProfile?.[type] ?? 1;
    const phaseMod = phaseOverrides[type] ?? 1;
    let weight = base * phaseMod;
    if (enemy.focusHint === "weapons" && type === "heavy_attack") weight *= 1.1;
    if (enemy.focusHint === "engines" && type === "flank_shot") weight *= 1.2;
    const hpRatio = enemy.maxHp ? enemy.hp / enemy.maxHp : 1;
    if (hpRatio <= instabilityConfig.thresholds.major && type === "retreat") weight *= 2;
    if (hpRatio <= instabilityConfig.thresholds.minor && type === "flank_shot") weight *= 1.2;
    return { type, weight };
  });
  const total = weights.reduce((sum, entry) => sum + entry.weight, 0);
  if (total <= 0) {
    return {
      type: "heavy_attack",
      description: INTENT_DESCRIPTIONS.heavy_attack,
      interruptible: true,
      targetId: "player"
    };
  }
  let roll = Math.random() * total;
  for (const entry of weights) {
    roll -= entry.weight;
    if (roll <= 0) {
      return {
        type: entry.type,
        description: INTENT_DESCRIPTIONS[entry.type],
        interruptible: ["heavy_attack", "flank_shot", "charge_weapon", "debuff"].includes(
          entry.type
        ),
        targetId: "player"
      };
    }
  }
  const fallback = weights[weights.length - 1];
  return {
    type: fallback.type,
    description: INTENT_DESCRIPTIONS[fallback.type],
    interruptible: ["heavy_attack", "flank_shot", "charge_weapon", "debuff"].includes(
      fallback.type
    ),
    targetId: "player"
  };
}

export type PlayerCombatActionType =
  | "fire"
  | "brace"
  | "flee"
  | "fire_all"
  | "combo_finish"
  | PlayerActionId;

function log(line: string) {
  const state = gameState.combat;
  if (!state) return;
  state.log.push(line);
  const MAX_LOG = 10;
  if (state.log.length > MAX_LOG) {
    state.log = state.log.slice(state.log.length - MAX_LOG);
  }
}

type RiskType = "near_miss" | "perfect_dodge" | "light_damage" | "heavy_damage" | "heroic_spike";

const RISK_GAINS: Record<RiskType, { amount: number; source: ComboSource; label: string }> = {
  near_miss: { amount: 5, source: "dodge", label: "near miss" },
  perfect_dodge: { amount: 10, source: "dodge", label: "perfect dodge" },
  light_damage: { amount: 15, source: "risk", label: "light damage" },
  heavy_damage: { amount: 25, source: "risk", label: "heavy damage" },
  heroic_spike: { amount: 40, source: "risk", label: "heroic spike" }
};

const COMBO_FINISH_LABELS: Record<ComboFinishType, string> = {
  risk: "Retribution Burst",
  variation: "Adaptive Strike",
  dodge: "Phantom Strike"
};

function createComboMeterState(): ComboMeterState {
  return {
    charge: 0,
    variationPoints: 0,
    riskPoints: 0,
    dodgePoints: 0,
    recentCategories: []
  };
}

function getComboMeter(): ComboMeterState | null {
  const combat = gameState.combat;
  if (!combat) return null;
  if (!combat.comboMeter) {
    combat.comboMeter = createComboMeterState();
  }
  return combat.comboMeter;
}

function addComboCharge(amount: number, source: ComboSource, label?: string) {
  if (amount <= 0) return;
  const combo = getComboMeter();
  if (!combo) return;
  combo.charge = Math.min(COMBO_MAX, combo.charge + amount);
  if (source === "variation") {
    combo.variationPoints += amount;
  } else if (source === "risk") {
    combo.riskPoints += amount;
  } else {
    combo.dodgePoints += amount;
  }
  log(`Combo +${amount}${label ? ` (${label})` : ""}.`);
  maybeUpdateComboReady(combo);
}

function registerComboAction(category: string) {
  const combo = getComboMeter();
  if (!combo) return;
  combo.recentCategories.unshift(category);
  if (combo.recentCategories.length > COMBO_HISTORY_LENGTH) {
    combo.recentCategories.pop();
  }
  const recent = combo.recentCategories.slice(0, 3);
  const uniqueCount = new Set(recent).size;
  let variationGain = uniqueCount * 5;
  if (uniqueCount >= 3) {
    variationGain += 10;
  }
  addComboCharge(variationGain, "variation", "variation");
}

function determineFinishType(combo: ComboMeterState): ComboFinishType {
  const candidates: Array<[ComboFinishType, number]> = [
    ["variation", combo.variationPoints],
    ["risk", combo.riskPoints],
    ["dodge", combo.dodgePoints]
  ];
  candidates.sort((a, b) => b[1] - a[1]);
  if (candidates[0][1] === 0) return "variation";
  return candidates[0][0];
}

function maybeUpdateComboReady(combo: ComboMeterState) {
  if (combo.ready || combo.charge < COMBO_MAX) return;
  const type = determineFinishType(combo);
  combo.ready = { type, label: COMBO_FINISH_LABELS[type] };
  combo.charge = 0;
  combo.variationPoints = 0;
  combo.riskPoints = 0;
  combo.dodgePoints = 0;
  combo.recentCategories = [];
  log(`Combo meter ready: ${combo.ready.label}!`);
}

function consumeComboFinish(): ComboFinishType | null {
  const combo = getComboMeter();
  if (!combo || !combo.ready) return null;
  const type = combo.ready.type;
  combo.ready = undefined;
  return type;
}

function addComboRisk(type: RiskType) {
  const gain = RISK_GAINS[type];
  if (!gain) return;
  addComboCharge(gain.amount, gain.source, gain.label);
}

function calculateComboFinishDamage(): number {
  const ship = gameState.ship;
  const weaponDamages = ship.weapons
    .map((id) => (id ? getWeaponById(id)?.damage ?? 0 : 0))
    .filter((value) => value > 0);
  const averageWeaponDamage = weaponDamages.length
    ? weaponDamages.reduce((sum, value) => sum + value, 0) / weaponDamages.length
    : 0;
  const basePower = Math.max(ship.weaponPower ?? 10, Math.round(averageWeaponDamage));
  return Math.max(10, Math.round(basePower * 1.25));
}

function createComboFinishWeapon(overrides: Partial<WeaponDef> = {}): WeaponDef {
  return {
    id: overrides.id ?? "combo_finish",
    name:
      overrides.name ??
      (overrides.tags?.includes("armor_piercing") ? "Combo Penetrator" : "Combo Burst"),
    description: overrides.description,
    type: overrides.type ?? "energy",
    size: overrides.size ?? "small",
    damage: overrides.damage ?? 0,
    damageType: overrides.damageType ?? "energy",
    shieldMod: overrides.shieldMod ?? 1,
    armorMod: overrides.armorMod ?? 1,
    accuracy: overrides.accuracy ?? 1,
    critChance: overrides.critChance ?? 0,
    critMultiplier: overrides.critMultiplier ?? 1,
    energyCost: overrides.energyCost ?? 0,
    cooldown: overrides.cooldown ?? 0,
    price: overrides.price ?? 0,
    tags: overrides.tags ?? [],
    targetingMode: overrides.targetingMode,
    canBypassCover: overrides.canBypassCover,
    splashRadius: overrides.splashRadius,
    linePierce: overrides.linePierce
  };
}

function getAliveEnemies(combat: CombatState): EnemySlot[] {
  return combat.encounter.enemies.filter((slot) => slot.alive);
}

function findBacklineTarget(combat: CombatState, excludeId?: string): EnemySlot | undefined {
  return combat.encounter.enemies.find(
    (slot) => slot.alive && slot.position.row === "back" && slot.id !== excludeId
  );
}

function executeVariationFinish(combat: CombatState, baseDamage: number): boolean {
  const weapon = createComboFinishWeapon({
    tags: ["shield_breaker"],
    armorMod: 1.1,
    shieldMod: 1.05
  });
  const targets = getAliveEnemies(combat);
  if (!targets.length) return false;
  let totalHits = 0;
  for (const target of targets) {
    const multiplier = target.position.row === "front" ? 1.4 : 1.05;
    const hitDamage = Math.max(12, Math.round(baseDamage * multiplier + 6));
    const hit = applyDamageToEnemySlot(hitDamage, "energy", weapon, target);
    if (hit > 0) {
      recordCombatDamageDealt(hit);
      log(`Adaptive Strike smashes ${target.name} for ${hit} damage.`);
      totalHits += hit;
      if (target.hp <= 0) {
        removeEnemySlotFromEncounter(combat, target.id);
      }
    }
  }
  return totalHits > 0;
}

function executeRiskFinish(combat: CombatState, baseDamage: number): boolean {
  const target =
    findBacklineTarget(combat) ??
    ensureSelectedEnemy(combat) ??
    getAliveEnemies(combat)[0];
  if (!target) return false;
  const weapon = createComboFinishWeapon({
    tags: ["shield_breaker", "armor_piercing"],
    armorMod: 1.35,
    shieldMod: 1.1
  });
  const penetration = Math.max(3, Math.round(baseDamage * 0.5));
  const shieldDamage = Math.max(5, baseDamage - penetration);
  let totalDamage = 0;
  if (shieldDamage > 0) {
    const shieldHit = applyDamageToEnemySlot(shieldDamage, "energy", weapon, target);
    if (shieldHit > 0) {
      recordCombatDamageDealt(shieldHit);
      totalDamage += shieldHit;
    }
  }
  if (penetration > 0 && target.alive) {
    const beforeHp = target.hp;
    target.hp = Math.max(0, target.hp - penetration);
    const hullHit = beforeHp - target.hp;
    if (hullHit > 0) {
      recordCombatDamageDealt(hullHit);
      totalDamage += hullHit;
    }
    target.alive = target.hp > 0;
  }
  if (target.hp <= 0) {
    removeEnemySlotFromEncounter(combat, target.id);
  }
  if (totalDamage <= 0) return false;
  const ship = gameState.ship;
  const recovery = Math.max(1, Math.round(totalDamage * (0.02 + Math.random() * 0.03)));
  ship.hp = Math.min(ship.maxHp, ship.hp + recovery);
  log(`Retribution Burst shreds ${target.name} for ${totalDamage} and restores ${recovery} hull.`);
  return true;
}

function executeDodgeFinish(combat: CombatState, baseDamage: number): boolean {
  const target =
    findBacklineTarget(combat) ??
    ensureSelectedEnemy(combat) ??
    getAliveEnemies(combat)[0];
  if (!target) return false;
  const weapon = createComboFinishWeapon({
    tags: ["shield_breaker"],
    armorMod: 1.2
  });
  const damage = Math.max(8, Math.round(baseDamage * 0.9));
  const hit = applyDamageToEnemySlot(damage, "energy", weapon, target);
  if (hit > 0) {
    recordCombatDamageDealt(hit);
    log(`Phantom Strike ghosts ${target.name} for ${hit} damage.`);
    if (target.hp <= 0) {
      removeEnemySlotFromEncounter(combat, target.id);
    }
  }
  combat.playerStatus.maneuverBonus = Math.max(combat.playerStatus.maneuverBonus || 0, 20);
  combat.playerStatus.maneuverTurns = Math.max(combat.playerStatus.maneuverTurns, 1);
  return hit > 0;
}

export function activateComboFinisher(): boolean {
  const combo = getComboMeter();
  if (!combo || !combo.ready) return false;
  const combat = gameState.combat;
  if (!combat) return false;
  const baseDamage = calculateComboFinishDamage();
  const finishType = combo.ready.type;
  let executed = false;
  if (finishType === "variation") {
    executed = executeVariationFinish(combat, baseDamage);
  } else if (finishType === "risk") {
    executed = executeRiskFinish(combat, baseDamage);
  } else if (finishType === "dodge") {
    executed = executeDodgeFinish(combat, baseDamage);
  }
  if (!executed) return false;
  consumeComboFinish();
  const comboXp = 10 + (finishType === "risk" ? 5 : finishType === "dodge" ? 3 : 0);
  awardXp(comboXp, "combat");
  return true;
}

function estimateEnemyPower(enemy: { hull: number; shields: number; weaponIds: string[] }): number {
  const hp = enemy.hull + enemy.shields;
  const weaponFactor = enemy.weaponIds.length * 15;
  return hp + weaponFactor;
}

type CombatReturn = {
  returnScreen?: ScreenID;
  returnParams?: Record<string, unknown>;
};

function resolveReturn(screen?: ScreenID): ScreenID {
  return screen ?? "main";
}

function navReturn(screen?: ScreenID, params?: Record<string, unknown>) {
  navigation.go(resolveReturn(screen), params);
}

export function startCombat(encounterReference: string, opts: CombatReturn = {}) {
  const template = getEncounterById(encounterReference);
  if (template) {
    startCombatFromTemplate(template, opts);
  } else {
    startCombatLegacy(encounterReference, opts);
  }
}

function startCombatLegacy(enemyId: string, opts: CombatReturn = {}) {
  const tpl = getEnemyTemplate(enemyId);
  const shipWeapons = gameState.ship.weapons;
  const playerCooldowns = shipWeapons.map(() => 0);
  const tune = getCombatTune();
  const difficultyScale = getEnemyScale(gameState);
  const hpMultiplier = Math.max(1, (tune.enemyHpMultiplier ?? 1) * difficultyScale);
  const progress = getCombatProgress();
  const enemyCount = getEnemyCountFromProgress(progress);
  const enemyCountFactor = Math.max(1, enemyCount);
  const positions = generateEnemyPositions(enemyCountFactor);
  const encounterSlots = buildEncounterSlots(tpl, hpMultiplier, positions);
  const encounterName = buildEncounterName(tpl, encounterSlots.length);

  gameState.combat = {
    encounter: {
      id: tpl.id,
      name: encounterName,
      enemies: encounterSlots,
      tags: tpl.tags ? [...new Set(tpl.tags)] : []
    },
    selectedEnemyId: encounterSlots[0]?.id ?? null,
    playerCooldowns,
    playerBracing: false,
    playerStance: "balanced",
    playerStatus: {
      maneuverBonus: 0,
      maneuverTurns: 0,
      shieldBoost: 0,
      shieldTurns: 0
    },
    enemyStatus: {
      weaponJammedTurns: 0
    },
    canEscape: tpl.canEscape,
    totalRounds: 1,
    startingHp: gameState.ship.hp,
    round: 1,
    log: [`${encounterName} engages you in combat!`],
    adviceToken: Math.random(),
    moduleAbilityCooldowns: {},
    returnTo: opts.returnScreen,
    returnParams: opts.returnParams,
    phase: "positioning",
    playerActionCooldowns: []
  };

  awardShipXp(8);

  if (enemyCountFactor > 1) {
    gameState.combat.log.push(`Multiple bogies detected (${enemyCountFactor} ships).`);
  }

  navigation.go("combat");
}

function startCombatFromTemplate(template: EncounterTemplate, opts: CombatReturn = {}) {
  const playerCooldowns = gameState.ship.weapons.map(() => 0);
  const hpMultiplier = computeEncounterHpMultiplier();
  const encounter: EncounterState = {
    id: template.id,
    templateId: template.id,
    name: template.name,
    enemies: [],
    tags: template.tags ?? [],
    objectives: template.objectives,
    waves: template.waves,
    pendingWaves: template.waves.filter((wave) => wave.spawnCondition.type !== "on_start")
  };
  const shieldMultiplier = template.playerModifiers?.startingShieldMultiplier ?? 1;
  const hullMultiplier = template.playerModifiers?.startingHullMultiplier ?? 1;
  const combatState: CombatState = {
    encounter,
    selectedEnemyId: null,
    playerCooldowns,
    playerBracing: false,
    playerStance: "balanced",
    playerStatus: {
      maneuverBonus: 0,
      maneuverTurns: 0,
      shieldBoost: Math.max(0, Math.round(gameState.ship.maxShields * (shieldMultiplier - 1))),
      shieldTurns:
        shieldMultiplier > 1 ? Math.max(1, Math.round(shieldMultiplier)) : 0,
      hullBuffer: Math.max(0, Math.round(gameState.ship.maxHp * (hullMultiplier - 1)))
    },
    enemyStatus: {
      weaponJammedTurns: 0
    },
    canEscape: !template.playerModifiers?.disableRetreat,
    totalRounds: 1,
    startingHp: gameState.ship.hp,
    round: 1,
    log: [template.description ?? `${template.name} engages you.`],
    adviceToken: Math.random(),
    moduleAbilityCooldowns: {},
    returnTo: opts.returnScreen,
    returnParams: opts.returnParams,
    phase: template.startingPhase ?? "positioning",
    playerActionCooldowns: [],
    enemyModifiers: template.enemyModifiers
  };

  gameState.combat = combatState;
  const startWaves = template.waves.filter((wave) => wave.spawnCondition.type === "on_start");
  for (const wave of startWaves) {
    spawnWave(combatState, wave, hpMultiplier);
  }
  ensureSelectedEnemy(combatState);
  awardShipXp(8);
  navigation.go("combat");
}

export function startScaledCombat(systemId?: string) {
  const enemyId = chooseEnemyId(systemId);
  startCombat(enemyId);
}

function chooseEnemyId(systemId?: string): string {
  if (!content?.enemies?.length) return "pirate_cutter";
  const playerPower = computePlayerPower(gameState);
  const dayPressure = computeDayPressure(gameState.time.day);
  const tune = getCombatTune();
  const perDayFactor = 1 + Math.max(0, tune.difficultyScalePerDay ?? 0) / 100 * Math.max(0, gameState.time.day - 1);
  const shipScale = Math.max(0, tune.difficultyScalePerShipPower ?? 1);
  const effectivePower = playerPower * shipScale * perDayFactor;

  let minEnemyPower = effectivePower * (0.6 + 0.2 * dayPressure);
  let maxEnemyPower = effectivePower * (0.9 + 0.4 * dayPressure);

  if (systemId && systemHasTag(systemId, "core")) {
    minEnemyPower = playerPower * 0.4;
    maxEnemyPower = playerPower * 0.8;
  }

  const candidates = content.enemies.map((enemy) => ({
    id: enemy.id,
    power: estimateEnemyPower(enemy)
  }));

  const withinRange = candidates.filter(
    (c) => c.power >= minEnemyPower && c.power <= maxEnemyPower
  );
  if (withinRange.length) {
    return withinRange[Math.floor(Math.random() * withinRange.length)].id;
  }

  // Fallback to the closest power match.
  let best = candidates[0];
  let bestDelta = Math.abs(candidates[0].power - playerPower);
  for (const c of candidates) {
    const delta = Math.abs(c.power - playerPower);
    if (delta < bestDelta) {
      best = c;
      bestDelta = delta;
    }
  }
  return best.id;
}

  export function playerCombatAction(
    action: PlayerCombatActionType,
    weaponIndex?: number,
    aimMode: AimMode = "normal"
  ) {
    const combat = gameState.combat;
    if (!combat) return;

    combat.playerBracing = false;

    switch (action) {
      case "fire":
        if (weaponIndex === undefined) {
          log("You must choose a weapon to fire.");
          return;
        }
        playerFireWeapon(weaponIndex, aimMode);
        break;
      case "fire_all":
        fireAllReadyWeapons(aimMode);
        break;
      case "combo_finish":
        if (!activateComboFinisher()) {
          log("Combo finisher is not ready.");
          return;
        }
        break;
      case "brace":
        playerBrace();
        break;
      case "flee":
        if (attemptFlee()) {
          return;
        }
        break;
      default: {
        const specialAction = getPlayerActionDefinition(action as PlayerActionId);
        if (!specialAction) {
          log("Unknown combat action.");
          return;
        }
        const target = ensureSelectedEnemy(combat);
        const success = specialAction.effect(combat, target);
        if (!success) return;
        applyPlayerActionCooldown(combat, specialAction.id, specialAction.cooldown);
        attemptCounterplay(combat, target, specialAction.id);
        break;
      }
    }

    finalizePlayerAction();
  }

  function finalizePlayerAction() {
    const combat = gameState.combat;
    if (!combat) return;

    if (combat.encounter.enemies.length === 0) {
      handleVictory();
      return;
    }

    telegraphEnemyIntents(combat);
    enemyTurn();

    if (!gameState.combat) return;
    if (gameState.ship.hp <= 0) {
      handleDefeat();
      return;
    }

    handleFormationMovement(combat);

    tickCooldowns();
    combat.adviceToken = Math.random();
    combat.round += 1;
    combat.totalRounds += 1;
    processWaveTriggers(combat, "round_reached");
    updateCombatPhase(combat);
  }

  export function getActiveModuleAbilities(): ActiveModuleAbility[] {
    const combat = gameState.combat;
    if (!combat) return [];
    if (!content) return [];
    return gameState.ship.components
      .map((componentId) => {
        const component = getComponentById(componentId);
        if (!component?.ability) return null;
        const cooldown = combat.moduleAbilityCooldowns?.[componentId] ?? 0;
        return {
          componentId,
          componentName: component.name,
          ability: component.ability,
          cooldown,
          ready: cooldown <= 0
        };
      })
      .filter((entry): entry is ActiveModuleAbility => Boolean(entry));
  }

export function activateModuleAbility(componentId: string) {
    registerComboAction("utility");
    const combat = gameState.combat;
    if (!combat) return;
    const component = getComponentById(componentId);
    if (!component || !component.ability) {
      log("Module ability offline.");
      return;
    }
    const ability = component.ability;
    combat.moduleAbilityCooldowns = combat.moduleAbilityCooldowns ?? {};
    const cooldownRemaining = Math.max(0, combat.moduleAbilityCooldowns[componentId] ?? 0);
    if (cooldownRemaining > 0) {
      log(`${component.name} is recalibrating (${cooldownRemaining} turn${cooldownRemaining === 1 ? "" : "s"}).`);
      return;
    }
    const target = ensureSelectedEnemy(combat);
    if (!target) {
      log("No enemy target available.");
      return;
    }
    const applied = resolveModuleAbilityEffect(combat, component, ability, target);
    if (!applied) {
      return;
    }
    combat.moduleAbilityCooldowns[componentId] = Math.max(ability.cooldown ?? 3, 1);
    finalizePlayerAction();
  }

  function resolveModuleAbilityEffect(
    combat: CombatState,
    component: ComponentDef,
    ability: ComponentAbilityDef,
    target: EnemySlot
  ): boolean {
    const board: BoardState = combat;
    const lane = target.position.lane;
    switch (ability.type) {
      case "pull": {
        if (target.position.row !== "back") {
          log("Pull modules need a back-line target.");
          return false;
        }
        const front = getShipAt(board, lane, "front", "enemy");
        if (front && front.id !== target.id) {
          front.position.row = "back";
          log(`${front.name} is forced back to make room.`);
        }
        target.position.row = "front";
        log(`${component.name} hauls ${target.name} into lane ${lane + 1}'s front line.`);
        break;
      }
      case "push": {
        if (target.position.row !== "front") {
          log("Push modules need a front-line target.");
          return false;
        }
        const back = getShipAt(board, lane, "back", "enemy");
        if (back && back.id !== target.id) {
          back.position.row = "front";
        }
        target.position.row = "back";
        log(`${component.name} shoves ${target.name} back into cover.`);
        break;
      }
      default:
        return false;
    }

    if (ability.statusEffect) {
      const duration = ability.effectDuration ?? 1;
      const applied = addStatusEffect(target, ability.statusEffect as StatusEffectType, duration);
      if (applied) {
        if (ability.statusEffect === "jammed") {
          log(`${target.name}'s systems are jammed for ${duration} turn${duration === 1 ? "" : "s"}.`);
        } else {
          log(`${target.name} cannot react for ${duration} turn${duration === 1 ? "" : "s"}.`);
        }
      }
    }

    return true;
  }

interface FireWeaponOptions {
  isVolley?: boolean;
  soloFire?: boolean;
  volleyCount?: number;
}

function playerFireWeapon(slotIndex: number, aimMode: AimMode, options: FireWeaponOptions = {}) {
  registerComboAction("weapon_attack");
  const combat = gameState.combat;
  if (!combat) return;
  const ship = gameState.ship;
  if (slotIndex < 0 || slotIndex >= ship.weapons.length) {
      log("Invalid weapon slot.");
      return;
    }
  const weaponId = ship.weapons[slotIndex];
  if (!weaponId) {
    log("That hardpoint is empty.");
    return;
  }

  const weapon = getWeaponById(weaponId);
  if (!weapon) {
    log("Missing weapon data.");
    return;
  }
  const otherReadyWeapons = ship.weapons.filter(
    (id, idx) => idx !== slotIndex && Boolean(id) && (combat.playerCooldowns[idx] ?? 0) <= 0
  );
  const soloFire = otherReadyWeapons.length === 0;
  const passive = getPassiveEffects();
  const firstRound = combat.round <= 1;
  const effectiveWeapon = {
    ...weapon,
    critChance: Math.min(
      0.95,
      (weapon.critChance ?? 0) +
        (passive.critBonus ?? 0) +
        (firstRound ? passive.critBonus ?? 0 : 0)
    )
  };

  const cooldown = combat.playerCooldowns[slotIndex] ?? 0;
  if (cooldown > 0) {
    log(`${weapon.name} is still recharging (${cooldown} turn${cooldown === 1 ? "" : "s"}).`);
    return;
  }

  const aimDamageMod = aimMode === "called_shot" ? CALLED_SHOT_MODS.damageMultiplier : 1;
  const aimAccuracyMod = aimMode === "called_shot" ? CALLED_SHOT_MODS.accuracyMultiplier : 1;
  let damage = computeWeaponDamage(effectiveWeapon, {
    accuracyMultiplier: aimAccuracyMod,
    damageMultiplier: aimDamageMod * (passive.playerDamageBonus ?? 1)
  });

  const playerHpPct = Math.max(0, Math.min(1, (gameState.ship.hp || 0) / Math.max(1, gameState.ship.maxHp)));
  const instabilityStage = getInstabilityStage(playerHpPct);
  if (
    instabilityStage === "major" &&
    Math.random() < (instabilityConfig.misfireChanceAtMajor ?? 0)
  ) {
    log(formatInstabilityLog(gameState.ship.name, "major", "Systems misfire as hull stress spikes."));
    combat.playerCooldowns[slotIndex] = weapon.cooldown;
    return;
  }
  if (instabilityStage === "critical" && Math.random() < instabilityConfig.engineFlickerChanceAtCritical) {
    log(formatInstabilityLog(gameState.ship.name, "critical", "Engines stutter and heat swells."));
    damage = Math.max(1, Math.round(damage * instabilityConfig.criticalDamagePenalty));
  }

  if (damage <= 0) {
    const missLabel = aimMode === "called_shot" ? "called shot goes wide" : "misses";
    log(`You fire ${weapon.name}, but it ${missLabel}.`);
    combat.playerCooldowns[slotIndex] = weapon.cooldown;
    return;
  }

  const targetSlot = ensureSelectedEnemy(combat);
  if (!targetSlot) {
    log("No enemy target available.");
    combat.playerCooldowns[slotIndex] = weapon.cooldown;
    return;
  }

  const board: BoardState = combat;
  if (!canTargetSlot(board, weapon, targetSlot)) {
    const front = getShipAt(board, targetSlot.position.lane, "front", "enemy");
    log(
      front && front.alive
        ? `${weapon.name} cannot hit ${targetSlot.name} because ${front.name} is covering the lane.`
        : `${weapon.name} cannot reach ${targetSlot.name}.`
    );
    combat.playerCooldowns[slotIndex] = weapon.cooldown;
    return;
  }
  const preHitLayer = targetSlot.shields > 0 ? "shields" : "hull";
  let adjustedDamage = damage;
  if (soloFire) {
    adjustedDamage = Math.max(1, Math.round(damage * SOLO_FIRE_BONUS));
    log(`Solo fire bonus: ${weapon.name} punches harder this turn.`);
  }
  const shieldBonus =
    !options.isVolley && targetSlot.shields > 0 ? PRECISION_SHIELD_BONUS : 1;
  adjustedDamage = Math.round(adjustedDamage * shieldBonus);
  const damageDone = applyDamageToEnemySlot(
    adjustedDamage,
    weapon.damageType as DamageType,
    weapon,
    targetSlot
  );

  if (damageDone > 0) {
    recordCombatDamageDealt(damageDone);
    maybeApplyStatus(weapon.damageType as DamageType, damageDone, targetSlot);
  }

  const aimLabel = aimMode === "called_shot" ? "called shot" : "normal shot";
  log(`You strike ${targetSlot.name}'s ${preHitLayer} with ${weapon.name} (${aimLabel}) for ${damageDone} damage.`);

  if (damageDone > 0 && weapon.tags?.includes("disruptor")) {
    combat.enemyStatus.weaponJammedTurns = Math.min(
      2,
      combat.enemyStatus.weaponJammedTurns + 1
    );
    log(`${targetSlot.name}'s weapons are disrupted!`);
  }

  combat.playerCooldowns[slotIndex] = weapon.cooldown;

  if (targetSlot.hp <= 0) {
    log(`${targetSlot.name} is destroyed!`);
    removeEnemySlotFromEncounter(combat, targetSlot.id);
  }
}

function getReadyWeaponsOrdered(combat: CombatState): { idx: number; weapon: WeaponDef }[] {
  if (!content) return [];
  const ship = gameState.ship;
  const orderRank: Record<WeaponDamageType, number> = {
    disruptive: 0,
    energy: 1,
    kinetic: 2,
    explosive: 3
  };
  const ready: { idx: number; weapon: WeaponDef }[] = [];
  for (let idx = 0; idx < ship.weapons.length; idx += 1) {
    const weaponId = ship.weapons[idx];
    if (!weaponId) continue;
    const weapon = getWeaponById(weaponId);
    if (!weapon) continue;
    const cooldown = combat.playerCooldowns[idx] ?? 0;
    if (cooldown > 0) continue;
    ready.push({ idx, weapon });
  }
  return ready.sort((a, b) => {
    const orderA = orderRank[a.weapon.damageType as WeaponDamageType] ?? 4;
    const orderB = orderRank[b.weapon.damageType as WeaponDamageType] ?? 4;
    if (orderA !== orderB) return orderA - orderB;
    return a.idx - b.idx;
  });
}

function fireAllReadyWeapons(aimMode: AimMode) {
  const combat = gameState.combat;
  if (!combat) return;
  const readyWeapons = getReadyWeaponsOrdered(combat);
  if (!readyWeapons.length) {
    log("No weapons are ready to fire.");
    return;
  }
  for (const { idx } of readyWeapons) {
    if (!gameState.combat || gameState.combat.encounter.enemies.length === 0) break;
    playerFireWeapon(idx, aimMode, {
      isVolley: true,
      volleyCount: readyWeapons.length
    });
  }
}

function fireReadyWeaponsWithTarget(
  combat: CombatState,
  aimMode: AimMode,
  targetSlot?: EnemySlot
): boolean {
  const readyWeapons = getReadyWeaponsOrdered(combat);
  if (!readyWeapons.length) {
    log("No weapons are ready to fire.");
    return false;
  }
  let resolvedTarget = targetSlot ?? ensureSelectedEnemy(combat);
  if (!resolvedTarget) {
    log("No enemy target available.");
    return false;
  }
  const previousTarget = combat.selectedEnemyId;
  combat.selectedEnemyId = resolvedTarget.id;
  for (const { idx } of readyWeapons) {
    if (!gameState.combat || gameState.combat.encounter.enemies.length === 0) break;
    if (!ensureSelectedEnemy(combat)) {
      break;
    }
    playerFireWeapon(idx, aimMode, {
      isVolley: true,
      volleyCount: readyWeapons.length
    });
  }
  combat.selectedEnemyId = previousTarget;
  return true;
}

function pickShieldFocusedTarget(combat: CombatState): EnemySlot | undefined {
  const shielded = combat.encounter.enemies
    .filter((slot) => slot.alive && slot.shields > 0)
    .sort((a, b) => b.shields - a.shields);
  if (shielded.length) return shielded[0];
  return ensureSelectedEnemy(combat);
}

function pickHullFocusedTarget(combat: CombatState): EnemySlot | undefined {
  const alive = combat.encounter.enemies.filter((slot) => slot.alive);
  if (!alive.length) return undefined;
  let best = alive[0];
  let bestRatio = best.hp / Math.max(1, best.maxHp);
  for (const slot of alive.slice(1)) {
    const ratio = slot.hp / Math.max(1, slot.maxHp);
    if (ratio < bestRatio) {
      best = slot;
      bestRatio = ratio;
    }
  }
  return best;
}

function playerBrace() {
  registerComboAction("defense");
  const combat = gameState.combat;
  if (!combat) return;
  combat.playerBracing = true;
  log("You brace for impact, diverting power to shields and hull integrity.");
}

function attemptFlee(): boolean {
  registerComboAction("movement");
  const combat = gameState.combat;
  if (!combat) return false;
  if (!combat.canEscape) {
    log("The enemy objectives lock you in place. Flee attempt denied.");
    return false;
  }
  const baseChance = 0.4;
    let stanceBonus = 0;
    if (combat.playerStance === "evasive") stanceBonus = 0.15;
    if (combat.playerStance === "brace") stanceBonus = -0.05;
    if (combat.playerStance === "overcharge") stanceBonus = -0.1;
  const playerManeuver =
    (gameState.ship.maneuverRating || 0) + (combat.playerStatus.maneuverBonus || 0);
  const enemyManeuver = 40;
  const maneuverBonus = clamp((playerManeuver - enemyManeuver) * 0.01, -0.15, 0.15);

  const tune = getCombatTune();
  const passive = getPassiveEffects();
  const fleeBonus = (tune.fleeSuccessBonus ?? 0) / 100 + (passive.fleeBonus ?? 0);
  const chance = clamp(baseChance + stanceBonus + maneuverBonus + fleeBonus, 0.05, 0.95);

    if (Math.random() <= chance) {
      log(
        `You punch the thrusters and break free! (Flee chance ${(chance * 100).toFixed(0)}%)`
      );
      adjustTension(gameState, -5);
      gameState.combat = null;
      abortMiningSession(
        gameState,
        "Fled combat; mining mission aborted and ore left behind."
      );
      window.alert("Fleeing a mining pirate encounter aborts the claim and leaves the ore behind.");
      navigation.go("main", { message: "Mining mission aborted by fleeing combat." });
      return true;
    } else {
    log(
      `You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(chance * 100).toFixed(0)}%)`
    );
    return false;
  }
}

function shouldWarnHeavyAttack(damage: number): boolean {
  const maxShipHp = gameState.ship.maxHp || 100;
  return damage >= Math.max(1, Math.round(maxShipHp * 0.25));
}

function enemyTurn() {
  const combat = gameState.combat;
  if (!combat) return;
  const prevHp = gameState.ship.hp;
  const prevShields = gameState.ship.shields;
  const maxShipHp = gameState.ship.maxHp || 100;
    if (combat.enemyStatus.weaponJammedTurns > 0) {
    combat.enemyStatus.weaponJammedTurns -= 1;
    log("Enemy weapons are jammed this round!");
    return;
  }
  const board: BoardState = combat;
    const readySlots = combat.encounter.enemies.filter(
      (slot) =>
        slot.alive &&
        !hasStatusEffect(slot, "immobilized") &&
        slot.weaponIds.some((id, idx) => id && (slot.weaponCooldowns[idx] ?? 0) <= 0)
    );
  if (!readySlots.length) {
    log(`The ${combat.encounter.name} reloads while you advance.`);
    return;
  }
  const slot = readySlots[randBetween(0, readySlots.length - 1)];
  const intent = slot.nextIntent ?? chooseEnemyIntent(slot, combat);
  slot.nextIntent = intent;
  slot.intentDamageMultiplier = 1;
  if (intent.type === "shield_boost") {
    slot.shields = Math.min(slot.maxShields, slot.shields + 12);
    log(`${slot.name} shunts power into shields instead of firing.`);
    slot.nextIntent = undefined;
    return;
  }
  if (intent.type === "debuff") {
    combat.enemyStatus.weaponJammedTurns = Math.min(3, combat.enemyStatus.weaponJammedTurns + 1);
    log(`${slot.name} unleashes a scrambler to disrupt your weapons.`);
    slot.nextIntent = undefined;
    return;
  }
  if (intent.type === "retreat") {
    log(`${slot.name} slips toward cover instead of committing.`);
    slot.nextIntent = undefined;
    return;
  }
  if (intent.type === "charge_weapon") {
    slot.intentCharged = true;
    log(`${slot.name} is channeling a heavier salvo.`);
    slot.nextIntent = undefined;
    return;
  }
  if (intent.type === "heavy_attack") {
    slot.intentDamageMultiplier *= 1.3;
  }
  if (intent.type === "flank_shot") {
    slot.intentDamageMultiplier *= 1.15;
  }
  const readyWeapons = slot.weaponIds
    .map((id, idx) => ({ id, idx }))
    .filter(({ id, idx }) => Boolean(id) && (slot.weaponCooldowns[idx] ?? 0) <= 0);
  if (!readyWeapons.length) {
    log(`The ${slot.name} catches its breath while reloading.`);
    return;
  }
  const choice = readyWeapons[randBetween(0, readyWeapons.length - 1)];
  const weapon = getWeaponById(choice.id);
  if (!weapon) {
    log(`The ${slot.name} fumbles its weapon.`);
    return;
  }
  const playerSlot = buildPlayerSlot();
  const targetSlot = chooseTarget(slot, weapon, board, [playerSlot]);
  if (!targetSlot) {
    log(`${slot.name} finds no valid targets.`);
    return;
  }
  const isJammed = hasStatusEffect(slot, "jammed");
  if (isJammed) {
    log(`${slot.name} is still recovering from jammed systems.`);
  }
  const accPenalty = Math.min(0.3, Math.max(0, combat.playerStatus.maneuverBonus || 0) * 0.01);
  const tune = getCombatTune();
  const passive = getPassiveEffects();
  const firstRound = combat.round <= 1;
  const baseAccuracy = Math.max(
    0,
    (1 - accPenalty) *
      (tune.enemyAccuracyMultiplier ?? 1) *
      Math.max(0, 1 - (passive.dodgeBonus ?? 0)) *
      (firstRound ? Math.max(0, 1 - (passive.dodgeBonus ?? 0)) : 1)
  );
  const stanceFactor = getStanceAccuracyFactor(combat.playerStance);
  const precisionBonus =
    (isPerkUnlocked("precision_t1_targeting_assist") ? 0.05 : 0) +
    ((isPerkUnlocked("precision_t2_headshot_focus") || isPerkUnlocked("precision_t3_backline_breach")) &&
    targetSlot.position.row === "back"
      ? 0.05
      : 0);
  const backlineBreachFactor =
    isPerkUnlocked("precision_t3_backline_breach") && targetSlot.position.row === "back" ? 1.08 : 1;
  const globalAccuracyMod = combat.enemyModifiers?.globalAccuracyMultiplier ?? 1;
  let adjustedAccuracy = Math.max(
    0,
    baseAccuracy * stanceFactor * (isJammed ? JAMMED_ACCURACY_PENALTY : 1) * (1 + precisionBonus) * backlineBreachFactor
  ) * globalAccuracyMod;
  const enemyHpPct = Math.max(0, Math.min(1, slot.hp / Math.max(1, slot.maxHp)));
  const enemyStage = getInstabilityStage(enemyHpPct);
  if (
    enemyStage === "major" &&
    Math.random() < (instabilityConfig.misfireChanceAtMajor ?? 0)
  ) {
    log(formatInstabilityLog(slot.name, "major", "Weapon banks sputter beneath the stress."));
    slot.nextIntent = undefined;
    return;
  }
  if (
    enemyStage === "critical" &&
    Math.random() < (instabilityConfig.engineFlickerChanceAtCritical ?? 0)
  ) {
    log(formatInstabilityLog(slot.name, "critical", "Engines choke, slowing their lock."));
    adjustedAccuracy *= instabilityConfig.criticalDamagePenalty;
  }
  let damage = computeWeaponDamage(weapon, { accuracyMultiplier: adjustedAccuracy });
  const difficultyScale = getEnemyScale(gameState);
  const globalDamageMod = combat.enemyModifiers?.globalDamageMultiplier ?? 1;
  const predictedDamage = Math.max(
    0,
    Math.round(damage * (tune.enemyDamageMultiplier ?? 1) * difficultyScale * globalDamageMod)
  );
  const lowHull = (gameState.ship.hp / (gameState.ship.maxHp || 1)) <= 0.3;
  const damageAfterLastStand =
    isPerkUnlocked("survival_t3_last_stand_matrix") && lowHull
      ? Math.round(predictedDamage * 0.85)
      : predictedDamage;
  const intentMod = slot.intentDamageMultiplier ?? 1;
  const damageWithIntent = Math.max(0, Math.round(damageAfterLastStand * intentMod));
  const isHeavy = shouldWarnHeavyAttack(damageWithIntent);
  if (isHeavy) {
    log("Sensors pick up a heavy attack; brace now to soften the blow!");
  }
  damage = damageWithIntent;
  if (combat.playerBracing) {
    damage = Math.round(damage * BRACE_DAMAGE_REDUCTION);
  }
  damage = applyStanceDamageMultiplier(damage, weapon.damageType as DamageType, combat.playerStance);
  damage = Math.max(
    0,
    Math.round(
      damage *
        (tune.playerDamageTakenMultiplier ?? 1) *
        Math.max(0.1, passive.damageTakenMultiplier ?? 1) *
        (firstRound ? Math.max(0.1, passive.damageTakenMultiplier ?? 1) : 1)
    )
  );
  damage = Math.round(damage * ENEMY_DAMAGE_SCALE);
  let remaining = damage;
  if (combat.playerStatus.hullBuffer && combat.playerStatus.hullBuffer > 0 && remaining > 0) {
    const bufferUse = Math.min(combat.playerStatus.hullBuffer, remaining);
    combat.playerStatus.hullBuffer -= bufferUse;
    remaining -= bufferUse;
    if (bufferUse > 0) {
      log(`Hull buffer absorbs ${bufferUse} damage before the hull takes a hit.`);
    }
  }
  if (combat.playerStatus.shieldBoost > 0) {
    const absorbed = Math.min(combat.playerStatus.shieldBoost, remaining);
    combat.playerStatus.shieldBoost -= absorbed;
    remaining -= absorbed;
  }
  if (gameState.ship.shields > 0 && remaining > 0) {
    const absorbed = Math.min(gameState.ship.shields, remaining);
    gameState.ship.shields -= absorbed;
    remaining -= absorbed;
  }
  if (remaining > 0) {
    gameState.ship.hp = Math.max(0, gameState.ship.hp - remaining);
  }
  const hullDamage = Math.max(0, remaining);
  const postHp = gameState.ship.hp;
  const shieldLost = Math.max(0, prevShields - gameState.ship.shields);
  if (hullDamage > 0) {
    if (prevHp <= hullDamage && postHp === 1) {
      addComboRisk("heroic_spike");
    } else if (hullDamage >= maxShipHp * 0.25) {
      addComboRisk("heavy_damage");
    } else {
      addComboRisk("light_damage");
    }
  } else if (shieldLost <= 0) {
    addComboRisk("perfect_dodge");
    awardXp(5, "combat");
  } else {
    addComboRisk("near_miss");
    awardXp(3, "combat");
  }
  log(`The ${slot.name} hits you with ${weapon.name} for ${damage} damage.`);
  recordCombatDamageTaken(damage);
  adjustTension(gameState, -Math.min(6, Math.floor(damage / 10)));
  slot.weaponCooldowns[choice.idx] = weapon.cooldown + (isJammed ? 1 : 0);
  applyAreaEffects(board, weapon, targetSlot, damage);
  slot.nextIntent = undefined;
  slot.intentDamageMultiplier = 1;
}
export type CombatAdviceSuggestion = StanceId;

export interface CombatAdvice {
  text: string;
  suggestion: CombatAdviceSuggestion;
  confidence: number;
}

export function getCombatAdvice(): CombatAdvice | null {
  const combat = gameState.combat;
  if (!combat) return null;

  const slots = combat.encounter.enemies;
  if (!slots.length) return null;
  const cooldownValues = slots.flatMap((slot) =>
    slot.weaponCooldowns.map((cd) => (cd ?? Number.MAX_SAFE_INTEGER))
  );
  const soonestCd = Math.min(...(cooldownValues.length ? cooldownValues : [Number.MAX_SAFE_INTEGER]));

  const candidates: CombatAdvice[] = [];

  if (soonestCd <= 1) {
    const confidence = clamp(0.6 + (1 - soonestCd) * 0.2, 0.65, 0.95);
    candidates.push({
      text: `Enemy shifts into a heavy attack stance; the next shot lands in ${soonestCd} turn${soonestCd === 1 ? "" : "s"} - brace to soften the incoming blow.`,
      suggestion: "brace",
      confidence
    });
  }

  const activeTarget = slots.find((slot) => slot.position.row === "front") ?? slots[0];
  if (activeTarget && activeTarget.shields <= 0) {
    const readyWeapons = combat.playerCooldowns.filter((cd) => cd <= 0).length;
    const readyRatio = readyWeapons / Math.max(1, gameState.ship.weapons.length);
    const confidence = clamp(0.6 + readyRatio * 0.3, 0.6, 0.9);
    candidates.push({
      text: "Shields down - called shots are primed to shatter the hull before the enemy recovers.",
      suggestion: "overcharge",
      confidence
    });
  }

  if (gameState.ship.hp / gameState.ship.maxHp < 0.4) {
    candidates.push({
      text: "Hull integrity is low - brace now to survive the next volley while you recover.",
      suggestion: "brace",
      confidence: 0.75
    });
  }

  candidates.push({
    text: "Balanced posture - cycle weapons, wait for openings, and shift stance if needed.",
    suggestion: "balanced",
    confidence: 0.5
  });

  const seed = ((combat.adviceToken ?? Math.random()) + combat.round * 0.13) % 1;
  const index = Math.floor(seed * candidates.length);
  const choice = candidates[index];
  return {
    ...choice,
    confidence: choice.confidence
  };
}
  function tickCooldowns() {
    const combat = gameState.combat;
    if (!combat) return;
    combat.playerCooldowns = combat.playerCooldowns.map((cd) => (cd > 0 ? cd - 1 : 0));
    for (const slot of combat.encounter.enemies) {
      slot.weaponCooldowns = slot.weaponCooldowns.map((cd) => (cd > 0 ? cd - 1 : 0));
    }
    tickStatusEffects(combat);

    if (combat.playerStatus.maneuverTurns > 0) {
      combat.playerStatus.maneuverTurns -= 1;
      if (combat.playerStatus.maneuverTurns <= 0) {
        combat.playerStatus.maneuverBonus = 0;
      }
    }
    if (combat.playerStatus.shieldTurns > 0) {
      combat.playerStatus.shieldTurns -= 1;
      if (combat.playerStatus.shieldTurns <= 0) {
        combat.playerStatus.shieldBoost = 0;
      }
    }
    if (combat.moduleAbilityCooldowns) {
      for (const componentId of Object.keys(combat.moduleAbilityCooldowns)) {
        const remaining = combat.moduleAbilityCooldowns[componentId];
        if (remaining > 0) {
          combat.moduleAbilityCooldowns[componentId] = Math.max(0, remaining - 1);
        }
      }
    }
    if (combat.playerActionCooldowns) {
      combat.playerActionCooldowns = combat.playerActionCooldowns
        .map((entry) => ({
          actionId: entry.actionId,
          remainingRounds: Math.max(0, entry.remainingRounds - 1)
        }))
        .filter((entry) => entry.remainingRounds > 0);
    }
  }

function handleVictory() {
  const combat = gameState.combat;
  if (!combat) return;
  const encounter = combat.encounter;
  log(`The ${encounter.name} explodes under your punishing fire. Victory is yours.`);

  const hullDamageTaken = Math.max(0, combat.startingHp - gameState.ship.hp);
  const quickKill = combat.totalRounds <= 3;
  const lowDamageTaken = hullDamageTaken <= 5;

  const loot = rollLoot(
    encounter.id,
    encounter.name,
    { quickKill, lowDamageTaken },
    encounter.tags
  );
  if (loot) {
    gameState.lastBattleResult = loot;
    const parts: string[] = [];
    if (loot.creditsEarned) parts.push(`Credits: +${loot.creditsEarned}`);
    if (loot.commodities.length)
      parts.push(
        `Cargo: ${loot.commodities
          .map((c) => `${c.qty} ${c.id}`)
          .join(", ")}`
      );
    if (loot.weapons.length) parts.push(`Weapons: ${loot.weapons.join(", ")}`);
    if (loot.components.length)
      parts.push(`Components: ${loot.components.join(", ")}`);
    if (loot.missionsGranted.length)
      parts.push(`Missions: ${loot.missionsGranted.join(", ")}`);
    log(`Loot recovered — ${parts.join(" | ") || "nothing notable."}`);
    if (quickKill) log("Because you won quickly, salvage yields are richer.");
    if (lowDamageTaken) log("Minimal hull damage preserved more intact cargo.");
  } else {
    log("No notable loot recovered.");
  }

  const tensionGain = 3 + (quickKill ? 2 : 0) + (lowDamageTaken ? 1 : 0);
  adjustTension(gameState, tensionGain);
  if (loot?.creditsEarned && loot.creditsEarned > 300) {
    adjustTension(gameState, 2);
  }
  if (encounter.tags.some((tag) => /navy|elite/.test(tag))) {
    adjustTension(gameState, 2);
  }

  const combatXp = Math.max(
    15,
    Math.round(20 + encounter.enemies.length * 10 + (quickKill ? 10 : 0) + (lowDamageTaken ? 5 : 0))
  );
  awardXp(combatXp, "combat");
  recordCombatVictory();
  recordShipDestroyed();

  recordCombatKill(encounter.id);
  if (
    encounter.tags.some((tag) => /pirate|raider/i.test(tag)) ||
    encounter.id.includes("pirate") ||
    encounter.id.includes("raider")
  ) {
    const repMult = getCombatTune().repGainMultiplier ?? 1;
    adjustWanted(Math.round(3 * repMult));
  }

  gameState.combat = null;
  navReturn(combat.returnTo, combat.returnParams);
}

function handleDefeat() {
  log("Your ship is crippled. Systems fail one by one as you drift through vacuum...");
  gameState.ship.hp = 0;
  gameState.ship.shields = 0;
  gameState.combat = null;
  gameState.notifications.push("Critical failure — hull integrity dropped to zero.");
  triggerGameOver("ship_destroyed", "Ship destroyed in combat.");
}

export function setPlayerStance(stance: StanceId): void {
  const combat = gameState.combat;
  if (!combat) return;
  combat.playerStance = stance;
  const definition = getStanceDefinition(stance);
  log(`Stance changed to ${definition.label}.`);
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
