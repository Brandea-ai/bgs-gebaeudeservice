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
  '/leistungen/umzugsreinigung': 'Endreinigung auf den Abgabetermin. Beanstandet die Verwaltung etwas, reinigen wir kostenlos nach.',
  '/leistungen/baureinigung': 'Vom Baustaub zur bezugsbereiten Fläche, pünktlich zum Übergabetermin.',
  '/leistungen/fenster-und-fassadenreinigung': 'Klare Fenster und gepflegte Fassaden, einmalig oder regelmässig, mit der Methode, die zum Material passt.',
  '/leistungen/industrie-und-hallenreinigung': 'Saubere, sichere Böden und Anlagen in Produktion und Lager, abgestimmt auf Ihre Schichten.',
  '/leistungen/hauswartung': 'Jemand, der regelmässig nach dem Rechten sieht, kleine Schäden behebt und Mängel meldet.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Gepflegte Grünflächen, saubere Wege und Plätze. Der erste Eindruck Ihrer Liegenschaft.',
  '/leistungen/facility-services': 'Reinigung, Hauswartung und Umgebungspflege mit einem Vertrag und einer Ansprechperson.',
  '/premium': 'Für Villen, Residenzen, Privatjets und Yachten. Immer dasselbe Team, diskret und in Ihrer Sprache.',
  '/premium/luxusimmobilien': 'Naturstein, Parkett und Hochglanz in guten Händen, immer beim selben vertrauten Team.',
  '/premium/privatjet': 'Sorgfalt für Leder, Holz und feine Textilien, geplant nach Ihren Flügen.',
  '/premium/yacht': 'Ihr Boot innen und aussen gepflegt, am Vierwaldstättersee und am Zugersee.',
  '/einzugsgebiet': 'Von Emmenbrücke aus in fünf Kantonen, mit allen Leistungen im ganzen Gebiet.',
  '/einzugsgebiet/luzern': 'Von Emmenbrücke aus im ganzen Kanton, von der Stadt Luzern bis ins Entlebuch.',
  '/einzugsgebiet/zug': 'Reinigung, die sich nach Ihrem Geschäftsbetrieb richtet, auch auf Englisch, Französisch und Italienisch.',
  '/einzugsgebiet/aargau': 'Reinigung für Produktion, Lager und Gewerbe, abgestimmt auf Schichten und Abläufe.',
  '/einzugsgebiet/nidwalden': 'Für Wohn- und Geschäftshäuser, Zweitwohnungen und Villen, vom Seeufer bis ins Engelbergertal.',
  '/einzugsgebiet/obwalden': 'Im Sarneraatal und in Engelberg, für Liegenschaften, Gewerbe, Zweitwohnungen und Hotels.',
  '/ueber-uns': 'Über 50 Mitarbeitende betreuen mehr als 120 Kunden in fünf Kantonen, in vier Sprachen.',
  '/blog': 'Antworten zu Vergabe, Kosten und Ablauf einer Gebäudereinigung.',
}
