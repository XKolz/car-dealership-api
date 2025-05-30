import request from "supertest";
import app from "../app";

describe("Customer Routes", () => {
  let customerId: string;

  it("should create a new customer", async () => {
    const res = await request(app).post("/api/customers").send({
      name: "Jane Customer",
      email: "jane@example.com",
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("_id");
    customerId = res.body._id;
  });

  it("should return 404 for non-existent customer when getting cars", async () => {
    const fakeId = "60ddc973d1125c0004d7b45b";
    const res = await request(app).get(`/api/customers/${fakeId}/cars`);

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("message", "Customer not found");
  });
});
