import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const containerVariants = cva('mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    maxWidth: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      full: 'max-w-full',
      none: '',
    },
    padding: {
      none: 'px-0',
      sm: 'px-4',
      md: 'px-6',
      lg: 'px-8',
      xl: 'px-12',
    },
  },
  defaultVariants: {
    maxWidth: 'xl',
    padding: 'md',
  },
});

export interface ContainerProps
  extends HTMLMotionProps<'div'>,
    VariantProps<typeof containerVariants> {
  animated?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, maxWidth, padding, animated = false, children, ...props }, ref) => {
    const Component = animated ? motion.div : 'div';

    const animationProps = animated
      ? {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          transition: { duration: 0.6 },
        }
      : {};

    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ maxWidth, padding, className }))}
        {...animationProps}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Container.displayName = 'Container';

export { Container, containerVariants };
export default Container;
