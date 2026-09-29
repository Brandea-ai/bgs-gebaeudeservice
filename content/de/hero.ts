import type { PagePath } from '../../shared/seo'

export type HeroPath = Exclude<PagePath, '/impressum' | '/datenschutz' | '/kontakt' | `/blog/${string}`>

/**
 * Kurzsatz im Hero je Seite (E84): Nutzen in einem Satz, höchstens rund 110 Zeichen.
 * Die ausführliche Einleitung steht direkt unter dem Hero (IntroBand).
 */
export const heroLines: Record<HeroPath, string> = {
  '/': 'Saubere Liegenschaften, Büros und Hallen in Luzern, Zug und Umgebung. Die Offerte folgt nach der Besichtigung.',
  '/leistungen': 'Laufende Reinigung, einmalige Einsätze oder Hauswartung. Was passt, klären wir bei der Besichtigung.',
  '/leistungen/unterhaltsreinigung': 'Treppenhaus, Eingang und Gemeinschaftsräume im festen Rhythmus sauber, ohne dass Sie sich darum kümmern.',
  '/leistungen/bueroreinigung': 'Saubere Büros und Praxen zu Zeiten, die Ihren Betrieb nicht stören.',
  '/leistungen/sonderreinigungen': 'Wenn die laufende Reinigung nicht mehr reicht: gegen Kalk, Fett und alte Schichten auf Böden.',
  '/leistungen/umzugsreinigung': 'Endreinigung mit Abnahmegarantie für Verwaltungen, Eigentümer und Unternehmen, bereit für die Übergabe.',
  '/leistungen/baureinigung': 'Vom Baustaub zur bezugsbereiten Fläche, pünktlich zum Übergabetermin.',
  '/leistungen/fenster-und-fassadenreinigung': 'Klare Fenster und gepflegte Fassaden, einmalig oder regelmässig, mit der Methode, die zum Material passt.',
  '/leistungen/industrie-und-hallenreinigung': 'Saubere, sichere Böden und Anlagen in Produktion und Lager, abgestimmt auf Ihre Schichten.',
  '/leistungen/hauswartung': 'Hauswartung für Verwaltungen und Eigentümer in Luzern, Zug und Umgebung, vom Kontrollgang bis zum Unterhalt.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Gartenpflege für Verwaltungen und Unternehmen in Luzern, Zug und Umgebung, von der Hecke bis zum Vorplatz.',
  '/leistungen/facility-services': 'Reinigung, Hauswartung und Umgebungspflege mit einem Vertrag und einer Ansprechperson.',
  '/premium': 'Für Villen, Residenzen, Privatjets und Yachten, mit festem Team und Pflege passend zum Material.',
  '/premium/luxusimmobilien': 'Naturstein, Parkett und Hochglanz in guten Händen, auch während Ihrer Abwesenheit.',
  '/premium/privatjet': 'Sorgfalt für Leder, Holz und feine Textilien, geplant nach Ihren Flügen.',
  '/premium/yacht': 'Ihr Boot innen und aussen gepflegt, am Vierwaldstättersee und am Zugersee.',
  '/einzugsgebiet': 'Von Emmenbrücke aus in fünf Kantonen, mit allen Leistungen im ganzen Gebiet.',
  '/einzugsgebiet/luzern': 'Von Emmenbrücke aus im ganzen Kanton, von der Stadt Luzern bis ins Entlebuch.',
  '/einzugsgebiet/zug': 'Reinigung für Wohn- und Geschäftshäuser im ganzen Kanton Zug, abgestimmt auf Ihren Betrieb.',
  '/einzugsgebiet/aargau': 'Reinigung für Produktion, Lager und Gewerbe im ganzen Kanton Aargau, abgestimmt auf Ihre Abläufe.',
  '/einzugsgebiet/nidwalden': 'Für Wohn- und Geschäftshäuser, Zweitwohnungen und Villen, vom Seeufer bis ins Engelbergertal.',
  '/einzugsgebiet/obwalden': 'Im Sarneraatal und in Engelberg, für Liegenschaften, Gewerbe, Zweitwohnungen und Hotels.',
  '/ueber-uns': 'Reinigung und Hauswartung für Verwaltungen, Eigentümer und Unternehmen, von Emmenbrücke aus.',
  '/blog': 'Praxishilfen zu Hauswartung, Wohnungsabgabe, Bodenpflege und Reinigungskosten.',
}
