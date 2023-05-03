import 'reflect-metadata';
import express from 'express';
import * as awilix from 'awilix';
import { loadControllers, scopePerRequest } from 'awilix-express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dataSource from '../database/data.source';
import morganMiddleware from '../middlewares/morgan.middleware';

import 'newrelic';
import newrelic from 'newrelic';
import logger from '../core/Logger';
import { config } from '../config';

export default async (container: awilix.AwilixContainer) => {
  dataSource
    .initialize()
    .then(() => {
      logger.info('Data source initialized successfully');

      const app = express();

      app.use(bodyParser.json({ limit: '10mb' }));
      app.use(bodyParser.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
      app.use(cors());
      app.use(morganMiddleware);

      // This will attach a scoped container on the context.
      app.use(scopePerRequest(container))

      app.use('/v1', loadControllers('../controllers/*.ts', { cwd: __dirname }))

      // catch 404 and forward to error handler
      app.get('/', (req, res) =>
        res.status(200).json({
          status: 200,
          message: 'Welcome to Consumer Rating API!',
        }),
      );

      app.all('*', (req, res) =>
        res.status(404).json({
          status: 404,
          error: 'Endpoint does not exist',
        }),
      );

      app.listen(config.get('port'), () => {
        logger.info(`Server lauched successfully on port ${config.get('port')}`);
      });
  }).catch((error: Error) => {
      logger.error('Error initializing data source', error);
      process.exit(1);
  });

  process.on('uncaughtException', (err, origin) => {
    newrelic.noticeError(err, {tag: origin});
  });
}