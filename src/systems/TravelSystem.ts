// src/systems/TravelSystem.ts
// Movement, time progression, and event triggering.

import { Galaxy, Sector } from "../../galaxyTypes";
import { GameState, TravelResult, EventSelection } from "../game/GameState";
import { createPlayerState, appendLog, adjustFuel } from "./PlayerState";
import { EventEngine } from "./EventEngine";
import { Rng } from "../rng/SeededRng";
import { tickMissions } from "./MissionSystem";
import { applyTravelRisk, pirateEncounterChance, decayPirateAttention } from "./RiskSystem";
import { addXp } from "./xpSystem";
import { getPerkMultiplier } from "./perkSystem";

interface NewGameOptions {
  name: string;
  roleId: GameState["player"]["roleId"];
  startingCredits?: number;
  startingFuel?: number;
}

export function createNewGame(
  galaxy: Galaxy,
  options: NewGameOptions,
  seed: number
): GameState {
  const startingSector = galaxy.sectors[0];
  const player = createPlayerState(galaxy, {
    name: options.name,
    roleId: options.roleId,
    startingCredits: options.startingCredits,
    startingFuel: options.startingFuel
  });

  return {
    seed,
    galaxy,
    currentSectorId: startingSector.id,
    player,
    time: { cycle: 0 },
    activeMissions: [],
    completedMissions: [],
    failedMissions: [],
    log: []
  };
}

export function travelToSector(
  game: GameState,
  destinationId: string,
  rng: Rng,
  eventEngine: EventEngine
): TravelResult {
  const current = findSector(game.galaxy, game.currentSectorId);
  const dest = findSector(game.galaxy, destinationId);
  const path = findPath(game.galaxy, current.id, dest.id);
  if (!path.length) throw new Error(`No route from ${current.id} to ${dest.id}`);

  let fuelSpent = 0;
  const segments: TravelSegmentResult[] = [];
  let lastEvent: EventSelection | null = null;

  for (let i = 0; i < path.length - 1; i++) {
    const fromId = path[i];
    const toId = path[i + 1];
    const fromSector = findSector(game.galaxy, fromId);
    const toSector = findSector(game.galaxy, toId);

    const fuelMultiplier = Math.max(0.1, getPerkMultiplier(game, "travel", "fuelCostMultiplier"));
    adjustFuel(game.player, -fuelMultiplier);
    fuelSpent += fuelMultiplier;
    game.currentSectorId = toSector.id;
    game.time.cycle += 1;
    applyTravelRisk(game, toSector);

    tickMissions(game);

    const travelXp = Math.max(
      4,
      5 + (toSector.danger === "high" ? 4 : toSector.danger === "medium" ? 2 : 1)
    );
    addXp(game, "travel", travelXp);

    let segmentEvent: EventSelection | null = null;
    const pirateChance = pirateEncounterChance(game, toSector);
    if (rng.next() < pirateChance) {
      segmentEvent = eventEngine.rollSpecificEvent(game, "pirate_encounter_lane", toSector, rng);
      decayPirateAttention(game.player, 20);
    } else {
      segmentEvent = eventEngine.rollEvent(game, toSector, rng) || null;
    }

    if (segmentEvent) lastEvent = segmentEvent;
    segments.push({ fromId, toId, event: segmentEvent });
  }

  appendLog(game, `Traveled to ${dest.name}`, {
    from: current.id,
    to: dest.id,
    event: lastEvent?.eventId ?? null
  });

  return {
    path: { from: current, to: dest },
    fuelSpent,
    event: lastEvent || undefined,
    segments
  };
}

function findSector(galaxy: Galaxy, sectorId: string): Sector {
  const sector = galaxy.sectors.find((s) => s.id === sectorId);
  if (!sector) {
    throw new Error(`Unknown sector ${sectorId}`);
  }
  return sector;
}

interface TravelSegmentResult {
  fromId: string;
  toId: string;
  event?: EventSelection | null;
}

function findPath(galaxy: Galaxy, startId: string, destId: string): string[] {
  if (startId === destId) return [startId];
  const queue: string[] = [startId];
  const visited = new Set<string>([startId]);
  const prev = new Map<string, string>();

  while (queue.length) {
    const current = queue.shift()!;
    const sector = findSector(galaxy, current);
    for (const neighbor of sector.connections) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      prev.set(neighbor, current);
      queue.push(neighbor);
      if (neighbor === destId) break;
    }
  }

  if (!visited.has(destId)) return [];
  const path: string[] = [];
  let at = destId;
  while (at) {
    path.push(at);
    const p = prev.get(at);
    if (!p) break;
    at = p;
  }
  return path.reverse();
}
