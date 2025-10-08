import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const headingVariants = cva('font-bold tracking-tight', {
  variants: {
    level: {
      h1: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl',
      h2: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
      h3: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
      h4: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
      h5: 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
      h6: 'text-base sm:text-lg md:text-xl lg:text-2xl',
    },
    variant: {
      default: 'text-gray-900 dark:text-gray-100',
      gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent',
      muted: 'text-gray-600 dark:text-gray-400',
      accent: 'text-blue-600 dark:text-blue-400',
      rainbow: 'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      extrabold: 'font-extrabold',
    },
  },
  defaultVariants: {
    level: 'h2',
    variant: 'default',
    align: 'left',
    weight: 'bold',
  },
});

export interface HeadingProps
  extends Omit<HTMLMotionProps<'h1'>, 'level'>,
    VariantProps<typeof headingVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  animated?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      level,
      variant,
      align,
      weight,
      as,
      animated = true,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || level || 'h2';
    const MotionComponent = motion[Component as keyof typeof motion] as any;

    const animationProps = animated
      ? {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.6 },
        }
      : {};

    return (
      <MotionComponent
        ref={ref}
        className={cn(headingVariants({ level, variant, align, weight, className }))}
        {...animationProps}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

Heading.displayName = 'Heading';

export { Heading, headingVariants };
export default Heading;
