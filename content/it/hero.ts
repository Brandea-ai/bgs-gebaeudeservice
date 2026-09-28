import type { HeroPath } from '../de/hero'

/**
 * Frase breve dell’hero per pagina (E84): il vantaggio in una frase, al massimo circa 110 caratteri.
 * L’introduzione completa si trova subito sotto l’hero (IntroBand).
 */
export const heroLines: Record<HeroPath, string> = {
  '/': 'Immobili, uffici e capannoni puliti a Lucerna, Zugo e dintorni. L’offerta segue il sopralluogo.',
  '/leistungen': 'Pulizia regolare, interventi singoli o custodia. Chiariamo cosa serve durante il sopralluogo.',
  '/leistungen/unterhaltsreinigung': 'Vano scala, ingresso e spazi comuni puliti a ritmo fisso, senza che debba occuparsene.',
  '/leistungen/bueroreinigung': 'Uffici e studi puliti in orari che non disturbano la sua attività.',
  '/leistungen/sonderreinigungen': 'Quando la pulizia ordinaria non basta più: contro calcare, grasso e vecchi strati sui pavimenti.',
  '/leistungen/umzugsreinigung': 'Pulizia finale per la data di riconsegna. Se l’amministrazione contesta, ripuliamo gratuitamente.',
  '/leistungen/baureinigung': 'Dalla polvere di cantiere a spazi pronti per l’uso, puntuali per la consegna.',
  '/leistungen/fenster-und-fassadenreinigung': 'Vetri limpidi e facciate curate, una tantum o regolarmente, con il metodo adatto al materiale.',
  '/leistungen/industrie-und-hallenreinigung': 'Pavimenti e impianti puliti e sicuri in produzione e magazzino, secondo i vostri turni.',
  '/leistungen/hauswartung': 'Qualcuno che controlla regolarmente, ripara piccoli danni e segnala i difetti.',
  '/leistungen/aussen-und-gruenflaechenpflege': 'Aree verdi curate, vialetti e piazzali puliti. La prima impressione del suo immobile.',
  '/leistungen/facility-services': 'Pulizia, custodia e cura degli esterni con un solo contratto e un solo referente.',
  '/premium': 'Per ville, residenze, jet privati e yacht. Sempre lo stesso team, discreto e nella sua lingua.',
  '/premium/luxusimmobilien': 'Pietra naturale, parquet e superfici lucide in buone mani, sempre con lo stesso team di fiducia.',
  '/premium/privatjet': 'Cura per pelle, legno e tessuti pregiati, pianificata secondo i suoi voli.',
  '/premium/yacht': 'La sua barca curata dentro e fuori, sul lago dei Quattro Cantoni e sul lago di Zugo.',
  '/einzugsgebiet': 'Da Emmenbrücke in cinque cantoni, con tutti i servizi in tutta la regione.',
  '/einzugsgebiet/luzern': 'Da Emmenbrücke in tutto il cantone, dalla città di Lucerna fino all’Entlebuch.',
  '/einzugsgebiet/zug': 'Pulizie adatte alla sua attività, anche in inglese, francese e italiano.',
  '/einzugsgebiet/aargau': 'Pulizie per produzione, magazzino e artigianato, secondo turni e processi.',
  '/einzugsgebiet/nidwalden': 'Per edifici residenziali e commerciali, seconde case e ville, dalla riva del lago alla valle di Engelberg.',
  '/einzugsgebiet/obwalden': 'Nel Sarneraatal e a Engelberg, per immobili, aziende, seconde case e alberghi.',
  '/ueber-uns': 'Oltre 50 collaboratori seguono più di 120 clienti in cinque cantoni, in quattro lingue.',
  '/blog': 'Risposte su assegnazione, costi e svolgimento di una pulizia di edifici.',
}
