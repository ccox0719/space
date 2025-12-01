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
  getNeighborIntelCost,
  getNeighborIntel
} from "../systems/economySystem";
import { getActiveContracts } from "../systems/missionSystem";
import {
  getStrategyConfig,
  getStrategyProgress,
  investInStrategy,
  TradeStrategy
} from "../systems/tradeStrategySystem";

const TREND_ICONS: Record<MarketPriceQuote["trend"], string> = {
  high: "^",
  low: "v",
  stable: "-"
};

type MarketEntry = {
  commodity: ReturnType<typeof getCommodityById> extends infer R ? NonNullable<R> : never;
  quote: MarketPriceQuote;
  tags: string;
  cargoQty: number;
  metaLine: string;
  maxBuyable: number;
  profit: number;
};

declare const nav: (screen: string, params?: Record<string, unknown>) => void;

export function MarketScreen(params: Record<string, unknown> = {}): string {
  const system = getSystemById(gameState.location.systemId);
  if (!system) {
    return `
      <div class="app-root">
        <header class="app-header">
            <div class="app-title">
            <span class="app-game-title">The Veil</span>
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
            <span class="app-game-title">The Veil</span>
            <span class="app-location">Market — ${system.name}</span>
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
  const entries: MarketEntry[] = commodities.map((commodity) => {
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
  const bestTrade = entries.reduce(
    (best, entry) =>
      entry.profit > best.profit ? { profit: entry.profit, entry } : best,
    { profit: Number.NEGATIVE_INFINITY, entry: entries[0] }
  );
  const bestTradeId = bestTrade.entry?.commodity.id ?? "";
  const selectedCommodityId =
    typeof params.selectedCommodityId === "string" ? params.selectedCommodityId : null;
  const selectedEntry =
    entries.find((entry) => entry.commodity.id === selectedCommodityId) ||
    entries.find((entry) => entry.commodity.id === bestTradeId) ||
    entries[0];

  const highTrend = entries.reduce(
    (best, entry) => {
      const delta = entry.quote.high - entry.quote.buy;
      return delta > best.delta
        ? { delta, entry }
        : best;
    },
    { delta: -Infinity as number, entry: entries[0] }
  ).entry;
  const lowTrend = entries.reduce(
    (best, entry) => {
      const delta = entry.quote.buy - entry.quote.low;
      return delta > best.delta ? { delta, entry } : best;
    },
    { delta: -Infinity as number, entry: entries[0] }
  ).entry;

  const legalityOrder: CommodityLegality[] = ["legal", "restricted", "illegal"];
  let rowIndex = 0;
  const rows = legalityOrder
    .map((status) => {
      const groupEntries = entries.filter(
        (entry) => getCommodityLegalStatus(entry.commodity.legalStatus) === status
      );
      if (!groupEntries.length) return "";
      const groupLabel = formatLegality(status);
      const header = `
        <div class="market-group__header">
          <div>
            <p class="market-group__label">${groupLabel} goods</p>
            <p class="muted market-group__count">${groupEntries.length} items</p>
          </div>
          <span class="market-status market-status--${status}">${groupLabel}</span>
        </div>
      `;
      const groupRows = groupEntries
        .map((entry) => {
          const { commodity, quote, tags, cargoQty } = entry;
          const isSelected = selectedEntry?.commodity.id === commodity.id;
          const contractInfo = contractTargets.get(commodity.id);
          const rowClasses = ["market-row"];
          if (isSelected) rowClasses.push("market-row--highlight");
          const entryStatus = getCommodityLegalStatus(commodity.legalStatus);
          rowClasses.push(`market-row--${entryStatus}`);
          const contractPill = contractInfo
            ? `<span class="contract-pill contract-pill--target${contractInfo.deliverable ? " ready" : ""}">${
                contractInfo.deliverable ? "Deliver now" : "Contract target"
              }</span>`
            : "";
          const statusPill = `<span class="market-row__status market-row__status--${entryStatus}">${formatLegality(
            entryStatus
          )}</span>`;
          const trend = `${TREND_ICONS[quote.trend]} ${quote.trend}`;
          const idx = rowIndex++;
          return `
            <article class="${rowClasses.join(" ")}" style="--row-index:${idx};" onclick="selectMarketCommodity('${commodity.id}')">
              <div class="market-row__main">
                <span class="market-row__name">${commodity.name}</span>
                <span class="market-row__info">
                  BUY ${quote.buy} A | SELL ${quote.sell} A | Held ${cargoQty}
                </span>
              </div>
              <div class="market-row__meta">
                <span class="market-row__trend">${trend}</span>
                <div class="market-row__meta-line">
                  <span>${tags || "Local goods"}</span>
                  ${statusPill}
                  ${contractPill}
                </div>
              </div>
            </article>
            ${isSelected ? renderMarketDetail(entry, system.id) : ""}
          `;
        })
        .join("");
      return `
        <section class="market-group">
          ${header}
          ${groupRows}
        </section>
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

  return `
    <div class="app-root">
      <header class="app-header app-header--market">
        <button class="btn-icon" onclick="nav('main')" aria-label="Back"><</button>
        <div class="app-title app-title--centered">
          <span class="app-game-title">The Veil</span>
          <span class="app-location">Market — ${system.name}</span>
        </div>
      </header>

      <main class="app-main">
    <section class="data-panel market-container">
      <aside class="market-sidebar">
            ${summaryCard}
    ${renderMarketEvents(system.id)}
          </aside>
          <div class="market-list">
            <h2 class="panel-title small">Goods</h2>
          ${rows}
          </div>
        </section>
        <section class="market-priority">
          <h2 class="panel-title small">Priority Paths</h2>
          ${renderTradeStrategyPanel()}
        </section>
        <section class="market-footer">
          ${renderMarketInsights(system, highTrend, lowTrend, bestTrade.entry)}
        </section>
        ${renderTrendGraph(entries)}
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

function renderMarketDetail(entry: MarketEntry, systemId: string): string {
  const canBuyEntry = canBuy(systemId, entry.commodity.id, 1);
  const canSellEntry = canSell(systemId, entry.commodity.id, 1);
  const buyDisabled = canBuyEntry ? "" : " disabled";
  const buyMaxDisabled = canBuyEntry && entry.maxBuyable > 1 ? "" : " disabled";
  const sellDisabled = canSellEntry && entry.cargoQty > 0 ? "" : " disabled";

  return `
    <div class="market-detail">
      <div class="market-detail__header">
        <strong>${entry.commodity.name}</strong>
        <span class="market-row__trend">${TREND_ICONS[entry.quote.trend]} ${entry.quote.trend}</span>
      </div>
      <div class="market-detail__meta">
        <span>BUY ${entry.quote.buy} · SELL ${entry.quote.sell}</span>
        <span>${entry.metaLine}</span>
      </div>
      <div class="market-detail__actions">
        <button
          class="btn btn-primary"
          ${buyDisabled}
          onclick="buyCommodityAction('${entry.commodity.id}')"
        >
          Buy 1
        </button>
        <button
          class="btn btn-primary"
          ${buyMaxDisabled}
          onclick="buyAllCommodityAction('${entry.commodity.id}', ${entry.quote.buy})"
        >
          Buy Max (${entry.maxBuyable})
        </button>
        <button
          class="btn btn-ghost"
          ${sellDisabled}
          onclick="sellCommodityAction('${entry.commodity.id}')"
        >
          Sell 1
        </button>
        <button
          class="btn btn-ghost"
          ${sellDisabled}
          onclick="sellAllCommodityAction('${entry.commodity.id}')"
        >
          Sell All (${entry.cargoQty})
        </button>
      </div>
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

function renderMarketInsights(
  system: ReturnType<typeof getSystemById>,
  highTrendEntry?: MarketEntry,
  lowTrendEntry?: MarketEntry,
  hotTipEntry?: MarketEntry
): string {
  const intel = getNeighborIntel();
  const intelCost = getNeighborIntelCost();
  const neighborIds = new Set((system?.neighbors ?? []).map((entry) => entry.id));
  const neighborsWithIntel =
    system?.neighbors
      .map((entry) => getSystemById(entry.id))
      .filter(
        (s): s is NonNullable<typeof system> => !!s && intel[s.id] && neighborIds.has(s.id)
      ) || [];

  const highSellComparisons: Array<{
    neighborName: string;
    name: string;
    neighborSell: number;
    localSell: number;
    percent: number;
  }> =
    system?.id && neighborsWithIntel.length
      ? neighborsWithIntel
          .flatMap((neighbor) => {
            const snapshot = intel[neighbor.id];
            if (!snapshot) return [];
            return Object.entries(snapshot.prices)
              .map(([commodityId, quote]) => {
                const localPrices = getBuySellPrices(system.id, commodityId);
                if (localPrices.sell <= 0) return null;
                if (quote.sell <= localPrices.sell) return null;
                const percent = ((quote.sell - localPrices.sell) / localPrices.sell) * 100;
                return {
                  neighborName: neighbor.name,
                  name: getCommodityById(commodityId)?.name ?? commodityId,
                  neighborSell: quote.sell,
                  localSell: localPrices.sell,
                  percent
                };
              })
              .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));
          })
          .sort((a, b) => b.percent - a.percent)
          .slice(0, 4)
      : [];

  const highSellSection =
    highSellComparisons.length > 0
      ? highSellComparisons
          .map(
            (entry) =>
              `<p class="insight-mini">
                <strong>${entry.name}</strong> (${entry.neighborName}) sells ${entry.neighborSell} vs local ${entry.localSell} (+${entry.percent.toFixed(
                1
              )}%)
              </p>`
          )
          .join("")
      : `<p class="insight-mini muted">No neighbor sells exceed your local sell price right now.</p>`;

  const intelItems =
    neighborsWithIntel.length > 0
      ? neighborsWithIntel
          .map((n) => {
            const ops = summarizeNeighborIntel(system?.id, n.id);
            const age = gameState.time.turn - (intel[n.id]?.turn ?? gameState.time.turn);
            const overText = ops.over
              ? `${ops.over.id} overpriced (+${Math.round(ops.over.delta * 100)}%)`
              : "no overpay signal";
            const underText = ops.under
              ? `${ops.under.id} underpriced (${Math.round(ops.under.delta * 100)}% cheaper)`
              : "no bargain yet";
            return `<p class="insight-mini">${n.name}: ↑ ${overText} · ↓ ${underText} (age ${age}t)</p>`;
          })
          .join("")
      : `<p class="insight-mini muted">No neighbor intel yet.</p>`;

  const trendNotes: string[] = [];
  if (highTrendEntry) {
    trendNotes.push(
      `<span>📈</span> ${highTrendEntry.commodity.name} high runs ${Math.round(
        highTrendEntry.quote.high - highTrendEntry.quote.buy
      )} above buy (${highTrendEntry.quote.high})`
    );
  }
  if (lowTrendEntry) {
    trendNotes.push(
      `<span>📉</span> ${lowTrendEntry.commodity.name} low sits ${Math.round(
        lowTrendEntry.quote.buy - lowTrendEntry.quote.low
      )} below buy (${lowTrendEntry.quote.low})`
    );
  }
  const trendBody = trendNotes.length
    ? trendNotes.map((note) => `<p class="insight-mini">${note}</p>`).join("")
    : `<p class="insight-mini muted">No strong pulses yet.</p>`;

  const hotTipBody = hotTipEntry
    ? `<p class="insight-mini"><span>💡</span> Consider ${hotTipEntry.commodity.name}. Buy @ ${hotTipEntry.quote.buy} A·, sell @ ${hotTipEntry.quote.high} A· (high).</p><p class="insight-mini muted">Profit spread: +${hotTipEntry.profit}</p>`
    : `<p class="insight-mini muted">No hot tip available.</p>`;

  const logEntries = gameState.notifications
    .filter((note) => {
      const normalized = note.toLowerCase();
      return (
        normalized.includes("market") ||
        normalized.startsWith("bought") ||
        normalized.startsWith("sold")
      );
    })
    .slice(-6)
    .reverse();
  const logBody = logEntries.length
    ? logEntries.map((note) => `<p class="insight-mini">${note}</p>`).join("")
    : `<p class="insight-mini muted">No market-relevant log entries yet.</p>`;

  const insightTitle = (icon: string, label: string) =>
    `<p class="insight-title"><span class="insight-icon" aria-hidden="true">${icon}</span>${label}</p>`;

  return `
    <div class="panel-card market-insights-card">
      <p class="label">Market Insights</p>
      <div class="insight-section">
        ${insightTitle("🛰️", "Intel Tools")}
        <p class="insight-mini muted">System: ${system?.name || "Unknown"}</p>
        <p class="insight-mini">Neighbor Intel ${intelCost} cr — highlights over/under priced goods (actuals drift on arrival).</p>
        <div class="insight-list">
          ${intelItems}
        </div>
        <div class="app-actions">
          <button class="btn btn-primary" onclick="purchaseNeighborIntel()">Buy Neighbor Intel (${intelCost})</button>
        </div>
        <div class="insight-mini goods-list">
          <p class="insight-mini muted">Neighbors selling above your current sell price:</p>
          ${highSellSection}
        </div>
      </div>
      <div class="insight-section">
        ${insightTitle("📈", "Trending")}
        ${trendBody}
      </div>
      <div class="insight-section">
        ${insightTitle("💡", "Hot Tip")}
        ${hotTipBody}
      </div>
      <div class="insight-section">
        ${insightTitle("📝", "Market Log")}
        ${logBody}
      </div>
    </div>
  `;
}

