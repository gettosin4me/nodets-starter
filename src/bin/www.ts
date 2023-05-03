import server from './server';
import logger from '../core/Logger';
import container from '../bootstrap/container';

(async () => {
    try {
        await server(container);
    } catch (error) {
        logger.error('Error initializing data source', error);
        process.exit(1);
    }
})();