import { addCreditsEarned, devTune, ensurePlayerInventory, gameState, getCombatTune } from "../core/state";
import type { LootTable, LootEntry, BattleResult } from "../core/contentTypes";
import { acceptMission } from "./missionSystem";

let lootTables: LootTable[] = [];

export function setLootTables(data: LootTable[]): void {
  lootTables = data;
}

export function getLootTables(): LootTable[] {
  return lootTables;
}

function pickTableForEnemy(enemyId: string, enemyTags: string[] = []): LootTable | null {
  const byId = lootTables.find((t) => t.id === `${enemyId}_loot`);
  if (byId) return byId;

  const tagSet = new Set(enemyTags);
  const byTag = lootTables.find((t) =>
    (t.enemyTags || []).some((tag) => tagSet.has(tag))
  );
  return byTag ?? null;
}

function randomInRange(min: number, max: number): number {
  const floor = Math.ceil(min);
  const ceil = Math.floor(Math.max(floor, max));
  if (ceil <= floor) return floor;
  return Math.floor(Math.random() * (ceil - floor + 1)) + floor;
}

function weightedPick(entries: LootEntry[]): LootEntry | null {
  if (!entries.length) return null;
  const total = entries.reduce((sum, e) => sum + (e.weight || 0), 0);
  if (total <= 0) return null;
  let roll = Math.random() * total;
  for (const entry of entries) {
    roll -= entry.weight || 0;
    if (roll <= 0) return entry;
  }
  return entries[entries.length - 1];
}

function applyLootEntry(entry: LootEntry, result: BattleResult): void {
  const tune = getCombatTune();
  const incomeScale =
    Math.max(0, tune.creditsRewardMultiplier ?? 1) *
    Math.max(0, tune.globalIncomeMultiplier ?? 1);
  switch (entry.type) {
    case "credits": {
      const min = entry.min ?? 0;
      const max = entry.max ?? min;
      const amount = randomInRange(min, max);
      const scaled = Math.max(0, Math.round(amount * incomeScale));
      gameState.player.credits += scaled;
      result.creditsEarned += scaled;
      addCreditsEarned(scaled);
      break;
    }
    case "commodity": {
      const qty = randomInRange(entry.min ?? 1, entry.max ?? (entry.min ?? 1));
      const scaled = Math.max(0, Math.round(qty * incomeScale));
      const added = addCargoWithCapacity(entry.id || "unknown", scaled);
      if (added > 0) {
        result.commodities.push({ id: entry.id || "unknown", qty: added });
      }
      break;
    }
    case "weapon": {
      if (entry.id) {
        const inventory = ensurePlayerInventory();
        inventory.weapons.push(entry.id);
        result.weapons.push(entry.id);
      }
      break;
    }
    case "component": {
      if (entry.id) {
        gameState.ship.components.push(entry.id);
        result.components.push(entry.id);
      }
      break;
    }
    case "mission": {
      if (entry.id) {
        const resp = acceptMission(entry.id);
        if (resp.success) {
          result.missionsGranted.push(entry.id);
        }
      }
      break;
    }
  }
}

function addCargoWithCapacity(commodityId: string, qty: number): number {
  const current = gameState.ship.cargo[commodityId] ?? 0;
  const used = Object.values(gameState.ship.cargo).reduce((sum, v) => sum + v, 0);
  const free = Math.max(0, gameState.ship.cargoCapacity - used);
  const toAdd = Math.max(0, Math.min(qty, free));
  gameState.ship.cargo[commodityId] = current + toAdd;
  return toAdd;
}

export function rollLoot(
  enemyId: string,
  enemyName: string,
  context: { quickKill?: boolean; lowDamageTaken?: boolean } = {},
  enemyTags: string[] = []
): BattleResult | null {
  const tune = getCombatTune();
  const incomeScale =
    Math.max(0, tune.creditsRewardMultiplier ?? 1) *
    Math.max(0, tune.globalIncomeMultiplier ?? 1);
  const dropChance = Math.max(0, Math.min(1, (tune.lootDropChance ?? 100) / 100));
  const isPirate = enemyTags.includes("pirate");
  const pirateRewardMultiplier = isPirate ? 3 : 1;
  const adjustedIncomeScale = incomeScale * pirateRewardMultiplier;
  const adjustedDropChance = Math.max(0, Math.min(1, dropChance * pirateRewardMultiplier));
  if (Math.random() > adjustedDropChance) return null;
  const table = pickTableForEnemy(enemyId, enemyTags);
  if (!table) return null;

  const rareMult = context.quickKill ? 1.5 : 1;
  const uncommonMult = context.lowDamageTaken ? 1.25 : 1;

  const result: BattleResult = {
    enemyId,
    enemyName,
    creditsEarned: 0,
    commodities: [],
    weapons: [],
    components: [],
    missionsGranted: []
  };

  const rollTier = (entries: LootEntry[] | undefined, chance: number) => {
    if (!entries?.length) return;
    if (Math.random() > chance) return;
    const picked = weightedPick(entries);
    if (picked) applyLootEntry(picked, result);
  };

  // Always roll common once
  rollTier(table.common, adjustedDropChance);
  // 35% for uncommon, 12% for rare by default (scaled for bonuses)
  rollTier(scaleEntries(table.uncommon, uncommonMult), 0.35 * adjustedDropChance);
  const rareChance = Math.max(0, Math.min(1, (tune.rareLootChance ?? 12) / 100));
  rollTier(scaleEntries(table.rare, rareMult), rareChance * adjustedDropChance);

  if (table.guaranteed?.credits) {
    const { min, max } = table.guaranteed.credits;
    const amount = randomInRange(min, max);
    const tunedAmount = Math.max(0, Math.round(amount * adjustedIncomeScale));
    gameState.player.credits += tunedAmount;
    result.creditsEarned += tunedAmount;
    addCreditsEarned(tunedAmount);
  }

  return result;
}

function scaleEntries(entries: LootEntry[] | undefined, multiplier: number): LootEntry[] | undefined {
  if (!entries) return entries;
  if (multiplier === 1) return entries;
  return entries.map((e) => ({ ...e, weight: (e.weight || 0) * multiplier }));
}
