// src/routes/index.ts

import express, { Router } from "express";
import authRoutes from "./auth.routes";
import carRoutes from "./car.routes";
import managerRoutes from "./manager.routes";
import customerRoutes from "./customer.routes";
import categoryRoutes from "./category.routes";

const router = Router();

const applyRouteWithPrefix = (
  router: Router,
  path: string,
  routeFn: (router: Router) => void
): void => {
  const prefixedRouter = express.Router(); // Create sub-router for that path
  routeFn(prefixedRouter); // Add route handlers to it
  router.use(path, prefixedRouter); // Mount under the prefix/path
};

applyRouteWithPrefix(router, "/auth", authRoutes);
applyRouteWithPrefix(router, "/cars", carRoutes);
applyRouteWithPrefix(router, "/managers", managerRoutes);
applyRouteWithPrefix(router, "/customers", customerRoutes);
applyRouteWithPrefix(router, "/categories", categoryRoutes);

export default router;
