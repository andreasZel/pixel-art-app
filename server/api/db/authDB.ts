import pool from "../../database";

export async function authendicate(userCredentials: { userName: string, passWord: string }) {
    try {
        const query = "SELECT * FROM users WHERE username=$1 AND password=$2";
        const queryResult = await pool.query(query, [userCredentials.userName, userCredentials.passWord]);

        return queryResult?.rows?.length > 0 ? queryResult?.rows[0] : false;
    } catch (e) {
        console.log("Error authDB.ts -> authendicate(): ", e);
        return false;
    }
}