Here are your 5 complete Markdown files, fully formatted and ready to paste directly into your /ai/ folder in your VSCode project.

Each file is clean, scoped, and optimized for GPT-based development.

⸻

✅ FILE 1 — /ai/project-overview.md

# Project Overview — Space Opera Text Sim

## High-Level Goal

Build a minimalist, text-driven space opera RPG with a systemic sandbox focus.  
The player may freely choose their playstyle:

- Trader
- Miner
- Pirate
- Smuggler
- Navy
- Explorer
- Bounty Hunter
- Salvager

The game should feel like a lightweight mix of:
- Elite: Dangerous (systems, factions, trading)
- FTL (events & combat)
- Sunless Sea (text & choices)
- Space Trader (economy loop)

## Core Experience

The game is:

- **Text-only UI**  
- **Single player**  
- **Offline**  
- **JSON-driven**  
- **Modular**  
- **Deterministic and systemic**  
- **No backend server**  

Everything is built using:

- **TypeScript**
- **HTML / CSS**
- **Vite** (or Parcel) for dev/build
- **JSON** for world data, events, missions, and content

The player interacts through a set of **clean UI screens** (all text-based) and the world responds through **events, systems, and consequences**.

## Design Principles

1. **Player agency first** — every role emerges naturally from systems.
2. **Minimalist UI, deep gameplay**.
3. **JSON-driven content** to allow easy expansion.
4. **Small, independent systems** (combat, economy, missions).
5. **Every screen is stateless UI rendering from gameState.**
6. **Everything returns to Main HUD.**


⸻

✅ FILE 2 — /ai/tech-and-scaffolding.md

# Tech & Scaffolding

This document defines the entire technical architecture and folder structure for the project.

## Technology Stack

- **HTML/CSS + TypeScript**
- **Vite** (fast dev & bundling)
- **JSON** for all dynamic content
- **LocalStorage** for save system
- No backend, fully client-side.

## Directory Structure

game/
├── index.html
├── style.css
├── main.ts
│
├── core/
│   ├── engine.ts
│   ├── state.ts
│   ├── navigation.ts
│   └── renderer.ts
│
├── systems/
│   ├── eventSystem.ts
│   ├── travelSystem.ts
│   ├── economySystem.ts
│   ├── combatSystem.ts
│   ├── missionSystem.ts
│   └── reputationSystem.ts
│
├── screens/
│   ├── ui_main.ts
│   ├── ui_travel.ts
│   ├── ui_market.ts
│   ├── ui_ship.ts
│   ├── ui_crew.ts
│   ├── ui_event.ts
│   ├── ui_combat.ts
│   └── ui_contracts.ts
│
└── content/
├── systems.json
├── events.json
├── commodities.json
├── ships.json
├── modules.json
├── missions.json
└── enemies.json

## Architecture Rules

- All content lives in `/content` as JSON.
- UI screens are **pure functions** returning HTML strings.
- **gameState** is the single source of truth.
- Every state update triggers **renderer.render()**.
- **navigation.go(screen, params)** handles all transitions.
- Systems (economy, missions, combat) have no UI—pure logic.
- Modular and replaceable subsystems.

## Build & Run

npm create vite@latest galaxy-sim –template vanilla-ts
npm install
npm run dev
npm run build




⸻

✅ FILE 3 — /ai/ui-flow.md

# UI Flow

The game is composed of several minimalist text-based screens.  
Every screen is a pure TypeScript function that returns HTML.

## Main Screens

1. **Main HUD**
2. **Travel Map**
3. **Station Docking**
4. **Cargo Market**
5. **Ship Management**
6. **Crew Management**
7. **Event Resolution**
8. **Combat**
9. **Contracts Board**

## Navigation Diagram

MAIN HUD
├── Travel Map
│     └── Travel → Travel Event → MAIN HUD
├── Market
├── Contracts
├── Ship
├── Crew
├── Local Event
└── Leave Station
└── (possible danger event)

## Screen Definitions

### 1. Main HUD
Displays:
- current system
- summary info
- player resources
- actions menu

Actions:
- Travel
- Market
- Contracts
- Ship
- Crew
- Explore Events

---

### 2. Travel Map
Displays:
- Nearby systems (neighbors[])
- Jump cost
- Travel warnings

Actions:
- Select system
- Return to HUD

Triggers travel event after movement.

---

