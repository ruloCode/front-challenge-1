import resolveRoutes from "../../utils/resolveRoutes";

describe("Test resolve routes function", () => {
  test("resolve route", async () => {
    const route = resolveRoutes(1);
    expect(route).toEqual("/1");
  });
});
