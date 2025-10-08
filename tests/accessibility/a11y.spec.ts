import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility Tests', () => {
  test('homepage should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('navigation should be keyboard accessible', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    // Tab through navigation elements
    await page.keyboard.press('Tab');

    // Verify focus is visible
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(focusedElement).toBeTruthy();
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const headings = await page.$$eval('h1, h2, h3, h4, h5, h6', (elements) =>
      elements.map(el => ({
        tag: el.tagName,
        text: el.textContent?.trim()
      }))
    );

    // Should have at least one h1
    const h1Count = headings.filter(h => h.tag === 'H1').length;
    expect(h1Count).toBeGreaterThan(0);
  });

  test('images should have alt text', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const imagesWithoutAlt = await page.$$eval('img', (images) =>
      images.filter(img => !img.hasAttribute('alt') || img.getAttribute('alt') === '')
    );

    expect(imagesWithoutAlt.length).toBe(0);
  });

  test('buttons should have accessible names', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const buttons = await page.$$('button');

    for (const button of buttons) {
      const accessibleName = await button.evaluate((el) => {
        return el.textContent?.trim() ||
               el.getAttribute('aria-label') ||
               el.getAttribute('aria-labelledby');
      });

      expect(accessibleName).toBeTruthy();
    }
  });

  test('links should have descriptive text', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const links = await page.$$eval('a', (anchors) =>
      anchors.map(a => ({
        text: a.textContent?.trim(),
        ariaLabel: a.getAttribute('aria-label')
      }))
    );

    links.forEach(link => {
      expect(link.text || link.ariaLabel).toBeTruthy();
    });
  });

  test('form inputs should have labels', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const inputs = await page.$$('input[type="text"], input[type="email"], textarea');

    for (const input of inputs) {
      const hasLabel = await input.evaluate((el) => {
        const id = el.id;
        return !!document.querySelector(`label[for="${id}"]`) ||
               !!el.getAttribute('aria-label') ||
               !!el.getAttribute('aria-labelledby');
      });

      expect(hasLabel).toBeTruthy();
    }
  });

  test('should have sufficient color contrast', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .analyze();

    const contrastViolations = accessibilityScanResults.violations.filter(
      violation => violation.id === 'color-contrast'
    );

    expect(contrastViolations).toEqual([]);
  });

  test('interactive elements should be focusable', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const interactiveElements = await page.$$('a, button, input, select, textarea');

    for (const element of interactiveElements) {
      const isFocusable = await element.evaluate((el) => {
        const tabIndex = el.getAttribute('tabindex');
        return el.offsetParent !== null && (
          ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(el.tagName) ||
          (tabIndex !== null && parseInt(tabIndex) >= 0)
        );
      });

      // Element should be visible and focusable
      expect(isFocusable).toBeTruthy();
    }
  });

  test('should have ARIA landmarks', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const landmarks = await page.$$eval(
      'nav, main, aside, footer, [role="navigation"], [role="main"], [role="complementary"], [role="contentinfo"]',
      elements => elements.length
    );

    expect(landmarks).toBeGreaterThan(0);
  });

  test('mobile menu should be accessible', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:5173/');

    const menuButton = page.getByLabel(/toggle menu/i);
    await expect(menuButton).toBeVisible();

    // Check accessibility of mobile menu
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('services dropdown should be accessible', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    const servicesButton = page.getByRole('button', { name: /Services/i });

    // Check if button is accessible
    await expect(servicesButton).toBeVisible();

    // Hover to open dropdown
    await servicesButton.hover();
    await page.waitForTimeout(300);

    // Check accessibility of dropdown
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('footer should be accessible', async ({ page }) => {
    await page.goto('http://localhost:5173/');

    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('footer')
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
