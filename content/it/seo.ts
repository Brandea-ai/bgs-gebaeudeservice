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
    title: 'Pulizia di ville e cura di immobili di pregio',
    description: 'Pulizia di ville a Lucerna, Zugo e dintorni: pietra naturale, parquet e lacca ben curati, anche in Sua assenza. Offerta gratuita dopo il sopralluogo.',
  },
  '/premium/privatjet': {
    label: 'Jet privato',
    title: 'Pulizia di jet privati: cabina e cucina di bordo',
    description: 'Pulizia di jet privati per cabina, cucina di bordo e toilette, con i prodotti approvati per il Suo aeromobile. Offerta gratuita dopo il sopralluogo.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Pulizia di barche e yacht a Lucerna e Zugo',
    description: 'Pulizia di barche e yacht all’ormeggio: teak, gelcoat, imbottiture e salone, sui laghi dei Quattro Cantoni e di Zugo. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen': {
    label: 'Servizi',
    title: 'Servizi: pulizia e custodia di stabili',
    description: `Pulizia di manutenzione, uffici, cantiere, vetri e industriale, pulizie speciali, custodia e facility services di ${company.brand} a Lucerna e Zugo.`,
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Pulizia di manutenzione',
    title: 'Pulizia di manutenzione, Lucerna e Zugo',
    description: 'Pulizia di manutenzione e delle scale per condomini, con rifornimento dei consumabili. A Lucerna, Zugo e dintorni. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/bueroreinigung': {
    label: 'Pulizia di uffici e studi',
    title: 'Pulizia di uffici a Lucerna e Zugo',
    description: 'Pulizia di uffici e studi medici fuori orario, con elenco delle prestazioni da stampare. Lucerna, Zugo e dintorni. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/sonderreinigungen': {
    label: 'Pulizie a fondo e speciali',
    title: 'Pulizie a fondo e speciali, Lucerna e Zugo',
    description: 'Pulizie a fondo e speciali di pavimenti, fughe e servizi igienici secondo il rivestimento, a Lucerna, Zugo e dintorni. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/umzugsreinigung': {
    label: 'Pulizia di fine locazione',
    title: 'Pulizia di fine locazione a Lucerna per amministrazioni',
    description: 'Pulizia di fine locazione con garanzia di consegna per amministrazioni, proprietari e aziende a Lucerna e Zugo. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/baureinigung': {
    label: 'Pulizia di cantiere e di fine cantiere',
    title: 'Pulizia di cantiere a Lucerna e Zugo',
    description: 'Pulizia di cantiere e di fine cantiere a Lucerna, Zugo e dintorni, a tappe fino al collaudo, con liste da stampare. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Pulizia di vetri e facciate',
    title: 'Pulizia di vetri e facciate a Lucerna e Zugo',
    description: 'Pulizia di vetri e facciate con checklist e modello di avviso agli inquilini, a Lucerna, Zugo e dintorni. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Pulizia industriale e di capannoni',
    title: 'Pulizia industriale e di capannoni',
    description: 'Pulizia industriale e di capannoni per produzione e magazzino, per zone e turni, con liste di controllo da stampare. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/hauswartung': {
    label: 'Custodia di stabili',
    title: 'Custodia di stabili a Lucerna e Zugo',
    description: 'Custodia di stabili a Lucerna, Zugo e dintorni: giri di controllo, vano scale, lavanderia, capitolato da stampare. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Manutenzione delle aree esterne e verdi',
    title: 'Manutenzione di giardini e aree verdi a Lucerna',
    description: 'Manutenzione di giardini e aree verdi a Lucerna, Zugo e dintorni: prato, siepi in inverno, erbacce e foglie dai vialetti. Offerta gratuita dopo il sopralluogo.',
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services a Lucerna e Zugo, un solo contratto',
    description: 'Facility services a Lucerna, Zugo e dintorni: pulizia, custodia e cura delle aree esterne in un unico contratto. Offerta gratuita dopo il sopralluogo.',
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
    description: `Guida di ${company.brand}: come scegliere un’impresa di pulizie e da che cosa dipendono i costi della pulizia di manutenzione.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Scegliere l’impresa di pulizie',
    title: 'Come scegliere l’impresa di pulizie',
    description: 'Entità del servizio, assicurazione, controllo della qualità, referenze e offerta: i punti da chiarire prima di incaricare un’impresa di pulizie.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Costi della pulizia di manutenzione',
    title: 'Pulizia di manutenzione: quanto costa?',
    description: 'Da che cosa dipende il prezzo di una pulizia di manutenzione: superficie, cadenza, utilizzo e orari d’intervento. Con consigli per confrontare le offerte.',
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
