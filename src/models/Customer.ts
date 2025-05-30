import mongoose from "mongoose";

const CustomerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  purchasedCars: [{ type: mongoose.Schema.Types.ObjectId, ref: "Car" }],
});

export default mongoose.model("Customer", CustomerSchema);
