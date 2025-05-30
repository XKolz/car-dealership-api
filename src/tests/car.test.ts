import request from "supertest";
import app from "../app";

describe("GET /api/cars", () => {
  it("should return cars", async () => {
    const res = await request(app).get("/api/cars");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
