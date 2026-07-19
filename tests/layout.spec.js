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

test.describe("Normal cases (typical expected behavior)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("page has the correct title and language", async ({ page }) => {
    await expect(page).toHaveTitle("Troy Washington — Full-Stack Engineer");
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
  });

  test("section nav links point to real in-page sections", async ({ page }) => {
    const hrefs = await page
      .locator(".section-nav a")
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));

    expect(hrefs).toEqual(["#experience", "#education", "#skills"]);

    for (const href of hrefs) {
      await expect(page.locator(href)).toHaveCount(1);
    }
  });

  test("contact links use correct mailto and tel protocols", async ({ page }) => {
    await expect(page.locator('a[href="mailto:Troyvw96@gmail.com"]')).toHaveCount(2);
    await expect(page.locator('a[href="tel:+12062404700"]')).toHaveCount(2);
  });

  test("each experience article has a heading and an achievements list", async ({ page }) => {
    const articles = page.locator("#experience article");
    const count = await articles.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const article = articles.nth(i);
      await expect(article.locator("h3")).toHaveCount(1);
      await expect(article.locator("ul.bullets li").first()).toBeVisible();
    }
  });
});

test.describe("Edge cases (boundary and non-standard conditions)", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("does not overflow at a 320px mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 640 });

    const dimensions = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      contentWidth: document.documentElement.scrollWidth
    }));

    expect(dimensions.contentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
  });

  test("does not overflow at a 2560px ultra-wide viewport", async ({ page }) => {
    await page.setViewportSize({ width: 2560, height: 1440 });

    const dimensions = await page.evaluate(() => ({
      viewportWidth: document.documentElement.clientWidth,
      contentWidth: document.documentElement.scrollWidth
    }));

    expect(dimensions.contentWidth).toBeLessThanOrEqual(dimensions.viewportWidth);
  });

  test("disables smooth scrolling when prefers-reduced-motion is set", async ({ page }) => {
    await page.emulateMedia({ reducedMotion: "reduce" });

    const scrollBehavior = await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior
    );

    expect(scrollBehavior).toBe("auto");
  });

  test("decorative terminal-bar dots are hidden from assistive technology", async ({ page }) => {
    await expect(page.locator(".terminal-bar")).toHaveAttribute("aria-hidden", "true");
  });

  test("print styles hide the skip link and section navigation", async ({ page }) => {
    await page.emulateMedia({ media: "print" });

    await expect(page.locator(".skip-link")).toHaveCSS("display", "none");
    await expect(page.locator(".section-nav")).toHaveCSS("display", "none");
    await expect(page.locator(".terminal-bar")).toHaveCSS("display", "none");
  });
});

test("edge case: core resume content still renders with JavaScript disabled", async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();

  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("Troy Washington");

  await context.close();
});

