import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Card from '../ui/Card';

interface Feature {
  id: string;
  icon: string;
  title: string;
  description: string;
  size: 'large' | 'medium' | 'small';
}

const features: Feature[] = [
  {
    id: 'quality',
    icon: '✨',
    title: 'Höchste Qualität',
    description: 'Zertifizierte Reinigungsprozesse nach DIN-Normen mit regelmäßigen Qualitätskontrollen',
    size: 'large'
  },
  {
    id: 'eco',
    icon: '🌿',
    title: 'Umweltfreundlich',
    description: 'Biologisch abbaubare Reinigungsmittel und nachhaltige Verfahren',
    size: 'medium'
  },
  {
    id: 'team',
    icon: '👥',
    title: 'Erfahrenes Team',
    description: 'Geschulte Fachkräfte mit langjähriger Expertise',
    size: 'medium'
  },
  {
    id: 'flexible',
    icon: '🕐',
    title: 'Flexibel',
    description: 'Termine nach Ihren Wünschen, auch außerhalb der Geschäftszeiten',
    size: 'small'
  },
  {
    id: 'insurance',
    icon: '🛡️',
    title: 'Versichert',
    description: 'Vollständig versichert für Ihre Sicherheit',
    size: 'small'
  },
  {
    id: 'technology',
    icon: '🤖',
    title: 'Moderne Technik',
    description: 'Neueste Reinigungsgeräte und -technologien',
    size: 'small'
  }
];

const AnimatedIcon: React.FC<{ icon: string; inView: boolean }> = ({ icon, inView }) => {
  const spring = useSpring({
    from: { scale: 0, rotate: -180 },
    to: { scale: inView ? 1 : 0, rotate: inView ? 0 : -180 },
    config: { tension: 200, friction: 20 }
  });

  return (
    <animated.div
      style={{
        transform: spring.scale.to(s => `scale(${s}) rotate(${spring.rotate.to(r => r)}deg)`)
      }}
      className="text-6xl mb-4"
    >
      {icon}
    </animated.div>
  );
};

const FeaturesSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const contentSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-50px)',
    config: { tension: 120, friction: 25 }
  });

  return (
    <Section variant="solid" className="bg-primary-900 text-white">
      <Container ref={ref}>
        {/* Left-aligned Header */}
        <animated.div style={contentSpring} className="mb-16 max-w-2xl">
          <Heading level={2} className="text-white mb-4">
            Warum BGS Gebäudeservice?
          </Heading>
          <p className="text-xl text-white/80 leading-relaxed">
            Entdecken Sie die Vorteile, die unsere Kunden seit über 25 Jahren schätzen.
            Qualität, Zuverlässigkeit und Nachhaltigkeit stehen bei uns an erster Stelle.
          </p>
        </animated.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
          {features.map((feature, index) => {
            const delay = index * 100;
            const cardSpring = useSpring({
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0px)' : 'translateY(30px)',
              config: { tension: 120, friction: 25 },
              delay
            });

            const getGridClass = () => {
              switch (feature.size) {
                case 'large':
                  return 'md:col-span-2 lg:row-span-2';
                case 'medium':
                  return 'md:col-span-1 lg:row-span-2';
                default:
                  return 'md:col-span-1';
              }
            };

            return (
              <animated.div
                key={feature.id}
                style={cardSpring}
                className={getGridClass()}
              >
                <Card
                  variant="glass"
                  className="h-full hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <AnimatedIcon icon={feature.icon} inView={inView} />
                  <Heading level={3} className="text-white mb-3 group-hover:text-primary-300 transition-colors">
                    {feature.title}
                  </Heading>
                  <p className="text-white/70 leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              </animated.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturesSection;
