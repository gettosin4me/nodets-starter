"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix = __importStar(require("awilix"));
const utils_1 = require("./utils");
const config_1 = require("../config");
const Logger_1 = __importDefault(require("../core/Logger"));
const data_source_1 = __importDefault(require("../database/data.source"));
// create container
const container = awilix.createContainer();
// register config
container.register('config', awilix.asValue(config_1.config));
// register logger
container.register('Logger', awilix.asValue(Logger_1.default));
if (!container.resolve('configs').get('db.uri')) {
    container.resolve('logger').error('Database URI must be specified in environment variable');
    process.exit(0);
}
// register data source
container.register('Datasource', awilix.asValue(data_source_1.default));
// load all files in entities
container.loadModules(['../entities/*.ts'], {
    cwd: __dirname,
    formatName: (0, utils_1.formatNameWithGroup)('Entity'),
    resolverOptions: {
        lifetime: awilix.Lifetime.SINGLETON,
    },
});
// load all files in controllers
container.loadModules(['../controllers/*.ts'], {
    cwd: __dirname,
    formatName: (0, utils_1.formatNameWithGroup)('Controller'),
});
// load all files in data access
container.loadModules(['../data-access/*.ts'], {
    cwd: __dirname,
    formatName: (0, utils_1.formatNameWithGroup)('DataAccess'),
});
// load all files in services
container.loadModules(['../services/*.ts'], {
    cwd: __dirname,
    formatName: (0, utils_1.formatNameWithGroup)('Service'),
});
exports.default = container;
//# sourceMappingURL=container.js.map