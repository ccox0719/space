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
  | "gameover";

interface NavigationState {
  current: ScreenID;
  params: Record<string, unknown>;
}

export const navigation: NavigationState & {
  go: (screen: ScreenID, params?: Record<string, unknown>) => void;
} = {
  current: "main",
  params: {},
  go(screen: ScreenID, params: Record<string, unknown> = {}) {
    this.current = screen;
    this.params = params;
    // renderer.render() will be wired in engine.ts
  }
};
