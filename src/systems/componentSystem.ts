import { readFileSync } from "fs";
import path from "path";
import { GameState } from "../game/GameState";
import { appendLog } from "./PlayerState";
import { applyPerkEffects } from "./perkSystem";

interface ComponentDef {
  id: string;
  name: string;
  description?: string;
  cost?: number;
  slot?: string;
  effects?: Record<string, number>;
  [key: string]: unknown;
}

interface PassiveComponent extends ComponentDef {
  slot: "passive";
}

const COMPONENTS_PATH = path.resolve(process.cwd(), "game", "content", "components.json");
const COMPONENTS_DATA: ComponentDef[] = JSON.parse(readFileSync(COMPONENTS_PATH, "utf-8"));
const PASSIVE_CATALOG: PassiveComponent[] = COMPONENTS_DATA.filter(
  (component): component is PassiveComponent => component.slot === "passive"
);
const PASSIVE_BY_ID = new Map<string, PassiveComponent>(PASSIVE_CATALOG.map((component) => [component.id, component]));

export const PASSIVE_SELL_RATIO = 0.4;

export function getPassiveCatalog(): PassiveComponent[] {
  return [...PASSIVE_CATALOG];
}

export function getPassiveComponent(componentId: string): PassiveComponent | null {
  return PASSIVE_BY_ID.get(componentId) ?? null;
}

export function getInstalledPassiveComponents(game: GameState): PassiveComponent[] {
  return game.player.passives
    .map((id) => PASSIVE_BY_ID.get(id))
    .filter((comp): comp is PassiveComponent => comp !== undefined);
}

export function getPassiveInventoryComponents(game: GameState): PassiveComponent[] {
  return game.player.passiveInventory
    .map((id) => PASSIVE_BY_ID.get(id))
    .filter((comp): comp is PassiveComponent => comp !== undefined);
}

export function getPassiveSlotUsage(game: GameState): {
  used: number;
  total: number;
  available: number;
} {
  const total = Math.max(0, game.player.ship.passiveSlots ?? 0);
  const used = game.player.passives.length;
  return {
    used,
    total,
    available: Math.max(0, total - used)
  };
}

export function buyPassiveSystem(game: GameState, componentId: string): boolean {
  const component = getPassiveComponent(componentId);
  if (!component) {
    return false;
  }
  if (game.player.passives.includes(componentId)) {
    return false;
  }
  if (game.player.passiveInventory.includes(componentId)) {
    return false;
  }
  const cost = Math.max(0, component.cost ?? 0);
  if (game.player.credits < cost) {
    return false;
  }
  game.player.credits -= cost;
  game.player.passiveInventory.push(componentId);
  appendLog(game, `Purchased passive system ${component.name}`, { componentId, cost });
  return true;
}

export function installPassiveSystem(game: GameState, componentId: string): boolean {
  const component = getPassiveComponent(componentId);
  if (!component) {
    return false;
  }
  if (game.player.passives.includes(componentId)) {
    return false;
  }
  const inventoryIndex = game.player.passiveInventory.indexOf(componentId);
  if (inventoryIndex === -1) {
    return false;
  }
  const slots = Math.max(0, game.player.ship.passiveSlots ?? 0);
  if (game.player.passives.length >= slots) {
    return false;
  }
  game.player.passiveInventory.splice(inventoryIndex, 1);
  game.player.passives.push(componentId);
  appendLog(game, `Installed passive system ${component.name}`, { componentId });
  recalcPassiveEffects(game);
  applyPerkEffects(game);
  console.debug("Passive installed", componentId, game.player.passives.length);
  return true;
}

export function sellPassiveSystem(game: GameState, componentId: string): boolean {
  const component = getPassiveComponent(componentId);
  if (!component) {
    return false;
  }
  const installedIndex = game.player.passives.indexOf(componentId);
  const inventoryIndex = game.player.passiveInventory.indexOf(componentId);
  if (installedIndex === -1 && inventoryIndex === -1) {
    return false;
  }
  if (installedIndex !== -1) {
    game.player.passives.splice(installedIndex, 1);
    recalcPassiveEffects(game);
    applyPerkEffects(game);
    console.debug("Passive removed from ship", componentId);
  } else {
    game.player.passiveInventory.splice(inventoryIndex, 1);
    console.debug("Passive removed from inventory", componentId);
  }
  const refund = Math.floor((component.cost ?? 0) * PASSIVE_SELL_RATIO);
  game.player.credits += refund;
  appendLog(game, `Sold passive system ${component.name}`, { componentId, refund });
  return true;
}

export function recalcPassiveEffects(game: GameState): Record<string, number> {
  const installed = getInstalledPassiveComponents(game);
  const effects: Record<string, number> = {};
  for (const component of installed) {
    if (!component.effects) continue;
    for (const [key, value] of Object.entries(component.effects)) {
      if (typeof value !== "number") continue;
      effects[key] = (effects[key] ?? 1) * value;
    }
  }
  game.player.passiveEffects = effects;
  console.debug("Passive effects recalculated", effects);
  return effects;
}

export function getPassiveCatalogEntries(game: GameState): (PassiveComponent & {
  owned: boolean;
  installed: boolean;
  inInventory: boolean;
})[] {
  const installed = new Set(game.player.passives);
  const inventory = new Set(game.player.passiveInventory);
  const owned = new Set<string>([...installed, ...inventory]);
  return PASSIVE_CATALOG.map((component) => ({
    ...component,
    owned: owned.has(component.id),
    installed: installed.has(component.id),
    inInventory: inventory.has(component.id)
  }));
}
