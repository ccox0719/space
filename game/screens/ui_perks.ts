import { navigation } from "../core/navigation";
import { formatTurn } from "../core/formatters";
import { gameState } from "../core/state";
import { getXpDashboard, getUiPerkTree, getLatestNotifications, getUpcomingPerks } from "../ui/uiPerks";

declare global {
  interface Window {
    unlockPerkAction?: (perkId: string) => void;
  }
}

export function PerkScreen(): string {
  const s = gameState;
  const xpTracks = getXpDashboard(s);
  const perkBranches = getUiPerkTree(s);
  const upcoming = getUpcomingPerks(s);
  const notifications = getLatestNotifications(s, 5);
  const hasPerkPoints = (s.player.perkPoints ?? 0) > 0;

  const xpHtml =
    xpTracks.length > 0
      ? xpTracks
          .map(
            ({ displayName, level, percent, xpIntoLevel, xpNeeded }) => `
              <div class="xp-track-card">
                <div class="xp-track-header">
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
      : `<div class="xp-track-card muted">No XP data available.</div>`;

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">Perk Planner</span>
          <span class="app-location">${s.location.systemId}</span>
        </div>
        <button class="btn btn-ghost" onclick="nav('main')">Back</button>
      </header>

      <section class="panel-card xp-dashboard-panel">
        <summary>XP Journal</summary>
        <div class="details-content">
          <div class="xp-track-grid">
            ${xpHtml}
          </div>
        </div>
      </section>

      <section class="panel-card upcoming-perks-panel">
        <p class="label">Plan your next perks</p>
        <div class="upcoming-perk-list">
          ${
            upcoming.length
              ? upcoming
                  .map(
                    (perk) => `
                      <div class="upcoming-perk">
                        <strong>${perk.displayName}</strong>
                        <span class="perk-branch">${perk.branch} • Tier ${perk.tier}</span>
                        <p class="perk-desc">${perk.description}</p>
                        ${
                          perk.requires.length
                            ? `<p class="perk-meta">Requires: ${perk.requires.join(", ")}</p>`
                            : ""
                        }
                      </div>
                    `
                  )
                  .join("")
              : `<div class="upcoming-perk muted">No upcoming perks available — unlock more tiers.</div>`
          }
        </div>
      </section>

      <section class="panel-card perk-tree-panel">
        <p class="label">Perk Tree</p>
        ${perkBranches
          .map(
            (branch) => `
              <div class="perk-branch">
                <h4>${branch.branch.charAt(0).toUpperCase() + branch.branch.slice(1)}</h4>
                ${branch.entries
                  .map((entry) => {
                    const requirementText = entry.requires.length
                      ? ` • requires: ${entry.requires.join(", ")}`
                      : "";
                    return `
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
                              : "Unlocked via special means"
                          }
                          ${requirementText}
                        </p>
                        <div class="perk-badges">
                          ${entry.effectTargets
                            .map(
                              (target) =>
                                `<span class="perk-badge" title="Affects ${target}">${target}</span>`
                            )
                            .join("")}
                        </div>
                        <button
                          class="btn btn-primary btn-small${hasPerkPoints && !entry.unlocked ? "" : " disabled"}"
                          ${hasPerkPoints && !entry.unlocked ? "" : "disabled"}
                          onclick="unlockPerkAction('${entry.id}')"
                        >
                          ${entry.unlocked ? "Unlocked" : hasPerkPoints ? "Unlock" : "Need Points"}
                        </button>
                      </div>
                    `;
                  })
                  .join("")}
              </div>
            `
          )
          .join("")}
      </section>

      <section class="panel-card perk-log-panel">
        <p class="label">Recent Notifications</p>
        <div class="perk-log">
          ${
            notifications.length
              ? notifications.map((note) => `<div class="perk-log-line">${note}</div>`).join("")
              : `<div class="perk-log-line muted">No notifications yet.</div>`
          }
        </div>
      </section>
    </div>
  `;
}
