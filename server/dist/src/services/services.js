"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateToken = void 0;
const jwt = require("jsonwebtoken");
const SECRET = "iLoveYou";
const generateToken = (u_id, u_email) => {
    const token = jwt.sign({
        u_id,
        u_email,
    }, SECRET, {
        expiresIn: "365d"
    });
    return token;
};
exports.generateToken = generateToken;
//# sourceMappingURL=services.js.map