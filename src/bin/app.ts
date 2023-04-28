import 'reflect-metadata';
import express from 'express';
import dataSource from '../database/data-source';

import newrelic from 'newrelic';
import logger from '../core/Logger';

dataSource
  .initialize()
  .then(() => {
    logger.info('Data source initialized successfully');

    // const app = express();
}).catch((error: Error) => {
    logger.error('Error initializing data source', error);
    process.exit(1);
});

process.on('uncaughtException', (err, origin) => {
  newrelic.noticeError(err, {tag: origin});
});