import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import { performMiningAction, endMiningSession } from "../systems/miningSystem";
import { navigation } from "../core/navigation";
import { getCargoValue } from "../systems/economySystem";

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    mineCareful: () => void;
    mineStandard: () => void;
    mineOvercharge: () => void;
    leaveMining: () => void;
  }
}

window.leaveMining = () => {
  endMiningSession(gameState);
  navigation.go("main");
};

function mineWith(mode: "careful" | "standard" | "overcharge") {
  const result = performMiningAction(gameState, mode);
  if (result?.pirateEncountered) {
    return;
  }
  navigation.go("mining");
}

window.mineCareful = () => mineWith("careful");
window.mineStandard = () => mineWith("standard");
window.mineOvercharge = () => mineWith("overcharge");

export function MiningScreen(): string {
  const session = gameState.miningSession;
  if (!session) {
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Mining</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">No Active Mining Session</h1>
            <p>There is no ongoing mining belt right now.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;
  }
  if (!session.active) {
    const summary = session.lastYield
      ? `Last haul: ${session.lastYield.amount} ${session.lastYield.commodityId} (~${session.lastYield.approxValue} cr)${
          session.lastYield.rareFind ? ` + rare ${session.lastYield.rareFind.amount} ${session.lastYield.rareFind.id}` : ""
        }`
      : "Session ended.";
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Mining</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Mining Session Ended</h1>
            <p>${session.lastMessage || "The belt is no longer stable."}</p>
            <p>${summary}</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Return</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;
  }

  const cargoValue = getCargoValue(gameState, session.systemId);
  const stabilityPercent = Math.max(
    0,
    Math.round((session.stability / Math.max(1, session.maxStability)) * 100)
  );
  const lastYield = session.lastYield
    ? `<p>Last haul: ${session.lastYield.amount} ${session.lastYield.commodityId} (~${session.lastYield.approxValue} cr)${
        session.lastYield.rareFind ? ` + rare ${session.lastYield.rareFind.amount} ${session.lastYield.rareFind.id}` : ""
      }</p>`
    : "";
  const infoLine = session.lastMessage
    ? `<p class="muted">${session.lastMessage}</p>`
    : "";

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Mining — ${session.beltName || session.beltId || session.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Stability</span>
          <span class="stat-value">${stabilityPercent}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Pirate Risk</span>
          <span class="stat-value stat-risk">${(session.currentPirateChance * 100).toFixed(0)}%</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Hold Value</span>
          <span class="stat-value">${Math.round(cargoValue)} cr</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Mines</span>
          <span class="stat-value">${session.minesTaken}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Mining Ops</h1>
          <p class="muted">Total mined: ${Math.round(session.totalValueMined)} cr</p>
          ${lastYield}
          ${infoLine}
          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Stability</p>
              <p class="value-emphasis">${stabilityPercent}%</p>
            </div>
            <div class="panel-card">
              <p class="label">Pirate Risk</p>
              <p class="value-emphasis warning">${(session.currentPirateChance * 100).toFixed(0)}%</p>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Drill Modes</p>
            <div class="app-actions">
              <button class="btn btn-primary" onclick="mineCareful()">Careful</button>
              <button class="btn btn-primary" onclick="mineStandard()">Standard</button>
              <button class="btn btn-danger" onclick="mineOvercharge()">Overcharge</button>
              <button class="btn btn-ghost" onclick="leaveMining()">Leave Belt</button>
            </div>
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('travel')" id="navTravel">Travel</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')" id="navMarket">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')" id="navShip">Ship</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `;
}
