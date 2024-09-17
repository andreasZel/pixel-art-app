import { createContext, useContext } from "react";
import { DrawOptionsContextType } from "../../types";

export const DrawOptionsContext = createContext<DrawOptionsContextType>({
    DrawContextStateOptions: {
        drawColor: 'black',
        drawMode: 'click'
    },
    setDrawContextStateOptions: () => { }
});

export const useDrawOptionsContext = () => useContext(DrawOptionsContext);

