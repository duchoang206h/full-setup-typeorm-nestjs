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
exports.UserSerializer = void 0;
const class_transformer_1 = require("class-transformer");
const entiry_serializer_1 = require("../common/serializer/entiry.serializer");
const board_serializer_1 = require("../board/board.serializer");
const graphql_1 = require("@nestjs/graphql");
let UserSerializer = class UserSerializer extends entiry_serializer_1.EntitySerializer {
};
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(() => graphql_1.Int),
    __metadata("design:type", Number)
], UserSerializer.prototype, "userId", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], UserSerializer.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Expose)(),
    (0, class_transformer_1.Exclude)({ toPlainOnly: true }),
    __metadata("design:type", String)
], UserSerializer.prototype, "password", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => board_serializer_1.BoardSerializer),
    __metadata("design:type", Array)
], UserSerializer.prototype, "boards", void 0);
UserSerializer = __decorate([
    (0, graphql_1.ObjectType)()
], UserSerializer);
exports.UserSerializer = UserSerializer;
//# sourceMappingURL=user.serializer.js.map