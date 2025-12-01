import { getCurrentSystem, getNeighbors } from "../systems/travelSystem";
import { getBaseInSystem, getBaseTag } from "../systems/baseAssaultSystem";
import type { NeighborRoute } from "../systems/travelSystem";
import { gameState } from "../core/state";
import { getSystemById } from "../core/engine";
import { navigation, type ActiveRoute } from "../core/navigation";
import {
  getStarMap,
  getVisibleNodeDepths,
  getAdjacentNodes as getMapAdjacentNodes,
  shortestPath,
  laneKey,
  type MapZoomLevel,
  type StarLane,
  type StarMap,
  type StarNode
} from "../core/map";

const FACTION_HINTS: Record<string, string> = {
  pirate:
    "Sensors pick up razor-thin kinematic volleys—expect raiders and brawlers that favor heavy hull breaks.",
  raider:
    "Raiders pressure forward with kinetic + explosive clusters. Keep shields topped and aim for front rows.",
  ghost: "Ghost Fleet whispers with disruptives—jam vs. shields, then focus on energy weapons.",
  corsair:
    "Corsairs hang back with energy/lance beams. Strike their hulls quickly or they will melt your shields."
};

function getFactionHint(tags: string[]): string {
  for (const tag of tags) {
    if (FACTION_HINTS[tag]) {
      return FACTION_HINTS[tag];
    }
  }
  return "";
}

declare const nav: (screen: string) => void;

declare global {
  interface Window {
    setMapZoom?: (zoom: MapZoomLevel) => void;
    focusRoute?: (systemId: string) => void;
  }
}

window.setMapZoom = (zoom: MapZoomLevel) => {
  navigation.setZoom(zoom);
};

window.focusRoute = (systemId: string) => {
  navigation.go("travel", { ...navigation.params, focusTargetId: systemId });
};

