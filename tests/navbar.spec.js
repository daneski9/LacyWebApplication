const { test, expect } = require('@playwright/test');

test('Navbar renders and links work', async ({ page }) => {
  // Navigate to your page
  await page.goto('http://localhost:3000/JulioJimenez/about'); // Replace with the actual URL of your app

  // Check if the Navbar is rendered
  const navbar = await page.waitForSelector('.navbar');
  expect(navbar).not.toBeNull();

  // Check if all navigation links are present
  const links = await navbar.$$('a');
  expect(links.length).toBe(7); // Update the number based on your actual links

  // Test each navigation link
  for (const link of links) {
    const linkText = await link.textContent();
    await testNavigationLink(page, link, linkText);
  }
});

async function testNavigationLink(page, link, linkText) {
  

  // Wait for the scrolling to complete
  await page.waitForTimeout(1000); // Adjust the wait time if necessary

  // Check if the page has scrolled to the top
  const scrollTop = await page.evaluate(() => window.scrollY);
  expect(scrollTop).toBe(0);

  // Add additional assertions or checks based on your application behavior
  // For example, you could check if the correct content is displayed after clicking the link
  console.log(`Test passed for ${linkText}`);
}
