declare const nav: (screen: string, params?: Record<string, unknown>) => void;

import {
  getAvailableMissions,
  getActiveContracts,
  acceptMission,
  describeMission,
  getMissionProgress
} from "../systems/missionSystem";
import { gameState } from "../core/state";

declare const nav: (screen: string, params?: Record<string, unknown>) => void;
declare const acceptContract: (missionId: string) => void;

export function ContractsScreen(params: Record<string, unknown> = {}): string {
  const message =
    typeof params.message === "string" ? params.message : "";
  const active = getActiveContracts();
  const available = getAvailableMissions();
  const cargoLoad = Object.values(gameState.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);

  const activeList =
    active.length > 0
      ? active
          .map(
            (mission) => `
              <div class="panel-card">
                <p class="label">${mission.status}</p>
                <p class="value-inline"><strong>${mission.name}</strong></p>
                <p class="muted">${mission.description || ""}</p>
                <p class="muted">${describeMission(mission)}</p>
                <p class="muted">${getMissionProgress(mission)}</p>
              </div>
            `
          )
          .join("")
      : "<p class=\"muted\">No active missions.</p>";

  const availableList =
    available.length > 0
      ? available
          .map(
            (mission) => `
              <div class="panel-card">
                <p class="label">${mission.type}</p>
                <p class="value-inline"><strong>${mission.name}</strong></p>
                <p class="muted">${mission.description}</p>
                <p class="muted">Reward: ${formatReward(mission.reward)}</p>
                <button class="btn btn-primary" onclick="acceptContract('${mission.id}')">Accept</button>
              </div>
            `
          )
          .join("")
      : "<p class=\"muted\">No available missions.</p>";

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Contracts</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${gameState.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${gameState.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${gameState.ship.fuel}/${gameState.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${cargoLoad}/${gameState.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${gameState.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Contracts</h1>
          ${message ? `<p class="muted">${message}</p>` : ""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${activeList}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">${availableList}</div>
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

function formatReward(
  reward?: { credits?: number; rep?: Record<string, number> }
): string {
  if (!reward) return "None";
  const parts: string[] = [];
  if (reward.credits) parts.push(`${reward.credits} credits`);
  if (reward.rep) {
    const repText = Object.entries(reward.rep)
      .map(([faction, value]) => `${faction} ${value > 0 ? "+" : ""}${value}`)
      .join(", ");
    parts.push(`Rep: ${repText}`);
  }
  return parts.join(" | ") || "None";
}

declare global {
  interface Window {
    acceptContract: (missionId: string) => void;
  }
}

window.acceptContract = (missionId: string) => {
  const result = acceptMission(missionId);
  const message = result.success ? "Mission accepted." : result.reason || "Unable to accept.";
  nav("contracts", { message });
};
