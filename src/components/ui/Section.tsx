import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const sectionVariants = cva('relative w-full', {
  variants: {
    background: {
      none: 'bg-transparent',
      white: 'bg-white dark:bg-gray-900',
      gray: 'bg-gray-50 dark:bg-gray-800',
      gradient: 'bg-gradient-to-b from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800',
      dark: 'bg-gray-900',
      image: 'bg-cover bg-center bg-no-repeat',
    },
    padding: {
      none: 'py-0',
      sm: 'py-8 sm:py-12',
      md: 'py-12 sm:py-16 md:py-20',
      lg: 'py-16 sm:py-20 md:py-24 lg:py-32',
      xl: 'py-20 sm:py-24 md:py-32 lg:py-40',
    },
    spacing: {
      none: 'space-y-0',
      sm: 'space-y-4',
      md: 'space-y-8',
      lg: 'space-y-12',
      xl: 'space-y-16',
    },
  },
  defaultVariants: {
    background: 'none',
    padding: 'md',
    spacing: 'md',
  },
});

export interface SectionProps
  extends HTMLMotionProps<'section'>,
    VariantProps<typeof sectionVariants> {
  backgroundImage?: string;
  overlay?: boolean;
  overlayOpacity?: number;
  animated?: boolean;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      background,
      padding,
      spacing,
      backgroundImage,
      overlay = false,
      overlayOpacity = 0.5,
      animated = true,
      children,
      style,
      ...props
    },
    ref
  ) => {
    const sectionStyle = backgroundImage
      ? { ...style, backgroundImage: `url(${backgroundImage})` }
      : style;

    const animationProps = animated
      ? {
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
          viewport: { once: true },
          transition: { duration: 0.8 },
        }
      : {};

    return (
      <motion.section
        ref={ref}
        className={cn(sectionVariants({ background, padding, spacing, className }))}
        style={sectionStyle}
        {...animationProps}
        {...props}
      >
        {overlay && backgroundImage && (
          <div
            className="absolute inset-0 bg-black pointer-events-none"
            style={{ opacity: overlayOpacity }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </motion.section>
    );
  }
);

Section.displayName = 'Section';

export { Section, sectionVariants };
export default Section;
