# Backlog — Space Opera Text Sim

This is the working task list for development. Tasks are grouped in phases, with suggested order.

## Phase 1 — Core Engine Skeleton

**[P1-01]** Implement `game/core/state.ts`
- Define `GameState` interface (time, location, player, ship, crew, inventory, reputation, contracts).
- Export a `newGameState()` function that returns a default starting state.

**[P1-02]** Implement `game/core/navigation.ts`
- Define `ScreenID` union type (main, travel, market, contracts, ship, crew, event, combat).
- Implement a simple `navigation` object with `current`, `params`, and `go()`.

**[P1-03]** Implement `game/core/renderer.ts`
- Implement `render()` that:
  - Looks at `navigation.current`.
  - Calls appropriate UI screen function from `/game/screens`.
  - Injects returned HTML into a root `<div id="app">`.

**[P1-04]** Implement `game/core/engine.ts`
- Load JSON content from `/game/content`.
- Provide a function `initGame()` that:
  - Loads content.
  - Initializes `gameState` (from `newGameState()`).
  - Calls initial `render()`.

**[P1-05]** Wire `main.ts`
- Import `initGame()` and start the game when the DOM is ready.

## Phase 2 — UI Scaffolding

**[P2-01]** Implement `ui_main.ts`
- Simple Main HUD showing:
  - current system name
  - description
  - credits, fuel, cargo
  - menu options (Travel, Market, Contracts, Ship, Crew, Explore Events)

**[P2-02]** Implement stub screens:
- `ui_travel.ts` — list neighbors, go back.
- `ui_market.ts` — placeholder text "Market WIP".
- `ui_ship.ts`, `ui_crew.ts`, `ui_event.ts`, `ui_combat.ts`, `ui_contracts.ts` — basic skeletons with headings and back links.

## Phase 3 — Travel and Map

**[P3-01]** Create minimal `content/systems.json`
- At least 3 systems with ids, names, descriptions, neighbors, security, faction, tags.

**[P3-02]** Implement `systems/travelSystem.ts`
- Function `getNeighbors(systemId)` based on `systems.json`.
- Function `travelTo(targetSystemId)` that:
  - Updates `gameState.location`.
  - Consumes fuel.
  - Calls `navigation.go("main")`.

**[P3-03]** Update `ui_travel.ts` to:
- Display neighbor systems.
- Allow selecting a destination.
- Call `travelTo`.

## Phase 4 — Economy and Market

**[P4-01]** Create `content/commodities.json`
- A small starter list of commodities (e.g., ore, food, steel).

**[P4-02]** Implement `systems/economySystem.ts`
- Function `computeLocalPrice(state, system, commodity)` based on economy formulas in our design (base price, supply/demand, security, volatility).

**[P4-03]** Update `ui_market.ts`
- Display basic buy/sell list using `computeLocalPrice`.
- Implement simple buy/sell handlers that adjust cargo and credits.

## Phase 5 — Events and Encounters

**[P5-01]** Create `content/events.json`
- Add a few simple events (pirate ambush, mining opportunity, navy inspection) using the event schema.

**[P5-02]** Implement `systems/eventSystem.ts`
- Function `pickEvent(state)` that:
  - Filters eligible events by context/system.
  - Returns one with weighted randomness.

**[P5-03]** Implement `ui_event.ts`
- Show event title, description, choices.
- Clicking a choice applies consequences to `gameState` and returns to appropriate screen.

## Phase 6 — Combat and Progression (Later)

**[P6-01]** Implement combat basics in `combatSystem.ts`.
**[P6-02]** Flesh out `ui_combat.ts`.
**[P6-03]** Implement reputation changes in `reputationSystem.ts`.
**[P6-04]** Add simple missions in `missions.json` and wire `missionSystem.ts`.

## How to Use This Backlog

- When asking the AI for help, reference tasks by ID (e.g., "Implement P1-01").
- AI should read `/ai/*.md` plus the relevant TS/JSON files before coding.
- Keep this file updated as tasks are completed or added.
