import { company, premiumLabel } from '../../shared/company'
import type { PagePath } from '../../shared/seo'
import type { Dictionary } from '../de'
import type { Step } from '../types'
import { answers, cantonListIt, languagesIt, premiumLine, registerIt, responseTime, steps } from './common'

/**
 * Testi della pagina iniziale, di Chi siamo, Contatto, Zona d’intervento e delle
 * due panoramiche, in italiano (M39, M47, M49, M54, M60). Solo quanto documentato (E18).
 */

type Card = { title: string; text: string }
type LinkCard = Card & { path: PagePath }
type Seiten = Dictionary['seiten']

/** Cifre documentate (E18, stato a settembre 2026) */
export const proof = [
  { value: 'Dal 2006', label: 'Esperienza nella pulizia e nella custodia di stabili' },
  { value: 'Oltre 120', label: 'Clienti' },
  { value: 'Oltre 50', label: 'Collaboratrici e collaboratori, quattro lingue' },
  { value: 'CHF 10 mio.', label: 'Responsabilità civile aziendale' },
]

/** Svolgimento fino al primo intervento, uguale su pagina iniziale e contatto */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Inizio',
    text: 'Con la Sua conferma fissiamo il primo intervento e concordiamo con Lei orari e accesso.',
  },
]

export const home = {
  eyebrow: `Pulizia e custodia di stabili da ${company.address.city}`,
  h1: 'Pulizia di edifici e custodia di stabili a Lucerna, Zugo e dintorni',
  lead: 'Per aziende, amministrazioni immobiliari e clienti privati esigenti. Veniamo da Lei per un’offerta gratuita e senza impegno.',
  proofTitle: 'In sintesi',
  services: {
    title: 'I nostri servizi',
    intro: 'Pulizia di edifici e custodia di stabili per aziende e immobili, oltre a pulizie per esigenze particolari.',
    groups: [
      {
        key: 'reinigung',
        title: 'Pulizia',
        text: 'Per stabili, uffici, studi e superfici commerciali.',
        items: ['Pulizia di manutenzione e di uffici', 'Pulizie speciali e di cantiere', 'Vetri e facciate', 'Industria e capannoni'],
        link: { path: '/leistungen', text: 'Tutti i servizi' },
      },
      {
        key: 'hauswartung',
        title: 'Custodia e manutenzione',
        text: 'Per amministrazioni immobiliari, proprietari e aziende che affidano la cura del proprio stabile.',
        items: ['Custodia di stabili', 'Manutenzione delle aree esterne e verdi', 'Facility services'],
        link: { path: '/leistungen/hauswartung', text: 'Alla custodia di stabili' },
      },
      {
        key: 'premium',
        title: premiumLabel,
        text: 'Pulizie per esigenze particolari, discrete e nella Sua lingua.',
        items: ['Ville, loft e immobili di pregio', 'Jet privati', 'Yacht'],
        link: { path: '/premium', text: 'Al settore Premium' },
      },
    ] satisfies (Card & { key: string; items: string[]; link: { path: PagePath; text: string } })[],
  },
  steps: { title: 'Come ottenere la Sua offerta', items: offerSteps },
  area: {
    title: 'La nostra zona d’intervento',
    text: `Dalla nostra sede di ${company.address.city} operiamo nei Cantoni di ${cantonListIt}. Offriamo tutti i servizi nell’intera zona.`,
    link: 'Alla zona d’intervento',
  },
  cta: {
    title: 'Offerta per il Suo immobile',
    text: `Ci descriva brevemente l’immobile e la Sua richiesta. La contattiamo ${responseTime} e veniamo da Lei per il sopralluogo.`,
  },
}

