import { numIslands } from './islands';

test('islands: 1', () => {
    const input = [
        ['1','1','1','1','0'],
        ['1','1','0','1','0'],
        ['1','1','0','0','0'],
        ['0','0','0','0','0'],
    ];

    expect(numIslands(input)).toEqual(1);
});
test('islands: 3', () => {
    const input = [
        ['1','1','0','0','0'],
        ['1','1','0','0','0'],
        ['0','0','1','0','0'],
        ['0','0','0','1','1'],
    ];

    expect(numIslands(input)).toEqual(3);
});
