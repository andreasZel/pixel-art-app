import React from "react";
import './App.css';
import { DrawGrid } from "./Components/DrawGrid/DrawGrid";

const App = () => {

    return (
        <div className="appWrapper">
            <DrawGrid />
            <div className="drawMenu"></div>
        </div>
    )
}

export default App