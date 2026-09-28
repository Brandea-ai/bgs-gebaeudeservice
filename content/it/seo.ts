import { company, premiumLabel } from '../../shared/company'
import { cantonListIt } from './common'
import { kantone } from './kantone'

/**
 * Nome, titolo e descrizione di ogni pagina in italiano (M16, M60). Stesse chiavi
 * (indirizzi tedeschi) della versione tedesca. Titoli senza marchio: metaFor()
 * in shared/seo.ts lo aggiunge. Solo affermazioni documentate (E18, E41).
 */

const region = cantonListIt

export const pages = {
  '/': {
    label: 'Home',
    title: `${company.brand} | Pulizie e custodia a Lucerna e Zugo`,
    description: `Pulizie, custodia di stabili e facility services per aziende e immobili nei Cantoni di ${region}, con linea premium.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Premium: pulizie per esigenze elevate',
    description: company.premiumBrand
      ? `${company.premiumBrand}, la linea premium di ${company.brand}: pulizie discrete per ville, abitazioni secondarie, alberghi, family office, jet privati e yacht.`
      : 'Pulizie discrete per ville, abitazioni secondarie, alberghi, family office, jet privati e yacht sui laghi dei Quattro Cantoni e di Zugo e nella regione.',
  },
  '/premium/luxusimmobilien': {
    label: 'Immobili di pregio',
    title: 'Pulizia di ville e immobili di pregio',
    description: 'Pulizia e cura discrete di ville, loft e residenze sul lago dei Quattro Cantoni, sul lago di Zugo e nella regione. Team fissi, offerta sul posto.',
  },
  '/premium/privatjet': {
    label: 'Jet privato',
    title: 'Pulizia di jet privati',
    description: 'Pulizia della cabina di jet privati con riguardo per i materiali di pregio. Servizio discreto, previo accordo e con team fissi.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Pulizia di yacht e imbarcazioni',
    description: 'Pulizia di yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo: interni, imbottiture, teak e gelcoat. Servizio discreto, previo accordo.',
  },
  '/leistungen': {
    label: 'Servizi',
    title: 'Servizi: pulizia e custodia di stabili',
    description: `Pulizia di manutenzione, uffici, cantiere, vetri e industriale, pulizie speciali, custodia e facility services di ${company.brand} a Lucerna e Zugo.`,
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Pulizia di manutenzione',
    title: 'Pulizia di manutenzione, Lucerna e Zugo',
    description: `Pulizia regolare di stabili, vani scale e superfici commerciali, con servizio di rifornimento. Nei Cantoni di ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    label: 'Pulizia di uffici e studi',
    title: 'Pulizia di uffici a Lucerna e Zugo',
    description: `Pulizia di uffici e studi in funzione dei Suoi orari di lavoro. Offerta gratuita sul posto nei Cantoni di ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    label: 'Pulizie a fondo e speciali',
    title: 'Pulizie a fondo e speciali, Lucerna e Zugo',
    description: 'Pulizia a fondo di abitazioni, uffici e superfici commerciali, una tantum o periodica. Per amministrazioni, proprietari e aziende a Lucerna e Zugo.',
  },
  '/leistungen/umzugsreinigung': {
    label: 'Pulizia di fine locazione',
    title: 'Pulizia di fine locazione con garanzia',
    description: 'Pulizia di fine locazione prima della riconsegna dell’appartamento, con garanzia di consegna. Per amministrazioni, proprietari e aziende a Lucerna e Zugo.',
  },
  '/leistungen/baureinigung': {
    label: 'Pulizia di cantiere e di fine cantiere',
    title: 'Pulizia di cantiere a Lucerna e Zugo',
    description: 'Pulizia durante e dopo lavori edili e ristrutturazioni, fino alla consegna. Per committenti, architetti e amministrazioni immobiliari a Lucerna e Zugo.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Pulizia di vetri e facciate',
    title: 'Pulizia di vetri e facciate',
    description: `Pulizia di finestre, vetrate e facciate, anche ad alta pressione, per aziende e stabili nei Cantoni di ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Pulizia industriale e di capannoni',
    title: 'Pulizia industriale e di capannoni',
    description: `Pulizia di capannoni e magazzini, macchinari e impianti, adeguata alla Sua attività. Nei Cantoni di ${region}.`,
  },
  '/leistungen/hauswartung': {
    label: 'Custodia di stabili',
    title: 'Custodia di stabili a Lucerna e Zugo',
    description: 'Custodia del Suo stabile: giri di controllo, vano scale, lavanderia, piccole riparazioni, impianti, consegne di appartamenti, smaltimento e aree esterne.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Manutenzione delle aree esterne e verdi',
    title: 'Manutenzione di aree esterne e verdi',
    description: `Manutenzione delle aree esterne e verdi del Suo stabile, da sola o insieme alla custodia. Nei Cantoni di ${region}.`,
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services da un solo fornitore',
    description: 'Pulizia, custodia e cura delle aree esterne in un unico contratto con un solo interlocutore. Per amministrazioni immobiliari e aziende a Lucerna e Zugo.',
  },
  '/einzugsgebiet': {
    label: 'Zona d’intervento',
    title: 'Attivi in Svizzera centrale e Argovia',
    description: `Da ${company.address.city} operiamo nei Cantoni di ${region}, anche sulle rive dei laghi e a Engelberg, con tutti i servizi.`,
  },
  '/einzugsgebiet/luzern': { label: 'Cantone di Lucerna', ...kantone.luzern.seo },
  '/einzugsgebiet/zug': { label: 'Cantone di Zugo', ...kantone.zug.seo },
  '/einzugsgebiet/aargau': { label: 'Cantone di Argovia', ...kantone.aargau.seo },
  '/einzugsgebiet/nidwalden': { label: 'Cantone di Nidvaldo', ...kantone.nidwalden.seo },
  '/einzugsgebiet/obwalden': { label: 'Cantone di Obvaldo', ...kantone.obwalden.seo },
  '/blog': {
    label: 'Guida',
    title: 'Guida alla pulizia di edifici',
    description: 'Guida per amministrazioni e aziende: compiti della custodia, riconsegna dell’appartamento, pavimenti, scelta dell’impresa e costi. Stampi i modelli.',
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Scegliere l’impresa di pulizie',
    title: 'Come scegliere l’impresa di pulizie',
    description: 'Incaricare un’impresa di pulizie: prestazioni, assicurazione, condizioni di lavoro e offerta. Stampi la griglia e confronti le offerte fianco a fianco.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Costi della pulizia di manutenzione',
    title: 'Pulizia di manutenzione: quanto costa?',
    description: 'Da che cosa dipendono i costi della pulizia di manutenzione: ore, cadenza, orari e salari. Verifichi le Sue offerte con il calcolo dell’importo mensile.',
  },
  '/blog/hauswartung-aufgaben': {
    label: 'Compiti della custodia',
    title: 'Compiti della custodia di stabili: il capitolato',
    description: 'I compiti della custodia nel capitolato: cadenza, limite di spesa, segnalazioni e spese accessorie, con un esempio compilato. Verifichi il Suo capitolato.',
  },
  '/blog/wohnungsabgabe-protokoll': {
    label: 'Riconsegna dell’appartamento',
    title: 'Riconsegna dell’appartamento: verbale e difetti',
    description: 'Riconsegna dell’appartamento per amministrazioni: quanto deve essere pulito e come descrivere e notificare i difetti in tempo. Stampi gli esempi di verbale.',
  },
  '/blog/bodenbelaege-reinigen': {
    label: 'Pulire bene i pavimenti',
    title: 'Pulire i pavimenti: pH, fughe e cura',
    description: 'Quali prodotti sopportano pietra naturale, piastrelle, linoleum, vinile e parquet. Stampi la tabella per il locale delle pulizie ed eviti i danni.',
  },
  '/ueber-uns': {
    label: 'Chi siamo',
    title: 'Chi siamo',
    description: `${company.legalName} di ${company.address.city}: dal 2006, oltre 50 collaboratori, oltre 120 clienti, consulenza in tedesco, inglese, francese e italiano.`,
  },
  '/kontakt': {
    label: 'Contatto',
    title: 'Contatto e offerta',
    description: `Ci telefoni al numero ${company.phone.display} o ci scriva un messaggio. Offerta gratuita sul posto, risposta entro 24 ore nei giorni feriali.`,
  },
  '/impressum': {
    label: 'Note legali',
    title: 'Note legali',
    description: `Note legali della ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: iscrizione nel registro di commercio, numero IDI e dati di contatto.`,
  },
  '/datenschutz': {
    label: 'Protezione dei dati',
    title: 'Protezione dei dati',
    description: `Dichiarazione sulla protezione dei dati: come la ${company.legalName} tratta i dati personali su questo sito web e quali diritti Le spettano.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>
