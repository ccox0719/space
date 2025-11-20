import { gameState } from "../core/state";
import { navigation } from "../core/navigation";
import { content } from "../core/engine";
import { computeWeaponDamage, getWeaponById } from "./weaponSystem";
import { rollLoot } from "./lootSystem";
import {
  BRACE_DAMAGE_REDUCTION,
  CALLED_SHOT_MODS,
  CALLED_SHOT_TIP,
  BRACE_TIP,
  DAMAGE_TYPE_GUIDE
} from "./combatConstants";
export { CALLED_SHOT_TIP, BRACE_TIP, DAMAGE_TYPE_GUIDE } from "./combatConstants";
import { computePlayerPower, computeDayPressure } from "./difficultySystem";
import { systemHasTag } from "./systemHelpers";

type Stance = "assault" | "balanced" | "evasive";
type AimMode = "normal" | "called_shot";

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

export type PlayerCombatActionType = "fire" | "brace" | "flee";

function log(line: string) {
  const state = gameState.combat;
  if (!state) return;
  state.log.push(line);
  const MAX_LOG = 10;
  if (state.log.length > MAX_LOG) {
    state.log = state.log.slice(state.log.length - MAX_LOG);
  }
}

function estimateEnemyPower(enemy: { hull: number; shields: number; weaponIds: string[] }): number {
  const hp = enemy.hull + enemy.shields;
  const weaponFactor = enemy.weaponIds.length * 15;
  return hp + weaponFactor;
}

export function startCombat(enemyId: string) {
  const tpl = getEnemyTemplate(enemyId);
  const shipWeapons = gameState.ship.weapons;
  const playerCooldowns = shipWeapons.map(() => 0);
  const enemyWeapons = tpl.weaponIds.slice();
  const enemyCooldowns = enemyWeapons.map(() => 0);

  gameState.combat = {
    enemyId: tpl.id,
    enemyName: tpl.name,
    enemyHp: tpl.hull,
    enemyMaxHp: tpl.hull,
    enemyShields: tpl.shields,
    enemyMaxShields: tpl.shields,
    enemyWeapons,
    enemyCooldowns,
    enemyTags: tpl.tags || [],
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
    log: [`${tpl.name} engages you in combat!`],
    adviceToken: Math.random()
  };

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

  let minEnemyPower = playerPower * (0.6 + 0.2 * dayPressure);
  let maxEnemyPower = playerPower * (0.9 + 0.4 * dayPressure);

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
    case "brace":
      playerBrace();
      break;
    case "flee":
      if (attemptFlee()) {
        return;
      }
      break;
  }

  if (!gameState.combat) return;
  if (combat.enemyHp <= 0) {
    handleVictory();
    return;
  }

  enemyTurn();

  if (!gameState.combat) return;
  if (gameState.ship.hp <= 0) {
    handleDefeat();
    return;
  }

  tickCooldowns();
  combat.adviceToken = Math.random();
  combat.round += 1;
  combat.totalRounds += 1;
}

function playerFireWeapon(slotIndex: number, aimMode: AimMode) {
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

  const cooldown = combat.playerCooldowns[slotIndex] ?? 0;
  if (cooldown > 0) {
    log(`${weapon.name} is still recharging (${cooldown} turn${cooldown === 1 ? "" : "s"}).`);
    return;
  }

  const targetState = {
    shields: combat.enemyShields,
    hp: combat.enemyHp
  };
  const aimDamageMod = aimMode === "called_shot" ? CALLED_SHOT_MODS.damageMultiplier : 1;
  const aimAccuracyMod = aimMode === "called_shot" ? CALLED_SHOT_MODS.accuracyMultiplier : 1;
  const stanceMod = getOutgoingMod(combat.playerStance);
  const damage = computeWeaponDamage(weapon, targetState, {
    accuracyMultiplier: aimAccuracyMod,
    damageMultiplier: aimDamageMod * stanceMod
  });

  if (damage <= 0) {
    const missLabel = aimMode === "called_shot" ? "called shot goes wide" : "misses";
    log(`You fire ${weapon.name}, but it ${missLabel}.`);
    combat.playerCooldowns[slotIndex] = weapon.cooldown;
    return;
  }

  let remaining = damage;
  if (combat.enemyShields > 0) {
    const absorbed = Math.min(combat.enemyShields, remaining);
    combat.enemyShields -= absorbed;
    remaining -= absorbed;
  }
  if (remaining > 0) {
    combat.enemyHp = Math.max(0, combat.enemyHp - remaining);
  }

  const targetArea = targetState.shields > 0 ? "shields" : "hull";
  const aimLabel = aimMode === "called_shot" ? "called shot" : "normal shot";
  log(`You strike the ${combat.enemyName}'s ${targetArea} with ${weapon.name} (${aimLabel}) for ${damage} damage.`);

  // Tag-based effects
  if (damage > 0 && weapon.tags?.includes("disruptor")) {
    combat.enemyStatus.weaponJammedTurns = Math.min(
      2,
      combat.enemyStatus.weaponJammedTurns + 1
    );
    log(`${combat.enemyName}'s weapons are disrupted!`);
  }

  combat.playerCooldowns[slotIndex] = weapon.cooldown;
}

