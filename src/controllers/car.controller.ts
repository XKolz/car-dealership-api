// src/controllers/car.controller.ts

import { Request, Response } from "express";
import * as CarService from "../services/car.service";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/successResponse";

export const createCar = catchAsync(async (req: Request, res: Response) => {
  const car = await CarService.createCar(req.body);
  successResponse(res, car, "Car created successfully", 201);
});

export const getCars = catchAsync(async (req: Request, res: Response) => {
  const cars = await CarService.getFilteredCars(req.query);
  successResponse(res, cars, "Cars fetched successfully");
});
