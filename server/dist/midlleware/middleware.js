"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = void 0;
const jwt = require('jsonwebtoken');
const isValid = (req, res, next) => {
    var _a;
    try {
        const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split('my_key ')[1];
        const decodedToken = jwt.verify(token, 'iLoveYou');
        const u_id = parseInt(decodedToken.u_id);
        if (!u_id) {
            res.status(403).json('Invalid user');
        }
        else {
            next();
        }
    }
    catch (_b) {
        res.status(401).json('Invalid request!');
    }
};
exports.isValid = isValid;
//# sourceMappingURL=middleware.js.map