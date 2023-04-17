"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataSourceOptions = void 0;
const typeorm_1 = require("typeorm");
const dotenv_1 = require("dotenv");
const path = require("path");
//
(0, dotenv_1.config)({
    path: path.resolve(__dirname, `../../env/${process.env.NODE_ENV}.env`),
});
console.log(path.resolve(__dirname, `../../env/${process.env.NODE_ENV}.env`));
exports.dataSourceOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //migrationsTransactionMode: 'each',
    entities: ['dist/**/*.entity.js'],
    logging: true,
    synchronize: true,
    //migrationsRun: process.env.NODE_ENV === 'test',
    //dropSchema: process.env.NODE_ENV === 'test',
    migrationsTableName: 'migrations',
    migrations: ['dist/database/migrations/**/*{.ts,.js}'],
};
const dataSource = new typeorm_1.DataSource(exports.dataSourceOptions);
exports.default = dataSource;
//# sourceMappingURL=datasource.js.map