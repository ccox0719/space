// src/systems/EventEngine.ts
// Deterministic event selection and resolution based on event_system.json weights.

import eventSystem from "../../event_system.json";
import { Galaxy, Sector } from "../../galaxyTypes";
import { GameState, EventSelection, PlayerState } from "../game/GameState";
import { adjustCredits, adjustFuel, adjustReputation, addStatus, applyDamage, removeRandomCargo } from "./PlayerState";
import { createMissionOffer } from "./MissionSystem";
import { decayPirateAttention } from "./RiskSystem";
import { calculateFleeChance } from "./EscapeSystem";
import { Rng } from "../rng/SeededRng";
import { getPerkMultiplier } from "./perkSystem";

type EventCategory = (typeof eventSystem.events.categories)[number];

interface EventRequirement {
  sectorDanger?: "medium_or_high";
  sectorLaw?: "medium_or_high";
  enginePower?: number;
  syndicateRepMin?: number;
}

interface EventEffect {
  credits?: number;
  fuel?: number;
  damage?: "light" | "medium" | "heavy";
  cargoLossChance?: number;
  repChanges?: Record<string, number>;
  loot?: "small" | "medium" | "large";
  minerals?: "small" | "large";
  artifact?: string;
  mission_offer?: string;
  flag?: string;
  combat?: "forced";
  log?: string;
  riskAdjust?: {
    pirateAttention?: number;
  };
}

interface OutcomeBranch {
  chance: number;
  effects: EventEffect;
}

interface EventChoice {
  id: string;
  text: string;
  tags?: string[];
  requirements?: EventRequirement;
  outcomes: {
    success: OutcomeBranch;
    failure?: OutcomeBranch;
  };
}

interface EventDefinition {
  id: string;
  category: EventCategory;
  description: string;
  rarity?: number;
  requirements?: EventRequirement;
  choices: EventChoice[];
}

interface EventConfig {
  globalWeights: Record<EventCategory, number>;
  roleWeights: Record<string, Record<EventCategory, number>>;
  eventPool: EventDefinition[];
}

const config: EventConfig = eventSystem.events as unknown as EventConfig;

const EFFECT_CONFIG = {
  lootCredits: { small: 200, medium: 400, large: 800 },
  mineralsYield: { small: 3, large: 6 }
};

export class EventEngine {
  constructor(private galaxy: Galaxy) {}

  rollEvent(game: GameState, sector: Sector, rng: Rng, choiceId?: string): EventSelection | null {
    const pool = this.filterEligibleEvents(game, sector);
    if (!pool.length) return null;
    const picked = this.weightedPick(pool, game, sector, rng);
    if (!picked) return null;

    const choice = this.pickChoice(picked, game.player, rng, choiceId);
    if (!choice) return null;

    const handled = this.handleRunIfNeeded(picked, choice, game, sector, rng);
    if (handled) return handled;

    const outcomeType = this.pickOutcomeBranch(choice, rng);
    const branch = choice.outcomes[outcomeType];
    if (!branch) return null;

    this.applyEffects(game, branch.effects, rng);

    return {
      eventId: picked.id,
      category: picked.category,
      description: picked.description,
      choiceId: choice.id,
      outcome: outcomeType,
      delta: branch.effects as Record<string, unknown>
    };
  }

  rollSpecificEvent(game: GameState, eventId: string, sector: Sector, rng: Rng, choiceId?: string): EventSelection | null {
    const evt = (config.eventPool as EventDefinition[]).find((e) => e.id === eventId);
    if (!evt || !this.meetsRequirements(evt.requirements, game, sector)) return null;
    const choice = this.pickChoice(evt, game.player, rng, choiceId);
    if (!choice) return null;
    const handled = this.handleRunIfNeeded(evt, choice, game, sector, rng);
    if (handled) return handled;
    const outcomeType = this.pickOutcomeBranch(choice, rng);
    const branch = choice.outcomes[outcomeType];
    if (!branch) return null;
    this.applyEffects(game, branch.effects, rng);
    return {
      eventId: evt.id,
      category: evt.category,
      description: evt.description,
      choiceId: choice.id,
      outcome: outcomeType,
      delta: branch.effects as Record<string, unknown>
    };
  }

  private filterEligibleEvents(game: GameState, sector: Sector): EventDefinition[] {
    return config.eventPool.filter((evt) => this.meetsRequirements(evt.requirements, game, sector));
  }

  private meetsRequirements(req: EventRequirement | undefined, game: GameState, sector: Sector | null): boolean {
    if (!req) return true;
    if (sector && req.sectorDanger === "medium_or_high" && !(sector.danger === "medium" || sector.danger === "high")) {
      return false;
    }
    if (sector && req.sectorLaw === "medium_or_high" && !(sector.law === "medium" || sector.law === "high")) {
      return false;
    }
    if (typeof req.enginePower === "number" && game.player.ship.enginePower < req.enginePower) {
      return false;
    }
    if (typeof req.syndicateRepMin === "number" && (game.player.reputation["syndicate"] ?? 0) < req.syndicateRepMin) {
      return false;
    }
    return true;
  }

