// src/routes/manager.routes.ts

import type { Router } from "express";
import { getManagerProfile } from "../controllers/manager.controller";
import { auth } from "../middleware/auth.middleware";

export default (router: Router) => {
  router.get("/me", auth, getManagerProfile);
};
