import type { GameState } from "../core/state";

export function tickContracts(state: GameState): void {
  const today = state.time.day;
  for (const contract of state.contracts) {
    if (contract.status === "active" && contract.dueDay !== undefined && today > contract.dueDay) {
      contract.status = "failed";
      state.notifications.push(`Contract failed (expired): ${contract.name}`);
    }
  }
}
