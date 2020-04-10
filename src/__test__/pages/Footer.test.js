import Footer from "../../pages/Footer";
import { data } from "../../utils/data";

describe("Card render", () => {
  test("Render card template", () => {
    expect(Footer(data).length).toBeGreaterThan(0);
  });
  test("Template content class", async () => {
    const className = "footer";
    expect(Footer(data)).toMatch(className);
  });
});
