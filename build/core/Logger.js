"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const config_1 = require("../config");
// Define your severity levels.
// With them, You can create log files,
// see or hide levels based on the running ENV.
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const level = () => {
    return config_1.config.get('isDev') ? 'debug' : 'warn';
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'white',
};
winston_1.default.addColors(colors);
const format = winston_1.default.format.combine(
// Add the message timestamp with the preferred format
winston_1.default.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), 
// Tell Winston that the logs must be colored
winston_1.default.format.colorize({ all: true }), 
// Define the format of the message showing the timestamp, the level and the message
winston_1.default.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`));
// Define which transports the logger must use to print out messages.
// In this example, we are using three different transports
const transports = [
    // Allow the use the console to print the messages
    new winston_1.default.transports.Console(),
    // Allow to print all the error level messages inside the error.log file
    new winston_1.default.transports.File({
        filename: 'logs/error.log',
        level: 'error',
    }),
    // Allow to print all the error message inside the all.log file
    // (also the error log that are also printed inside the error.log(
    new winston_1.default.transports.File({ filename: 'logs/all.log' }),
];
// Create the logger instance that has to be exported
// and used to log messages.
const Logger = winston_1.default.createLogger({
    level: level(),
    levels,
    format,
    transports,
});
exports.default = Logger;
//# sourceMappingURL=Logger.js.map