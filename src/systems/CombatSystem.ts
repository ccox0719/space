// src/systems/CombatSystem.ts
// Dice-based combat resolution with role, module, crew, and reputation modifiers.

import { Sector } from "../../galaxyTypes";
import { GameState } from "../game/GameState";
import { applyDamage, adjustCredits, adjustReputation, appendLog } from "./PlayerState";
import { applyPerkStatChain } from "./perkSystem";
import { Rng } from "../rng/SeededRng";
import { addXp } from "./xpSystem";

type EnemyType = "pirate" | "navy" | "smuggler" | "bounty_target";
type EnemyStrength = "light" | "standard" | "elite";

export interface CombatScenario {
  sector: Sector;
  enemyType: EnemyType;
  strength?: EnemyStrength;
}

export interface CombatResult {
  outcome: "win" | "loss";
  playerRoll: number;
  enemyRoll: number;
  damageTaken?: "light" | "medium" | "heavy";
  creditsDelta: number;
  repChanges?: Record<string, number>;
}

const COMBAT_CONFIG = {
  baseEnemyByDanger: {
    low: { attack: 12, defense: 10 },
    medium: { attack: 18, defense: 16 },
    high: { attack: 24, defense: 20 }
  },
  strengthModifier: {
    light: -4,
    standard: 0,
    elite: 6
  },
  enemyTypeAggression: {
    pirate: 4,
    navy: 6,
    smuggler: -2,
    bounty_target: 2
  },
  roleBonuses: {
    navy: { attack: 4, defense: 4 },
    bounty_hunter: { attack: 4, defense: 2 },
    pirate: { attack: 3, defense: 1 },
    smuggler: { attack: 1, defense: 1 },
    trader: { attack: 0, defense: 0 },
    miner: { attack: 0, defense: 1 },
    explorer: { attack: 1, defense: 1 },
    salvager: { attack: 1, defense: 2 }
  },
  moduleBonuses: {
    weapons: {
      civilian_lasers: 2
    },
    engines: {
      basic_thrusters: 1
    },
    scanners: {
      short_range_scanner: 1
    }
  },
  defenseMitigationFactor: 0.25,
  playerDefenseBoost: 0.1,
  repAggression: {
    pirate: { threshold: 40, attackMod: -4 },
    navy: { threshold: -30, attackMod: 4 }
  },
  lootByStrength: {
    light: 120,
    standard: 260,
    elite: 520
  },
  repOnWin: {
    pirate: { pirate: -3, navy: 1 },
    navy: { pirate: -1, navy: 2 },
    smuggler: { merchant: 1, pirate: -1 },
    bounty_target: { navy: 1, merchant: 1 }
  }
};

export function resolveCombat(
  game: GameState,
  scenario: CombatScenario,
  rng: Rng
): CombatResult {
  const strength: EnemyStrength = scenario.strength ?? "standard";
  const baseEnemy = COMBAT_CONFIG.baseEnemyByDanger[scenario.sector.danger] ?? COMBAT_CONFIG.baseEnemyByDanger.medium;
  const enemyAttack =
    baseEnemy.attack +
    COMBAT_CONFIG.strengthModifier[strength] +
    (COMBAT_CONFIG.enemyTypeAggression[scenario.enemyType] ?? 0) +
    reputationAggressionMod(game, scenario.enemyType);
  const enemyDefense = baseEnemy.defense + COMBAT_CONFIG.strengthModifier[strength];

  const playerAttack = computePlayerAttack(game);
  const playerDefense = computePlayerDefense(game);

  const playerRoll =
    rng.int(1, 100) +
    playerAttack +
    Math.floor(playerDefense * COMBAT_CONFIG.playerDefenseBoost);
  const enemyRoll =
    rng.int(1, 100) +
    enemyAttack -
    Math.floor(playerDefense * COMBAT_CONFIG.defenseMitigationFactor);

  let outcome: "win" | "loss" = "win";
  let damageTaken: "light" | "medium" | "heavy" | undefined;
  let creditsDelta = 0;
  let repChanges: Record<string, number> | undefined;

  if (playerRoll >= enemyRoll) {
    creditsDelta = COMBAT_CONFIG.lootByStrength[strength] ?? 0;
    adjustCredits(game.player, creditsDelta);
    repChanges = COMBAT_CONFIG.repOnWin[scenario.enemyType];
    if (repChanges) adjustReputation(game.player, repChanges);
  } else {
    outcome = "loss";
    const margin = enemyRoll - playerRoll;
    damageTaken = margin > 25 ? "heavy" : margin > 12 ? "medium" : "light";
    applyDamage(game.player, damageTaken);
    creditsDelta = 0;
  }

  appendLog(game, "Combat resolved", {
    enemyType: scenario.enemyType,
    strength,
    outcome,
    playerRoll,
    enemyRoll,
    damageTaken,
    creditsDelta
  });

  const xpGain = Math.max(
    5,
    (outcome === "win" ? 30 : 12) + (strength === "elite" ? 15 : strength === "standard" ? 8 : 3)
  );
  addXp(game, "combat", xpGain);

  return { outcome, playerRoll, enemyRoll, damageTaken, creditsDelta, repChanges };
}

function computePlayerAttack(game: GameState): number {
  const ship = game.player.ship;
  const base = ship.weaponDamage + Math.floor(ship.enginePower / 2);
  const roleBonus = COMBAT_CONFIG.roleBonuses[game.player.roleId]?.attack ?? 0;
  const moduleBonus =
    (game.player.modules.weapons ?? []).reduce(
      (sum, mod) => sum + (COMBAT_CONFIG.moduleBonuses.weapons[mod] ?? 0),
      0
    ) +
    (game.player.modules.engines ?? []).reduce(
      (sum, mod) => sum + (COMBAT_CONFIG.moduleBonuses.engines[mod] ?? 0),
      0
    );
  const combined = base + roleBonus + moduleBonus;
  return Math.max(
    0,
    Math.round(
      applyPerkStatChain(
        game,
        "combat",
        ["accuracyBase", "backlineAccuracyMultiplier", "critChance"],
        combined
      )
    )
  );
}

function computePlayerDefense(game: GameState): number {
  const ship = game.player.ship;
  const base = ship.shields + Math.floor(ship.evasion / 2);
  const roleBonus = COMBAT_CONFIG.roleBonuses[game.player.roleId]?.defense ?? 0;
  const moduleBonus = (game.player.modules.scanners ?? []).reduce(
    (sum, mod) => sum + (COMBAT_CONFIG.moduleBonuses.scanners[mod] ?? 0),
    0
  );
  const combined = base + roleBonus + moduleBonus;
  return Math.max(
    0,
    Math.round(applyPerkStatChain(game, "combat", ["accuracyBase"], combined))
  );
}

function reputationAggressionMod(game: GameState, enemyType: EnemyType): number {
  if (enemyType === "pirate") {
    const rep = game.player.reputation["pirate"] ?? 0;
    if (rep >= COMBAT_CONFIG.repAggression.pirate.threshold) {
      return COMBAT_CONFIG.repAggression.pirate.attackMod;
    }
  }
  if (enemyType === "navy") {
    const rep = game.player.reputation["navy"] ?? 0;
    if (rep <= COMBAT_CONFIG.repAggression.navy.threshold) {
      return COMBAT_CONFIG.repAggression.navy.attackMod;
    }
  }
  return 0;
}
