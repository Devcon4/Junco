export function largestItemAssociation(itemAssociation: string[][]): string[] {
  let calcTree = ([originalName, originalRef], _, arr) => {
    let child = arr.find(([name]) => name === originalRef);
    if (!child) return [originalName, originalRef];
    return [originalName, ...calcTree(child, undefined, arr)];
  };
  const fullTree = itemAssociation
    .map(calcTree)
    .sort((a, b) => a.length - b.length)
    .reverse();
  fullTree;
  return fullTree[0];
}
