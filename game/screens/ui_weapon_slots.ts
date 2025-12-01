import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import { getWeaponById } from "../systems/weaponSystem";

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

export function WeaponSlotsScreen(): string {
  const ship = gameState.ship;
  if (!ship.hardpoints.length) {
    return `
      <div class="app-root">
        <header class="app-header app-header--market">
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Weapons</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Weapon Slots</h1>
            <p>Your current ship has no weapon hardpoints.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('ship')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;
  }

  const cards = ship.hardpoints
    .map((hp, idx) => {
      const weapon = getWeaponById(ship.weapons[idx]);
      const name = weapon?.name || "Empty";
      return `
        <div class="panel-card">
          <p class="label">Slot ${idx + 1} · ${hp.size} ${hp.type}</p>
          <p class="value-inline">${name}</p>
          <button class="btn btn-primary" onclick="nav('weapon_select', { slotIndex: ${idx} })">
            Equip
          </button>
        </div>
      `;
    })
    .join("");

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Weapon Hardpoints</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Weapon Hardpoints</h1>
          <div class="panel-row">
            ${cards}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('ship')">Back</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `;
}
