import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  parallaxStrength?: number;
  overlay?: boolean;
  overlayOpacity?: number;
  children?: React.ReactNode;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className,
  parallaxStrength = 50,
  overlay = false,
  overlayOpacity = 0.4,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-parallaxStrength, parallaxStrength]
  );

  return (
    <div ref={ref} className={cn('relative overflow-hidden', className)}>
      <motion.div
        style={{ y }}
        className="h-full w-full"
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </motion.div>
      {overlay && (
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      )}
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
};

export { ParallaxImage };
