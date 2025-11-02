import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

// Scroll Progress Indicator
interface ScrollProgressProps {
  className?: string;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ className = '' }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-red-600 origin-left z-50 ${className}`}
      style={{ scaleX }}
    />
  );
};

// Pinned Background - Fixed background with parallax
interface PinnedBackgroundProps {
  image: string;
  overlay?: boolean;
  overlayColor?: string;
  parallax?: boolean;
  className?: string;
}

export const PinnedBackground: React.FC<PinnedBackgroundProps> = ({ 
  image, 
  overlay = true,
  overlayColor = 'from-black/70 via-black/50 to-black/70',
  parallax = true,
  className = ''
}) => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, parallax ? -100 : 0]);

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <motion.div 
        style={{ y }}
        className="absolute inset-0 w-full h-[110%]"
      >
        <img 
          src={image} 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </motion.div>
      {overlay && (
        <div className={`absolute inset-0 bg-gradient-to-b ${overlayColor}`} />
      )}
    </div>
  );
};

// Sticky Card - Card that sticks while scrolling
interface StickyCardProps {
  children: React.ReactNode;
  index: number;
  totalCards: number;
  className?: string;
}

export const StickyCard: React.FC<StickyCardProps> = ({ 
  children, 
  index, 
  totalCards,
  className = '' 
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { margin: "-50% 0px -50% 0px" });

  const topOffset = `${index * 2}rem`;
  const scale = 1 - (index * 0.02);

  return (
    <motion.div
      ref={cardRef}
      className={`sticky ${className}`}
      style={{ 
        top: topOffset,
        zIndex: totalCards - index
      }}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ 
        scale: isInView ? 1 : scale,
        opacity: isInView ? 1 : 0.7
      }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};
