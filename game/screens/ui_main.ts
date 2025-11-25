import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import { navigation } from "../core/navigation";
import { systemHasTag } from "../systems/systemHelpers";
import { getSystemById } from "../core/engine";

declare global {
  interface Window {
    nav: (screen: string, params?: Record<string, unknown>) => void;
  }
}

window.nav = (screen: string, params: Record<string, unknown> = {}) => {
  navigation.go(screen as any, params);
};

export function MainScreen(): string {
  const s = gameState;
  const system = getSystemById(s.location.systemId);
  const cargoLoad = Object.values(s.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const lastNote = s.notifications[s.notifications.length - 1];
  const logEntries = (s.notifications || []).slice(-5).reverse();

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">${system?.name ?? s.location.systemId}</span>
        </div>
        <div class="app-meta">
          <span>Day ${s.time.day}</span>
            <span>Turn ${formatTurn(s.time.turn)}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-credits"></span>Credits</span>
          <span class="stat-value">${s.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-fuel"></span>Fuel</span>
          <span class="stat-value">${s.ship.fuel}/${s.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-cargo"></span>Cargo</span>
          <span class="stat-value">${cargoLoad}/${s.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><span class="pill-icon icon-danger"></span>Wanted</span>
          <span class="stat-value">${s.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Bridge</h1>
          <p class="muted">
            Roles: ${s.player.roles.join(", ")} • Ship: ${s.ship.name} • Status: Hull ${s.ship.hp}/${
    s.ship.maxHp
  } · Shields ${s.ship.shields}/${s.ship.maxShields}
          </p>
          ${lastNote ? `<p class="muted">Log: ${lastNote}</p>` : ""}
          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Fuel/Cargo</p>
              <p class="value-inline">Fuel ${s.ship.fuel}/${s.ship.maxFuel} · Cargo ${cargoLoad}/${s.ship.cargoCapacity}</p>
            </div>
            <div class="panel-card">
              <p class="label">Location</p>
              <p class="value-inline">${system?.description ?? "Unknown space"}</p>
            </div>
          </div>
        </section>
          <section class="app-log">
            <h2 class="panel-title small">Recent Log</h2>
            ${logEntries.length
              ? logEntries
                  .map(
                    (note) => `
                <div class="app-log-line">
                  <span>${note}</span>
                </div>
              `
                  )
                  .join("")
              : `<div class="app-log-line muted">No log entries yet.</div>`}
          </section>
      </main>

      <nav class="app-menu" aria-label="Primary menu">
        <div class="menu-group">
          <span class="menu-group__label">Primary</span>
          <div class="menu-group__actions">
            <button class="btn btn-primary" onclick="nav('travel')">Travel</button>
            <button class="btn btn-primary" onclick="nav('contracts', { source: 'main_menu' })">
              Contracts
            </button>
            <button class="btn btn-primary" onclick="nav('ship')">Ship</button>
          </div>
        </div>
        <div class="menu-group">
          <span class="menu-group__label">System</span>
          <div class="menu-group__actions">
            <button class="btn btn-primary" onclick="nav('market')" id="navMarket">
              Market
            </button>
            ${systemHasTag(s.location.systemId, "shipyard")
              ? `<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`
              : ``}
          </div>
        </div>
        <div class="menu-group">
          <span class="menu-group__label">Tools</span>
          <div class="menu-group__actions">
            <button class="btn btn-ghost" id="navDev">Dev Tools</button>
          </div>
        </div>
      </nav>
    </div>
  `;
}
