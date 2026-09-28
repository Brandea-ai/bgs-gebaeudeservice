import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const industrieUndHallen: ServicePageContent = {
  path: '/leistungen/industrie-und-hallenreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia industriale e di capannoni per produzione e magazzino',
  lead: [
    'Nella produzione e nel magazzino si formano polvere, trucioli, pellicole d’olio e di grasso. Rendono scivolosi i pavimenti e si depositano negli impianti. Al tempo stesso la pulizia non deve rallentare l’attività.',
    'Puliamo capannoni, pavimenti, macchinari e impianti, una tantum o regolarmente, in orari che concordiamo con Lei in funzione della produzione e dei turni.',
  ],
  facts: [
    { label: 'Per', value: 'Aziende industriali e artigianali, logistica e magazzini' },
    { label: 'Superfici', value: 'Capannoni di produzione e di stoccaggio, officine, macchinari e impianti' },
    { label: 'Orari', value: 'Coordinati con produzione e lavoro a turni' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo dopo una visita della Sua azienda. Di norma:',
    items: [
      'Pavimenti di capannoni e reparti di produzione',
      'Zone di stoccaggio, scaffalature e vie di circolazione',
      'Officine e locali accessori',
      'Macchinari e impianti secondo le Sue direttive',
      'Locali per il personale, spogliatoi e servizi igienici',
    ],
    notIncluded: [
      'Manutenzione e riparazione di macchinari.',
      'Uffici all’interno dell’azienda: vedi [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
    ],
  },
  sections: [
    {
      title: 'Macchinari e impianti',
      paragraphs: [
        'Puliamo i macchinari secondo le Sue direttive e d’intesa con il Suo servizio di manutenzione. Quando fermare un impianto, che cosa pulire e quali prodotti sono adatti lo stabiliamo prima dell’intervento.',
        'Le Sue norme di sicurezza e d’esercizio valgono anche per il nostro team. Le chiariamo con Lei prima del primo intervento.',
      ],
    },
    {
      title: 'Pavimenti dei capannoni e vie di circolazione',
      paragraphs: [
        'I pavimenti dei capannoni accumulano polvere, trucioli, abrasione degli pneumatici e pellicole d’olio o di grasso. Le grandi superfici vengono pulite perlopiù con lavasciuga, che in un solo passaggio strofinano e aspirano l’acqua sporca. Dopo il pavimento è presto di nuovo calpestabile e percorribile.',
        'Quale procedimento e quale prodotto siano adatti dipende dal rivestimento, ad esempio calcestruzzo, rivestimento resinoso o parquet industriale, e dal tipo di sporco. Lo chiariamo durante la visita dell’azienda.',
      ],
    },
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Aziende di produzione, officine, capannoni di stoccaggio e logistica, aziende artigianali con officina e ufficio sotto lo stesso tetto. Le occasioni sono ad esempio un audit o la visita di un cliente, un cambiamento nella produzione, le vacanze aziendali o il desiderio di orari di pulizia fissi invece di una pulizia fatta di passaggio.',
      ],
    },
    {
      title: 'Sicurezza in azienda',
      paragraphs: [
        'Nella produzione e nel magazzino valgono regole proprie: dispositivi di protezione, percorsi dei carrelli elevatori, zone transennate, gestione delle sostanze pericolose. Queste regole le chiariamo con Lei prima del primo intervento.',
        'Per i macchinari si stabilisce chi li spegne e li mette in sicurezza e chi li rimette in servizio dopo la pulizia. Lo stabiliamo prima dell’intervento con il Suo servizio di manutenzione.',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'Non tutte le zone richiedono la stessa cadenza. Locali per il personale e servizi igienici necessitano di cure frequenti. Pavimenti dei capannoni, scaffalature e macchinari richiedono una pulizia approfondita a intervalli più lunghi.',
        'Spesso è utile una combinazione: pulizia regolare durante l’attività e una pulizia a fondo durante le vacanze aziendali o i fermi programmati.',
      ],
    },
  ],
  steps: [
    {
      title: 'Pianificazione degli interventi',
      text: 'Stabiliamo orari, zone e sequenza, in funzione di produzione, turni e fermi.',
    },
    {
      title: 'Intervento',
      text: 'Puliamo secondo il piano. Se la Sua attività cambia, adeguiamo il piano con Lei.',
    },
  ],
  faq: [
    {
      question: 'Potete pulire durante l’attività in corso?',
      answer:
        'Lo chiariamo durante la visita dell’azienda. Alcune zone si possono pulire durante l’attività, altre solo nelle pause, tra un turno e l’altro o durante i fermi. Gli orari li stabiliamo con Lei.',
    },
    {
      question: 'Pulite anche i macchinari?',
      answer: 'Sì. Che cosa viene pulito su un macchinario e quando si ferma a tale scopo lo stabiliamo con Lei e con il Suo servizio di manutenzione.',
    },
    {
      question: 'Quali regole valgono per il vostro team nella nostra azienda?',
      answer: 'Le Sue norme di sicurezza e d’esercizio. Le chiariamo con Lei prima del primo intervento.',
    },
    {
      question: 'Come si pulisce il pavimento di un capannone?',
      answer:
        'Perlopiù con una lavasciuga, che strofina e aspira subito l’acqua sporca. Quale prodotto sia adatto dipende dal rivestimento e dallo sporco, ad esempio polvere, olio o abrasione. Lo chiariamo durante la visita dell’azienda.',
    },
    { question: 'Quanto costa una pulizia industriale?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo unica e approfondita.' },
    { path: '/leistungen/bueroreinigung', text: 'Per uffici e locali per il personale all’interno dell’azienda.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono essere affidate a un unico fornitore.' },
  ],
  cta: {
    title: 'Offerta per la Sua azienda',
    text: 'Ci indichi superfici, macchinari e orari d’esercizio. Visitiamo la Sua azienda e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}
