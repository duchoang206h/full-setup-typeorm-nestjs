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
const user_entity_1 = require("../../user/user.entity");
class CreateUsers {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(user_entity_1.UserEntity)
                .values([
                {
                    email: 'duchoang206h@gmail.com',
                    password: '$2a$10$Qw1CNh8US.1h.zkQfyrj1u9PEt59qYTQ67ENQ9xnCM.2zFF7exod6', //123456
                },
            ])
                .execute();
        });
    }
}
exports.default = CreateUsers;
//# sourceMappingURL=create-user.js.map