export const about = {
  h1: `Pulizia e custodia di stabili da ${company.address.city}`,
  imageAlt: 'Il nostro team al lavoro',
  lead: `Dal 2006 operiamo nella pulizia e nella custodia di stabili. Oggi oltre 50 collaboratrici e collaboratori seguono più di 120 clienti nei Cantoni di ${cantonListIt}, in ${languagesIt}.`,
  promises: {
    title: 'Su che cosa può contare',
    items: [
      { title: 'Contatto personale', text: 'La Sua richiesta è trattata personalmente dal gerente.' },
      { title: 'Offerta dopo il sopralluogo', text: 'Indichiamo un prezzo solo dopo aver visto il Suo immobile. Sopralluogo e offerta sono gratuiti e senza impegno.' },
      { title: 'In tutta la zona', text: `Tutti i servizi nei Cantoni di ${cantonListIt}, ovunque alle stesse condizioni.` },
      { title: 'Assicurazione', text: answers.versicherung.replace('Sì. ', '') },
      { title: 'Quattro lingue', text: answers.sprachen },
      { title: 'Prodotti ecologici', text: 'Su richiesta puliamo con prodotti ecologici.' },
    ] satisfies Card[],
  },
  contact: {
    title: 'Il Suo interlocutore',
    text: `La Sua richiesta è trattata personalmente dal gerente. La contattiamo ${responseTime}.`,
  },
  register: { title: 'Dati del registro', court: registerIt, uid: 'IDI' },
  statsLabel: 'In cifre',
  cta: {
    title: 'Conosciamoci',
    text: 'Durante il sopralluogo esaminiamo il Suo immobile e chiariamo l’entità del lavoro e gli orari. In seguito riceve un’offerta scritta.',
  },
}

