//@ts-ignore
import drawingsRouter from "./api/router/drawingsRouter";

const express = require('express');

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/drawings', drawingsRouter())

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});