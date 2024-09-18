import React, { useState } from "react";
import './CustomOneOptionButtons.css';

export const CustomOneOptionButtons = ({ buttons, initialFocus = -1 }: ButtonProps) => {

    const [focusedBtn, setFocusedBtn] = useState<number>(initialFocus);

    return (
        <div className="customOneOptionButtonsWrapper">
            {
                buttons?.map((button, index) => {
                    return <button
                        key={index}
                        style={{ opacity: (focusedBtn != index || focusedBtn == null) ? '0.6' : '1' }}
                        className={'multipleOptionButton'}
                        onClick={() => { button.onClickCallBack(); setFocusedBtn(index) }}>
                        {!button?.onlyIcon ? button?.title : <img src={button?.icon?.src} width={button?.icon?.width} />}
                    </button>
                })
            }
        </div>
    )
}

type ButtonProps = {
    buttons: Button[];
    initialFocus?: number;
}


type Button = {
    onlyIcon: boolean;
    title?: string;
    icon?: { src: string, width: number };
    onClickCallBack: () => any
}