export function TravelScreen(): string {
  const current = getCurrentSystem();
  const neighbors = getNeighbors();
  const zoom = navigation.zoom || "local";
  const focusTargetId =
    typeof navigation.params.focusTargetId === "string" ? navigation.params.focusTargetId : "";
  const activeRoute = navigation.activeRoute;
  const nextRouteNodeId = activeRoute?.nodes[activeRoute.currentIndex + 1];
  const routeDescriptor =
    activeRoute && activeRoute.nodes.length > 1
      ? activeRoute.nodes.map((id) => getSystemById(id)?.name ?? id).join(" → ")
      : "";
  const cargoLoad = Object.values(gameState.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const riskSample = neighbors
    .map(({ profile }) => profile.hazardChance)
    .reduce((max, r) => Math.max(max, r), 0);
  const riskPercent = Math.round((riskSample || 0) * 100);
  const credits = gameState.player.credits;
  const wanted = gameState.player.wanted;
  const headerStats = `
    <section class="header-stats">
      <div class="header-stat">
        <i class="bi bi-cash-stack"></i>
        <div>
          <span>Credits</span>
          <strong>${credits}</strong>
        </div>
      </div>
      <div class="header-stat">
        <span class="pill-icon icon-cargo"></span>
        <div>
          <span>Cargo</span>
          <strong>${cargoLoad}/${gameState.ship.cargoCapacity}</strong>
        </div>
      </div>
      <div class="header-stat">
        <i class="bi bi-exclamation-triangle"></i>
        <div>
          <span>Risk</span>
          <strong>${riskPercent}%</strong>
        </div>
      </div>
      <div class="header-stat">
        <span class="pill-icon icon-danger"></span>
        <div>
          <span>Wanted</span>
          <strong>${wanted}</strong>
        </div>
      </div>
    </section>
  `;

  if (!current) {
    return `
      <div class="app-root">
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Loading system...</span>
          </div>
        </header>
        ${headerStats}
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
  const intelHintText = getFactionHint(current.tags || []);
  const intelHintCard = intelHintText
    ? `<div class="panel-card intel-hint">${intelHintText}</div>`
    : "";
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
  const mapDisplay = current
    ? renderTravelMap(current, neighbors, zoom, focusTargetId, activeRoute)
    : "";
  const neighborCards =
    neighbors.length === 0
      ? `<p class="muted">No nearby systems detected.</p>`
          : neighbors
              .map(({ system, route, profile }) => {
                const isFocused = system.id === focusTargetId;
                const isRouteTarget = system.id === nextRouteNodeId;
                const securityLabel = formatSecurity(system.security);
                const tagNotes = formatTagNotes(system);
                const riskText = formatRisk(profile.hazardChance);
                const fuelCost = `${profile.fuelCost} fuel`;
                const travelTime = `${profile.travelTime} turn${profile.travelTime === 1 ? "" : "s"}`;
                const laneLabel = formatLaneType(route.laneType);
                const distanceText = `Distance: ${route.distance}`;
                const tagLine = tagNotes.join(" | ");
                const rowClasses = ["travel-row"];
                if (isFocused || isRouteTarget) rowClasses.push("travel-row--focused");
            return `
              <article class="${rowClasses.join(" ")}">
                <div class="travel-row__main">
                  <span class="travel-row__name">${system.name}</span>
                  <span class="travel-row__label">${securityLabel}</span>
                </div>
                <div class="travel-row__meta">
                  <div class="travel-row__info">
                    <span>${laneLabel}</span>
                    <span>${distanceText}</span>
                  </div>
                  <span class="travel-row__label">${fuelCost} | ${travelTime} | Risk: ${riskText}</span>
                </div>
                <div class="travel-actions">
                  <button class="btn btn-ghost" onclick="window.focusRoute('${system.id}')">
                    Focus route
                  </button>
                  <button class="btn btn-primary" onclick="window.travelToSystem('${system.id}')">Jump to ${system.name}</button>
                </div>
                <span class="travel-row__label">${tagLine}</span>
              </article>
            `;
          })
          .join("");


  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Travel — ${current.name}</span>
        </div>
      </header>

      ${headerStats}

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Travel</h1>
          <p class="muted">${current.description}</p>
          ${intelHintCard}
          <div class="travel-list">
            ${neighborCards}
          </div>
          <div class="panel-card">
            <div class="travel-zoom-toggle">
              <span class="label">Map View</span>
              <div class="zoom-toggle__pills">
                <button class="btn btn-pill ${zoom === "local" ? "btn-pill--active" : ""}" onclick="window.setMapZoom('local')">Local</button>
                <button class="btn btn-pill ${zoom === "sector" ? "btn-pill--active" : ""}" onclick="window.setMapZoom('sector')">Sector</button>
              </div>
            </div>
            ${mapDisplay}
            ${routeDescriptor ? `<p class="muted">Active route: ${routeDescriptor}</p>` : ""}
            <div class="panel-card">
              <p class="label">Map Labels</p>
              <p class="muted">
                Each icon shows the system name; tap “Focus route” to zoom to that destination.
              </p>
              <ul class="label-list">
                ${neighbors
                  .map(
                    ({ system, profile }) =>
                      `<li>${system.name} — ${profile.travelTime} turn${profile.travelTime === 1 ? "" : "s"} / ${profile.fuelCost} fuel</li>`
                  )
                  .join("")}
              </ul>
            </div>
            <p class="muted">Line colors: <span class="muted-bold">Core</span>=green <span class="muted-bold">Frontier</span>=orange <span class="muted-bold">Wild</span>=red</p>
          </div>
          ${baseCard}
          <div class="panel-card">
            <p class="label">Legend</p>
            <p class="muted">
              Frontier (pirate prone) | Mining belts | Trade hub checks | Unity inspections
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
    notes.push("Frontier");
  }
  if (system.tags.includes("mining_belt")) {
    notes.push("Mining");
  }
  if (system.tags.includes("checkpoint") || system.tags.includes("trade_lane")) {
    notes.push("Trade hub");
  }
  if (system.tags.includes("restricted") || system.faction === "unity_church") {
    notes.push("Unity");
  }
  if (notes.length) {
    return notes;
  }
  // Fallback: show raw tags prettified so we never display "No special tags".
  return (system.tags || []).map(formatTagLabel);
}

function formatTagLabel(tag: string): string {
  switch (tag) {
    case "core":
      return "Core";
    case "border":
      return "Border";
    case "fringe":
      return "Fringe";
    case "pirate":
      return "Pirate Space";
    case "wildspace":
      return "Wildspace";
    case "mining_belt":
      return "Mining";
    case "black_market":
      return "Black Market";
    case "trade_lane":
      return "Trade Lane";
    case "checkpoint":
      return "Checkpoint";
    case "navy_base":
      return "Navy Base";
    case "anomaly":
      return "Anomaly";
    case "salvage":
      return "Salvage";
    default:
      return tag
        .split("_")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
  }
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
  neighbors: NeighborRoute[],
  zoom: MapZoomLevel,
  focusTargetId?: string,
  activeRoute?: ActiveRoute | null
): string {
  if (!current) return `<p class="muted">Map data unavailable.</p>`;

  const mapWidth = 320;
  const mapHeight = 200;
  const padding = 16;
  const viewBoxPadding = 36;
  const labelOffsetX = 8;
  const labelOffsetY = 8;
  const map = getStarMap();
  const focusPath = map && focusTargetId ? shortestPath(map, current.id, focusTargetId) : [];
  const missionRouteNodes = activeRoute?.nodes ?? [];

  const labelSet = new Set<string>([current.id]);
  if (focusTargetId) labelSet.add(focusTargetId);
  const adjacent = map
    ? getMapAdjacentNodes(map, current.id)
    : neighbors.map(({ system }) => system.id);
  adjacent.forEach((id) => labelSet.add(id));
  missionRouteNodes.forEach((id) => labelSet.add(id));
  focusPath.forEach((id) => labelSet.add(id));

  const laneTypeFromRoute = (lane: NeighborRoute["route"]): StarLane["type"] => {
    return lane.laneType === "core_lane" ? "core" : lane.laneType === "frontier_lane" ? "frontier" : "wild";
  };

  const visibleDepths = map ? getVisibleNodeDepths(map, current.id, zoom) : null;
  const nodeLayouts: Array<StarNode & { depth: number }> = [];
  const laneSegments: Array<StarLane & { depth: number }> = [];

  if (map && visibleDepths) {
    const byId = new Map<string, StarNode>(map.nodes.map((node) => [node.id, node]));
    const visibleSet = new Set(visibleDepths.keys());
    visibleDepths.forEach((depth, id) => {
      const node = byId.get(id);
      if (!node) return;
      nodeLayouts.push({ ...node, depth });
    });
    map.lanes
      .filter((lane) => visibleSet.has(lane.from) && visibleSet.has(lane.to))
      .forEach((lane) => {
        const depth = Math.max(visibleDepths.get(lane.from) ?? 0, visibleDepths.get(lane.to) ?? 0);
        laneSegments.push({ ...lane, depth });
      });
  } else {
    const seen = new Set<string>();
    nodeLayouts.push({
      id: current.id,
      name: current.name,
      x: current.coords?.x ?? 0,
      y: current.coords?.y ?? 0,
      tags: current.tags ?? [],
      depth: 0
    });
    seen.add(current.id);
    neighbors.forEach(({ system, route }) => {
      if (seen.has(system.id)) return;
      nodeLayouts.push({
        id: system.id,
        name: system.name,
        x: system.coords?.x ?? 0,
        y: system.coords?.y ?? 0,
        tags: system.tags ?? [],
        depth: 1
      });
      seen.add(system.id);
      laneSegments.push({
        from: current.id,
        to: system.id,
        type: laneTypeFromRoute(route),
        distance: route.distance,
        depth: 1
      });
    });
  }

  if (!nodeLayouts.length) {
    return `<p class="muted">No coordinate data to render.</p>`;
  }

  const xs = nodeLayouts.map((node) => node.x);
  const ys = nodeLayouts.map((node) => node.y);
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs);
  const minY = Math.min(...ys);
  const maxY = Math.max(...ys);
  const rangeX = maxX - minX || 1;
  const rangeY = maxY - minY || 1;

  const toSvgX = (value: number) => padding + ((value - minX) / rangeX) * (mapWidth - padding * 2);
  const toSvgY = (value: number) =>
    mapHeight - (padding + ((value - minY) / rangeY) * (mapHeight - padding * 2));

  const layoutMap = new Map(
    nodeLayouts.map((node) => [
      node.id,
      {
        ...node,
        sx: toSvgX(node.x),
        sy: toSvgY(node.y)
      }
    ])
  );

  const visibleSet = new Set(nodeLayouts.map((node) => node.id));
  const activeNodeSet = new Set<string>(missionRouteNodes);
  focusPath.forEach((id) => activeNodeSet.add(id));
  if (!map && focusTargetId) {
    activeNodeSet.add(focusTargetId);
  }
  const highlightLaneKeys = new Set<string>();
  const addRouteLanes = (nodes: string[]) => {
    for (let i = 0; i < nodes.length - 1; i++) {
      highlightLaneKeys.add(laneKey(nodes[i], nodes[i + 1]));
    }
  };
  addRouteLanes(missionRouteNodes);
  if (focusPath.length) {
    addRouteLanes(focusPath);
  } else if (focusTargetId) {
    highlightLaneKeys.add(laneKey(current.id, focusTargetId));
  }

  const lines = laneSegments
    .filter((lane) => visibleSet.has(lane.from) && visibleSet.has(lane.to))
    .map((lane) => {
      const from = layoutMap.get(lane.from);
      const to = layoutMap.get(lane.to);
      if (!from || !to) return "";
      const key = laneKey(lane.from, lane.to);
      const laneDepth = lane.depth ?? Math.max(from.depth ?? 0, to.depth ?? 0);
      const isActive = highlightLaneKeys.has(key);
      const strokeWidth = isActive ? 3.2 : laneDepth <= 1 ? 2.2 : 1.2;
      const opacity = isActive ? 1 : laneDepth <= 1 ? 0.9 : 0.35;
      return `<line x1="${from.sx.toFixed(1)}" y1="${from.sy.toFixed(1)}" x2="${to.sx.toFixed(1)}" y2="${to.sy.toFixed(1)}" stroke="${getLaneColor(
        lane.type
      )}" stroke-width="${strokeWidth}" stroke-linecap="round" opacity="${opacity}"></line>`;
    })
    .join("");

  const nodesSvg = Array.from(layoutMap.values())
    .map((node) => {
      const isCurrent = node.id === current.id;
      const depth = node.depth ?? 0;
      const isLocal = depth <= 1;
      const isActive = activeNodeSet.has(node.id);
      const radius = isCurrent ? 7 : isActive ? 6 : isLocal ? 5 : 3.5;
      const fill = isCurrent ? "#4CE6C3" : isActive ? "#7dd3fc" : "#ffffff";
      const opacity = isActive ? 1 : isLocal ? 1 : 0.45;
      const labelNeeded = labelSet.has(node.id);
      const rawLabel = node.name.length > 16 ? `${node.name.slice(0, 14)}...` : node.name;
      const label = labelNeeded ? rawLabel : "";
      return `
        <g>
          <circle
            cx="${node.sx.toFixed(1)}"
            cy="${node.sy.toFixed(1)}"
            r="${radius}"
            fill="${fill}"
            stroke="#0b1116"
            stroke-width="1.5"
            opacity="${opacity}"
          ></circle>
          ${labelNeeded ? `<text x="${(node.sx + labelOffsetX).toFixed(1)}" y="${(node.sy - labelOffsetY).toFixed(1)}" text-anchor="start" font-size="11" fill="#ffffff">${label}</text>` : ""}
        </g>
      `;
    })
    .join("");

  return `
    <div class="travel-map" style="max-width:${mapWidth}px;margin:0 auto;">
      <svg
        width="${mapWidth}"
        height="${mapHeight}"
        viewBox="-${viewBoxPadding} -${viewBoxPadding} ${mapWidth + viewBoxPadding * 2} ${mapHeight + viewBoxPadding * 2}"
        role="img"
        aria-label="${zoom === "local" ? "Local" : "Sector"} system map"
      >
        ${lines}
        ${nodesSvg}
      </svg>
    </div>
  `;
}

function getLaneColor(
  laneType: "core_lane" | "frontier_lane" | "wildspace" | "core" | "frontier" | "wild"
): string {
  switch (laneType) {
    case "core_lane":
    case "core":
      return "#4ce6c3";
    case "frontier_lane":
    case "frontier":
      return "#ffb347";
    default:
      return "#ff7a7a";
  }
}
