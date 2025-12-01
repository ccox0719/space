# Development Rules for GPT

These directives define how the AI must behave during coding.

## General Behavior

When generating code:

- Use TypeScript modules.
- Follow the folder structure in `/ai/tech-and-scaffolding.md`.
- Respect JSON schemas in `/ai/game-data-schemas.md`.
- Do not invent new attributes or formats.
- Keep logic modular (pure functions where possible).
- UI must remain text-only and minimal.

## Task Interpretation

When asked to:

### Build a screen
- Output a full TypeScript file exporting a function that returns HTML.

Example pattern:
```ts
export function MainScreen() {
  return `
    <div> ... </div>
  `;
}
```

### Build a system
- Output a complete logic module with named exports.

Example:
```ts
export function computePrices(...) { ... }
```

### Add content
- Output valid JSON matching schemas.

### Implement gameplay
- Provide pure TypeScript logic updating gameState.

### Simulate
- Execute turn-by-turn or choice-by-choice using the game rules.

## Navigation Rules

Use:

```
navigation.go("screenName", { ...params });
```

Screens are strictly:
- main
- travel
- market
- contracts
- ship
- crew
- event
- combat

## Rendering Rules

After any state change:

```
renderer.render();
```

## Constraints
- Do not use external UI frameworks.
- Avoid unnecessary abstraction.
- Keep modules small and focused.
- Follow deterministic logic for outcomes unless marked random.
