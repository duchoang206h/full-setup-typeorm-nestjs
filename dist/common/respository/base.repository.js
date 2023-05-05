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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const typeorm_1 = require("typeorm");
const entiry_serializer_1 = require("../serializer/entiry.serializer");
const entity_constant_1 = require("../constants/entity.constant");
const class_transformer_1 = require("class-transformer");
class BaseRepository extends typeorm_1.Repository {
    constructor(entity, manager, queryRunner) {
        super(entity, manager, queryRunner);
    }
    paginate(filter, select, options = { skip: 0, limit: entity_constant_1.MAX_RETURN_RECORD }, relations = [], transformOptions = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const { skip, limit } = options;
            const [result, total] = yield this.findAndCount({
                where: filter,
                select,
                relations,
                skip: skip,
                take: (0, entity_constant_1.getMaxRecordReturn)(limit),
            });
            return {
                total,
                result: this.transformMany(result, transformOptions),
                skip,
                limit: (0, entity_constant_1.getMaxRecordReturn)(limit),
            };
        });
    }
    transform(entity, transformOptions = {}) {
        return (0, class_transformer_1.plainToClass)(entiry_serializer_1.EntitySerializer, entity, transformOptions);
    }
    transformMany(entities, transformOptions = {}) {
        return entities.map((e) => this.transform(e, transformOptions));
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map