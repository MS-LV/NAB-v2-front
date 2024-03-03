export function textCompare(a: string, b: string) {
    a = a.toLocaleLowerCase();
    b = b.toLowerCase();
    return a.localeCompare(b);
}