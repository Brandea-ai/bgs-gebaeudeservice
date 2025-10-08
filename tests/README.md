# BGS Gebäudeservice - Test Suite Documentation

## Overview

Comprehensive test suite covering unit, integration, E2E, accessibility, and performance testing with 90%+ code coverage target.

## Test Structure

```
tests/
├── unit/                    # Unit tests for individual components
│   ├── Button.test.tsx      # Button component tests
│   ├── Card.test.tsx        # Card component tests
│   └── ...
├── integration/             # Integration tests for complex components
│   ├── Navigation.test.tsx  # Navigation component tests
│   ├── Footer.test.tsx      # Footer component tests
│   └── LiveDashboard.test.tsx
├── e2e/                     # End-to-end tests
│   └── homepage.spec.ts     # Homepage user flows
├── accessibility/           # Accessibility tests
│   └── a11y.spec.ts         # WCAG compliance tests
├── performance/             # Performance tests
│   └── lighthouse.config.js # Lighthouse CI config
└── utils/                   # Test utilities
    ├── setup.ts             # Global test setup
    └── test-utils.tsx       # Custom render functions
```

## Testing Tools

- **Vitest**: Unit and integration testing framework
- **React Testing Library**: Component testing utilities
- **Playwright**: E2E testing framework
- **axe-core**: Accessibility testing
- **Lighthouse CI**: Performance testing

## Running Tests

### All Tests
```bash
npm run test:all
```

### Unit Tests
```bash
npm run test:unit          # Run once
npm run test:watch         # Watch mode
npm run test:ui            # Interactive UI
```

### Integration Tests
```bash
npm run test:integration
```

### E2E Tests
```bash
npm run test:e2e
```

### Accessibility Tests
```bash
npm run test:a11y
```

### Performance Tests
```bash
npm run test:performance
```

### Coverage Report
```bash
npm run test:coverage
```

## Test Coverage Goals

- **Statements**: >80%
- **Branches**: >75%
- **Functions**: >80%
- **Lines**: >80%

## Writing Tests

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Button from '@/components/ui/Button';

