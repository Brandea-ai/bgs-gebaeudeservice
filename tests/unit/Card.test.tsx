import { describe, it, expect } from 'vitest';
import { render, screen } from '../utils/test-utils';
import { Card } from '@/components/ui/Card';

describe('Card Component', () => {
  describe('Rendering', () => {
    it('should render with children', () => {
      render(<Card>Card Content</Card>);
      expect(screen.getByText('Card Content')).toBeInTheDocument();
    });

    it('should render with default styles (non-glassmorphism)', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild;
      expect(card).toHaveClass('bg-white', 'border-gray-200', 'shadow-md');
    });

    it('should render with glassmorphism effect', () => {
      const { container } = render(<Card glassmorphism>Glass Card</Card>);
      const card = container.firstChild;
      expect(card).toHaveClass('backdrop-blur-md', 'bg-white/10', 'border-white/20');
    });
  });

  describe('Hover Effects', () => {
    it('should have hover effect by default', () => {
      const { container } = render(<Card>Hoverable</Card>);
      const card = container.firstChild;
      expect(card).toHaveClass('hover:shadow-xl', 'hover:-translate-y-1');
    });

    it('should not have hover effect when disabled', () => {
      const { container } = render(<Card hover={false}>Non-hoverable</Card>);
      const card = container.firstChild;
      expect(card).not.toHaveClass('hover:shadow-xl');
    });
  });

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(<Card className="custom-card">Custom</Card>);
      const card = container.firstChild;
      expect(card).toHaveClass('custom-card');
    });

    it('should merge custom classes with default classes', () => {
      const { container } = render(<Card className="mt-4">Merged</Card>);
      const card = container.firstChild;
      expect(card).toHaveClass('mt-4', 'rounded-2xl', 'border');
    });
  });

  describe('Complex Children', () => {
    it('should render complex nested content', () => {
      render(
        <Card>
          <div>
            <h2>Title</h2>
            <p>Description</p>
          </div>
        </Card>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('should handle multiple child elements', () => {
      render(
        <Card>
          <span>First</span>
          <span>Second</span>
          <span>Third</span>
        </Card>
      );
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
      expect(screen.getByText('Third')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should render with all props combined', () => {
      const { container } = render(
        <Card glassmorphism hover={false} className="custom">
          All Props
        </Card>
      );
      const card = container.firstChild;
      expect(card).toHaveClass('backdrop-blur-md', 'custom');
      expect(card).not.toHaveClass('hover:shadow-xl');
    });
  });
});
