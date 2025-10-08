import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Button from '../ui/Button';

const CTASection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contentSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
    config: { tension: 120, friction: 25 }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <Section variant="gradient" className="relative overflow-hidden">
      {/* Full-width Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900" />

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }} />

      <Container className="relative z-10" ref={ref}>
        <animated.div style={contentSpring} className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <Heading level={2} className="text-white mb-6">
            Bereit für makellose Sauberkeit?
            <span className="block text-primary-200 mt-3 text-3xl">
              Fordern Sie jetzt Ihr kostenloses Angebot an
            </span>
          </Heading>

          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Erleben Sie professionelle Reinigungsdienstleistungen auf höchstem Niveau.
            Über 500 zufriedene Kunden vertrauen bereits auf unsere Expertise.
          </p>

          {/* Newsletter Form */}
          <div className="max-w-2xl mx-auto mb-12">
            {isSubmitted ? (
              <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
                <div className="text-6xl mb-4">✓</div>
                <Heading level={3} className="text-white mb-2">
                  Vielen Dank!
                </Heading>
                <p className="text-white/90">
                  Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Ihre E-Mail-Adresse"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-6 py-4 rounded-xl bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-4 focus:ring-white/30 transition-all text-lg"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    variant="secondary"
                    className="md:w-auto whitespace-nowrap bg-white text-primary-700 hover:bg-gray-100"
                  >
                    Angebot anfordern
                  </Button>
                </div>
                <p className="text-white/70 text-sm mt-4">
                  Keine Sorge, wir respektieren Ihre Privatsphäre und senden keinen Spam.
                </p>
              </form>
            )}
          </div>

          {/* Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-5xl mb-3">⭐</div>
              <div className="text-3xl font-bold text-white mb-1">4.9/5</div>
              <div className="text-white/80">Kundenbewertung</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-5xl mb-3">🏆</div>
              <div className="text-3xl font-bold text-white mb-1">25+</div>
              <div className="text-white/80">Jahre Erfahrung</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
              <div className="text-5xl mb-3">✓</div>
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-white/80">Zufriedenheit</div>
            </div>
          </div>

          {/* Alternative CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" className="bg-white text-primary-700 hover:bg-gray-100">
              📞 Jetzt anrufen
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              💬 Chat starten
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-wrap items-center justify-center gap-8 text-white/60">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🛡️</span>
                <span className="text-sm">Vollversichert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌿</span>
                <span className="text-sm">Umweltfreundlich</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">✓</span>
                <span className="text-sm">Zertifiziert</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🕐</span>
                <span className="text-sm">24/7 Service</span>
              </div>
            </div>
          </div>
        </animated.div>
      </Container>
    </Section>
  );
};

export default CTASection;
