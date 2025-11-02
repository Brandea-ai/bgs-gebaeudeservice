import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  scale?: boolean;
  blur?: boolean;
  overlay?: boolean;
  overlayOpacity?: number;
}

interface ParallaxLayerProps {
  children: ReactNode;
  speed: number;
  className?: string;
  direction?: "vertical" | "horizontal";
}

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Premium Parallax Section with smooth scroll effects
export function ParallaxSection({ children, className = "", speed = 0.5 }: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}

// Advanced Parallax Image with multiple effects
export function ParallaxImage({ 
  src, 
  alt, 
  className = "", 
  speed = 0.3, 
  scale = true,
  blur = false,
  overlay = true,
  overlayOpacity = 0.3
}: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], [`${-speed * 100}%`, `${speed * 100}%`]);
  const scaleValue = useTransform(smoothProgress, [0, 0.5, 1], scale ? [1.2, 1, 1.2] : [1, 1, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.6, 1, 1, 0.6]);
  const blurValue = useTransform(smoothProgress, [0, 0.5, 1], blur ? [8, 0, 8] : [0, 0, 0]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        style={{ 
          y,
          scale: scaleValue,
          opacity,
        }}
        className="w-full h-full"
      >
        <motion.img
          src={src}
          alt={alt}
          style={{
            filter: useTransform(blurValue, (v) => `blur(${v}px)`),
          }}
          className="w-full h-full object-cover"
        />
      </motion.div>
      {overlay && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-black/0 via-transparent to-black/20"
          style={{ opacity: useTransform(smoothProgress, [0, 0.5, 1], [overlayOpacity, 0, overlayOpacity]) }}
        />
      )}
    </div>
  );
}

// Multi-layer parallax for depth effect
export function ParallaxLayer({ 
  children, 
  speed, 
  className = "",
  direction = "vertical" 
}: ParallaxLayerProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], direction === "vertical" ? ["0%", `${speed * 100}%`] : ["0%", "0%"]);
  const x = useTransform(smoothProgress, [0, 1], direction === "horizontal" ? ["0%", `${speed * 100}%`] : ["0%", "0%"]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y, x }}>
        {children}
      </motion.div>
    </div>
  );
}

// Reveal on scroll with stagger
export function RevealOnScroll({ children, className = "", delay = 0 }: RevealOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ opacity, y, scale }}
        transition={{ delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

// Smooth parallax background
export function ParallaxBackground({ 
  src, 
  className = "",
  speed = 0.5,
  overlay = true 
}: { src: string; className?: string; speed?: number; overlay?: boolean }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, speed * 1000]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${src})` }}
        />
      </motion.div>
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50" />
      )}
    </div>
  );
}

// Horizontal scroll parallax
export function HorizontalParallax({ children, speed = 0.5 }: { children: ReactNode; speed?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [`${-speed * 50}%`, `${speed * 50}%`]);

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div style={{ x }}>
        {children}
      </motion.div>
    </div>
  );
}

// Zoom on scroll effect
export function ZoomOnScroll({ 
  children, 
  className = "",
  maxScale = 1.5 
}: { children: ReactNode; className?: string; maxScale?: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, maxScale, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.5, 1, 1, 0.5]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ scale, opacity }}>
        {children}
      </motion.div>
    </div>
  );
}

// Sticky parallax section
export function StickyParallax({ 
  children, 
  className = "",
  height = "200vh" 
}: { children: ReactNode; className?: string; height?: string }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  return (
    <div ref={ref} style={{ height }} className={className}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ scale, opacity }} className="w-full h-full">
          {children}
        </motion.div>
      </div>
    </div>
  );
}

// 3D Tilt effect on hover
export function TiltCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        rotateX: 5, 
        rotateY: 5,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      style={{ 
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic hover effect
export function MagneticHover({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    ref.current.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = 'translate(0px, 0px)';
  };

  return (
    <div
      ref={ref}
      className={`transition-transform duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
}
