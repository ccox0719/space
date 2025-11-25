import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import {
  playerCombatAction,
  setPlayerStance,
  CALLED_SHOT_TIP,
  BRACE_TIP,
  DAMAGE_TYPE_GUIDE,
  getCombatAdvice
} from "../systems/combatSystem";
import { getWeaponById } from "../systems/weaponSystem";

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    fireWeapon: (slotIndex: number, aimMode?: "normal" | "called_shot") => void;
    brace: () => void;
    flee: () => void;
    setStance: (stance: "assault" | "balanced" | "evasive") => void;
    fireAllWeapons: (aimMode?: "normal" | "called_shot") => void;
  }
}

window.fireWeapon = (slotIndex: number, aimMode: "normal" | "called_shot" = "normal") => {
  playerCombatAction("fire", slotIndex, aimMode);
  if (gameState.combat) {
    nav("combat");
  }
};

window.brace = () => {
  playerCombatAction("brace");
  if (gameState.combat) {
    nav("combat");
  }
};

window.flee = () => {
  playerCombatAction("flee");
  if (gameState.combat) {
    nav("combat");
  }
};

window.setStance = (stance: "assault" | "balanced" | "evasive") => {
  setPlayerStance(stance);
  if (gameState.combat) {
    nav("combat");
  }
};

window.fireAllWeapons = (aimMode: "normal" | "called_shot" = "normal") => {
  playerCombatAction("fire_all", undefined, aimMode);
  if (gameState.combat) {
    nav("combat");
  }
};

export function CombatScreen(): string {
  const c = gameState.combat;

  if (!c) {
    return `
      <div class="screen combat">
        <h1>No Active Combat</h1>
        <p>You are not currently engaged in combat.</p>
        <ul class="actions">
          <li onclick="nav('main')">Back to Main</li>
        </ul>
      </div>
    `;
  }

  const ship = gameState.ship;
  const logHtml = c.log.map((line) => `<div class="log-line">${line}</div>`).join("");
  const lowHull = ship.hp / Math.max(1, ship.maxHp) <= 0.35;
  const lastLog = (c.log[c.log.length - 1] || "").toLowerCase();
  const wasHit = lastLog.includes("hits you") || lastLog.includes("damage");
  const rootClasses = ["app-root", "combat-root"];
  if (lowHull) rootClasses.push("low-hull");
  if (wasHit) rootClasses.push("hit-flash");

  const weaponRows = ship.hardpoints
    .map((hp, idx) => {
      const weaponId = ship.weapons[idx];
      const weapon = getWeaponById(weaponId);
      const cooldown = c.playerCooldowns[idx] ?? 0;
      const ready = Boolean(weapon) && cooldown === 0;
      return `
        <div class="panel-card">
          <p class="label">Slot ${idx + 1} · ${hp.size.toUpperCase()} ${hp.type}</p>
          <p class="value-inline">${weapon?.name || "Empty"}</p>
          <p class="muted">${cooldown > 0 ? `Cooling (${cooldown})` : "Ready"}</p>
          <div class="app-actions">
            <button class="btn btn-primary" ${ready ? "" : "disabled"} onclick="fireWeapon(${idx}, 'normal')">Fire</button>
            <button class="btn btn-ghost" ${ready ? "" : "disabled"} onclick="fireWeapon(${idx}, 'called_shot')">Called Shot</button>
          </div>
        </div>
      `;
    })
    .join("");

  const damageTypeRows = DAMAGE_TYPE_GUIDE.map(
    (entry) => `
        <tr>
          <td>${entry.type}</td>
          <td>${entry.shieldMultiplier.toFixed(2)}x</td>
          <td>${entry.hullMultiplier.toFixed(2)}x</td>
          <td>${entry.description}</td>
        </tr>
      `
  ).join("");

  const advice = getCombatAdvice();
  const adviceHtml = advice
    ? `<p class="combat-advice ${advice.suggestion}">
        ${advice.text}
        <span class="advice-confidence">Intel confidence: ${(advice.confidence * 100).toFixed(0)}%</span>
      </p>`
    : `<p class="combat-advice">No immediate cues.</p>`;

  const calledShotReady = c.enemyShields <= 0;
  const calledShotHint = calledShotReady
    ? "Shields are down—called shots will score more consistently. Aim for the hull!"
    : "Called shots trade accuracy; wait until shields drop for the best payout.";

  const playerChips = buildPlayerChips(c);
  const enemyChips = buildEnemyChips(c);

  return `
    <div class="${rootClasses.join(" ")}">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${c.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)} · Round ${c.round}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-fill"></i>Hull</span>
          <span class="stat-value">${ship.hp}/${ship.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-shaded"></i>Shields</span>
          <span class="stat-value">${ship.shields}/${ship.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-fill"></i>Enemy Hull</span>
          <span class="stat-value">${c.enemyHp}/${c.enemyMaxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-shield-shaded"></i>Enemy Shields</span>
          <span class="stat-value">${c.enemyShields}/${c.enemyMaxShields}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Combat: ${c.enemyName}</h1>
          <p class="muted">Current stance: <strong>${c.playerStance}</strong>. ${calledShotHint}</p>

          <div class="panel-row">
            <div class="panel-card">
              <p class="label">Your Ship</p>
              <p class="value-inline">Fuel ${ship.fuel}/${ship.maxFuel}</p>
              <div class="status-chips">${playerChips || `<span class="muted">No active buffs</span>`}</div>
            </div>
            <div class="panel-card enemy-reticle">
              <div class="reticle-grid"></div>
              <p class="label">Enemy</p>
              <p class="value-inline">${c.enemyName}</p>
              <div class="status-chips">${enemyChips || `<span class="muted">No active debuffs</span>`}</div>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Stances</p>
            ${adviceHtml}
            <div class="app-actions">
              <button class="btn btn-primary" onclick="setStance('assault')">Assault</button>
              <button class="btn btn-primary" onclick="setStance('balanced')">Balanced</button>
              <button class="btn btn-primary" onclick="setStance('evasive')">Evasive</button>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Volley</p>
            <div class="app-actions">
              <button class="btn btn-primary" onclick="fireAllWeapons('normal')">Fire All</button>
              <button class="btn btn-ghost" onclick="fireAllWeapons('called_shot')">All Called Shots</button>
            </div>
          </div>

          <div class="panel-card">
            <p class="label">Actions</p>
            <div class="app-actions">
              <button class="btn btn-ghost" onclick="brace()">Brace</button>
              <button class="btn btn-danger" onclick="flee()">Attempt Flee</button>
            </div>
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${weaponRows}
          </div>

          <h2 class="panel-title">Damage Guide</h2>
          <div class="panel-card">
            <p><strong>Called Shot</strong>: ${CALLED_SHOT_TIP}</p>
            <p><strong>Brace vs Attack</strong>: ${BRACE_TIP}</p>
            <table class="damage-guide">
              <thead>
                <tr><th>Damage Type</th><th>Shield Effect</th><th>Hull Effect</th><th>Usage Tip</th></tr>
              </thead>
              <tbody>
                ${damageTypeRows}
              </tbody>
            </table>
          </div>

          <h2 class="panel-title">Battle Log</h2>
          <div class="combat-log">
            ${logHtml}
          </div>
        </section>
      </main>

    </div>
  `;
}

