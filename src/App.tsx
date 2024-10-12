import React, { useState } from "react";
import './App.css';
import { DrawGrid } from "./Components/DrawGrid/DrawGrid";
import { DrawMenu } from "./Components/DrawMenu/DrawMenu";
import { DrawOptionsContext } from "./Components/DrawOptionsProvider/DrawOptionsProvider";
import { drawElement, inentoryItems } from "./types";

const App = () => {

    const [DrawContextStateOptions, setDrawContextStateOptions] = useState({ drawMode: "click", drawColor: 'black' }) as any;
    const [imageColors, setImageColors] = useState<string[]>([]);
    const [pixels, setPixels] = useState<drawElement[]>([]);
    const [selectedDrawingId, setSelectedDrawingId] = useState<number | null>(null);
    const [inventoryItems, setInventoryItems] = useState<inentoryItems | null>(null);
    const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem('theme') as ('light' | 'dark') || 'light');

    return (
        <div className={`appWrapper ${theme != 'dark' ? 'light-theme' : 'dark-theme'}`}>
            <DrawOptionsContext.Provider value={{
                DrawContextStateOptions, setDrawContextStateOptions,
                imageColors, setImageColors,
                pixels, setPixels,
                selectedDrawingId, setSelectedDrawingId,
                inventoryItems, setInventoryItems,
                theme, setTheme
            }}>
                <DrawGrid />
                <DrawMenu />
            </DrawOptionsContext.Provider>
        </div>
    )
}



export default App