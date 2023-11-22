


const { test, expect } = require('@playwright/test');

test('Login functionality', async ({ page }) => {
  // Open the login page
  await page.goto('http://localhost:3000/JulioJimenez/login');

  // Fill in the email and password
  await page.fill('[placeholder="Email"]', 'jimenezeric530@gmail.com');
  await page.fill('[placeholder="Password"]', 'zipzoom');

  // Submit the form
  await Promise.all([
    page.click('button[type="submit"]'),
    page.waitForNavigation(), // Wait for navigation
    page.waitForLoadState(), // Wait for load state
  ]);

  // Check if the navigation goes to the expected dashboard URL
  expect(page.url()).toBe('http://localhost:3000/JulioJimenez/dashboard');

  
});


test('Forgot Password link', async ({ page }) => {
 // Open the login page
 await page.goto('http://localhost:3000/JulioJimenez/login');


 // Click on the "Forgot Password" link
 await page.click('button:has-text("Forgot Password")');


 // Check if the navigation goes to the expected reset password URL
 expect(page.url()).toBe('http://localhost:3000/JulioJimenez/resetpassword');


});


test('Back link', async ({ page }) => {
 // Open the login page
 await page.goto('http://localhost:3000/JulioJimenez/login');


 // Click on the "Back" link
 await page.click('button:has-text("Back")');


 // Check if the navigation goes to the expected about page URL
 expect(page.url()).toBe('http://localhost:3000/JulioJimenez/about');


});





