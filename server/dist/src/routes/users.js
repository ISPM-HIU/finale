"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../controllers/users"));
const router = express_1.default.Router();
router.get("/", users_1.default.getAll);
router.get("/:u_id", users_1.default.getOne);
router.get("/email/:u_email", users_1.default.getByEmail);
router.post("/", users_1.default.create);
router.post("/login", users_1.default.getLogin);
router.post("/search", users_1.default.search);
router.put("/", users_1.default.update);
router.delete("/:u_id", users_1.default.delete);
exports.default = router;
//# sourceMappingURL=users.js.map