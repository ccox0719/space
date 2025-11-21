export function formatTurn(turn: number): string {
  if (!Number.isFinite(turn)) {
    return String(turn);
  }
  const rounded = Number(turn.toFixed(2));
  if (Number.isInteger(rounded)) {
    return String(rounded);
  }
  return String(rounded).replace(/\.?0+$/, "");
}
