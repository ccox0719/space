import { gameState } from "../core/state";
import { getSystemById } from "../core/engine";
import {
  buyCommodity,
  canBuy,
  canSell,
  getAllCommodities,
  getCargoCount,
  getCommodityById,
  getBuySellPrices,
  MarketPriceQuote,
  sellCommodity,
  getActiveEventsForSystem,
  getAllActiveMarketEvents,
  captureNeighborIntel,
  getNeighborIntel
} from "../systems/economySystem";

const TREND_ICONS: Record<MarketPriceQuote["trend"], string> = {
  high: "🔺",
  low: "🔻",
  stable: "↔️"
};

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

export function MarketScreen(): string {
  const system = getSystemById(gameState.location.systemId);
  if (!system) {
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">Market</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Market</h1>
            <p>Loading market data…</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Back</button>
        </nav>
      </div>
    `;
  }

  const commodities = getAllCommodities();
  if (!commodities.length) {
    return `
      <div class="app-root">
        <header class="app-header">
          <div class="app-title">
            <span class="app-game-title">Echoes Fleet</span>
            <span class="app-location">${system.name}</span>
          </div>
        </header>
        <main class="app-main">
          <section class="data-panel">
            <h1 class="panel-title">Market</h1>
            <p>No commodities available in this sector yet.</p>
          </section>
        </main>
        <nav class="app-actions">
          <button class="btn btn-ghost" onclick="nav('main')">Back</button>
        </nav>
      </div>
    `;
  }

  const cargoLoad = Object.values(gameState.ship.cargo || {}).reduce((sum, qty) => sum + qty, 0);

  const rows = commodities
    .map((commodity) => {
      const quote = getBuySellPrices(system.id, commodity.id);
      const tags = formatTags(commodity.tradeTags?.length ? commodity.tradeTags : commodity.tags);
      const buyDisabled = canBuy(system.id, commodity.id, 1) ? "" : " disabled";
      const sellDisabled = canSell(system.id, commodity.id, 1) ? "" : " disabled";
      const cargoQty = getCargoCount(commodity.id);
      const maxBuyable = computeMaxBuyable(quote.buy, cargoLoad, commodity.id);
      const metaLine = buildMetaLine(commodity, cargoQty);
      return `
        <div class="panel-card">
          <p class="label">${tags || "Local goods"}</p>
          <p class="value-inline"><strong>${commodity.name}</strong></p>
          <p class="muted">Buy ${quote.buy} cr · Sell ${quote.sell} cr · ${TREND_ICONS[quote.trend]} ${quote.trend}</p>
          <div class="muted">${metaLine}</div>
          <div class="app-actions">
            <button class="btn btn-primary"${buyDisabled} onclick="buyCommodityAction('${commodity.id}')">Buy 1</button>
            <button class="btn btn-primary"${buyDisabled || maxBuyable <= 1 ? " disabled" : ""} onclick="buyAllCommodityAction('${commodity.id}', ${quote.buy})">Buy Max (${maxBuyable})</button>
            <button class="btn btn-ghost"${sellDisabled} onclick="sellCommodityAction('${commodity.id}')">Sell 1</button>
            <button class="btn btn-ghost"${sellDisabled || cargoQty <= 1 ? " disabled" : ""} onclick="sellAllCommodityAction('${commodity.id}')">Sell All (${cargoQty})</button>
          </div>
        </div>
      `;
    })
    .join("");

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Market · ${system.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${gameState.time.turn}</span>
        </div>
      </header>

      <section class="app-stats">
        <div class="stat-pill">
          <span class="stat-label">Credits</span>
          <span class="stat-value">${gameState.player.credits}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Fuel</span>
          <span class="stat-value">${gameState.ship.fuel}/${gameState.ship.maxFuel}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Cargo</span>
          <span class="stat-value">${cargoLoad}/${gameState.ship.cargoCapacity}</span>
        </div>
        <div class="stat-pill">
          <span class="stat-label">Wanted</span>
          <span class="stat-value">${gameState.player.wanted}</span>
        </div>
      </section>

      <main class="app-main">
        <section class="data-panel">
          <h1 class="panel-title">Current Quotes</h1>
          <p id="market-message" class="muted">
            Credits: ${gameState.player.credits} | Cargo: ${formatCargoSummary()}
          </p>
          ${renderMarketEvents(system.id)}
          ${renderIntelSection(system)}
          <div class="panel-row">
            ${rows}
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

function formatCargoSummary(): string {
  const cargo = gameState.ship.cargo || {};
  const load = Object.values(cargo).reduce((sum, qty) => sum + qty, 0);
  return `${load}/${gameState.ship.cargoCapacity}`;
}

function renderMarketEvents(systemId: string): string {
  const events = getActiveEventsForSystem(systemId);
  if (!events.length) return "";
  const items = events
    .map(
      (ev) => `
      <div class="panel-card">
        <p class="label">Market Event</p>
        <p class="value-inline">${ev.label || `${ev.commodityId || "local goods"} x${ev.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0, ev.expiresAtTurn - gameState.time.turn)} turns</p>
      </div>
    `
    )
    .join("");
  return `<div class="panel-row">${items}</div>`;
}

function renderIntelSection(system: ReturnType<typeof getSystemById>): string {
  const intel = getNeighborIntel();
  const neighbors =
    system?.neighbors
      .map((id) => getSystemById(id))
      .filter((s): s is NonNullable<typeof system> => !!s && intel[s.id]) || [];

  const lines = neighbors
    .map((n) => {
      const ops = summarizeNeighborIntel(system?.id, n.id);
      const age = gameState.time.turn - (intel[n.id]?.turn ?? gameState.time.turn);
      const overText = ops.over
        ? `${ops.over.id} overpriced (+${Math.round(ops.over.delta * 100)}%)`
        : "no strong overpay";
      const underText = ops.under
        ? `${ops.under.id} underpriced (${Math.round(ops.under.delta * 100)}% cheaper)`
        : "no standout bargains";
      return `<p class="muted">${n.name} (age ${age}t): Sell -> ${overText} | Buy -> ${underText}</p>`;
    })
    .join("");

  return `
    <div class="panel-card">
      <p class="label">Intel Tools</p>
      <p class="muted">Buy neighbor price intel (100 cr). Highlights likely over/under priced goods; actuals may drift when you arrive.</p>
      <div class="app-actions">
        <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel</button>
      </div>
      ${lines || `<p class="muted">No neighbor intel purchased yet.</p>`}
    </div>
  `;
}

function summarizeNeighborIntel(
  currentSystemId: string | undefined,
  neighborId: string
): { over: { id: string; delta: number } | null; under: { id: string; delta: number } | null } {
  if (!currentSystemId) return { over: null, under: null };
  const intel = getNeighborIntel();
  const snapshot = intel[neighborId];
  if (!snapshot) return { over: null, under: null };
  let bestOver: { id: string; delta: number } | null = null;
  let bestUnder: { id: string; delta: number } | null = null;
  const age = Math.max(0, gameState.time.turn - snapshot.turn);
  const decay = Math.max(0.5, 1 - age * 0.05); // each turn old reduces strength by 5%, floor at 50%
  for (const [cid, quotes] of Object.entries(snapshot.prices)) {
    const here = getBuySellPrices(currentSystemId, cid);
    if (here.sell > 0 && quotes.buy > here.sell) {
      const delta = ((quotes.buy - here.sell) / here.sell) * decay;
      if (!bestOver || delta > bestOver.delta) bestOver = { id: cid, delta };
    }
    if (here.buy > 0 && quotes.sell < here.buy) {
      const delta = ((here.buy - quotes.sell) / here.buy) * decay;
      if (!bestUnder || delta > bestUnder.delta) bestUnder = { id: cid, delta };
    }
  }
  return { over: bestOver, under: bestUnder };
}

function computeMaxBuyable(price: number, currentLoad: number, commodityId: string): number {
  if (price <= 0) return 0;
  const creditsAfford = Math.floor(gameState.player.credits / price);
  const capacity = Math.max(0, gameState.ship.cargoCapacity - currentLoad);
  return Math.max(0, Math.min(creditsAfford, capacity));
}

function formatTags(tags: string[] | undefined): string {
  if (!tags?.length) return "";
  const unique = Array.from(new Set(tags));
  return unique.map((t) => titleCase(t.replace(/_/g, " "))).join(" · ");
}

function buildMetaLine(
  commodity: { tier?: string; legalStatus?: string; mass?: number },
  cargoQty: number
): string {
  const tier = titleCase(commodity.tier || "standard");
  const legality = formatLegality(commodity.legalStatus || "legal");
  const mass = typeof commodity.mass === "number" ? `${commodity.mass}t` : null;
  const parts = [`Held ${cargoQty}`, `Tier ${tier}`, legality];
  if (mass) parts.push(`Mass ${mass}`);
  return parts.join(" · ");
}

function titleCase(text: string): string {
  return text
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatLegality(status: string): string {
  const map: Record<string, string> = {
    legal: "Legal",
    restricted: "Restricted",
    illegal: "Illegal"
  };
  return map[status] ?? titleCase(status);
}

declare global {
  interface Window {
    buyCommodityAction: (commodityId: string) => void;
    sellCommodityAction: (commodityId: string) => void;
    buyAllCommodityAction: (commodityId: string, unitPrice: number) => void;
    sellAllCommodityAction: (commodityId: string) => void;
    purchaseNeighborIntel: () => void;
  }
}

window.buyCommodityAction = (commodityId: string) => {
  const systemId = gameState.location.systemId;
  const commodity = getCommodityById(commodityId);
  const success = buyCommodity(systemId, commodityId, 1);
  const price = getBuySellPrices(systemId, commodityId).buy;
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    msgEl.textContent = success
      ? `Bought 1 ${commodity?.name || commodityId} for ${price} cr.`
      : `Cannot buy ${commodity?.name || commodityId}.`;
  }
  nav("market");
};

window.sellCommodityAction = (commodityId: string) => {
  const systemId = gameState.location.systemId;
  const commodity = getCommodityById(commodityId);
  const success = sellCommodity(systemId, commodityId, 1);
  const price = getBuySellPrices(systemId, commodityId).sell;
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    msgEl.textContent = success
      ? `Sold 1 ${commodity?.name || commodityId} for ${price} cr.`
      : `Cannot sell ${commodity?.name || commodityId}.`;
  }
  nav("market");
};

