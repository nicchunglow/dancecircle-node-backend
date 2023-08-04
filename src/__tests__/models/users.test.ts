import User from "../../models/users.model";

jest.mock("../../models/users.model", () => ({
  create: jest.fn(),
}));

describe("User model test", () => {
  it("should create a new user", async () => {
    const userData = {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
    };

    const mockUser = { ...userData, id: 1 };
    (User.create as jest.Mock).mockResolvedValue(mockUser);

    const newUser = await User.create(userData);

    expect(User.create).toHaveBeenCalledWith(userData);

    expect(newUser).toEqual(mockUser);
  });
});
