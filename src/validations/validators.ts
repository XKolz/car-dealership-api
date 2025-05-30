// src/validations/validators.ts
import { body } from "express-validator";

export const registerValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
];

export const loginValidator = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("password").notEmpty().withMessage("Password is required"),
];

export const carCreateValidator = [
  body("brand").notEmpty().withMessage("Brand is required"),
  body("model").notEmpty().withMessage("Model is required"),
  body("price").isNumeric().withMessage("Price must be a number"),
  body("available").isBoolean().withMessage("Available must be true or false"),
  body("category").isMongoId().withMessage("Category must be a valid Mongo ID"),
];

export const purchaseValidator = [
  body("customerId").isMongoId().withMessage("Valid customerId is required"),
  body("carId").isMongoId().withMessage("Valid carId is required"),
];
