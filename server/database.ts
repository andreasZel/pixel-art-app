import { Pool } from "pg";

const pool = new Pool({
    host: process.env.POSTGRES_HOST || 'http://localhost',
    user: process.env.POSTGRES_USER || 'postgress',
    password: process.env.POSTGRES_PASSWORD || 'postgress',
    database: process.env.POSTGRES_DB || 'postgres',
    port: process.env.POSTGRES_PORT as number | undefined || 8080,
    idleTimeoutMillis: 30000,
});

export default pool;