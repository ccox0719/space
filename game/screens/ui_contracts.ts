declare const nav: (screen: string, params?: Record<string, unknown>) => void;

import {
  getAvailableMissions,
  getActiveContracts,
  acceptMission,
  abandonMission,
  describeMission,
  getMissionProgress,
  getMissionById
} from "../systems/missionSystem";
import type { MissionTemplate } from "../systems/missionSystem";
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

  const highlightedMission =
    available.find((mission) => mission.id === selectedMissionId) ?? available[0];
  const highlightSystemId = highlightedMission
    ? resolveMissionSystemId(highlightedMission)
    : undefined;
  const highlightRange = formatMissionRange(highlightSystemId);
  const highlightSummary = highlightedMission
    ? `${highlightedMission.name}${highlightRange ? ` · ${highlightRange}` : ""}`
    : "";
  const contractTicker = buildContractTicker(active.length, available.length, highlightSummary);

  const activeList =
    active.length > 0
      ? `
        <div class="contract-list contract-section">
          ${active
            .map((mission) => {
              const req = mission.requirements || {};
              const systemId = resolveMissionSystemId(mission);
              const flavorText = getMissionFlavor(mission);
              const rewardBadges = formatRewardBadges(mission.reward);
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
                  ${flavorText ? `<div class="contract-row__flavor">${flavorText}</div>` : ""}
                  <div class="contract-row__info">
                    <span>System: ${systemName}${systemRange ? ` - ${systemRange}` : ""}</span>
                    ${regionLabel ? `<span>${regionLabel}</span>` : ""}
                    ${keywordList ? `<span>${keywordList}</span>` : ""}
                    ${
                      systemId
                        ? `<button class="btn btn-ghost btn-small" onclick="event.stopPropagation(); focusContractTravel('${systemId}')">Travel here</button>`
                      : ""
                    }
                  </div>
                  <div class="contract-row__badges">${rewardBadges}</div>
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
                  const flavorText = getMissionFlavor(mission);
                  const rewardBadges = formatRewardBadges(mission.reward);
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
                      ${flavorText ? `<div class="contract-row__flavor">${flavorText}</div>` : ""}
                      <div class="contract-row__badges">${rewardBadges}</div>
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

      <div class="contract-ticker">${contractTicker}</div>

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

const MISSION_FLAVOR_TAGS: Record<string, string> = {
  delivery: "Cargo confidence",
  travel: "Navigation run",
  combat: "High-alert strike",
  patrol: "Perimeter sweep",
  escort: "Trusted escort",
  story: "Story beat",
  collection: "Scavenger hunt",
  clue: "Signal chase",
  exploration: "Chart the unknown",
  mining: "Ore haul",
  default: "Field work"
};

function getMissionFlavor(mission: { type?: string; requirements?: Record<string, unknown> }): string {
  const req = mission.requirements as
    | {
        failureAfterTurns?: number;
        combat?: unknown;
        deliver?: unknown;
        multiTravel?: unknown;
      }
    | undefined;
  const hints: string[] = [];
  if (req?.failureAfterTurns) {
    const turns = req.failureAfterTurns;
    hints.push(`${turns} turn${turns === 1 ? "" : "s"} left`);
  }
  if (req?.combat) hints.push("Combat ready");
  if (req?.deliver) hints.push("Cargo run");
  if (req?.multiTravel && Array.isArray(req.multiTravel) && req.multiTravel.length > 1) {
    hints.push("Multi-hop sweep");
  }
  const base = MISSION_FLAVOR_TAGS[mission.type ?? ""] ?? MISSION_FLAVOR_TAGS.default;
  return hints.length ? `${hints.join(" · ")} · ${base}` : base;
}

function formatRewardBadges(reward?: MissionTemplate["reward"]): string {
  if (!reward) {
    return '<span class="reward-badge reward-badge--none">No extra rewards</span>';
  }
  const badges: string[] = [];
  if (typeof reward.credits === "number") {
    const label = `${reward.credits.toLocaleString()} credits`;
    badges.push(`<span class="reward-badge reward-badge--credits">${label}</span>`);
  }
  if (reward.rep) {
    Object.entries(reward.rep).forEach(([faction, delta]) => {
      const sign = delta >= 0 ? "+" : "";
      badges.push(
        `<span class="reward-badge reward-badge--rep">${sanitizeKey(faction)} ${sign}${delta}</span>`
      );
    });
  }
  if (reward.weapon) {
    const weaponName = getWeaponById(reward.weapon)?.name || reward.weapon;
    badges.push(`<span class="reward-badge reward-badge--weapon">${weaponName}</span>`);
  }
  if (!badges.length) {
    return '<span class="reward-badge reward-badge--none">No extra rewards</span>';
  }
  return badges.join("");
}

function buildContractTicker(
  activeCount: number,
  availableCount: number,
  highlightSummary?: string
): string {
  const fragments: string[] = [];
  if (activeCount) {
    fragments.push(`${activeCount} active mission${activeCount === 1 ? "" : "s"}`);
  } else {
    fragments.push("Board is calm");
  }
  if (availableCount) {
    fragments.push(`${availableCount} fresh lead${availableCount === 1 ? "" : "s"}`);
  } else {
    fragments.push("No new leads");
  }
  if (highlightSummary) {
    fragments.push(`Highlight: ${highlightSummary}`);
  }
  return fragments.join(" · ");
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
    focusContractTravel: (systemId: string) => void;
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

window.focusContractTravel = (systemId: string) => {
  if (!systemId) return;
  nav("travel", { focusTargetId: systemId });
};

