import { generalizedGCD } from './gcd';

test('gcd: 1', () => {
  const input = [2, 3, 4, 5, 6];

  const res = generalizedGCD(5, input); //?.

  expect(res).toEqual(1);
});
test('gcd: 2', () => {
  const input = [2, 4, 6, 8, 10];

  const res = generalizedGCD(5, input); //?.

  expect(res).toEqual(2);
});
