import express from "express";
import AuthRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import userModel from "./models/user.models.js";

let app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // React frontend
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

// routes
app.use("/api/auth", AuthRoutes);

export default app;