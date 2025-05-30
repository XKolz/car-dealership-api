// src/utils/successResponse.ts
import { Response } from "express";

export const successResponse = (
  res: Response,
  data: any,
  message = "Request successful",
  statusCode = 200
) => {
  return res.status(statusCode).json({
    status: "success",
    message,
    data,
  });
};
