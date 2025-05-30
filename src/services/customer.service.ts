// src/services/customer.service.ts
import Customer from "../models/Customer";
import Car from "../models/Car";

interface RegisterPayload {
  name: string;
  email: string;
}

interface PurchasePayload {
  customerId: string;
  carId: string;
}

export const registerCustomer = async ({ name, email }: RegisterPayload) => {
  return Customer.create({ name, email });
};

export const purchaseCar = async ({ customerId, carId }: PurchasePayload) => {
  const customer = await Customer.findById(customerId);
  const car = await Car.findById(carId);

  if (!customer || !car) {
    throw new Error("Customer or Car not found");
  }

  customer.purchasedCars.push(car._id);
  await customer.save();

  return {
    message: "Car purchased successfully",
    customer,
  };
};

export const getCustomerCars = async (customerId: string) => {
  const customer = await Customer.findById(customerId).populate(
    "purchasedCars"
  );

  if (!customer) {
    throw new Error("Customer not found");
  }

  return customer.purchasedCars;
};
