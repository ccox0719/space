import { getCurrentSystem, getNeighbors } from "../systems/travelSystem";
import { getBaseInSystem, getBaseTag } from "../systems/baseAssaultSystem";
import type { NeighborRoute } from "../systems/travelSystem";
import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";

declare const nav: (screen: string) => void;

export function TravelScreen(): string {
  const current = getCurrentSystem();
  const neighbors = getNeighbors();
  const cargoLoad = Object.values(gameState.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const riskSample = neighbors
    .map(({ profile }) => profile.hazardChance)
    .reduce((max, r) => Math.max(max, r), 0);
  const riskPercent = Math.round((riskSample || 0) * 100);

  if (!current) {
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Loading system...</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Travel</h1>
            <p>Current system data unavailable.</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Back to Main</button>
        </nav>
      </div>
    `;
  }

  const currentBase = current ? getBaseInSystem(current.id) : null;
  const baseTag = getBaseTag(currentBase);
  const baseCard = currentBase
    ? `
      <div class="panel-card">
        <p class="label">${baseTag}</p>
        <p class="muted">${currentBase.description}</p>
        <button class="btn btn-danger" onclick="attackPirateBase('${currentBase.id}')">
          Attack Pirate Base (Tier ${currentBase.tier})
        </button>
      </div>
    `
    : "";
  const mapDisplay = current ? renderTravelMap(current, neighbors) : "";
  const neighborCards =
    neighbors.length === 0
      ? `<div class="panel-card"><p class="label">Connections</p><p class="value-inline">No nearby systems detected.</p></div>`
      : neighbors
          .map(({ system, route, profile }) => {
            const securityLabel = formatSecurity(system.security);
            const tagNotes = formatTagNotes(system);
            const riskText = formatRisk(profile.hazardChance);
            const fuelCost = `${profile.fuelCost} fuel`;
            const travelTime = `${profile.travelTime} turn${profile.travelTime === 1 ? "" : "s"}`;
            const laneLabel = formatLaneType(route.laneType);
            const distanceText = `Distance: ${route.distance}`;
            return `
              <div class="panel-card">
                <p class="label">${securityLabel}${tagNotes.length ? ` - ${tagNotes.join(", ")}` : ""}</p>
                <p class="value-inline"><strong>${system.name}</strong></p>
                <p class="muted">${laneLabel} - ${distanceText}</p>
                <p class="muted">${fuelCost} - ${travelTime} - Risk: ${riskText}</p>
                <button class="btn btn-primary" onclick="travelToSystem('${system.id}')">Jump to ${system.name}</button>
              </div>
            `;
          })
          .join("");

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${current.name}</span>
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
          <span class="stat-label">Risk</span>
          <span class="stat-value stat-risk">${riskPercent}%</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${current.description}</p>
          <div class="panel-row">
            ${neighborCards}
          </div>
          <div class="panel-card">
            <p class="label">Local View</p>
            ${mapDisplay}
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${baseCard}
          <div class="panel-card">
            <p class="label">Legend</p>
            <p class="muted">
              ▲ Frontier (pirate prone) • ⛏ Mining belts • ◆ Trade hub checks • ✝ Unity inspections
            </p>
          </div>
        </section>
      </main>

      <nav class="app-actions">
        <button class="btn btn-ghost" onclick="nav('main')">Back</button>
        <button class="btn btn-ghost" onclick="nav('market')">Market</button>
        <button class="btn btn-ghost" onclick="nav('ship')">Ship</button>
        <button class="btn btn-ghost" onclick="nav('travel')">Refresh</button>
      </nav>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Main</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Ship</button>
        <button class="btn btn-ghost btn-small" onclick="nav('mining')">Mining</button>
      </footer>
    </div>
  `;
}

function formatSecurity(security: string): string {
  switch (security) {
    case "high":
      return "High sec";
    case "medium":
      return "Mid sec";
    case "low":
      return "Low sec";
    default:
      return `${security || "Unknown"} sec`;
  }
}

function formatTagNotes(system: { tags: string[]; faction: string }): string[] {
  const notes: string[] = [];
  if (system.tags.includes("frontier")) {
    notes.push("▲ Frontier");
  }
  if (system.tags.includes("mining_belt")) {
    notes.push("⛏ Mining");
  }
  if (system.tags.includes("checkpoint") || system.tags.includes("trade_lane")) {
    notes.push("◆ Trade hub");
  }
  if (system.tags.includes("restricted") || system.faction === "unity_church") {
    notes.push("✝ Unity");
  }
  return notes;
}

function formatRisk(chance: number): string {
  if (chance < 0.35) {
    return "Safe";
  }
  if (chance < 0.65) {
    return "Moderate";
  }
  return "Hazardous";
}

function formatLaneType(laneType: "core_lane" | "frontier_lane" | "wildspace"): string {
  switch (laneType) {
    case "core_lane":
      return "Core lane";
    case "frontier_lane":
      return "Frontier lane";
    default:
      return "Wildspace";
  }
}

function renderTravelMap(
  current: ReturnType<typeof getCurrentSystem>,
  neighbors: NeighborRoute[]
): string {
  if (!current) return `<p class="muted">Map data unavailable.</p>`;
  const mapWidth = 320;
  const mapHeight = 200;
  const padding = 16;
  const nodes = new Map<string, ReturnType<typeof getCurrentSystem>>();
  const addNode = (system: ReturnType<typeof getCurrentSystem>) => {
    if (system && system.coords) {
      nodes.set(system.id, system);
    }
  };
  addNode(current);
  neighbors.forEach(({ system }) => addNode(system));

  if (!nodes.size) {
    return `<p class="muted">No coordinate data to render.</p>`;
  }

  const layout = Array.from(nodes.values()).map((system) => ({
    id: system.id,
    name: system.name,
    x: system.coords?.x ?? 0,
    y: system.coords?.y ?? 0
  }));
  const xs = layout.map((node) => node.x);
  const ys = layout.map((node) => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;

  const toSvgX = (value: number) =>
    padding + ((value - minX) / rangeX) * (mapWidth - padding * 2);
  const toSvgY = (value: number) =>
    mapHeight - (padding + ((value - minY) / rangeY) * (mapHeight - padding * 2));

  const layoutMap = new Map(
    layout.map((node) => [
      node.id,
      {
        ...node,
        sx: toSvgX(node.x),
        sy: toSvgY(node.y)
      }
    ])
  );

  const currentPoint = layoutMap.get(current.id);
  if (!currentPoint) return `<p class="muted">Current system coordinates missing.</p>`;

  const lines = neighbors
    .map(({ system, route }) => {
      const target = layoutMap.get(system.id);
      if (!target) return "";
      return `<line x1="${currentPoint.sx.toFixed(1)}" y1="${currentPoint.sy.toFixed(1)}" x2="${target.sx.toFixed(
        1
      )}" y2="${target.sy.toFixed(1)}" stroke="${getLaneColor(route.laneType)}" stroke-width="2" stroke-linecap="round" opacity="0.9"></line>`;
    })
    .join("");

  const nodesSvg = Array.from(layoutMap.values())
    .map((node) => {
      const isCurrent = node.id === current.id;
      const label = node.name.length > 16 ? `${node.name.slice(0, 14)}…` : node.name;
      return `
        <g>
          <circle
            cx="${node.sx.toFixed(1)}"
            cy="${node.sy.toFixed(1)}"
            r="${isCurrent ? 6 : 5}"
            fill="${isCurrent ? "#4CE6C3" : "#ffffff"}"
            stroke="#0b1116"
            stroke-width="1.5"
          ></circle>
          <text x="${node.sx.toFixed(1)}" y="${(node.sy - 10).toFixed(1)}" text-anchor="middle" font-size="11" fill="#ffffff">${label}</text>
        </g>
      `;
    })
    .join("");

  return `
    <div class="travel-map" style="max-width:${mapWidth}px;margin:0 auto;">
      <svg width="${mapWidth}" height="${mapHeight}" viewBox="0 0 ${mapWidth} ${mapHeight}" role="img" aria-label="Local system map">
        ${lines}
        ${nodesSvg}
      </svg>
    </div>
  `;
}

function getLaneColor(laneType: "core_lane" | "frontier_lane" | "wildspace"): string {
  switch (laneType) {
    case "core_lane":
      return "#4ce6c3";
    case "frontier_lane":
      return "#ffb347";
    default:
      return "#ff7a7a";
  }
}
