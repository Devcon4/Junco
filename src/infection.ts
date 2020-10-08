export function minHours(
    rows: number,
    columns: number,
    grid: number[][]
): number {
    const fullGrid: number[] = [].concat.apply([], grid);
    rows = grid.length;
    columns = grid[0].length;

    const vectors = fullGrid
        .map((v, i) => ({isInfected: v, x: i % columns, y: (i % rows * columns)/columns}))
    const infectionPoints = vectors.filter(p => p.isInfected);
    if(infectionPoints.length < 1) return 0;
    const healthyPoints = vectors
        .filter(p => !p.isInfected)
        .map((v, i) => ({...v, closestInfection: maxDistance(v, infectionPoints)}));
    const lastInfected = healthyPoints.reduce((prev, curr) => (curr.closestInfection.distance > prev.closestInfection.distance ? curr : prev));
    return lastInfected.closestInfection.distance;
}

type point = {x: number, y: number};

function distance(origin: point, target: point) {
    return Math.abs((origin.x - target.x)) + Math.abs(origin.y - target.y);
}

function maxDistance(origin: point, points: point[]): point & { distance: number } {
    const res = points
        .map(v => ({...v, distance: distance(origin, v)}));
    return res.reduce((prev, curr) => (curr.distance < prev.distance ? curr : prev));
}