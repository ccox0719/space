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
import { formatHardpointSummary } from "./weaponSlotSummary";

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
        <header class="app-header app-header--market">
          <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
          <div class="app-title app-title--centered">
            <span class="app-game-title">The Veil</span>
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
  const comps = getAllComponents().filter((c) => c.slot !== "passive");
  const weapons = getAllWeapons();
  const inventoryNames = getInventoryWeaponIds()
    .map((id) => getWeaponById(id)?.name)
    .filter(Boolean);

  const shipsHtml =
    ships.length === 0
      ? `<p class="muted">No ships are currently for sale.</p>`
      : `
        <div class="card-list">
          ${ships
            .map(
              (s) => `
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${renderPixelIcon("ship", s.id)}
                      <div>
                      <p class="label">${s.roleHint || "Multi-role"}</p>
                      <strong>${s.name}</strong>
                      <p class="muted">${s.description}</p>
                      <p class="muted">Weapon slots: ${formatHardpointSummary(s.hardpoints)}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${s.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Hull ${s.hull} | Shields ${s.shields} | Fuel ${s.fuel} | Cargo ${s.cargo}</p>
                  <button class="btn btn-primary" onclick="buyShipAction('${s.id}')">Buy & Replace</button>
                </article>
              `
            )
            .join("")}
        </div>
      `;

  const compsHtml =
    comps.length === 0
      ? `<p class="muted">No components in stock.</p>`
      : `
        <div class="card-list">
          ${comps
            .map(
              (c) => {
                const lines: string[] = [];
                if (typeof c.value === "number" && c.effectType) {
                  lines.push(`+${c.value} ${c.effectType}`);
                }
                if (c.effects) {
                  for (const [key, val] of Object.entries(c.effects)) {
                    if (typeof val !== "number") continue;
                    const pct = Math.round((val - 1) * 100);
                    switch (key) {
                      case "miningYield":
                        lines.push(`Mining yield ${pct >= 0 ? "+" : ""}${pct}%`);
                        break;
                      case "miningSpeed":
                        lines.push(`Mining duration ${pct >= 0 ? "+" : ""}${pct}%`);
                        break;
                      case "rareFindChance":
                        lines.push(`Rare finds ${pct >= 0 ? "+" : ""}${pct}%`);
                        break;
                      case "miningPayoutMultiplier":
                        lines.push(`Mining payout ${pct >= 0 ? "+" : ""}${pct}%`);
                        break;
                      case "sellBonus":
                        lines.push(`Sell bonus ${pct >= 0 ? "+" : ""}${pct}%`);
                        break;
                      case "incomeMultiplier":
                        lines.push(`Income ${pct >= 0 ? "+" : ""}${pct}%`);
                        break;
                      default:
                        lines.push(`${key} ${pct >= 0 ? "+" : ""}${pct}%`);
                    }
                  }
                }
                const effectText = lines.length ? lines.join(" | ") : "Utility module";
                return `
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${renderPixelIcon("module", c.id)}
                      <div>
                      <p class="label">${c.effectType || "Passive"}</p>
                      <strong>${c.name}</strong>
                      <p class="muted">${c.description}</p>
                      </div>
                    </div>
                    <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${c.cost} cr</p>
                    </div>
                  </div>
                  <p class="muted">Boost: ${effectText}${c.slot ? ` | Slot: ${c.slot}` : ""}</p>
                  <button class="btn btn-primary" onclick="buyComponentAction('${c.id}')">Buy & Install</button>
                </article>
              `;
              }
            )
            .join("")}
        </div>
      `;

  const weaponsHtml =
    weapons.length === 0
      ? `<p class="muted">No weapons available.</p>`
      : `
        <div class="card-list">
          ${weapons
            .map((w) => {
              const hint = getWeaponHint(w);
              const tagLine = hint.tagNotes.length ? `Traits: ${hint.tagNotes.join(", ")}` : "";
              return `
                <article class="panel-card">
                  <div class="card-head">
                    <div class="card-head__lead">
                      ${renderPixelIcon("weapon", w.id)}
                      <div>
                      <p class="label">${w.type} • ${w.size}</p>
                      <strong>${w.name}</strong>
              <p class="muted">${tagLine}</p>
            </div>
            </div>
            <div class="card-cost">
                      <p class="muted">Cost</p>
                      <p class="stat-value">${w.price} cr</p>
                    </div>
                  </div>
                  <p class="muted">
                    Damage ${w.damage} (${w.damageType}) | Acc ${Math.round(w.accuracy * 100)}% | Crit ${Math.round(
                w.critChance * 100
              )}% x${w.critMultiplier}<br/>
                    Cooldown ${w.cooldown} | Energy ${w.energyCost}
                  </p>
                  <p class="muted">${hint.role} (${hint.typeLabel}) | Vs Shields: ${hint.vsShields}, Vs Hull: ${hint.vsHull}</p>
                  <button class="btn btn-primary" onclick="buyWeaponAction('${w.id}')">Buy Weapon</button>
                </article>
              `;
            })
            .join("")}
        </div>
      `;

  const inventoryHtml =
    inventoryNames.length > 0
      ? `<p>${inventoryNames.join(", ")}</p>`
      : '<p class="muted">You currently own no weapons.</p>';

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Shipyard</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Shipyard</h1>

          <details open class="panel-card">
            <summary class="panel-title">Ships for Sale</summary>
            ${shipsHtml}
          </details>

          <details class="panel-card" open>
            <summary class="panel-title">Components & Upgrades (${comps.length || 0})</summary>
            ${compsHtml}
          </details>

          <details class="panel-card" open>
            <summary class="panel-title">Weapons for Sale (${weapons.length || 0})</summary>
            ${weaponsHtml}
          </details>

          <details class="panel-card">
            <summary class="panel-title">Your Weapon Inventory</summary>
            <div class="panel-card">${inventoryHtml}</div>
          </details>
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

type PixelIconKind = "ship" | "module" | "weapon";

const PIXEL_PALETTES: Array<{ a: string; b: string; c: string }> = [
  { a: "#5df4f0", b: "#2cb1ff", c: "#0b1f3f" },
  { a: "#ffd166", b: "#ff8f66", c: "#3b1f0a" },
  { a: "#c792ea", b: "#7b5ce6", c: "#25143f" },
  { a: "#8ef29d", b: "#4fd570", c: "#12361a" },
  { a: "#f58fb6", b: "#ff6f91", c: "#351021" },
  { a: "#9ce2ff", b: "#60b7ff", c: "#0e2033" },
  { a: "#f5a7ff", b: "#c76bff", c: "#2a0c46" }
];

type PixelDot = { x: number; y: number; c: "a" | "b" | "c" };

const SHIP_SHAPES: PixelDot[][] = [
  [
    { x: 5, y: 0, c: "b" },
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
    { x: 4, y: 3, c: "a" },
    { x: 5, y: 3, c: "b" },
    { x: 6, y: 3, c: "a" },
    { x: 7, y: 3, c: "a" },
    { x: 8, y: 3, c: "c" },
    { x: 3, y: 4, c: "c" },
    { x: 4, y: 4, c: "b" },
    { x: 5, y: 4, c: "a" },
    { x: 6, y: 4, c: "b" },
    { x: 7, y: 4, c: "c" },
    { x: 4, y: 5, c: "b" },
    { x: 5, y: 5, c: "a" },
    { x: 6, y: 5, c: "b" },
    { x: 5, y: 6, c: "b" },
    { x: 5, y: 7, c: "c" }
  ],
  [
    { x: 4, y: 0, c: "b" },
    { x: 5, y: 0, c: "a" },
    { x: 6, y: 0, c: "b" },
    { x: 3, y: 1, c: "b" },
    { x: 4, y: 1, c: "a" },
    { x: 5, y: 1, c: "a" },
    { x: 6, y: 1, c: "a" },
    { x: 7, y: 1, c: "b" },
    { x: 2, y: 2, c: "c" },
    { x: 3, y: 2, c: "a" },
    { x: 4, y: 2, c: "a" },
    { x: 5, y: 2, c: "b" },
    { x: 6, y: 2, c: "a" },
    { x: 7, y: 2, c: "a" },
    { x: 8, y: 2, c: "c" },
    { x: 3, y: 3, c: "b" },
    { x: 4, y: 3, c: "b" },
    { x: 5, y: 3, c: "b" },
    { x: 6, y: 3, c: "b" },
    { x: 4, y: 4, c: "a" },
    { x: 5, y: 4, c: "a" },
    { x: 4, y: 5, c: "a" },
    { x: 5, y: 5, c: "a" },
    { x: 4, y: 6, c: "c" },
    { x: 5, y: 6, c: "c" }
  ],
  [
    { x: 4, y: 1, c: "a" },
    { x: 5, y: 1, c: "b" },
    { x: 6, y: 1, c: "a" },
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
    { x: 4, y: 4, c: "a" },
    { x: 5, y: 4, c: "b" },
    { x: 6, y: 4, c: "a" },
    { x: 4, y: 5, c: "b" },
    { x: 5, y: 5, c: "a" },
    { x: 6, y: 5, c: "b" },
    { x: 5, y: 6, c: "c" }
  ]
];

const MODULE_SHAPES: PixelDot[][] = [
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
    { x: 2, y: 4, c: "b" },
    { x: 3, y: 4, c: "a" },
    { x: 4, y: 4, c: "a" },
    { x: 5, y: 4, c: "a" },
    { x: 6, y: 4, c: "a" },
    { x: 7, y: 4, c: "b" },
    { x: 2, y: 5, c: "b" },
    { x: 3, y: 5, c: "c" },
    { x: 4, y: 5, c: "a" },
    { x: 5, y: 5, c: "a" },
    { x: 6, y: 5, c: "c" },
    { x: 7, y: 5, c: "b" },
    { x: 3, y: 6, c: "b" },
    { x: 4, y: 6, c: "b" },
    { x: 5, y: 6, c: "b" },
    { x: 6, y: 6, c: "b" }
  ],
  [
    { x: 4, y: 1, c: "b" },
    { x: 5, y: 1, c: "b" },
    { x: 3, y: 2, c: "c" },
    { x: 4, y: 2, c: "a" },
    { x: 5, y: 2, c: "a" },
    { x: 6, y: 2, c: "c" },
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
    { x: 4, y: 5, c: "b" },
    { x: 5, y: 5, c: "b" },
    { x: 6, y: 5, c: "b" }
  ]
];

