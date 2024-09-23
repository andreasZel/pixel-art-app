import { json, Router } from "express";
import pool from "../../database";

export default function drawingsRouter() {
    const app = Router();

    app.get("/all/:ownerid", async (req, res) => {
        if (!req?.params?.ownerid)
            res.status(400).send("/all/:ownerid, Ownerid missing");

        try {
            const result = await pool.query(`SELECT * FROM drawings WHERE id=${req.params.ownerid}`);
            res.json(result.rows);
        } catch (e) {
            console.log("Something went wrong /all/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /all/:ownerid => drawingsRouter()");
        }
    });

    app.post("/saveDrawing/:ownerid", json(), async (req, res) => {
        if (!req?.params?.ownerid)
            res.status(400).send("/all/:ownerid, Ownerid missing");

        const { pixelids, pixelcolors } = req.body

        try {
            const query = "INSERT INTO drawings (pixelids, pixelcolors, ownerid) VALUES ($1, %2, $3) RETURNING *";

            const queryResult = await pool.query(query, [pixelids, pixelcolors, req.params.ownerid]);
            res.json(queryResult.rows);
        } catch (e) {
            console.log("Something went wrong /saveDrawing/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /saveDrawing/:ownerid => drawingsRouter()");
        }
    });

    return app;
};
