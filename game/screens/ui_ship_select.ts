import { getStarterShips, chooseStarterShip } from "../systems/shipSystem";
import { autoEquipAvailableWeapons } from "../systems/weaponSystem";
import { navigation } from "../core/navigation";
import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
import type { ShipDef } from "../core/contentTypes";

type EffectFormatter = (value: number) => string | null;

const passiveEffectFormatters: Record<string, EffectFormatter> = {
  incomeMultiplier: (value) => formatDifference(value, "income"),
  eventRewardMultiplier: (value) => formatDifference(value, "event rewards"),
  hpBonus: (value) => formatDifference(value, "hull"),
  cargoBonus: (value) => formatAbsolute(value, "cargo capacity"),
  sellBonus: (value) => formatDifference(value, "sell price"),
  buyBonus: (value) => formatDifference(value, "buy price"),
  marketTax: (value) => formatDifference(value, "market tax"),
  miningYield: (value) => formatDifference(value, "mining yield"),
  rareFindChance: (value) => formatDifference(value, "rare find chance"),
  miningSpeed: (value) => formatDifference(value, "mining duration"),
  dodgeBonus: (value) => formatPercent(value, "dodge chance"),
  critBonus: (value) => formatPercent(value, "crit chance"),
  damageTakenMultiplier: (value) => formatDifference(value, "damage taken"),
  fleeBonus: (value) => formatPercent(value, "flee chance"),
  pirateDetectionMultiplier: (value) => formatDifference(value, "pirate detection"),
  scanDetectionMultiplier: (value) => formatDifference(value, "scan detection"),
  illegalTolerance: (value) => formatDifference(value, "illegal tolerance"),
  fuelCostMultiplier: (value) => formatDifference(value, "fuel cost"),
  hazardDetectionBonus: (value) => formatPercent(value, "hazard detection"),
  anomalyChance: (value) => formatDifference(value, "anomaly chance"),
  shieldRegenBonus: (value) => formatDifference(value, "shield regen")
};

function describePassiveEffects(ship: ShipDef): string[] {
  const effects = ship.passive?.effects;
  if (!effects) return [];
  return Object.entries(effects)
    .map(([key, value]) => passiveEffectFormatters[key]?.(value) ?? null)
    .filter((line): line is string => Boolean(line));
}

function formatDifference(value: number, label: string): string | null {
  if (!Number.isFinite(value)) return null;
  const diff = Math.round((value - 1) * 100);
  if (diff === 0) return null;
  const sign = diff > 0 ? "+" : "";
  return `${sign}${diff}% ${label}`;
}

function formatPercent(value: number, label: string): string | null {
  if (!Number.isFinite(value)) return null;
  const pct = Math.round(value * 100);
  if (pct === 0) return null;
  const sign = pct > 0 ? "+" : "";
  return `${sign}${pct}% ${label}`;
}

function formatAbsolute(value: number, label: string): string | null {
  if (!Number.isFinite(value)) return null;
  const amount = Math.round(value);
  if (amount === 0) return null;
  const sign = amount > 0 ? "+" : "";
  return `${sign}${amount} ${label}`;
}

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
    .map((ship) => {
      const passiveLines = describePassiveEffects(ship);
      const passiveBlock = ship.passive?.name
        ? `
        <div class="passive-summary">
          <p class="muted">Passive: ${ship.passive.name}</p>
          ${
            passiveLines.length
              ? `<ul class="passive-summary__list">${passiveLines
                  .map((line) => `<li>${line}</li>`)
                  .join("")}</ul>`
              : ""
          }
        </div>
      `
        : "";

      return `
      <div class="panel-card">
        <p class="label">${ship.roleHint}</p>
        <p class="value-inline"><strong>${ship.name}</strong></p>
        <p class="muted">${ship.description}</p>
        ${passiveBlock}
        <p class="muted">Hull ${ship.hull} | Shields ${ship.shields} | Fuel ${ship.fuel} | Cargo ${ship.cargo}</p>
        <button class="btn btn-primary" onclick="chooseStarter('${ship.id}')">Choose ${ship.name}</button>
      </div>
    `;
    })
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
