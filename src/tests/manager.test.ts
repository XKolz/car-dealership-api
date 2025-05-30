import request from "supertest";
import app from "../app";

describe("Manager Profile Route", () => {
  let token: string;

  beforeAll(async () => {
    await request(app).post("/api/auth/register").send({
      name: "Manager A",
      email: "managera@example.com",
      password: "pass1234",
    });

    const login = await request(app).post("/api/auth/login").send({
      email: "managera@example.com",
      password: "pass1234",
    });

    token = login.body.token;
  });

  it("should fetch the manager profile with a valid token", async () => {
    const res = await request(app)
      .get("/api/managers/me")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("email", "managera@example.com");
  });

  it("should fail to fetch manager profile without token", async () => {
    const res = await request(app).get("/api/managers/me");

    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("message", "Unauthorized");
  });
});
