// gPORTFOLIO PAGE TESTS: 

const { test, expect } = require('@playwright/test');

test('portfolio page loads correct amount of images from firebase', async ({ page }) => {
  await page.goto('http://localhost:3000/JulioJimenez/portfolio');
  const images = page.locator('img.box.img');
  await expect(images).toHaveCount(16); // first page loads 16 images
});

test('images are visible', async ({ page }) => {
  await page.goto('http://localhost:3000/JulioJimenez/portfolio');
  await page.waitForSelector('.box img');
  const image = page.locator('.box img').first();
  await expect(image).toBeVisible();
});

test('pagination controls work correctly', async ({ page }) => {
    await page.goto('http://localhost:3000/JulioJimenez/portfolio');
    const firstImageSrc = await page.locator('.box img').first().getAttribute('src');
    await page.click('text=Next');
    await page.waitForLoadState('load');
    const firstImageSrcAfterPagination = await page.locator('.box img').first().getAttribute('src');
    expect(firstImageSrc).not.toBe(firstImageSrcAfterPagination);
  });

test('clicking an image opens it in a modal', async ({ page }) => {
  await page.goto('http://localhost:3000/JulioJimenez/portfolio');
  await page.click('.box img');
  const modal = page.locator('.selected-image-modal-page');
  await expect(modal).toBeVisible();
  const modalImage = modal.locator('img.modal-image');
  await expect(modalImage).toHaveAttribute('src', expect.stringContaining('firebase'));
});
