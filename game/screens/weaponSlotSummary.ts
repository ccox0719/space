import type { HardpointDef } from "../core/contentTypes";

type SlotKey = `${HardpointDef["size"]}:${HardpointDef["type"]}`;

export function formatHardpointSummary(hardpoints: HardpointDef[] | undefined): string {
  if (!hardpoints || !hardpoints.length) {
    return "No weapon slots installed.";
  }
  const counts = new Map<SlotKey, number>();
  hardpoints.forEach((hp) => {
    const key = `${hp.size}:${hp.type}` as SlotKey;
    counts.set(key, (counts.get(key) ?? 0) + 1);
  });
  const parts: string[] = [];
  for (const [key, value] of counts.entries()) {
    const [size, type] = key.split(":");
    parts.push(`${value}× ${size} ${type}`);
  }
  return parts.join(" · ");
}