### 3. Station Docking
Displays:
- Station description
- Services list
- Possible inspections

Actions:
- Market
- Repair
- Refuel
- Hire Crew
- Leave Dock

---

### 4. Cargo Market
Displays:
- Buy/Sell commodities
- Dynamic pricing

Uses economy system for pricing.

---

### 5. Ship Management
Displays:
- Hull, shields, fuel
- Modules
- Weapons

Actions:
- Repair
- Install/Remove module
- View stats

---

### 6. Crew Management
Displays:
- Crew list
- Roles
- Morale

Actions:
- Assign roles
- Hire (if docked)
- Fire

---

### 7. Event Resolution
Displays:
- Event title + text
- Choices

Applies consequences and returns to HUD or triggers combat.

---

### 8. Combat Screen
Turn-based:
- attack
- brace
- target engines
- flee
- item

---

### 9. Contracts Board
Displays:
- Faction missions
- Role missions
- Rewards


⸻

✅ FILE 4 — /ai/game-data-schemas.md

# Game Data Schemas

These are the canonical JSON schemas used by the game.

---

## System Schema

{
“id”: “helion_prime”,
“name”: “Helion Prime”,
“description”: “…”,
“security”: “high”,
“faction”: “helion”,
“tags”: [“core”, “trade”],
“neighbors”: [“argent_gate”, “dawn_reach”],
“marketModifiers”: { “food”: 1.1 },
“eventWeights”: {
“pirate_ambush”: 0.05,
“navy_inspection”: 0.10
}
}

---

## Commodity Schema

{
“id”: “aurite_ore”,
“name”: “Aurite Ore”,
“basePrice”: 40,
“volatility”: 0.15,
“tags”: [“ore”, “mining”]
}

---

## Event Schema

{
“id”: “pirate_ambush”,
“title”: “Pirate Ambush”,
“weight”: 0.2,
“tags”: [“danger”, “combat”],
“description”: “A pirate cutter drops out of warp…”,
“choices”: [
{
“text”: “Fight”,
“consequence”: { “combat”: { “enemyId”: “pirate_cutter” } }
},
{
“text”: “Dump Cargo”,
“consequence”: { “cargoLoss”: 0.3 }
}
]
}

---

## Ship Schema

{
“id”: “light_freighter”,
“name”: “Light Freighter”,
“hull”: 100,
“shields”: 40,
“fuel”: 30,
“cargo”: 80,
“modules”: [“basic_refinery”],
“weapons”: [“laser_mk1”]
}

---

## Crew Schema

{
“id”: “aela_ren”,
“name”: “Aela Ren”,
“role”: “pilot”,
“tier”: 2,
“morale”: 0.85
}

---

## Mission Schema

{
“id”: “deliver_medical”,
“type”: “delivery”,
“faction”: “helion_republic”,
“description”: “Deliver medical supplies…”,
“requirements”: { “cargo”: 20 },
“rewards”: { “credits”: 1200, “rep”: { “helion_republic”: 5 } }
}




⸻

✅ FILE 5 — /ai/development-rules.md

# Development Rules for GPT

These directives define how the AI must behave during coding.

---

## General Behavior

When generating code:

- Use **TypeScript modules**
- Follow the folder structure in `/ai/tech-and-scaffolding.md`
- Respect JSON schemas in `/ai/game-data-schemas.md`
- Do not invent new attributes or formats
- Keep logic modular (pure functions where possible)
- UI must remain **text-only** and minimal

---

## Task Interpretation

When I ask to:

### “Build a screen”
→ Output a **full TypeScript file** exporting a function returning HTML.

