import React from "react";
import { DrawOptions } from "../DrawOptions/DrawOptions";
import './DrawMenu.css';
import { ShopOptions } from "../ShopOptions/ShopOptions";
import { StyledButton } from "../StyledButton/StyledButton";

export const DrawMenu = () => {

    return (
        <div className="drawMenu">
            <DrawOptions />
            <ShopOptions />
            <div style={{ width: '100%', height: '100%', backgroundColor: '#FFF1DD' }}>
                <StyledButton title={'Save Drawing'} style={{ width: '100%', height: '100%' }} />
            </div>
        </div>
    )
}