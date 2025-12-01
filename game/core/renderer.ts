import { navigation } from "./navigation";
import type { ScreenID } from "./navigation";
import { getCurrentSystem } from "../systems/travelSystem";
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
import { GameOverScreen } from "../screens/ui_gameover";
import { PerkScreen } from "../screens/ui_perks";
import { startCombat } from "../systems/combatSystem";
import { startMiningSession } from "../systems/miningSystem";
import {
  devTune,
  persistDevTune,
  gameState,
  DEFAULT_DEV_TUNE,
  resetCombatTuning
} from "./state";
import { persistCurrentEvents, clearEventCache } from "../systems/eventSystem";
import { drawPixelBackground, setPixelScene } from "../systems/pixelBackgroundSystem";

type DevControl = {
  path: string;
  label: string;
  min: number;
  max: number;
  step: number;
  formatter: (value: number) => string;
};

const DEV_CONTROL_SECTIONS: { title: string; controls: DevControl[] }[] = [
  {
    title: "Global",
    controls: [
      {
        path: "combat.globalIncomeMultiplier",
        label: "Global Income Multiplier",
        min: 0.1,
        max: 5,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      },
      {
        path: "combat.globalDangerMultiplier",
        label: "Global Danger Multiplier",
        min: 0,
        max: 3,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      }
    ]
  },
  {
    title: "Travel & Encounters",
    controls: [
      {
        path: "combat.encounterChancePerJump",
        label: "Encounter Chance / Jump",
        min: 0,
        max: 200,
        step: 5,
        formatter: (value) => `${value.toFixed(0)}%`
      },
      {
        path: "combat.pirateEncounterRateBase",
        label: "Pirate Encounter Weight",
        min: 0,
        max: 100,
        step: 1,
        formatter: (value) => `${value.toFixed(0)}%`
      },
      {
        path: "combat.nonPirateEventWeight",
        label: "Non-Pirate Event Weight",
        min: 0,
        max: 3,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      }
    ]
  },
{
  title: "Combat",
    controls: [
      {
        path: "combat.enemyHpMultiplier",
        label: "Enemy HP Multiplier",
        min: 0.25,
        max: 5,
        step: 0.05,
        formatter: (value) => `${value.toFixed(2)}x`
      },
      {
        path: "combat.enemyDamageMultiplier",
        label: "Enemy Damage Multiplier",
        min: 0.25,
        max: 5,
        step: 0.05,
        formatter: (value) => `${value.toFixed(2)}x`
      },
      {
        path: "combat.enemyAccuracyMultiplier",
        label: "Enemy Accuracy Multiplier",
        min: 0.1,
        max: 2,
        step: 0.05,
        formatter: (value) => `${value.toFixed(2)}x`
      },
      {
        path: "combat.creditsRewardMultiplier",
        label: "Combat Credits Reward",
        min: 0.1,
        max: 5,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      },
    {
      path: "combat.enemyCountMin",
      label: "Min Enemy Count",
      min: 1,
      max: 10,
      step: 1,
      formatter: (value) => `${value.toFixed(0)}`
    },
    {
      path: "combat.enemyCountMax",
      label: "Max Enemy Count",
      min: 1,
      max: 10,
      step: 1,
      formatter: (value) => `${value.toFixed(0)}`
    }
  ]
},
  {
    title: "Economy",
    controls: [
      {
        path: "miningYieldMultiplier",
        label: "Mining Yield Multiplier",
        min: 0.1,
        max: 5,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      },
      {
        path: "tradeProfitMultiplier",
        label: "Trade Profit Multiplier",
        min: 0.1,
        max: 3,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      },
      {
        path: "contractPayoutMultiplier",
        label: "Contract Payout Multiplier",
        min: 0.1,
        max: 5,
        step: 0.1,
        formatter: (value) => `${value.toFixed(2)}x`
      }
    ]
  },
  {
    title: "Mining",
    controls: [
      {
        path: "miningEfficiency",
        label: "Mining Efficiency",
        min: 0.1,
        max: 1,
        step: 0.1,
        formatter: (value) => `${(value * 100).toFixed(0)}%`
      },
      {
        path: "miningPayoutMultiplier",
        label: "Mining Payout Mult",
        min: 0.05,
        max: 1,
        step: 0.1,
        formatter: (value) => `${(value * 100).toFixed(0)}%`
      }
      ,
      {
        path: "miningThreatMultiplier",
        label: "Mining Threat Mult",
        min: 0.4,
        max: 1,
        step: 0.05,
        formatter: (value) => `${(value * 100).toFixed(0)}%`
      }
      ,
      {
        path: "drillDamageMultiplier",
        label: "Drill Damage Mult",
        min: 0.5,
        max: 2,
        step: 0.1,
        formatter: (value) => `${value.toFixed(1)}x`
      }
    ]
  },
  {
    title: "Debug",
    controls: [
      {
        path: "combat.showEncounterDebug",
        label: "Show Encounter Debug",
        min: 0,
        max: 1,
        step: 1,
        formatter: (value) => (value ? "On" : "Off")
      }
    ]
  }
];

