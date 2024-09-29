import React, { useEffect } from "react"
import { useState } from "react"
import { StyledButton } from "../StyledButton/StyledButton"
import { inentoryItems } from "../../types"
import "./Inventory.css";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";

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
    const [inventoryItems, setInventoryItems] = useState<inentoryItems | null>(null);

    const { setImageColors } = useDrawOptionsContext();

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
        <div className="inventoryWrapper">
            <div className="drawOptionsInputHorizontal">
                <label style={{ justifySelf: 'start', display: 'flex', alignItems: 'center', fontSize: '24px', fontFamily: 'Irish Grover', color: 'rgb(168, 101, 0)' }}>
                    Inventory:
                </label>
                <StyledButton
                    title={buttonState.label}
                    style={{ width: '50px', marginLeft: 'auto', height: "30px", backgroundColor: '#66E382' }}
                    onClickCallBack={buttonState.callBack} />
            </div>
            {buttonState.showInventory && inventoryItems &&
                <div className="drawingItemList">
                    {inventoryItems.map((item) => {
                        return <div key={item.id} className="drawingItem" onClick={() => { setImageColors(item.pixelcolors) }}>
                            <label style={{ fontSize: '30px' }}>🖼️</label>
                            <label style={{ fontSize: '25px', marginRight: "10px" }}>{item?.drawingtitle}</label>
                        </div>
                    })}
                </div>
            }
        </div>
    )
}