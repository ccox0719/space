import { setEvents, pickEvent } from "../game/systems/eventSystem.ts";
import { newGameState, setGameState } from "../game/core/state.ts";
import events from "../game/content/events.json";

setGameState(newGameState());
setEvents(events);

const context = {
  context: "travel",
  to: {
    id: "dawn_reach",
    name: "Dawn Reach",
    description: "",
    security: "low",
    faction: "frontier_clans",
    tags: ["frontier", "mining_belt"],
    neighbors: []
  },
  hazardChance: 1,
  routeType: "wild_jump",
  travelTime: 1
};

const counts: Record<string, number> = {};
for (let i = 0; i < 1000; i++) {
  const event = pickEvent(context);
  if (!event) continue;
  counts[event.id] = (counts[event.id] ?? 0) + 1;
}
console.log(counts);
