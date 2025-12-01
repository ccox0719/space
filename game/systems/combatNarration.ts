import type { CombatPhase, EnemyIntent, EnemyIntentType } from "../core/contentTypes";

export interface CombatEventContext {
  attackerName: string;
  defenderName: string;
  damage: number;
  weaponType?: string;
  wasCritical?: boolean;
  wasDodged?: boolean;
  intentType?: EnemyIntentType;
  phase: CombatPhase;
  defenderLowHp?: boolean;
}

const phaseFlavor: Record<CombatPhase, string> = {
  positioning: "Captured in slow openings and feints.",
  escalation: "Weapons flare as the fight turns savage.",
  finisher: "This may be the last salvo before the hull tears open."
};

export function formatAttackLog(ctx: CombatEventContext): string {
  if (ctx.wasDodged) {
    return `${ctx.attackerName} lashes out but ${ctx.defenderName} slips away (${ctx.phase} phase).`;
  }
  const weaponPart = ctx.weaponType ? ` with ${ctx.weaponType}` : "";
  const critPart = ctx.wasCritical ? " critical" : "";
  const damagePart = ctx.damage > 0 ? ` for ${ctx.damage} damage` : " but fails to pierce the defenses";
  const urgency = phaseFlavor[ctx.phase];
  const lowHpPart = ctx.defenderLowHp ? ` ${ctx.defenderName} is hanging on by threads.` : "";
  return `${ctx.attackerName}${weaponPart}${critPart} hits ${ctx.defenderName}${damagePart}. ${urgency}${lowHpPart}`;
}

export function formatPhaseChange(phase: CombatPhase): string {
  switch (phase) {
    case "positioning":
      return "The skirmish is tentative—ships probe each other's defenses.";
    case "escalation":
      return "Weapons systems roar to life; the battle surges toward its heart.";
    case "finisher":
      return "Hull sieves and alarms scream—this fight is grinding toward its end.";
  }
}

export function formatIntentReveal(intent: EnemyIntent, enemyName: string): string {
  const targetPhrase = intent.targetId ? `targeting ${intent.targetId}` : "";
  return `${enemyName} telegraphs a ${intent.type.replace("_", " ")} ${targetPhrase}. ${intent.description}`;
}

export function formatCounterplayLog(actionId: string, intent: EnemyIntent | undefined, enemyName: string): string {
  if (!intent) {
    return `You attempt ${actionId}, but no obvious grab is available.`;
  }
  switch (actionId) {
    case "focus_fire":
      return `You unleash focus fire as ${enemyName} winds up a ${intent.type}. The attack staggers before landing.`;
    case "emp_blast":
      return `You slam an EMP into ${enemyName}—its ${intent.type} fizzles as systems short.`;
    case "jam_enemy":
      return `${enemyName}'s ${intent.type} stalls under your jamming field.`;
    default:
      return `You contest ${enemyName}'s intent; ${intent.type} was disrupted.`;
  }
}

export function formatInstabilityLog(targetName: string, stage: "minor" | "major" | "critical", effect: string): string {
  return `${targetName} shudders (${stage} instability): ${effect}`;
}
