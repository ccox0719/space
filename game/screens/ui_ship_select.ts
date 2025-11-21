import { getStarterShips, chooseStarterShip } from "../systems/shipSystem";
import { autoEquipAvailableWeapons } from "../systems/weaponSystem";
import { navigation } from "../core/navigation";
import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";

declare global {
  interface Window {
    chooseStarter: (id: string) => void;
  }
}

window.chooseStarter = (id: string) => {
  chooseStarterShip(id);
  // Immediately fill empty hardpoints from owned weapons so the player isn't unarmed.
  autoEquipAvailableWeapons();
  navigation.go("main");
};

declare const nav: (screen: string) => void;

export function ShipSelectScreen(): string {
  const starters = getStarterShips();

  if (starters.length === 0) {
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Choose Ship</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Select Your Starter Ship</h1>
            <p>No starter ships defined. Please add some in ships.json.</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Continue</button>
        </nav>
      </div>
    `;
  }

  const list = starters
    .map(
      (s) => `
      <div class="panel-card">
        <p class="label">${s.roleHint}</p>
        <p class="value-inline"><strong>${s.name}</strong></p>
        <p class="muted">${s.description}</p>
        <p class="muted">Hull ${s.hull} · Shields ${s.shields} · Fuel ${s.fuel} · Cargo ${s.cargo}</p>
        <button class="btn btn-primary" onclick="chooseStarter('${s.id}')">Choose ${s.name}</button>
      </div>
    `
    )
    .join("");

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Starter Hangar</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Select Your Starter Ship</h1>
          <p class="muted">Pick a hull to define your opening playstyle.</p>
        <div class="panel-row">
          ${list}
        </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('main')">Skip</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `;
}
