import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/JulioJimenez/resetpassword');
  await page.getByPlaceholder('Enter your email').click();
  await page.getByPlaceholder('Enter your email').fill('emailme.tq@gmail.com');
  await page.getByRole('button', { name: 'Send Password Reset Email' }).click();
  await page.getByRole('button', { name: 'Back to Login' }).click();
});