// src/routes/customer.routes.ts
import type { Router } from "express";
import {
  registerCustomer,
  purchaseCar,
  getCustomerCars,
} from "../controllers/customer.controller";
import {
  purchaseValidator,
  registerValidator,
} from "../validations/validators";
import { validateRequest } from "../middleware/validateRequest";

export default (router: Router) => {
  router.post("/", registerValidator, validateRequest, registerCustomer);
  router.post("/purchase", purchaseValidator, validateRequest, purchaseCar);
  router.get("/:id/cars", getCustomerCars);
};
