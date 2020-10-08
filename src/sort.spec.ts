import { getPageSorted } from './sort';

test('Sort', () => {
    var items = [
        ['item1', 10, 15],
        ['item2', 3, 4],
        ['item3', 17, 8]
    ];
    var res = getPageSorted(3, items,0, 0, 2, 1); /*?.*/ 
    expect(res).toBeTruthy();
    expect(res.length).toEqual(1);
    expect(res[0]).toEqual('item3');
});
