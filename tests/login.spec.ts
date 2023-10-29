import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/JulioJimenez/about');
  await page.getByRole('button', { name: 'Admin Login' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').fill('emailme.tq@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Password').fill('testings');
  await page.getByPlaceholder('Password').press('Enter');
  await page.getByRole('button', { name: 'LOGOUT' }).click();
});