import { gameState } from "../core/state";
import { formatTurn } from "../core/formatters";
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
  captureNeighborIntel,
  getNeighborIntel
} from "../systems/economySystem";
import { getActiveContracts } from "../systems/missionSystem";

const TREND_ICONS: Record<MarketPriceQuote["trend"], string> = {
  high: "^",
  low: "v",
  stable: "-"
};

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

export function MarketScreen(params: Record<string, unknown> = {}): string {
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
  const cargoItems = Object.entries(gameState.ship.cargo || {})
    .filter(([, qty]) => qty > 0)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const contractTargets = new Map<string, { needed: number; deliverable: boolean }>();
  getActiveContracts()
    .filter((contract) => contract.status === "active")
    .forEach((contract) => {
      const deliverReq = contract.requirements?.deliver as
        | { commodityId?: string; quantity?: number; systemId?: string }
        | undefined;
      if (!deliverReq?.commodityId) return;
      const prev = contractTargets.get(deliverReq.commodityId) ?? {
        needed: 0,
        deliverable: false
      };
      const hasCargo = getCargoCount(deliverReq.commodityId) >= (deliverReq.quantity || 0);
      const inSystem =
        !deliverReq.systemId || deliverReq.systemId === gameState.location.systemId;
      contractTargets.set(deliverReq.commodityId, {
        needed: prev.needed + (deliverReq.quantity || 0),
        deliverable: prev.deliverable || (inSystem && hasCargo)
      });
    });
  const entries = commodities.map((commodity) => {
    const quote = getBuySellPrices(system.id, commodity.id);
    const tags = formatTags(commodity.tradeTags?.length ? commodity.tradeTags : commodity.tags);
    const cargoQty = getCargoCount(commodity.id);
    const metaLine = buildMetaLine(commodity, cargoQty);
    const maxBuyable = computeMaxBuyable(quote.buy, cargoLoad, commodity.id);
    return {
      commodity,
      quote,
      tags,
      cargoQty,
      metaLine,
      maxBuyable,
      profit: quote.sell - quote.buy
    };
  });
  const bestTradeId =
    entries.reduce(
      (best, entry) => (entry.profit > best.value ? { id: entry.commodity.id, value: entry.profit } : best),
      { id: entries[0]?.commodity.id ?? "", value: Number.NEGATIVE_INFINITY }
    ).id;
  const selectedCommodityId =
    typeof params.selectedCommodityId === "string" ? params.selectedCommodityId : null;
  const selectedEntry =
    entries.find((entry) => entry.commodity.id === selectedCommodityId) ||
    entries.find((entry) => entry.commodity.id === bestTradeId) ||
    entries[0];

  const rows = entries
    .map(({ commodity, quote, tags, cargoQty }) => {
      const isSelected = selectedEntry?.commodity.id === commodity.id;
      const isBestTrade = commodity.id === bestTradeId;
      const buyDisabled = canBuy(system.id, commodity.id, 1) ? "" : " disabled";
      const sellDisabled = canSell(system.id, commodity.id, 1) ? "" : " disabled";
      const contractInfo = contractTargets.get(commodity.id);
      const rowClasses = ["market-row"];
      if (isSelected) rowClasses.push("market-row--highlight");
      const contractPill = contractInfo
        ? `<span class="contract-pill${contractInfo.deliverable ? " ready" : ""}">${
            contractInfo.deliverable ? "Deliver now" : "Needed"
          }</span>`
        : "";
      const bestMarginPill = isBestTrade ? `<span class="contract-pill">Top margin</span>` : "";
      return `
        <article class="${rowClasses.join(" ")}" onclick="selectMarketCommodity('${commodity.id}')">
          <div class="market-row__main">
            <span class="market-row__name">${commodity.name}</span>
            <span class="market-row__info">
              BUY ${quote.buy} · SELL ${quote.sell} · Held ${cargoQty}
            </span>
          </div>
          <div class="market-row__meta">
            <span class="market-row__trend">${TREND_ICONS[quote.trend]} ${quote.trend}</span>
            <span>${tags || "Local goods"}</span>
            ${bestMarginPill}
            ${contractPill}
          </div>
        </article>
      `;
    })
    .join("");

  const hasCargo = cargoLoad > 0;
  const summaryCard = `
    <div class="panel-card market-summary-card">
      <p class="label">Market Overview</p>
      <div class="market-summary__rows">
        <div>
          <span>System</span>
          <strong>${system.name}</strong>
        </div>
        <div>
          <span>Day</span>
          <strong>${gameState.time.day}</strong>
        </div>
        <div>
          <span>Turn</span>
          <strong>${formatTurn(gameState.time.turn)}</strong>
        </div>
        <div>
          <span>Credits</span>
          <strong>${gameState.player.credits}</strong>
        </div>
        <div>
          <span>Fuel</span>
          <strong>${gameState.ship.fuel}/${gameState.ship.maxFuel}</strong>
        </div>
        <div>
          <span>Cargo</span>
          <strong>${cargoLoad}/${gameState.ship.cargoCapacity}</strong>
        </div>
        <div>
          <span>Wanted</span>
          <strong>${gameState.player.wanted}</strong>
        </div>
      </div>
      <p id="market-message" class="muted market-summary__message">
        Credits: ${gameState.player.credits} | Cargo: ${formatCargoSummary()}
      </p>
      <div class="market-summary__cargo">
        ${
          cargoItems.length
            ? cargoItems
                .map(([commodityId, qty]) => {
                  const def = getCommodityById(commodityId);
                  const mass = def?.mass ?? 0;
                  const massText = mass ? ` (Mass ${Math.round(mass * qty)})` : "";
                  return `<span>${qty} × ${def?.name || commodityId}${massText}</span>`;
                })
                .join("")
            : '<span class="muted">Cargo empty</span>'
        }
      </div>
      <div class="app-actions">
        <button class="btn btn-ghost" onclick="nav('ship')">View full cargo</button>
        <button class="btn btn-primary"${hasCargo ? "" : " disabled"} onclick="sellAllCargoAction()">Sell All Cargo</button>
      </div>
    </div>
  `;

  const selectedCanBuy = selectedEntry
    ? canBuy(system.id, selectedEntry.commodity.id, 1)
    : false;
  const selectedCanSell = selectedEntry
    ? canSell(system.id, selectedEntry.commodity.id, 1)
    : false;
  const selectedBuyDisabled = selectedEntry ? (!selectedCanBuy ? " disabled" : "") : " disabled";
  const selectedBuyMaxDisabled =
    selectedEntry && selectedEntry.maxBuyable > 1 && selectedCanBuy ? "" : " disabled";
  const selectedSellDisabled =
    selectedEntry && selectedCanSell && selectedEntry.cargoQty > 0 ? "" : " disabled";
  const detailPanel = selectedEntry
    ? `
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${selectedEntry.commodity.name}</strong>
        <span class="market-row__trend">${TREND_ICONS[selectedEntry.quote.trend]} ${selectedEntry.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${selectedEntry.quote.buy} · SELL ${selectedEntry.quote.sell}</span>
        <span>${selectedEntry.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${selectedBuyDisabled}
          onclick="buyCommodityAction('${selectedEntry.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${selectedBuyMaxDisabled}
          onclick="buyAllCommodityAction('${selectedEntry.commodity.id}', ${selectedEntry.quote.buy})"
        >
          Buy Max (${selectedEntry.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${selectedSellDisabled}
          onclick="sellCommodityAction('${selectedEntry.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${selectedSellDisabled}
          onclick="sellAllCommodityAction('${selectedEntry.commodity.id}')"
        >
          Sell All (${selectedEntry.cargoQty})
        </button>
      </div>
    </div>
  `
    : "";

  return `
    <div class="app-root">
      <header class="app-header">
        <div class="app-title">
          <span class="app-game-title">Echoes Fleet</span>
          <span class="app-location">Market · ${system.name}</span>
        </div>
        <div class="app-meta">
          <span>Day ${gameState.time.day}</span>
          <span>Turn ${formatTurn(gameState.time.turn)}</span>
        </div>
      </header>

      <main class="app-main">
        <section class="data-panel market-container">
          <aside class="market-sidebar">
            ${summaryCard}
            ${renderMarketEvents(system.id)}
            ${renderIntelSection(system)}
          </aside>
          <div class="market-list">
            ${rows}
            ${detailPanel}
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
  if (!events.length) {
    return `
      <div class="panel-card market-events-card">
        <p class="label">Market Events</p>
        <p class="muted">No active market events.</p>
      </div>
    `;
  }
  const items = events
    .map(
      (ev) => `
      <div class="market-event">
        <p class="value-inline">${ev.label || `${ev.commodityId || "local goods"} x${ev.multiplier}`}</p>
        <p class="muted">Expires in ${Math.max(0, (ev.expiresAtTurn ?? 0) - gameState.time.turn)} turns</p>
      </div>
    `
    )
    .join("");
  return `
    <div class="panel-card market-events-card">
      <p class="label">Market Events</p>
      <div class="market-event__list">
        ${items}
      </div>
    </div>
  `;
}

function renderIntelSection(system: ReturnType<typeof getSystemById>): string {
  const intel = getNeighborIntel();
  const neighbors =
    system?.neighbors
      .map((entry) => getSystemById(entry.id))
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
  return unique.map((t) => titleCase(t.replace(/_/g, " "))).join(" | ");
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
  return parts.join(" | ");
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
    selectMarketCommodity: (commodityId: string) => void;
    buyCommodityAction: (commodityId: string) => void;
    sellCommodityAction: (commodityId: string) => void;
    buyAllCommodityAction: (commodityId: string, unitPrice: number) => void;
    sellAllCommodityAction: (commodityId: string) => void;
    sellAllCargoAction: () => void;
    purchaseNeighborIntel: () => void;
  }
}

window.selectMarketCommodity = (commodityId: string) => {
  nav("market", { selectedCommodityId: commodityId });
};

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
  nav("market", { selectedCommodityId: commodityId });
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
  nav("market", { selectedCommodityId: commodityId });
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
  nav("market", { selectedCommodityId: commodityId });
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
  nav("market", { selectedCommodityId: commodityId });
};

window.sellAllCargoAction = () => {
  const systemId = gameState.location.systemId;
  const cargoEntries = Object.entries(gameState.ship.cargo || {});
  let totalUnits = 0;
  const details: string[] = [];
  for (const [commodityId, qty] of cargoEntries) {
    if (!qty) continue;
    const success = sellCommodity(systemId, commodityId, qty);
    if (!success) continue;
    totalUnits += qty;
    const def = getCommodityById(commodityId);
    details.push(`${qty} ${def?.name || commodityId}`);
  }
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    if (!totalUnits) {
      msgEl.textContent = "No cargo available to sell.";
    } else {
      const summary =
        details.length > 3
          ? `${details.slice(0, 3).join(", ")} +${details.length - 3} others`
          : details.join(", ");
      msgEl.textContent = `Sold ${totalUnits} cargo units (${summary}).`;
    }
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
