import { test, expect } from '@playwright/test';

test('should display list of movies', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('input[placeholder="Search"]', 'Batman');
  await page.press('input[placeholder="Search"]', 'Enter');
  await page.waitForSelector('.movie-list');
  const movies = await page.$$('.movie-item');
  expect(movies.length).toBeGreaterThan(0);
});

test('should display movie details when clicked', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await page.fill('input[placeholder="Search"]', 'Batman');
  await page.press('input[placeholder="Search"]', 'Enter');
  await page.waitForSelector('.movie-list');
  await page.click('.movie-item:first-child');
  await page.waitForSelector('.movie-details');
  const title = await page.textContent('.movie-title');
  expect(title).toBeDefined();
});
