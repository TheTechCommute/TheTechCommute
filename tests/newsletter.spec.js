import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');
})

test('signup form expects valid email', async ({ page }) => {
  const emailField = page.getByTestId("emailField");
  const subscribeButton = page.getByTestId("subscribeButton");
  const emailError = page.getByText("Please enter a valid email address.", { exact: true });

  await emailField.fill('not an email');
  await subscribeButton.click();

  await expect(emailError).toBeVisible();
});
