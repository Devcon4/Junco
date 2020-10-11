import { minHours } from './infection';

test('infection: 1', () => {
  const grid = [
    [0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 1],
    [0, 1, 0, 0, 0],
  ];

  const res = minHours(4, 5, grid); //? .*/

  expect(res).toEqual(2);
});
test('infection: 2', () => {
  const grid = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  const res = minHours(3, 3, grid); //? .*/

  expect(res).toEqual(4);
});
test('infection: 3', () => {
  const grid = [
    [1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
  ];

  const res = minHours(6, 6, grid); //? .*/

  expect(res).toEqual(10);
});
