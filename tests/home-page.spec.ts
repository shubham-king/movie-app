// tests/home-page.spec.ts
import { test, expect } from '@playwright/test';

test.describe('HomePage Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.waitForLoadState('networkidle'); // Wait for all network requests to finish
  });

  // Test for displaying the homepage with search input
  test('should display the homepage with search input', async ({ page }) => {
    await page.waitForTimeout(5000); // Wait additional time for the page to fully load

    // Debugging: log the HTML content of the page
    const content = await page.content();
    console.log('Page content:', content);

    // Debugging: check if the element exists
    const searchBarExists = await page.locator('input[placeholder="Friends..."]').count();
    console.log(`Search bar count: ${searchBarExists}`);

    if (searchBarExists === 0) {
      throw new Error('Search bar not found in the DOM');
    }

    await expect(page.locator('input[placeholder="Friends..."]')).toBeVisible({ timeout: 10000 });
  });

  // Test for displaying movie results after searching
  test('should display movie results after searching', async ({ page }) => {
    await page.waitForTimeout(5000); // Wait additional time for the page to fully load

    // Debugging: log the HTML content of the page
    const content = await page.content();
    console.log('Page content:', content);

    // Debugging: check if the element exists
    const searchBarExists = await page.locator('input[placeholder="Friends..."]').count();
    console.log(`Search bar count: ${searchBarExists}`);

    if (searchBarExists === 0) {
      throw new Error('Search bar not found in the DOM');
    }

    await page.fill('input[placeholder="Friends..."]', 'Batman');
    await page.press('input[placeholder="Friends..."]', 'Enter');
    await page.waitForTimeout(5000); // Wait for the search results to load
    await page.waitForSelector('.flex-col', { timeout: 20000 });
    const movies = await page.$$('.flex-col');
    console.log(`Movies found: ${movies.length}`);
    expect(movies.length).toBeGreaterThan(0);
  });
});
