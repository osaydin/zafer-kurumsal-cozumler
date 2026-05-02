import { describe, expect, it } from "vitest";
import { company, navItems, references, solutions } from "../data/site";

describe("site data", () => {
  it("contains exactly six solution groups", () => {
    expect(solutions).toHaveLength(6);
  });

  it("uses unique solution slugs", () => {
    const slugs = solutions.map((solution) => solution.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("keeps solution hrefs in sync with slugs", () => {
    for (const solution of solutions) {
      expect(solution.href).toBe(`/kurumsal-cozumler/${solution.slug}`);
    }
  });

  it("has images for all solution groups", () => {
    for (const solution of solutions) {
      expect(solution.image).toMatch(/^\/cozumler\/.+\.(png|jpg|jpeg|webp)$/);
    }
  });

  it("has updated core navigation pages", () => {
    expect(navItems.map((item) => item.href)).toEqual([
      "/",
      "/kurumsal",
      "/kurumsal-cozumler",
      "/referanslar",
      "/kataloglar",
      "/iletisim",
    ]);
  });

  it("contains reference companies", () => {
    expect(references.length).toBeGreaterThanOrEqual(15);
  });

  it("uses valid contact data", () => {
    expect(company.email).toContain("@");
    expect(company.phoneLink).toMatch(/^\+90\d{10}$/);
  });

  it("has Instagram configured", () => {
    expect(company.socials.instagram).toContain("instagram.com");
  });
});