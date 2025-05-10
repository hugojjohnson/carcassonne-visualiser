import React, { useEffect, useState } from "react";
import { CarcassonneVisualizer } from "./CarcassonneVisualiser";
import { PlacedTile } from "./Interfaces";
import { findValidMoves } from "./MoveGenerator";

/**
 * A wrapper page that combines the game generator and visualiser.
 */
export default function Dashboard(): React.ReactElement {
    const [placedTiles, setPlacedTiles] = useState<PlacedTile[]>([]);

    useEffect(() => {
        // Manually place the first tile
        const simulation: PlacedTile[] = [
            { img_name: "1.png", x: 0, y: 0 }
        ];
        // Get a list of the valid moves and add a random (valid) move to the board, and then repeat the process.
        for (let i = 0; i < 99; i++) {
            const possibleMoves = findValidMoves(simulation);
            if (possibleMoves.length === 0) {
                console.warn(`No valid moves available at turn ${i}`);
                break;
            }
            const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            simulation.push(move);
        }
        console.log(simulation)
        setPlacedTiles(simulation);
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto pt-10 flex flex-col">
            <div className="border-[2px] border-black rounded-md w-full p-5">
                <CarcassonneVisualizer moves={placedTiles} boardWidth={30} boardHeight={20} />
            </div>
        </div>
    );
}
