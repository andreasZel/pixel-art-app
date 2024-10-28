import { DrawingAnimation } from "../DrawingAnimation/DrawingAnimation";
import { StyledButton } from "../StyledButton/StyledButton";
import './LoginPage.css';
import React from "react";

export const LoginPage = () => {

    const login = () => {

    }

    return (<>
        <div className="animationWrapper">
            <DrawingAnimation />
        </div>
        <div className="loginWrapper">
            <label>Pixel Art Application</label>
            <div className="loginInputsArea">
                <div className="loginInputWrapper" style={{ marginTop: '40px' }}>
                    <label>Username:</label>
                    <input />
                </div>
                <div className="loginInputWrapper">
                    <label>Password:</label>
                    <input />
                </div>
                <StyledButton title={'Login'} style={{ position: 'absolute', bottom: '15px', right: '25px', width: '200px', height: '30', fontSize: '40px', backgroundColor: 'var(--generic-button-color)', padding: '10px 20px' }} onClickCallBack={login} />
            </div>
        </div>
    </>
    )
}