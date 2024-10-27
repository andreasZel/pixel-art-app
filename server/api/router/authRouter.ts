import { json, Router } from "express";
import { authendicate } from "../db/authDB";
import { SignJWT } from 'jose';
import { createSecretKey } from 'crypto';

export default function drawingsRouter() {
    const app = Router();

    app.post('/login', json(), async (req, res) => {
        const { usename, password } = req?.body;

        if (!usename || !password) {
            res.status(400).send();
            return;
        }

        const loginResult = await authendicate({ userName: usename, passWord: password });

        if (loginResult) {
            const secretJWT = process.env.JWT_SECRET || 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTczMDA1MDQ1MCwiaWF0IjoxNzMwMDUwNDUwfQ.W44i_WgWuGSxYWA1hIhATGu91BqFpRmYl9FIVLoPtYc';
            const secret = createSecretKey(Buffer.from(secretJWT!, 'utf-8'));

            const JWT = await new SignJWT({
                "sub": loginResult?.id,
                "username": loginResult?.username
            }).setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('2h')  // Set the token expiration time
                .sign(secret);;

            res.send()
        }
    });

    return app;
};