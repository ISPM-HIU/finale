import express from "express"
import { isValid } from "../../midlleware/middleware"
import controller from "../controllers/commands"

const router = express.Router()

router.get("/", controller.getAll)
router.get("/:id", controller.getOne)
router.post("/", controller.create)
router.delete("/:id", controller.delete)

export default router