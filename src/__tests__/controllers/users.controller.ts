import User from "@/src/models/users.model";
import { getUsers } from "@/src/controllers/users.controller";

// Mock User dependency
jest.mock("../../models/users.model.ts");

describe("Users Controller", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return an array of users", async () => {
    const mockUsers = [
      { id: 1, name: "User 1" },
      { id: 2, name: "User 2" },
    ];
    (User.findAll as jest.Mock).mockResolvedValue(mockUsers);

    const result = await getUsers();

    expect(result).toEqual(mockUsers);
    expect(User.findAll).toHaveBeenCalledTimes(1);
  });

  it("should return an empty array when User.findAll() returns an empty array", async () => {
    const mockEmptyUsers: any[] = [];
    (User.findAll as jest.Mock).mockResolvedValue(mockEmptyUsers);

    const result = await getUsers();

    expect(result).toEqual(mockEmptyUsers);
    expect(User.findAll).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if User.findAll() rejects with an error", async () => {
    const errorMessage = "Error fetching users";
    (User.findAll as jest.Mock).mockRejectedValue(new Error(errorMessage));

    try {
      await getUsers();
    } catch (error: any) {
      expect(error.message).toBe(errorMessage);
      expect(User.findAll).toHaveBeenCalledTimes(1);
    }
  });
});