Example pattern:
```ts
export function MainScreen() {
  return `
    <div> ... </div>
  `;
}

“Build a system”

→ Output a complete logic module with named exports.

Example:

export function computePrices(...) { ... }

“Add content”

→ Output valid JSON matching schemas.

“Implement gameplay”

→ Provide pure TypeScript logic updating gameState.

“Simulate”

→ Execute turn-by-turn or choice-by-choice using the game’s rules.

⸻

Navigation Rules

Use:

navigation.go("screenName", { ...params });

Screens are strictly:
	•	main
	•	travel
	•	market
	•	contracts
	•	ship
	•	crew
	•	event
	•	combat

⸻

Rendering Rules

After any state change:

renderer.render();


⸻

Constraints
	•	Do not use external UI frameworks.
	•	Avoid unnecessary abstraction.
	•	Keep modules small and focused.
	•	Follow deterministic logic for outcomes unless marked random.

⸻


---

# 🎉 Ready to Deploy

Your `/ai/` folder now looks like:

/ai/
project-overview.md
tech-and-scaffolding.md
ui-flow.md
game-data-schemas.md
development-rules.md

VSCode GPT assistants will now:

- Load these files in context  
- Follow your architecture  
- Generate aligned code  
- Keep the structure consistent  
- Behave like a proper dev teammate  

---

# ⭐ Next Step

I can also generate:

### ✅ Starter repo with ALL stubbed `.ts` files  
### ✅ Example JSON packs  
### ✅ A playable prototype scaffold  
### ✅ Dev instructions for GitHub Copilot Chat  
### ✅ “Work task backlog” file for agile development

⸻

1️⃣ Final Project Layout

Use this as your target structure:

space-opera-sim/
├── ai/
│   ├── project-overview.md
│   ├── tech-and-scaffolding.md
│   ├── ui-flow.md
│   ├── game-data-schemas.md
│   ├── development-rules.md
│   ├── master-prompt.md        <-- NEW
│   └── backlog.md              <-- NEW
│
└── game/
    ├── index.html
    ├── style.css
    ├── main.ts
    │
    ├── core/
    │   ├── engine.ts
    │   ├── state.ts
    │   ├── navigation.ts
    │   └── renderer.ts
    │
    ├── systems/
    │   ├── eventSystem.ts
    │   ├── travelSystem.ts
    │   ├── economySystem.ts
    │   ├── combatSystem.ts
    │   ├── missionSystem.ts
    │   └── reputationSystem.ts
    │
    ├── screens/
    │   ├── ui_main.ts
    │   ├── ui_travel.ts
    │   ├── ui_market.ts
    │   ├── ui_ship.ts
    │   ├── ui_crew.ts
    │   ├── ui_event.ts
    │   ├── ui_combat.ts
    │   └── ui_contracts.ts
    │
    └── content/
        ├── systems.json
        ├── events.json
        ├── commodities.json
        ├── ships.json
        ├── modules.json
        ├── missions.json
        └── enemies.json


⸻

2️⃣ ai/master-prompt.md (The “Package All” Overview)

This is the one file you point your VS Code GPT / Copilot Chat at and say “read this first”.

# MASTER PROMPT — Space Opera Text Sim

You are the assistant developer for a text-based space opera RPG.

Your job:  
Help implement and expand this project by following ALL documentation in the `/ai` folder and the existing code in `/game`.

---

## Project Summary

- Minimalist, **text-only**, single-player space sim.
- Focus: trading, mining, piracy, smuggling, navy, exploration, salvage, anomalies, combat, missions, and reputation.
- Built with **TypeScript + HTML/CSS**, no backend.
- All content is JSON in `/game/content`.
- UI is screen-based and uses pure functions that return HTML strings.
- `gameState` is the single source of truth for runtime state.

---

## Key Specs (Read These Files)

When working on code or content, you MUST respect these documents:

1. `ai/project-overview.md`  
   → High-level game vision and goals.

2. `ai/tech-and-scaffolding.md`  
   → Folder structure, engine layout, and architecture rules.

3. `ai/ui-flow.md`  
   → All UI screens, navigation, and how players move through the game.

4. `ai/game-data-schemas.md`  
   → JSON schemas for systems, events, ships, commodities, missions, etc.

5. `ai/development-rules.md`  
   → How you should behave when generating code, content, and simulations.

6. `ai/backlog.md`  
   → Current TODO list / dev tasks with priorities.

---

## Coding Rules

- Always follow the folder + file structure from `tech-and-scaffolding.md`.
- Always use the JSON schemas from `game-data-schemas.md`.
- Do NOT invent new attributes or formats unless explicitly asked.
- UI is **text-only** and returns HTML strings from functions in `/game/screens`.
- Logic lives in `/game/core` and `/game/systems` as pure TypeScript modules.
- Every state change must re-render via the renderer.

Use:

```ts
navigation.go("screenName", params);
renderer.render();


⸻

Task Interpretation

