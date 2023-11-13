/*
Services:
https://playwright.dev/docs/test-assertions
QUICK START GUIDE:
npm i -D @playwright/test
npx playwright install
npx playwright test tests/About.spec.js  //to run tests for this file
npx playwright test tests/About.spec.js -g "images are visible"  //to run a specific test within this file
*/
const { test, expect } = require("@playwright/test");

test('Verify redirection on clicking "about-btn" aka book now button, about', async () => {
  const { chromium } = require("playwright");

  (async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:3000/JulioJimenez/about");

    // Clicking on the "BOOK NOW" button
    await page.click('[control-id="BOOK NOW"]');

    // Wait for navigation to finish
    await page.waitForNavigation();

    // Get the current URL after clicking
    const currentURL = page.url();

    // Check if the URL matches the expected redirection URL
    const expectedURL = "http://localhost:3000/JulioJimenez/inquiry";
    if (currentURL === expectedURL) {
      console.log("Redirection successful!");
    } else {
      console.log("Redirection failed!");
    }

    await browser.close();
  })();
});

test('Verify redirection on clicking "contact-btn" aka contact us button, about', async () => {
  const { chromium } = require("playwright");

  (async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:3000/JulioJimenez/about");

    // Clicking on the "CONTACT US" button
    await page.click('[control-id="CONTACT US"]');

    // Wait for navigation to finish
    await page.waitForNavigation();

    // Get the current URL after clicking
    const currentURL = page.url();

    // Check if the URL matches the expected redirection URL
    const expectedURL = "http://localhost:3000/JulioJimenez/contact";
    if (currentURL === expectedURL) {
      console.log("Redirection successful!");
    } else {
      console.log("Redirection failed!");
    }

    await browser.close();
  })();
});
