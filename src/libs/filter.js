export function skipEveryOtherButLast(i, idx, arr) {
  if (idx === arr.length - 1) return true;
  return idx % 2 === 0;
}
export function filterNone() {
  return true;
}
