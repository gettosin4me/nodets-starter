"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const awilix_express_1 = require("awilix-express");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const data_source_1 = __importDefault(require("../database/data.source"));
const morgan_middleware_1 = __importDefault(require("../middlewares/morgan.middleware"));
require("newrelic");
const newrelic_1 = __importDefault(require("newrelic"));
const Logger_1 = __importDefault(require("../core/Logger"));
const config_1 = require("../config");
exports.default = (container) => __awaiter(void 0, void 0, void 0, function* () {
    data_source_1.default
        .initialize()
        .then(() => {
        Logger_1.default.info('Data source initialized successfully');
        const app = (0, express_1.default)();
        app.use(body_parser_1.default.json({ limit: '10mb' }));
        app.use(body_parser_1.default.urlencoded({ limit: '10mb', extended: true, parameterLimit: 50000 }));
        app.use((0, cors_1.default)());
        app.use(morgan_middleware_1.default);
        // This will attach a scoped container on the context.
        app.use((0, awilix_express_1.scopePerRequest)(container));
        app.use('/v1', (0, awilix_express_1.loadControllers)('../controllers/*.ts', { cwd: __dirname }));
        // catch 404 and forward to error handler
        app.get('/', (req, res) => res.status(200).json({
            status: 200,
            message: 'Welcome to Consumer Rating API!',
        }));
        app.all('*', (req, res) => res.status(404).json({
            status: 404,
            error: 'Endpoint does not exist',
        }));
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
});
//# sourceMappingURL=server.js.map