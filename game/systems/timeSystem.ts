import type { GameState } from "../core/state";
import { recordDaySurvived } from "../core/state";
import { tickMarket } from "./economySystem";
import { tickWorldEvents } from "./eventSystem";
import { tickMissions } from "./missionSystem";
import { tickContracts } from "./contractSystem";
import { tickIntel } from "./intelSystem";
import { tickResources } from "./miningSystem";
import { refreshDifficultyDay, tickDifficulty } from "./difficultySystem";

export function advanceDay(state: GameState): void {
  state.time.day += 1;
  refreshDifficultyDay(state);
  tickDifficulty(state);
  recordDaySurvived(state.time.day);

  tickMarket(state);
  tickWorldEvents(state);
  tickMissions(state);
  tickContracts(state);
  tickIntel(state);
  tickResources(state);

  state.notifications.push(`Day ${state.time.day}: Market conditions shift across the sector.`);
  state.notifications.push(`Day ${state.time.day}: Some contracts edge closer to expiry.`);
}
