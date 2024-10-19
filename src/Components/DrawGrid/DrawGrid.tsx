import React, { useEffect } from "react";
import './DrawGrid.css';
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";
import { drawElement } from "../../types";
import { DrawingAnimation } from "../DrawingAnimation/DrawingAnimation";

export const DrawGrid = () => {

    const { DrawContextStateOptions, imageColors, pixels, setPixels } = useDrawOptionsContext();

    useEffect(() => {
        initializeGrid(setPixels);
    }, [])

    useEffect(() => {

        if (imageColors.length <= 0)
            return;

        setPixels((prev) => {
            let copyDrawElements = [...prev];

            copyDrawElements = copyDrawElements.map((element, index) => {
                return {
                    ...element,
                    color: imageColors[index]
                }
            })

            return [...copyDrawElements];
        })
    }, [imageColors])

    const alterStyle = (id: number) => {
        setPixels((prev) => {
            const tempElements = [...prev];
            const index = tempElements.findIndex((element) => element.id == id);

            if (index != -1) {
                tempElements[index].color = DrawContextStateOptions.drawColor;
                return [...tempElements];
            }
            return prev;
        })
    }

    return (
        // <div className="drawGridWrapper">
        //     <div id="drawGrid">
        //         {
        //             pixels.length > 0 && pixels?.map((gridTile) => {
        //                 return <div
        //                     key={gridTile?.id}
        //                     className="gridTile"
        //                     style={{ backgroundColor: gridTile?.color }}
        //                     onClick={() => { if (DrawContextStateOptions.drawMode == 'click') alterStyle(gridTile?.id) }}
        //                     onMouseOver={() => { if (DrawContextStateOptions.drawMode == 'FreeDraw') alterStyle(gridTile?.id) }}
        //                 ></div>
        //             })
        //         }
        //     </div>
        // </div>
        <DrawingAnimation />
    )
}

function initializeGrid(setPixels: React.Dispatch<React.SetStateAction<drawElement[]>>) {
    const gridElement = document.getElementById('drawGrid') as HTMLElement;

    if (gridElement) {
        const gap = 5;
        const tileSize = 20;
        const tilesPerRow = Math.floor((gridElement.offsetWidth + gap) / (tileSize + gap));
        const tilesPerColumn = Math.floor((gridElement.offsetHeight + gap) / (tileSize + gap));
        let numberOfTiles = (tilesPerColumn * tilesPerRow);
        let grid: drawElement[] = [];

        for (let i = 0; i < numberOfTiles; i++) {
            grid[i] = { id: i, color: 'var(--background-color-secondary)' }
        }

        setPixels(grid);
    }
}