function playerBrace() {
  const combat = gameState.combat;
  if (!combat) return;
  combat.playerBracing = true;
  log("You brace for impact, diverting power to shields and hull integrity.");
}

function attemptFlee(): boolean {
  const combat = gameState.combat;
  if (!combat) return false;
  if (!combat.canEscape) {
    log("The enemy objectives lock you in place. Flee attempt denied.");
    return false;
  }
  const baseChance = 0.4;
  const stanceBonus =
    combat.playerStance === "assault" ? -0.1 : combat.playerStance === "evasive" ? 0.15 : 0;
  const playerManeuver =
    (gameState.ship.maneuverRating || 0) + (combat.playerStatus.maneuverBonus || 0);
  const enemyManeuver = 40;
  const maneuverBonus = clamp((playerManeuver - enemyManeuver) * 0.01, -0.15, 0.15);

  const chance = clamp(baseChance + stanceBonus + maneuverBonus, 0.1, 0.9);

  if (Math.random() <= chance) {
    log(
      `You punch the thrusters and break free! (Flee chance ${(chance * 100).toFixed(0)}%)`
    );
    gameState.combat = null;
    navigation.go("main");
    return true;
  } else {
    log(
      `You attempt to flee, but the enemy holds you in their sights. (Flee chance ${(chance * 100).toFixed(0)}%)`
    );
    return false;
  }
}

function enemyTurn() {
  const combat = gameState.combat;
  if (!combat) return;

  if (combat.enemyStatus.weaponJammedTurns > 0) {
    combat.enemyStatus.weaponJammedTurns -= 1;
    log("Enemy weapons are jammed this round!");
    return;
  }

  const readySlots: number[] = [];
  combat.enemyWeapons.forEach((id, idx) => {
    const cd = combat.enemyCooldowns[idx] ?? 0;
    if (id && cd <= 0) {
      readySlots.push(idx);
    }
  });

  if (readySlots.length === 0) {
    log(`The ${combat.enemyName} reloads while you advance.`);
    return;
  }

  const slot = readySlots[randBetween(0, readySlots.length - 1)];
  const weaponId = combat.enemyWeapons[slot];
  const weapon = getWeaponById(weaponId);
  if (!weapon) {
    log(`The ${combat.enemyName} fumbles its weapon.`);
    return;
  }

  const targetState = {
    shields: gameState.ship.shields,
    hp: gameState.ship.hp
  };
  const accPenalty = Math.min(0.3, Math.max(0, combat.playerStatus.maneuverBonus || 0) * 0.01);
  let damage = computeWeaponDamage(weapon, targetState, {
    accuracyMultiplier: 1 - accPenalty
  });

  if (damage <= 0) {
    log(`The ${combat.enemyName} fires ${weapon.name}, but misses.`);
    combat.enemyCooldowns[slot] = weapon.cooldown;
    return;
  }

  if (combat.playerBracing) {
    damage = Math.round(damage * BRACE_DAMAGE_REDUCTION);
  }

  damage = Math.max(0, Math.round(damage * getIncomingMod(combat.playerStance)));

  let remaining = damage;
  if (combat.playerStatus.shieldBoost > 0) {
    const absorbed = Math.min(combat.playerStatus.shieldBoost, remaining);
    combat.playerStatus.shieldBoost -= absorbed;
    remaining -= absorbed;
  }
  if (gameState.ship.shields > 0) {
    const absorbed = Math.min(gameState.ship.shields, remaining);
    gameState.ship.shields -= absorbed;
    remaining -= absorbed;
  }
  if (remaining > 0) {
    gameState.ship.hp = Math.max(0, gameState.ship.hp - remaining);
  }

  log(`The ${combat.enemyName} hits you with ${weapon.name} for ${damage} damage.`);
  combat.enemyCooldowns[slot] = weapon.cooldown;
}

