export function textCompare(a: string, b: string): boolean {
  if (!a || !b) {
    return false;
  }
  a = a.toLocaleLowerCase();
  b = b.toLowerCase();
  return a === b;
}

export function generatorID(length = 16): string {
  const symbols = 'abcdefghijklmnopqrstuvwxyz123456789';
  let result = '';
  for (let i = 0; i <= length; i++) {
    result += symbols[Math.floor(Math.random() * symbols.length)];
  }
  return result;
}
