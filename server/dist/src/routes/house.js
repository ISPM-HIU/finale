"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const house_1 = __importDefault(require("../controllers/house"));
const router = express_1.default.Router();
router.get("/", house_1.default.getAll);
router.get("/:id", house_1.default.getOne);
router.get("/security/:id", house_1.default.getSecurity);
router.post("/", house_1.default.create);
router.put("/update", house_1.default.update);
router.put("/updateMat", house_1.default.updateMaterial);
exports.default = router;
//# sourceMappingURL=house.js.map