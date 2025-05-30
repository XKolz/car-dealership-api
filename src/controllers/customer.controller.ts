// src/controllers/customer.controller.ts

import { Request, Response } from "express";
import * as CustomerService from "../services/customer.service";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/successResponse";

export const registerCustomer = catchAsync(
  async (req: Request, res: Response) => {
    const customer = await CustomerService.registerCustomer(req.body);
    successResponse(res, customer, "Customer registered successfully", 201);
  }
);

export const purchaseCar = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.purchaseCar(req.body);
  successResponse(res, result, "Car purchased successfully");
});

export const getCustomerCars = catchAsync(
  async (req: Request, res: Response) => {
    const cars = await CustomerService.getCustomerCars(req.params.id);
    successResponse(res, cars, "Customer's cars retrieved successfully");
  }
);