When I ask you to:
	•	“Build a screen” → Implement or update a file in /game/screens, following ui-flow.md.
	•	“Build a system” → Implement or update a file in /game/systems.
	•	“Add content” → Edit/create JSON in /game/content, using the schemas.
	•	“Wire it up” → Make sure navigation + rendering work together.
	•	“Simulate” → Step through the gameplay using our current rules.

Always assume:
	•	I want concrete code, not pseudocode.
	•	I want it to drop directly into this project structure.
	•	I want you to use and update gameState consistently.

⸻

Starting Point

Before generating new code, you should:
	1.	Infer or inspect the current structure in /game.
	2.	Cross-check with /ai/*.md so you stay aligned.
	3.	Use ai/backlog.md to understand what’s next to build.

You are my long-term coding partner on this project.

---

## 3️⃣ `ai/backlog.md` (Dev Plan / Task List)

This is your **dev roadmap** that you and GPT can work through file by file.

```md
# Backlog — Space Opera Text Sim

This is the working task list for development.  
Tasks are grouped in phases, with suggested order.

---

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

---

## Phase 2 — UI Scaffolding

**[P2-01]** Implement `ui_main.ts`  
- Simple Main HUD showing:
  - current system name
  - description
  - credits, fuel, cargo
  - menu options (Travel, Market, Contracts, Ship, Crew, Explore Events)

**[P2-02]** Implement stub screens:  
- `ui_travel.ts` — list neighbors, go back.  
- `ui_market.ts` — placeholder text “Market WIP”.  
- `ui_ship.ts`, `ui_crew.ts`, `ui_event.ts`, `ui_combat.ts`, `ui_contracts.ts` — basic skeletons with headings and back links.

---

## Phase 3 — Travel & Map

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

---

## Phase 4 — Economy & Market

**[P4-01]** Create `content/commodities.json`  
- A small starter list of commodities (e.g., ore, food, steel).

**[P4-02]** Implement `systems/economySystem.ts`  
- Function `computeLocalPrice(state, system, commodity)` based on economy formulas in our design (base price, supply/demand, security, volatility).

**[P4-03]** Update `ui_market.ts`  
- Display basic buy/sell list using `computeLocalPrice`.  
- Implement simple buy/sell handlers that adjust cargo and credits.

---

## Phase 5 — Events & Encounters

**[P5-01]** Create `content/events.json`  
- Add a few simple events (pirate ambush, mining opportunity, navy inspection) using the event schema.

**[P5-02]** Implement `systems/eventSystem.ts`  
- Function `pickEvent(state)` that:
  - Filters eligible events by context/system.
  - Returns one with weighted randomness.

**[P5-03]** Implement `ui_event.ts`  
- Show event title, description, choices.  
- Clicking a choice applies consequences to `gameState` and returns to appropriate screen.

---

## Phase 6 — Combat & Progression (Later)

**[P6-01]** Implement combat basics in `combatSystem.ts`.  
**[P6-02]** Flesh out `ui_combat.ts`.  
**[P6-03]** Implement reputation changes in `reputationSystem.ts`.  
**[P6-04]** Add simple missions in `missions.json` and wire `missionSystem.ts`.

---

## How to Use This Backlog

- When asking the AI for help, reference tasks by ID (e.g., “Implement P1-01”).  
- AI should read `/ai/*.md` plus the relevant TS/JSON files before coding.  
- Keep this file updated as tasks are completed or added.


⸻

4️⃣ Minimal Starter Code Scaffold

Here’s a tiny “hello galaxy” scaffold so the project actually boots and shows a Main screen. You can paste these into the game/ folder.

game/index.html

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Space Opera Text Sim</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div id="app">Loading...</div>
  <script type="module" src="/main.ts"></script>
</body>
</html>

game/style.css (super minimal, just so it’s not ugly)

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background: #050810;
  color: #f5f7ff;
}

#app {
  max-width: 800px;
  margin: 24px auto;
  padding: 16px;
  border-radius: 8px;
  background: #0d101a;
  border: 1px solid #23263a;
}

h1, h2, h3 {
  margin-top: 0;
}

ul.actions {
  list-style: none;
  padding-left: 0;
}

ul.actions li {
  cursor: pointer;
  padding: 6px 0;
}

ul.actions li:hover {
  text-decoration: underline;
}

game/main.ts

import { initGame } from "./core/engine";

document.addEventListener("DOMContentLoaded", () => {
  initGame();
});

game/core/state.ts (minimal stub)

export interface LocationState {
  systemId: string;
  docked: boolean;
}

export interface PlayerState {
  credits: number;
  roles: string[];
  wanted: number;
}

export interface GameState {
  version: number;
  time: { day: number; turn: number };
  location: LocationState;
  player: PlayerState;
}

export function newGameState(): GameState {
  return {
    version: 1,
    time: { day: 1, turn: 0 },
    location: { systemId: "helion_prime", docked: true },
    player: {
      credits: 1000,
      roles: ["trader"],
      wanted: 0
    }
  };
}

game/core/navigation.ts

export type ScreenID =
  | "main"
  | "travel"
  | "market"
  | "contracts"
  | "ship"
  | "crew"
  | "event"
  | "combat";

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

game/core/renderer.ts

import { navigation } from "./navigation";
import { MainScreen } from "../screens/ui_main";
// stubs for other screens
import { TravelScreen } from "../screens/ui_travel";
import { MarketScreen } from "../screens/ui_market";
import { ContractsScreen } from "../screens/ui_contracts";
import { ShipScreen } from "../screens/ui_ship";
import { CrewScreen } from "../screens/ui_crew";
import { EventScreen } from "../screens/ui_event";
import { CombatScreen } from "../screens/ui_combat";

export function render() {
  const app = document.getElementById("app");
  if (!app) return;

  let html = "";

  switch (navigation.current) {
    case "main":
      html = MainScreen();
      break;
    case "travel":
      html = TravelScreen();
      break;
    case "market":
      html = MarketScreen();
      break;
    case "contracts":
      html = ContractsScreen();
      break;
    case "ship":
      html = ShipScreen();
      break;
    case "crew":
      html = CrewScreen();
      break;
    case "event":
      html = EventScreen(navigation.params);
      break;
    case "combat":
      html = CombatScreen(navigation.params);
      break;
  }

  app.innerHTML = html;
}

game/core/engine.ts

import { newGameState, GameState } from "./state";
import { navigation } from "./navigation";
import { render } from "./renderer";

export let gameState: GameState;

export async function initGame() {
  // later: load content JSON here
  gameState = newGameState();

  // ensure navigation.go triggers render
  const originalGo = navigation.go.bind(navigation);
  navigation.go = (screen, params) => {
    originalGo(screen, params);
    render();
  };

  // initial render
  render();
}

Basic screen stubs

game/screens/ui_main.ts:

import { gameState } from "../core/engine";
import { navigation } from "../core/navigation";

declare global {
  interface Window {
    nav: (screen: string) => void;
  }
}

window.nav = (screen: string) => {
  navigation.go(screen as any);
};

export function MainScreen(): string {
  const s = gameState;

  return `
    <div class="screen main">
      <h1>System: ${s.location.systemId}</h1>
      <p>Day ${s.time.day}, Turn ${s.time.turn}</p>
      <p>Credits: ${s.player.credits} | Roles: ${s.player.roles.join(", ")}</p>

      <h2>Actions</h2>
      <ul class="actions">
        <li onclick="nav('travel')">Travel</li>
        <li onclick="nav('market')">Trade Market</li>
        <li onclick="nav('contracts')">Contracts</li>
        <li onclick="nav('ship')">Ship</li>
        <li onclick="nav('crew')">Crew</li>
        <li onclick="nav('event')">Explore Local Events</li>
      </ul>
    </div>
  `;
}

Then super-simple stubs for the rest:

ui_travel.ts:

import { navigation } from "../core/navigation";

declare global {
  interface Window {
    nav: (screen: string) => void;
  }
}

export function TravelScreen(): string {
  return `
    <div class="screen travel">
      <h1>Travel</h1>
      <p>Travel system WIP. (Next: list neighbors & allow jumps.)</p>
      <ul class="actions">
        <li onclick="nav('main')">Back to Main</li>
      </ul>
    </div>
  `;
}

ui_market.ts, ui_ship.ts, ui_crew.ts, ui_event.ts, ui_combat.ts, ui_contracts.ts can follow the same pattern (just different headings & text).

⸻

Once you drop in:
	•	The /ai docs
	•	The master prompt
	•	The backlog
	•	This minimal starter scaffold

…you’ll have a packaged setup where:
	•	GPT in VS Code can read /ai and know the plan
	•	The game actually boots and shows a Main HUD
	•	You can iterate task-by-task using backlog.md
