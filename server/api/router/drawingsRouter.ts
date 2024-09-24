import { json, Router } from "express";
import pool from "../../database";
import { getAllDrawings, saveDrawing } from "../db/drawingsDb";

export default function drawingsRouter() {
    const app = Router();

    app.get("/all/:ownerid", async (req, res) => {
        if (!req?.params?.ownerid)
            res.status(400).send("/all/:ownerid, Ownerid missing");

        try {
            const ownerId = Number(req.params.ownerid);
            res.json(getAllDrawings(ownerId));
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
            const ownerId = Number(req.params.ownerid);

            res.json(saveDrawing(pixelids, pixelcolors, ownerId));
        } catch (e) {
            console.log("Something went wrong /saveDrawing/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /saveDrawing/:ownerid => drawingsRouter()");
        }
    });

    return app;
};
