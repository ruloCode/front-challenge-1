import Card from "../../pages/Card";

describe("Card render", () => {
  test("Render card template", async () => {
    expect(Card("title", "src", "content").length).toBeGreaterThan(0);
  });
  test("Template content class", async () => {
    const className = "card-container";
    expect(Card("title", "src", "content")).toMatch(className);
  });
});
