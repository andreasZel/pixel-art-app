import React, { useEffect, useState } from "react"
import './DrawingAnimation.css';

export const DrawingAnimation = () => {

    const [animationInterval, setAnimationInterval] = useState<NodeJS.Timeout | null>(null);
    const [animationClasses, setAnimationClasses] = useState({
        rectangles: 'shrinkAnimation',
        crease: 'creaseAnimation',
        drawing: 'drawingAnimation'
    });

    useEffect(() => {

        if (!animationInterval) {

            const interval = setInterval(() => {
                setAnimationClasses({ rectangles: '', crease: '', drawing: '' });

                setTimeout(() => {
                    setAnimationClasses({
                        rectangles: 'shrinkAnimation',
                        crease: 'creaseAnimation',
                        drawing: 'drawingAnimation'
                    });
                }, 3);
            }, 11000);

            setAnimationInterval(interval);
        }

        return () => {
            if (animationInterval) clearInterval(animationInterval);
        };
    }, [animationInterval])


    return (
        <svg width="100%" height="100%" style={{ filter: 'drop-shadow(2px 4px 6px black)' }} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Frame_9">
                <g id="Drawing" className={animationClasses.drawing}>
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 83" x="10" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 84" x="18.8889" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 85" x="27.7778" y="10" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 86" x="36.6667" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 87" x="45.5555" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 88" x="54.4445" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 89" x="63.3333" y="10" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 90" x="72.2222" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-20px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 91" x="81.1111" y="10" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 92" x="10" y="18.8889" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 93" x="18.8889" y="18.8889" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 94" x="27.7778" y="18.8889" width="8.88889" height="8.88889" fill="#FED3D3" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 95" x="36.6667" y="18.8889" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 96" x="45.5555" y="18.8889" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 97" x="54.4445" y="18.8889" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 98" x="63.3333" y="18.8889" width="8.88889" height="8.88889" fill="#FED3D3" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 99" x="72.2222" y="18.8889" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-15px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 100" x="81.1111" y="18.8889" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 101" x="10" y="27.7778" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 102" x="18.8889" y="27.7778" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 103" x="27.7778" y="27.7778" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 104" x="36.6667" y="27.7778" width="8.88889" height="8.88889" fill="#FF7B7B" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 105" x="45.5555" y="27.7778" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 106" x="54.4445" y="27.7778" width="8.88889" height="8.88889" fill="#FF7B7B" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 107" x="63.3333" y="27.7778" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 108" x="72.2222" y="27.7778" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-10px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 109" x="81.1111" y="27.7778" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 110" x="10" y="36.6667" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 111" x="18.8889" y="36.6667" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 112" x="27.7778" y="36.6667" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 113" x="36.6667" y="36.6667" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 114" x="45.5555" y="36.6667" width="8.88889" height="8.88889" fill="#FED3D3" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 115" x="54.4445" y="36.6667" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 116" x="63.3333" y="36.6667" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 117" x="72.2222" y="36.6667" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '-5px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 118" x="81.1111" y="36.6667" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 119" x="10" y="45.5557" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 120" x="18.8889" y="45.5557" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 121" x="27.7778" y="45.5557" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 122" x="36.6667" y="45.5557" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 123" x="45.5555" y="45.5557" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 124" x="54.4445" y="45.5557" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 125" x="63.3333" y="45.5557" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 126" x="72.2222" y="45.5557" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '0px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 127" x="81.1111" y="45.5557" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 128" x="10" y="54.4443" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 129" x="18.8889" y="54.4443" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 130" x="27.7778" y="54.4443" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 131" x="36.6667" y="54.4443" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 132" x="45.5555" y="54.4443" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 133" x="54.4445" y="54.4443" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 134" x="63.3333" y="54.4443" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 135" x="72.2222" y="54.4443" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '5px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 136" x="81.1111" y="54.4443" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 137" x="10" y="63.3333" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 138" x="18.8889" y="63.3333" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 139" x="27.7778" y="63.3333" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 140" x="36.6667" y="63.3333" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 141" x="45.5555" y="63.3333" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 142" x="54.4445" y="63.3333" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 143" x="63.3333" y="63.3333" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 144" x="72.2222" y="63.3333" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '10px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 145" x="81.1111" y="63.3333" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 146" x="10" y="72.2222" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 147" x="18.8889" y="72.2222" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 148" x="27.7778" y="72.2222" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 149" x="36.6667" y="72.2222" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 150" x="45.5555" y="72.2222" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 151" x="54.4445" y="72.2222" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 152" x="63.3333" y="72.2222" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 153" x="72.2222" y="72.2222" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '15px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 154" x="81.1111" y="72.2222" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '-20px' } as React.CSSProperties} key="Rectangle 155" x="10" y="81.1111" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '-15px' } as React.CSSProperties} key="Rectangle 156" x="18.8889" y="81.1111" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '-10px' } as React.CSSProperties} key="Rectangle 157" x="27.7778" y="81.1111" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '-5px' } as React.CSSProperties} key="Rectangle 158" x="36.6667" y="81.1111" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '0px' } as React.CSSProperties} key="Rectangle 159" x="45.5555" y="81.1111" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '5px' } as React.CSSProperties} key="Rectangle 160" x="54.4445" y="81.1111" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '10px' } as React.CSSProperties} key="Rectangle 161" x="63.3333" y="81.1111" width="8.88889" height="8.88889" fill="#C0C0C0" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '15px' } as React.CSSProperties} key="Rectangle 162" x="72.2222" y="81.1111" width="8.88889" height="8.88889" fill="#CECECE" />
                    <rect className={animationClasses.rectangles} style={{ "--translate-y": '20px', "--translate-x": '20px' } as React.CSSProperties} key="Rectangle 163" x="81.1111" y="81.1111" width="8.88889" height="8.88889" fill="#ADF7FF" />
                    <path className={"crease " + animationClasses.crease} key="Rectangle_79" d="M89.7979 9.60449L47.3703 67.4751L46.5436 67.9145C46.0729 68.1647 44.9911 69.0145 44.58 69.7579V69.7579C44.4149 70.0564 44.272 70.3952 44.1068 70.6934L41.1055 76.1095C40.912 76.4587 40.7352 76.8381 40.577 77.2438V77.2438C40.4717 77.5138 40.291 77.5673 40.2541 77.3395L40.2165 77.1071C40.1605 76.7611 40.1449 76.4015 40.1708 76.0526L40.6822 69.1597C40.7022 68.8905 40.7228 68.5747 40.6089 68.3849V68.3849L40.4456 68.1128C40.2751 67.8288 40.0618 67.639 39.8168 67.5534L39.2448 67.3534L89.7979 9.60449Z" fill="var(--background-color-secondary)" />
                </g>
            </g>
        </svg>
    )
}