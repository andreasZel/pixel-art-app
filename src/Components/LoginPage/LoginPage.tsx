import { DrawingAnimation } from "../DrawingAnimation/DrawingAnimation";
import { StyledButton } from "../StyledButton/StyledButton";
import './LoginPage.css';
import React, { useRef } from "react";

export const LoginPage = () => {

    const Username = useRef(null);
    const Password = useRef(null);

    const login = () => {

    }

    const alterValue = (input: React.MutableRefObject<any>, e: React.ChangeEvent<HTMLInputElement>) => {
        if (input.current) {
            input.current.value = e.target.value
        }
    }

    return (<>
        <div className="animationWrapper">
            <DrawingAnimation />
        </div>
        <div className="loginWrapper">
            <label style={{ filter: 'drop-shadow(2px 4px 6px black)' }}>Pixel Art Application</label>
            <div className="loginInputsArea">
                <div className="loginInputWrapper" style={{ marginTop: '40px' }}>
                    <label>Username:</label>
                    <input ref={Username} onChange={(e) => { alterValue(Username, e) }} />
                </div>
                <div className="loginInputWrapper">
                    <label>Password:</label>
                    <input ref={Password} onChange={(e) => { alterValue(Password, e) }} />
                </div>
                <StyledButton title={'Login'} style={{ position: 'absolute', bottom: '15px', right: '25px', width: '200px', height: '30', fontSize: '40px', backgroundColor: 'var(--generic-button-color)', padding: '10px 20px' }} onClickCallBack={login} />
            </div>
        </div>
    </>
    )
}