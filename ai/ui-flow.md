# UI Flow

The game is composed of minimalist text-based screens. Every screen is a pure TypeScript function that returns HTML.

## Main Screens

1. Main HUD
2. Travel Map
3. Station Docking
4. Cargo Market
5. Ship Management
6. Crew Management
7. Event Resolution
8. Combat
9. Contracts Board

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
- Event title and text
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
