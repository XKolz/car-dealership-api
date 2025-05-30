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

const seed = async () => {
  try {
    await connectDB();

    await Category.deleteMany({});
    console.log("🧹 Cleared existing categories");

    const result = await Category.insertMany(categories);
    console.log("✅ Seeded categories:", result);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seed();
