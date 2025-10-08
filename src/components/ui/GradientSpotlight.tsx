import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface GradientSpotlightProps {
  className?: string;
  children?: React.ReactNode;
  gradientColor?: string;
  gradientSize?: number;
}

const GradientSpotlight: React.FC<GradientSpotlightProps> = ({
  className,
  children,
  gradientColor = 'rgba(59, 130, 246, 0.15)',
  gradientSize = 300,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle ${gradientSize}px at center, ${gradientColor}, transparent)`,
          width: gradientSize * 2,
          height: gradientSize * 2,
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        animate={{
          left: mousePosition.x,
          top: mousePosition.y,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      />
      {children}
    </div>
  );
};

export { GradientSpotlight };
