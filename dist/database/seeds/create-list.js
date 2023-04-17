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
const list_entity_1 = require("../../list/list.entity");
const card_entity_1 = require("../../card/card.entity");
const board_entity_1 = require("../../board/board.entity");
class CreateLists {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            const lists = [
                {
                    name: 'Monday',
                    cards: [
                        {
                            content: 'Learn English',
                            order: 1,
                        },
                        {
                            content: 'Learn Nodejs',
                            order: 2,
                        },
                    ],
                    order: 1,
                    board: {
                        boardId: 1,
                    },
                },
                {
                    name: 'Monday',
                    cards: [
                        {
                            content: 'Learn English',
                            order: 1,
                        },
                        {
                            content: 'Learn Reactjs',
                            order: 2,
                        },
                    ],
                    order: 2,
                    board: {
                        boardId: 1,
                    },
                },
            ].map((l) => {
                const cards = l.cards.map((c) => card_entity_1.CardEntity.create({ content: c.content, order: c.order }));
                const list = new list_entity_1.ListEntity();
                list.name = l.name;
                list.order = l.order;
                list.board = board_entity_1.BoardEntity.create({ boardId: l.board.boardId });
                list.cards = cards;
                return list;
            });
            yield connection.getRepository(list_entity_1.ListEntity).save(lists);
            /* .createQueryBuilder()
              .insert()
              .into(ListEntity)
              .values()
              .execute(); */
        });
    }
}
exports.default = CreateLists;
//# sourceMappingURL=create-list.js.map