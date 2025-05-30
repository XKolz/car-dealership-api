// src/routes/auth.routes.ts
import type { Router } from "express";
import { login, register } from "../controllers/auth.controller";
import { loginValidator, registerValidator } from "../validations/validators";
import { validateRequest } from "../middleware/validateRequest";

export default (router: Router) => {
  router.post("/login", loginValidator, validateRequest, login);
  router.post("/register", registerValidator, validateRequest, register);
};
