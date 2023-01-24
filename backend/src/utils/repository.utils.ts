import { EntityTarget, Repository } from 'typeorm';
import { DatabaseConnection } from '../config/database/database';

export const getRepository = <T>(entity: EntityTarget<T>): Repository<T> => {
  return DatabaseConnection.connection.getRepository(entity);
};
