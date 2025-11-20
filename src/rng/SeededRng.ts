// src/rng/SeededRng.ts
// Deterministic xorshift32 RNG wrapper used across systems.

export interface Rng {
  seed: number;
  /**
   * Returns float in [0, 1).
   */
  next(): number;
  /**
   * Returns integer in [min, max] inclusive.
   */
  int(min: number, max: number): number;
}

export function createRng(seed: number): Rng {
  let state = seed || Date.now();

  const next = () => {
    // xorshift32
    state ^= state << 13;
    state ^= state >>> 17;
    state ^= state << 5;
    return (state >>> 0) / 0xffffffff;
  };

  const int = (min: number, max: number) => {
    const n = next();
    return Math.floor(n * (max - min + 1)) + min;
  };

  return { seed, next, int };
}
