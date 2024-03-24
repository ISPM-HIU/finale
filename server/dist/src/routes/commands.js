"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const commands_1 = __importDefault(require("../controllers/commands"));
const router = express_1.default.Router();
router.get("/", commands_1.default.getAll);
router.get("/:id", commands_1.default.getOne);
router.post("/", commands_1.default.create);
router.delete("/:id", commands_1.default.delete);
exports.default = router;
//# sourceMappingURL=commands.js.map