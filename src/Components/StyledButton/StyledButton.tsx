import React from "react";
import { CSSProperties } from "react"
import './StyledButton.css';

export const StyledButton = ({ style, title, onClickCallBack }: StyledButtonType) => {
    return <div
        className="styledButton"
        style={{
            ...style,
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontFamily: "Irish Grover",
            cursor: 'pointer'
        }}
        onClick={onClickCallBack ? onClickCallBack : () => { }}>
        {title}
    </div>
}


type StyledButtonType = {
    style?: CSSProperties;
    title: string;
    onClickCallBack?: () => void
}