"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalSocket = void 0;
var globalSocket = null;
exports.globalSocket = globalSocket;
const setGlobalToken = (socketIO) => {
    exports.globalSocket = globalSocket = socketIO;
};
exports.default = setGlobalToken;
//# sourceMappingURL=socketService.js.map