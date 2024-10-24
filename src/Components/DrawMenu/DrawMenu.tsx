import React, { useRef } from "react";
import { DrawOptions } from "../DrawOptions/DrawOptions";
import './DrawMenu.css';
import { ShopOptions } from "../ShopOptions/ShopOptions";
import { StyledButton } from "../StyledButton/StyledButton";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";

export const DrawMenu = () => {

    const { pixels, setInventoryItems, selectedDrawingId } = useDrawOptionsContext();
    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const openDialog = () => {

        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {

        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const saveDrawing = async (ownerId: number) => {

        closeDialog();

        try {
            const result = await fetch(`api/drawings/saveDrawing/${ownerId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    pixelids: pixels.map((pixel) => pixel.id),
                    pixelcolors: pixels.map((pixel) => pixel.color),
                    drawingtitle: inputRef.current?.value ?? 'drawing',
                    drawingId: selectedDrawingId
                })
            }).catch((e) => {
                console.warn(e)
            }) as Response;

            const resultJson = await result.json();

            setInventoryItems(resultJson)
        } catch (e) {
            console.log("Error saving drawing: ", e)
        }

    }

    return (
        <>
            <div className="drawMenu">
                <DrawOptions />
                <ShopOptions />
                <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--background-color)' }}>
                    <StyledButton title={'Save Drawing'} style={{ width: '100%', height: '100%', fontSize: '45px', backgroundColor: 'var(--generic-button-color)', }} onClickCallBack={openDialog} />
                </div>
            </div>
            <dialog className="genericDialog" ref={dialogRef}>
                {<h2>{selectedDrawingId ? "Update Drawing" : "Give your Drawing a Title"}</h2>}
                {!selectedDrawingId && <input ref={inputRef} type="text" style={{ border: 'none', width: '50%', height: '35px', fontSize: '25px' }} />}
                <div className="genericDialogFooter">
                    <StyledButton title={'Cancel'} style={{ width: '120px', height: "30px", backgroundColor: '#da3838' }} onClickCallBack={closeDialog} />
                    <StyledButton title={'Save'} style={{ width: '120px', height: "30px", backgroundColor: 'var(--generic-button-color)', }} onClickCallBack={() => { saveDrawing(1) }} />
                </div>
            </dialog>
        </>
    )
}