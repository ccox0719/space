import { GameState } from "../src/game/GameState";
import { Galaxy } from "../galaxyTypes";
import { ensureProgressionDefaults } from "../src/systems/PlayerState";
import { addXp } from "../src/systems/xpSystem";
import { getUnlockedPerks, getPerkMultiplier } from "../src/systems/perkSystem";

const baseGalaxy: Galaxy = {
  id: "test_galaxy",
  size: "medium",
  sectors: [],
  factions: []
};

const game: GameState = {
  seed: 12345,
  galaxy: baseGalaxy,
  currentSectorId: "test_system",
  player: {
    name: "tester",
    roleId: "trader",
    level: 1,
    xp: 0,
    xpToNext: 100,
    xpTracks: {},
    perkPoints: 0,
    perks: [],
    passives: [],
    passiveInventory: [],
    passiveEffects: {},
    perkEffects: {},
    credits: 0,
    fuel: 10,
    maxFuel: 20,
    ship: {
      hull: 100,
      maxHull: 100,
      shields: 50,
      maxShields: 50,
      fuel: 10,
      maxFuel: 20,
      evasion: 5,
      sensorStrength: 5,
      enginePower: 5,
      mass: 10,
      agility: 5,
      pilotSkill: 2,
      weaponDamage: 10,
      cargoCapacity: 50,
      passiveSlots: 2,
      weaponSlots: 2
    },
    modules: {
      engines: [],
      scanners: [],
      weapons: [],
      utilities: []
    },
    cargo: [],
    inventory: [],
    crew: [],
    reputation: {},
    risk: { pirateAttention: 0 },
    statuses: [],
    notifications: []
  },
  time: { cycle: 0 },
  activeMissions: [],
  completedMissions: [],
  failedMissions: [],
  log: []
};

ensureProgressionDefaults(game.player);

function snapshot(stage: string) {
  console.log(`\n--- ${stage} ---`);
  console.log(`Level: ${game.player.level}, XP: ${game.player.xp}, Perk Points: ${game.player.perkPoints}`);
  console.log(`Unlocked perks: ${getUnlockedPerks(game).join(", ") || "(none)"}`);
  console.log("Perk effects:", game.player.perkEffects);
  console.log("Perk multipliers:", {
    combat: getPerkMultiplier(game, "combat", "accuracyBase"),
    mining: getPerkMultiplier(game, "mining", "oreYieldMultiplier")
  });
  console.log("Notifications:", game.player.notifications);
}

snapshot("initial");

addXp(game, "mining", 400);
snapshot("post-mining XP");

addXp(game, "combat", 500);
snapshot("post-combat XP");

addXp(game, "travel", 300);
snapshot("post-travel XP");

if (!getUnlockedPerks(game).length) {
  console.warn("Warning: no perks unlocked during test run.");
} else {
  console.log("Perk test passed.");
}
