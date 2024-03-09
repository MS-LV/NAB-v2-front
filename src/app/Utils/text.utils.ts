export function textCompare(a: string, b: string): boolean {
  if (!a || !b) {
    return false;
  }
  a = a.toLocaleLowerCase();
  b = b.toLowerCase();
  return a === b;
}
