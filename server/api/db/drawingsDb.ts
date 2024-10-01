import pool from "../../database";

export async function getAllDrawings(ownerid: number) {

    const query = "SELECT * FROM drawings WHERE ownerid=$1";
    const queryResult = await pool.query(query, [Number(ownerid)]);

    return queryResult?.rows;
}

export async function getAllDrawingsPartial(ownerid: number) {

    const query = "SELECT drawingtitle, pixelcolors, id FROM drawings WHERE ownerid=$1";
    const queryResult = await pool.query(query, [Number(ownerid)]);

    return queryResult?.rows;
}

export async function saveDrawing(pixelids: number[], pixelcolors: string[], ownerid: number, drawingtitle: string) {

    const query = "INSERT INTO drawings (pixelids, pixelcolors, ownerid, drawingtitle) VALUES ($1, $2, $3, $4) RETURNING *";
    const queryResult = await pool.query(query, [pixelids, pixelcolors, ownerid, drawingtitle]);

    return queryResult?.rows;
}

export async function deleteDrawing(id: number) {

    const query = "DELETE FROM drawings WHERE id=$1 RETURNING *";
    const queryResult = await pool.query(query, [id]);

    return queryResult?.rows;
}