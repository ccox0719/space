import { gameState } from "../core/state";
import {
  getCurrentShipTemplate,
  repairShip,
  refuelShip,
  sellShip,
  SHIP_SELL_RATIO
} from "../systems/shipSystem";
import {
  getComponentById,
  getInstalledComponents,
  getInstalledPassiveSystems,
  getInventoryPassiveIds,
  getPassiveComponents,
  buyPassiveSystem,
  installPassiveSystem,
  sellPassiveSystem,
  PASSIVE_SELL_RATIO
} from "../systems/componentSystem";
import type { ComponentDef } from "../core/contentTypes";
import {
  getWeaponById,
  getWeaponHint,
  getInventoryWeaponIds,
  sellWeapon,
  WEAPON_SELL_RATIO
} from "../systems/weaponSystem";
import { formatHardpointSummary } from "./weaponSlotSummary";

declare const nav: (screen: string) => void;

declare global {
  interface Window {
    repairShipAction: () => void;
    refuelShipAction: () => void;
    sellWeaponAction: (weaponId: string) => void;
    sellShipAction: () => void;
    buyPassiveAction: (passiveId: string) => void;
    installPassiveAction: (passiveId: string) => void;
    sellPassiveAction: (passiveId: string) => void;
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

window.sellWeaponAction = (weaponId: string) => {
  if (!sellWeapon(weaponId)) {
    console.warn(`Unable to sell weapon ${weaponId}.`);
    return;
  }
  nav("ship");
};

window.sellShipAction = () => {
  if (!sellShip()) {
    console.warn("Unable to sell the current ship.");
    return;
  }
  nav("ship");
};

window.buyPassiveAction = (passiveId: string) => {
  if (!buyPassiveSystem(passiveId)) {
    console.warn(`Failed to purchase passive ${passiveId}.`);
    return;
  }
  nav("ship");
};

window.installPassiveAction = (passiveId: string) => {
  if (!installPassiveSystem(passiveId)) {
    console.warn(`Unable to install passive ${passiveId}.`);
    return;
  }
  nav("ship");
};

window.sellPassiveAction = (passiveId: string) => {
  if (!sellPassiveSystem(passiveId)) {
    console.warn(`Unable to sell passive ${passiveId}.`);
    return;
  }
  nav("ship");
};

export function ShipScreen(): string {
  const ship = gameState.ship;
  const tpl = getCurrentShipTemplate();
  const comps = getInstalledComponents();
  const installedPassives = getInstalledPassiveSystems();
  const inventoryPassiveIds = getInventoryPassiveIds();
  const inventoryPassiveDefs = inventoryPassiveIds
    .map((id) => getComponentById(id))
    .filter((passive): passive is ComponentDef => Boolean(passive));
  const passiveCatalog = getPassiveComponents();
  const passiveSlots = tpl?.passiveSlots ?? 0;
  const passiveSlotsUsed = installedPassives.length;
  const ownedPassiveIds = new Set([
    ...installedPassives.map((passive) => passive.id),
    ...inventoryPassiveIds
  ]);
  const cooldowns = gameState.combat?.playerCooldowns ?? [];
  const cargoLoad = Object.values(ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);
  const player = gameState.player;
  const credits = player.credits;
  const wanted = player.wanted;
  const inventoryWeaponIds = getInventoryWeaponIds();
  const inventoryWeapons = inventoryWeaponIds
    .map((id) => getWeaponById(id))
    .filter((weapon): weapon is NonNullable<typeof weapon> => Boolean(weapon));
  const shipSellValue = Math.floor((tpl?.cost ?? 0) * SHIP_SELL_RATIO);

  const slotSummary = formatHardpointSummary(tpl?.hardpoints);
  const templateInfo = tpl
    ? `<p class="muted">${tpl.description}</p><p class="muted">Weapon slots: ${slotSummary}</p>`
    : `<p class="muted">Unknown template (${ship.templateId})</p>`;

  const componentsList =
    comps.length === 0
      ? `<p>No components installed.</p>`
      : `<ul>${comps
          .map((c) => `<li>${c.name} (+${c.value} ${c.effectType})</li>`)
          .join("")}</ul>`;

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Ship — ${ship.name}</span>
        </div>
      </header>

      <section class="header-stats">
        <div class="header-stat">
          <i class="bi bi-cash-stack"></i>
          <div>
            <span>Credits</span>
            <strong>${credits}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-cargo"></span>
          <div>
            <span>Cargo</span>
            <strong>${cargoLoad}/${ship.cargoCapacity}</strong>
          </div>
        </div>
        <div class="header-stat">
          <span class="pill-icon icon-danger"></span>
          <div>
            <span>Wanted</span>
            <strong>${wanted}</strong>
          </div>
        </div>
      </section>

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
          <span class="stat-label"><i class="bi bi-fuel-pump"></i>Fuel</span>
          <span class="stat-value">${ship.fuel}/${ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label"><i class="bi bi-boxes"></i>Cargo</span>
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

          <h2 class="panel-title">Weapon Inventory</h2>
          <div class="panel-row">
            ${inventoryWeapons.length
              ? inventoryWeapons
                  .map(
                    (weapon) => `
                      <div class="panel-card">
                        <p class="label">${weapon.type} / ${weapon.size}</p>
                        <p class="value-inline"><strong>${weapon.name}</strong></p>
                        <p class="muted">Cost ${weapon.price} cr | Sell ${Math.floor(
                          (weapon.price ?? 0) * WEAPON_SELL_RATIO
                        )} cr</p>
                        <div class="app-actions">
                          <button class="btn btn-ghost" onclick="nav('weapon_slots')">
                            Equip / Swap
                          </button>
                          <button class="btn btn-ghost" onclick="sellWeaponAction('${weapon.id}')">
                            Sell Weapon
                          </button>
                        </div>
                      </div>
                    `
                  )
                  .join("")
              : `<div class="panel-card"><p class="muted">No additional weapons owned yet.</p></div>`}
          </div>

          <div class="panel-card">
            <p class="label">Ship Resale</p>
            <p class="muted">
              Sell your current hull for ${shipSellValue} credits and revert to your starter ship.
            </p>
            <div class="app-actions">
              <button class="btn btn-ghost" onclick="sellShipAction()">Sell Ship</button>
            </div>
          </div>

          <h2 class="panel-title">Passive Systems (${passiveSlotsUsed}/${passiveSlots})</h2>
          <div class="panel-row">
            ${
              installedPassives.length
                ? installedPassives
                    .map(
                      (passive) => `
                        <div class="panel-card">
                          <p class="label">${passive.name}</p>
                          <p class="muted">${describePassiveMeta(passive) || "Passive bonus"}</p>
                          <div class="app-actions">
                            <button class="btn btn-ghost" onclick="sellPassiveAction('${passive.id}')">
                              Sell ${Math.floor((passive.cost ?? 0) * PASSIVE_SELL_RATIO)}
                            </button>
                          </div>
                        </div>
                      `
                    )
                    .join("")
                : `<div class="panel-card"><p class="muted">${
                    passiveSlots ? "No passive systems installed yet." : "This hull has no passive slots."
                  }</p></div>`
            }
          </div>

          <h2 class="panel-title">Passive Inventory (${inventoryPassiveDefs.length})</h2>
          <div class="panel-row">
            ${
              inventoryPassiveDefs.length
                ? inventoryPassiveDefs
                    .map(
                      (passive) => `
                        <div class="panel-card">
                          <p class="label">${passive.name}</p>
                          <p class="muted">${describePassiveMeta(passive)}</p>
                          <div class="app-actions">
                            <button
                              class="btn btn-primary${passiveSlotsUsed >= passiveSlots ? " disabled" : ""}"
                              onclick="installPassiveAction('${passive.id}')"
                            >
                              Install
                            </button>
                            <button class="btn btn-ghost" onclick="sellPassiveAction('${passive.id}')">
                              Sell ${Math.floor((passive.cost ?? 0) * PASSIVE_SELL_RATIO)}
                            </button>
                          </div>
                        </div>
                      `
                    )
                    .join("")
                : `<div class="panel-card"><p class="muted">No passives in inventory.</p></div>`
            }
          </div>

          <h2 class="panel-title">Available Passive Systems</h2>
          <div class="panel-row">
            ${
              passiveCatalog.length
                ? passiveCatalog
                    .map((passive) => {
                      const price = passive.cost ?? 0;
                      const isOwned = ownedPassiveIds.has(passive.id);
                      const buyDisabled = isOwned || credits < price;
                      const installDisabled =
                        !inventoryPassiveIds.includes(passive.id) || passiveSlotsUsed >= passiveSlots;
                      return `
                        <div class="panel-card">
                          <p class="label">${passive.name}</p>
                          <p class="muted">${describePassiveMeta(passive)}</p>
                          <div class="app-actions">
                            <button class="btn btn-primary"${buyDisabled ? " disabled" : ""} onclick="buyPassiveAction('${passive.id}')">
                              ${isOwned ? "Owned" : `Buy (${price} cr)`}
                            </button>
                            <button class="btn btn-ghost"${installDisabled ? " disabled" : ""} onclick="installPassiveAction('${passive.id}')">
                              Install
                            </button>
                          </div>
                        </div>
                      `;
                    })
                    .join("")
                : `<div class="panel-card"><p class="muted">No passive systems available.</p></div>`
            }
          </div>

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

function describePassiveMeta(passive: ComponentDef): string {
  if (passive.effects && Object.keys(passive.effects).length) {
    return Object.entries(passive.effects)
      .map(([key, value]) => `${key} ${value}`)
      .join(" | ");
  }
  return passive.description || "";
}
