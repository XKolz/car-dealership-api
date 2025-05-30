// src/controllers/category.controller.ts
import Category from "../models/Category";
import { Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/successResponse";

export const getCategories = catchAsync(
  async (_req: Request, res: Response) => {
    const categories = await Category.find();
    successResponse(res, categories, "Categories fetched successfully");
  }
);
