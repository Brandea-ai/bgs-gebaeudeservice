import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import Footer from '@/components/Footer';

describe('Footer Component Integration', () => {
  describe('Branding Section', () => {
    it('should display company name and logo', () => {
      render(<Footer />);
      expect(screen.getByText(/BGS Gebäudeservice/i)).toBeInTheDocument();
    });

    it('should display company tagline', () => {
      render(<Footer />);
      expect(screen.getByText(/Professionelle Gebäudereinigung/i)).toBeInTheDocument();
      expect(screen.getByText(/seit 1997/i)).toBeInTheDocument();
    });

    it('should display certification badges', () => {
      render(<Footer />);
      expect(screen.getByText(/ISO 9001/i)).toBeInTheDocument();
      expect(screen.getByText(/CO₂-neutral/i)).toBeInTheDocument();
    });
  });

  describe('Services Links', () => {
    it('should display services section header', () => {
      render(<Footer />);
      expect(screen.getByText('Services')).toBeInTheDocument();
    });

    it('should display all service category links', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /Premium Services/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /B2B Services/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Basis Services/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /KI-Integration/i })).toBeInTheDocument();
    });

    it('should have correct href attributes for service links', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /Premium Services/i }))
        .toHaveAttribute('href', '/services/privatjet');
      expect(screen.getByRole('link', { name: /B2B Services/i }))
        .toHaveAttribute('href', '/services/hallen');
      expect(screen.getByRole('link', { name: /Basis Services/i }))
        .toHaveAttribute('href', '/services/unterhalt');
    });
  });

  describe('Company Links', () => {
    it('should display company section header', () => {
      render(<Footer />);
      expect(screen.getByText('Unternehmen')).toBeInTheDocument();
    });

    it('should display all company links', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /Über uns/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Blog/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Downloads/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Glossar/i })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: /Kontakt/i })).toBeInTheDocument();
    });

    it('should have correct href attributes for company links', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /Über uns/i }))
        .toHaveAttribute('href', '/ueber-uns');
      expect(screen.getByRole('link', { name: /Blog/i }))
        .toHaveAttribute('href', '/blog');
      expect(screen.getByRole('link', { name: /Downloads/i }))
        .toHaveAttribute('href', '/downloads');
    });
  });

  describe('Contact Information', () => {
    it('should display contact section header', () => {
      render(<Footer />);
      expect(screen.getByText('Kontakt')).toBeInTheDocument();
    });

    it('should display phone number', () => {
      render(<Footer />);
      expect(screen.getByText('+41 41 320 56 10')).toBeInTheDocument();
    });

    it('should display email address', () => {
      render(<Footer />);
      expect(screen.getByText('info@bgs-service.ch')).toBeInTheDocument();
    });

    it('should display location', () => {
      render(<Footer />);
      expect(screen.getByText(/Emmenbrücke, Schweiz/i)).toBeInTheDocument();
    });

    it('should display contact icons', () => {
      const { container } = render(<Footer />);
      const phoneIcon = container.querySelector('[class*="lucide-phone"]');
      const mailIcon = container.querySelector('[class*="lucide-mail"]');
      const locationIcon = container.querySelector('[class*="lucide-map-pin"]');

      expect(phoneIcon).toBeInTheDocument();
      expect(mailIcon).toBeInTheDocument();
      expect(locationIcon).toBeInTheDocument();
    });
  });

  describe('Legal Information', () => {
    it('should display copyright notice', () => {
      render(<Footer />);
      expect(screen.getByText(/© 2025 BGS Gebäudeservice GmbH/i)).toBeInTheDocument();
      expect(screen.getByText(/Alle Rechte vorbehalten/i)).toBeInTheDocument();
    });

    it('should display UID number', () => {
      render(<Footer />);
      expect(screen.getByText(/UID: CHE-108.687.458/i)).toBeInTheDocument();
    });
  });

  describe('Layout and Styling', () => {
    it('should have proper semantic footer element', () => {
      const { container } = render(<Footer />);
      expect(container.querySelector('footer')).toBeInTheDocument();
    });

    it('should have dark background', () => {
      const { container } = render(<Footer />);
      const footer = container.querySelector('footer');
      expect(footer).toHaveClass('bg-[#0A2540]', 'text-white');
    });

    it('should have grid layout for sections', () => {
      const { container } = render(<Footer />);
      const grid = container.querySelector('.grid');
      expect(grid).toBeInTheDocument();
    });

    it('should have border separator for legal section', () => {
      const { container } = render(<Footer />);
      const separator = container.querySelector('.border-t');
      expect(separator).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have all links accessible', () => {
      render(<Footer />);
      const links = screen.getAllByRole('link');
      expect(links.length).toBeGreaterThan(0);

      links.forEach(link => {
        expect(link).toHaveAttribute('href');
      });
    });

    it('should have proper heading hierarchy', () => {
      render(<Footer />);
      const headings = screen.getAllByRole('heading', { level: 4 });
      expect(headings).toHaveLength(3); // Services, Unternehmen, Kontakt
    });

    it('should have hover states on links', () => {
      const { container } = render(<Footer />);
      const links = container.querySelectorAll('a[class*="hover:text-white"]');
      expect(links.length).toBeGreaterThan(0);
    });
  });

  describe('Responsive Design', () => {
    it('should have responsive grid classes', () => {
      const { container } = render(<Footer />);
      const grid = container.querySelector('.grid');
      expect(grid).toHaveClass('md:grid-cols-4');
    });

    it('should have responsive flex layout for bottom section', () => {
      const { container } = render(<Footer />);
      const bottomSection = container.querySelector('.flex-col.md\\:flex-row');
      expect(bottomSection).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('should render Building2 icon', () => {
      const { container } = render(<Footer />);
      expect(container.querySelector('[class*="lucide"]')).toBeInTheDocument();
    });

    it('should render certification badge icons', () => {
      const { container } = render(<Footer />);
      const badges = container.querySelectorAll('[class*="badge"]');
      expect(badges.length).toBeGreaterThan(0);
    });
  });
});
