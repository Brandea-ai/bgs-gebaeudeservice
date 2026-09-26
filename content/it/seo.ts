import { company, premiumLabel } from '../../shared/company'
import { cantonListIt } from './common'

/**
 * Nome, titolo e descrizione di ogni pagina in italiano (M16, M60). Stesse chiavi
 * (indirizzi tedeschi) della versione tedesca. Titoli senza marchio: metaFor()
 * in shared/seo.ts lo aggiunge. Solo affermazioni documentate (E18, E41).
 */

const region = cantonListIt

export const pages = {
  '/': {
    label: 'Pagina iniziale',
    title: `${company.brand} – Pulizie e custodia di stabili a Lucerna e Zugo`,
    description: `Pulizia di edifici, custodia di stabili e facility services per aziende e stabili nei Cantoni ${region}, oltre a pulizie premium.`,
  },
  '/premium': {
    label: premiumLabel,
    title: 'Premium: pulizie per esigenze particolari',
    description: company.premiumBrand
      ? `${company.premiumBrand}, la linea premium di ${company.brand}: pulizie discrete per ville, residenze secondarie, alberghi, family office, jet privati e yacht.`
      : 'Pulizie discrete per ville, residenze secondarie, alberghi, family office, jet privati e yacht sul lago dei Quattro Cantoni, sul lago di Zugo e nella regione.',
  },
  '/premium/luxusimmobilien': {
    label: 'Immobili di pregio',
    title: 'Pulizia di ville e immobili di pregio',
    description: 'Pulizia e cura discrete di ville, loft e residenze sul lago dei Quattro Cantoni, sul lago di Zugo e nella regione. Team fissi, offerta sul posto.',
  },
  '/premium/privatjet': {
    label: 'Jet privato',
    title: 'Pulizia di jet privati',
    description: 'Pulizia della cabina di jet privati con riguardo per i materiali di pregio. Discreta, secondo accordi e con team fissi, dalla Svizzera centrale.',
  },
  '/premium/yacht': {
    label: 'Yacht',
    title: 'Pulizia di yacht e imbarcazioni',
    description: 'Pulizia di yacht e motoscafi sul lago dei Quattro Cantoni e sul lago di Zugo: interni, imbottiture, teak e gelcoat. Discreta e secondo accordi.',
  },
  '/leistungen': {
    label: 'Servizi',
    title: 'Servizi: pulizia e custodia di stabili',
    description: `Pulizia di manutenzione, di uffici, speciale, di cantiere, di finestre e industriale, custodia e facility services di ${company.brand} a Lucerna, Zugo e dintorni.`,
  },
  '/leistungen/unterhaltsreinigung': {
    label: 'Pulizia di manutenzione',
    title: 'Pulizia di manutenzione a Lucerna e Zugo',
    description: `Pulizia regolare di stabili, vani scale e superfici commerciali, con servizio di rifornimento. Nei Cantoni ${region}.`,
  },
  '/leistungen/bueroreinigung': {
    label: 'Pulizia di uffici e studi',
    title: 'Pulizia di uffici e studi a Lucerna e Zugo',
    description: `Pulizia di uffici e studi in funzione dei Suoi orari di lavoro. Offerta gratuita sul posto nei Cantoni ${region}.`,
  },
  '/leistungen/sonderreinigungen': {
    label: 'Pulizie speciali',
    title: 'Pulizie speciali: a fondo e di fine locazione',
    description: 'Pulizia a fondo e pulizia di fine locazione con garanzia di riconsegna per amministrazioni, proprietari e aziende a Lucerna, Zugo e dintorni.',
  },
  '/leistungen/baureinigung': {
    label: 'Pulizia di cantiere',
    title: 'Pulizia di fine cantiere a Lucerna e Zugo',
    description: 'Pulizia durante e dopo lavori di costruzione e ristrutturazione, fino alla consegna. Per committenti, architetti e amministrazioni a Lucerna e Zugo.',
  },
  '/leistungen/fenster-und-fassadenreinigung': {
    label: 'Pulizia di finestre e facciate',
    title: 'Pulizia di finestre e facciate',
    description: `Pulizia di finestre, superfici vetrate e facciate, anche ad alta pressione, per aziende e stabili nei Cantoni ${region}.`,
  },
  '/leistungen/industrie-und-hallenreinigung': {
    label: 'Pulizia industriale',
    title: 'Pulizia industriale e di capannoni',
    description: `Pulizia di capannoni di produzione e di stoccaggio, macchinari e impianti, in funzione della Sua attività. Nei Cantoni ${region}.`,
  },
  '/leistungen/hauswartung': {
    label: 'Custodia di stabili',
    title: 'Custodia di stabili a Lucerna e Zugo',
    description: 'Custodia per il Suo stabile: giri di controllo, vano scale, lavanderia, piccole riparazioni, impiantistica, riconsegne, smaltimento e aree esterne.',
  },
  '/leistungen/aussen-und-gruenflaechenpflege': {
    label: 'Aree esterne e verdi',
    title: 'Cura delle aree esterne e verdi',
    description: `Cura delle aree esterne e verdi del Suo stabile, singolarmente o nell’ambito della custodia. Nei Cantoni ${region}.`,
  },
  '/leistungen/facility-services': {
    label: 'Facility services',
    title: 'Facility services da un unico fornitore',
    description: 'Pulizia, custodia e cura delle aree esterne in un unico contratto con un solo interlocutore. Per amministrazioni e aziende a Lucerna, Zugo e dintorni.',
  },
  '/einzugsgebiet': {
    label: 'Zona d’intervento',
    title: 'Zona d’intervento: Svizzera centrale e Argovia',
    description: `Da ${company.address.city} nei Cantoni ${region}, anche sulle rive dei laghi e a Engelberg. Tutti i servizi nell’intera zona.`,
  },
  '/blog': {
    label: 'Guida',
    title: 'Guida alla pulizia di edifici',
    description: `Guida di ${company.brand}: a che cosa prestare attenzione nella scelta di un’impresa di pulizie e da che cosa dipendono i costi della pulizia di manutenzione.`,
  },
  '/blog/richtige-reinigungsfirma-finden': {
    label: 'Scegliere l’impresa di pulizie',
    title: 'Scegliere l’impresa di pulizie: criteri e domande',
    description: 'Entità del servizio, assicurazione, controllo della qualità, referenze e offerta: i punti da chiarire prima di affidare l’incarico a un’impresa di pulizie.',
  },
  '/blog/reinigungskosten-schweiz': {
    label: 'Costi della pulizia di manutenzione',
    title: 'Quanto costa una pulizia di manutenzione?',
    description: 'Da che cosa dipende il prezzo di una pulizia di manutenzione: superficie, cadenza, utilizzo e orari d’intervento. Con consigli per confrontare le offerte.',
  },
  '/ueber-uns': {
    label: 'Chi siamo',
    title: 'Chi siamo',
    description: `${company.legalName} di ${company.address.city}: esperienza dal 2006, oltre 50 collaboratori, oltre 120 clienti, consulenza in tedesco, inglese, francese e italiano.`,
  },
  '/kontakt': {
    label: 'Contatto',
    title: 'Contatto e offerta',
    description: `Ci telefoni al numero ${company.phone.display} o ci scriva. Offerta gratuita sul posto, risposta entro 24 ore nei giorni feriali.`,
  },
  '/impressum': {
    label: 'Note legali',
    title: 'Note legali',
    description: `Note legali della ${company.legalName}, ${company.address.street}, ${company.address.postalCode} ${company.address.city}: registro di commercio, IDI e contatto.`,
  },
  '/datenschutz': {
    label: 'Protezione dei dati',
    title: 'Informativa sulla protezione dei dati',
    description: `Come la ${company.legalName} tratta i dati personali su questo sito web e quali diritti Le spettano in base alla legge sulla protezione dei dati.`,
  },
} satisfies Record<string, { label: string; title: string; description: string }>
