import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import { navigation } from "../core/navigation";
import { systemHasTag } from "../systems/systemHelpers";
import { getSystemById } from "../core/engine";
import { startMiningSession } from "../systems/miningSystem";
import { getAllXpTrackStatuses } from "../systems/xpSystem";
import { getPerkTreeData } from "../systems/perkManager";

declare global {
  interface Window {
    nav: (screen: string, params?: Record<string, unknown>) => void;
    toggleTools?: () => void;
    startMiningSessionFromMain?: () => void;
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

export function MainScreen(): string {
  const s = gameState;
  const system = getSystemById(s.location.systemId);
  const shortLocationDescription = (() => {
    const raw = (system?.description ?? "Unknown space").trim();
    const firstSentence = raw.split(".")[0];
    return firstSentence === raw ? raw : `${firstSentence}.`;
  })();
  const cargoLoad = Object.values(s.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const xpRecords = s.player.xpTracks ?? {};
  const xpStatuses = getAllXpTrackStatuses(xpRecords);
  const xpTrackEntries =
    xpStatuses.length > 0
      ? xpStatuses.map((status) => {
          const progress =
            status.xpNeededForNextLevel !== null
              ? `${status.xpIntoLevel}/${status.xpNeededForNextLevel} XP`
              : `${status.xp} XP (max)`;
          const xpNeeded = status.xpNeededForNextLevel ?? 0;
          const percent = xpNeeded > 0 ? Math.round((status.xpIntoLevel / xpNeeded) * 100) : 100;
          return { status, progress, percent };
        })
      : [];
  const xpTrackPanels =
    xpTrackEntries.length > 0
      ? xpTrackEntries
          .map(({ status, progress, percent }) => `
              <div class="xp-track-card">
                <div class="xp-track-header">
                  <span class="xp-track-title">${status.track.displayName}</span>
                  <span class="xp-track-level">Level ${status.level}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(percent,100)}%"></div>
                </div>
                <div class="xp-track-sub">${progress}</div>
              </div>
            `)
          .join("")
      : `<div class="xp-track-card muted">No XP tracked yet.</div>`;
  const xpTrackRows =
    xpTrackEntries.length > 0
      ? xpTrackEntries
          .map(
            ({ status, progress, percent }) => `
              <div class="xp-track-row">
                <div class="xp-track-row-header">
                  <span class="xp-track-title">${status.track.displayName}</span>
                  <span class="xp-track-level">Level ${status.level}</span>
                </div>
                <div class="xp-track-progress">
                  <div class="xp-track-fill" style="width:${Math.min(percent,100)}%"></div>
                </div>
                <div class="xp-track-sub">${progress}</div>
              </div>
            `
          )
          .join("")
      : `<div class="xp-track-row muted">No XP tracked yet.</div>`;
  const perkTree = getPerkTreeData();
  const branchEntries = Object.entries(perkTree);
  const lastNote = s.notifications[s.notifications.length - 1];
  const logEntries = (s.notifications || []).slice(-5).reverse();
  const perkActivity = (s.notifications || [])
    .slice()
    .reverse()
    .filter((note) => note.toLowerCase().includes("perks unlocked"))
    .slice(0, 4);

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">${system?.name ?? s.location.systemId}</span>
        </div>
      </header>

      <div class="top-dashboard-collapse">
        <details class="panel-card xp-dashboard-panel dashboard-collapse">
          <summary>XP Dashboard</summary>
          <div class="details-content">
            <div class="xp-track-grid">
              ${xpTrackPanels}
            </div>
          </div>
        </details>
        <details class="panel-card perk-tree-panel dashboard-collapse">
          <summary>Perk Tree</summary>
          <div class="details-content">
            <div class="perk-tree">
              ${
                branchEntries.length
                  ? branchEntries
                      .map(
                        ([branch, entries]) => `
                          <div class="perk-branch">
                            <h4>${branch.charAt(0).toUpperCase() + branch.slice(1)}</h4>
                            ${entries
                              .map(
                                (entry) => `
                                  <div class="perk-row${entry.unlocked ? " unlocked" : ""}">
                                    <div class="perk-header">
                                      <strong>${entry.displayName}</strong>
                                      <span class="perk-tier">Tier ${entry.tier}</span>
                                    </div>
                                    <p class="perk-desc">${entry.description}</p>
                                    <p class="perk-meta">
                                      ${
                                        entry.source
                                          ? `${entry.source.trackId} L${entry.source.level}`
                                          : "No XP track"
                                      }
                                      ${entry.requires.length ? ` • requires: ${entry.requires.join(", ")}` : ""}
                                    </p>
                                    <div class="perk-badges">
                                      ${entry.effectTargets
                                        .map(
                                          (target) =>
                                            `<span class="perk-badge" title="Affects ${target}" style="margin-right:4px;padding:0 6px;border-radius:999px;background:#222;color:#fff;font-size:0.75rem;">${target}</span>`
                                        )
                                        .join("")}
                                    </div>
                                  </div>
                                `
                              )
                              .join("")}
                          </div>
                        `
                      )
                      .join("")
                  : `<div class="perk-row muted">Perk definitions unavailable.</div>`
              }
            </div>
          </div>
        </details>
        <details class="panel-card perk-log-panel dashboard-collapse">
          <summary>Recent Perk Activity</summary>
          <div class="details-content">
            <div class="perk-log">
              ${
                perkActivity.length
                  ? perkActivity
                      .map((note) => `<div class="perk-log-line">${note}</div>`)
                      .join("")
                  : `<div class="perk-log-line muted">No perks unlocked recently.</div>`
              }
            </div>
          </div>
        </details>
      </div>

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
            </div>
            <div class="menu-group__header">
              <span class="menu-group__label">Tools</span>
              <button
                id="toolsToggleBtn"
                class="btn btn-ghost btn-small tools-toggle"
                onclick="toggleTools()"
                type="button"
              >
                Hide
              </button>
            </div>
            <div class="menu-group__actions" id="toolsActions">
              <button class="btn btn-ghost btn-small btn-inconspicuous" id="navDev">Dev</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  `;
}
