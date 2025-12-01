import { navigation } from "./navigation";
import {
  GameOverReason,
  HighScoreEntry,
  RunSummary,
  computeRunScore,
  recordHighScore,
  snapshotRunStats,
  newGameState,
  setGameState,
  loadDevTune,
  gameState
} from "./state";

const REASON_TITLES: Record<GameOverReason, string> = {
  ship_destroyed: "Ship Destroyed",
  out_of_fuel: "Stranded Without Fuel",
  story_fail: "Story Fail",
  other: "Game Over"
};

export function triggerGameOver(reason: GameOverReason, message?: string): void {
  if (!gameState || gameState.gameOver.active) return;
  const stats = snapshotRunStats();
  const score = computeRunScore(stats);
  const summary: RunSummary = {
    score,
    reason,
    message: message ?? REASON_TITLES[reason] ?? REASON_TITLES.other,
    location: gameState.location.systemId,
    stats
  };
  gameState.combat = null;
  gameState.miningSession = null;
  gameState.gameOver = {
    active: true,
    reason,
    message: summary.message,
    summary
  };
  const entry: HighScoreEntry = {
    score,
    reason,
    daysSurvived: stats.daysSurvived,
    contractsCompleted: stats.contractsCompleted,
    shipsDestroyed: stats.shipsDestroyed,
    timestamp: Date.now(),
    message: summary.message
  };
  recordHighScore(entry);
  navigation.go("gameover");
}

export function startFreshRun(skipShipSelect: boolean = false): void {
  const next = newGameState();
  setGameState(next);
  loadDevTune();
  navigation.go(skipShipSelect ? "main" : "ship_select");
}
