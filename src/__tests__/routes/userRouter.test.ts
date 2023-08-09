import request from "supertest";
import express from "express";
import usersRouter from "@/src/routes/users.route";
import * as UserController from "@/src/controllers/users.controller";

const app = express();
app.use("/", usersRouter); // Mount the router in the Express app

describe("Users Route Test", () => {
  it("should respond with a list of users", async () => {
    const response = await request(app).get("/");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(expect.arrayContaining([])); // Update with your expected response format
  });

  it("should handle errors gracefully", async () => {
    jest.spyOn(UserController, "getUsers").mockRejectedValue(new Error("Test error"));

    const response = await request(app).get("/");

    expect(response.status).toBe(500);
  });
});
