import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Card from '../ui/Card';
import Button from '../ui/Button';

interface Service {
  id: string;
  category: string;
  title: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'building',
    category: 'Gebäudereinigung',
    title: 'Professionelle Gebäudereinigung',
    description: 'Umfassende Reinigungslösungen für Büros, Geschäfte und öffentliche Gebäude',
    features: [
      'Tägliche Unterhaltsreinigung',
      'Glasreinigung innen und außen',
      'Sanitärreinigung',
      'Bodenreinigung & -pflege'
    ],
    image: '/images/building-cleaning.jpg'
  },
  {
    id: 'private',
    category: 'Privatjet',
    title: 'Exklusive Privatjet-Reinigung',
    description: 'Spezialisierte Reinigung für Privatjets mit höchsten Qualitätsstandards',
    features: [
      'Innenraumreinigung',
      'Lederpflege',
      'Kabinendesinfektion',
      'Express-Service verfügbar'
    ],
    image: '/images/jet-cleaning.jpg'
  },
  {
    id: 'special',
    category: 'Spezialreinigung',
    title: 'Spezialreinigungen',
    description: 'Maßgeschneiderte Lösungen für besondere Anforderungen',
    features: [
      'Bauendreinigung',
      'Industriereinigung',
      'Fassadenreinigung',
      'Sonderreinigungen'
    ],
    image: '/images/special-cleaning.jpg'
  }
];

const ServicesSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeTab, setActiveTab] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contentSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(50px)',
    config: { tension: 120, friction: 25 }
  });

  return (
    <Section variant="image" className="relative min-h-screen">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundImage: 'url(/images/services-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.1
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-primary-950/90 z-0" />

      <Container className="relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => {
              const cardSpring = useSpring({
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0px)' : 'translateY(30px)',
                config: { tension: 120, friction: 25 },
                delay: index * 150
              });

              return (
                <animated.div key={service.id} style={cardSpring}>
                  <Card
                    variant="glass"
                    className={`cursor-pointer transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-white/15 border-primary-400 scale-105'
                        : 'hover:bg-white/10'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-primary-500/20 flex items-center justify-center text-3xl">
                        {index === 0 ? '🏢' : index === 1 ? '✈️' : '🔧'}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-primary-300 mb-1">{service.category}</div>
                        <Heading level={3} className="text-white mb-2">
                          {service.title}
                        </Heading>
                        <p className="text-white/70 text-sm mb-3">{service.description}</p>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="text-white/60 text-sm flex items-center gap-2">
                              <span className="text-primary-400">✓</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                </animated.div>
              );
            })}
          </div>

          {/* Right: Content & Pricing */}
          <animated.div style={contentSpring} className="text-white">
            <Heading level={2} className="text-white mb-6">
              Unsere Leistungen
              <span className="block text-primary-300 mt-2 text-2xl">
                Maßgeschneiderte Lösungen
              </span>
            </Heading>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Von der regelmäßigen Gebäudereinigung bis zur exklusiven Privatjet-Pflege –
              wir bieten professionelle Reinigungslösungen für jeden Bedarf.
            </p>

            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === index
                      ? 'bg-primary-500 text-white'
                      : 'bg-white/10 text-white/70 hover:bg-white/20'
                  }`}
                >
                  {service.category}
                </button>
              ))}
            </div>

            {/* Pricing Table */}
            <Card variant="glass" className="mb-8">
              <Heading level={4} className="text-white mb-4">
                Leistungsübersicht
              </Heading>
              <div className="space-y-3">
                {services[activeTab].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                    <span className="text-white/80">{feature}</span>
                    <span className="text-primary-300 font-medium">Auf Anfrage</span>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="primary">
                Angebot anfordern
              </Button>
              <Button size="lg" variant="secondary">
                Mehr erfahren
              </Button>
            </div>
          </animated.div>
        </div>
      </Container>
    </Section>
  );
};

export default ServicesSection;
