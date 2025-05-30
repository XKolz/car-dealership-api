import request from "supertest";
import app from "../app";

describe("Auth Routes", () => {
  const testManager = {
    name: "Test Manager",
    email: "testmanager@example.com",
    password: "password123",
  };

  it("should register a new manager", async () => {
    const res = await request(app).post("/api/auth/register").send(testManager);

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("email", testManager.email);
  });

  it("should log in a manager and return a token", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: testManager.email,
      password: testManager.password,
    });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });
});
