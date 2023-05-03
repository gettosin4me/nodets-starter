"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNameWithGroup = void 0;
const path_1 = __importDefault(require("path"));
const formatNameWithGroup = (group) => ((filePath) => {
    const fileName = path_1.default.basename(filePath, path_1.default.extname(filePath));
    const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    const capitalizedFileName = (fileName
        .split('-')
        .map((string) => capitalize(string))
        .join(''));
    return `${capitalizedFileName}${group}`;
});
exports.formatNameWithGroup = formatNameWithGroup;
//# sourceMappingURL=utils.js.map