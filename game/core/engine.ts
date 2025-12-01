import {
  GameState,
  newGameState,
  setGameState,
  gameState,
  loadPersistedLoadout,
  loadDevTune,
  loadPersistedXpState
} from "./state";
import { navigation } from "./navigation";
import { render } from "./renderer";
import { setEvents } from "../systems/eventSystem";
import { setLootTables } from "../systems/lootSystem";
import { setMissions } from "../systems/missionSystem";
import { autoEquipAvailableWeapons } from "../systems/weaponSystem";
import { buildStarMapFromSystems, setStarMap } from "./map";
import {
  initPixelBackground,
  updatePixelBackground,
  drawPixelBackground,
  setPixelScene
} from "../systems/pixelBackgroundSystem";
import type {
  SystemDef,
  ShipDef,
  ComponentDef,
  WeaponDef,
  CommodityDef,
  EnemyDef,
  GameEvent,
  LootTable,
  MissionDef,
  PirateBaseDef,
  EncounterTemplate,
  GameContent
} from "./contentTypes";

/**
 * System definition (map node), matches systems.json.
 */
export type {
  SystemDef,
  ShipDef,
  ComponentDef,
  WeaponDef,
  CommodityDef,
  EncounterTemplate,
  GameContent
} from "./contentTypes";

export let content: GameContent | null = null;

let pixelCanvas: HTMLCanvasElement | null = null;
let pixelCtx: CanvasRenderingContext2D | null = null;
let bgLastTime = performance.now();

