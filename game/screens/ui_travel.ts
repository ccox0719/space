import { getCurrentSystem, getNeighbors, getRouteProfile } from "../systems/travelSystem";
import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";

declare const nav: (screen: string) => void;

export function TravelScreen(): string {
  const current = getCurrentSystem();
  const neighbors = getNeighbors();
  const cargoLoad = Object.values(gameState.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const riskSample = neighbors
    .map((s) => getRouteProfile(s.id)?.hazardChance ?? 0)
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

  const neighborCards =
    neighbors.length === 0
      ? `<div class="panel-card"><p class="label">Connections</p><p class="value-inline">No nearby systems detected.</p></div>`
      : neighbors
          .map((s) => {
            const profile = getRouteProfile(s.id);
            const securityLabel = formatSecurity(s.security);
            const tagNotes = formatTagNotes(s);
            const riskText = profile ? formatRisk(profile.hazardChance) : "Unknown";
            const fuelCost = profile ? `${profile.fuelCost} fuel` : "Fuel: ?";
            const travelTime = profile
              ? `${profile.travelTime} turn${profile.travelTime === 1 ? "" : "s"}`
              : "Time: ?";
            return `
              <div class="panel-card">
                <p class="label">${securityLabel}${tagNotes.length ? ` · ${tagNotes.join(", ")}` : ""}</p>
                <p class="value-inline"><strong>${s.name}</strong></p>
                <p class="muted">${fuelCost} • ${travelTime} • Risk: ${riskText}</p>
                <button class="btn btn-primary" onclick="travelToSystem('${s.id}')">Jump to ${s.name}</button>
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
