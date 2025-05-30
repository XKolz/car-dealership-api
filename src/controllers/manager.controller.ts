// src/controllers/manager.controller.ts
import { Request, Response } from "express";
import * as ManagerService from "../services/manager.service";
import catchAsync from "../utils/catchAsync";
import { successResponse } from "../utils/successResponse";

export const getManagerProfile = catchAsync(
  async (req: Request, res: Response) => {
    const manager = await ManagerService.getManagerProfile(
      (req as any).user.id
    );
    successResponse(res, manager, "Manager profile fetched successfully");
  }
);
