import { gameState, persistGameState, restoreSavedGameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import { navigation } from "../core/navigation";
import { systemHasTag } from "../systems/systemHelpers";
import { getSystemById } from "../core/engine";
import { startMiningSession } from "../systems/miningSystem";
import { unlockPerkWithPoints } from "@src/systems/perkSystem";
import { getXpDashboard, getUiPerkTree, getLatestNotifications } from "../ui/uiPerks";

declare global {
  interface Window {
    nav: (screen: string, params?: Record<string, unknown>) => void;
    toggleTools?: () => void;
    startMiningSessionFromMain?: () => void;
    saveGameState?: () => void;
    loadGameState?: () => void;
  }
}

window.nav = (screen: string, params: Record<string, unknown> = {}) => {
  navigation.go(screen as any, params);
};

window.toggleTools = () => {
  const actions = document.getElementById("toolsActions");
  const button = document.getElementById("toolsToggleBtn");
  if (!actions || !button) return;
  const collapsed = actions.classList.toggle("collapsed");
  button.textContent = collapsed ? "Show" : "Hide";
};

window.startMiningSessionFromMain = () => {
  const systemId = gameState.location.systemId;
  const system = getSystemById(systemId);
  if (!system) return;
  const globalEasyBeltId = "global_easy_signal_belt";
  const hasDedicatedBelt = Array.isArray(system.tags) && system.tags.includes("mining_belt");
  const started = startMiningSession(
    gameState,
    systemId,
    hasDedicatedBelt ? undefined : globalEasyBeltId,
    undefined,
    { easySignals: true }
  );
  if (started) {
    navigation.go("mining");
  } else {
    navigation.go("main", { message: "Travel to a new system before mining again." });
  }
};

window.unlockPerkAction = (perkId: string) => {
  if (unlockPerkWithPoints(gameState, perkId)) {
    navigation.go("main", { message: "Perk unlocked!" });
  } else {
    console.warn(`Failed to unlock perk ${perkId}`);
    navigation.go("main", { message: "Unable to unlock perk (requirements or points missing)." });
  }
};

window.saveGameState = () => {
  persistGameState();
  navigation.go("main", { message: "Game saved." });
};

window.loadGameState = () => {
  if (restoreSavedGameState()) {
    navigation.go("main", { message: "Game loaded." });
  } else {
    navigation.go("main", { message: "No saved game found." });
  }
};

export function MainScreen(): string {
  const s = gameState;
  const system = getSystemById(s.location.systemId);
  const shortLocationDescription = (() => {
    const raw = (system?.description ?? "Unknown space").trim();
    const firstSentence = raw.split(".")[0];
    return firstSentence === raw ? raw : `${firstSentence}.`;
  })();
  const cargoLoad = Object.values(s.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const xpTrackEntries = getXpDashboard(s);
  const xpTrackRows =
    xpTrackEntries.length > 0
      ? xpTrackEntries
          .map(
            ({ displayName, level, percent, xpIntoLevel, xpNeeded }) => `
              <div class="xp-track-row">
                <div class="xp-track-row-header">
                  <span class="xp-track-title">${displayName}</span>
                  <span class="xp-track-level">Level ${level}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(percent, 100)}%"></div>
                </div>
                <div class="xp-track-sub">
                  ${xpNeeded !== null ? `${xpIntoLevel}/${xpNeeded} XP` : `${xpIntoLevel} XP (max)`}
                </div>
              </div>
            `
          )
          .join("")
      : `<div class="xp-track-row muted">No XP tracked yet.</div>`;
  const latestNotes = getLatestNotifications(s);
  const lastNote = latestNotes[0];
  const logEntries = latestNotes;
  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">${system?.name ?? s.location.systemId}</span>
        </div>
      </header>

      <section class="header-stats">
        <div class="header-stat">
          <i class="bi bi-cash-stack"></i>
          <div>
            <span>Credits</span>
            <strong>${s.player.credits}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-cargo"></span>
          <div>
            <span>Cargo</span>
            <strong>${cargoLoad}/${s.ship.cargoCapacity}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-danger"></span>
          <div>
            <span>Wanted</span>
            <strong>${s.player.wanted}</strong>
          </div>
        </div>
        <div class="header-stat">
          <i class="bi bi-stars"></i>
          <div>
            <span>Perk Points</span>
            <strong>${s.player.perkPoints ?? 0}</strong>
          </div>
        </div>
      </section>

      <section class="panel-card xp-track-panel">
        <p class="label">XP Tracks</p>
        <div class="xp-track-list">
          ${xpTrackRows}
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Bridge</h1>
          <div class="bridge-grid">
            <div class="bridge-stat">
              <i class="bi bi-person-lines-fill"></i>
              <div>
                <span>Roles</span>
                <strong>${s.player.roles.join(", ")}</strong>
              </div>
            </div>
            <div class="bridge-stat">
              <i class="bi bi-ship"></i>
              <div>
                <span>Ship</span>
                <strong>${s.ship.name}</strong>
              </div>
            </div>
            <div class="bridge-stat">
              <i class="bi bi-shield-fill"></i>
              <div>
                <span>Hull</span>
                <strong>${s.ship.hp}/${s.ship.maxHp}</strong>
              </div>
            </div>
            <div class="bridge-stat">
              <i class="bi bi-shield-shaded"></i>
              <div>
                <span>Shields</span>
                <strong>${s.ship.shields}/${s.ship.maxShields}</strong>
              </div>
            </div>
          </div>
          ${lastNote ? `<p class="muted">Log: ${lastNote}</p>` : ""}
          <div class="panel-row">
          <div class="panel-card">
            <p class="label">Fuel / Cargo</p>
            <div class="fuel-cargo-grid">
              <div class="mini-stat">
                <i class="bi bi-fuel-pump"></i>
                <div>
                  <span>Fuel</span>
                  <strong>${s.ship.fuel}/${s.ship.maxFuel}</strong>
                </div>
              </div>
              <div class="mini-stat">
                <i class="bi bi-boxes"></i>
                <div>
                  <span>Cargo</span>
                  <strong>${cargoLoad}/${s.ship.cargoCapacity}</strong>
                </div>
              </div>
              <div class="mini-stat">
                <span class="pill-icon icon-credits"></span>
                <div>
                  <span>Cycle</span>
                  <strong>Day ${s.time.day} · Turn ${formatTurn(s.time.turn)}</strong>
                </div>
              </div>
            </div>
          </div>
            <div class="panel-card">
          <p class="label">Location</p>
          <p class="value-inline" id="location-description">${shortLocationDescription}</p>
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
        <div class="menu-group menu-group--system">
          <span class="menu-group__label">Primary</span>
        <div class="menu-group__actions">
          <button class="btn btn-primary" onclick="nav('travel')">Travel</button>
          <button class="btn btn-primary" onclick="nav('contracts', { source: 'main_menu' })">
            Contracts
          </button>
          <button class="btn btn-primary" onclick="nav('ship')">Ship</button>
          <button class="btn btn-primary" onclick="startMiningSessionFromMain()">
            Mining
          </button>
        </div>
        </div>
        <div class="menu-row">
          <div class="menu-group menu-group--system-tools">
            <span class="menu-group__label">System</span>
        <div class="menu-group__actions">
          <button class="btn btn-primary" onclick="nav('market')" id="navMarket">Market</button>
          ${systemHasTag(s.location.systemId, "shipyard")
            ? `<button class="btn btn-primary" onclick="nav('shipyard')">Shipyard</button>`
            : ``}
          <button class="btn btn-primary" onclick="nav('perks')">Perks</button>
        </div>
            <div class="menu-group__header">
              <span class="menu-group__label">Tools</span>
              <button
                id="toolsToggleBtn"
                class="btn btn-ghost btn-small tools-toggle"
                onclick="toggleTools()"
                type="button"
              >
                Show
              </button>
            </div>
            <div class="menu-group__actions collapsed" id="toolsActions">
              <button class="btn btn-ghost btn-small btn-inconspicuous" id="navDev">Dev</button>
              <button class="btn btn-ghost btn-small btn-inconspicuous" onclick="saveGameState()">Save Game</button>
              <button class="btn btn-ghost btn-small btn-inconspicuous" onclick="loadGameState()">Load Game</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `;
}
