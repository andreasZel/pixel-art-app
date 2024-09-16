import React, { useEffect, useState } from "react";
import './DrawGrid.css';

export const DrawGrid = () => {

    const [drawElements, setDrawElements] = useState<drawElement[]>([]);

    useEffect(() => {
        initializeGrid(setDrawElements);
    }, [])

    return (
        <div id="drawGrid">
            {
                drawElements.length > 0 && drawElements?.map((gridTile) => {
                    return <div key={gridTile?.id} className="gridTile" style={{ backgroundColor: gridTile?.color }}></div>
                })
            }
        </div>
    )
}

function initializeGrid(setDrawElements: React.Dispatch<React.SetStateAction<drawElement[]>>) {
    const gridElement = document.getElementById('drawGrid') as HTMLElement;

    if (gridElement) {
        const gap = 5;
        const tileSize = 20;
        const tilesPerRow = Math.floor((gridElement.offsetWidth + gap) / (tileSize + gap));
        const tilesPerColumn = Math.floor((gridElement.offsetHeight + gap) / (tileSize + gap));
        let numberOfTiles = (tilesPerColumn * tilesPerRow);
        let grid: drawElement[] = [];

        for (let i = 0; i < numberOfTiles; i++) {
            grid[i] = { id: i, color: 'white' }
        }

        setDrawElements(grid);
    }
}

type drawElement = {
    id: number;
    color: string;
}