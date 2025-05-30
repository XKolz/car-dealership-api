// src/routes/car.routes.ts
import type { Router } from "express";
import { auth } from "../middleware/auth.middleware";
import { createCar, getCars } from "../controllers/car.controller";
import { carCreateValidator } from "../validations/validators";
import { validateRequest } from "../middleware/validateRequest";

export default (router: Router) => {
  router.post("/", auth, carCreateValidator, validateRequest, createCar);
  router.get("/", getCars);
};
