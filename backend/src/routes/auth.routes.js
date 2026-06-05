import express from "express"
import authControllers from "../controllers/auth.controllers.js"
import Limiter from "../middleware/rateLimit/auth.rateLimit.js"

let router = express.Router()

//login 
router.post("/login",Limiter.authLimiter,authControllers.login)
// signup
router.post("/signup",Limiter.authLimiter,authControllers.signup)
// get me 
router.post("/getme",authControllers.getme)
//get all users
router.get("/getall",authControllers.getall)
export default router