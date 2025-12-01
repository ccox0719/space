import { gameState, getHighScores } from "../core/state";
import { startFreshRun } from "../core/gameFlow";

declare global {
  interface Window {
    startNewRun: () => void;
    returnToMainMenu: () => void;
  }
}

window.startNewRun = () => startFreshRun(false);
window.returnToMainMenu = () => startFreshRun(true);

export function GameOverScreen(): string {
  const summary = gameState.gameOver?.summary;
  const highscores = getHighScores();
  const mainMessage = summary?.message || "Your run has ended.";
  const scoreValue = summary?.score ?? 0;

  const overviewRows = [
    ["Days survived", summary?.stats.daysSurvived ?? 0],
    ["Systems visited", summary?.stats.systemsVisited ?? 0],
    ["Jumps completed", summary?.stats.jumpsMade ?? 0]
  ];

  const economyRows = [
    ["Credits earned", summary?.stats.creditsEarnedTotal ?? 0],
    ["Highest net worth", summary?.stats.highestNetWorth ?? 0],
    ["Trade profit", summary?.stats.tradeProfitTotal ?? 0],
    [
      "Most traded",
      (summary?.stats.mostTradedCommodityId &&
        summary.stats.mostTradedCommodityId.replace(/_/g, " ")) ||
        "None"
    ]
  ];

  const contractRows = [
    ["Contracts completed", summary?.stats.contractsCompleted ?? 0],
    ["Contract payouts", summary?.stats.contractPayoutTotal ?? 0]
  ];

  const combatRows = [
    ["Fights survived", summary?.stats.fightsSurvived ?? 0],
    ["Ships destroyed", summary?.stats.shipsDestroyed ?? 0],
    ["Damage dealt", summary?.stats.damageDealtTotal ?? 0],
    ["Damage taken", summary?.stats.damageTakenTotal ?? 0]
  ];

  const miningRows = [
    ["Mining runs", summary?.stats.miningRuns ?? 0],
    ["Ore mined", summary?.stats.oreMinedTotal ?? 0],
    ["Rare finds", summary?.stats.rareFinds ?? 0]
  ];

  const renderRows = (rows: [string, number | string][]): string =>
    rows
      .map(
        ([label, value]) => `
      <tr>
        <td>${label}</td>
        <td>${value}</td>
      </tr>
    `
      )
      .join("");

  const highscoreHtml =
    highscores.length === 0
      ? "<p class=\"muted\">No high scores yet.</p>"
      : `<table class="highscore-table">
          <thead>
            <tr><th>#</th><th>Score</th><th>Days</th><th>Contracts</th><th>Kills</th><th>Reason</th></tr>
          </thead>
          <tbody>
            ${highscores
              .map(
                (entry, idx) => `
                  <tr>
                    <td>${idx + 1}</td>
                    <td>${entry.score}</td>
                    <td>${entry.daysSurvived}</td>
                    <td>${entry.contractsCompleted}</td>
                    <td>${entry.shipsDestroyed}</td>
                    <td>${entry.reason.replace(/_/g, " ")}</td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>`;

  return `
    <div class="app-root gameover">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Run Summary</span>
          <span class="app-location">Game Over</span>
        </div>
        <div class="app-meta">
          <span>${mainMessage}</span>
        </div>
      </header>

      <section class="gameover-score">
        <h1>${scoreValue.toLocaleString()}</h1>
        <p>Final score • ${summary?.reason.replace(/_/g, " ") ?? "Unknown fate"}</p>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h2>Career Overview</h2>
          <table>${renderRows(overviewRows)}</table>
        </section>
        <section class="data-panel">
          <h2>Economy</h2>
          <table>${renderRows(economyRows)}</table>
        </section>
        <section class="data-panel">
          <h2>Contracts</h2>
          <table>${renderRows(contractRows)}</table>
        </section>
        <section class="data-panel">
          <h2>Combat</h2>
          <table>${renderRows(combatRows)}</table>
        </section>
        <section class="data-panel">
          <h2>Mining</h2>
          <table>${renderRows(miningRows)}</table>
        </section>
        <section class="data-panel">
          <h2>Best Runs</h2>
          ${highscoreHtml}
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-primary" onclick="startNewRun()">Start New Run</button>
        <button class="btn btn-ghost" onclick="returnToMainMenu()">Return to Main Menu</button>
      </footer>
    </div>
  `;
}
