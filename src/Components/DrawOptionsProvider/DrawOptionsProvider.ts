import { createContext, useContext } from "react";
import { DrawOptionsContextType } from "../../types";

export const DrawOptionsContext = createContext<DrawOptionsContextType>({
    DrawContextStateOptions: {
        drawColor: 'black',
        drawMode: 'click'
    },
    setDrawContextStateOptions: () => { },
    imageColors: [],
    setImageColors: () => { },
    pixels: [],
    setPixels: () => { },
    selectedDrawingId: null,
    setSelectedDrawingId: () => null,
    inventoryItems: [],
    setInventoryItems: () => { }
});

export const useDrawOptionsContext = () => useContext(DrawOptionsContext);

