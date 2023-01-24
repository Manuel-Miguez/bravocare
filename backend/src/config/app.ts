import { DatabaseConnection } from './database/database';
import Environment from './environment';
import { ExpressServer } from './express';

export class Application {
  public static async createApplication() {
    const databaseConnection = new DatabaseConnection();
    await databaseConnection.startConnection();
    const expressServer = new ExpressServer();
    await expressServer.setup(Environment.api.port);
    Application.handleExit(expressServer);

    return expressServer;
  }

  private static handleExit(express: ExpressServer) {
    process.on('uncaughtException', (err: Error) => {
      console.error('Uncaught exception', err);
      Application.shutdownProperly(1, express);
    });
    process.on('unhandledRejection', (reason: object | null | undefined) => {
      console.error('Unhandled Rejection at promise', reason);
      Application.shutdownProperly(2, express);
    });
    process.on('SIGINT', () => {
      console.info('Caught SIGINT');
      Application.shutdownProperly(128 + 2, express);
    });
    process.on('SIGTERM', () => {
      console.info('Caught SIGTERM');
      Application.shutdownProperly(128 + 2, express);
    });
    process.on('exit', () => {
      console.info('Exiting');
    });
  }

  private static shutdownProperly(exitCode: number, express: ExpressServer) {
    Promise.resolve()
      .then(() => express.kill())
      .then(() => {
        console.info('Shutdown complete');
        process.exit(exitCode);
      })
      .catch((err) => {
        console.error('Error during shutdown', err);
        process.exit(1);
      });
  }
}
