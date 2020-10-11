import { numIslands } from './islands';

test.skip('islands: 1', () => {
  const input = [
    ['1', '1', '1', '1', '0'],
    ['1', '1', '0', '1', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '0', '0', '0'],
  ];

  expect(numIslands(input)).toEqual(1);
});
test.skip('islands: 3', () => {
  const input = [
    ['1', '1', '0', '0', '0'],
    ['1', '1', '0', '0', '0'],
    ['0', '0', '1', '0', '0'],
    ['0', '0', '0', '1', '1'],
  ];

  expect(numIslands(input)).toEqual(3);
});