describe('Button Component', () => {
  it('should render with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Integration Test Example

```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import { userEvent } from '@testing-library/user-event';

describe('Navigation Integration', () => {
  it('should open dropdown on hover', async () => {
    const user = userEvent.setup();
    render(<Navigation />);

    await user.hover(screen.getByRole('button', { name: /Services/i }));
    await waitFor(() => {
      expect(screen.getByText('PREMIUM')).toBeInTheDocument();
    });
  });
});
```

### E2E Test Example

```typescript
import { test, expect } from '@playwright/test';

test('should navigate to services', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('link', { name: /Services/i }).click();
  await expect(page).toHaveURL(/\/services/);
});
```

## Test Best Practices

### 1. Arrange-Act-Assert Pattern
```typescript
it('should update state on click', async () => {
  // Arrange
  const user = userEvent.setup();
  render(<Component />);

  // Act
  await user.click(screen.getByRole('button'));

  // Assert
  expect(screen.getByText('Updated')).toBeInTheDocument();
});
```

### 2. Test User Behavior, Not Implementation
```typescript
// ✅ Good - Tests user-visible behavior
expect(screen.getByRole('button', { name: /Submit/i })).toBeEnabled();

// ❌ Bad - Tests implementation details
expect(component.state.isEnabled).toBe(true);
```

### 3. Use Custom Render for Providers
```typescript
import { render } from '../utils/test-utils';

// Automatically wraps with BrowserRouter
render(<Component />);
```

### 4. Handle Asynchronous Operations
```typescript
// Use waitFor for async updates
await waitFor(() => {
  expect(screen.getByText('Loaded')).toBeInTheDocument();
});

// Use findBy for async queries
const element = await screen.findByText('Loaded');
```

### 5. Mock External Dependencies
```typescript
import { vi } from 'vitest';

const mockFetch = vi.fn();
global.fetch = mockFetch;
```

## Component Test Coverage

### Unit Tests
- [x] Button - Variants, sizes, interactions, accessibility
- [x] Card - Glassmorphism, hover effects, custom styling
- [ ] Badge - All variants and sizes
- [ ] Heading - Typography levels
- [ ] Container - Responsive widths
- [ ] Section - Spacing variants

### Integration Tests
- [x] Navigation - Desktop/mobile menu, dropdown interactions
- [x] Footer - All links, contact information, layout
- [x] LiveDashboard - Real-time updates, charts, KPIs
- [ ] ContactForm - Validation, submission
- [ ] ServiceCards - Grid layout, filtering

### E2E Tests
- [x] Homepage - Load, navigation, scrolling
- [x] Services Navigation - Dropdown, category selection
- [x] Responsive Design - Mobile, tablet, desktop
- [x] Performance - Load time, console errors
- [ ] Contact Flow - Form submission end-to-end
- [ ] Blog Navigation - Article listing and reading

### Accessibility Tests
- [x] WCAG 2.1 Level AA compliance
- [x] Keyboard navigation
- [x] Screen reader support
- [x] Color contrast
- [x] Form labels
- [x] ARIA landmarks
- [ ] Focus management
- [ ] Skip links

### Performance Tests
- [x] Lighthouse CI configuration
- [x] Performance budget (score >90)
- [x] Accessibility score >90
- [x] Best practices >90
- [x] SEO score >90
- [x] Core Web Vitals (FCP, LCP, CLS, TBT)

## CI/CD Integration

Tests run automatically on:
- Push to `main`, `develop`, `branch-3`
- Pull requests to `main`, `develop`, `branch-3`

GitHub Actions workflow: `.github/workflows/tests.yml`

## Debugging Tests

### Run Specific Test File
```bash
npm run test tests/unit/Button.test.tsx
```

### Run Tests Matching Pattern
```bash
npm run test -- --grep "Navigation"
```

### Debug in VS Code
1. Add breakpoint in test file
2. Run "Debug: JavaScript Debug Terminal"
3. Run test command

### View Test UI
```bash
npm run test:ui
```

### Playwright Debug Mode
```bash
npx playwright test --debug
```

## Common Issues

### 1. Import Errors
Ensure path aliases are configured in `vitest.config.ts`:
```typescript
resolve: {
  alias: {
    '@': path.resolve(__dirname, './src'),
  },
}
```

### 2. Timeout Issues
Increase timeout for slow tests:
```typescript
test('slow operation', async () => {
  // ...
}, { timeout: 10000 });
```

### 3. DOM Not Updating
Use `waitFor` for async state updates:
```typescript
await waitFor(() => {
  expect(screen.getByText('Updated')).toBeInTheDocument();
});
```

### 4. Mock Not Working
Clear mocks between tests:
```typescript
beforeEach(() => {
  vi.clearAllMocks();
});
```

## Test Utilities

### Custom Render
Wraps components with necessary providers (Router, Theme, etc.)

### Mock Data
Consistent test data available in `test-utils.tsx`

### User Event
Simulates real user interactions more accurately than `fireEvent`

## Performance Benchmarks

Current test execution times:
- Unit tests: ~2s
- Integration tests: ~5s
- E2E tests: ~15s
- Accessibility tests: ~10s
- Full suite: ~35s

## Coverage Reports

Coverage reports generated in:
- `coverage/index.html` - HTML report
- `coverage/lcov.info` - LCOV format
- `coverage/coverage-final.json` - JSON format

View coverage:
```bash
npm run test:coverage
open coverage/index.html
```

## Future Improvements

- [ ] Visual regression testing with Percy/Chromatic
- [ ] API integration tests
- [ ] Load testing with k6
- [ ] Mutation testing with Stryker
- [ ] Contract testing for APIs
- [ ] Snapshot testing for components
- [ ] Performance profiling
- [ ] Memory leak detection

## Resources

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Playwright Documentation](https://playwright.dev/)
- [axe-core Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

## Support

For test-related issues:
1. Check this documentation
2. Review existing tests for patterns
3. Consult team testing guidelines
4. Ask in #testing Slack channel

---

Last updated: 2025-10-08
Test coverage: Targeting 90%+
Total test files: 12+
