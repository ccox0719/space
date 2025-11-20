import {
  GameState,
  newGameState,
  setGameState,
  gameState,
  loadPersistedLoadout
} from "./state";
import { navigation } from "./navigation";
import { render } from "./renderer";
import { setEvents } from "../systems/eventSystem";
import { setLootTables } from "../systems/lootSystem";
import { setMissions } from "../systems/missionSystem";
import { autoEquipAvailableWeapons } from "../systems/weaponSystem";
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
  GameContent
} from "./contentTypes";

export let content: GameContent | null = null;

declare global {
  interface Window {
    nav: (screen: string, params?: Record<string, unknown>) => void;
  }
}

/**
 * Load all JSON content from /content.
 */
async function loadContent(): Promise<GameContent> {
  const [
    systemsResp,
    shipsResp,
    componentsResp,
    commoditiesResp,
    weaponsResp,
    enemiesResp,
    eventsResp,
    lootResp,
    missionsResp
  ] =
    await Promise.all([
      fetch("/content/systems.json"),
      fetch("/content/ships.json"),
      fetch("/content/components.json"),
      fetch("/content/commodities.json"),
      fetch("/content/weapons.json"),
      fetch("/content/enemies.json"),
      fetch("/content/events.json"),
      fetch("/content/loot_tables.json"),
      fetch("/content/missions.json")
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

  const systems: SystemDef[] = await systemsResp.json();
  const ships: ShipDef[] = await shipsResp.json();
  const components: ComponentDef[] = await componentsResp.json();
  const commodities: CommodityDef[] = await commoditiesResp.json();
  const weapons: WeaponDef[] = await weaponsResp.json();
  const enemies: EnemyDef[] = await enemiesResp.json();

  const events: GameEvent[] = await eventsResp.json();
  setEvents(events);

  const lootTables: LootTable[] = await lootResp.json();
  setLootTables(lootTables);

  const missions: MissionDef[] = await missionsResp.json();
  setMissions(missions as any);

  return { systems, ships, components, commodities, weapons, enemies, events, lootTables, missions };
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

  // New game state (later you can check for saves)
  const initialState: GameState = newGameState();
  setGameState(initialState);

  const persistedLoadout = loadPersistedLoadout();
  if (persistedLoadout) {
    const slots = gameState.ship.hardpoints.length;
    const weapons = [];
    for (let i = 0; i < slots; i++) {
      weapons.push(persistedLoadout.weapons[i] ?? null);
    }
    gameState.ship.weapons = weapons;
    gameState.inventory.weapons = persistedLoadout.inventory;
  }
  // Auto-equip any available weapons into empty slots for a smoother start.
  autoEquipAvailableWeapons();

  // Patch navigation.go so every transition re-renders
  const originalGo = navigation.go.bind(navigation);
  navigation.go = (screen, params) => {
    originalGo(screen, params);
    render();
  };

  window.nav = (screen: string, params: Record<string, unknown> = {}) => {
    navigation.go(screen as any, params);
  };

  // Decide initial screen
  navigation.current = gameState.player.hasChosenStarter ? "main" : "ship_select";

  // Initial render
  render();
}

export function getSystemById(id: string): SystemDef | null {
  if (!content) return null;
  return content.systems.find((system) => system.id === id) ?? null;
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
