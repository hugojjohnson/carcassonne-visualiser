import React, { useState } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';

type Move = {
  img_name: string;
  x: number;
  y: number;
};

type Props = {
  moves: Move[];
  boardWidth: number;
  boardHeight: number;
};

const Tile: React.FC<{ imgSrc: string; x: number; y: number; tileSize: number }> = ({ imgSrc, x, y, tileSize }) => {
  const [image] = useImage(imgSrc);

  if (!image) return null;

  return (
    <KonvaImage
      image={image}
      x={x * tileSize}
      y={y * tileSize}
      width={tileSize}
      height={tileSize}
    />
  );
};


/**
 * Carcassonne Visualizer
 * Renders a sequence of tile placements on a virtual board using Konva.
 * Allows stepping forward and backward through game moves.
 *
 * @requires konva
 * @requires react-konva
 */

export const CarcassonneVisualizer: React.FC<Props> = ({ moves, boardWidth, boardHeight }) => {
  const [step, setStep] = useState<number>(0);
  const tileSize = Math.floor(800 /Math.min(boardWidth, boardHeight))

  const handlePrev = (): void => {
    setStep((s) => Math.max(0, s - 1));
  };

  const handleNext = (): void => {
    setStep((s) => Math.min(moves.length, s + 1));
  };

  return (
    <div className='p-3'>
      <p className='text-right text-2xl'>Step {step}</p>
      <Stage width={tileSize * boardWidth} height={tileSize * boardHeight}>
        <Layer>
          {moves.slice(0, step).map((move, _) => (
            <Tile
              key={`${move.x}-${move.y}-${move.img_name}`}
              imgSrc={`./tiles/${move.img_name}`}
              x={move.x + boardWidth/2}
              y={move.y + boardHeight/2}
              tileSize={tileSize}
            />
          ))}
        </Layer>
      </Stage>
      <div style={{ marginTop: '1rem' }}>
        <button className='text-3xl border-2 border-black rounded-md p-2 mr-5' onClick={handlePrev}>◀</button>
        <button className='text-3xl border-2 border-black rounded-md p-2 mr-5' onClick={handleNext}>▶</button>
      </div>
    </div>
  );
};
