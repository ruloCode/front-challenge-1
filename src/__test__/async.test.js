import getData from "../utils/getData";

describe("Test async/Await function", () => {
  test("API get request", async () => {
    await getData().then((data) => {
      expect(Object.keys(data).length).toBeGreaterThan(0);
    });
  });
});
