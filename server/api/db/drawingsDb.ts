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

export async function saveDrawing(pixelids: number[], pixelcolors: string[], ownerid: number, drawingtitle: string, drawingId: number | null) {
    let queryResult;

    // if there is a selected drawing id, update drawing instead of creating
    if (drawingId) {
        const query = "UPDATE drawings SET pixelcolors=$1 WHERE id=$2";
        queryResult = await pool.query(query, [pixelcolors, drawingId]);
    } else {
        const query = "INSERT INTO drawings (pixelids, pixelcolors, ownerid, drawingtitle) VALUES ($1, $2, $3, $4)";
        queryResult = await pool.query(query, [pixelids, pixelcolors, ownerid, drawingtitle]);
    }

    if (queryResult) {
        const Subquery = "SELECT * FROM drawings WHERE ownerid=$1";
        const queryResult = await pool.query(Subquery, [1]);
        return queryResult?.rows;
    } else {
        return new Error();
    }
}

export async function deleteDrawing(id: number) {

    const query = "DELETE FROM drawings WHERE id=$1";
    const queryResult = await pool.query(query, [id]);

    if (queryResult) {
        const Subquery = "SELECT * FROM drawings WHERE ownerid=$1";
        const queryResult = await pool.query(Subquery, [1]);
        return queryResult?.rows;
    } else {
        return new Error();
    }
}