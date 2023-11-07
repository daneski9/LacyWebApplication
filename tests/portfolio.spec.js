/*
PORTFOLIO PAGE TESTS:
https://playwright.dev/docs/test-assertions
QUICK START GUIDE:
npm i -D @playwright/test
npx playwright install
npx playwright test tests/portfolio.spec.js  //to run tests for this file
npx playwright test tests/portfolio.spec.js -g "images are visible"  //to run a specific test within this file
*/
const { test, expect } = require('@playwright/test');

test.describe('Portfolio Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // nav to the page before each test
    await page.goto('http://localhost:3000/JulioJimenez/portfolio');
  });

  test('portfolio page loads correct amount of images from firebase', async ({ page }) => {
    const images = page.locator('img.box.img');
    await expect(images).toHaveCount(16); // first page loads 16 images
  });

  test('images are visible', async ({ page }) => {
    await page.waitForSelector('.box img');
    const image = page.locator('.box img').first();
    await expect(image).toBeVisible();
  });

  test('pagination controls work correctly', async ({ page }) => {
      const firstImageSrc = await page.locator('.box img').first().getAttribute('src');
      await page.click('text=Next');
      await page.waitForLoadState('load');
      const firstImageSrcAfterPagination = await page.locator('.box img').first().getAttribute('src');
      expect(firstImageSrc).not.toBe(firstImageSrcAfterPagination);
    });

  test('clicking an image opens it in a modal to make bigger', async ({ page }) => {
    await page.click('.box img');
    const modal = page.locator('.selected-image-modal-page');
    await expect(modal).toBeVisible();
    const modalImage = modal.locator('img.modal-image');
    await expect(modalImage).toHaveAttribute('src', expect.stringContaining('firebase'));
  });

  test('images are sorted by date-modified in descending order', async ({ page }) => {
    
    // select all images and get their 'data-date-modified' attribute
    const imageDates = await page.$$eval('.box img', images => 
      images.map(img => img.getAttribute('data-date-modified'))
    );

    // ensure the dates are in descending order (most recent first)
    for (let i = 0; i < imageDates.length - 1; i++) {
      const date1 = new Date(imageDates[i]);
      const date2 = new Date(imageDates[i + 1]);

      const dayMonth1 = date1.getDate() + date1.getMonth() * 31; // month value is 0-indexed; multiply by 31 to ensure it outweighs the day value
      const dayMonth2 = date2.getDate() + date2.getMonth() * 31;

      // compare the day and month values
      await expect(dayMonth1).toBeGreaterThanOrEqual(dayMonth2);
    }
  });

  test('navigating images in the modal works correctly', async ({ page }) => {
    
    // open the first image in a modal
    await page.click('.box img');
    const modalImage = page.locator('.selected-image-modal-page img.modal-image');
    await expect(modalImage).toBeVisible();
    
    // store the src of the first image for later comparison
    const firstImageSrc = await modalImage.getAttribute('src');

    // click the right arrow to navigate to the next image
    await page.click('.selected-image-modal-page .right-arrow');
    const secondImageSrc = await modalImage.getAttribute('src');
    expect(firstImageSrc).not.toBe(secondImageSrc);

    // click the left arrow to navigate back to the first image
    await page.click('.selected-image-modal-page .left-arrow');
    const thirdImageSrc = await modalImage.getAttribute('src');
    expect(thirdImageSrc).toBe(firstImageSrc);
  });

});