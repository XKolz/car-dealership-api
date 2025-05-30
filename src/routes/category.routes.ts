// src/routes/category.routes.ts
import type { Router } from "express";
import { getCategories } from "../controllers/category.controller";

export default (router: Router) => {
  router.get("/", getCategories);
};