  private weightedPick(
    events: EventDefinition[],
    game: GameState,
    sector: Sector,
    rng: Rng
  ): EventDefinition | null {
    const weights = events.map((evt) => this.computeWeight(evt, game, sector));
    const total = weights.reduce((a, b) => a + b, 0);
    if (total <= 0) return null;
    let roll = rng.next() * total;
    for (let i = 0; i < events.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return events[i];
    }
    return events[events.length - 1];
  }

  private computeWeight(evt: EventDefinition, game: GameState, sector: Sector): number {
    const player = game.player;
    const base = config.globalWeights[evt.category] ?? 1;
    const roleWeight = config.roleWeights[player.roleId]?.[evt.category] ?? 1;
    const sectorMod = sector.localModifiers?.events?.[evt.category] ?? 1;
    const rarityMod = evt.rarity ? 1 / evt.rarity : 1;
    const coreWeight = base * roleWeight * sectorMod * rarityMod;
    const perkBonus =
      evt.category === "piracy" ? getPerkMultiplier(game, "events", "pirateMissionWeight") : 1;
    return coreWeight * perkBonus;
  }

  private handleRunIfNeeded(
    evt: EventDefinition,
    choice: EventChoice,
    game: GameState,
    sector: Sector,
    rng: Rng
  ): EventSelection | null {
    if (evt.id !== "pirate_encounter_lane" || choice.id !== "run") return null;
    const fleeChance = calculateFleeChance({
      playerShip: game.player.ship,
      enemySpeedRating: 7,
      sectorDanger: sector.danger,
      pirateAttention: game.player.risk.pirateAttention
    });
    const roll = rng.next();
    const success = roll < fleeChance;
    if (success) {
      game.player.ship.fuel = Math.max(0, game.player.ship.fuel - 1);
      decayPirateAttention(game.player, 15);
      this.applyEffects(
        game,
        {
          log: `You burn hard, engines screaming. The pirate falls behind. (Escape ${(fleeChance * 100).toFixed(0)}%)`
        },
        rng
      );
    } else {
      game.player.ship.hull = Math.max(0, game.player.ship.hull - 5);
      game.player.risk.pirateAttention = Math.min(100, game.player.risk.pirateAttention + 5);
      this.applyEffects(
        game,
        {
          log: `You try to run, but the pirate tags you as you fail to break away. (Escape ${(fleeChance * 100).toFixed(0)}%)`,
          flag: "enemy_advantage"
        },
        rng
      );
    }
    return {
      eventId: evt.id,
      category: evt.category,
      description: evt.description,
      choiceId: choice.id,
      outcome: success ? "success" : "failure",
      delta: { fleeChance, roll, success }
    };
  }

  private pickChoice(evt: EventDefinition, player: PlayerState, rng: Rng, choiceId?: string): EventChoice | null {
    const fakeGame = { player } as GameState;
    const eligible = evt.choices.filter((c) => this.meetsRequirements(c.requirements, fakeGame, null));
    if (!eligible.length) return null;
    if (choiceId) {
      const found = eligible.find((c) => c.id === choiceId);
      if (found) return found;
    }
    const idx = Math.floor(rng.next() * eligible.length);
    return eligible[idx];
  }

  private pickOutcomeBranch(choice: EventChoice, rng: Rng): "success" | "failure" {
    const successChance = choice.outcomes.success.chance;
    const failureChance = choice.outcomes.failure?.chance ?? 0;
    const total = successChance + failureChance;
    const roll = rng.next() * total;
    return roll <= successChance ? "success" : "failure";
  }

  private applyEffects(game: GameState, effects: EventEffect, rng: Rng): void {
    if (typeof effects.credits === "number") {
      adjustCredits(game.player, effects.credits);
    }
    if (typeof effects.fuel === "number") {
      adjustFuel(game.player, effects.fuel);
    }
    if (effects.damage) {
      applyDamage(game.player, effects.damage);
    }
    if (typeof effects.cargoLossChance === "number" && rng.next() <= effects.cargoLossChance) {
      removeRandomCargo(game.player, rng.next);
    }
    if (effects.repChanges) {
      adjustReputation(game.player, effects.repChanges);
    }
    if (effects.loot) {
      adjustCredits(game.player, EFFECT_CONFIG.lootCredits[effects.loot] ?? 0);
    }
    if (effects.minerals) {
      // Treat minerals as credits placeholder; could be piped to inventory system.
      adjustCredits(game.player, EFFECT_CONFIG.mineralsYield[effects.minerals] * 20);
    }
    if (effects.mission_offer) {
      createMissionOffer(game, effects.mission_offer, game.currentSectorId, rng);
    }
    if (effects.flag) {
      addStatus(game.player, effects.flag);
    }
    if (effects.log) {
      game.log.push({
        cycle: game.time.cycle,
        sectorId: game.currentSectorId,
        message: effects.log
      });
    }
    if (typeof effects.riskAdjust?.pirateAttention === "number") {
      game.player.risk.pirateAttention = Math.max(
        0,
        Math.min(100, game.player.risk.pirateAttention + effects.riskAdjust.pirateAttention)
      );
    }
  }
}
