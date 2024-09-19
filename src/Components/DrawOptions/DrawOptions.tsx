import React from "react";
import { ClickDrawIcon, FreeDrawIcon, PencilIcon } from "../../Icons";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";
import { CustomOneOptionButtons } from "../CustomOneOptionButtons/CustomOneOptionButtons";
import './DrawOptions.css';
import { ImageToDrawingOption } from "../ImageToDrawingOption/ImageToDrawingOption";

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

    const changeDrawMode = (mode: string = "click") => {
        setDrawContextStateOptions((prev) => {
            return {
                ...prev,
                drawMode: mode
            }
        })
    }

    const buttons = [
        { title: 'Free Draw', onlyIcon: true, icon: { src: FreeDrawIcon, width: 45 }, onClickCallBack: () => { changeDrawMode('FreeDraw') } },
        { title: 'Click Draw', onlyIcon: true, icon: { src: ClickDrawIcon, width: 45 }, onClickCallBack: () => { changeDrawMode() } }
    ]

    return (
        <div className="drawOptions">
            <MenuTitle
                src={PencilIcon}
                title={"Options"}
                imgSize={58}
                conteinerCSS={{ marginTop: '10px' }}
                labelCSS={{ fontSize: '45px', marginRight: '30px', color: '#A86500', fontFamily: 'Irish Grover' }} />
            <div className="drawOptionsInputHorizontal">
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'rgb(168, 101, 0)' }}>Color: </label>
                <input className="colorInput" style={{ width: '100%' }} type='color' value={DrawContextStateOptions.drawColor} onChange={changeColor} />
            </div>
            <div className="drawOptionsInputVertical">
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'rgb(168, 101, 0)' }}>Image to Drawing: </label>
                <ImageToDrawingOption />
            </div>
            <div className="drawOptionsInputVertical">
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'rgb(168, 101, 0)' }}>Draw Mode: </label>
                <CustomOneOptionButtons initialFocus={1} buttons={buttons} />
            </div>
        </div>
    )
}