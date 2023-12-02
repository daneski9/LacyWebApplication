//load test and expect modules from playwright package
const { test, expect } = require('@playwright/test');

test.describe('Lounge Page Tests', () => {

   test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:3000');
   });

   test.afterEach(async ({page}) => {
      await page.close();
   });
   
   test('Should display the title and artists', async ({page}) => {
       await expect(page).toHaveTitle('Lacy St. Art Lounge');
       await page.waitForSelector('h1.title.is-1'); // wait for title to appear
       await page.waitForSelector('h2.title-2'); // wait for subtitle to appear
   });

   test('Should display all artist containers', async ({page}) => {
       //check if the artists are displayed
       const artists = await page.$$('.artists-container > div');
       expect(artists.length).toBe(5); // 5 artists total
   });

   test('Should display all artist images', async ({page}) => {
       const artistImages = await page.$$('.artists-container img');

       for (const artistImage of artistImages) {       // loop through pictures 
        const altText = await artistImage.getAttribute('alt');

       expect(altText).toBeTruthy(); //make sure the pictures are populated 
        }
   });

   test('Should verify the instgram links are present', async ({page}) => {
        //check if the links to socials are present 
       const artistProfileLinks = await page.$$('.socials');
       expect(artistProfileLinks.length).toBe(4); // 4 instagram links
     
   });
});
