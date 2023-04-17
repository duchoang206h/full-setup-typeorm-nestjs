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
const board_entity_1 = require("../../board/board.entity");
class CreateBoards {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(board_entity_1.BoardEntity)
                .values([
                {
                    name: 'Board 01',
                    user: {
                        userId: 1,
                    },
                },
            ])
                .execute();
        });
    }
}
exports.default = CreateBoards;
//# sourceMappingURL=create-board.js.map