//@ts-ignore
import authRouter from "./api/router/authRouter";
import drawingsRouter from "./api/router/drawingsRouter";

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/drawings', drawingsRouter());
app.use('/auth', authRouter());

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});