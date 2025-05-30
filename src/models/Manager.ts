import mongoose from "mongoose";

const ManagerSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
});

export default mongoose.model("Manager", ManagerSchema);
