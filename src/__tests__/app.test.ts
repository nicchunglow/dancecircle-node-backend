import request from "supertest";
import app from "../app";

describe("/", () => {
  it("should contain the home directory", async () => {
    const expectedDirectory = {
      0: "GET   /",
    };
    const { body: response } = await request(app).get("/");
    expect(response).toEqual(expectedDirectory);
  });
});
