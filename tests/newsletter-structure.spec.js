import { test, expect } from '@playwright/test';

test('newsletter has one labeled email field, submit button and response container', async ({ page }) => {
  // Check the form independently of third-party scripts and without submitting email.
  await page.route('https://**/*', route => route.abort());
  await page.goto('http://localhost:8080/index.html');

  const form = page.locator('#mc-embedded-subscribe-form');
  await expect(form.locator('input[name="EMAIL"]')).toHaveCount(1);
  await expect(form.getByLabel('Email Address *', { exact: true })).toHaveCount(1);
  await expect(form.getByRole('button', { name: 'Subscribe', exact: true })).toHaveCount(1);
  await expect(form.locator('#mce-responses')).toHaveCount(1);
  await expect(form.locator('#mce-error-response')).toHaveCount(1);
  await expect(form.locator('#mce-success-response')).toHaveCount(1);
  await expect(form.locator('input[name="b_e9d20301d5f876587b37e041f_e969125eec"]')).toHaveCount(1);
});
