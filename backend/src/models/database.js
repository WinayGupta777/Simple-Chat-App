import mysql from 'mysql';
import dotenv  from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "admin",
    password: process.env.DB_PASS || "abc",
    database: process.env.DATABASE || "messageboard",
    connectionLimit: process.env.DB_CONNECTION_LIMIT || 10
});

export default db;