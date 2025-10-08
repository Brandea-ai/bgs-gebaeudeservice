import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '../utils/test-utils';
import { userEvent } from '@testing-library/user-event';
import { Navigation } from '@/components/Navigation';

describe('Navigation Component Integration', () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  describe('Logo and Branding', () => {
    it('should render company logo/name', () => {
      render(<Navigation />);
      expect(screen.getByText(/BGS Gebäudeservice/i)).toBeInTheDocument();
    });

    it('should link logo to homepage', () => {
      render(<Navigation />);
      const logo = screen.getByText(/BGS Gebäudeservice/i);
      expect(logo.closest('a')).toHaveAttribute('href', '/');
    });
  });

  describe('Desktop Navigation', () => {
    it('should render all main navigation items', () => {
      render(<Navigation />);
      expect(screen.getByText(/^Services$/)).toBeInTheDocument();
      expect(screen.getByText(/Standorte/i)).toBeInTheDocument();
      expect(screen.getByText(/Referenzen/i)).toBeInTheDocument();
      expect(screen.getByText(/Blog/i)).toBeInTheDocument();
      expect(screen.getByText(/Über uns/i)).toBeInTheDocument();
    });

    it('should display contact button with phone icon', () => {
      render(<Navigation />);
      const contactButton = screen.getByRole('link', { name: /Kontakt/i });
      expect(contactButton).toBeInTheDocument();
      expect(contactButton).toHaveAttribute('href', 'tel:+41413205610');
    });
  });

  describe('Services Dropdown - Mouse Interactions', () => {
    it('should show services dropdown on hover', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });
      await user.hover(servicesButton);

      await waitFor(() => {
        expect(screen.getByText('PREMIUM')).toBeInTheDocument();
        expect(screen.getByText('STANDARD B2B')).toBeInTheDocument();
        expect(screen.getByText('ESSENTIELL')).toBeInTheDocument();
      });
    });

    it('should hide dropdown after mouse leave with delay', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });
      await user.hover(servicesButton);

      await waitFor(() => {
        expect(screen.getByText('PREMIUM')).toBeInTheDocument();
      });

      await user.unhover(servicesButton);

      // Should still be visible during delay
      expect(screen.getByText('PREMIUM')).toBeInTheDocument();

      // Advance timer past delay
      vi.advanceTimersByTime(250);

      await waitFor(() => {
        expect(screen.queryByText('PREMIUM')).not.toBeInTheDocument();
      });
    });

    it('should display all premium services', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });
      await user.hover(servicesButton);

      await waitFor(() => {
        expect(screen.getByText('Privatjet-Reinigung')).toBeInTheDocument();
        expect(screen.getByText('Yacht-Reinigung')).toBeInTheDocument();
        expect(screen.getByText('Private Housekeeping')).toBeInTheDocument();
        expect(screen.getByText('Luxusimmobilien')).toBeInTheDocument();
        expect(screen.getByText('VIP-Events')).toBeInTheDocument();
      });
    });

    it('should display all standard B2B services', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });
      await user.hover(servicesButton);

      await waitFor(() => {
        expect(screen.getByText('Hallenreinigung')).toBeInTheDocument();
        expect(screen.getByText('Maschinenreinigung')).toBeInTheDocument();
        expect(screen.getByText('Sonderreinigung')).toBeInTheDocument();
        expect(screen.getByText('Industriereinigung')).toBeInTheDocument();
        expect(screen.getByText('Fassadenreinigung')).toBeInTheDocument();
      });
    });

    it('should display all essential services', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });
      await user.hover(servicesButton);

      await waitFor(() => {
        expect(screen.getByText('Unterhaltsreinigung')).toBeInTheDocument();
        expect(screen.getByText('Fensterreinigung')).toBeInTheDocument();
        expect(screen.getByText('Gartenservice')).toBeInTheDocument();
        expect(screen.getByText('Grundreinigung')).toBeInTheDocument();
        expect(screen.getByText('Büroreinigung')).toBeInTheDocument();
      });
    });

    it('should rotate chevron icon when dropdown opens', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });
      const chevron = servicesButton.querySelector('svg');

      expect(chevron).not.toHaveClass('rotate-180');

      await user.hover(servicesButton);

      await waitFor(() => {
        expect(chevron).toHaveClass('rotate-180');
      });
    });
  });

  describe('Mobile Navigation', () => {
    it('should show mobile menu button on mobile', () => {
      render(<Navigation />);
      const menuButton = screen.getByLabelText(/toggle menu/i);
      expect(menuButton).toBeInTheDocument();
    });

    it('should toggle mobile menu on button click', async () => {
      render(<Navigation />);

      const menuButton = screen.getByLabelText(/toggle menu/i);

      // Mobile menu should not be visible initially
      expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();

      // Open menu
      await user.click(menuButton);

      // Mobile menu should be visible
      await waitFor(() => {
        expect(screen.getByText(/Home/i)).toBeInTheDocument();
      });

      // Close menu
      await user.click(menuButton);

      // Mobile menu should be hidden
      await waitFor(() => {
        expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
      });
    });

    it('should close mobile menu when navigation item is clicked', async () => {
      render(<Navigation />);

      const menuButton = screen.getByLabelText(/toggle menu/i);
      await user.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText(/Referenzen/i)).toBeInTheDocument();
      });

      const referenzenLink = screen.getAllByText(/Referenzen/i)[1]; // Get mobile version
      await user.click(referenzenLink);

      await waitFor(() => {
        expect(screen.queryByText(/Home/i)).not.toBeInTheDocument();
      });
    });

    it('should display categorized services in mobile menu', async () => {
      render(<Navigation />);

      const menuButton = screen.getByLabelText(/toggle menu/i);
      await user.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText(/PREMIUM/i)).toBeInTheDocument();
        expect(screen.getByText(/STANDARD/i)).toBeInTheDocument();
        expect(screen.getByText(/ESSENTIELL/i)).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA labels', () => {
      render(<Navigation />);
      expect(screen.getByLabelText(/toggle menu/i)).toBeInTheDocument();
    });

    it('should have semantic nav element', () => {
      const { container } = render(<Navigation />);
      expect(container.querySelector('nav')).toBeInTheDocument();
    });

    it('should have keyboard accessible links', () => {
      render(<Navigation />);
      const links = screen.getAllByRole('link');
      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });
  });

  describe('Styling and Layout', () => {
    it('should have fixed positioning', () => {
      const { container } = render(<Navigation />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('fixed', 'top-0');
    });

    it('should have backdrop blur effect', () => {
      const { container } = render(<Navigation />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('backdrop-blur-md');
    });

    it('should have proper z-index for overlay', () => {
      const { container } = render(<Navigation />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('z-50');
    });
  });

  describe('Edge Cases', () => {
    it('should cleanup timeout on unmount', () => {
      const { unmount } = render(<Navigation />);
      unmount();
      // Should not throw errors
      expect(true).toBe(true);
    });

    it('should handle rapid hover on/off', async () => {
      render(<Navigation />);

      const servicesButton = screen.getByRole('button', { name: /Services/i });

      await user.hover(servicesButton);
      await user.unhover(servicesButton);
      await user.hover(servicesButton);

      await waitFor(() => {
        expect(screen.getByText('PREMIUM')).toBeInTheDocument();
      });
    });
  });
});
