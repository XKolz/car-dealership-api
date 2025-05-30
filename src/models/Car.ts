import mongoose from "mongoose";

const CarSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  available: Boolean,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});

export default mongoose.model("Car", CarSchema);
