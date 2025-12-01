import { gameState } from "../core/state";
import { getSystemById } from "../core/engine";
import { navigation } from "../core/navigation";
import { startCombat } from "./combatSystem";

declare global {
  interface Window {
    mineAsteroidBelt: () => void;
    seekCourierWork: () => void;
    exploreUnityRelic: () => void;
  }
}

const ORE_ID = "aurite_ore";

function randBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function mineAsteroidBelt(): void {
  const system = getSystemById(gameState.location.systemId);
  if (!system || !system.tags.includes("mining_belt")) {
    navigation.go("main", { message: "No mining targets are available here." });
    return;
  }

  const log: string[] = [];

  const oreBonus = Math.random() < 0.7;
  if (oreBonus) {
    const quantity = randBetween(1, 3);
    gameState.ship.cargo[ORE_ID] = (gameState.ship.cargo[ORE_ID] || 0) + quantity;
    log.push(`Reclaimed ${quantity} units of aurite ore.`);
  } else {
    log.push("Vein output was poor this cycle.");
  }

  if (Math.random() < 0.3) {
    const damage = randBetween(1, 4);
    gameState.ship.hp = Math.max(1, gameState.ship.hp - damage);
    log.push(`Micrometeorites nicked the hull (-${damage} HP).`);
  }

  if (Math.random() < 0.25) {
    log.push("Mining activity broadcast a distress ping—pirates are incoming!");
    startCombat("raider_skiff");
    return;
  }

  navigation.go("main", { message: log.join(" ") });
}

export function seekCourierWork(): void {
  navigation.go("contracts");
}

export function exploreUnityRelic(): void {
  if (!getSystemById(gameState.location.systemId)?.tags.includes("restricted")) {
    navigation.go("main", { message: "No relics are nearby." });
    return;
  }
  navigation.go("event", { eventId: "unity_relic" });
}

window.mineAsteroidBelt = mineAsteroidBelt;
window.seekCourierWork = seekCourierWork;
window.exploreUnityRelic = exploreUnityRelic;