const WEAPON_SHAPES: PixelDot[][] = [
  [
    { x: 4, y: 2, c: "b" },
    { x: 5, y: 2, c: "b" },
    { x: 3, y: 3, c: "b" },
    { x: 4, y: 3, c: "a" },
    { x: 5, y: 3, c: "a" },
    { x: 6, y: 3, c: "b" },
    { x: 2, y: 4, c: "b" },
    { x: 3, y: 4, c: "a" },
    { x: 4, y: 4, c: "a" },
    { x: 5, y: 4, c: "a" },
    { x: 6, y: 4, c: "a" },
    { x: 7, y: 4, c: "b" },
    { x: 3, y: 5, c: "b" },
    { x: 4, y: 5, c: "c" },
    { x: 5, y: 5, c: "c" },
    { x: 6, y: 5, c: "b" }
  ],
  [
    { x: 4, y: 1, c: "b" },
    { x: 5, y: 1, c: "b" },
    { x: 3, y: 2, c: "b" },
    { x: 4, y: 2, c: "a" },
    { x: 5, y: 2, c: "a" },
    { x: 6, y: 2, c: "b" },
    { x: 2, y: 3, c: "b" },
    { x: 3, y: 3, c: "a" },
    { x: 4, y: 3, c: "a" },
    { x: 5, y: 3, c: "a" },
    { x: 6, y: 3, c: "a" },
    { x: 7, y: 3, c: "b" },
    { x: 3, y: 4, c: "b" },
    { x: 4, y: 4, c: "c" },
    { x: 5, y: 4, c: "c" },
    { x: 6, y: 4, c: "b" }
  ]
];

