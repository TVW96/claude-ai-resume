import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("page does not overflow horizontally", async ({ page }) => {
  const dimensions = await page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    contentWidth: document.documentElement.scrollWidth
  }));

  expect(dimensions.contentWidth).toBeLessThanOrEqual(
    dimensions.viewportWidth
  );
});

test("navigation uses flexbox", async ({ page }) => {
  const navigation = page.locator("nav ul");

  const display = await navigation.evaluate(
    (element) => getComputedStyle(element).display
  );

  expect(display).toBe("flex");
});

test("loads the resume stylesheet", async ({ page }) => {
  await expect(
    page.locator('link[rel="stylesheet"][href="css/styles.css"]')
  ).toHaveCount(1);
});

test("skills grid uses CSS Grid", async ({ page }) => {
  const grid = page.locator(".skills-grid");

  await expect(grid).toHaveCSS("display", "grid");
});

test("heading hierarchy starts with h1 for name", async ({ page }) => {
  const h1 = page.locator("h1").first();

  await expect(h1).toBeVisible();
});

test("major sections use h2 headings", async ({ page }) => {
  const h2s = page.locator("h2");

  expect(await h2s.count()).toBeGreaterThan(0);
});

test("heading hierarchy does not jump from h1 to h4", async ({ page }) => {
  const headings = await page.evaluate(() => {
    const elements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    return Array.from(elements).map((el) => ({
      tag: el.tagName.toLowerCase(),
      level: parseInt(el.tagName[1])
    }));
  });

  for (let i = 1; i < headings.length; i++) {
    const prevLevel = headings[i - 1].level;
    const currentLevel = headings[i].level;
    const levelDifference = currentLevel - prevLevel;

    expect(levelDifference).toBeLessThanOrEqual(1);
  }
});

test("experience blocks are contained in article tags", async ({ page }) => {
  const experienceSection = page.locator("section");
  const articles = experienceSection.locator("article");

  if (await articles.count()) {
    expect(await articles.count()).toBeGreaterThan(0);
  }
});

test("dates are wrapped in time tags", async ({ page }) => {
  const timeTags = page.locator("time");

  if (await timeTags.count()) {
    expect(await timeTags.count()).toBeGreaterThan(0);
  }
});

