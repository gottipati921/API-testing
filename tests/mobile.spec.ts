import { test, expect, devices } from '@playwright/test';

test('mobile Automation', async ({ browser }) => {
    const context = await browser.newContext({ ...devices['iPhone 13 Pro Max'] });
    const page = await context.newPage();

    await page.goto('https://playwright.dev/', { waitUntil: 'domcontentloaded' });
    await expect(page).toHaveTitle(/Playwright/);
    await expect(page.locator('h1')).toContainText(/Playwright/);
    await page.screenshot({ path: 'screenshot.png', fullPage: true });

    await context.close();
});