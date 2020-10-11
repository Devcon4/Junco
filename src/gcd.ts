export function generalizedGCD(num: number, arr: number[]): number {
  // Create func to calc GCD on two numbers. It is recursive but with our small datasets it doesn't impact performance. > ~.1ms
  let calcGCD = (a, b) => {
    return b == 0 ? a : calcGCD(b, a % b);
  };

  // Reduce our array using our calcGCD function returning the final GCD.
  return arr.reduce((prev, curr) => (prev = calcGCD(prev, curr)));
}