window.buyAllCommodityAction = (commodityId: string, unitPrice: number) => {
  const systemId = gameState.location.systemId;
  const cargo = gameState.ship.cargo || {};
  const load = Object.values(cargo).reduce((sum, qty) => sum + qty, 0);
  const maxBuy = computeMaxBuyable(unitPrice, load, commodityId);
  if (maxBuy <= 0) {
    nav("market");
    return;
  }
  buyCommodity(systemId, commodityId, maxBuy);
  const commodity = getCommodityById(commodityId);
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    msgEl.textContent = `Bought ${maxBuy} ${commodity?.name || commodityId} for ${unitPrice * maxBuy} cr.`;
  }
  nav("market");
};

window.sellAllCommodityAction = (commodityId: string) => {
  const systemId = gameState.location.systemId;
  const qty = getCargoCount(commodityId);
  if (qty <= 0) {
    nav("market");
    return;
  }
  const price = getBuySellPrices(systemId, commodityId).sell;
  sellCommodity(systemId, commodityId, qty);
  const commodity = getCommodityById(commodityId);
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    msgEl.textContent = `Sold ${qty} ${commodity?.name || commodityId} for ${price * qty} cr.`;
  }
  nav("market");
};

window.purchaseNeighborIntel = () => {
  const result = captureNeighborIntel();
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    msgEl.textContent = result.message;
  }
  nav("market");
};
