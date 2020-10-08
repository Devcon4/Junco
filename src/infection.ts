export function minHours(
    rows: number,
    columns: number,
    grid: number[][]
): number {
    let fullGrid: number[] = [].concat.apply([], grid);
    let vectors = fullGrid
        .map((v, i) => ({isInfected: v, x: i % columns, y: (i - (i % columns)) % rows}))

    let infectionPoints = vectors.filter(p => p.isInfected);
    if(infectionPoints.length < 1) return 0;

    let healthyPoints = vectors
        .filter(p => !p.isInfected)
        .map((v, i) => ({...v, closestInfection: maxDistance(v, infectionPoints)}));
    let lastInfected = healthyPoints.reduce((prev, curr) => (curr.closestInfection.distance > prev.closestInfection.distance ? curr : prev));
    console.log(lastInfected);
    return lastInfected.closestInfection.distance;
}

type point = {x: number, y: number};

function distance(origin: point, target: point) {
    const estimate = Math.sqrt(Math.pow(target.x - origin.x, 2) + Math.pow(target.y - origin.y, 2));
    // const angle = Math.abs(180 * Math.atan2(target.y - origin.y, target.x - origin.x) / Math.PI);
    // const adjusted = Math.ceil(estimate * (angle/90));
    
    // console.log(adjusted);
    return Math.ceil(estimate);
}

function maxDistance(origin: point, points: point[]): point & { distance: number } {
    return points
        .map(v => ({...v, distance: distance(origin, v)}))
        .reduce((prev, curr) => (curr.distance < prev.distance ? curr : prev));
}