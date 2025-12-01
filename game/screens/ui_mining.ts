import { formatTurn } from "../core/formatters";
import { navigation } from "../core/navigation";
import { gameState, MiningCellState, MiningSessionState } from "../core/state";
import depthConfig from "../content/mining_depth_config.json";
import miningBalance from "../content/mining_balance.json";
import {
  cashOutMiningSession,
  drillSurveyCell,
  finalizeSurveyExtraction,
  getRiskChainHazardChance,
  getRiskChainRewardMult,
  setDrillTier,
  setMiningDepth,
  startMiningSession
} from "../systems/miningSystem";
import { getCargoValue } from "../systems/economySystem";

const COMBO_THRESHOLD = Math.max(1, depthConfig.combo.threshold);
type DrillTier = keyof typeof miningBalance.drillDepthCaps;

function riskColor(level: number): string {
  if (level >= 10) return "#ff5c7a";
  if (level >= 6) return "#fb923c";
  if (level >= 3) return "#facc15";
  return "#34d399";
}

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    drillCell: (row: number, col: number) => void;
    setMiningDepth: (depth: number) => void;
    finalizeDrill: () => void;
    newSurvey: () => void;
    leaveMining: () => void;
    setDrillTier: (tier: DrillTier) => void;
  }
}

window.leaveMining = () => {
  gameState.miningSession = null;
  navigation.go("main");
};

window.drillCell = (row: number, col: number) => {
  const result = drillSurveyCell(gameState, row, col);
  if (result?.fightTriggered) {
    return;
  }
  navigation.go("mining");
};

window.setMiningDepth = (depth: number) => {
  setMiningDepth(gameState, depth);
  navigation.go("mining");
};

window.setDrillTier = (tier: DrillTier) => {
  setDrillTier(gameState, tier);
  navigation.go("mining");
};

window.finalizeDrill = () => {
  const result = finalizeSurveyExtraction(gameState);
  if (result?.fightTriggered) {
    return;
  }
  const message = gameState.miningSession?.lastMessage || "Extraction complete.";
  navigation.go("main", { message });
};

window.cashOutMining = () => {
  const message = cashOutMiningSession(gameState);
  navigation.go("main", {
    message: message ?? "Risk Chain cash out requires level 3+."
  });
};

window.newSurvey = () => {
  startMiningSession(
    gameState,
    gameState.location.systemId,
    gameState.miningSession?.beltId,
    gameState.miningSession?.resourceId,
    { force: true }
  );
  navigation.go("mining");
};

function signalClass(signal?: number | null): string {
  if (signal == null) return "";
  if (signal >= 8) return "signal-strong";
  if (signal >= 4) return "signal-medium";
  if (signal > 0) return "signal-weak";
  return "signal-zero";
}

function renderGrid(grid: MiningCellState[][] | undefined): string {
  if (!grid || !grid.length) return "";
  const cells: string[] = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      const cell = grid[r][c];
      const outerCls = ["mine-cell"];
      if (cell.drilled) outerCls.push("drilled");
      if (cell.selected) outerCls.push("selected");
      if (cell.clusterHint) outerCls.push("cluster-hint");

      const innerCls = ["mine-cell-inner"];
      if (cell.directionClass) innerCls.push(cell.directionClass);
      if (cell.depthClass) innerCls.push(cell.depthClass);
      if (cell.hintSignal != null && !cell.drilled) innerCls.push("hinted");
      if (cell.signal != null) innerCls.push(signalClass(cell.signal));

      const signalValue =
        cell.signal != null ? cell.signal : cell.hintSignal != null ? cell.hintSignal : "A";
      const signalClassName =
        cell.signal != null
          ? "cell-signal"
          : cell.hintSignal != null
          ? "cell-signal hint"
          : "cell-signal muted";
      const label = `<span class="${signalClassName}">${signalValue}</span>`;

      cells.push(`
        <div class="${outerCls.join(" ")}" onclick="drillCell(${r}, ${c})">
          <div class="${innerCls.join(" ")}">
            <div class="cell-center">
              ${label}
            </div>
          </div>
        </div>
      `);
    }
  }
  return `<div class="mining-grid">${cells.join("")}</div>`;
}

