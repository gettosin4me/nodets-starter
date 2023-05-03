import { DataSource } from 'typeorm';

import { config } from '../config';
import Model from '../entities/base/model.entity';
import CategoryEntity from '../entities/categories/category.entity'

export default new DataSource({
    type: 'postgres',
    applicationName: config.get('appName') as string,
    useUTC: true,
    url: config.get('db.uri') as string,
    connectTimeoutMS: config.get('db.connectTimeout') as number,
    poolSize: config.get('db.maxConnections') as number,
    logging: config.get('isDev') ? 'all' : ['query', 'error'],
    synchronize: config.get('isDev') as boolean,
    entities: [
      Model,
      CategoryEntity,
    ],
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
});