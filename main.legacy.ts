// main.ts
// Example: build a galaxy, create a new game, travel, and resolve an event.
import { GalaxyGenerator } from "./galaxyGenerator";
import { GalaxyConfig } from "./galaxyTypes";
import galaxyConfigJson from "./galaxy_generator.json";
import { createRng } from "./src/rng/SeededRng";
import { EventEngine } from "./src/systems/EventEngine";
import { createNewGame, travelToSector } from "./src/systems/TravelSystem";
import { resolveMining, tradeCommodity, getMarketQuotes } from "./src/systems/EconomySystem";
import { resolveCombat } from "./src/systems/CombatSystem";

const galaxyConfig = galaxyConfigJson as GalaxyConfig;
const seed = 1337;
const rng = createRng(seed);

const generator = new GalaxyGenerator(galaxyConfig, seed);
const galaxy = generator.generate("medium");

const game = createNewGame(galaxy, { name: "Captain Vega", roleId: "trader" }, seed);
const eventEngine = new EventEngine(galaxy);

const destinationId = galaxy.sectors[0].connections[0];
const result = travelToSector(game, destinationId, rng, eventEngine);

console.log("Traveled from", result.path.from.id, "to", result.path.to.id);
if (result.event) {
  console.log("Encountered event:", result.event.eventId, "outcome:", result.event.outcome);
}

// Example: perform mining in current sector
const mining = resolveMining(game, galaxy.sectors.find((s) => s.id === game.currentSectorId)!, rng, "safe");
console.log("Mining collected:", mining.collected, mining.commodityId, "overflow:", mining.overflow);

// Example: quick combat resolution against a pirate
const combat = resolveCombat(game, { sector: galaxy.sectors.find((s) => s.id === game.currentSectorId)!, enemyType: "pirate" }, rng);
console.log("Combat outcome:", combat.outcome, "playerRoll:", combat.playerRoll, "enemyRoll:", combat.enemyRoll);

// Example: trade simulation
const quotes = getMarketQuotes(game, galaxy.sectors.find((s) => s.id === game.currentSectorId)!);
if (quotes.length) {
  const oreQuote = quotes[0];
  const trade = tradeCommodity(game, galaxy.sectors.find((s) => s.id === game.currentSectorId)!, {
    type: "buy",
    commodityId: oreQuote.commodity.id,
    quantity: 2
  });
  console.log("Trade success:", trade.success, "unitPrice:", trade.unitPrice);
}
