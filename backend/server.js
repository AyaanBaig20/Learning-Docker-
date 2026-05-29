import app from "./src/app.js";
import connnectDB from "./src/config/db.js";
import dotenv from "dotenv"

dotenv.config()
app.listen(process.env.PORT,()=>{
    console.log("server is running");
})
connnectDB()