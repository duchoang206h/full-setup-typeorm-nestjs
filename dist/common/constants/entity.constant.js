"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMaxRecordReturn = exports.MAX_RETURN_RECORD = void 0;
exports.MAX_RETURN_RECORD = 1000;
const getMaxRecordReturn = (limit) => {
    return limit > exports.MAX_RETURN_RECORD ? exports.MAX_RETURN_RECORD : limit;
};
exports.getMaxRecordReturn = getMaxRecordReturn;
//# sourceMappingURL=entity.constant.js.map