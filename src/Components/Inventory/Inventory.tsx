import React, { useEffect, useRef } from "react"
import { useState } from "react"
import { StyledButton } from "../StyledButton/StyledButton"
import { inentoryItems } from "../../types"
import "./Inventory.css";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";
import { DeleteRecycleBin } from "../../Icons";

export const Inventory = () => {

    const [buttonState, setButtonState] = useState({
        label: 'Hide',
        showInventory: true,
        callBack: () => {
            setButtonState((prevState) => {
                return {
                    ...prevState,
                    label: !prevState.showInventory ? 'Hide' : 'Show',
                    showInventory: !prevState.showInventory
                }
            })
        }
    })

    const dialogRef = useRef<HTMLDialogElement | null>(null);
    const toBeDeletedDrawingId = useRef<number | null>(null);

    const { setImageColors, selectedDrawingId, setSelectedDrawingId, inventoryItems, setInventoryItems, theme } = useDrawOptionsContext();

    const openDialog = (drawingId: number) => {
        toBeDeletedDrawingId.current = drawingId;

        if (dialogRef.current) {
            dialogRef.current.showModal();
        }
    };

    const closeDialog = () => {

        toBeDeletedDrawingId.current = null;

        if (dialogRef.current) {
            dialogRef.current.close();
        }
    };

    const deleteDrawing = async () => {

        const id = toBeDeletedDrawingId.current;
        closeDialog();

        try {
            const result = await fetch(`api/drawings/deleteDrawing/${id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).catch((e) => {
                console.warn(e)
            }) as Response;

            const resultJson = await result.json();

            setInventoryItems(resultJson)
        } catch (e) {
            console.log("Error saving drawing: ", e)
        }

    }

    useEffect(() => {
        {
            (async () => {
                //temporarly fetch only for user 1
                await fetch(`api/drawings/all/partial/1`)
                    .then(async (res) => {
                        return res?.json();
                    })
                    .then((jsonRes) => {
                        if (jsonRes) {
                            setInventoryItems(jsonRes);
                        }
                    }).catch((e) => {
                        console.warn("ERROR GetDrawings: " + e)
                    })
            })();
        }
    }, []);

    return (
        <>
            <div className="inventoryWrapper">
                <div className="drawOptionsInputHorizontal">
                    <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'var(--color-label-text)' }}>
                        Inventory:
                    </label>
                    <StyledButton
                        title={buttonState.label}
                        style={{ width: '50px', marginLeft: 'auto', height: "30px", backgroundColor: 'var(--generic-button-color)' }}
                        onClickCallBack={buttonState.callBack} />
                </div>
                {buttonState.showInventory && inventoryItems &&
                    <div className="drawingItemList">
                        {inventoryItems.map((item) => {
                            return <div key={item.id}
                                className="drawingItem"
                                style={{ backgroundColor: selectedDrawingId == item.id ? 'var(--generic-button-color)' : '' }}
                                onClick={() => { setImageColors(item.pixelcolors); setSelectedDrawingId((prev) => { return prev == item.id ? null : item.id }) }}>
                                <label style={{ fontSize: '30px' }}>🖼️</label>
                                <label style={{ fontSize: '25px', marginRight: "10px", color: selectedDrawingId == item.id ? 'white' : 'var(--color-label-text)' }}>{item?.drawingtitle}</label>
                                <img height={24}
                                    title="Delete Drawing"
                                    src={DeleteRecycleBin}
                                    style={{
                                        marginLeft: 'auto',
                                        filter: (selectedDrawingId == item.id || theme == "dark") ? 'brightness(0) saturate(100%) invert(98%) sepia(4%) saturate(465%) hue-rotate(180deg) brightness(117%) contrast(100%)' : 'brightness(0) saturate(100%) invert(33%) sepia(95%) saturate(1137%) hue-rotate(21deg) brightness(94%) contrast(102%)'
                                    }}
                                    onClick={() => { openDialog(item.id) }}
                                />
                            </div>
                        })}
                    </div>
                }
            </div>
            <dialog className="genericDialog" ref={dialogRef}>
                <h2>Are you sure you want to delete the drawing ?</h2>
                <div className="genericDialogFooter">
                    <StyledButton title={'Cancel'} style={{ width: '120px', height: "30px", backgroundColor: '#da3838' }} onClickCallBack={closeDialog} />
                    <StyledButton title={'Delete'} style={{ width: '120px', height: "30px", backgroundColor: 'var(--generic-button-color)', }} onClickCallBack={deleteDrawing} />
                </div>
            </dialog>
        </>
    )
}