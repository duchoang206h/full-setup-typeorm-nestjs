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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CardEntity = void 0;
const typeorm_1 = require("typeorm");
const list_entity_1 = require("../list/list.entity");
const custom_entity_1 = require("../common/entity/custom.entity");
let CardEntity = class CardEntity extends custom_entity_1.CustomEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], CardEntity.prototype, "cardId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CardEntity.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], CardEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => list_entity_1.ListEntity, (list) => list.cards, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: 'listId',
        referencedColumnName: 'listId',
    }),
    __metadata("design:type", list_entity_1.ListEntity)
], CardEntity.prototype, "list", void 0);
CardEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'cards',
    })
], CardEntity);
exports.CardEntity = CardEntity;
//# sourceMappingURL=card.entity.js.map