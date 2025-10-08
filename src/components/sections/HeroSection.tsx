import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [counters, setCounters] = useState({ years: 0, clients: 0, projects: 0, satisfaction: 0 });

  // Parallax effect for background image
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated entrance
  const contentSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(50px)',
    config: { tension: 120, friction: 25 }
  });

  // Counter animation
  useEffect(() => {
    if (!inView) return;

    const targets = { years: 25, clients: 500, projects: 1200, satisfaction: 98 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCounters({
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        projects: Math.floor(targets.projects * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [inView]);

  return (
    <Section
      variant="gradient"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-900/90 z-0" />

      <Container className="relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image/Visual (Hidden on mobile for right-aligned content focus) */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="aspect-square bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl" />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <animated.div style={contentSpring} className="text-white">
            <Heading level={1} className="text-white mb-6">
              Professionelle Gebäudereinigung
              <span className="block text-primary-300 mt-2">Für höchste Ansprüche</span>
            </Heading>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              BGS Gebäudeservice steht seit über 25 Jahren für exzellente Reinigungsleistungen.
              Vertrauen Sie auf unsere Expertise für Ihr Zuhause oder Unternehmen.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button size="lg" variant="primary">
                Jetzt Angebot erhalten
              </Button>
              <Button size="lg" variant="secondary">
                Leistungen entdecken
              </Button>
            </div>

            {/* Stats Counter */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{counters.years}+</div>
                <div className="text-sm text-white/70">Jahre Erfahrung</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{counters.clients}+</div>
                <div className="text-sm text-white/70">Zufriedene Kunden</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{counters.projects}+</div>
                <div className="text-sm text-white/70">Projekte</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-1">{counters.satisfaction}%</div>
                <div className="text-sm text-white/70">Zufriedenheit</div>
              </div>
            </div>
          </animated.div>
        </div>
      </Container>
    </Section>
  );
};

export default HeroSection;
