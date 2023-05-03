import convict from 'convict'; 
import {ConfigInterface} from './type';
import { APP_NAME } from '../constants/app';

const configData: ConfigInterface = {
    appName: APP_NAME,
    port: Number(process.env.APP_PORT) || 55100,
    isDev: APP_NAME !== 'production',
    db: {
        uri: <string>process.env.DATABASE_URI,
        connectTimeout: Number(process.env.DATABASE_CONNECT_TIMEOUT) || 30000,
        maxConnections: Number(process.env.DATABASE_MAXIMUM_CONNECTIONS) || 1,
    }
}

export const config = convict(configData).validate({ allowed: 'strict' });