import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';
import path = require('path');
//
config({
  path: path.resolve(__dirname, `../../env/${process.env.NODE_ENV}.env`),
});
console.log(path.resolve(__dirname, `../../env/${process.env.NODE_ENV}.env`));
const ormConfig: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  //migrationsTransactionMode: 'each',
  entities: ['src/**/*.entity{.ts,.js}'],
  logging: true,
  synchronize: false,
  //migrationsRun: process.env.NODE_ENV === 'test',
  //dropSchema: process.env.NODE_ENV === 'test',
  migrationsTableName: 'migrations',
  migrations: [__dirname + '/../database/migrations/**/*{.ts,.js}'],
  /* cli: {
    migrationsDir: 'src/database/migrations',
  }, */
};
console.log(ormConfig);
export = ormConfig;
