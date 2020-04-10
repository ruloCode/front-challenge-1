import { sum } from "../utils/testing/math";

describe("Math calc", () => {
  test("Pruebas de sumas", () => {
    expect(sum(1, 1)).toBe(2);
  });
});
