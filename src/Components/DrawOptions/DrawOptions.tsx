import React from "react";
import { ClickDrawIcon, darkTheme, FreeDrawIcon, ligthTheme, PencilIcon } from "../../Icons";
import { MenuTitle } from "../MenuTitle/MenuTitle";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";
import { CustomOneOptionButtons } from "../CustomOneOptionButtons/CustomOneOptionButtons";
import './DrawOptions.css';
import { ImageToDrawingOption } from "../ImageToDrawingOption/ImageToDrawingOption";

export const DrawOptions = () => {
    const { DrawContextStateOptions, setDrawContextStateOptions, theme, setTheme } = useDrawOptionsContext();

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
                labelCSS={{ fontSize: '45px', marginRight: '30px', color: 'var(--color-label-text)', fontFamily: 'Irish Grover' }} />
            <div className="drawOptionsInputHorizontal" style={{ marginTop: '10px' }}>
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'var(--color-label-text)' }}>Color: </label>
                <input className="colorInput" style={{ width: '100%' }} type='color' value={DrawContextStateOptions.drawColor} onChange={changeColor} />
            </div>
            <div className="drawOptionsInputVertical" style={{ marginTop: '30px' }}>
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'var(--color-label-text)' }}>Image to Drawing: </label>
                <ImageToDrawingOption />
            </div>
            <div className="drawOptionsInputVertical" style={{ marginBottom: '20px', marginTop: 'auto' }}>
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'var(--color-label-text)' }}>Draw Mode: </label>
                <CustomOneOptionButtons initialFocus={1} buttons={buttons} />
            </div>
            <img className="themeBtn" title={`Set theme to ${theme == 'dark' ? 'light' : 'dark'}`}
                src={theme == 'light' ? ligthTheme : darkTheme}
                onClick={() => {
                    setTheme((prev) => {
                        localStorage.setItem('theme', prev == "dark" ? 'light' : 'dark');
                        return prev == "dark" ? 'light' : 'dark';
                    })
                }}
                width={30} />
        </div>
    )
}