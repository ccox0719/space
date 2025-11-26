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
import { getStarMap, getHopDistance } from "../core/map";

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
              const systemId = resolveMissionSystemId(mission);
              const systemName = formatMissionSystem(systemId);
              const systemRange = formatMissionRange(systemId);
              const system = getSystemById(systemId ?? "");
              const regionLabel = system?.region
                ? `Region: ${sanitizeKey(system.region)}`
                : "";
              const keywordList =
                system?.tags?.length > 0
                  ? `Keywords: ${system.tags
                      .map((tag) => sanitizeKey(tag))
                      .join(", ")}`
                  : "";
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
                    <span>System: ${systemName}${systemRange ? ` - ${systemRange}` : ""}</span>
                    ${regionLabel ? `<span>${regionLabel}</span>` : ""}
                    ${keywordList ? `<span>${keywordList}</span>` : ""}
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
  const groupedAvailable = available.reduce((map, mission) => {
    const systemId = resolveMissionSystemId(mission) ?? "unknown";
    const key = systemId;
    const items = map.get(key) ?? [];
    items.push(mission);
    map.set(key, items);
    return map;
  }, new Map<string, typeof available>());

  const formatAvailableSection = (systemId: string, missions: typeof available) => {
    if (!missions.length) return "";
    const system = getSystemById(systemId);
    const regionLabel = system?.region ? `Region: ${sanitizeKey(system.region)}` : "";
    const keywordList = system?.tags?.length
      ? `Keywords: ${system.tags.map((tag) => sanitizeKey(tag)).join(", ")}`
      : "";
    const title = system ? system.name : "Unknown Region";
    return `
      <div class="contract-list contract-section">
        <h3 class="panel-title tiny">${title}</h3>
        ${missions
          .map((mission) => {
            const rowClasses = ["contract-row"];
            if (selectionForRows.includes(mission.id)) {
              rowClasses.push("contract-row--active");
            }
            const range = formatMissionRange(systemId);
            return `
              <article class="${rowClasses.join(" ")}" onclick="acceptContract('${mission.id}')">
                <div class="contract-row__main">
                  <span class="contract-row__name">${mission.name}</span>
                  <span class="contract-type">${mission.type}</span>
                </div>
                <p class="muted">${mission.description}</p>
                <div class="contract-row__info">
                  <span>System: ${title}${range ? ` - ${range}` : ""}</span>
                  ${regionLabel ? `<span>${regionLabel}</span>` : ""}
                  ${keywordList ? `<span>${keywordList}</span>` : ""}
                  <span>Reward: ${formatReward(mission.reward)}</span>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    `;
  };

  const availableList = groupedAvailable.size
    ? Array.from(groupedAvailable.entries())
        .map(([systemId, missions]) => formatAvailableSection(systemId, missions))
        .join("")
    : "<p class=\"muted\">No available missions.</p>";

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Contracts</span>
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

function formatMissionRange(systemId?: string): string {
  if (!systemId) return "";
  const map = getStarMap();
  if (!map) return "";
  const hops = getHopDistance(map, gameState.location.systemId, systemId);
  if (hops == null) return "Uncharted";
  if (hops === 0) return "Here";
  return `${hops} jump${hops === 1 ? "" : "s"} away`;
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

function sanitizeKey(value: string): string {
  return value
    .split("_")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function resolveMissionSystemId(mission: { requirements?: Record<string, any>; description?: string }): string | undefined {
  const req = mission.requirements || {};
  if (req.travel?.systemId) return req.travel.systemId;
  if (req.deliver?.systemId) return req.deliver.systemId;
  if (req.combat?.systemId) return req.combat.systemId;
  if (Array.isArray(req.multiTravel) && req.multiTravel.length) {
    const first = req.multiTravel[0];
    return typeof first === "string" ? first : first?.systemId;
  }
  if (mission.description) {
    return findSystemIdByDescription(mission.description);
  }
  return undefined;
}

function findSystemIdByDescription(description: string): string | undefined {
  const map = getStarMap();
  if (!map) return undefined;
  const normalized = description.toLowerCase();
  for (const node of map.nodes) {
    if (!node.name) continue;
    if (normalized.includes(node.name.toLowerCase())) return node.id;
  }
  return undefined;
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