function hashString(seed: string): number {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (h << 5) - h + seed.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pickPalette(seed: string) {
  const idx = hashString(seed) % PIXEL_PALETTES.length;
  return PIXEL_PALETTES[idx];
}

function rng(seed: string) {
  let h = hashString(seed);
  return () => {
    h = (h ^ 0xdeadbeef) + (h << 4) + (h >> 7);
    h |= 0;
    return (h >>> 0) / 0xffffffff;
  };
}

function centerPixels(pixels: PixelDot[], size = 12): PixelDot[] {
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

function renderPixelIcon(kind: PixelIconKind, seed: string): string {
  const palette = pickPalette(`${kind}-${seed}`);
  const shipShape = SHIP_SHAPES[hashString(seed) % SHIP_SHAPES.length];
  const moduleShape = MODULE_SHAPES[hashString(seed + "-mod") % MODULE_SHAPES.length];
  const weaponShape = WEAPON_SHAPES[hashString(seed + "-wpn") % WEAPON_SHAPES.length];
  const pixels =
    kind === "ship"
      ? centerPixels(decorateShipShape(shipShape, seed))
      : kind === "module"
      ? centerPixels(decorateModuleShape(moduleShape, seed))
      : centerPixels(decorateWeaponShape(weaponShape, seed));
  const blocks = pixels
    .map((p) => `<rect x="${p.x}" y="${p.y}" width="1" height="1" fill="${palette[p.c as keyof typeof palette]}" />`)
    .join("");

  return `
    <svg class="pixel-icon pixel-icon-${kind}" viewBox="0 0 12 12" role="img" aria-hidden="true">
      <rect x="0" y="0" width="12" height="12" fill="${palette.c}" opacity="0.35" />
      ${blocks}
    </svg>
  `;
}

function decorateShipShape(base: PixelDot[], seed: string): PixelDot[] {
  const rand = rng(seed);
  const copy = [...base];
  const minY = Math.min(...base.map((p) => p.y));
  const maxY = Math.max(...base.map((p) => p.y));
  const nose = base.filter((p) => p.y === minY);
  const tail = base.filter((p) => p.y === maxY);

  // Nose lights
  nose.slice(0, 2).forEach((p) => {
    copy.push({ x: p.x, y: p.y - 1, c: "a" });
  });

  // Engine plume
  tail.forEach((p) => {
    if (rand() > 0.5) {
      copy.push({ x: p.x, y: p.y + 1, c: rand() > 0.5 ? "a" : "b" });
    }
  });

  // Side fins
  const finOffset = rand() > 0.5 ? -1 : 1;
  copy.push({ x: tail[0]?.x + finOffset ?? 0, y: maxY - 1, c: "b" });
  copy.push({ x: tail[tail.length - 1]?.x - finOffset ?? 0, y: maxY - 1, c: "b" });

  return copy;
}

function decorateModuleShape(base: PixelDot[], seed: string): PixelDot[] {
  const rand = rng(seed + "-decor");
  const copy = [...base];
  const minX = Math.min(...base.map((p) => p.x));
  const maxX = Math.max(...base.map((p) => p.x));
  const minY = Math.min(...base.map((p) => p.y));
  const maxY = Math.max(...base.map((p) => p.y));

  // Port connectors
  copy.push({ x: minX - 1, y: Math.round((minY + maxY) / 2), c: "b" });
  copy.push({ x: maxX + 1, y: Math.round((minY + maxY) / 2), c: "b" });

  // Random indicator lights
  if (rand() > 0.3) copy.push({ x: minX, y: minY - 1, c: "a" });
  if (rand() > 0.6) copy.push({ x: maxX, y: minY - 1, c: "c" });
  if (rand() > 0.4) copy.push({ x: minX, y: maxY + 1, c: "a" });

  return copy;
}

function decorateWeaponShape(base: PixelDot[], seed: string): PixelDot[] {
  const rand = rng(seed + "-weapon");
  const copy = [...base];
  const maxY = Math.max(...base.map((p) => p.y));
  const minX = Math.min(...base.map((p) => p.x));
  const maxX = Math.max(...base.map((p) => p.x));

  // Barrel tip glow
  copy.push({ x: minX, y: maxY + 1, c: rand() > 0.5 ? "a" : "b" });
  copy.push({ x: maxX, y: maxY + 1, c: rand() > 0.5 ? "a" : "c" });

  // Scope / sight
  if (rand() > 0.4) {
    copy.push({ x: minX + 1, y: maxY - 2, c: "c" });
  }

  // Stock plate
  copy.push({ x: maxX + 1, y: maxY - 1, c: "b" });

  return copy;
}
