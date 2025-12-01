import { content } from "../core/engine";
import type { PirateBaseDef } from "../core/contentTypes";
import { navigation } from "../core/navigation";

declare global {
  interface Window {
    attackPirateBase: (id: string) => void;
  }
}

window.attackPirateBase = (id: string) => {
  const base = getBaseById(id);
  if (!base) {
    console.warn(`Unknown base ${id}`);
    return;
  }
  navigation.go("event", {
    eventId: "pirate_base_attack",
    message: `You are entering ${base.name}. Waves: ${base.maxWaves}. Good luck.`
  });
};

function getBaseById(id: string): PirateBaseDef | null {
  if (!content) return null;
  return content.basesById[id] ?? null;
}

export function getBaseInSystem(systemId: string): PirateBaseDef | null {
  if (!content) return null;
  const bases = Object.values(content.basesById);
  return bases.find((base) => base.systemId === systemId) ?? null;
}

export function getBaseTag(base: PirateBaseDef | null): string {
  if (!base) return "";
  return `Pirate Base Detected (Tier ${base.tier})`;
}
