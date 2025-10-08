import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import Container from '../ui/Container';
import Section from '../ui/Section';
import Heading from '../ui/Heading';
import Card from '../ui/Card';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: '1',
    category: 'Allgemein',
    question: 'Welche Reinigungsleistungen bieten Sie an?',
    answer: 'Wir bieten ein umfassendes Spektrum an Reinigungsdienstleistungen: Gebäudereinigung, Büroreinigung, Glasreinigung, Spezialreinigung für Privatjets, Industriereinigung, Bauendreinigung und vieles mehr. Jede Leistung wird individuell auf Ihre Bedürfnisse zugeschnitten.'
  },
  {
    id: '2',
    category: 'Allgemein',
    question: 'In welchen Regionen sind Sie tätig?',
    answer: 'Unser Haupteinsatzgebiet umfasst die Metropolregion und das Umland. Für Spezialaufträge wie Privatjet-Reinigung sind wir bundesweit und international tätig. Kontaktieren Sie uns für spezifische Standortanfragen.'
  },
  {
    id: '3',
    category: 'Preise',
    question: 'Wie werden die Reinigungskosten berechnet?',
    answer: 'Die Kosten richten sich nach verschiedenen Faktoren: Größe der zu reinigenden Fläche, Art der Reinigung, Häufigkeit der Durchführung und spezielle Anforderungen. Wir erstellen Ihnen gerne ein individuelles, transparentes Angebot.'
  },
  {
    id: '4',
    category: 'Preise',
    question: 'Gibt es Rabatte bei langfristigen Verträgen?',
    answer: 'Ja, bei langfristigen Reinigungsverträgen bieten wir attraktive Konditionen. Sprechen Sie uns an – wir finden gemeinsam eine faire Lösung, die zu Ihrem Budget passt.'
  },
  {
    id: '5',
    category: 'Service',
    question: 'Sind Sie außerhalb der Geschäftszeiten verfügbar?',
    answer: 'Absolut! Wir wissen, dass viele Unternehmen Reinigungen außerhalb der Bürozeiten bevorzugen. Unsere Teams arbeiten flexibel – abends, nachts, am Wochenende oder nach individueller Vereinbarung.'
  },
  {
    id: '6',
    category: 'Service',
    question: 'Wie schnell können Sie mit der Reinigung beginnen?',
    answer: 'Bei Standardaufträgen können wir oft innerhalb weniger Tage starten. Für Notfälle und dringende Reinigungen bieten wir einen Express-Service. Kontaktieren Sie uns für eine genaue Zeitplanung.'
  },
  {
    id: '7',
    category: 'Umwelt',
    question: 'Verwenden Sie umweltfreundliche Reinigungsmittel?',
    answer: 'Ja, Nachhaltigkeit ist uns wichtig. Wir setzen auf biologisch abbaubare, umweltschonende Reinigungsmittel, die effektiv reinigen und gleichzeitig Mensch und Umwelt schützen. Alle Produkte sind zertifiziert.'
  },
  {
    id: '8',
    category: 'Umwelt',
    question: 'Welche Nachhaltigkeitsmaßnahmen ergreifen Sie?',
    answer: 'Neben umweltfreundlichen Reinigungsmitteln optimieren wir Ressourcenverbrauch, nutzen energieeffiziente Geräte, minimieren Abfall und schulen unser Team regelmäßig in nachhaltigen Reinigungsmethoden.'
  }
];

const categories = ['Alle', 'Allgemein', 'Preise', 'Service', 'Umwelt'];

const FAQSection: React.FC = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alle');
  const [openId, setOpenId] = useState<string | null>(null);

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'Alle' || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const headerSpring = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateX(0px)' : 'translateX(-50px)',
    config: { tension: 120, friction: 25 }
  });

  return (
    <Section variant="solid" className="bg-gray-50">
      <Container ref={ref}>
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: Header & Search */}
          <div className="lg:col-span-5">
            <animated.div style={headerSpring} className="lg:sticky lg:top-24">
              <Heading level={2} className="mb-4">
                Häufig gestellte Fragen
              </Heading>
              <p className="text-xl text-gray-600 mb-8">
                Finden Sie schnell Antworten auf die wichtigsten Fragen zu unseren Reinigungsdienstleistungen.
              </p>

              {/* Search */}
              <div className="mb-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Frage suchen..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  />
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                    🔍
                  </span>
                </div>
              </div>

              {/* Category Tabs */}
              <div className="space-y-2">
                <div className="text-sm font-medium text-gray-500 mb-3">Kategorien</div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      activeCategory === category
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="font-medium">{category}</span>
                    <span className="ml-2 text-sm opacity-70">
                      ({category === 'Alle' ? faqs.length : faqs.filter(f => f.category === category).length})
                    </span>
                  </button>
                ))}
              </div>

              {/* Contact CTA */}
              <Card variant="elevated" className="mt-8 bg-primary-50 border-primary-200">
                <div className="text-center">
                  <div className="text-4xl mb-3">💬</div>
                  <Heading level={4} className="mb-2">
                    Noch Fragen?
                  </Heading>
                  <p className="text-gray-600 text-sm mb-4">
                    Unser Team hilft Ihnen gerne weiter
                  </p>
                  <button className="w-full px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-all font-medium">
                    Kontakt aufnehmen
                  </button>
                </div>
              </Card>
            </animated.div>
          </div>

          {/* Right: FAQ Accordion */}
          <div className="lg:col-span-7">
            {filteredFaqs.length === 0 ? (
              <Card variant="elevated" className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <Heading level={3} className="mb-2">
                  Keine Ergebnisse gefunden
                </Heading>
                <p className="text-gray-600">
                  Versuchen Sie es mit anderen Suchbegriffen oder wählen Sie eine andere Kategorie.
                </p>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => {
                  const isOpen = openId === faq.id;
                  const faqSpring = useSpring({
                    opacity: inView ? 1 : 0,
                    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
                    config: { tension: 120, friction: 25 },
                    delay: index * 50
                  });

                  const contentSpring = useSpring({
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                    config: { tension: 250, friction: 30 }
                  });

                  return (
                    <animated.div key={faq.id} style={faqSpring}>
                      <Card
                        variant="elevated"
                        className={`cursor-pointer transition-all duration-300 ${
                          isOpen ? 'shadow-xl border-primary-300' : 'hover:shadow-lg'
                        }`}
                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                                {faq.category}
                              </span>
                            </div>
                            <Heading level={4} className="mb-2">
                              {faq.question}
                            </Heading>
                          </div>
                          <div
                            className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 transition-transform duration-300 ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          >
                            ↓
                          </div>
                        </div>

                        <animated.div style={contentSpring} className="overflow-hidden">
                          <div className="pt-4 border-t border-gray-200 mt-4">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </animated.div>
                      </Card>
                    </animated.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FAQSection;
