/*
Services:
https://playwright.dev/docs/test-assertions
QUICK START GUIDE:
npm i -D @playwright/test
npx playwright install
npx playwright test tests/Services.spec.js  //to run tests for this file
npx playwright test tests/Services.spec.js -g "images are visible"  //to run a specific test within this file
*/
const { test, expect } = require("@playwright/test");

test("Testing inquiry button redirection, services", async () => {
  const { chromium } = require("playwright");

  (async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the initial page
    await page.goto("http://localhost:3000/JulioJimenez/services");

    // Click on the "services-item" object
    await page.click("your-css-selector-for-services-item");

    // Wait for navigation to finish
    await page.waitForNavigation();

    // Get the current URL after the click
    const currentURL = page.url();

    // Check if the URL matches the expected redirected page
    if (currentURL === "http://localhost:3000/JulioJimenez/inquiry") {
      console.log("Redirection successful. Test Passed!");
    } else {
      console.log("Redirection failed. Test Failed.");
    }

    await browser.close();
  })();
});

test("Testing image loading, services", async () => {
  const { chromium } = require("playwright");

  async function testImageCount() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    // Navigate to the specified page
    await page.goto("http://localhost:3000/JulioJimenez/services");

    // Wait for all images to load
    await page.waitForLoadState("load");

    // Get all image elements on the page
    const images = await page.$$("img");

    // Check the count of loaded images
    if (images.length > 4) {
      console.log(`Test Passed: ${images.length} images loaded on the page.`);
    } else {
      console.log(`Test Failed: ${images.length} images found on the page.`);
    }

    await browser.close();
  }

  testImageCount();
});
