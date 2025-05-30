// src/app.ts

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db";
import apiRoutes from "./routes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

// Mount all /api routes
app.use("/api", apiRoutes);

// Global error handler
app.use(errorHandler);

export default app;
