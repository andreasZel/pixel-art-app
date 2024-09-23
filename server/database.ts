import { Pool } from "pg";

console.log(process.env.POSTGRES_HOST,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    process.env.POSTGRES_DB,
    process.env.POSTGRES_PORT)

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    port: process.env.POSTGRES_PORT as number | undefined,
    idleTimeoutMillis: 30000,
});

export default pool;