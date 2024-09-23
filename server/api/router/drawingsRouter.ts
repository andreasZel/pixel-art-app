import { Router } from "express";
import pool from "../../database";

export default function drawingsRouter() {
    const app = Router();

    app.get("/all", async (req, res) => {
        try {
            const result = await pool.query('SELECT * FROM drawings');
            console.log(result)
            res.json(result.rows);
        } catch (e) {
            console.log("Something went wrong drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong");
        }
    });

    return app;
};
