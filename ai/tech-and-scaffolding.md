# Tech and Scaffolding

This document defines the technical architecture and folder structure for the project.

## Technology Stack

- HTML/CSS + TypeScript
- Vite (fast dev and bundling)
- JSON for all dynamic content
- LocalStorage for save system
- No backend, fully client-side

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
- UI screens are pure functions returning HTML strings.
- `gameState` is the single source of truth.
- Every state update triggers `renderer.render()`.
- `navigation.go(screen, params)` handles all transitions.
- Systems (economy, missions, combat) have no UI — pure logic.
- Modular and replaceable subsystems.

## Build and Run

```
npm create vite@latest galaxy-sim --template vanilla-ts
npm install
npm run dev
npm run build
```
