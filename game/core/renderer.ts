import { navigation } from "./navigation";
import { MainScreen } from "../screens/ui_main";
import { TravelScreen } from "../screens/ui_travel";
import { MarketScreen } from "../screens/ui_market";
import { ContractsScreen } from "../screens/ui_contracts";
import { ShipScreen } from "../screens/ui_ship";
import { EventScreen } from "../screens/ui_event";
import { CombatScreen } from "../screens/ui_combat";
import { ShipyardScreen } from "../screens/ui_shipyard";
import { ShipSelectScreen } from "../screens/ui_ship_select";
import { WeaponSlotsScreen } from "../screens/ui_weapon_slots";
import { WeaponSelectScreen } from "../screens/ui_weapon_select";
import { MiningScreen } from "../screens/ui_mining";
import { gameState } from "./state";

export function render() {
  const app = document.getElementById("app");
  if (!app) return;

  let html = "";

  switch (navigation.current) {
    case "main":
      html = MainScreen();
      break;
    case "travel":
      html = TravelScreen();
      break;
    case "market":
      html = MarketScreen();
      break;
    case "contracts":
      html = ContractsScreen();
      break;
    case "ship":
      html = ShipScreen();
      break;
    case "event":
      html = EventScreen(navigation.params);
      break;
    case "combat":
      html = CombatScreen(navigation.params);
      break;
    case "weapon_slots":
      html = WeaponSlotsScreen();
      break;
    case "weapon_select":
      html = WeaponSelectScreen(navigation.params);
      break;
    case "shipyard":
      html = ShipyardScreen();
      break;
    case "ship_select":
      html = ShipSelectScreen();
      break;
    case "mining":
      html = MiningScreen();
      break;
  }

  const devPanel = `
    <div id="devPanel" class="dev-panel hidden">
      <h2>Developer Tools</h2>
      <button class="btn btn-primary" id="devSpawnPirates">Spawn Pirate Encounter</button>
      <button class="btn btn-primary" id="devTriggerMining">Trigger Mining Event</button>
      <button class="btn btn-primary" id="devAddCredits">+1000 Credits</button>
      <button class="btn btn-primary" id="devFillCargo">Fill Cargo</button>
      <button class="btn btn-primary" id="devGodMode">Toggle God Mode</button>
      <button class="btn btn-ghost" id="devClose">Close</button>
    </div>
  `;

  app.innerHTML = `${html}${devPanel}`;
  wireDevPanel();
}

let devGodMode = false;
let devHotkeyAttached = false;

function wireDevPanel() {
  const navDev = document.getElementById("navDev");
  const panel = document.getElementById("devPanel");
  const closeBtn = document.getElementById("devClose");
  const btnPirates = document.getElementById("devSpawnPirates");
  const btnMining = document.getElementById("devTriggerMining");
  const btnCredits = document.getElementById("devAddCredits");
  const btnCargo = document.getElementById("devFillCargo");
  const btnGod = document.getElementById("devGodMode");
  const navTravel = document.getElementById("navTravel");
  const navMarket = document.getElementById("navMarket");
  const navShip = document.getElementById("navShip");

  const togglePanel = () => {
    if (!panel) return;
    panel.classList.toggle("hidden");
  };

  navDev?.addEventListener("click", togglePanel);
  closeBtn?.addEventListener("click", () => panel?.classList.add("hidden"));

  navTravel?.addEventListener("click", () => window.nav?.("travel"));
  navMarket?.addEventListener("click", () => window.nav?.("market"));
  navShip?.addEventListener("click", () => window.nav?.("ship"));

  btnPirates?.addEventListener("click", () => {
    panel?.classList.add("hidden");
    window.devCombat?.("pirate_cutter");
  });

  btnMining?.addEventListener("click", () => {
    panel?.classList.add("hidden");
    window.devMining?.();
  });

  btnCredits?.addEventListener("click", () => {
    gameState.player.credits += 1000;
    panel?.classList.add("hidden");
    render();
  });

  btnCargo?.addEventListener("click", () => {
    const cargo = gameState.ship.cargo || {};
    cargo["aurite_ore"] = (cargo["aurite_ore"] || 0) + 20;
    gameState.ship.cargo = cargo;
    panel?.classList.add("hidden");
    render();
  });

  btnGod?.addEventListener("click", () => {
    devGodMode = !devGodMode;
    (gameState as any).godMode = devGodMode;
    if (devGodMode) {
      gameState.ship.hp = gameState.ship.maxHp;
      gameState.ship.shields = gameState.ship.maxShields;
    }
    alert(`God Mode: ${devGodMode ? "On" : "Off"}`);
  });

  if (!devHotkeyAttached) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        togglePanel();
      }
    });
    devHotkeyAttached = true;
  }
}
