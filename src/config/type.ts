export interface ConfigInterface {
    appName: string;
    port: number;
    db: DbConfig;
    isDev: boolean;
}

interface DbConfig {
    uri: string;
    connectTimeout: number;
    maxConnections: number;
}