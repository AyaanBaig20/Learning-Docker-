import express from "express"
import authControllers from "../controllers/auth.controllers.js"

let router = express.Router()

router.post("/login",authControllers.login)
router.post("/signup",authControllers.signup)
router.post("/getme",authControllers.getme)

export default router