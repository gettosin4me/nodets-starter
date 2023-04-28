import { DataSource } from 'typeorm';

import { config } from '../config';
import Model from '../entities/base/model.entity';
import { Category } from '../entities/categories/category.entity'
console.log('urioooooo---->', config.get('db'))
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
      Category,
    ],
    extra: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
});