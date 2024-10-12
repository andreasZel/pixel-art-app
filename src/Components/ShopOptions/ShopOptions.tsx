import React from "react"
import { MenuTitle } from "../MenuTitle/MenuTitle"
import { ShopIcon } from "../../Icons"
import '../DrawOptions/DrawOptions.css';
import { Inventory } from "../Inventory/Inventory";

export const ShopOptions = () => {

    return (
        <div className="drawOptions">
            <MenuTitle
                src={ShopIcon}
                title={"Shop"}
                imgSize={58}
                conteinerCSS={{ marginTop: '10px', padding: '10px 0px' }}
                labelCSS={{ fontSize: '45px', marginRight: '30px', color: 'var(--color-label-text)', fontFamily: 'Irish Grover' }} />

            <Inventory />
        </div>
    )
}