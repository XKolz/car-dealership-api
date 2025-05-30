// src/services/auth.service.ts
import Manager from "../models/Manager";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface AuthPayload {
  email: string;
  password: string;
  name?: string;
}

export const registerManager = async ({
  name,
  email,
  password,
}: AuthPayload) => {
  const existing = await Manager.findOne({ email });
  if (existing) throw new Error("Email already in use");

  const hash = await bcrypt.hash(password, 10);
  return Manager.create({ name, email, password: hash });
};

export const loginManager = async ({ email, password }: AuthPayload) => {
  const manager = await Manager.findOne({ email });
  if (!manager || !manager.password) throw new Error("Manager not found");

  const isMatch = await bcrypt.compare(password, manager.password);
  if (!isMatch) throw new Error("Invalid credentials");

  return jwt.sign({ id: manager._id }, process.env.JWT_SECRET!, {
    expiresIn: "1d",
  });
};
