import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { lectureGuides } from "../src/data/lecture-guides";

const expectedWeeks = Array.from({ length: 12 }, (_, index) => `week-${String(index + 1).padStart(2, "0")}`);

describe("the course remains useful beyond its timetable", () => {
  it("gives every lecture a distinct field guide", () => {
    expect(Object.keys(lectureGuides).sort()).toEqual(expectedWeeks);

    for (const [week, guide] of Object.entries(lectureGuides)) {
      expect(guide.outcomes.length, `${week} needs three observable outcomes`).toBeGreaterThanOrEqual(3);
      expect(guide.example.steps.length, `${week} needs a worked method`).toBeGreaterThanOrEqual(3);
      expect(guide.example.values.length, `${week} needs inspectable teaching values`).toBeGreaterThanOrEqual(6);
      expect(guide.check.prompt.length, `${week} needs a real checkpoint`).toBeGreaterThan(30);
      expect(guide.check.explanation.length, `${week} needs an explained answer`).toBeGreaterThan(60);
      expect(guide.source.href, `${week} needs a primary source`).toMatch(/^https:\/\//);
    }
  });

  it("ships a reusable field guide rather than advice trapped in prose", () => {
    const guide = readFileSync(resolve("public/resources/sonification-field-guide.md"), "utf8");
    expect(guide).toContain("## Data passport");
    expect(guide).toContain("## Mapping ledger");
    expect(guide).toContain("## Listening test");
    expect(guide).toContain("## Release audit");
  });
});
