"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const convict_1 = __importDefault(require("convict"));
const app_1 = require("../constants/app");
const configData = {
    appName: app_1.APP_NAME,
    port: Number(process.env.APP_PORT) || 55100,
    isDev: app_1.APP_NAME !== 'production',
    db: {
        uri: process.env.DATABASE_URI,
        connectTimeout: Number(process.env.DATABASE_CONNECT_TIMEOUT) || 30000,
        maxConnections: Number(process.env.DATABASE_MAXIMUM_CONNECTIONS) || 1,
    }
};
exports.config = (0, convict_1.default)(configData).validate({ allowed: 'strict' });
//# sourceMappingURL=index.js.map