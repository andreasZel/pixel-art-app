import { json, Router } from "express";
import { getAllDrawings, getAllDrawingsPartial, saveDrawing } from "../db/drawingsDb";

export default function drawingsRouter() {
    const app = Router();

    app.get("/all/:ownerid", async (req, res) => {
        if (!req?.params?.ownerid)
            res.status(400).send("/all/:ownerid, Ownerid missing");

        try {
            const ownerId = Number(req.params.ownerid);
            const resp: any = await getAllDrawings(ownerId);

            res.json(resp);
        } catch (e) {
            console.log("Something went wrong /all/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /all/:ownerid => drawingsRouter()");
        }
    });

    app.get("/all/partial/:ownerid", async (req, res) => {
        if (!req?.params?.ownerid)
            res.status(400).send("/all/:ownerid, Ownerid missing");

        try {
            const ownerId = Number(req.params.ownerid);
            const resp: any = await getAllDrawingsPartial(ownerId);

            res.json(resp);
        } catch (e) {
            console.log("Something went wrong /all/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /all/:ownerid => drawingsRouter()");
        }
    });


    app.post("/saveDrawing/:ownerid", json(), async (req, res) => {
        if (!req?.params?.ownerid)
            res.status(400).send("/all/:ownerid, Ownerid missing");

        const { pixelids, pixelcolors, drawingtitle } = req.body

        try {
            const ownerId = Number(req.params.ownerid);
            const resp = await saveDrawing(pixelids, pixelcolors, ownerId, drawingtitle);

            res.json(resp);
        } catch (e) {
            console.log("Something went wrong /saveDrawing/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /saveDrawing/:ownerid => drawingsRouter()");
        }
    });

    return app;
};
