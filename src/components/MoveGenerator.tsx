import { PlacedTile } from "./Interfaces";
import { TileInfo } from "./TileInfo";


const boardWidth = 30;
const boardHeight = 20;

const directions = [
    { dx: 0, dy: -1 }, // North
    { dx: 1, dy: 0 },  // East
    { dx: 0, dy: 1 },  // South
    { dx: -1, dy: 0 }, // West
];

export function findValidMoves(placed: PlacedTile[]): PlacedTile[] {
    const occupied = new Set<string>();
    for (const tile of placed) {
        occupied.add(`${tile.x},${tile.y}`);
    }

    const frontier = new Set<string>();

    // Find all adjacent empty positions
    for (const tile of placed) {
        for (const { dx, dy } of directions) {
            const nx = tile.x + dx;
            const ny = tile.y + dy;
            const key = `${nx},${ny}`;
            if (!occupied.has(key) && nx < boardWidth && ny < boardHeight) {
                frontier.add(key);
            }
        }
    }

    const moves: PlacedTile[] = [];

    for (const pos of frontier) {
        const [x, y] = pos.split(",").map(Number);

        for (const [img_name, edges] of Object.entries(TileInfo)) {
            let isValid = true;

            for (let dir = 0; dir < 4; dir++) {
                const { dx, dy } = directions[dir];
                const adjKey = `${x + dx},${y + dy}`;
                // console.log(adjKey)
                if (occupied.has(adjKey)) {
                    const neighbor = placed.find(t => t.x === x + dx && t.y === y + dy);
                    if (!neighbor) continue;
                    // console.log(neighbor)
                    const neighborEdges = TileInfo[neighbor.img_name];
                    const opposite = (dir + 2) % 4;

                    // console.log(edges)
                    // console.log(neighborEdges)

                    if (edges[dir] !== neighborEdges[opposite]) {
                        isValid = false;
                        break;
                    }
                }
            }

            if (isValid) {
                moves.push({ img_name: img_name, x, y });
            }
        }
    }

    // Initial placement if board is empty
    if (placed.length === 0) {
        const [firstTile] = Object.keys(TileInfo);
        return [{ img_name: firstTile, x: 0, y: 0 }];
    }

    return moves;
}
