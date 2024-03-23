import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/house"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.get("/security/:id", controller.getSecurity)
router.post("/", controller.create)
router.put("/update", controller.update)
router.put("/updateMat", controller.updateMaterial)

export default router