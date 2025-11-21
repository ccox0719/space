import { getBuyableShips, buyShip } from "../systems/shipSystem";
import { getAllComponents, buyAndInstallComponent } from "../systems/componentSystem";
import {
  getAllWeapons,
  buyWeapon,
  getInventoryWeaponIds,
  getWeaponById,
  getWeaponHint
} from "../systems/weaponSystem";
import { gameState } from "../core/state";
import { systemHasTag } from "../systems/systemHelpers";

declare global {
  interface Window {
    buyShipAction: (id: string) => void;
    buyComponentAction: (id: string) => void;
    buyWeaponAction: (id: string) => void;
  }
}

window.buyShipAction = (id: string) => {
  buyShip(id);
};

window.buyComponentAction = (id: string) => {
  buyAndInstallComponent(id);
};

window.buyWeaponAction = (id: string) => {
  buyWeapon(id);
};

declare const nav: (screen: string) => void;

export function ShipyardScreen(): string {
  if (!systemHasTag(gameState.location.systemId, "shipyard")) {
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Shipyard</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">No Shipyard Here</h1>
            <p>This system does not have certified shipyard facilities.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('main')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;
  }

  const ships = getBuyableShips();
  const comps = getAllComponents();
  const weapons = getAllWeapons();
  const inventoryNames = getInventoryWeaponIds()
    .map((id) => getWeaponById(id)?.name)
    .filter(Boolean);

  const shipsHtml =
    ships.length === 0
      ? `<p class="muted">No ships are currently for sale.</p>`
      : `
        <table class="shipyard-table">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Stats</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${ships
              .map(
                (s) => `
                  <tr>
                    <td>${s.roleHint}</td>
                    <td>
                      <strong>${s.name}</strong>
                      <p class="muted">${s.description}</p>
                    </td>
                    <td class="muted">Hull ${s.hull} · Shields ${s.shields} · Fuel ${s.fuel} · Cargo ${s.cargo}</td>
                    <td class="numeric">${s.cost} cr</td>
                    <td class="actions-cell">
                      <button class="btn btn-primary" onclick="buyShipAction('${s.id}')">Buy & Replace</button>
                    </td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      `;

  const compsHtml =
    comps.length === 0
      ? `<p class="muted">No components in stock.</p>`
      : `
        <table class="shipyard-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Effect</th>
              <th>Description</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${comps
              .map(
                (c) => `
                  <tr>
                    <td><strong>${c.name}</strong></td>
                    <td class="muted">+${c.value} ${c.effectType}</td>
                    <td class="muted">${c.description}</td>
                    <td class="numeric">${c.cost} cr</td>
                    <td class="actions-cell">
                      <button class="btn btn-primary" onclick="buyComponentAction('${c.id}')">Buy & Install</button>
                    </td>
                  </tr>
                `
              )
              .join("")}
          </tbody>
        </table>
      `;

  const weaponsHtml =
    weapons.length === 0
      ? `<p class="muted">No weapons available.</p>`
      : `
        <table class="shipyard-table">
          <thead>
            <tr>
              <th>Type / Size</th>
              <th>Name</th>
              <th>Stats</th>
              <th>Role</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            ${weapons
              .map((w) => {
                const hint = getWeaponHint(w);
                const tagLine = hint.tagNotes.length ? `Traits: ${hint.tagNotes.join(", ")}` : "";
                return `
                  <tr>
                    <td>${w.type} / ${w.size}</td>
                    <td>
                      <strong>${w.name}</strong>
                      <p class="muted">${tagLine}</p>
                    </td>
                    <td class="muted">
                      Damage: ${w.damage} (${w.damageType}) · Acc: ${Math.round(w.accuracy * 100)}% · Crit: ${Math.round(
                        w.critChance * 100
                      )}% ×${w.critMultiplier}<br/>
                      Cooldown: ${w.cooldown} · Energy: ${w.energyCost}
                    </td>
                    <td class="muted">${hint.role} (${hint.typeLabel}) — Vs Shields: ${hint.vsShields}, Vs Hull: ${hint.vsHull}</td>
                    <td class="numeric">${w.price} cr</td>
                    <td class="actions-cell">
                      <button class="btn btn-primary" onclick="buyWeaponAction('${w.id}')">Buy Weapon</button>
                    </td>
                  </tr>
                `;
              })
              .join("")}
          </tbody>
        </table>
      `;

  const inventoryHtml =
    inventoryNames.length > 0
      ? `<p>${inventoryNames.join(", ")}</p>`
      : "<p class=\"muted\">You currently own no weapons.</p>";

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Shipyard</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Credits ${gameState.player.credits}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Ships for Sale</h1>
          ${shipsHtml}

          <h2 class="panel-title">Components & Upgrades</h2>
          ${compsHtml}

          <h2 class="panel-title">Weapons for Sale</h2>
          ${weaponsHtml}

          <h2 class="panel-title">Your Weapon Inventory</h2>
          <div class="panel-card">${inventoryHtml}</div>
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
