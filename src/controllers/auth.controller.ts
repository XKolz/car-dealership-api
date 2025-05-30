// src/controllers/auth.controller.ts
import { Request, Response } from "express";
import * as AuthService from "../services/auth.service";
import catchAsync from "../utils/catchAsync";

export const register = catchAsync(async (req: Request, res: Response) => {
  const manager = await AuthService.registerManager(req.body);
  res.json(manager);
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const token = await AuthService.loginManager(req.body);
  res.json({ token });
});
