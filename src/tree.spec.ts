import { largestItemAssociation } from './tree';

test('tree: 1', () => {
  const input = [
    ['Item1', 'Item2'],
    ['Item3', 'Item4'],
    ['Item4', 'Item5'],
  ];

  const res = largestItemAssociation(input); //?.

  expect(res).toEqual(['Item3', 'Item4', 'Item5']);
});
test('tree: 2', () => {
  const input = [
    ['Item1', 'Item2'],
    ['Item3', 'Item4'],
  ];

  const res = largestItemAssociation(input);

  expect(res).toEqual(['Item1', 'Item2']);
});
