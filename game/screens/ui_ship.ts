import { gameState } from "../core/state";
import { getCurrentShipTemplate, repairShip, refuelShip } from "../systems/shipSystem";
import { getInstalledComponents } from "../systems/componentSystem";
import { getWeaponById, getWeaponHint } from "../systems/weaponSystem";

declare const nav: (screen: string) => void;

declare global {
  interface Window {
    repairShipAction: () => void;
    refuelShipAction: () => void;
  }
}

window.repairShipAction = () => {
  repairShip();
  nav("ship");
};

window.refuelShipAction = () => {
  refuelShip();
  nav("ship");
};

export function ShipScreen(): string {
  const ship = gameState.ship;
  const tpl = getCurrentShipTemplate();
  const comps = getInstalledComponents();
  const cooldowns = gameState.combat?.playerCooldowns ?? [];
  const cargoLoad = Object.values(ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);

  const templateInfo = tpl
    ? `<p class="muted">${tpl.description}</p>`
    : `<p class="muted">Unknown template (${ship.templateId})</p>`;

  const componentsList =
    comps.length === 0
      ? `<p>No components installed.</p>`
      : `<ul>${comps
          .map((c) => `<li>${c.name} (+${c.value} ${c.effectType})</li>`)
          .join("")}</ul>`;

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Ship: ${ship.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${gameState.time.turn}</span>
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
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${ship.fuel}/${ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${cargoLoad}/${ship.cargoCapacity}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ship Status</h1>
          ${templateInfo}

          <div class="panel-card">
            <p class="label">Installed Components</p>
            ${componentsList}
          </div>

          <h2 class="panel-title">Weapons</h2>
          <div class="panel-row">
            ${ship.hardpoints
              .map((hp, idx) => {
                const weapon = getWeaponById(ship.weapons[idx]);
                const name = weapon?.name || "Empty";
                const cd = cooldowns[idx] ?? 0;
                const hint = weapon ? getWeaponHint(weapon) : null;
                const hintHtml = hint
                  ? `
                    <p class="muted">Role: ${hint.role} (${hint.typeLabel})</p>
                    <p class="muted">Vs Shields: ${hint.vsShields} · Vs Hull: ${hint.vsHull}</p>
                    ${hint.tagNotes.length ? `<p class="muted">Traits: ${hint.tagNotes.join(", ")}</p>` : ""}
                  `
                  : "";
                return `
                  <div class="panel-card">
                    <p class="label">Slot ${idx + 1} · ${hp.size} ${hp.type}</p>
                    <p class="value-inline">${name}</p>
                    <p class="muted">${cd > 0 ? `${cd} turn${cd === 1 ? "" : "s"} left` : "Ready"}</p>
                    ${hintHtml}
                  </div>
                `;
              })
              .join("") || "<div class=\"panel-card\"><p class=\"muted\">No hardpoints installed.</p></div>"}
          </div>
          <button class="btn btn-primary" onclick="nav('weapon_slots')">Manage Weapons</button>

          <h2 class="panel-title">Basic Services</h2>
          <div class="app-actions">
            <button class="btn btn-primary" onclick="repairShipAction()">Repair (1 cr/pt)</button>
            <button class="btn btn-primary" onclick="refuelShipAction()">Refuel (2 cr/fuel)</button>
            <button class="btn btn-ghost" onclick="nav('main')">Back</button>
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
