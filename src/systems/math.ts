// src/systems/math.ts
export function clamp(min: number, max: number, v: number): number {
  return Math.max(min, Math.min(max, v));
}
