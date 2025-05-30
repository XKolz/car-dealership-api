// src/services/car.service.ts
import Car from "../models/Car";
import Category from "../models/Category";

export const createCar = async (data: any) => {
  const categoryExists = await Category.exists({ _id: data.category });
  if (!categoryExists) {
    throw new Error("Category does not exist");
  }

  return Car.create(data);
};

export const getFilteredCars = async (queryParams: any) => {
  const {
    brand,
    model,
    minPrice,
    maxPrice,
    available,
    page = 1,
    limit = 10,
  } = queryParams;

  const query: any = {};
  if (brand) query.brand = brand;
  if (model) query.model = model;
  if (available !== undefined) query.available = available === "true";
  if (minPrice || maxPrice) query.price = {};
  if (minPrice) query.price.$gte = +minPrice;
  if (maxPrice) query.price.$lte = +maxPrice;

  const skip = (+page - 1) * +limit;

  const [cars, total] = await Promise.all([
    Car.find(query).populate("category").skip(skip).limit(+limit),
    Car.countDocuments(query),
  ]);

  return {
    items: cars,
    meta: {
      total,
      page: +page,
      limit: +limit,
      totalPages: Math.ceil(total / +limit),
    },
  };
};
