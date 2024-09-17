import React, { CSSProperties } from "react";
import './MenuTitle.css';

export const MenuTitle = ({ src, title, imgSize = 24, conteinerCSS = {}, labelCSS = {} }: ImageProps) => {

    return (
        <div className="menuTitle" style={{ ...conteinerCSS }}>
            <img className="menuTitleImage" src={src} width={imgSize} />
            <label className="menuTitleLabel" style={{ ...labelCSS }}>{title}</label>
        </div>
    )
}

type ImageProps = {
    src: string;
    title: string;
    imgSize?: number;
    conteinerCSS?: CSSProperties;
    labelCSS?: CSSProperties;
}