"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const list_entity_1 = require("./list.entity");
const list_repository_1 = require("./list.repository");
const list_resolver_1 = require("./list.resolver");
const card_module_1 = require("../card/card.module");
let ListModule = class ListModule {
};
ListModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([list_entity_1.ListEntity]), card_module_1.CardModule],
        providers: [list_repository_1.ListRepository, list_resolver_1.ListResolver],
        exports: [list_repository_1.ListRepository],
    })
], ListModule);
exports.ListModule = ListModule;
//# sourceMappingURL=list.module.js.map