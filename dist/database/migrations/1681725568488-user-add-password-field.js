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
exports.UserAddPasswordField1681725568488 = void 0;
const typeorm_1 = require("typeorm");
class UserAddPasswordField1681725568488 {
    constructor() {
        this.table = 'users';
        this.column = new typeorm_1.TableColumn({
            name: 'password',
            type: 'varchar',
            isNullable: false,
        });
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.addColumn(this.table, this.column);
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropColumn(this.table, this.column);
        });
    }
}
exports.UserAddPasswordField1681725568488 = UserAddPasswordField1681725568488;
//# sourceMappingURL=1681725568488-user-add-password-field.js.map