const DRILL_TIERS = Object.keys(miningBalance.drillDepthCaps) as DrillTier[];

function renderDrillTierControls(session: MiningSessionState | null | undefined): string {
  if (!session) return "";
  const activeTier = session.drillTier ?? (DRILL_TIERS[0] ?? "basic");
  const rows = DRILL_TIERS.map((tier) => {
    const depthCap = miningBalance.drillDepthCaps[tier];
    const activeClass = tier === activeTier ? "chip-btn active" : "chip-btn";
    return `
      <button class="${activeClass}" onclick="setDrillTier('${tier}')">
        ${tier.charAt(0).toUpperCase() + tier.slice(1)} Drill (max Z${depthCap})
      </button>
    `;
  }).join("");
  return `
    <div class="panel-card panel-card--compact">
      <p class="label">Drill Tiers</p>
      <div class="drill-tier-grid">
        ${rows}
      </div>
      <p class="muted small">
        Higher tiers unlock deeper layers and higher payouts once unlocked.
      </p>
    </div>
  `;
}

export function MiningScreen(): string {
  const session = gameState.miningSession;
  if (!session) {
    return `
      <div class="app-root mining-shell">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Mining</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">No Active Mining Session</h1>
            <p>There is no ongoing mining belt right now.</p>
          </section>
        </main>
      <footer class="app-footer"></footer>
      </div>
    `;
  }

  const comboGauge = Math.min(COMBO_THRESHOLD, session.comboGauge ?? 0);
  const comboPercent = Math.min(100, Math.round((comboGauge / COMBO_THRESHOLD) * 100));
  const comboActive = (session.comboBonusTurns ?? 0) > 0;
  const comboStatus = comboActive
    ? `Combo bonus active (${session.comboBonusTurns} turns)`
    : `Combo ${comboPercent}% toward bonus`;
  const comboThreatReduction = session.comboThreatReduction ?? 0;

  const playerXp = Math.max(0, gameState.player.xp ?? 0);
  const riskLevel = session.riskChainLevel ?? 0;
  const riskReward = getRiskChainRewardMult(riskLevel);
  const riskHazard = Math.round(getRiskChainHazardChance(riskLevel, playerXp) * 100);
  const riskBarWidth = Math.min(100, Math.round((riskLevel / 12) * 100));
  const riskLabel = `Risk Chain: ${riskLevel}`;
  const riskDescription = `Reward x${riskReward.toFixed(2)} • Hazard ${riskHazard}%`;
  const riskColorValue = riskColor(riskLevel);
  const showCashOut = riskLevel >= 3 && session.active;
  const xpGained = session.xpEarned ?? 0;

  const threatPct = Math.round(session.threat ?? 0);
  const cargoValue = getCargoValue(gameState, session.systemId);
  const depthButtons = Array.from({ length: 5 }, (_, i) => {
    const level = i + 1;
    const active = level === session.depth ? "active" : "";
    return `<button class="chip-btn ${active}" onclick="setMiningDepth(${level})">Z${level}</button>`;
  }).join("");

  const gridHtml = renderGrid(session.grid);
  const lastYield = session.lastYield
    ? `${session.lastYield.amount} ${session.lastYield.commodityId} (~${session.lastYield.approxValue} cr)`
    : "No ore extracted yet.";
  const drillTierPanel = renderDrillTierControls(session);

  if (session.runComplete) {
    return `
      <div class="app-root mining-shell">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Mining · Session Complete</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Extraction Complete</h1>
            <p>${session.lastMessage ?? "Claim finished."}</p>
            <p>Haul: ${lastYield}</p>
            <p class="muted">Victory returns you here; flee returns you to the system menu.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-primary btn-small" onclick="newSurvey()">New Survey</button>
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
        </footer>
      </div>
    `;
  }

  return `
    <div class="app-root mining-shell">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Mining · ${session.beltName || session.beltId || session.systemId}</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
        </div>
      </header>

      <section class="mining-stats">
        <div class="stat-pill">
          <span class="stat-label">Drills</span>
          <span class="stat-value">${session.drillsUsed ?? 0}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Depth</span>
          <span class="stat-value">Z${session.depth}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Threat</span>
          <span class="stat-value stat-risk">${threatPct}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Risk Chain</span>
          <span class="stat-value" style="color:${riskColorValue}">${riskLabel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Combo</span>
          <span class="stat-value">${comboPercent}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Ore Value</span>
          <span class="stat-value">${Math.round(cargoValue)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mining XP</span>
          <span class="stat-value">${xpGained}</span>
        </div>
      </section>

      <div class="mining-layout">
        <section class="mining-grid-card">
          <div class="card-head">
            <div>
              <p class="panel-eyebrow">Survey Grid</p>
              <h2 class="panel-title">Tap a tile to pulse and triangulate the vein</h2>
              <p class="muted">${session.lastMessage || "Drill to raise signal. Threat rises each pulse."}</p>
            </div>
            <div class="chip">Threat ${threatPct}%</div>
          </div>
          ${gridHtml}
          <div class="grid-legend">
            <span class="legend-pill legend-strong">9-10 strong</span>
            <span class="legend-pill legend-medium">4-8 medium</span>
            <span class="legend-pill legend-weak">1-3 weak</span>
            <span class="legend-pill legend-zero">0 dry</span>
            <span class="legend-pill legend-pirate">Threat triggers pirates</span>
          </div>
        </section>

        <aside class="mining-side">
          <div class="panel-card">
            <p class="label">Depth</p>
            <div class="mode-row">
              ${depthButtons}
            </div>
            <p class="muted">Each tile shows signal strength with a gradient pointing toward the vein; glow hints depth (shallow/deep/optimal).</p>
          </div>
          ${drillTierPanel}

        <div class="panel-card">
          <p class="label">Controls</p>
          <div class="mode-row">
            <button class="chip-btn" onclick="finalizeDrill()">Final Drill</button>
            <button class="chip-btn" onclick="newSurvey()">New Survey</button>
            <button class="chip-btn" onclick="leaveMining()">Leave</button>
          </div>
        </div>

        <div class="panel-card">
          <p class="label">Combo Meter</p>
          <div class="bar-bg">
            <div class="bar-fill" style="width:${comboPercent}%;"></div>
          </div>
          <p class="muted">${comboStatus}</p>
          ${
            comboThreatReduction > 0
              ? `<p class="muted">Threat -${Math.round(comboThreatReduction * 100)}% while combo is active.</p>`
              : ""
          }
        </div>

          <div class="panel-card">
            <p class="label">Threat</p>
            <div class="bar-group">
              <div class="bar-row">
                <span>Pirate Threat</span>
                <span>${threatPct}%</span>
              </div>
              <div class="bar-bg">
                <div class="bar-fill" style="width:${threatPct}%;"></div>
              </div>
            </div>
            <p class="muted">If the roll succeeds, a real pirate combat is started and threat resets to 0%.</p>
          </div>

          <div class="panel-card">
            <p class="label">Risk Chain</p>
            <div class="bar-bg">
              <div class="bar-fill" style="width:${riskBarWidth}%;background:${riskColorValue};"></div>
            </div>
            <p class="muted">${riskDescription}</p>
            ${
              showCashOut
                ? `<button class="chip-btn" onclick="cashOutMining()">Cash Out</button>`
                : `<span class="muted">Reach level 3 to cash out.</span>`
            }
          </div>

          <div class="panel-card">
            <p class="label">Last haul</p>
            <p class="value-emphasis">${lastYield}</p>
          </div>
        </aside>
      </div>

      <footer class="app-footer"></footer>
    </div>
  `;
}

