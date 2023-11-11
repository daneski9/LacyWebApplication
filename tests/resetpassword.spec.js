const { test, expect } = require('@playwright/test');

test.describe('Reset Password', () => {
  test.beforeEach(async ({ page}) => {
    await page.goto('http://localhost:3000/JulioJimenez/resetpassword');
  });

  test('is a valid email', async ({ page }) => {
    const emailInput = await page.getByPlaceholder('Enter your email');
    await emailInput.fill('test@example.com');
    const isValidEmail = await emailInput.evaluate((input) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(input.value);
    });

    expect(isValidEmail).toBe(true);
  });

  test('email sends', async ({ page }) => {
    await page.getByPlaceholder('Enter your email').click();
    await page.getByPlaceholder('Enter your email').fill('test@example.com');
    await page.getByRole('button', { name: 'Send Password Reset Email' }).click();
    await page.getByRole('button', { name: 'Back to Login' }).click();
  });

  test('invalid email', async ({ page }) => {
    const emailInput = await page.getByPlaceholder('Enter your email');
    await emailInput.fill('test');
    await page.getByRole('button', { name: 'Send Password Reset Email' }).click();
    const errorMessage = await page.waitForSelector('text=Please enter an email.')
  });
});