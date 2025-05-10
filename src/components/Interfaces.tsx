/**
 * Represents a tile on the board. It contains the name of the tile and its position. The first tile placed is at (0, 0).
 */
export type PlacedTile = {
    img_name: string;
    x: number;
    y: number;
};