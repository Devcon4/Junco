export function numIslands(grid: string[][]): number {
    let ranges: [number, number][] = [];

    const rowLength = grid[0].length;
    const fullGrid: string[] = [].concat.apply([], grid);

    let curr;
    for(let i = 0; i < fullGrid.length; i++) {
        const square = fullGrid[i];

        if(curr && square == '0') {
            ranges.push([curr, (i - curr)]);
            curr = undefined;
        }
        if(!curr && square == '1') {
            curr = i;
        }
    }
    
    ranges
    return 0;
}
