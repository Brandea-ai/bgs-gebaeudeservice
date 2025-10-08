import React from 'react';
import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const skeletonVariants = cva('animate-pulse rounded bg-gray-200 dark:bg-gray-700', {
  variants: {
    variant: {
      text: 'h-4',
      title: 'h-8',
      circle: 'rounded-full',
      rectangle: 'rounded-lg',
      card: 'h-48',
    },
    animation: {
      pulse: 'animate-pulse',
      shimmer: 'animate-shimmer',
      wave: 'animate-wave',
    },
  },
  defaultVariants: {
    variant: 'text',
    animation: 'pulse',
  },
});

export interface LoadingSkeletonProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof skeletonVariants> {
  width?: string | number;
  height?: string | number;
  count?: number;
  spacing?: string;
}

const LoadingSkeleton = React.forwardRef<HTMLDivElement, LoadingSkeletonProps>(
  (
    {
      className,
      variant,
      animation,
      width,
      height,
      count = 1,
      spacing = '0.5rem',
      style,
      ...props
    },
    ref
  ) => {
    const skeletonStyle = {
      width,
      height,
      ...style,
    };

    if (count === 1) {
      return (
        <div
          ref={ref}
          className={cn(skeletonVariants({ variant, animation, className }))}
          style={skeletonStyle}
          {...props}
        />
      );
    }

    return (
      <div ref={ref} className="space-y-2" style={{ gap: spacing }}>
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(skeletonVariants({ variant, animation, className }))}
            style={skeletonStyle}
            {...props}
          />
        ))}
      </div>
    );
  }
);

LoadingSkeleton.displayName = 'LoadingSkeleton';

// Preset skeleton patterns
const SkeletonCard: React.FC<{ className?: string }> = ({ className }) => (
  <div className={cn('space-y-4 rounded-lg border border-gray-200 p-6 dark:border-gray-700', className)}>
    <LoadingSkeleton variant="circle" width={64} height={64} />
    <LoadingSkeleton variant="title" width="60%" />
    <LoadingSkeleton variant="text" count={3} />
    <LoadingSkeleton variant="rectangle" height={40} width="40%" />
  </div>
);

const SkeletonList: React.FC<{ items?: number; className?: string }> = ({
  items = 5,
  className,
}) => (
  <div className={cn('space-y-4', className)}>
    {Array.from({ length: items }).map((_, index) => (
      <div key={index} className="flex items-center space-x-4">
        <LoadingSkeleton variant="circle" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <LoadingSkeleton variant="text" width="70%" />
          <LoadingSkeleton variant="text" width="40%" />
        </div>
      </div>
    ))}
  </div>
);

const SkeletonTable: React.FC<{ rows?: number; columns?: number; className?: string }> = ({
  rows = 5,
  columns = 4,
  className,
}) => (
  <div className={cn('space-y-3', className)}>
    <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {Array.from({ length: columns }).map((_, index) => (
        <LoadingSkeleton key={index} variant="title" />
      ))}
    </div>
    {Array.from({ length: rows }).map((_, rowIndex) => (
      <div key={rowIndex} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, colIndex) => (
          <LoadingSkeleton key={colIndex} variant="text" />
        ))}
      </div>
    ))}
  </div>
);

export { LoadingSkeleton, SkeletonCard, SkeletonList, SkeletonTable, skeletonVariants };
