// tests/home-page.spec.ts
import { test, expect } from "@playwright/test";

test.describe("HomePage Tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
    await page.waitForLoadState("networkidle"); // Wait for all network requests to finish
  });

  // Test for displaying the homepage with search input
  test("should display the homepage with search input", async ({ page }) => {
    await expect(
      page.locator('input[placeholder="Search for movies..."]')
    ).toBeVisible();
  });

  // Test for displaying movie results after searching
  test("should display movie results after searching", async ({ page }) => {
    await page.fill('input[placeholder="Search for movies..."]', "Marvel");
    await page.press('input[placeholder="Search for movies..."]', "Enter");
    await page.waitForSelector(".movie-list", { timeout: 20000 }); // Assuming .movie-list is the class for movie results
    const movieCount = await page.locator(".movie-list > div").count();
    console.log(`Movies found: ${movieCount}`);
    expect(movieCount).toBeGreaterThan(0);
  });
});
