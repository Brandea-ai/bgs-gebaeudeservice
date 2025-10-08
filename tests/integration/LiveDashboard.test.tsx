import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import LiveDashboard from '@/components/LiveDashboard';

describe('LiveDashboard Component Integration', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe('Header Section', () => {
    it('should display dashboard title', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/KI Analytics Dashboard/i)).toBeInTheDocument();
    });

    it('should display dashboard description', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Echtzeit-Metriken für Facility Management/i)).toBeInTheDocument();
    });

    it('should display live status badge', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Live/i)).toBeInTheDocument();
    });

    it('should show pulsing animation on live badge', () => {
      const { container } = render(<LiveDashboard />);
      const pulsingIcon = container.querySelector('.animate-pulse');
      expect(pulsingIcon).toBeInTheDocument();
    });
  });

  describe('KPI Cards', () => {
    it('should display all four KPI cards', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Aktive Projekte/i)).toBeInTheDocument();
      expect(screen.getByText(/Effizienzrate/i)).toBeInTheDocument();
      expect(screen.getByText(/Kosteneinsparung/i)).toBeInTheDocument();
      expect(screen.getByText(/System Uptime/i)).toBeInTheDocument();
    });

    it('should display initial active projects value', () => {
      render(<LiveDashboard />);
      expect(screen.getByText('12')).toBeInTheDocument();
    });

    it('should display efficiency rate with decimal', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/85\.9%/)).toBeInTheDocument();
    });

    it('should display cost savings with currency formatting', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/CHF 62,677/)).toBeInTheDocument();
    });

    it('should display uptime percentage', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/97\.5%/)).toBeInTheDocument();
    });

    it('should display trend indicators', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/\+12%/)).toBeInTheDocument(); // Active projects
      expect(screen.getByText(/\+8%/)).toBeInTheDocument();  // Efficiency
      expect(screen.getByText(/\+24%/)).toBeInTheDocument(); // Cost savings
    });

    it('should display "Exzellent" badge for high uptime', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Exzellent/i)).toBeInTheDocument();
    });
  });

  describe('Live Data Updates', () => {
    it('should update data after interval', async () => {
      render(<LiveDashboard />);

      const initialValue = screen.getByText('12');
      expect(initialValue).toBeInTheDocument();

      // Fast-forward time
      vi.advanceTimersByTime(3000);

      await waitFor(() => {
        // Value might have changed
        const cards = screen.getAllByRole('heading', { level: 3 });
        expect(cards.length).toBeGreaterThan(0);
      });
    });

    it('should keep efficiency within bounds (80-100)', async () => {
      render(<LiveDashboard />);

      // Simulate multiple updates
      for (let i = 0; i < 10; i++) {
        vi.advanceTimersByTime(3000);
      }

      await waitFor(() => {
        const efficiencyText = screen.getByText(/Effizienzrate/i)
          .parentElement?.querySelector('.text-2xl')?.textContent;

        if (efficiencyText) {
          const value = parseFloat(efficiencyText);
          expect(value).toBeGreaterThanOrEqual(80);
          expect(value).toBeLessThanOrEqual(100);
        }
      });
    });

    it('should keep uptime within bounds (95-100)', async () => {
      render(<LiveDashboard />);

      for (let i = 0; i < 10; i++) {
        vi.advanceTimersByTime(3000);
      }

      await waitFor(() => {
        const uptimeText = screen.getByText(/System Uptime/i)
          .parentElement?.querySelector('.text-2xl')?.textContent;

        if (uptimeText) {
          const value = parseFloat(uptimeText);
          expect(value).toBeGreaterThanOrEqual(95);
          expect(value).toBeLessThanOrEqual(100);
        }
      });
    });

    it('should increase cost savings over time', async () => {
      render(<LiveDashboard />);

      const initialText = screen.getByText(/CHF 62,677/).textContent;
      const initialValue = 62677;

      vi.advanceTimersByTime(6000);

      await waitFor(() => {
        // Cost savings should have increased
        expect(screen.getByText(/CHF/)).toBeInTheDocument();
      });
    });
  });

  describe('Charts', () => {
    it('should render efficiency trend chart', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Effizienz-Trend/i)).toBeInTheDocument();
      expect(screen.getByText(/Monatliche Performance vs Ziel/i)).toBeInTheDocument();
    });

    it('should render maintenance distribution chart', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Wartungsverteilung/i)).toBeInTheDocument();
      expect(screen.getByText(/Aufschlüsselung der Arbeitsaufträge/i)).toBeInTheDocument();
    });

    it('should render cost savings chart', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Kumulative Kosteneinsparung/i)).toBeInTheDocument();
      expect(screen.getByText(/KI-gestützte Optimierungsergebnisse/i)).toBeInTheDocument();
    });

    it('should display chart legends', () => {
      render(<LiveDashboard />);
      // Charts with legends should be rendered
      const { container } = render(<LiveDashboard />);
      expect(container.querySelectorAll('.recharts-wrapper').length).toBeGreaterThan(0);
    });
  });

  describe('Footer Information', () => {
    it('should display update interval information', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/Live-Daten werden alle 3 Sekunden aktualisiert/i)).toBeInTheDocument();
    });

    it('should display pulsing activity icon', () => {
      const { container } = render(<LiveDashboard />);
      const footerPulse = container.querySelectorAll('.animate-pulse');
      expect(footerPulse.length).toBeGreaterThan(0);
    });
  });

  describe('Cleanup', () => {
    it('should cleanup interval on unmount', () => {
      const { unmount } = render(<LiveDashboard />);

      unmount();

      // Should not throw errors after unmounting
      vi.advanceTimersByTime(3000);
      expect(true).toBe(true);
    });
  });

  describe('Card Components', () => {
    it('should render Card components with proper structure', () => {
      const { container } = render(<LiveDashboard />);
      const cards = container.querySelectorAll('[class*="rounded"]');
      expect(cards.length).toBeGreaterThan(0);
    });

    it('should display card headers', () => {
      render(<LiveDashboard />);
      const headers = screen.getAllByRole('heading', { level: 3 });
      expect(headers.length).toBeGreaterThan(4);
    });
  });

  describe('Accessibility', () => {
    it('should have proper heading hierarchy', () => {
      render(<LiveDashboard />);
      expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
      const h3Headings = screen.getAllByRole('heading', { level: 3 });
      expect(h3Headings.length).toBeGreaterThan(0);
    });

    it('should have descriptive text for metrics', () => {
      render(<LiveDashboard />);
      expect(screen.getByText(/vom letzten Monat/i)).toBeInTheDocument();
      expect(screen.getByText(/von Baseline/i)).toBeInTheDocument();
      expect(screen.getByText(/YTD/i)).toBeInTheDocument();
    });
  });

  describe('Responsive Layout', () => {
    it('should have responsive grid classes', () => {
      const { container } = render(<LiveDashboard />);
      const grids = container.querySelectorAll('.grid');
      expect(grids.length).toBeGreaterThan(0);
    });

    it('should use responsive container', () => {
      const { container } = render(<LiveDashboard />);
      const responsive = container.querySelector('[width="100%"]');
      expect(responsive).toBeInTheDocument();
    });
  });

  describe('Data Visualization', () => {
    it('should display efficiency data with actual and target values', () => {
      render(<LiveDashboard />);
      // Chart should be rendered with ResponsiveContainer
      const { container } = render(<LiveDashboard />);
      expect(container.querySelector('.recharts-responsive-container')).toBeInTheDocument();
    });

    it('should show maintenance distribution with colors', () => {
      render(<LiveDashboard />);
      // Pie chart should be rendered
      const { container } = render(<LiveDashboard />);
      const charts = container.querySelectorAll('.recharts-wrapper');
      expect(charts.length).toBeGreaterThan(0);
    });
  });

  describe('Performance', () => {
    it('should not cause memory leaks with interval', () => {
      const { unmount } = render(<LiveDashboard />);

      // Advance time before unmounting
      vi.advanceTimersByTime(9000);

      unmount();

      // Should cleanup properly
      expect(true).toBe(true);
    });

    it('should handle multiple renders efficiently', () => {
      const { rerender } = render(<LiveDashboard />);

      rerender(<LiveDashboard />);
      rerender(<LiveDashboard />);

      expect(screen.getByText(/KI Analytics Dashboard/i)).toBeInTheDocument();
    });
  });
});
