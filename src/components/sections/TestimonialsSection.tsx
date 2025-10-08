import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Card from '../ui/Card';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Michael Schmidt',
    role: 'Geschäftsführer',
    company: 'Schmidt & Partner GmbH',
    content: 'Die Zusammenarbeit mit BGS ist hervorragend. Seit 5 Jahren verlassen wir uns auf ihre professionelle Gebäudereinigung. Das Team ist zuverlässig, flexibel und arbeitet auf höchstem Niveau.',
    rating: 5
  },
  {
    id: '2',
    name: 'Sarah Weber',
    role: 'Facility Manager',
    company: 'TechCorp Deutschland',
    content: 'BGS übertrifft unsere Erwartungen kontinuierlich. Die Qualität der Reinigung und der Service sind außergewöhnlich. Besonders schätzen wir die umweltfreundlichen Reinigungsmittel.',
    rating: 5
  },
  {
    id: '3',
    name: 'Thomas Müller',
    role: 'Privatjet-Besitzer',
    company: 'Müller Aviation',
    content: 'Für die Reinigung unserer Flotte vertrauen wir ausschließlich auf BGS. Die Spezialreinigung für Privatjets wird mit größter Sorgfalt und Professionalität durchgeführt.',
    rating: 5
  },
  {
    id: '4',
    name: 'Lisa Hoffmann',
    role: 'Praxismanagerin',
    company: 'Zahnarztpraxis Dr. Hoffmann',
    content: 'Hygiene ist in unserer Praxis das A und O. BGS erfüllt alle unsere hohen Anforderungen perfekt. Die Reinigung erfolgt diskret außerhalb der Sprechzeiten.',
    rating: 5
  }
];

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(-30px)',
    config: { tension: 120, friction: 25 }
  });

  const cardSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.9)',
    config: { tension: 120, friction: 25 }
  });

  return (
    <Section variant="gradient" className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl" />

      <Container className="relative z-10" ref={ref}>
        {/* Centered Header */}
        <animated.div style={headerSpring} className="text-center mb-16">
          <Heading level={2} className="text-white mb-4">
            Das sagen unsere Kunden
          </Heading>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Überzeugen Sie sich von den Erfahrungen unserer zufriedenen Kunden
          </p>
        </animated.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <animated.div style={cardSpring}>
            <Card variant="glass" className="relative">
              {/* Glow effect on card */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-2xl blur opacity-30" />

              <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12">
                {/* Quote Icon */}
                <div className="text-6xl text-primary-300 mb-6 opacity-50">"</div>

                {/* Content */}
                <p className="text-white text-lg md:text-xl leading-relaxed mb-8">
                  {testimonials[activeIndex].content}
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary-500/30 flex items-center justify-center text-2xl text-white">
                    {testimonials[activeIndex].name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-primary-300 text-sm">
                      {testimonials[activeIndex].role}
                    </div>
                    <div className="text-white/60 text-sm">
                      {testimonials[activeIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </animated.div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-3 bg-primary-400'
                    : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={() => {
                setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
                setIsAutoPlaying(false);
              }}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
                setIsAutoPlaying(false);
              }}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-white/70">Zufriedene Kunden</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">4.9/5</div>
            <div className="text-white/70">Durchschnittsbewertung</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-white/70">Weiterempfehlungsrate</div>
          </div>
          <div className="text-white">
            <div className="text-4xl font-bold mb-2">25+</div>
            <div className="text-white/70">Jahre Erfahrung</div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default TestimonialsSection;