export const contact = {
  h1: 'Contatto e offerta',
  lead: `Ci telefoni o ci scriva. La contattiamo ${responseTime}.`,
  formLink: 'Al modulo di contatto',
  channelsLabel: 'Canali di contatto',
  phone: { title: 'Telefono', text: 'Rete fissa e cellulare', mobile: 'Cellulare' },
  email: { title: 'E-mail', text: 'Ci scriva un messaggio' },
  address: { title: 'Indirizzo', text: 'La nostra sede' },
  steps: { title: 'Dalla richiesta al primo intervento', items: offerSteps },
  map: {
    title: 'Come raggiungerci',
    text: `Sede a ${company.address.city}. Operiamo nei Cantoni di ${cantonListIt}.`,
  },
  faq: [
    {
      question: 'In quanto tempo ricevo un’offerta?',
      answer: `La contattiamo ${responseTime} e fissiamo un appuntamento per il sopralluogo. In seguito riceve l’offerta per iscritto.`,
    },
    { question: 'Quanto costa la pulizia?', answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).` },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'Eseguite anche interventi con breve preavviso?', answer: 'Ci telefoni. Chiariamo con Lei che cosa è possibile con breve preavviso.' },
  ],
  cta: {
    title: 'Desidera un’offerta?',
    text: `Il modulo si trova in fondo a ogni pagina. La contattiamo ${responseTime}.`,
  },
}

export const area = {
  h1: `Zona d’intervento: ${cantonListIt}`,
  lead: `Dalla nostra sede di ${company.address.city} operiamo in cinque Cantoni. Offriamo tutti i servizi nell’intera zona, per aziende come per clienti privati esigenti.`,
  cantonsTitle: 'Cantoni',
  cantonLabels: ['Cantone di Lucerna', 'Cantone di Zugo', 'Cantone di Argovia', 'Cantone di Nidvaldo', 'Cantone di Obvaldo'],
  seatTitle: 'Sede e contatto',
  places: {
    title: 'Rive dei laghi e località di villeggiatura',
    text: 'Siamo a Sua disposizione anche sulle rive dei laghi e nelle località di villeggiatura della regione, ad esempio per ville, abitazioni secondarie e alberghi. Per esigenze particolari è a disposizione il nostro [settore Premium](/premium).',
    groups: [
      { title: 'Sul lago dei Quattro Cantoni', items: ['Lucerna', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Hergiswil', 'Stansstad', 'Ennetbürgen'] },
      { title: 'Sul lago di Zugo e sul lago di Ägeri', items: ['Zugo', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'] },
      { title: 'Sul lago di Sempach e sul lago di Hallwil', items: ['Eich', 'Meisterschwanden'] },
      { title: 'Regione di Baden e del Mutschellen', items: ['Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'] },
      { title: 'In montagna', items: ['Engelberg'] },
    ],
  },
  cta: {
    title: 'Il Suo immobile si trova nella nostra zona?',
    text: `Ci descriva l’immobile e la località. Veniamo da Lei per un’offerta gratuita e senza impegno e La contattiamo ${responseTime}.`,
  },
}

export const servicesOverview = {
  h1: 'Servizi: pulizia e custodia di stabili',
  lead: `Scelga in base alla Sua situazione. Offriamo tutti i servizi nei Cantoni di ${cantonListIt}. Per un’offerta veniamo da Lei gratuitamente e senza impegno.`,
  groups: [
    {
      title: 'Pulizia regolare',
      text: 'Per stabili, uffici e superfici commerciali, con una cadenza fissa.',
      items: [
        { title: 'Pulizia di manutenzione', path: '/leistungen/unterhaltsreinigung', text: 'Pulizia regolare di stabili e superfici commerciali, servizio di rifornimento incluso.' },
        { title: 'Pulizia di uffici e studi', path: '/leistungen/bueroreinigung', text: 'Pulizia di uffici e studi, in funzione dei Suoi orari di lavoro.' },
      ],
    },
    {
      title: 'Pulizie una tantum e speciali',
      text: 'Per cantieri, traslochi, superfici vetrate e produzione.',
      items: [
        { title: 'Pulizie speciali', path: '/leistungen/sonderreinigungen', text: 'Pulizia a fondo, pulizia di fine locazione e pulizia finale con garanzia di consegna.' },
        { title: 'Pulizia di cantiere e di fine cantiere', path: '/leistungen/baureinigung', text: 'Pulizia durante e dopo lavori di costruzione e di ristrutturazione.' },
        { title: 'Pulizia di vetri e facciate', path: '/leistungen/fenster-und-fassadenreinigung', text: 'Finestre, superfici vetrate e facciate, anche ad alta pressione.' },
        { title: 'Pulizia industriale e di capannoni', path: '/leistungen/industrie-und-hallenreinigung', text: 'Capannoni di produzione e di stoccaggio, macchinari e impianti.' },
      ],
    },
    {
      title: 'Cura degli stabili',
      text: 'Per amministrazioni immobiliari, proprietari e aziende che desiderano un unico fornitore.',
      items: [
        { title: 'Custodia di stabili', path: '/leistungen/hauswartung', text: 'Giri di controllo, vano scale, lavanderia, piccole riparazioni, impiantistica, consegne e riconsegne degli appartamenti, smaltimento e aree esterne.' },
        { title: 'Manutenzione delle aree esterne e verdi', path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Manutenzione delle aree esterne e delle aree verdi del Suo stabile.' },
        { title: 'Facility services', path: '/leistungen/facility-services', text: 'Più servizi in un unico contratto con un solo interlocutore.' },
      ],
    },
  ] satisfies { title: string; text: string; items: LinkCard[] }[],
  premium: {
    title: 'Ville, jet privati o yacht?',
    text: 'Per esigenze particolari è a disposizione il nostro settore Premium.',
    link: 'Al settore Premium',
  },
  cta: {
    title: 'Non sa esattamente di che cosa ha bisogno?',
    text: `Ci descriva l’immobile e la Sua richiesta. Veniamo da Lei, chiariamo insieme l’entità del lavoro e La contattiamo ${responseTime}.`,
  },
}

// Stesse chiavi e stesso ordine della lista tedesca (simboli in app/premium/page.tsx)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'persoenlich', title: 'Contatto personale', text: 'La Sua richiesta è trattata personalmente dal gerente.' },
  { key: 'diskret', title: 'Discrezione', text: 'Su richiesta sottoscriviamo un accordo di riservatezza.' },
  { key: 'teams', title: 'Team fissi', text: 'Da Lei lavora sempre lo stesso team.' },
  { key: 'personal', title: 'Personale verificato', text: 'Chi lavora da Lei è stato verificato da noi.' },
  { key: 'schluessel', title: 'Chiavi e allarme', text: 'Secondo regole fisse che concordiamo con Lei.' },
  { key: 'zeiten', title: 'Nei Suoi orari', text: 'Anche la sera, nel fine settimana e durante la Sua assenza.' },
  { key: 'material', title: 'Conoscenza dei materiali', text: 'Pietra naturale, parquet e superfici lucide; per le imbarcazioni teak, gelcoat e imbottiture.' },
  { key: 'sprachen', title: 'Quattro lingue', text: 'Tedesco, inglese, francese e italiano.' },
  { key: 'versichert', title: 'Assicurazione', text: 'Responsabilità civile aziendale con una copertura di CHF 10 milioni.' },
  { key: 'offerte', title: 'Offerta sul posto', text: 'Gratuita e senza impegno, dopo un sopralluogo.' },
]

export const premiumOverview = {
  line: premiumLine,
  h1: 'Pulizie per esigenze particolari',
  lead: 'Per ville e residenze, abitazioni secondarie, alberghi con esigenze particolari, family office, jet privati e yacht. Con discrezione, cura e nella Sua lingua.',
  // Significato del nome solo con il nuovo nome (E38)
  nameMeaning: company.premiumBrand
    ? `Il nome ${company.premiumBrand} deriva dal latino «clavis», la chiave. Lei ci affida la Sua casa, e noi ce ne prendiamo cura come se fosse la nostra.`
    : null,
  offers: [
    { title: 'Immobili di pregio', path: '/premium/luxusimmobilien', text: 'Ville, loft e residenze, regolarmente o prima di occasioni particolari, con cura dei materiali delicati.' },
    { title: 'Jet privato', path: '/premium/privatjet', text: 'Pulizia della cabina con riguardo per i materiali di pregio, previo accordo con Lei.' },
    { title: 'Yacht', path: '/premium/yacht', text: 'Pulizia di imbarcazioni e yacht sul lago dei Quattro Cantoni e sul lago di Zugo.' },
  ] satisfies LinkCard[],
  moreTitle: 'Inoltre per',
  more: [
    { title: 'Abitazioni secondarie e residence', text: 'Pulizia prima del Suo arrivo e dopo la Sua partenza, giri di controllo durante la Sua assenza.' },
    { title: 'Alberghi', text: 'Pulizie speciali e a fondo, interventi prima di aperture e dopo rinnovi.' },
    { title: 'Uffici e family office', text: 'In modo confidenziale, al di fuori dei Suoi orari di lavoro, con team fissi.' },
    { title: 'Locali con opere d’arte e oggetti d’antiquariato', text: 'Pulizia accurata dei locali, opere d’arte solo con la Sua autorizzazione.' },
    { title: 'Eventi privati', text: 'Pulizia prima e dopo l’evento, anche nel fine settimana.' },
    { title: 'Agenti immobiliari e amministrazioni', text: 'Pulizia con breve preavviso prima di vendita, servizio fotografico e consegna.' },
  ] satisfies Card[],
  promisesTitle: 'Su che cosa può contare',
  promises,
  places: {
    title: 'Dove siamo a Sua disposizione',
    text: `Sul lago dei Quattro Cantoni da Lucerna e Meggen fino a Weggis, Vitznau, Hergiswil ed Ennetbürgen, sul lago di Zugo e sul lago di Ägeri da Zugo e Walchwil fino a Oberägeri, a Engelberg e nell’intero territorio dei Cantoni di ${cantonListIt}. [Alla zona d’intervento](/einzugsgebiet)`,
  },
  cta: {
    title: 'Richiesta discreta',
    text: `Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente, su richiesta con vincolo di riservatezza. La contattiamo ${responseTime}.`,
  },
}
