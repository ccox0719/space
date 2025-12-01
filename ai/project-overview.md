# Project Overview — Space Opera Text Sim

## High-Level Goal

Build a minimalist, text-driven space opera RPG with a systemic sandbox focus. The player may freely choose their playstyle:

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
- FTL (events and combat)
- Sunless Sea (text and choices)
- Space Trader (economy loop)

## Core Experience

The game is:

- Text-only UI
- Single player
- Offline
- JSON-driven
- Modular
- Deterministic and systemic
- No backend server

Everything is built using:

- TypeScript
- HTML / CSS
- Vite (or Parcel) for dev/build
- JSON for world data, events, missions, and content

The player interacts through a set of clean UI screens (all text-based) and the world responds through events, systems, and consequences.

## Design Principles

1. Player agency first — every role emerges naturally from systems.
2. Minimalist UI, deep gameplay.
3. JSON-driven content to allow easy expansion.
4. Small, independent systems (combat, economy, missions).
5. Every screen is stateless UI rendering from gameState.
6. Everything returns to Main HUD.
