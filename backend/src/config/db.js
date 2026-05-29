import mongoose from "mongoose";

async function connnectDB() {
  await mongoose.connect('mongodb://127.0.0.1:27017/CodeEditor');
}

export default connnectDB