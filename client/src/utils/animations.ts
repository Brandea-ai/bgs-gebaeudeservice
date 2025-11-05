import { Variants } from 'framer-motion';

// Premium easing curves
export const easings = {
  smooth: [0.22, 1, 0.36, 1] as const,
  spring: [0.34, 1.56, 0.64, 1] as const,
  elastic: [0.68, -0.55, 0.265, 1.55] as const,
  premium: [0.645, 0.045, 0.355, 1] as const,
  bounce: [0.175, 0.885, 0.32, 1.275] as const,
};

// Fade in animations
export const fadeInUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

export const fadeInDown: Variants = {
  hidden: { 
    opacity: 0, 
    y: -60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

export const fadeInLeft: Variants = {
  hidden: { 
    opacity: 0, 
    x: -80,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

export const fadeInRight: Variants = {
  hidden: { 
    opacity: 0, 
    x: 80,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

// Scale animations
export const scaleIn: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: easings.spring 
    }
  }
};

export const scaleUp: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 1.2 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1
    }
  }
};

export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Card animations
export const cardHover = {
  rest: { 
    scale: 1, 
    y: 0,
    boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)"
  },
  hover: { 
    scale: 1.05, 
    y: -10,
    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.15)",
    transition: { 
      duration: 0.3, 
      ease: easings.premium 
    }
  }
};

export const cardTilt = {
  rest: { 
    rotateX: 0, 
    rotateY: 0,
    scale: 1
  },
  hover: { 
    rotateX: 5, 
    rotateY: 5,
    scale: 1.05,
    transition: { 
      duration: 0.3, 
      ease: easings.premium 
    }
  }
};

// Image animations
export const imageZoom: Variants = {
  hidden: { 
    scale: 1.3, 
    opacity: 0 
  },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 1.2, 
      ease: easings.premium 
    }
  }
};

export const imageReveal: Variants = {
  hidden: { 
    clipPath: "inset(0 100% 0 0)" 
  },
  visible: { 
    clipPath: "inset(0 0% 0 0)",
    transition: { 
      duration: 1, 
      ease: easings.premium 
    }
  }
};

// Text animations
export const textReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 20
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.6,
      ease: easings.premium
    }
  })
};

export const letterReveal: Variants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.5,
      ease: easings.premium
    }
  })
};

// Slide animations
export const slideInLeft: Variants = {
  hidden: { 
    x: "-100%",
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

export const slideInRight: Variants = {
  hidden: { 
    x: "100%",
    opacity: 0
  },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

// Rotate animations
export const rotateIn: Variants = {
  hidden: { 
    opacity: 0,
    rotate: -180,
    scale: 0.5
  },
  visible: { 
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.spring 
    }
  }
};

// Flip animations
export const flipIn: Variants = {
  hidden: { 
    opacity: 0,
    rotateY: 90,
    scale: 0.8
  },
  visible: { 
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

// Blur animations
export const blurIn: Variants = {
  hidden: { 
    opacity: 0,
    filter: "blur(20px)"
  },
  visible: { 
    opacity: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

// Bounce animations
export const bounceIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0.3
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.6, 
      ease: easings.bounce 
    }
  }
};

// Elastic animations
export const elasticIn: Variants = {
  hidden: { 
    opacity: 0,
    scale: 0
  },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.elastic 
    }
  }
};

// Hover effects
export const hoverScale = {
  scale: 1.1,
  transition: { 
    duration: 0.3, 
    ease: easings.premium 
  }
};

export const hoverGlow = {
  boxShadow: "0 0 30px rgba(255, 255, 255, 0.3)",
  transition: { 
    duration: 0.3 
  }
};

export const hoverLift = {
  y: -10,
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.2)",
  transition: { 
    duration: 0.3, 
    ease: easings.premium 
  }
};

// Page transitions
export const pageTransition = {
  initial: { 
    opacity: 0, 
    y: 20 
  },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: easings.premium 
    }
  },
  exit: { 
    opacity: 0, 
    y: -20,
    transition: { 
      duration: 0.4, 
      ease: easings.premium 
    }
  }
};

// Scroll-triggered animations
export const scrollReveal = {
  hidden: { 
    opacity: 0, 
    y: 100 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

export const scrollScale = {
  hidden: { 
    opacity: 0, 
    scale: 0.8 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: easings.premium 
    }
  }
};

// Loading animations
export const pulseAnimation = {
  scale: [1, 1.05, 1],
  opacity: [1, 0.8, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }
};

export const spinAnimation = {
  rotate: 360,
  transition: {
    duration: 1,
    repeat: Infinity,
    ease: "linear"
  }
};

// Utility function to create custom stagger
export const createStagger = (staggerDelay: number = 0.1, childDelay: number = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: childDelay
    }
  }
});

// Utility function to create custom fade
export const createFade = (direction: 'up' | 'down' | 'left' | 'right' = 'up', distance: number = 60) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
    }
  };

  return {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition(),
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: easings.premium 
      }
    }
  };
};
