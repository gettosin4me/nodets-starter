"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const data_source_1 = __importDefault(require("../database/data.source"));
const newrelic_1 = __importDefault(require("newrelic"));
const Logger_1 = __importDefault(require("../core/Logger"));
const config_1 = require("../config");
data_source_1.default
    .initialize()
    .then(() => {
    Logger_1.default.info('Data source initialized successfully');
    const app = (0, express_1.default)();
    app.listen(config_1.config.get('port'), () => {
        Logger_1.default.info(`Server lauched successfully on port ${config_1.config.get('port')}`);
    });
}).catch((error) => {
    Logger_1.default.error('Error initializing data source', error);
    process.exit(1);
});
process.on('uncaughtException', (err, origin) => {
    newrelic_1.default.noticeError(err, { tag: origin });
});
//# sourceMappingURL=server.js.map