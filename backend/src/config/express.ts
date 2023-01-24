import { Server } from 'http';

import cors from 'cors';
import morgan from 'morgan';
import express, { Express, Router } from 'express';

import { noCache } from '../middlewares/no-cache.middleware';
import router from '../routes/routes';

const RateLimit = require('express-rate-limit');
const helmet = require('helmet');
export class ExpressServer {
  private server?: Express;
  private httpServer?: Server;
  private apiRoutes?: Router;

  public get app() {
    return this.server;
  }

  public async setup(port: number) {
    const server = express();
    this.setupStandardMiddleware(server);
    this.setupSecurityMiddleware(server);
    this.setupApiRoutes(server);
    this.httpServer = this.listen(server, port);
    this.server = server;
    return this.server;
  }

  public listen(server: Express, port: number) {
    console.info(`Starting server on port ${port}`);
    return server.listen(port);
  }

  public kill() {
    if (this.httpServer) this.httpServer.close();
  }

  private setupApiRoutes(server: Express) {
    this.apiRoutes = router;
    server.use(this.apiRoutes);
  }

  private setupSecurityMiddleware(server: Express) {
    server.use(helmet());
    server.use(helmet.referrerPolicy({ policy: 'same-origin' }));
    server.use(noCache);
    server.use(morgan('tiny'));
    server.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'unsafe-inline'"],
          scriptSrc: ["'unsafe-inline'", "'self'"],
        },
      }),
    );
  }

  private setupStandardMiddleware(server: Express) {
    server.use(express.json());
    server.use(express.urlencoded({ extended: true }));
    server.use(cors({ origin: true }));
    const baseRateLimitingOptions = {
      windowMs: 15 * 60 * 1000, // 15 min in ms
      max: 1000,
      message: 'Please lower your request rate :)',
    };
    server.use('*', RateLimit(baseRateLimitingOptions));
  }
}
