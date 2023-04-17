import { DataSourceOptions, DataSource } from 'typeorm';
import { config } from 'dotenv';
import path = require('path');
//
config({
  path: path.resolve(__dirname, `../../env/${process.env.NODE_ENV}.env`),
});
console.log(path.resolve(__dirname, `../../env/${process.env.NODE_ENV}.env`));
export const dataSourceOptions: DataSourceOptions = {
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
const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