declare global {
  interface Window {
    nav: (screen: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Load all JSON content from /content.
 */
async function loadContent(): Promise<GameContent> {
  const base = (import.meta.env.BASE_URL ?? "/").replace(/\/+$/, "/");
  const contentUrl = (file: string) => `${base}content/${file}`;

    const [
      systemsResp,
      shipsResp,
      componentsResp,
      commoditiesResp,
      weaponsResp,
      enemiesResp,
      eventsResp,
      lootResp,
      missionsResp,
      encountersResp,
      factionsResp
    ] =
    await Promise.all([
      fetch(contentUrl("systems.json")),
      fetch(contentUrl("ships.json")),
      fetch(contentUrl("components.json")),
      fetch(contentUrl("commodities.json")),
      fetch(contentUrl("weapons.json")),
      fetch(contentUrl("enemies.json")),
      fetch(contentUrl("events.json")),
      fetch(contentUrl("loot_tables.json")),
      fetch(contentUrl("missions.json")),
      fetch(contentUrl("encounters.json")),
      fetch(contentUrl("factions.json"))
    ]);

  if (!systemsResp.ok) {
    throw new Error(`Failed to load systems.json: ${systemsResp.status}`);
  }
  if (!shipsResp.ok) {
    throw new Error(`Failed to load ships.json: ${shipsResp.status}`);
  }
  if (!componentsResp.ok) {
    throw new Error(`Failed to load components.json: ${componentsResp.status}`);
  }
  if (!weaponsResp.ok) {
    throw new Error(`Failed to load weapons.json: ${weaponsResp.status}`);
  }
  if (!commoditiesResp.ok) {
    throw new Error(`Failed to load commodities.json: ${commoditiesResp.status}`);
  }

  if (!enemiesResp.ok) {
    throw new Error(`Failed to load enemies.json: ${enemiesResp.status}`);
  }

  if (!eventsResp.ok) {
    throw new Error(`Failed to load events.json: ${eventsResp.status}`);
  }

  if (!lootResp.ok) {
    throw new Error(`Failed to load loot_tables.json: ${lootResp.status}`);
  }

    if (!missionsResp.ok) {
      throw new Error(`Failed to load missions.json: ${missionsResp.status}`);
    }
    if (!encountersResp.ok) {
      throw new Error(`Failed to load encounters.json: ${encountersResp.status}`);
    }
    if (!factionsResp.ok) {
      throw new Error(`Failed to load factions.json: ${factionsResp.status}`);
    }

  const systems: SystemDef[] = await systemsResp.json();
  for (const system of systems) {
    // Normalize tags so every system always surfaces sensible badges.
    const tags = new Set(system.tags ?? []);
    if (system.region) tags.add(system.region);
    if (system.security === "high") tags.add("secure");
    if (system.security === "low") tags.add("lawless");
    if (system.marketProfile?.blackMarket) tags.add("black_market");
    const econ = system.economyTags ?? [];
    if (econ.includes("mining")) tags.add("mining");
    if (econ.includes("salvage")) tags.add("salvage");
    if (econ.includes("checkpoint")) tags.add("checkpoint");
    system.tags = Array.from(tags);
  }
  const ships: ShipDef[] = await shipsResp.json();
  const components: ComponentDef[] = await componentsResp.json();
  const commodities: CommodityDef[] = await commoditiesResp.json();
  const weapons: WeaponDef[] = await weaponsResp.json();
  const enemies: EnemyDef[] = await enemiesResp.json();
  const basesResp = await fetch(contentUrl("bases.json"));

  if (!basesResp.ok) {
    throw new Error(`Failed to load bases.json: ${basesResp.status}`);
  }
  const bases: PirateBaseDef[] = await basesResp.json();
  const systemsById: Record<string, SystemDef> = {};
  for (const system of systems) {
    systemsById[system.id] = system;
  }

  const events: GameEvent[] = await eventsResp.json();
  setEvents(events);

  const lootTables: LootTable[] = await lootResp.json();
  setLootTables(lootTables);

    const missions: MissionDef[] = await missionsResp.json();
    const encounters: EncounterTemplate[] = await encountersResp.json();
    const factions: FactionDef[] = await factionsResp.json();
  setMissions(missions as any);

  const basesById: Record<string, PirateBaseDef> = {};
  for (const base of bases) {
    basesById[base.id] = base;
  }

  return {
    systems,
    systemsById,
    bases,
    basesById,
    ships,
    components,
    commodities,
    weapons,
    enemies,
    events,
    lootTables,
      missions,
      encounters,
      factions
    };
  }

function ensurePixelCanvas(): void {
  if (pixelCanvas) return;
  pixelCanvas = document.createElement("canvas");
  pixelCanvas.id = "pixel-background";
  pixelCanvas.style.position = "fixed";
  pixelCanvas.style.top = "0";
  pixelCanvas.style.left = "0";
  pixelCanvas.style.width = "100vw";
  pixelCanvas.style.height = "calc(100vw * 9 / 16)";
  pixelCanvas.style.maxHeight = "100vh";
  pixelCanvas.style.maxWidth = "calc(100vh * 16 / 9)";
  pixelCanvas.style.objectFit = "contain";
  pixelCanvas.style.zIndex = "0";
  pixelCanvas.style.pointerEvents = "none";
  pixelCanvas.style.background = "#02030b";
  pixelCanvas.style.imageRendering = "pixelated";
  pixelCanvas.style.display = "block";
  document.body.insertBefore(pixelCanvas, document.body.firstChild || null);
  pixelCtx = pixelCanvas.getContext("2d");
  initPixelBackground(pixelCanvas);
}

function startPixelBackgroundLoop(): void {
  const step = (now: number) => {
    const dt = now - bgLastTime;
    bgLastTime = now;
    updatePixelBackground(dt);
    drawPixelBackground(pixelCtx, now);
    requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/**
 * Initialize the runtime:
 * - load content
 * - create or load GameState
 * - patch navigation.go to auto-render
 * - render initial screen (starter select or main)
 */
export async function initGame() {
  // Load content
  content = await loadContent();
  ensurePixelCanvas();
  const starMap = buildStarMapFromSystems(content.systems);

  // New game state (later you can check for saves)
  const initialState: GameState = newGameState();
  initialState.map = starMap;
  setGameState(initialState);
  setStarMap(starMap);
  loadDevTune();
  const persistedXpState = loadPersistedXpState();
  if (persistedXpState) {
    gameState.player.xp = persistedXpState.xp;
    gameState.player.xpTracks = persistedXpState.xpTracks ?? {};
    gameState.player.perksUnlocked = persistedXpState.perksUnlocked ?? [];
  }

  const persistedLoadout = loadPersistedLoadout();
  if (persistedLoadout) {
    const slots = gameState.ship.hardpoints.length;
    const weapons = [];
    for (let i = 0; i < slots; i++) {
      weapons.push(persistedLoadout.weapons[i] ?? null);
    }
    gameState.ship.weapons = weapons;
    gameState.ship.passives = persistedLoadout.passives ?? [];
    gameState.inventory.weapons = persistedLoadout.inventoryWeapons ?? [];
    gameState.inventory.passives = persistedLoadout.inventoryPassives ?? [];
  }
  // Auto-equip any available weapons into empty slots for a smoother start.
  autoEquipAvailableWeapons();

  // Patch navigation.go so every transition re-renders
  const originalGo = navigation.go.bind(navigation);
  navigation.go = (screen, params) => {
    originalGo(screen, params);
    render();
  };

  const originalSetZoom = navigation.setZoom.bind(navigation);
  navigation.setZoom = (zoom) => {
    if (navigation.zoom === zoom) return;
    originalSetZoom(zoom);
    render();
  };

  window.nav = (screen: string, params: Record<string, unknown> = {}) => {
    navigation.go(screen as any, params);
  };

  // Decide initial screen
  navigation.current = gameState.player.hasChosenStarter ? "main" : "ship_select";

  // Initial render
  render();
  startPixelBackgroundLoop();
}

export function setBackgroundScene(mode: Parameters<typeof setPixelScene>[0]): void {
  setPixelScene(mode);
}

export function getSystemById(id: string): SystemDef | null {
  if (!content) return null;
  return content.systemsById[id] ?? null;
}

export function getShipById(id: string): ShipDef | null {
  if (!content) return null;
  return content.ships.find((ship) => ship.id === id) ?? null;
}

export function getComponentById(id: string): ComponentDef | null {
  if (!content) return null;
  return content.components.find((c) => c.id === id) ?? null;
}

export { gameState };
