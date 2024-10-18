/**
 *@description Load configs
 *@author Yuting Xie
 *@date Oct 16, 2024
 */

const deployConfigFile = require("../../deploy_config.json");

interface MySQLConfig {
    host: string;
    user: string;
    password: string;
    database: string;
    port: number;
}

class DeployConfig {
    mysql: MySQLConfig;

    constructor(mysqlConfig: MySQLConfig) {
        this.mysql = deployConfig.mysql;
    }
}

const deployConfig: DeployConfig = new DeployConfig(deployConfigFile.mysql);

export { deployConfig };
