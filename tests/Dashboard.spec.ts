import { test, expect } from '@playwright/test';

test.describe('Dashboard Page Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to the page and log in before each test
    await page.goto('http://localhost:3000/JulioJimenez/dashboard');

    // Fill in login credentials
    await page.fill('[placeholder="Email"]', 'jimenezeric530@gmail.com');
    await page.fill('[placeholder="Password"]', 'zipzoom');

    // Click the submit button
    await page.click('button:has-text("Submit")');

    // Wait for the login to complete and check for a successful login indicator
    await page.waitForSelector('.admin-page-title:has-text("Newest Inquiry")');
  });

  test('Verify "Newest" Table Contents', async ({ page }) => {

    const tableSelector = '.table-title';
    const firstRowSelector = '.fnameLname:first-child';
    const openButtonSelector = '.open-btn:first-child';
    const modalContentSelector = '.modal-content';
  
    // Wait for the table to load
    await page.waitForSelector(tableSelector);
  
    // Check if there is at least one row in the table
    const isTableEmpty = await page.$(`${tableSelector}:first-child`) === null;
  
    if (!isTableEmpty) {
      // Get the text content of the first cell in the second row
      const firstCellText = await page.innerText(firstRowSelector);
  
      // Click the "Open" button in the first row
      await page.click(openButtonSelector);
  
      // Wait for the modal to open
      await page.waitForSelector('.modal');
  
      // Get the text content of the modal
      const modalContent = await page.innerText(modalContentSelector);
  
      // Verify that the modal's content matches the clicked cell's content
      expect(modalContent).toContain(firstCellText);
  
      // Close the modal
      await page.getByRole('button', { name: 'Close' }).click();
    } else {
      // Add a message or assertion for an empty table
      expect(isTableEmpty).toBe(false);
    }
  });

  test('Verify "In-Progress" Table Contents', async ({ page }) => {
    
    const tableSelector = '.table-title';
    const firstRowSelector = '.fnameLname:first-child';
    const openButtonSelector = '.open-btn:first-child';
    const modalContentSelector = '.modal-content';
  
    // Click the "Completed" button
    await page.click('button:has-text("In-Progress")');
    
    // Wait for the table to load

    await page.waitForSelector(tableSelector);
  
    // Check if there is at least one row in the table
    const isTableEmpty = await page.$(`${tableSelector}:first-child`) === null;
  
    if (!isTableEmpty) {
      // Get the text content of the first cell in the second row
      const firstCellText = await page.innerText(firstRowSelector);
  
      // Click the "Open" button in the first row
      await page.click(openButtonSelector);
  
      // Wait for the modal to open
      await page.waitForSelector('.modal');
  
      // Get the text content of the modal
      const modalContent = await page.innerText(modalContentSelector);
  
      // Verify that the modal's content matches the clicked cell's content
      expect(modalContent).toContain(firstCellText);
  
      // Close the modal
      await page.getByRole('button', { name: 'Close' }).click();
    } else {
      // Add a message or assertion for an empty table
      expect(isTableEmpty).toBe(false);
    }
  });

  test('Verify "Completed" Table Contents', async ({ page }) => {
        
    const tableSelector = '.table-title';
    const firstRowSelector = '.fnameLname:first-child';
    const openButtonSelector = '.open-btn:first-child';
    const modalContentSelector = '.modal-content';
  
    // Click the "Completed" button
    await page.click('button:has-text("Completed")');
    
    // Wait for the table to load

    await page.waitForSelector(tableSelector);
  
    // Check if there is at least one row in the table
    const isTableEmpty = await page.$(`${tableSelector}:first-child`) === null;
  
    if (!isTableEmpty) {
      // Get the text content of the first cell in the second row
      const firstCellText = await page.innerText(firstRowSelector);
  
      // Click the "Open" button in the first row
      await page.click(openButtonSelector);
  
      // Wait for the modal to open
      await page.waitForSelector('.modal');
  
      // Get the text content of the modal
      const modalContent = await page.innerText(modalContentSelector);
  
      // Verify that the modal's content matches the clicked cell's content
      expect(modalContent).toContain(firstCellText);
  
      // Close the modal
      await page.getByRole('button', { name: 'Close' }).click();
    } else {
      // Add a message or assertion for an empty table
      expect(isTableEmpty).toBe(false);
    }
  });


  test('Open Modal and Verify Content in Newest', async ({ page }) => {
    // Wait for the table to load (adjust the selector accordingly)
    await page.waitForSelector('.table-title');

    // Check if there is at least one row in the table (adjust the selector accordingly)
    const isTableEmpty = await page.$('.table-title:first-child') === null;

    if (!isTableEmpty) {
      // Get the text content of the first cell in the second row (adjust the selector accordingly)
      const firstCellText = await page.innerText('.fnameLname:first-child');

      // Click the "Open" button in the first row
      await page.click('.open-btn:first-child');

      // Wait for the modal to open (adjust the selector accordingly)
      await page.waitForSelector('.modal');

      // Get the text content of the modal (adjust the selector accordingly)
      const modalContent = await page.innerText('.modal-content'); // Adjust the class name accordingly

      // Verify that the modal's content matches the clicked cell's content
      expect(modalContent).toContain(firstCellText);

      // Close the modal (adjust the selector accordingly)
      
      await page.getByRole('button', { name: 'Close' }).click();
    } else {
      // Add a message or assertion for an empty table
      expect(isTableEmpty).toBe(false);
    }
  });

  test('Open Modal and Verify Content in In-Progress', async ({ page }) => {

    // Click the "In-Progress" button
    await page.click('button:has-text("In-Progress")');

    // Wait for the table to load (adjust the selector accordingly)
    await page.waitForSelector('.table-title');

    // Check if there is at least one row in the table (adjust the selector accordingly)
    const isTableEmpty = await page.$('.table-title:first-child') === null;

    if (!isTableEmpty) {
      // Get the text content of the first cell in the second row (adjust the selector accordingly)
      const firstCellText = await page.innerText('.fnameLname:first-child');

      // Click the "Open" button in the first row
      await page.click('.open-btn:first-child');

      // Wait for the modal to open (adjust the selector accordingly)
      await page.waitForSelector('.modal');

      // Get the text content of the modal (adjust the selector accordingly)
      const modalContent = await page.innerText('.modal-content'); // Adjust the class name accordingly

      // Verify that the modal's content matches the clicked cell's content
      expect(modalContent).toContain(firstCellText);

      // Close the modal (adjust the selector accordingly)
      
      await page.getByRole('button', { name: 'Close' }).click();
    } else {
      // Add a message or assertion for an empty table
      expect(isTableEmpty).toBe(false);
    }
  });
  
  test('Open Modal and Verify Content in Completed', async ({ page }) => {

    // Click the "In-Completed" button
    await page.click('button:has-text("Completed")');

    // Wait for the table to load (adjust the selector accordingly)
    await page.waitForSelector('.table-title');

    // Check if there is at least one row in the table (adjust the selector accordingly)
    const isTableEmpty = await page.$('.table-title:first-child') === null;

    if (!isTableEmpty) {
      // Get the text content of the first cell in the second row (adjust the selector accordingly)
      const firstCellText = await page.innerText('.fnameLname:first-child');

      // Click the "Open" button in the first row
      await page.click('.open-btn:first-child');

      // Wait for the modal to open (adjust the selector accordingly)
      await page.waitForSelector('.modal');

      // Get the text content of the modal (adjust the selector accordingly)
      const modalContent = await page.innerText('.modal-content'); // Adjust the class name accordingly

      // Verify that the modal's content matches the clicked cell's content
      expect(modalContent).toContain(firstCellText);

      // Close the modal (adjust the selector accordingly)
      
      await page.getByRole('button', { name: 'Close' }).click();
    } else {
      // Add a message or assertion for an empty table
      expect(isTableEmpty).toBe(false);
    }
  });

  test('Add Portfolio Image', async ({ page }) => {
    // Click "Remove Image From Portfolio"
  await page.click('button:has-text("Remove Image From Portfolio")');

  // Confirm that the portfolio grid is displayed
  await page.waitForSelector('.portfolioGrid');

  // Wait for the portfolio grid to load
  const portfolioGridLoading = await page.isVisible('.loader-container');
  if (portfolioGridLoading) {
    await page.waitForSelector('.loader-container', { state: 'hidden' });
  }

  // Get the count of images before adding a new image
  const initialImageCount = await page.$$eval('.portfolioImage', (images) => images.length);

  // Add Portfolio Image(s)
  const imagePath = './src/components/images/teamlogo.png'; 
  await page.setInputFiles('#addPortfolioImages', [imagePath]);

  const alert = await page.waitForEvent('dialog');
  expect(alert.type()).toBe('alert');
  expect(alert.message()).toBe('Image(s) uploaded successfully');
  await alert.accept();

  // Wait for the portfolio grid to update
  await page.waitForSelector('.portfolioGrid img');

  // Get the count of images after adding a new image
  const updatedImageCount = await page.$$eval('.portfolioImage', (images) => images.length);

  // Verify that the count of images is incremented by 1
  expect(updatedImageCount).toBe(initialImageCount + 1);
  });

  
});



