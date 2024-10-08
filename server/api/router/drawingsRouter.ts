import { json, Router } from "express";
import { deleteDrawing, getAllDrawings, getAllDrawingsPartial, saveDrawing } from "../db/drawingsDb";

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

        const { pixelids, pixelcolors, drawingtitle, drawingId } = req.body

        try {
            const ownerId = Number(req.params.ownerid);
            const resp = await saveDrawing(pixelids, pixelcolors, ownerId, drawingtitle, drawingId);

            res.json(resp);
        } catch (e) {
            console.log("Something went wrong /saveDrawing/:ownerid => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in /saveDrawing/:ownerid => drawingsRouter()");
        }
    });

    app.post("/deleteDrawing/:id", json(), async (req, res) => {
        if (!req?.params?.id)
            res.status(400).send("/all/:id, id missing");

        try {
            const Id = Number(req.params.id);
            const resp = await deleteDrawing(Id);

            res.json(resp);
        } catch (e) {
            console.log("Something went wrong deleteDrawing/:id => drawingsRouter():\n" + e);
            res.status(500).send("Something went wrong in deleteDrawing/:id => drawingsRouter()");
        }
    });

    return app;
};
