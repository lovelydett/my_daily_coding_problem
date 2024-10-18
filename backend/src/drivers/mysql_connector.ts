/**
 *@description Customized MySQL connector for the application
 *@author Yuting Xie
 *@date Oct 16, 2024
 */

import mysql from "mysql2/promise";

import { deployConfig } from "../utils/config";

// The global connection pool
const pool: mysql.Pool = mysql.createPool({
    host: deployConfig.mysql.host,
    user: deployConfig.mysql.user,
    password: deployConfig.mysql.password,
    database: deployConfig.mysql.database,
    port: deployConfig.mysql.port,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

class MySQLConnector {
    private _connection: mysql.PoolConnection | null = null;

    constructor() {
        // Empty constructor
    }

    public async executeQuery<T = any>(query: string, params?: (number | string)[]): Promise<T[]> {
        if (!this._connection) {
            // In case not in a transaction, get a new connection for this query
            this._connection = await pool.getConnection();
        }
    }
}

export { MySQLConnector };
