"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const model_entity_1 = __importDefault(require("../base/model.entity"));
let Category = class Category extends model_entity_1.default {
    toJSON() {
        return Object.assign(Object.assign({}, this), { createdAt: undefined, updatedAt: undefined });
    }
};
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'name',
        nullable: false,
    }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'slug',
        nullable: false,
    }),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'icon',
        nullable: true,
    }),
    __metadata("design:type", String)
], Category.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'active',
        default: true,
        type: 'boolean',
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], Category.prototype, "active", void 0);
Category = __decorate([
    (0, typeorm_1.Entity)('categories')
], Category);
exports.Category = Category;
//# sourceMappingURL=category.entity.js.map