const DEV_CONTROL_MAP = DEV_CONTROL_SECTIONS.flatMap((section) => section.controls).reduce<
  Record<string, DevControl>
>((acc, control) => {
  acc[control.path] = control;
  return acc;
}, {} as Record<string, DevControl>);

type PixelScene = Parameters<typeof setPixelScene>[0];

const SCREEN_PIXEL_SCENES: Record<ScreenID, PixelScene> = {
  main: "space",
  travel: "space",
  market: "hangar",
  contracts: "ops",
  ship: "space",
  weapon_slots: "space",
  weapon_select: "space",
  event: "space",
  combat: "combat",
  shipyard: "hangar",
  ship_select: "space",
  mining: "mining",
  gameover: "space"
};

function getDevValue(path: string): number {
  const parts = path.split(".");
  let current: any = devTune;
  for (const part of parts) {
    if (current == null) return 0;
    current = current[part];
  }
  return typeof current === "number" ? current : 0;
}

function setDevValue(path: string, value: number): void {
  const parts = path.split(".");
  let current: any = devTune;
  for (let i = 0; i < parts.length - 1; i++) {
    const part = parts[i];
    current[part] = current[part] ?? {};
    current = current[part];
  }
  current[parts[parts.length - 1]] = value;
}

declare global {
  interface Window {
    devCombat?: (enemyId?: string) => void;
    devMining?: () => void;
  }
}

window.devCombat = (enemyId: string = "pirate_cutter") => {
  startCombat(enemyId);
};

window.devMining = () => {
  const started = startMiningSession(gameState, gameState.location.systemId);
  if (started) {
    navigation.go("mining");
  } else {
    navigation.go("main", { message: "Travel to a new system before mining again." });
  }
};

function renderDevControlSections(): string {
  return DEV_CONTROL_SECTIONS.map((section) => {
    const controlsHtml = section.controls
      .map(
        (control) => `
        <div class="dev-control">
          <div class="dev-control__label">
            <span>${control.label}</span>
            <span class="dev-control__value" id="devValue-${control.path.replace(/\./g, "__")}">
              ${control.formatter(getDevValue(control.path))}
            </span>
          </div>
          <input
            type="range"
            data-dev-path="${control.path}"
            min="${control.min}"
            max="${control.max}"
            step="${control.step}"
            value="${getDevValue(control.path)}"
          />
        </div>
      `
      )
      .join("");

    return `
      <section class="dev-section">
        <h3>${section.title}</h3>
        ${controlsHtml}
      </section>
    `;
  }).join("");
}

function reportDevSettings(payload: string): void {
  const handleCopyError = () => {
    window.prompt("Dev settings snapshot (copy manually):", payload);
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard
      .writeText(payload)
      .then(() => {
        alert("Dev settings copied to clipboard.");
      })
      .catch(() => {
        handleCopyError();
      });
  } else {
    handleCopyError();
  }
  console.log("Dev settings report:", payload);
}