const TRADE_STRATEGIES: TradeStrategy[] = ["taxEvasion", "smuggling", "bribery"];

function renderTradeStrategyPanel(): string {
  const cards = TRADE_STRATEGIES.map((strategy) => renderTradeStrategyCard(strategy)).join("");
  return `
    <div class="panel-card strategy-panel">
      <p class="label">Profit Paths</p>
      <div class="strategy-panel__cards">
        ${cards}
      </div>
    </div>
  `;
}

function renderTradeStrategyCard(strategy: TradeStrategy): string {
  const config = getStrategyConfig(strategy);
  const progress = Math.round(getStrategyProgress(strategy));
  const progressLabel = `${progress}%`;
  return `
    <div class="strategy-card strategy-card--${strategy}">
      <div class="strategy-card__header">
        <strong>${config.name}</strong>
        <span>${progressLabel}</span>
      </div>
      <div class="strategy-progress">
        <div class="strategy-progress__fill" style="width:${progress}%"></div>
      </div>
      <p class="muted strategy-card__benefit">Invest ${config.cost} cr — ${config.benefit}.</p>
      <div class="strategy-card__actions">
        <button class="btn btn-chip" onclick="pursueTradeStrategy('${strategy}')">
          Invest ${config.cost} cr
        </button>
      </div>
    </div>
  `;
}

