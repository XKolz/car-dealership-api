// src/services/manager.service.ts
import Manager from "../models/Manager";

export const getManagerProfile = async (managerId: string) => {
  const manager = await Manager.findById(managerId).select("-password");

  if (!manager) {
    throw new Error("Manager not found");
  }

  return manager;
};
