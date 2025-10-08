import { test, expect } from '@playwright/test';

test.describe('Homepage E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/BGS|Gebäudeservice/i);
  });

  test('should display navigation bar', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(page.getByText('BGS Gebäudeservice')).toBeVisible();
  });

  test('should navigate to services via dropdown', async ({ page }) => {
    // Hover over Services
    await page.getByRole('button', { name: /Services/i }).hover();

    // Wait for dropdown to appear
    await expect(page.getByText('PREMIUM')).toBeVisible();

    // Click on a service
    await page.getByRole('link', { name: /Privatjet-Reinigung/i }).click();

    // Verify navigation
    await expect(page).toHaveURL(/\/services\/privatjet/);
  });

  test('should open mobile menu on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });

    // Click mobile menu button
    await page.getByLabel(/toggle menu/i).click();

    // Verify mobile menu is visible
    await expect(page.getByText(/Home/i)).toBeVisible();
  });

  test('should scroll smoothly to sections', async ({ page }) => {
    // This assumes there are anchor links or sections
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Wait for scroll to complete
    await page.waitForTimeout(500);

    // Verify footer is visible
    await expect(page.getByText(/© 2025 BGS Gebäudeservice/i)).toBeVisible();
  });

  test('should display contact information in footer', async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const footer = page.locator('footer');
    await expect(footer.getByText('+41 41 320 56 10')).toBeVisible();
    await expect(footer.getByText('info@bgs-service.ch')).toBeVisible();
  });

  test('should have working contact link', async ({ page }) => {
    const contactLink = page.getByRole('link', { name: /Kontakt/i }).first();
    await expect(contactLink).toHaveAttribute('href', /tel:/);
  });
});

test.describe('Services Navigation Flow', () => {
  test('should navigate through all service categories', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Open services dropdown
    await page.getByRole('button', { name: /Services/i }).hover();
    await page.waitForTimeout(300);

    // Verify all categories are visible
    await expect(page.getByText('PREMIUM')).toBeVisible();
    await expect(page.getByText('STANDARD B2B')).toBeVisible();
    await expect(page.getByText('ESSENTIELL')).toBeVisible();

    // Navigate to a premium service
    await page.getByRole('link', { name: /Yacht-Reinigung/i }).click();
    await expect(page).toHaveURL(/\/services\/yacht/);
  });

  test('should maintain navigation state on page navigation', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Navigate to blog
    await page.getByRole('link', { name: /Blog/i }).first().click();
    await expect(page).toHaveURL(/\/blog/);

    // Verify navigation is still present
    await expect(page.getByText('BGS Gebäudeservice')).toBeVisible();
  });
});

test.describe('Responsive Design', () => {
  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:5173/');

    await expect(page.getByText('BGS Gebäudeservice')).toBeVisible();
  });

  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:5173/');

    // Mobile menu should be accessible
    await expect(page.getByLabel(/toggle menu/i)).toBeVisible();
  });

  test('should be responsive on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('http://localhost:5173/');

    // Desktop navigation should be visible
    await expect(page.getByRole('link', { name: /Referenzen/i }).first()).toBeVisible();
  });
});

test.describe('Performance', () => {
  test('should load within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('http://localhost:5173/');
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(3000); // 3 seconds
  });

  test('should have no console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto('http://localhost:5173/');
    expect(errors).toHaveLength(0);
  });
});
