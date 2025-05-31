// scripts/seed.ts
import dotenv from "dotenv";
import { connectDB } from "../config/db";
import Category from "../models/Category";

dotenv.config();

const categories = [
  { name: "Sedan" },
  { name: "SUV" },
  { name: "Truck" },
  { name: "Coupe" },
  { name: "Convertible" },
];

export const seed = async () => {
  try {
    await connectDB();

    const existing = await Category.countDocuments();
    if (existing > 0) {
      console.log("Categories already exist. Skipping seeding.");
      return;
    }

    const result = await Category.insertMany(categories);
    console.log("Seeded categories:", result);
  } catch (err) {
    console.error("Seeding error:", err);
  }
};

// Only run when executed directly
if (require.main === module) {
  seed().then(() => process.exit(0));
}
