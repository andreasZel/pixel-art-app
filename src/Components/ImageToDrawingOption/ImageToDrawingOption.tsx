import React, { useContext, useState } from "react";
import { ConvertIcon, PixelDrawingIcon } from "../../Icons";
import { getPixelColors } from "../../Utils/GeneralUtils";
import './ImageToDrawingOption.css';
import { DrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";

export const ImageToDrawingOption = () => {

    const { setImageColors } = useContext(DrawOptionsContext);
    const [classAnimation, setclassAnimation] = useState('');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e?.target?.files ? e?.target?.files[0] : null;
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

        if (file) {
            const img = new Image();
            const reader = new FileReader();

            reader.onload = function (e) {
                img.src = e?.target?.result ? e?.target?.result as string : '';
            };

            img.onload = function () {

                ctx.drawImage(img, 0, 0, 35, 35);

                const imageData = ctx.getImageData(0, 0, 35, 35);
                const pixelArray = getPixelColors(imageData);

                setImageColors([...pixelArray]);
            };

            reader.readAsDataURL(file);
        }
    }

    return (
        <div className="imageToDrawingOptionWrapper">
            <input className={`fileCustomImageInput ${classAnimation}`} type="file"
                onMouseOver={() => { setclassAnimation("pulseAnimation") }}
                onDragOverCapture={() => { setclassAnimation("pulseAnimation") }}
                onDragLeaveCapture={() => { setclassAnimation("") }}
                onDrop={() => { setclassAnimation("") }}
                onMouseLeave={() => { setclassAnimation("") }}
                onChange={handleImageUpload} />
            <canvas id="canvas" width="36" height="36" style={{ display: "none" }}></canvas>
            <img src={ConvertIcon} />
            <img src={PixelDrawingIcon} width={45} />
        </div>
    )
}