export type ScreenID =
  | "main"
  | "travel"
  | "market"
  | "contracts"
  | "ship"
  | "weapon_slots"
  | "weapon_select"
  | "event"
  | "combat"
  | "shipyard"
  | "ship_select"
  | "mining"
  | "perks"
  | "gameover";

import type { MapZoomLevel } from "./map";

export interface ActiveRoute {
  nodes: string[];
  currentIndex: number;
  source: "mission" | "manual";
  missionId?: string;
}

interface NavigationState {
  current: ScreenID;
  params: Record<string, unknown>;
  zoom: MapZoomLevel;
  activeRoute: ActiveRoute | null;
  setZoom: (zoom: MapZoomLevel) => void;
  setActiveRoute: (route: ActiveRoute | null) => void;
  advanceActiveRoute: (nodeId: string) => boolean;
  clearActiveRoute: () => void;
}

export const navigation: NavigationState & {
  go: (screen: ScreenID, params?: Record<string, unknown>) => void;
} = {
  current: "main",
  params: {},
  zoom: "local",
  activeRoute: null,
  go(screen: ScreenID, params: Record<string, unknown> = {}) {
    this.current = screen;
    this.params = params;
    // renderer.render() will be wired in engine.ts
  },
  setZoom(zoom: MapZoomLevel) {
    this.zoom = zoom;
  },
  setActiveRoute(route: ActiveRoute | null) {
    this.activeRoute = route;
  },
  advanceActiveRoute(nodeId: string) {
    const route = this.activeRoute;
    if (!route) return false;
    const nextIndex = Math.min(route.currentIndex + 1, route.nodes.length - 1);
    if (route.nodes[nextIndex] !== nodeId) return false;
    route.currentIndex = nextIndex;
    return true;
  },
  clearActiveRoute() {
    this.activeRoute = null;
  }
};
