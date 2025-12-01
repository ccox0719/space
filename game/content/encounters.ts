import { content } from "../core/engine";
import type {
  EncounterDifficultyBand,
  EncounterTemplate
} from "../core/contentTypes";

export function getEncounterById(id: string): EncounterTemplate | undefined {
  if (!content?.encounters) return undefined;
  return content.encounters.find((encounter) => encounter.id === id);
}

export function getRandomEncounterForContext(ctx: {
  desiredDifficulty: EncounterDifficultyBand;
  playerPowerEstimate: number;
  tags?: string[];
}): EncounterTemplate | undefined {
  if (!content?.encounters?.length) return undefined;
  const base = content.encounters.filter((encounter) => {
    if (encounter.difficulty !== ctx.desiredDifficulty) return false;
    if (encounter.minPlayerPower && ctx.playerPowerEstimate < encounter.minPlayerPower) return false;
    if (encounter.maxPlayerPower && ctx.playerPowerEstimate > encounter.maxPlayerPower) return false;
    return true;
  });
  if (!base.length) return undefined;
  const tagged = ctx.tags && ctx.tags.length
    ? base.filter((encounter) => encounter.tags?.some((tag) => ctx.tags?.includes(tag)))
    : [];
  const pool = tagged.length ? tagged : base;
  return pool[Math.floor(Math.random() * pool.length)];
}