function buildPlayerChips(combat: NonNullable<typeof gameState.combat>): string {
  const chips: string[] = [];
  chips.push(`<span class="buff-chip buff">Stance: ${combat.playerStance}</span>`);
  if (combat.playerBracing) {
    chips.push('<span class="buff-chip buff">Bracing</span>');
  }
  if (combat.playerStatus.shieldBoost > 0) {
    chips.push(
      `<span class="buff-chip buff">Shield +${combat.playerStatus.shieldBoost} (${combat.playerStatus.shieldTurns}t)</span>`
    );
  }
  if (combat.playerStatus.maneuverBonus > 0) {
    chips.push(
      `<span class="buff-chip buff">Evasion +${combat.playerStatus.maneuverBonus} (${combat.playerStatus.maneuverTurns}t)</span>`
    );
  }
  if (!combat.canEscape) {
    chips.push('<span class="buff-chip debuff">Escape blocked</span>');
  }
  return chips.join("");
}

function buildEnemyChips(combat: NonNullable<typeof gameState.combat>): string {
  const chips: string[] = [];
  if (combat.enemyStatus.weaponJammedTurns > 0) {
    chips.push(`<span class="buff-chip debuff">Weapons jammed (${combat.enemyStatus.weaponJammedTurns}t)</span>`);
  }
  if (combat.enemyShields <= 0) {
    chips.push('<span class="buff-chip debuff">Shields down</span>');
  }
  if (chips.length === 0 && combat.enemyShields > 0) {
    chips.push('<span class="buff-chip muted-chip">Systems nominal</span>');
  }
  return chips.join("");
}
