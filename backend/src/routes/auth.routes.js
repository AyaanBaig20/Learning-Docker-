import express from "express"
import authControllers from "../controllers/auth.controllers.js"
import Limiter from "../middleware/rateLimit/auth.rateLimit.js"

let router = express.Router()

router.post("/login",Limiter.authLimiter,authControllers.login)
router.post("/signup",Limiter.authLimiter,authControllers.signup)
router.post("/getme",authControllers.getme)

export default router