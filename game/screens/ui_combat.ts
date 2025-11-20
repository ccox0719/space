import { gameState } from "../core/state";
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

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Engaged: ${c.enemyName}</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${gameState.time.turn} · Round ${c.round}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Hull</span>
          <span class="stat-value">${ship.hp}/${ship.maxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Shields</span>
          <span class="stat-value">${ship.shields}/${ship.maxShields}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Enemy Hull</span>
          <span class="stat-value">${c.enemyHp}/${c.enemyMaxHp}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Enemy Shields</span>
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
            </div>
            <div class="panel-card">
              <p class="label">Enemy</p>
              <p class="value-inline">${c.enemyName}</p>
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

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Retreat</button>
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Ship</button>
        <button class="btn btn-ghost btn-small" onclick="nav('market')">Market</button>
        <button class="btn btn-ghost btn-small" onclick="nav('travel')">Travel</button>
      </footer>
    </div>
  `;
}
