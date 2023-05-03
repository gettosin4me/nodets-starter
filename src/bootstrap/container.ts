import * as awilix from 'awilix';

import { formatNameWithGroup } from './utils';
import { config } from '../config';
import logger from '../core/Logger';
import Datasource from '../database/data.source';

// create container
const container = awilix.createContainer();

// register config
container.register('config', awilix.asValue(config));

// register logger
container.register('Logger', awilix.asValue(logger));

if (!container.resolve('config').get('db.uri')) {
    container.resolve('logger').error('Database URI must be specified in environment variable');
    process.exit(0);
}

// register data source
container.register('Datasource', awilix.asValue(Datasource));

// load all files in entities
container.loadModules(
    ['../entities/**/*.ts'],
    {
        cwd: __dirname,
        formatName: formatNameWithGroup('Entity'),
        resolverOptions: {
            register: awilix.asValue,
            lifetime: awilix.Lifetime.SINGLETON,
        },
    }
);

// load all files in data access
container.loadModules(
    ['../data-access/*.ts'],
    {
        cwd: __dirname,
        formatName: formatNameWithGroup('DataAccess'),
    }
);

// load all files in services
container.loadModules(
    ['../repositories/*.ts'],
    {
        cwd: __dirname,
        formatName: formatNameWithGroup('Repository'),
    }
);

// load all files in services
container.loadModules(
    ['../services/*.ts'],
    {
        cwd: __dirname,
        formatName: formatNameWithGroup('Service'),
    }
);

export default container;
