import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


test('Verify top navigation elements on ICF homepage', async ({ page }) => {
  // Step 1: Navigate to ICF website
  await page.goto('https://www.icf.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Step 2: Verify top navigation menu items
  const headerNav = page.locator('header');
  await expect(headerNav.getByRole('link', { name: 'Industries' })).toBeVisible();
  console.log("Verified Industries menu");
  await expect(headerNav.getByRole('link', { name: 'Capabilities' })).toBeVisible();
    console.log("Verified Capabilities menu");

  await expect(headerNav.getByRole('link', { name: 'Insights' })).toBeVisible();
      console.log("Verified Insights menu");

  await expect(headerNav.getByRole('link', { name: 'Careers' })).toBeVisible();
        console.log("Verified Careers menu");

  await expect(headerNav.getByRole('link', { name: 'About' })).toBeVisible();
        console.log("Verified About menu");

  await expect(headerNav.getByRole('link', { name: 'Investors' })).toBeVisible();
  
        console.log("Verified Investors menu"); 
  await expect (page.getByAltText("ICF logo")).toBeVisible;
           console.log("Verified ICF logo"); 
});

test('Verify and click Pause Autoplay button', async ({ page }) => {
  await page.goto('https://www.icf.com/', {
    waitUntil: 'domcontentloaded'
  });

  // Locate button using aria-label (BEST locator)
  const pauseButton = page.getByRole('button', { name: 'pause autoplay' });

  // Verify visible
  await expect(pauseButton).toBeVisible();

  console.log('Pause autoplay button is visible');

  // Click button
  await pauseButton.click();

  console.log('Pause autoplay button clicked');
});