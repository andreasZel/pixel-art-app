import pool from "../../database";

export async function getAllDrawings(ownerid: number) {

    const query = "SELECT * FROM drawings WHERE id=$1";
    const queryResult = await pool.query(query, [Number(ownerid)]);

    return queryResult?.rows;
}

export async function saveDrawing(pixelids: number[], pixelcolors: string[], ownerid: number) {

    const query = "INSERT INTO drawings (pixelids, pixelcolors, ownerid) VALUES ($1, %2, $3) RETURNING *";
    const queryResult = await pool.query(query, [pixelids, pixelcolors, ownerid]);

    return queryResult?.rows;
}