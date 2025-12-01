import miningBalance from "../game/content/mining_balance.json";

type MiningBalanceConfig = typeof miningBalance;

const balance = miningBalance as MiningBalanceConfig;

const BASE_YIELD_PER_SIGNAL = 0.2;

function randBetween(min: number, max: number) {
  const lo = Math.ceil(min);
  const hi = Math.floor(max);
  if (hi <= lo) return lo;
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

function getDepthValueMultiplier(depth: number): number {
  const entry = balance.depthValueMultipliers.find(
    (entry) => depth >= entry.depthRange[0] && depth <= entry.depthRange[1]
  );
  return entry?.multiplier ?? 1;
}

function getYieldReductionFactor(): number {
  const min = balance.yieldReduction.min;
  const max = balance.yieldReduction.max;
  return Math.max(min, Math.min(max, Math.random() * (max - min) + min));
}

function getEmptyChance(depth: number): number {
  const entry = balance.emptyChance.find(
    (entry) => depth >= entry.depthRange[0] && depth <= entry.depthRange[1]
  );
  return entry?.chance ?? 0;
}

function getSignal(depth: number): number {
  return randBetween(1, 10);
}

function depthBonus(depth: number): number {
  return 1 + Math.max(0, depth - 2) * 0.12;
}

function simulateDepth(depth: number) {
  const signal = getSignal(depth);
  const rawYield = Math.max(1, Math.round((signal + depthBonus(depth)) * BASE_YIELD_PER_SIGNAL));
  const efficiency = Math.random() * 0.4 + 0.6;
  let yieldVal = Math.max(0, Math.round(rawYield * efficiency));
  const reduction = getYieldReductionFactor();
  yieldVal = Math.ceil(yieldVal * reduction);
  const emptyChance = getEmptyChance(depth);
  const dryHit = Math.random() < emptyChance;
  if (dryHit) {
    yieldVal = 0;
  }
  const depthMultiplier = getDepthValueMultiplier(depth);
  const value = yieldVal * depthMultiplier;
  const fragmentCount = depth >= (balance.fragmentation?.splitDepth ?? 0)
    ? randBetween(balance.fragmentation.minFragments, balance.fragmentation.maxFragments)
    : 1;
  const fragmentTotal = fragmentCount > 1
    ? Array.from({ length: fragmentCount }, () =>
        yieldVal * (balance.fragmentation.fragmentValueRange[0] +
          Math.random() * (balance.fragmentation.fragmentValueRange[1] - balance.fragmentation.fragmentValueRange[0]))
      ).reduce((sum, value) => sum + value, 0)
    : yieldVal;
  return {
    depth,
    yield: yieldVal,
    value,
    empty: dryHit,
    fragments: fragmentCount,
    fragmentTotal
  };
}

function summarize(runs: ReturnType<typeof simulateDepth>[]) {
  const yieldTotal = runs.reduce((sum, run) => sum + run.yield, 0);
  const valueTotal = runs.reduce((sum, run) => sum + run.value, 0);
  const empties = runs.filter((run) => run.empty).length;
  const fragments = runs.filter((run) => run.fragments > 1).length;
  return {
    averageYield: yieldTotal / runs.length,
    averageValue: valueTotal / runs.length,
    emptyRate: (empties / runs.length) * 100,
    fragmentRate: (fragments / runs.length) * 100
  };
}

function simulate() {
  const results: Record<number, ReturnType<typeof summarize>> = {};
  for (let depth = 1; depth <= 12; depth++) {
    const samples = Array.from({ length: 1000 }, () => simulateDepth(depth));
    results[depth] = summarize(samples);
  }
  console.table(
    Object.entries(results).map(([depth, data]) => ({
      Depth: depth,
      "Avg Yield": data.averageYield.toFixed(2),
      "Avg Value": data.averageValue.toFixed(2),
      "Empty %": data.emptyRate.toFixed(1),
      "Fragments %": data.fragmentRate.toFixed(1)
    }))
  );
}

simulate();