export type CombatAdviceSuggestion = "brace" | "assault" | "balanced";

export interface CombatAdvice {
  text: string;
  suggestion: CombatAdviceSuggestion;
  confidence: number;
}

export function getCombatAdvice(): CombatAdvice | null {
  const combat = gameState.combat;
  if (!combat) return null;

  const cds =
    combat.enemyCooldowns.length > 0
      ? combat.enemyCooldowns.map((cd) => (cd ?? Number.MAX_SAFE_INTEGER))
      : [Number.MAX_SAFE_INTEGER];
  const soonestCd = Math.min(...cds);

  const candidates: CombatAdvice[] = [];

  if (soonestCd <= 1) {
    const confidence = clamp(0.6 + (1 - soonestCd) * 0.2, 0.65, 0.95);
    candidates.push({
      text: `Enemy shifts into a heavy attack stance; the next shot lands in ${soonestCd} turn${soonestCd === 1 ? "" : "s"}—brace to soften the incoming blow.`,
      suggestion: "brace",
      confidence
    });
  }

  if (combat.enemyShields <= 0) {
    const readyWeapons = combat.playerCooldowns.filter((cd) => cd <= 0).length;
    const readyRatio = readyWeapons / Math.max(1, gameState.ship.weapons.length);
    const confidence = clamp(0.6 + readyRatio * 0.3, 0.6, 0.9);
    candidates.push({
      text: "Shields down—called shots are primed to shatter the hull before the enemy recovers.",
      suggestion: "assault",
      confidence
    });
  }

  if (gameState.ship.hp / gameState.ship.maxHp < 0.4) {
    candidates.push({
      text: "Hull integrity is low—brace now to survive the next volley while you recover.",
      suggestion: "brace",
      confidence: 0.75
    });
  }

  candidates.push({
    text: "Balanced posture—cycle weapons, wait for openings, and shift stance if needed.",
    suggestion: "balanced",
    confidence: 0.5
  });

  const seed = ((combat.adviceToken ?? Math.random()) + (combat.round * 0.13)) % 1;
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
  combat.enemyCooldowns = combat.enemyCooldowns.map((cd) => (cd > 0 ? cd - 1 : 0));

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
}

function handleVictory() {
  const combat = gameState.combat;
  if (!combat) return;
  log(`The ${combat.enemyName} explodes under your punishing fire. Victory is yours.`);

  const hullDamageTaken = Math.max(0, combat.startingHp - gameState.ship.hp);
  const quickKill = combat.totalRounds <= 3;
  const lowDamageTaken = hullDamageTaken <= 5;

  const loot = rollLoot(
    combat.enemyId,
    combat.enemyName,
    { quickKill, lowDamageTaken },
    combat.enemyTags || []
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

  gameState.combat = null;
  navigation.go("main");
}

function handleDefeat() {
  log("Your ship is crippled. Systems fail one by one as you drift through vacuum...");
  gameState.ship.hp = 0;
  gameState.ship.shields = 0;
  gameState.combat = null;
  gameState.notifications.push("Game over — hull integrity dropped to zero.");
  navigation.go("main");
}

export function setPlayerStance(stance: Stance): void {
  const combat = gameState.combat;
  if (!combat) return;
  combat.playerStance = stance;
  log(`Stance changed to ${stance.charAt(0).toUpperCase() + stance.slice(1)}.`);
}

function getOutgoingMod(stance: Stance): number {
  switch (stance) {
    case "assault":
      return 1.15;
    case "evasive":
      return 0.8;
    default:
      return 1;
  }
}

function getIncomingMod(stance: Stance): number {
  switch (stance) {
    case "assault":
      return 1.1;
    case "evasive":
      return 0.7;
    default:
      return 1;
  }
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}
