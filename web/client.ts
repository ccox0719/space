// web/client.ts
// Minimal text-based browser client to play the loop: travel -> event -> log.

import { GalaxyGenerator } from "../galaxyGenerator";
import { GalaxyConfig, Sector } from "../galaxyTypes";
import galaxyConfigJson from "../galaxy_generator.json";
import { createRng } from "../src/rng/SeededRng";
import { EventEngine } from "../src/systems/EventEngine";
import { createNewGame, travelToSector } from "../src/systems/TravelSystem";
import { resolveMining, getMarketQuotes, tradeCommodity } from "../src/systems/EconomySystem";
import { resolveCombat } from "../src/systems/CombatSystem";

type HTMLElementMap = {
  sectorName: HTMLElement;
  sectorMeta: HTMLElement;
  connections: HTMLElement;
  playerStats: HTMLElement;
  log: HTMLElement;
  missions: HTMLElement;
  guidance: HTMLElement;
  marketList: HTMLElement;
};

const galaxyConfig = galaxyConfigJson as GalaxyConfig;

const seed = 1337;
const rng = createRng(seed);
const galaxy = new GalaxyGenerator(galaxyConfig, seed).generate("medium");
let game = createNewGame(galaxy, { name: "Browser Captain", roleId: "trader" }, seed);
const eventEngine = new EventEngine(galaxy);

const dom: HTMLElementMap = {
  sectorName: getEl("sector-name"),
  sectorMeta: getEl("sector-meta"),
  connections: getEl("connections"),
  playerStats: getEl("player-stats"),
  log: getEl("log"),
  missions: getEl("missions"),
  guidance: getEl("guidance"),
  marketList: getEl("market-list")
};

function getEl(id: string): HTMLElement {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing element #${id}`);
  return el;
}

function travel(toId: string): void {
  try {
    const res = travelToSector(game, toId, rng, eventEngine);
    const sector = findSector(toId);
    if (res.event) {
      appendLogLine(
        `Event: ${res.event.eventId} (${res.event.category}) outcome=${res.event.outcome}`
      );
    }
    appendLogLine(`Travelled to ${sector.name}`);
  } catch (err) {
    appendLogLine(`Travel failed: ${(err as Error).message}`);
  }
  render();
}

function mine(): void {
  const sector = findSector(game.currentSectorId);
  const result = resolveMining(game, sector, rng, "safe");
  appendLogLine(`Mined ${result.collected} ${result.commodityId}${result.overflow ? ` (overflow ${result.overflow})` : ""}`);
  render();
}

function buyCommodity(commodityId: string): void {
  const sector = findSector(game.currentSectorId);
  const result = tradeCommodity(game, sector, { type: "buy", commodityId, quantity: 1 });
  appendLogLine(
    result.success
      ? `Bought ${commodityId} @ ${result.unitPrice}`
      : `Buy failed: ${result.reason}`
  );
  render();
}

function sellCommodity(commodityId: string): void {
  const sector = findSector(game.currentSectorId);
  const result = tradeCommodity(game, sector, { type: "sell", commodityId, quantity: 1 });
  appendLogLine(
    result.success
      ? `Sold ${commodityId} @ ${result.unitPrice}`
      : `Sell failed: ${result.reason}`
  );
  render();
}

function combatSample(): void {
  const sector = findSector(game.currentSectorId);
  const result = resolveCombat(game, { sector, enemyType: "pirate" }, rng);
  appendLogLine(
    `Combat vs pirate: ${result.outcome} (you ${result.playerRoll} / foe ${result.enemyRoll})`
  );
  render();
}

function findSector(id: string): Sector {
  const sector = galaxy.sectors.find((s) => s.id === id);
  if (!sector) throw new Error(`Unknown sector ${id}`);
  return sector;
}

function appendLogLine(line: string): void {
  game.log.push({
    cycle: game.time.cycle,
    sectorId: game.currentSectorId,
    message: line
  });
}

function render(): void {
  const sector = findSector(game.currentSectorId);
  dom.sectorName.textContent = sector.name;
  dom.sectorMeta.textContent = [
    `Type: ${sector.typeId}`,
    `Faction: ${sector.factionId ?? "Unclaimed"}`,
    `Danger: ${sector.danger}`,
    `Law: ${sector.law}`
  ].join(" | ");

  dom.connections.innerHTML = "";
  sector.connections.forEach((connId) => {
    const connSector = findSector(connId);
    const button = document.createElement("button");
    button.textContent = connSector.name;
    button.onclick = () => travel(connId);
    dom.connections.appendChild(button);
  });

  dom.playerStats.textContent = [
    `Credits: ${game.player.credits}`,
    `Fuel: ${game.player.fuel}/${game.player.maxFuel}`,
    `Hull: ${game.player.ship.hull}/${game.player.ship.maxHull}`,
    `Shields: ${game.player.ship.shields}/${game.player.ship.maxShields}`,
    `Role: ${game.player.roleId}`
  ].join(" | ");

  dom.missions.textContent = game.activeMissions
    .map((m) => `${m.missionId} (${m.status}) exp:${m.expiresIn ?? "-"} reward:${m.reward}`)
    .join("\n");

  renderMarket(sector);

  dom.log.textContent = game.log
    .slice(-10)
    .map((l) => `[c${l.cycle}] ${l.message}`)
    .join("\n");

  dom.guidance.textContent = buildGuidance(sector);
}

function wireControls(): void {
  getEl("btn-mine").addEventListener("click", () => mine());
  getEl("btn-combat").addEventListener("click", () => combatSample());
}

wireControls();
render();

function renderMarket(sector: Sector): void {
  dom.marketList.innerHTML = "";
  const quotes = getMarketQuotes(game, sector);
  if (!quotes.length) {
    dom.marketList.textContent = "No market in this sector.";
    return;
  }
  quotes.forEach((q) => {
    const row = document.createElement("div");
    row.textContent = `${q.commodity.name}: buy ${q.buyPrice} / sell ${q.sellPrice}`;
    const buyBtn = document.createElement("button");
    buyBtn.textContent = "Buy +1";
    buyBtn.onclick = () => buyCommodity(q.commodity.id);
    const sellBtn = document.createElement("button");
    sellBtn.textContent = "Sell -1";
    sellBtn.onclick = () => sellCommodity(q.commodity.id);
    row.appendChild(buyBtn);
    row.appendChild(sellBtn);
    dom.marketList.appendChild(row);
  });
}

function buildGuidance(sector: Sector): string {
  const messages: string[] = [];
  messages.push("Click a connection to travel. Each jump advances time and can trigger events.");
  if (sector.tags.includes("mining")) messages.push("This is a mining sector; run Mine for steady credits.");
  if (sector.tags.includes("black_market")) messages.push("Black market here: smuggling pays, but law/rep risks rise.");
  if (sector.tags.includes("core")) messages.push("Core systems: safer travel, better markets, fewer pirate events.");
  if ((game.player.fuel / game.player.maxFuel) < 0.3) messages.push("Fuel is low; travel sparingly until you reach a safer hub.");
  if (game.player.ship.hull < game.player.ship.maxHull * 0.5) messages.push("Hull is damaged; avoid combat until repaired.");
  if (!messages.length) messages.push("Explore freely: travel, mine, trade, or test combat.");
  return messages.join("\n• ");
}
