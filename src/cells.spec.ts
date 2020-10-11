import { cellCompete } from './cells';

test('Cells: 1', () => {
  const input = [1, 0, 0, 0, 0, 1, 0, 0];
  const res = cellCompete(input, 1);
  expect(res).toEqual([0, 1, 0, 0, 1, 0, 1, 0]);
});
test('Cells: 2', () => {
  const input = [1, 1, 1, 0, 1, 1, 1, 1];
  const res = cellCompete(input, 2);
  expect(res).toEqual([0, 0, 0, 0, 0, 1, 1, 0]);
});
test('Cells: 3', () => {
  const input = [0, 1, 0, 0, 1, 0, 0, 1];
  const res = cellCompete(input, 2);
  expect(res).toEqual([0, 0, 1, 1, 0, 1, 1, 1]);
});
