import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import {
  canEquipWeapon,
  equipWeapon,
  getWeaponById,
  getInventoryWeaponIds,
  getWeaponHint
} from "../systems/weaponSystem";

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

declare global {
  interface Window {
    equipWeaponAction: (slotIndex: number, weaponId: string) => void;
  }
}

window.equipWeaponAction = (slotIndex: number, weaponId: string) => {
  if (equipWeapon(slotIndex, weaponId)) {
    nav("weapon_slots");
  }
};

export function WeaponSelectScreen(params: Record<string, unknown> = {}): string {
  const slotIndex =
    typeof params.slotIndex === "number" && params.slotIndex >= 0
      ? params.slotIndex
      : 0;
  const slot = gameState.ship.hardpoints[slotIndex];
  if (!slot) {
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
            <h1 class="panel-title">Weapon Selection</h1>
            <p>Invalid hardpoint.</p>
          </section>
        </main>
        <footer class="app-footer">
          <button class="btn btn-ghost btn-small" onclick="nav('weapon_slots')">Back</button>
          <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
        </footer>
      </div>
    `;
  }

  const ownedWeaponIds = getInventoryWeaponIds();
  const ownedWeapons = ownedWeaponIds
    .map((id) => getWeaponById(id))
    .filter((w): w is NonNullable<ReturnType<typeof getWeaponById>> => !!w);

  const rows = ownedWeapons
    .map((weapon) => {
      const compatible = canEquipWeapon(slotIndex, weapon.id);
      const equipped = getWeaponById(gameState.ship.weapons[slotIndex])?.id === weapon.id;
      const buttonLabel = equipped ? "Equipped" : "Equip";
      const hint = getWeaponHint(weapon);
      const traitLine = hint.tagNotes.length ? `<br/>Traits: ${hint.tagNotes.join(", ")}` : "";
      return `
        <div class="panel-card ${compatible ? "" : "muted"}">
          <p class="label">${weapon.size} / ${weapon.type}</p>
          <p class="value-inline"><strong>${weapon.name}</strong></p>
          <p class="muted">Damage ${weapon.damage} (${weapon.damageType}) · Acc ${Math.round(weapon.accuracy * 100)}% · Crit ${Math.round(weapon.critChance * 100)}% (×${weapon.critMultiplier}) · CD ${weapon.cooldown}</p>
          <p class="muted">Role: ${hint.role} (${hint.typeLabel}) · Vs Shields: ${hint.vsShields} · Vs Hull: ${hint.vsHull}${traitLine}</p>
          <button class="btn btn-primary" ${compatible ? "" : "disabled"} onclick="equipWeaponAction(${slotIndex}, '${weapon.id}')">
            ${buttonLabel}
          </button>
        </div>
      `;
    })
    .join("");

  const cards =
    rows ||
    `<div class="panel-card"><p class="muted">No owned weapons available. Buy or loot weapons to equip.</p></div>`;

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Select Weapon</span>
        </div>
        <div class="app-meta app-meta--centered">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Weapon Selection</h1>
          <p class="muted">Hardpoint: ${slot.size} ${slot.type}</p>
          <div class="panel-row">
            ${cards}
          </div>
        </section>
      </main>

      <footer class="app-footer">
        <button class="btn btn-ghost btn-small" onclick="nav('weapon_slots')">Back</button>
        <button class="btn btn-ghost btn-small" id="navDev">Dev</button>
      </footer>
    </div>
  `;
}
