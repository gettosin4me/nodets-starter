"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const config_1 = require("../config");
const model_entity_1 = __importDefault(require("../entities/base/model.entity"));
const category_entity_1 = require("../entities/categories/category.entity");
console.log('urioooooo---->', config_1.config.get('db'));
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    applicationName: config_1.config.get('appName'),
    useUTC: true,
    url: config_1.config.get('db.uri'),
    connectTimeoutMS: config_1.config.get('db.connectTimeout'),
    poolSize: config_1.config.get('db.maxConnections'),
    logging: config_1.config.get('isDev') ? 'all' : ['query', 'error'],
    synchronize: config_1.config.get('isDev'),
    entities: [
        model_entity_1.default,
        category_entity_1.Category,
    ],
    extra: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});
//# sourceMappingURL=data-source.js.map