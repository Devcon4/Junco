export function retrieveMostFrequentlyUsedWords(
  literatureText: string,
  wordsToExclude: string[]
): string[] {
  // Creaet array of words from text.
  const words = literatureText
    // Replace special characters with spaces.
    .replace(/[^a-zA-Z ]/g, ' ')
    // Split into an array on spaces.
    .split(/[ ]/g)
    // Filter array to only words excluding our special case words.
    .filter((v) => v && !wordsToExclude.includes(v))
    // Map all words to lowercase.
    .map((v) => v.toLowerCase());

  // Count occurences of each word and sort by count.
  const counts = words
    .map((text, i, arr) => ({
      text,
      count: arr.filter((v) => v === text).length,
    }))
    .sort((a, b) => +!(a.count - b.count));

  // Convert counts to a map and back to an array to remove duplicates from the array.
  const deduped = [...new Map(counts.map((v) => [v.text, v.count]))]
    // Filter to only the most common words.
    .filter(([_, count]) => count >= counts[0].count)
    // Map back to just the word.
    .map(([text]) => text);
  return deduped;
}
