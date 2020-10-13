import { retrieveMostFrequentlyUsedWords } from './words';

test('words: 1', () => {
  const literatureText = 'Rose is a flower red rose are flower';
  const wordsToExclude = ['is, are, a'];

  const res = retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude); //?.

  expect(res).toEqual(['rose', 'flower']);
});

test('words: 2', () => {
  const literatureText = "Rose is 02 a flower. red%^ %ro$se ar'e flower";
  const wordsToExclude = ['is, are, a'];

  const res = retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude);

  expect(res).toEqual(['rose', 'flower']);
});

test('words: 3', () => {
  const literatureText =
    "Jack and Jill went to the market to buy bread and cheese. Cheese is Jack's and Jill's favorite food.";
  const wordsToExclude = ['and', 'he', 'the', 'to', 'is'];

  const res = retrieveMostFrequentlyUsedWords(literatureText, wordsToExclude); //?.

  expect(res).toEqual(['jack', 'jill', 'cheese', 's']);
});