export function render() {
  const app = document.getElementById("app");
  if (!app) return;

  const scene = SCREEN_PIXEL_SCENES[navigation.current] ?? "space";
  setPixelScene(scene);

  let html = "";

  // Keep the pixel background fresh on render transitions.
  drawPixelBackground(null, performance.now());

  // Auto-provision a mining session when the player is in a mining-tagged system,
  // so "Mining" is always actionable after travel.
  if (
    navigation.current === "mining" &&
    !gameState.miningSession &&
    gameState.location?.systemId
  ) {
    const system = getCurrentSystem();
    const tags = new Set(system?.tags ?? []);
    if ((tags.has("mining_belt") || tags.has("mining")) && gameState.lastMiningSystemId !== gameState.location.systemId) {
      startMiningSession(gameState, gameState.location.systemId);
    }
  }

  switch (navigation.current) {
    case "main":
      html = MainScreen();
      break;
    case "travel":
      html = TravelScreen();
      break;
    case "market":
      html = MarketScreen(navigation.params);
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
    case "perks":
      html = PerkScreen();
      break;
    case "gameover":
      html = GameOverScreen();
      break;
  }

  const devPanel = `
    <div id="devPanel" class="dev-panel hidden">
      <div class="dev-panel-header">
        <h2>Balance Control Panel</h2>
        <button class="btn btn-ghost dev-close" id="devClose">Close</button>
      </div>
      ${renderDevControlSections()}
      <section class="dev-section">
        <h3>Quick Actions</h3>
          <div class="dev-actions">
            <button class="btn btn-primary" id="devSpawnPirates">Spawn Pirate Encounter</button>
            <button class="btn btn-primary" id="devTriggerMining">Trigger Mining Event</button>
            <button class="btn btn-primary" id="devAddCredits">+1000 Credits</button>
            <button class="btn btn-primary" id="devFillCargo">Fill Cargo</button>
            <button class="btn btn-primary" id="devGodMode">Toggle God Mode</button>
            <button class="btn btn-primary" id="devReportSettings">Report Dev Settings</button>
            <button class="btn btn-ghost" id="devPersistEvents">Save Event Cache</button>
            <button class="btn btn-ghost" id="devClearEvents">Clear Event Cache</button>
            <button class="btn btn-ghost" id="devHardReset">Hard Reset Game</button>
          </div>
      </section>
      <section class="dev-section">
        <h3>Mining Tools</h3>
        <div class="dev-actions">
          <button class="btn btn-primary" id="devResetMiningSession">Reset Mining Session</button>
          <button class="btn btn-primary" id="devSpikeThreat">Max Threat</button>
          <button class="btn btn-primary" id="devLogMiningGrid">Log Mining Grid</button>
        </div>
        <div class="dev-mining-status" id="devMiningStatus"></div>
      </section>
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
  const btnReportSettings = document.getElementById("devReportSettings");
  const btnResetMiningSession = document.getElementById("devResetMiningSession");
  const btnSpikeThreat = document.getElementById("devSpikeThreat");
  const btnLogMining = document.getElementById("devLogMiningGrid");
  const navTravel = document.getElementById("navTravel");
  const navMarket = document.getElementById("navMarket");
  const navShip = document.getElementById("navShip");
  const btnPersistEvents = document.getElementById("devPersistEvents");
  const btnClearEvents = document.getElementById("devClearEvents");
    const btnHardReset = document.getElementById("devHardReset");
    const sliderInputs = panel?.querySelectorAll<HTMLInputElement>("input[data-dev-path]");
    const miningStatusEl = document.getElementById("devMiningStatus");

  const togglePanel = () => {
    if (!panel) return;
    panel.classList.toggle("hidden");
  };

  const updateValueLabel = (path: string) => {
    const control = DEV_CONTROL_MAP[path];
    const valueEl = document.getElementById(`devValue-${path.replace(/\./g, "__")}`);
    if (control && valueEl) {
      valueEl.textContent = control.formatter(getDevValue(path));
    }
  };

  sliderInputs?.forEach((input) => {
    const applySlider = () => {
      const path = input.dataset.devPath;
      if (!path) return;
      const value = Number(input.value);
      setDevValue(path, value);
      persistDevTune();
      updateValueLabel(path);
    };
    input.addEventListener("input", applySlider);
  });

  const renderMiningStatus = () => {
    if (!miningStatusEl) return;
    const session = gameState.miningSession;
    if (!session) {
      miningStatusEl.textContent = "No active mining session.";
      return;
    }
    const threat = (session.threat ?? 0).toFixed(1);
    const depth = session.depth ?? 0;
    miningStatusEl.innerHTML = `
      <div>System: ${session.systemId}</div>
      <div>Belt: ${session.beltName ?? session.beltId ?? "—"}</div>
      <div>Depth: Z${depth}</div>
      <div>Threat: ${threat}%</div>
      <div>Exploration: ${(session.explorationScore ?? 0).toFixed(2)}</div>
      <div>Drills: ${session.drillsUsed ?? 0}</div>
      <div>Selected: ${
        session.selectedRow != null ? `X${session.selectedCol! + 1} Y${session.selectedRow + 1}` : "none"
      }</div>
    `;
  };
  renderMiningStatus();

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

  btnReportSettings?.addEventListener("click", () => {
    const payload = JSON.stringify(
      {
        timestamp: new Date().toISOString(),
        devTune
      },
      null,
      2
    );
    reportDevSettings(payload);
    panel?.classList.add("hidden");
  });

  btnResetMiningSession?.addEventListener("click", () => {
    startMiningSession(gameState, gameState.location.systemId, gameState.miningSession?.beltId);
    panel?.classList.add("hidden");
    render();
    renderMiningStatus();
  });

  btnSpikeThreat?.addEventListener("click", () => {
    const session = gameState.miningSession;
    if (!session) return;
    session.threat = 95;
    session.currentPirateChance = 0.95;
    panel?.classList.add("hidden");
    render();
    renderMiningStatus();
  });

  btnLogMining?.addEventListener("click", () => {
    console.group("Mining Debug");
    console.log("Mining Session", gameState.miningSession);
    console.groupEnd();
  });

  btnPersistEvents?.addEventListener("click", () => {
    persistCurrentEvents();
    alert("Events cached locally. Future loads will honor this list.");
  });

  btnClearEvents?.addEventListener("click", () => {
    clearEventCache();
    alert("Event cache cleared. Future loads use the bundled data.");
  });

  btnHardReset?.addEventListener("click", () => {
    const confirmed = window.confirm(
      "This will clear saved state (local+session storage) and reload the page. Continue?"
    );
    if (!confirmed) return;
    window.localStorage?.clear();
    window.sessionStorage?.clear();
    window.location.reload();
  });

  if (!devHotkeyAttached) {
    document.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        togglePanel();
      }
      if (
        e.key === "Escape" &&
        navigation.current !== "main" &&
        navigation.current !== "event"
      ) {
        window.nav?.("main");
      }
    });
    devHotkeyAttached = true;
  }
}
