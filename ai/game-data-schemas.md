# Game Data Schemas

These are the canonical JSON schemas used by the game.

## System Schema

```
{
  "id": "helion_prime",
  "name": "Helion Prime",
  "description": "...",
  "security": "high",
  "faction": "helion",
  "tags": ["core", "trade"],
  "neighbors": ["argent_gate", "dawn_reach"],
  "marketModifiers": { "food": 1.1 },
  "eventWeights": {
    "pirate_ambush": 0.05,
    "navy_inspection": 0.10
  }
}
```

## Commodity Schema

```
{
  "id": "aurite_ore",
  "name": "Aurite Ore",
  "basePrice": 40,
  "volatility": 0.15,
  "tags": ["ore", "mining"]
}
```

## Event Schema

```
{
  "id": "pirate_ambush",
  "title": "Pirate Ambush",
  "weight": 0.2,
  "tags": ["danger", "combat"],
  "description": "A pirate cutter drops out of warp...",
  "choices": [
    {
      "text": "Fight",
      "consequence": { "combat": { "enemyId": "pirate_cutter" } }
    },
    {
      "text": "Dump Cargo",
      "consequence": { "cargoLoss": 0.3 }
    }
  ]
}
```

## Ship Schema

```
{
  "id": "light_freighter",
  "name": "Light Freighter",
  "hull": 100,
  "shields": 40,
  "fuel": 30,
  "cargo": 80,
  "modules": ["basic_refinery"],
  "weapons": ["laser_mk1"]
}
```

## Ship Template Schema

```
{
  "id": "wayfarer_freighter",
  "name": "Wayfarer-Class Freighter",
  "description": "A reliable civilian freighter optimized for short-haul trade with modest defenses.",
  "roleHint": "trader",
  "hull": 100,
  "shields": 30,
  "fuel": 30,
  "cargo": 80,
  "tags": ["starter", "freighter", "civilian"]
}
```

## Crew Schema

```
{
  "id": "aela_ren",
  "name": "Aela Ren",
  "role": "pilot",
  "tier": 2,
  "morale": 0.85
}
```

## Mission Schema

```
{
  "id": "deliver_medical",
  "type": "delivery",
  "faction": "helion_republic",
  "description": "Deliver medical supplies...",
  "requirements": { "cargo": 20 },
  "rewards": { "credits": 1200, "rep": { "helion_republic": 5 } }
}
```
