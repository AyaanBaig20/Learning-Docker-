import express from "express"
import AuthRoutes from "./routes/auth.routes.js"
import cookieParser from "cookie-parser"

let app = express()
app.use(express.json())
app.use(cookieParser())

// routes
app.use("/api/auth",AuthRoutes)

export default app