import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

/**
 * Custom render function that wraps components with necessary providers
 */
function customRender(
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <BrowserRouter>{children}</BrowserRouter>
    ),
    ...options,
  });
}

export * from '@testing-library/react';
export { customRender as render };

/**
 * Mock data generators
 */
export const mockData = {
  liveData: {
    activeProjects: 12,
    efficiency: 85.9,
    costSavings: 62677,
    uptime: 97.5,
  },
  user: {
    name: 'Test User',
    email: 'test@example.com',
  },
};

/**
 * Common test utilities
 */
export const testUtils = {
  waitForLoadingToFinish: async () => {
    // Wait for any loading states to complete
    await new Promise(resolve => setTimeout(resolve, 0));
  },

  mockIntersectionObserver: () => {
    const mockIntersectionObserver = vi.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null
    });
    window.IntersectionObserver = mockIntersectionObserver as any;
  },
};