function renderTrendSection(
  highTrendEntry?: MarketEntry,
  lowTrendEntry?: MarketEntry
): string {
  if (!highTrendEntry && !lowTrendEntry) return "";
  const highLine = highTrendEntry
    ? `<p class="muted">
        ${highTrendEntry.commodity.name} high runs ${Math.round(
          highTrendEntry.quote.high - highTrendEntry.quote.buy
        )} above buy (${highTrendEntry.quote.high})
      </p>`
    : "";
  const lowLine = lowTrendEntry
    ? `<p class="muted">
        ${lowTrendEntry.commodity.name} low sits ${Math.round(
          lowTrendEntry.quote.buy - lowTrendEntry.quote.low
        )} below buy (${lowTrendEntry.quote.low})
      </p>`
    : "";
  return `
    <div class="panel-card">
      <p class="label">Trending</p>
      ${highLine}
      ${lowLine}
    </div>
  `;
}

function renderTrendGraph(entries: MarketEntry[]): string {
  if (!entries.length) return "";
  const highs = entries.map((entry) => ({
    label: entry.commodity.name,
    value: entry.quote.high
  }));
  const lows = entries.map((entry) => ({
    label: entry.commodity.name,
    value: entry.quote.low
  }));
  const maxHigh = Math.max(...highs.map((h) => h.value));
  const minLow = Math.min(...lows.map((l) => l.value));
  const maxRange = Math.max(1, maxHigh - minLow);
  const width = 280;
  const height = 120;
  const highPoints = highs
    .map((h, idx) => {
      const x = (idx / Math.max(1, highs.length - 1)) * width;
      const y = height - (h.value / maxHigh) * height;
      return `${x},${y}`;
    })
    .join(" ");
  const lowPoints = lows
    .map((l, idx) => {
      const x = (idx / Math.max(1, lows.length - 1)) * width;
      const y = height - ((l.value - minLow) / maxRange) * height;
      return `${x},${y}`;
    })
    .join(" ");
  const rows = highs
    .slice(0, 6)
    .map(
      (h) =>
        `<div class="trend-line">
           <span class="trend-label">${h.label}</span>
           <span class="trend-value">High ${h.value}</span>
         </div>`
    )
    .join("");
  return `
    <div class="panel-card trend-graph-card">
      <details>
        <summary class="label">Price Graph (Highs &amp; Lows)</summary>
        <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
          <polyline
            fill="none"
            stroke="rgba(66, 224, 198, 0.6)"
            stroke-width="2"
            points="${highPoints}"
          />
          <polyline
            fill="none"
            stroke="rgba(248, 113, 113, 0.6)"
            stroke-width="2"
            points="${lowPoints}"
          />
        </svg>
      <div class="market-trend-rows">${rows}</div>
    </details>
  </div>
`;
}

function renderTradeNudge(entry?: MarketEntry): string {
  if (!entry) return "";
  return `
    <div class="panel-card trade-nudge">
      <p class="label">Hot Tip</p>
      <p>
        Consider ${entry.commodity.name}. Buy @ ${entry.quote.buy}, sell @ ${entry.quote.high} (high).
      </p>
      <p class="muted">Profit spread: +${entry.profit}</p>
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

function getCommodityLegalStatus(status?: string): CommodityLegality {
  if (status === "restricted" || status === "illegal") {
    return status;
  }
  return "legal";
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
    pursueTradeStrategy: (strategy: TradeStrategy) => void;
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

window.pursueTradeStrategy = (strategy: TradeStrategy) => {
  const config = getStrategyConfig(strategy);
  const success = investInStrategy(strategy);
  const msgEl = document.getElementById("market-message");
  if (msgEl) {
    msgEl.textContent = success
      ? `Invested in ${config.name}.`
      : `Need ${config.cost} credits to unlock ${config.name}.`;
  }
  nav("market");
};
