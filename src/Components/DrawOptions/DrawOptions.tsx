import React from "react";
import { PencilIcon } from "../../Icons";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";

export const DrawOptions = () => {
    const { DrawContextStateOptions, setDrawContextStateOptions } = useDrawOptionsContext();

    const changeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDrawContextStateOptions((prev) => {
            return {
                ...prev,
                drawColor: e.target.value
            }
        })
    }

    return (
        <div className="drawOptions">
            <MenuTitle
                src={PencilIcon}
                title={"Options"}
                imgSize={58}
                conteinerCSS={{ marginTop: '10px' }}
                labelCSS={{ fontSize: '45px', marginRight: '30px', color: '#A86500', fontFamily: 'Irish Grover' }} />
            <input type='color' value={DrawContextStateOptions.drawColor} onChange={changeColor} />
        </div>
    )
}