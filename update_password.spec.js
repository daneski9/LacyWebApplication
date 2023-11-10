const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('http://localhost:3001/JulioJimenez/login');
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('testing@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('12345678');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'UPDATE PASSWORD' }).click();
  await page.getByPlaceholder('New Password').click();
  await page.getByPlaceholder('New Password').fill('123456');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'LOGOUT' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('testing@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'UPDATE PASSWORD' }).click();
  await page.getByPlaceholder('New Password').click();
  await page.getByPlaceholder('New Password').fill('12345678');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Back' }).click();
  await page.getByRole('button', { name: 'LOGOUT' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();