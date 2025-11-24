import type { SystemDef, LaneType as ContentLaneType } from "./contentTypes";

export type MapZoomLevel = "local" | "sector";

export type LaneType = "core" | "frontier" | "wild";

export interface StarNode {
  id: string;
  name: string;
  x: number;
  y: number;
  tags: string[];
}

export interface StarLane {
  from: string;
  to: string;
  type: LaneType;
  distance: number;
}

export interface StarMap {
  nodes: StarNode[];
  lanes: StarLane[];
}

let starMap: StarMap | null = null;

export function setStarMap(map: StarMap): void {
  starMap = map;
}

export function getStarMap(): StarMap | null {
  return starMap;
}

function normalizeLaneType(lane: ContentLaneType | string | undefined): LaneType {
  switch (lane) {
    case "core_lane":
    case "core":
      return "core";
    case "frontier_lane":
    case "frontier":
      return "frontier";
    default:
      return "wild";
  }
}

export function laneKey(a: string, b: string): string {
  return a < b ? `${a}::${b}` : `${b}::${a}`;
}

export function buildStarMapFromSystems(systems: SystemDef[]): StarMap {
  const nodes: StarNode[] = systems.map((system) => ({
    id: system.id,
    name: system.name,
    x: system.coords?.x ?? 0,
    y: system.coords?.y ?? 0,
    tags: system.tags ?? []
  }));

  const lanes: StarLane[] = [];
  const seen = new Set<string>();
  for (const system of systems) {
    for (const neighbor of system.neighbors ?? []) {
      const key = laneKey(system.id, neighbor.id);
      if (seen.has(key)) continue;
      seen.add(key);
      lanes.push({
        from: system.id,
        to: neighbor.id,
        type: normalizeLaneType(neighbor.laneType),
        distance: Math.max(1, Math.round(neighbor.distance ?? 1))
      });
    }
  }

  const map = { nodes, lanes };
  setStarMap(map);
  return map;
}

export function getNodeById(map: StarMap, nodeId: string): StarNode | undefined {
  return map.nodes.find((node) => node.id === nodeId);
}

export function getAdjacentNodes(map: StarMap, nodeId: string): string[] {
  return map.lanes
    .filter((lane) => lane.from === nodeId || lane.to === nodeId)
    .map((lane) => (lane.from === nodeId ? lane.to : lane.from));
}

export function getVisibleNodeDepths(
  map: StarMap,
  centerId: string,
  zoom: MapZoomLevel
): Map<string, number> {
  const maxDepth = zoom === "local" ? 1 : 3;
  const visited = new Map<string, number>([[centerId, 0]]);
  let frontier: string[] = [centerId];

  for (let depth = 1; depth <= maxDepth; depth++) {
    const next: string[] = [];
    for (const node of frontier) {
      for (const neighbor of getAdjacentNodes(map, node)) {
        if (visited.has(neighbor)) continue;
        visited.set(neighbor, depth);
        next.push(neighbor);
      }
    }
    if (!next.length) break;
    frontier = next;
  }

  return visited;
}

export function getVisibleNodes(
  map: StarMap,
  centerId: string,
  zoom: MapZoomLevel
): string[] {
  return Array.from(getVisibleNodeDepths(map, centerId, zoom).keys());
}

export function shortestPath(map: StarMap, startId: string, destId: string): string[] {
  if (startId === destId) return [startId];

  const queue: string[] = [startId];
  const visited = new Set<string>([startId]);
  const prev = new Map<string, string>();

  while (queue.length) {
    const current = queue.shift()!;
    for (const neighbor of getAdjacentNodes(map, current)) {
      if (visited.has(neighbor)) continue;
      visited.add(neighbor);
      prev.set(neighbor, current);
      queue.push(neighbor);
      if (neighbor === destId) break;
    }
  }

  if (!visited.has(destId)) return [];

  const path: string[] = [];
  let cursor: string | undefined = destId;
  while (cursor) {
    path.push(cursor);
    cursor = prev.get(cursor);
  }
  return path.reverse();
}

export function getHopDistance(map: StarMap, startId: string, destId: string): number | null {
  const path = shortestPath(map, startId, destId);
  if (!path.length) return null;
  return Math.max(0, path.length - 1);
}
