"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardModule = void 0;
const common_1 = require("@nestjs/common");
const board_resolver_1 = require("./board.resolver");
const date_scalar_1 = require("../common/scalars/date.scalar");
const board_repository_1 = require("./board.repository");
const typeorm_1 = require("@nestjs/typeorm");
const board_entity_1 = require("./board.entity");
const list_module_1 = require("../list/list.module");
const card_module_1 = require("../card/card.module");
let BoardModule = class BoardModule {
};
BoardModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([board_entity_1.BoardEntity]), list_module_1.ListModule, card_module_1.CardModule],
        providers: [board_resolver_1.BoardsResolver, date_scalar_1.DateScalar, board_repository_1.BoardRepository],
    })
], BoardModule);
exports.BoardModule = BoardModule;
//# sourceMappingURL=board.module.js.map