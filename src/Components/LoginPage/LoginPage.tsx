import { useNavigate } from "react-router-dom";
import { DrawingAnimation } from "../DrawingAnimation/DrawingAnimation";
import { StyledButton } from "../StyledButton/StyledButton";
import './LoginPage.css';
import React, { useRef } from "react";
import { useDrawOptionsContext } from "../DrawOptionsProvider/DrawOptionsProvider";
import { darkTheme, ligthTheme } from "../../Icons";

export const LoginPage = () => {

    let navigate = useNavigate();
    const { theme, setTheme } = useDrawOptionsContext();

    const Username = useRef<HTMLInputElement | null>(null);
    const Password = useRef<HTMLInputElement | null>(null);

    const login = async () => {

        if (Username?.current?.value && Password?.current?.value) {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: Username?.current?.value,
                    password: Password?.current?.value
                })
            });

            if (res.status == 200) {
                navigate('/');
            }

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
                    <input type="string" ref={Username} />
                </div>
                <div className="loginInputWrapper">
                    <label>Password:</label>
                    <input type="string" ref={Password} />
                </div>
                <StyledButton title={'Login'} style={{ position: 'absolute', bottom: '15px', right: '25px', width: '200px', height: '30', fontSize: '40px', backgroundColor: 'var(--generic-button-color)', padding: '10px 20px' }} onClickCallBack={() => { login() }} />
            </div>
        </div>
        <img className="themeBtn" title={`Set theme to ${theme == 'dark' ? 'light' : 'dark'}`}
            src={theme == 'light' ? ligthTheme : darkTheme}
            onClick={() => {
                setTheme((prev) => {
                    localStorage.setItem('theme', prev == "dark" ? 'light' : 'dark');
                    return prev == "dark" ? 'light' : 'dark';
                })
            }}
            width={30} />
    </>
    )
}