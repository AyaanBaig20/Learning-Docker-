import mongoose from "mongoose";

async function connnectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/CodeEditor')
  .then(()=>{
    console.log("db is connected");
  })
  .catch((error)=>{
    console.log("db not connected");
    
  })
}

export default connnectDB