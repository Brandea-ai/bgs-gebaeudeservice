import type { HeroPath } from '../de/hero'

/**
 * Frase breve dell’hero per pagina (E84): il vantaggio in una frase, al massimo circa 110 caratteri.
 * L’introduzione completa si trova subito sotto l’hero (IntroBand).
 */
export const heroLines: Record<HeroPath, string> = {
  '/': 'Immobili, uffici e capannoni puliti a Lucerna, Zugo e dintorni. L’offerta segue il sopralluogo.',
  '/leistungen': 'Pulizia regolare, interventi singoli o custodia. Chiariamo cosa serve durante il sopralluogo.',
  '/leistungen/unterhaltsreinigung': 'Vano scala, ingresso e spazi comuni puliti a ritmo fisso, senza che debba occuparsene.',
  '/leistungen/bueroreinigung': 'Uffici e studi puliti in orari che non disturbano la Sua attività.',
  '/leistungen/sonderreinigungen': 'Quando la pulizia ordinaria non basta più: contro calcare, grasso e vecchi strati sui pavimenti.',
  '/leistungen/umzugsreinigung': 'Pulizia di fine locazione con garanzia di consegna per amministrazioni, proprietari e aziende.',
  '/leistungen/baureinigung': 'Dalla polvere di cantiere a spazi pronti per l’uso, puntuali per la consegna.',
  '/leistungen/fenster-und-fassadenreinigung': 'Vetri limpidi e facciate curate, una tantum o regolarmente, con il metodo adatto al materiale.',
  '/leistungen/industrie-und-hallenreinigung': 'Pavimenti e impianti puliti e sicuri in produzione e magazzino, secondo i Suoi turni.',
  '/leistungen/hauswartung': 'Custodia per amministrazioni e proprietari a Lucerna, Zugo e dintorni, dai controlli al piccolo mantenimento.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Cura dei giardini per amministrazioni e aziende a Lucerna, Zugo e dintorni, dalle siepi ai vialetti.',
  '/leistungen/facility-services': 'Pulizia, custodia e cura degli esterni con un solo contratto e un solo referente.',
  '/premium': 'Per ville, residenze, jet privati e yacht, con un team fisso e cure adatte ai materiali.',
  '/premium/luxusimmobilien': 'Pietra naturale, parquet e superfici lucide in buone mani, anche durante la Sua assenza.',
  '/premium/privatjet': 'Cura per pelle, legno e tessuti pregiati, pianificata secondo i Suoi voli.',
  '/premium/yacht': 'La Sua barca curata dentro e fuori, sul lago dei Quattro Cantoni e sul lago di Zugo.',
  '/einzugsgebiet': 'Da Emmenbrücke in cinque cantoni, con tutti i servizi in tutta la regione.',
  '/einzugsgebiet/luzern': 'Da Emmenbrücke in tutto il cantone, dalla città di Lucerna fino all’Entlebuch.',
  '/einzugsgebiet/zug': 'Pulizia di edifici residenziali e commerciali in tutto il Cantone di Zugo, secondo la Sua attività.',
  '/einzugsgebiet/aargau': 'Pulizia per produzione, magazzino e artigianato in tutto il Cantone di Argovia.',
  '/einzugsgebiet/nidwalden': 'Per edifici residenziali e commerciali, seconde case e ville, dalla riva del lago alla valle di Engelberg.',
  '/einzugsgebiet/obwalden': 'Nel Sarneraatal e a Engelberg, per immobili, aziende, seconde case e alberghi.',
  '/ueber-uns': 'Pulizia e custodia di stabili per amministrazioni, proprietari e aziende, da Emmenbrücke.',
  '/blog': 'Guide pratiche su custodia, riconsegna dell’alloggio, cura dei pavimenti e costi di pulizia.',
}
