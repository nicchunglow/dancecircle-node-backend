import request from "supertest";
import app from "./app";

describe("/", () => {
  it("should contain the home directory", async () => {
    const expectedDirectory = {
      0: "GET   /",
      "1": "POST /users/register",
      "2": "POST /users/login",
      "3": "GET /reports",
      "4": "GET /auth",
    };
    const { body: response } = await request(app).get("/");
    expect(response).toEqual(expectedDirectory);
  });
});
