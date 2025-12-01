// src/systems/SaveLoad.ts
// Simple JSON save/load utilities.

import { promises as fs } from "fs";
import { GameState } from "../game/GameState";
import { ensureProgressionDefaults } from "./PlayerState";
import { recalcPassiveEffects } from "./componentSystem";
import { applyPerkEffects } from "./perkSystem";

export async function saveGame(path: string, state: GameState): Promise<void> {
  const serialized = JSON.stringify(state, null, 2);
  await fs.writeFile(path, serialized, "utf-8");
}

export async function loadGame(path: string): Promise<GameState> {
  const raw = await fs.readFile(path, "utf-8");
  const parsed = JSON.parse(raw) as GameState;
  if (parsed.player) {
    ensureProgressionDefaults(parsed.player);
    recalcPassiveEffects(parsed);
    applyPerkEffects(parsed);
  }
  return parsed;
}
