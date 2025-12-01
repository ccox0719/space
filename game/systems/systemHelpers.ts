import { content } from "../core/engine";

export function getSystemById(id: string) {
  if (!content) return null;
  return content.systemsById[id] ?? null;
}

export function systemHasTag(systemId: string, tag: string): boolean {
  const sys = getSystemById(systemId);
  if (!sys) return false;
  return sys.tags.includes(tag);
}
