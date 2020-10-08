


export function getPageSorted(
    numOfItems: number,
    items: (string | number)[][],
    sortParameter: number,
    sortOrder: number,
    itemsPerPage: number,
    pageNumber: number): string[] {

        // Normalize sort order to 1 or -1.
        sortOrder = sortOrder || -1;

        // Sort items. Compare item parameter, normalize from 1,0 to 1,-1, then multiply by sortOrder.
        // We have to normalize from 1,0 to 1,-1 because sort treats 0 as equal rather than less than.
        // Note: Most of the time array.sort will be fast enough unless you start getting large arrays.
        // It could be replaced with caching/quicker sort algorithm if it becomes a bottleneck in performance testing.
        let arr = items.sort((cur, next) => sortOrder * (+(cur[sortParameter] < next[sortParameter]) || -1));
        
        // First item index on the selected page.
        const pageIndex = itemsPerPage * pageNumber;

        // Paginate array.
        arr = arr.slice(pageIndex, pageIndex + itemsPerPage)

        // Map to only item name.
        return arr.map(i => (i[0] as string));
}
