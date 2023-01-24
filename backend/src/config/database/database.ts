import { DataSource } from 'typeorm';
import AppDataSource from './orm.config';

export class DatabaseConnection {
  private static dataSource: DataSource;
  public async startConnection() {
    try {
      DatabaseConnection.dataSource = await AppDataSource.initialize();
      console.info(
        `Database connection success. Database: '${AppDataSource.options.database}'`,
      );
    } catch (err) {
      console.error(err);
      throw new Error("Can't connect to the database");
    }
  }

  static get connection() {
    return DatabaseConnection.dataSource;
  }
}
