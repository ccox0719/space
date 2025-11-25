import { gameState } from "../core/state";
import type { TradeStrategyState } from "../core/state";

export type TradeStrategy = "taxEvasion" | "smuggling" | "bribery";

const MILESTONE_STEP = 25;
const MAX_PROGRESS = 100;

const INVESTMENTS: Record<
  TradeStrategy,
  { cost: number; gain: number; name: string; benefit: string }
> = {
  taxEvasion: {
    cost: 180,
    gain: 10,
    name: "Tax Evasion Grid",
    benefit: "whispered import routes and shell accounts"
  },
  smuggling: {
    cost: 150,
    gain: 8,
    name: "Smuggling Ring",
    benefit: "hidden routes and tolerant contacts"
  },
  bribery: {
    cost: 200,
    gain: 12,
    name: "Bribery Ledger",
    benefit: "greased palms and friendly inspectors"
  }
};

function ensureTradeStrategy(): TradeStrategyState {
  if (!gameState.tradeStrategy) {
    gameState.tradeStrategy = {
      taxEvasion: 0,
      smuggling: 0,
      bribery: 0
    };
  }
  return gameState.tradeStrategy;
}

function clampProgress(value: number): number {
  return Math.max(0, Math.min(MAX_PROGRESS, value));
}

export function getTradeStrategyState(): TradeStrategyState {
  return ensureTradeStrategy();
}

export function getStrategyProgress(strategy: TradeStrategy): number {
  return clampProgress(getTradeStrategyState()[strategy]);
}

function notifyMilestone(
  strategy: TradeStrategy,
  previous: number,
  current: number
): void {
  const prevTier = Math.floor(previous / MILESTONE_STEP);
  const currentTier = Math.floor(current / MILESTONE_STEP);
  if (currentTier > prevTier) {
    gameState.notifications.push(
      `Trade Path: ${strategy} progress ${Math.min(
        currentTier * MILESTONE_STEP,
        MAX_PROGRESS
      )}% (${INVESTMENTS[strategy].name})`
    );
  }
}

export function incrementTradeStrategyProgress(
  strategy: TradeStrategy,
  delta: number
): void {
  if (delta <= 0) return;
  const state = ensureTradeStrategy();
  const previous = state[strategy];
  state[strategy] = clampProgress(previous + delta);
  notifyMilestone(strategy, previous, state[strategy]);
}

export function investInStrategy(strategy: TradeStrategy): boolean {
  const config = INVESTMENTS[strategy];
  if (gameState.player.credits < config.cost) {
    gameState.notifications.push("Not enough credits to invest in " + config.name + ".");
    return false;
  }
  gameState.player.credits -= config.cost;
  incrementTradeStrategyProgress(strategy, config.gain);
  gameState.notifications.push(
    `Invested ${config.cost} cr into ${config.name} (${config.benefit}).`
  );
  return true;
}

export function getStrategyConfig(strategy: TradeStrategy) {
  return INVESTMENTS[strategy];
}

export function getTradeStrategyEffects(): {
  detectionReduction: number;
  fineDiscount: number;
} {
  const state = ensureTradeStrategy();
  return {
    detectionReduction: Math.min(0.25, state.bribery / 400),
    fineDiscount: Math.min(0.35, state.smuggling / 280)
  };
}
