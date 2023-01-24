import { DataSource, DataSourceOptions } from 'typeorm';

import Environment from '../environment';

import { entities } from './entities';
import { migrations } from './migrations/index';

const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: Environment.database.port,
  username: Environment.database.user,
  password: Environment.database.password,
  database: Environment.database.name,
  synchronize: Environment.database.synchronize,
  logging: Environment.database.logging,
  entities: entities,
  migrations: migrations,
};
const AppDataSource = new DataSource(ormConfig);
export default AppDataSource;
