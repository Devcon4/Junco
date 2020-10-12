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
test('gcd: 3', () => {
  const input = [20, 40, 60, 80, 100];

  const res = generalizedGCD(5, input); //?.

  expect(res).toEqual(20);
});
test('gcd: 4', () => {
  const input = [200, 400, 600, 800, 1000];

  const res = generalizedGCD(5, input); //?.

  expect(res).toEqual(200);
});
