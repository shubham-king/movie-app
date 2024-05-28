// tests/movie-details.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Movie Details Page Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
    await page.fill('input[placeholder="Friends..."]', "barbie");
    await page.waitForTimeout(5000);
    await page.waitForSelector(".movie-item", { timeout: 20000 });
    await page.click(".movie-item:first-child a");
    await page.waitForSelector(".movie-details", { timeout: 20000 });
  });

  // Test for displaying movie details
  test.skip("should display movie details", async ({ page }) => {
    const title = await page.locator(".movie-details h1").innerText();
    console.log(`Movie title: ${title}`);
    await expect(title).not.toBeNull();
    await expect(page.locator("text=Release Date")).toBeVisible();
    await expect(page.locator("text=Runtime")).toBeVisible();
    await expect(page.locator("text=Director")).toBeVisible();
    await expect(page.locator("text=Writer")).toBeVisible();
    await expect(page.locator("text=Cast")).toBeVisible();
    await expect(page.locator("text=IMDb Rating")).toBeVisible();
    await expect(page.locator("text=Awards")).toBeVisible();
    await expect(page.locator("text=Box Office")).toBeVisible();
  });

  // Test for back button functionality
  test.skip("should navigate back to the previous page on clicking back button", async ({
    page,
  }) => {
    await page.click('button:has-text("Back")');
    await expect(page.locator('input[placeholder="Friends..."]')).toBeVisible({
      timeout: 10000,
    });
  });
});
