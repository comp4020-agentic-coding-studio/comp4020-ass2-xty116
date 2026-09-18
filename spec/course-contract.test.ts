import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  title: string;
  related?: string[];
  spec?: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: {
    code: string;
    title: string;
  };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string): ApiNode[] => api.nodes.filter((node) => node.type === type);
const weeks = (nodes: ApiNode[]): number[] =>
  nodes.map((node) => Number(node.meta?.week)).sort((a, b) => a - b);

describe("SLOP3255 course contract", () => {
  it("keeps the assigned digits and the course's specific identity", () => {
    expect(api.course.code).toBe("SLOP3255");
    expect(api.course.title).toBe("How to Hear the Universe");
  });

  it("publishes one lecture and one Listening Lab for every teaching week", () => {
    const expected = Array.from({ length: 12 }, (_, index) => index + 1);
    expect(weeks(byType("lectures"))).toEqual(expected);
    expect(weeks(byType("sessions"))).toEqual(expected);
  });

  it("gives every week a distinct question, data object and lab output", () => {
    const lectures = byType("lectures");
    const sessions = byType("sessions");
    const questions = lectures.map((node) => String(node.meta?.question ?? ""));
    const dataObjects = lectures.map((node) => String(node.meta?.dataObject ?? ""));

    expect(new Set(questions).size).toBe(12);
    expect(new Set(dataObjects).size).toBe(12);
    for (const lecture of lectures) {
      expect(String(lecture.meta?.question ?? "").length, lecture.id).toBeGreaterThan(20);
      expect(String(lecture.meta?.dataObject ?? "").length, lecture.id).toBeGreaterThan(5);
    }
    for (const session of sessions) {
      expect(String(session.meta?.output ?? "").length, session.id).toBeGreaterThan(10);
      expect(session.spec?.length, session.id).toBeGreaterThanOrEqual(3);
    }
  });

  it("links a distinct real deck from every lecture", () => {
    const slides = byType("lectures").map((node) => String(node.meta?.slides ?? ""));
    expect(slides).toHaveLength(12);
    expect(new Set(slides).size).toBe(12);
    for (const slidePath of slides) {
      expect(slidePath).toMatch(/^\/decks\/[a-z0-9-]+\/$/);
      const slug = slidePath.split("/").filter(Boolean).at(-1);
      const source = readFileSync(resolve(`src/decks/${slug}.deck.mdx`), "utf8");
      const slideCount = (source.match(/^---$/gm)?.length ?? 0) - 1;
      expect(slideCount, `${slug} needs enough material for a real lecture`).toBeGreaterThanOrEqual(8);
    }
  });

  it("uses four staged assessments whose weights total 100", () => {
    const assessments = byType("assessments");
    const total = assessments.reduce((sum, node) => sum + Number(node.meta?.weight ?? 0), 0);
    expect(assessments).toHaveLength(4);
    expect(total).toBe(100);
  });
});
