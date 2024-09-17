import React, { createContext, CSSProperties, useState } from "react";
import './App.css';
import { DrawGrid } from "./Components/DrawGrid/DrawGrid";
import { DrawMenu } from "./Components/DrawMenu/DrawMenu";
import { DrawOptionsContext } from "./Components/DrawOptionsProvider/DrawOptionsProvider";

const App = () => {

    const [DrawContextStateOptions, setDrawContextStateOptions] = useState({ drawColor: 'black', drawMode: 'click' });

    return (
        <div className="appWrapper">
            <DrawOptionsContext.Provider value={{ DrawContextStateOptions, setDrawContextStateOptions }}>
                <DrawGrid />
                <DrawMenu />
            </DrawOptionsContext.Provider>
        </div>
    )
}



export default App