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
exports.ListEntity = void 0;
const typeorm_1 = require("typeorm");
const custom_entity_1 = require("../common/entity/custom.entity");
const board_entity_1 = require("../board/board.entity");
const card_entity_1 = require("../card/card.entity");
let ListEntity = class ListEntity extends custom_entity_1.CustomEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ListEntity.prototype, "listId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ListEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], ListEntity.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => board_entity_1.BoardEntity, (board) => board.lists, { onDelete: 'CASCADE' }),
    (0, typeorm_1.JoinColumn)({
        name: 'boardId',
        referencedColumnName: 'boardId',
    }),
    __metadata("design:type", board_entity_1.BoardEntity)
], ListEntity.prototype, "board", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => card_entity_1.CardEntity, (card) => card.list, {
        onDelete: 'CASCADE',
        cascade: true,
    }),
    __metadata("design:type", Array)
], ListEntity.prototype, "cards", void 0);
ListEntity = __decorate([
    (0, typeorm_1.Entity)({
        name: 'lists',
    })
], ListEntity);
exports.ListEntity = ListEntity;
//# sourceMappingURL=list.entity.js.map