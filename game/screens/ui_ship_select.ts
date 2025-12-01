import { getStarterShips, chooseStarterShip } from "../systems/shipSystem";
import { autoEquipAvailableWeapons } from "../systems/weaponSystem";
import { navigation } from "../core/navigation";
import { gameState } from "../core/state";
import type { ShipDef } from "../core/contentTypes";
import { formatHardpointSummary } from "./weaponSlotSummary";

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

type AbilityCaps = {
  maxHull: number;
  maxShields: number;
  maxFuel: number;
  maxCargo: number;
};

function renderAbilityBars(ship: ShipDef, caps: AbilityCaps): string {
  const stats = [
    { label: "Hull", value: ship.hull, max: caps.maxHull },
    { label: "Shields", value: ship.shields, max: caps.maxShields },
    { label: "Fuel", value: ship.fuel, max: caps.maxFuel },
    { label: "Cargo", value: ship.cargo, max: caps.maxCargo }
  ];
  return `
    <div class="ability-bars">
      ${stats
        .map((stat) => {
          const percent = Math.min(100, Math.round((stat.value / Math.max(1, stat.max)) * 100));
          return `
            <div class="ability-row">
              <span>${stat.label}</span>
              <div class="ability-bar">
                <div class="ability-bar__fill" style="width:${percent}%"></div>
              </div>
              <strong>${stat.value}</strong>
            </div>
          `;
        })
        .join("")}
    </div>
  `;
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
  const caps = {
    maxHull: Math.max(...starters.map((s) => s.hull), 100),
    maxShields: Math.max(...starters.map((s) => s.shields), 100),
    maxFuel: Math.max(...starters.map((s) => s.fuel), 100),
    maxCargo: Math.max(...starters.map((s) => s.cargo), 50)
  };

  if (starters.length === 0) {
    return `
      <div class="app-root">
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
              ? `<div class="passive-summary__list">${passiveLines
                  .map((line) => `<span>${line}</span>`)
                  .join("")}</div>`
              : ""
          }
        </div>
      `
        : "";

      const slotSummary = formatHardpointSummary(ship.hardpoints);
      return `
      <button class="panel-card starter-card btn-starter" type="button" onclick="chooseStarter('${ship.id}')">
        <div class="starter-card-head starter-card-head--stacked">
          <div class="starter-head__ship starter-head__ship--stacked">
            ${renderStarterIcon(ship.id, ship.roleHint ?? ship.name)}
            <div>
              <p class="label">${ship.roleHint}</p>
              <p class="value-inline"><strong>${ship.name}</strong></p>
            </div>
          </div>
          <div class="starter-head__passive">
            ${passiveBlock || `<p class="muted">No passive</p>`}
          </div>
        </div>
        <div class="starter-card-body">
          ${renderAbilityBars(ship, caps)}
          <p class="muted">Weapon slots: ${slotSummary}</p>
        </div>
      </button>
    `;
    })
    .join("");

  return `
    <div class="app-root">
      <div class="mobile-bg-slice"></div>
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Starter Hangar</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Select Your Starter Ship</h1>
          <p class="muted">Pick a hull to define your opening playstyle.</p>
          <div class="panel-row starter-grid">
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

type StarterDot = { x: number; y: number; c: "a" | "b" | "c" };

const STARTER_PALETTES: Array<{ a: string; b: string; c: string }> = [
  { a: "#00f0ff", b: "#0084d6", c: "#031624" },
  { a: "#ffd166", b: "#ff8f49", c: "#2c1d0a" },
  { a: "#bde0fe", b: "#6fb5ff", c: "#0b1a32" },
  { a: "#ff8ce5", b: "#b14dff", c: "#2d0a46" }
];

const STARTER_SHAPES: Record<string, StarterDot[][]> = {
  fighter: [
    [
      { x: 4, y: 1, c: "b" },
      { x: 5, y: 1, c: "a" },
      { x: 6, y: 1, c: "b" },
      { x: 3, y: 2, c: "b" },
      { x: 4, y: 2, c: "a" },
      { x: 5, y: 2, c: "a" },
      { x: 6, y: 2, c: "a" },
      { x: 7, y: 2, c: "b" },
      { x: 2, y: 3, c: "c" },
      { x: 3, y: 3, c: "a" },
      { x: 4, y: 3, c: "b" },
      { x: 5, y: 3, c: "a" },
      { x: 6, y: 3, c: "b" },
      { x: 7, y: 3, c: "a" },
      { x: 8, y: 3, c: "c" },
      { x: 4, y: 4, c: "b" },
      { x: 5, y: 4, c: "a" },
      { x: 6, y: 4, c: "b" },
      { x: 5, y: 5, c: "a" }
    ],
    [
      { x: 3, y: 0, c: "a" },
      { x: 4, y: 0, c: "b" },
      { x: 5, y: 0, c: "a" },
      { x: 6, y: 0, c: "b" },
      { x: 4, y: 1, c: "a" },
      { x: 5, y: 1, c: "b" },
      { x: 5, y: 2, c: "a" },
      { x: 4, y: 2, c: "a" },
      { x: 6, y: 2, c: "a" },
      { x: 5, y: 3, c: "c" }
    ]
  ],
  mining: [
    [
      { x: 3, y: 2, c: "b" },
      { x: 4, y: 2, c: "a" },
      { x: 5, y: 2, c: "a" },
      { x: 6, y: 2, c: "b" },
      { x: 2, y: 3, c: "c" },
      { x: 3, y: 3, c: "a" },
      { x: 4, y: 3, c: "b" },
      { x: 5, y: 3, c: "b" },
      { x: 6, y: 3, c: "a" },
      { x: 7, y: 3, c: "a" },
      { x: 3, y: 4, c: "b" },
      { x: 4, y: 4, c: "a" },
      { x: 5, y: 4, c: "a" },
      { x: 6, y: 4, c: "b" },
      { x: 5, y: 5, c: "c" }
    ],
    [
      { x: 2, y: 3, c: "b" },
      { x: 3, y: 3, c: "b" },
      { x: 4, y: 3, c: "a" },
      { x: 5, y: 3, c: "b" },
      { x: 6, y: 3, c: "a" },
      { x: 7, y: 3, c: "b" },
      { x: 5, y: 4, c: "c" },
      { x: 4, y: 4, c: "a" },
      { x: 5, y: 5, c: "a" },
      { x: 6, y: 4, c: "a" }
    ]
  ],
  cargo: [
    [
      { x: 2, y: 3, c: "b" },
      { x: 3, y: 3, c: "a" },
      { x: 4, y: 3, c: "a" },
      { x: 5, y: 3, c: "a" },
      { x: 6, y: 3, c: "a" },
      { x: 7, y: 3, c: "b" },
      { x: 2, y: 4, c: "b" },
      { x: 3, y: 4, c: "c" },
      { x: 4, y: 4, c: "a" },
      { x: 5, y: 4, c: "a" },
      { x: 6, y: 4, c: "c" },
      { x: 7, y: 4, c: "b" },
      { x: 3, y: 5, c: "b" },
      { x: 4, y: 5, c: "a" },
      { x: 5, y: 5, c: "b" }
    ],
    [
      { x: 3, y: 2, c: "b" },
      { x: 4, y: 2, c: "a" },
      { x: 5, y: 2, c: "a" },
      { x: 6, y: 2, c: "b" },
      { x: 2, y: 3, c: "b" },
      { x: 3, y: 3, c: "c" },
      { x: 4, y: 3, c: "a" },
      { x: 5, y: 3, c: "a" },
      { x: 6, y: 3, c: "c" },
      { x: 7, y: 3, c: "b" },
      { x: 3, y: 4, c: "b" },
      { x: 4, y: 4, c: "a" },
      { x: 5, y: 4, c: "a" },
      { x: 6, y: 4, c: "b" }
    ]
  ]
};
function hashString(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pickStarterPalette(seed: string) {
  return STARTER_PALETTES[hashString(seed) % STARTER_PALETTES.length];
}

function decorateStarterShape(base: StarterDot[], seed: string) {
  const rng = ((): (() => number) => {
    let val = hashString(seed);
    return () => {
      val = (val * 1664525 + 1013904223) | 0;
      return (val >>> 0) / 0xffffffff;
    };
  })();
  const copy = [...base];
  const maxY = Math.max(...base.map((p) => p.y));
  const minY = Math.min(...base.map((p) => p.y));
  if (rng() > 0.5) {
    copy.push({ x: base[0]?.x ?? 4, y: minY - 1, c: "a" });
  }
  copy.push({ x: base[base.length - 1]?.x ?? 5, y: maxY + 1, c: rng() > 0.5 ? "b" : "c" });
  return copy;
}

function centerStarterPixels(pixels: StarterDot[], size = 12): StarterDot[] {
  const minX = Math.min(...pixels.map((p) => p.x));
  const maxX = Math.max(...pixels.map((p) => p.x));
  const minY = Math.min(...pixels.map((p) => p.y));
  const maxY = Math.max(...pixels.map((p) => p.y));
  const spanX = maxX - minX + 1;
  const spanY = maxY - minY + 1;
  const offsetX = Math.floor((size - spanX) / 2) - minX;
  const offsetY = Math.floor((size - spanY) / 2) - minY;
  return pixels.map((p) => ({ ...p, x: p.x + offsetX, y: p.y + offsetY }));
}

function resolveStarterShape(shipId: string, hint: string): StarterDot[] {
  const normalized = hint?.toLowerCase() ?? "fighter";
  const group = Object.keys(STARTER_SHAPES).find((role) => normalized.includes(role)) ?? "fighter";
  const shapes = STARTER_SHAPES[group];
  const idx = hashString(`${shipId}-${hint}`) % shapes.length;
  return shapes[idx];
}

function renderStarterIcon(shipId: string, hint: string): string {
  const palette = pickStarterPalette(`${shipId}-${hint}`);
  const shape = resolveStarterShape(shipId, hint);
  const decorated = decorateStarterShape(shape, shipId + hint);
  const pixels = centerStarterPixels(decorated);
  const blocks = pixels
    .map(
      (p) =>
        `<rect x="${p.x}" y="${p.y}" width="1" height="1" fill="${palette[p.c as keyof typeof palette]}" opacity="1" />`
    )
    .join("");
  return `
    <svg class="starter-icon" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="rgba(255,255,255,0.06)" />
      ${blocks}
    </svg>
  `;
}
