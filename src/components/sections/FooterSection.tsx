import React, { useState } from 'react';
import Container from '../ui/Container';
import Heading from '../ui/Heading';

const FooterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const currentYear = new Date().getFullYear();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter submission
    setEmail('');
  };

  return (
    <footer className="bg-primary-950 text-white">
      {/* Main Footer Content */}
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Company Info */}
          <div>
            <Heading level={3} className="text-white mb-6">
              BGS Gebäudeservice
            </Heading>
            <p className="text-white/70 mb-6 leading-relaxed">
              Seit über 25 Jahren Ihr zuverlässiger Partner für professionelle Reinigungsdienstleistungen.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <span className="text-xl">f</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <span className="text-xl">📷</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <span className="text-xl">in</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                aria-label="Twitter"
              >
                <span className="text-xl">𝕏</span>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <Heading level={4} className="text-white mb-6">
              Leistungen
            </Heading>
            <ul className="space-y-3">
              <li>
                <a href="/gebaeude" className="text-white/70 hover:text-white transition-colors">
                  Gebäudereinigung
                </a>
              </li>
              <li>
                <a href="/privatjet" className="text-white/70 hover:text-white transition-colors">
                  Privatjet-Reinigung
                </a>
              </li>
              <li>
                <a href="/buero" className="text-white/70 hover:text-white transition-colors">
                  Büroreinigung
                </a>
              </li>
              <li>
                <a href="/glas" className="text-white/70 hover:text-white transition-colors">
                  Glasreinigung
                </a>
              </li>
              <li>
                <a href="/spezial" className="text-white/70 hover:text-white transition-colors">
                  Spezialreinigung
                </a>
              </li>
              <li>
                <a href="/industrie" className="text-white/70 hover:text-white transition-colors">
                  Industriereinigung
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <Heading level={4} className="text-white mb-6">
              Unternehmen
            </Heading>
            <ul className="space-y-3">
              <li>
                <a href="/ueber-uns" className="text-white/70 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="/team" className="text-white/70 hover:text-white transition-colors">
                  Unser Team
                </a>
              </li>
              <li>
                <a href="/karriere" className="text-white/70 hover:text-white transition-colors">
                  Karriere
                </a>
              </li>
              <li>
                <a href="/referenzen" className="text-white/70 hover:text-white transition-colors">
                  Referenzen
                </a>
              </li>
              <li>
                <a href="/partner" className="text-white/70 hover:text-white transition-colors">
                  Partner werden
                </a>
              </li>
              <li>
                <a href="/presse" className="text-white/70 hover:text-white transition-colors">
                  Presse
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div>
            <Heading level={4} className="text-white mb-6">
              Newsletter
            </Heading>
            <p className="text-white/70 mb-4 text-sm">
              Bleiben Sie informiert über Neuigkeiten und Angebote.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="mb-6">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Ihre E-Mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 outline-none focus:border-primary-400 focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="px-4 py-3 bg-primary-500 hover:bg-primary-600 rounded-lg font-medium transition-all"
                >
                  Abonnieren
                </button>
              </div>
            </form>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 text-white/70">
                <span className="text-primary-400 mt-1">📍</span>
                <div>
                  <div className="font-medium text-white mb-1">Adresse</div>
                  <div>Musterstraße 123</div>
                  <div>12345 Musterstadt</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <span className="text-primary-400 mt-1">📞</span>
                <div>
                  <div className="font-medium text-white mb-1">Telefon</div>
                  <div>+49 (0) 123 456789</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-white/70">
                <span className="text-primary-400 mt-1">✉️</span>
                <div>
                  <div className="font-medium text-white mb-1">E-Mail</div>
                  <div>info@bgs-gebaeudeservice.de</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-white/60 text-sm text-center md:text-left">
              © {currentYear} BGS Gebäudeservice. Alle Rechte vorbehalten.
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <a href="/impressum" className="text-white/60 hover:text-white transition-colors">
                Impressum
              </a>
              <a href="/datenschutz" className="text-white/60 hover:text-white transition-colors">
                Datenschutz
              </a>
              <a href="/agb" className="text-white/60 hover:text-white transition-colors">
                AGB
              </a>
              <a href="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookie-Einstellungen
              </a>
            </div>

            {/* Certifications */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <span className="text-lg">🌿</span>
                <span>Umweltzertifiziert</span>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-xs">
                <span className="text-lg">✓</span>
                <span>DIN-geprüft</span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default FooterSection;
