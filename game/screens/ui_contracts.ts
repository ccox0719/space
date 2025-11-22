declare const nav: (screen: string, params?: Record<string, unknown>) => void;

import {
  getAvailableMissions,
  getActiveContracts,
  acceptMission,
  abandonMission,
  describeMission,
  getMissionProgress
} from "../systems/missionSystem";
import { getWeaponById } from "../systems/weaponSystem";
import { getSystemById } from "../core/engine";
import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";

function parseMissionIds(value: unknown): string[] {
  if (!value) return [];
  if (Array.isArray(value)) {
    return value.filter((item): item is string => typeof item === "string");
  }
  if (typeof value === "string") {
    try {
      const parsed = JSON.parse(value);
      if (Array.isArray(parsed)) {
        return parsed.filter((item): item is string => typeof item === "string");
      }
    } catch {
      return value
        .split(",")
        .map((entry) => entry.trim())
        .filter(Boolean);
    }
  }
  return [];
}

export function ContractsScreen(params: Record<string, unknown> = {}): string {
  const message =
    typeof params.message === "string" ? params.message : "";
  const active = getActiveContracts();
  const available = getAvailableMissions();
  const cargoLoad = Object.values(gameState.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const selectionCandidates = parseMissionIds(params.selectedMissionIds);
  const selectedMissionId =
    selectionCandidates[0] ??
    (typeof params.selectedMissionId === "string" ? params.selectedMissionId : "");

  const activeList =
    active.length > 0
      ? `
        <div class="contract-list contract-section">
          ${active
            .map((mission) => {
              const req = mission.requirements || {};
              const systemName = formatMissionSystem(req.travel?.systemId);
              return `
                <article class="contract-row contract-row--active" onclick="abandonMission('${mission.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${mission.name}</span>
                    <span class="contract-type">${mission.type}</span>
                  </div>
                  ${mission.description ? `<p class="muted">${mission.description}</p>` : ""}
                  <div class="contract-row__meta">
                    <span>${describeMission(mission)}</span>
                    <span>${getMissionProgress(mission)}</span>
                  </div>
                  <div class="contract-row__info">
                    <span>System: ${systemName}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      `
      : "<p class=\"muted\">No active missions.</p>";

  const selectionForRows = selectedMissionId
    ? [selectedMissionId]
    : available[0]
    ? [available[0].id]
    : [];
  const availableList =
    available.length > 0
      ? `
        <div class="contract-list">
          ${available
            .map((mission) => {
              const systemName = formatMissionSystem(mission.requirements?.travel?.systemId);
              const rowClasses = ["contract-row"];
              if (selectionForRows.includes(mission.id)) {
                rowClasses.push("contract-row--active");
              }
              return `
                <article class="${rowClasses.join(" ")}" onclick="acceptContract('${mission.id}')">
                  <div class="contract-row__main">
                    <span class="contract-row__name">${mission.name}</span>
                    <span class="contract-type">${mission.type}</span>
                  </div>
                  <p class="muted">${mission.description}</p>
                  <div class="contract-row__info">
                    <span>System: ${systemName}</span>
                    <span>Reward: ${formatReward(mission.reward)}</span>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      `
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
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
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
        <section class="data-panel contract-section">
          <h1 class="panel-title">Contracts</h1>
          ${message ? `<p class="muted">${message}</p>` : ""}
          <h2 class="panel-title">Active</h2>
          <div class="panel-row">${activeList}</div>
          <h2 class="panel-title">Available</h2>
          <div class="panel-row">
            ${availableList}
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

function formatMissionSystem(systemId?: string): string {
  if (!systemId) return "Unknown";
  const system = getSystemById(systemId);
  return system?.name ? `<strong>${system.name}</strong>` : systemId;
}

function formatReward(
  reward?: { credits?: number; rep?: Record<string, number>; weapon?: string }
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
  if (reward.weapon) {
    const weaponName = getWeaponById(reward.weapon)?.name || reward.weapon;
    parts.push(`Weapon: ${weaponName}`);
  }
  return parts.join(" | ") || "None";
}

declare global {
  interface Window {
    acceptContract: (missionId: string) => void;
    abandonMission: (missionId: string) => void;
  }
}

window.acceptContract = (missionId: string) => {
  const result = acceptMission(missionId);
  const message = result.success ? "Mission accepted." : result.reason || "Unable to accept.";
  nav("contracts", { message });
};

window.abandonMission = (missionId: string) => {
  const result = abandonMission(missionId);
  const message = result.success ? "Mission abandoned." : result.reason || "Unable to abandon.";
  nav("contracts", { message });
};

