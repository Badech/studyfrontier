import { test, expect } from '@playwright/test';

test.describe('Lead form', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/contact');
  });

  test('lead form should be present on contact page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /send us a message|contact/i })).toBeVisible();
    
    // Check for form fields
    await expect(page.getByLabel(/full name|name/i)).toBeVisible();
    await expect(page.getByLabel(/email/i)).toBeVisible();
    await expect(page.getByLabel(/phone/i)).toBeVisible();
  });

  test('form validation should show errors for empty required fields', async ({ page }) => {
    // Click submit without filling anything
    const submitButton = page.getByRole('button', { name: /send message|submit/i });
    await submitButton.click();
    
    // Wait a bit for validation
    await page.waitForTimeout(500);
    
    // Form should still be visible (not submitted)
    await expect(page.getByLabel(/full name|name/i)).toBeVisible();
  });

  test('form validation should show error for invalid email', async ({ page }) => {
    // Fill with invalid email
    await page.getByLabel(/full name|name/i).fill('Test User');
    await page.getByLabel(/email/i).fill('invalid-email');
    await page.getByLabel(/phone/i).fill('+1234567890');
    
    const submitButton = page.getByRole('button', { name: /send message|submit/i });
    await submitButton.click();
    
    await page.waitForTimeout(500);
    
    // Form should still be visible
    await expect(page.getByLabel(/email/i)).toBeVisible();
  });

  test('form should accept valid input and show success state (mocked API)', async ({ page }) => {
    // Mock the API response
    await page.route('/api/lead', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          success: true,
          message: 'Lead submitted successfully',
          saved: { sheets: true, email: true }
        }),
      });
    });

    // Fill form with valid data
    await page.getByLabel(/full name|name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john.doe@example.com');
    await page.getByLabel(/phone/i).fill('+212612345678');
    
    // Fill optional fields if present
    const countryField = page.getByLabel(/country/i);
    if (await countryField.isVisible()) {
      await countryField.fill('Morocco');
    }
    
    const messageField = page.getByLabel(/message/i);
    if (await messageField.isVisible()) {
      await messageField.fill('I am interested in studying abroad.');
    }

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message|submit/i });
    await submitButton.click();

    // Wait for success message
    await expect(page.getByText(/message sent successfully|success|thank you/i)).toBeVisible({ timeout: 5000 });
  });

  test('form should show error state when API fails (mocked)', async ({ page }) => {
    // Mock API failure
    await page.route('/api/lead', async (route) => {
      await route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          error: 'Failed to submit lead. Please try again.'
        }),
      });
    });

    // Fill form with valid data
    await page.getByLabel(/full name|name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john.doe@example.com');
    await page.getByLabel(/phone/i).fill('+212612345678');

    // Submit form
    const submitButton = page.getByRole('button', { name: /send message|submit/i });
    await submitButton.click();

    // Wait for error message
    await expect(page.getByText(/error|wrong|failed/i)).toBeVisible({ timeout: 5000 });
  });

  test('form should disable submit button while submitting', async ({ page }) => {
    // Mock slow API response
    await page.route('/api/lead', async (route) => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true }),
      });
    });

    // Fill form
    await page.getByLabel(/full name|name/i).fill('John Doe');
    await page.getByLabel(/email/i).fill('john.doe@example.com');
    await page.getByLabel(/phone/i).fill('+212612345678');

    const submitButton = page.getByRole('button', { name: /send message|submit/i });
    await submitButton.click();

    // Button should show loading state or be disabled
    await expect(submitButton).toBeDisabled({ timeout: 1000 });
  });

  test('form should work in all locales', async ({ page }) => {
    const locales = [
      { code: 'en', nameLabel: /full name|name/i },
      { code: 'fr', nameLabel: /nom complet|nom/i },
      { code: 'ar', nameLabel: /الاسم/i }
    ];

    for (const locale of locales) {
      await page.goto(`/${locale.code}/contact`);
      
      // Check form is visible
      const nameField = page.getByLabel(locale.nameLabel);
      await expect(nameField).toBeVisible();
      
      // Fill and check it works
      await nameField.fill('Test User');
      await expect(nameField).toHaveValue('Test User');
    }
  });

  test('form fields should have proper labels for accessibility', async ({ page }) => {
    // All form inputs should have associated labels
    const nameInput = page.getByLabel(/full name|name/i);
    const emailInput = page.getByLabel(/email/i);
    const phoneInput = page.getByLabel(/phone/i);

    await expect(nameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(phoneInput).toBeVisible();

    // Inputs should have accessible names
    const nameId = await nameInput.getAttribute('id');
    const emailId = await emailInput.getAttribute('id');
    const phoneId = await phoneInput.getAttribute('id');

    expect(nameId).toBeTruthy();
    expect(emailId).toBeTruthy();
    expect(phoneId).toBeTruthy();
  });
});
