export function cellCompete(states: number[], days: number): number[] {
  // Create loop to calculate the state for every day.
  while (days > 0) {
    days--;

    // Map the state.
    // If the prev value matches the next value (0,0 or 1,1) then flip the current value.
    // The plus sign before the expression will cast it to a number. True becomes one and False becomes zero. This is just useful shorthand.
    // If our arr lookup is out of bounds of the array we default to 0, this if for the first and last values in the array.
    states = states.map(
      (_, i, arr) => +((arr[i - 1] || 0) !== (arr[i + 1] || 0))
    );
  }

  // Return the state after we calculate all the days.
  return states;
}
