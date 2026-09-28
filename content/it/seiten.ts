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

/** Svolgimento fino al primo intervento, uguale su pagina iniziale e contatto (quattro passi, un video ciascuno) */
const offerSteps: Step[] = [
  steps.anfrage,
  steps.besichtigung,
  {
    title: 'Accordo',
    text: 'Esamina l’offerta con calma. Con la Sua conferma è stabilito quali servizi svolgiamo, con quale frequenza e in quali orari.',
  },
  {
    title: 'Inizio',
    text: 'Fissiamo il primo intervento e concordiamo con Lei orari e accesso, ad esempio con chiave o badge.',
  },
]

/** Domande uguali su pagina iniziale e contatto (E18) */
const faq = {
  schnell: {
    question: 'In quanto tempo ricevo un’offerta?',
    answer: `La contattiamo ${responseTime} e fissiamo un appuntamento per il sopralluogo. In seguito riceve l’offerta per iscritto.`,
  },
  kosten: {
    question: 'Quanto costa la pulizia?',
    answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).`,
  },
  gebiet: { question: 'In quali regioni operate?', answer: answers.gebiet },
  versichert: { question: 'Siete assicurati?', answer: answers.versicherung },
  kurzfristig: {
    question: 'Eseguite anche interventi con breve preavviso?',
    answer: 'Ci telefoni. Chiariamo con Lei che cosa è possibile con breve preavviso.',
  },
}

export const home = {
  eyebrow: `Pulizia e custodia di stabili da ${company.address.city}`,
  h1: 'Pulizia di edifici e custodia di stabili a Lucerna, Zugo e dintorni',
  lead: 'Stabili, uffici e capannoni puliti e curati, senza che debba occuparsene Lei. Per aziende, amministrazioni immobiliari e clienti privati esigenti. Esaminiamo il Suo immobile e Le rimettiamo un’offerta scritta.',
  proofTitle: 'In sintesi',
  services: {
    title: 'I nostri servizi',
    intro: 'Pulizia regolare, interventi singoli e la cura di interi stabili. Scelga in base all’occasione, l’entità la chiariamo durante il sopralluogo.',
    all: 'Tutti i servizi in sintesi',
    premium: {
      title: premiumLabel,
      text: 'Pulizie per esigenze particolari, discrete e nella Sua lingua: ville, loft e residenze, jet privati e yacht, oltre ad alberghi e family office.',
      link: 'Al settore Premium',
    },
  },
  audiences: {
    title: 'Per chi lavoriamo',
    intro: 'Quattro gruppi di clienti con esigenze diverse. Ecco che cosa ne ricava in concreto.',
    items: [
      {
        key: 'verwaltungen' as const,
        title: 'Amministrazioni immobiliari e proprietà per piani',
        text: 'Gestisce stabili e ha bisogno di qualcuno che sul posto tenga tutto sotto controllo.',
        points: [
          'Vano scale, ingresso e aree esterne curati con una cadenza fissa',
          'Giri di controllo durante i quali Le segnaliamo i difetti',
          'Pulizia di fine locazione con garanzia di consegna al cambio d’inquilino',
        ],
        link: { path: '/leistungen/hauswartung' as PagePath, text: 'Alla custodia di stabili' },
      },
      {
        key: 'unternehmen' as const,
        title: 'Aziende',
        text: 'Uffici, studi, commerci e produzione restano puliti, senza che la pulizia disturbi la Sua attività.',
        points: [
          'Orari d’intervento adatti ai Suoi orari di lavoro e di apertura',
          'Servizio di rifornimento del materiale di consumo',
          'Su richiesta pulizia, custodia e aree esterne in un unico contratto',
        ],
        link: { path: '/leistungen/bueroreinigung' as PagePath, text: 'Alla pulizia di uffici' },
      },
      {
        key: 'privat' as const,
        title: 'Proprietari privati',
        text: 'Per ville, loft, residenze e residenze secondarie. Non ci occupiamo di economie domestiche private ordinarie.',
        points: [
          'Da Lei lavora sempre lo stesso team',
          'Pietra naturale, parquet e superfici lucide, puliti nel rispetto dei materiali',
          'Chiavi e allarme secondo regole che concordiamo con Lei',
        ],
        link: { path: '/premium/luxusimmobilien' as PagePath, text: 'Agli immobili di pregio' },
      },
      {
        key: 'premium' as const,
        title: 'Jet privati, yacht e alberghi',
        text: 'Per cabine, ponti e locali con materiali pregiati che richiedono una cura particolare.',
        points: [
          'Su richiesta con accordo di riservatezza',
          'Anche la sera, nel fine settimana e durante la Sua assenza',
          'Negli alberghi interventi prima di un’apertura e dopo una ristrutturazione',
        ],
        link: { path: '/premium' as PagePath, text: 'Al settore Premium' },
      },
    ],
  },
  steps: {
    title: 'Come ottenere la Sua offerta',
    intro: 'Dalla prima telefonata al primo intervento. Sopralluogo e offerta sono gratuiti e senza impegno.',
    items: offerSteps,
  },
  area: {
    title: 'La nostra zona d’intervento',
    text: `Dalla nostra sede di ${company.address.city} operiamo nei Cantoni di ${cantonListIt}. Offriamo tutti i servizi nell’intera zona, ovunque alle stesse condizioni.`,
    link: 'Alla zona d’intervento',
  },
  faq: [
    { question: 'Quanto costa un’impresa di pulizie all’ora?', answer: answers.kostenFaktoren },
    faq.schnell,
    {
      question: 'Mi serve una pulizia di manutenzione o un servizio di custodia?',
      answer:
        'La pulizia di manutenzione si svolge con una cadenza fissa. Il servizio di custodia va oltre: giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti e manutenzione delle aree esterne. Chi ha bisogno solo della pulizia trova la soluzione giusta nella [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
    },
    {
      question: 'Pulite anche presso privati?',
      answer: 'Non presso economie domestiche private ordinarie. Per ville, loft, residenze e residenze secondarie è a disposizione il nostro [settore Premium](/premium).',
    },
    faq.kurzfristig,
    { question: 'Pulite con prodotti ecologici?', answer: answers.mittel },
  ],
  cta: {
    title: 'Offerta per il Suo immobile',
    text: `Ci descriva brevemente l’immobile e la Sua richiesta. La contattiamo ${responseTime} e veniamo da Lei per il sopralluogo.`,
  },
}

export const about = {
  h1: `Pulizia e custodia di stabili da ${company.address.city}, dal 2006`,
  lead: `Dal 2006 operiamo nella pulizia e nella custodia di stabili. Oggi oltre 50 collaboratrici e collaboratori seguono più di 120 clienti nei Cantoni di ${cantonListIt}, in ${languagesIt}.`,
  promises: {
    title: 'Su che cosa può contare',
    items: [
      { key: 'persoenlich' as const, title: 'Contatto personale', text: 'La Sua richiesta è trattata personalmente dal gerente.' },
      { key: 'offerte' as const, title: 'Offerta dopo il sopralluogo', text: 'Indichiamo un prezzo solo dopo aver visto il Suo immobile. Sopralluogo e offerta sono gratuiti e senza impegno.' },
      { key: 'gebiet' as const, title: 'In tutta la zona', text: `Tutti i servizi nei Cantoni di ${cantonListIt}, ovunque alle stesse condizioni.` },
      { key: 'versichert' as const, title: 'Assicurazione', text: answers.versicherung.replace('Sì. ', '') },
      { key: 'sprachen' as const, title: 'Quattro lingue', text: answers.sprachen },
      { key: 'umwelt' as const, title: 'Prodotti ecologici', text: 'Su richiesta puliamo con prodotti ecologici.' },
    ],
  },
  work: {
    title: 'Come lavoriamo',
    intro: 'Quattro principi validi per ogni incarico, dalla pulizia di uffici alla custodia di stabili.',
    items: [
      {
        title: 'Prima vedere, poi offrire',
        paragraphs: [
          'Pavimenti, superfici vetrate, utilizzo e accesso determinano l’impegno. Per questo visitiamo prima il Suo immobile sul posto e chiariamo con Lei entità, cadenza e orari.',
          'Solo dopo indichiamo un prezzo, per iscritto nell’offerta, gratuita e senza impegno.',
        ],
      },
      {
        title: 'Accordi chiari',
        paragraphs: [
          'Con la Sua conferma è stabilito quali locali e compiti sono compresi, con quale frequenza veniamo e in quali orari. L’accesso lo regoliamo prima, ad esempio con chiave o badge.',
          'Ciò che non è compreso lo diciamo apertamente e indichiamo il servizio adatto.',
        ],
      },
      {
        title: 'Vie brevi',
        paragraphs: [
          `La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.`,
          'Chi ha bisogno di più servizi può riunirli come [facility services](/leistungen/facility-services) in un unico contratto, con un solo interlocutore per tutto.',
        ],
      },
      {
        title: 'Materiale e prodotti',
        paragraphs: [
          'Nella pulizia di manutenzione riforniamo il materiale di consumo come carta e sapone. Su richiesta puliamo con prodotti ecologici.',
          'Pietra naturale, parquet e superfici lucide li puliamo nel rispetto dei materiali, con riguardo per le superfici delicate.',
        ],
      },
    ],
  },
  history: {
    title: 'Nella regione dal 2006',
    items: [
      { label: '2006', title: 'L’inizio', text: 'Dal 2006 operiamo nella pulizia e nella custodia di stabili.' },
      {
        label: 'Oggi',
        title: 'Oltre 50 collaboratori, oltre 120 clienti',
        text: 'Stato a settembre 2026. Lavoriamo per aziende, amministrazioni immobiliari, proprietari e clienti privati con esigenze particolari.',
      },
      {
        label: 'Sede',
        title: company.address.city,
        text: `La ${company.legalName} è iscritta nel ${registerIt}.`,
      },
    ],
  },
  languages: {
    title: 'Quattro lingue',
    text: `Le nostre collaboratrici e i nostri collaboratori parlano ${languagesIt}. Questo facilita gli accordi con team internazionali, con inquiline e inquilini e con clienti che preferiscono esprimersi nella propria lingua. Questo sito è disponibile nelle stesse quattro lingue.`,
  },
  region: {
    title: 'Cinque Cantoni, stesse condizioni',
    text: `Da ${company.address.city} operiamo nei Cantoni di ${cantonListIt}. Offriamo tutti i servizi nell’intera zona, e per la trasferta valgono ovunque le stesse condizioni.`,
    link: 'Alla zona d’intervento',
  },
  values: {
    title: 'I nostri valori nella pratica',
    intro: 'I valori si vedono in ciò che si fa. Per questo qui trova che cosa facciamo in concreto.',
    items: [
      { key: 'ehrlich' as const, title: 'Onesti sul prezzo', text: 'Indichiamo i prezzi solo nell’offerta scritta, dopo aver visto l’immobile. Un prezzo senza sopralluogo spesso non sarebbe corretto in seguito.' },
      { key: 'klar' as const, title: 'Chiari sull’entità', text: 'Ogni pagina di servizio indica anche ciò che non è compreso, con un rimando al servizio adatto.' },
      { key: 'nachbessern' as const, title: 'Rispondiamo del nostro lavoro', text: 'Se alla consegna l’amministrazione contesta qualcosa nella nostra pulizia di fine locazione, puliamo di nuovo gratuitamente. I dettagli figurano nell’offerta.' },
      { key: 'versichert' as const, title: 'Responsabilità', text: 'Per i danni durante il lavoro abbiamo un’assicurazione di responsabilità civile aziendale con una copertura di CHF 10 mio.' },
      { key: 'diskret' as const, title: 'Discrezione', text: 'Nel settore Premium sottoscriviamo su richiesta un accordo di riservatezza. Chiavi e allarme li gestiamo secondo regole fisse.' },
      { key: 'umwelt' as const, title: 'Rispetto per l’ambiente', text: 'Su richiesta puliamo con prodotti ecologici. Ce lo dica durante il sopralluogo.' },
    ],
  },
  contact: {
    title: 'Il Suo interlocutore',
    text: `La Sua richiesta arriva direttamente al gerente. La contatta ${responseTime}.`,
  },
  register: { title: 'Dati del registro', court: registerIt, uid: 'IDI' },
  statsLabel: 'In cifre',
  faq: [faq.kosten, faq.gebiet, faq.kurzfristig],
  cta: {
    title: 'Fissare un sopralluogo',
    text: 'Durante il sopralluogo esaminiamo il Suo immobile e chiariamo l’entità del lavoro e gli orari. In seguito riceve un’offerta scritta.',
  },
}

export const contact = {
  h1: 'Contatto e offerta',
  lead: `Ci telefoni o ci scriva. La contattiamo ${responseTime}.`,
  channels: {
    title: 'Come raggiungerci',
    phone: { title: 'Telefono', hint: 'Per domande e per fissare un appuntamento per il sopralluogo.', action: 'Chiamare' },
    mobile: { title: 'Cellulare', hint: 'Il nostro numero di cellulare, in aggiunta alla rete fissa.', action: 'Chiamare' },
    email: { title: 'E-mail', hint: 'Per richieste con documenti, ad esempio piante, elenchi delle superfici o foto.', action: 'Scrivere un’e-mail' },
    form: { title: 'Modulo', value: 'Richiedere un’offerta', hint: 'Le indicazioni principali in pochi campi, il servizio lo sceglie da un elenco.', action: 'Al modulo' },
    address: { title: 'Indirizzo', hint: 'La nostra sede. Il sopralluogo si svolge da Lei, sul posto.', action: 'Alla cartina' },
  },
  brief: {
    title: 'Che cosa dovrebbe contenere la Sua richiesta',
    intro: 'Più precise sono le Sue indicazioni, meglio prepariamo il sopralluogo. Se manca qualcosa, lo chiariamo nel colloquio.',
    items: [
      { key: 'objekt' as const, title: 'Immobile', text: 'Tipo di immobile, ad esempio ufficio, studio, casa plurifamiliare, capannone o villa.' },
      { key: 'ort' as const, title: 'Luogo', text: 'Indirizzo o numero postale dell’immobile.' },
      { key: 'groesse' as const, title: 'Dimensioni', text: 'Superficie approssimativa, numero di locali, appartamenti o piani.' },
      { key: 'leistung' as const, title: 'Servizio', text: 'Che cosa va fatto, ad esempio pulizia di manutenzione, custodia di stabili o una pulizia singola.' },
      { key: 'rhythmus' as const, title: 'Cadenza e orari', text: 'Con quale frequenza e quando, ad esempio prima dell’inizio del lavoro, la sera o nel fine settimana.' },
      { key: 'start' as const, title: 'Inizio', text: 'Da quando Le serve il servizio, per pulizie di cantiere e di fine locazione la data di consegna.' },
      { key: 'zugang' as const, title: 'Accesso e particolarità', text: 'Chiave o badge, pavimenti e materiali delicati, grandi superfici vetrate.' },
    ],
    note: 'Piante, elenchi delle superfici o foto può inviarceli per e-mail.',
  },
  steps: { title: 'Dalla richiesta al primo intervento', items: offerSteps },
  map: {
    title: 'Come raggiungerci',
    text: `Sede a ${company.address.city}. Operiamo nei Cantoni di ${cantonListIt}.`,
  },
  faq: [faq.schnell, faq.kosten, faq.gebiet, faq.versichert, faq.kurzfristig],
  cta: {
    title: 'Ci descriva il Suo immobile',
    text: `Bastano l’immobile e la Sua richiesta nel modulo qui sotto. La contattiamo ${responseTime} e fissiamo il sopralluogo.`,
  },
}

export const area = {
  h1: 'Zona d’intervento: Svizzera centrale e Argovia',
  lead: `Dalla nostra sede di ${company.address.city} operiamo nei Cantoni di ${cantonListIt}. Offriamo tutti i servizi nell’intera zona, per aziende come per clienti privati esigenti.`,
  cantonsTitle: 'Cantoni',
  cantonLabels: ['Cantone di Lucerna', 'Cantone di Zugo', 'Cantone di Argovia', 'Cantone di Nidvaldo', 'Cantone di Obvaldo'],
  // Località per Cantone (S06): le stesse località di places.groups, raggruppate; chiavi come company.cantons
  cantonPlaces: {
    Luzern: ['Lucerna', 'Horw', 'Meggen', 'Weggis', 'Vitznau', 'Eich'],
    Zug: ['Zugo', 'Cham', 'Risch', 'Hünenberg', 'Walchwil', 'Baar', 'Oberägeri'],
    Aargau: ['Meisterschwanden', 'Ennetbaden', 'Bergdietikon', 'Oberwil-Lieli'],
    Nidwalden: ['Hergiswil', 'Stansstad', 'Ennetbürgen'],
    Obwalden: ['Engelberg'],
  },
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
    text: `Ci descriva l’immobile e la località. La contattiamo ${responseTime} e veniamo da Lei per il sopralluogo, gratuitamente e senza impegno.`,
  },
}

export const servicesOverview: Seiten['servicesOverview'] = {
  h1: 'Pulizia e custodia per stabili, uffici e attività commerciali',
  lead: `Pulizia regolare, interventi una tantum o cura di interi stabili: scelga in base alla Sua situazione. Per aziende, amministrazioni immobiliari e proprietari nei Cantoni di ${cantonListIt}. Non sa che cosa serve? Lo chiariamo durante il sopralluogo.`,
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
        { title: 'Pulizie a fondo e speciali', path: '/leistungen/sonderreinigungen', text: 'Pulizia a fondo di superfici abitative, uffici e superfici commerciali, una tantum o a intervalli più lunghi.' },
        { title: 'Pulizia di fine locazione', path: '/leistungen/umzugsreinigung', text: 'Pulizia finale prima della riconsegna di un appartamento o di una superficie commerciale, con garanzia di consegna.' },
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
  guide: {
    title: 'Quale servizio fa al caso Suo?',
    intro: 'Situazioni frequenti e il servizio adatto. Non ne è sicuro? Lo chiariamo durante il sopralluogo.',
    items: [
      { situation: 'Il vano scale e i locali comuni devono essere puliti regolarmente.', path: '/leistungen/unterhaltsreinigung' },
      { situation: 'Ufficio o studio vanno puliti senza disturbare l’attività.', path: '/leistungen/bueroreinigung' },
      { situation: 'Un appartamento o una superficie commerciale viene riconsegnato.', path: '/leistungen/umzugsreinigung' },
      { situation: 'Pavimenti, fughe e servizi igienici richiedono una pulizia approfondita.', path: '/leistungen/sonderreinigungen' },
      { situation: 'Una nuova costruzione o una trasformazione sta per essere consegnata.', path: '/leistungen/baureinigung' },
      { situation: 'Finestre, vetrine o facciata sono sporche.', path: '/leistungen/fenster-und-fassadenreinigung' },
      { situation: 'Capannone, magazzino o macchinari devono essere puliti.', path: '/leistungen/industrie-und-hallenreinigung' },
      { situation: 'Lo stabile ha bisogno di qualcuno che controlli regolarmente che tutto sia in ordine.', path: '/leistungen/hauswartung' },
      { situation: 'Prato, siepi, vialetti e piazzali devono essere curati.', path: '/leistungen/aussen-und-gruenflaechenpflege' },
      { situation: 'Pulizia, custodia e aree esterne devono essere affidate a un unico fornitore.', path: '/leistungen/facility-services' },
    ],
  },
  principles: {
    title: 'Uguale per ogni servizio',
    items: [
      { title: 'Sopralluogo prima dell’offerta', text: 'Visitiamo l’immobile prima di indicare un prezzo. Sopralluogo e offerta sono gratuiti e senza impegno.' },
      { title: 'Entità per iscritto', text: 'Che cosa svolgiamo e con quale frequenza lo stabiliamo nell’offerta.' },
      { title: 'Richiesta personale', text: `La Sua richiesta è trattata personalmente dal gerente; riceverà nostre notizie ${responseTime}.` },
      { title: 'Cadenza secondo l’utilizzo', text: 'La frequenza dei nostri interventi dipende dall’utilizzo del Suo immobile. Se cambia, adeguiamo con Lei entità e cadenza.' },
      { title: 'Ecologico su richiesta', text: 'Su richiesta puliamo con prodotti ecologici.' },
      { title: 'Limiti chiari', text: 'Ogni pagina dei servizi indica anche che cosa non è compreso, ad esempio il servizio invernale o la manutenzione degli impianti tecnici.' },
    ],
  },
  faq: [
    { question: 'Quanto costano i vostri servizi?', answer: answers.kosten },
    {
      question: 'Posso combinare più servizi?',
      answer: 'Sì. Con i [facility services](/leistungen/facility-services) pulizia, custodia e manutenzione delle aree esterne rientrano in un unico contratto, con un solo interlocutore.',
    },
    {
      question: 'Pulite anche economie domestiche private?',
      answer: 'Economie domestiche private solo nel [settore Premium](/premium), per ville, loft e residenze.',
    },
    { question: 'Offrite il servizio invernale?', answer: 'No. Il servizio invernale non fa parte della nostra offerta.' },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  premium: {
    title: 'Ville, jet privati o yacht?',
    text: 'Per esigenze particolari è a disposizione il nostro settore Premium.',
    detail: 'Ville e residenze, cabine di jet privati, yacht sul lago dei Quattro Cantoni e sul lago di Zugo. Sempre lo stesso team, discreto e con conoscenza dei materiali delicati.',
    link: 'Al settore Premium',
  },
  cta: {
    title: 'Non sa esattamente di che cosa ha bisogno?',
    text: `Ci descriva l’immobile e la Sua richiesta. Veniamo da Lei, chiariamo insieme l’entità del lavoro e La contattiamo ${responseTime}.`,
  },
}

// Stesse chiavi e stesso ordine della lista tedesca (i sei modi di lavorare confermati, E41)
const promises: Seiten['premiumOverview']['promises'] = [
  { key: 'diskret', title: 'Discrezione', text: 'Su Sua richiesta firmiamo un accordo di riservatezza.' },
  { key: 'teams', title: 'Team fissi', text: 'Della Sua casa, barca o cabina si occupa sempre lo stesso team.' },
  { key: 'personal', title: 'Personale verificato', text: 'Da Lei non lavora nessuno che non abbiamo verificato.' },
  { key: 'schluessel', title: 'Chiavi e allarme', text: 'Consegna, custodia e impianto d’allarme secondo regole che concorda con noi.' },
  { key: 'zeiten', title: 'Nei Suoi orari', text: 'Interventi anche la sera, nel fine settimana o mentre Lei è in viaggio.' },
  { key: 'material', title: 'Conoscenza dei materiali', text: 'Pietra naturale, parquet e superfici lucide; per le imbarcazioni teak, gelcoat e imbottiture.' },
]

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Pulizie premium per esigenze particolari',
  lead: 'Chi fa pulire una casa, uno yacht o la cabina di un jet privato affida ad altri chiavi, orari e vita privata. Per questo da Lei lavoriamo secondo regole che Lei contribuisce a stabilire.',
  // Significato del nome solo con il nuovo nome (E38)
  nameMeaning: company.premiumBrand
    ? `Il nome ${company.premiumBrand} deriva dal latino «clavis», la chiave. Lei ci affida la Sua casa, e noi ce ne prendiamo cura come se fosse la nostra.`
    : null,
  firstMessage: {
    title: 'Basta questo per un primo messaggio',
    items: [
      'Casa, barca o cabina, con il luogo o l’ormeggio',
      'L’occasione o il ritmo desiderato',
      'Da quando ha bisogno di noi',
      'Materiali delicati e opere d’arte che dobbiamo conoscere',
    ],
  },
  nav: {
    bereiche: 'Servizi',
    diskretion: 'Discrezione',
    zusagen: 'Metodo',
    ablauf: 'Svolgimento',
    fragen: 'Domande',
    orte: 'Luoghi',
  },
  offersTitle: 'Casa, cabina o barca',
  offers: [
    {
      title: 'Ville e residenze',
      name: 'Pulizia di ville e immobili di pregio',
      link: 'Vai alla pulizia di ville',
      path: '/premium/luxusimmobilien',
      text: 'Ville, loft, residenze e abitazioni secondarie, regolarmente o prima di un evento.',
      detail: 'Per dimore con pietra naturale, parquet, superfici lucide e opere d’arte. Puliamo regolarmente o prima di una festa o di una vendita.',
      notIncluded: 'Non inclusi: i restauri, ad esempio di quadri o mobili antichi.',
    },
    {
      title: 'Cabine di jet privati',
      name: 'Pulizia di jet privati',
      link: 'Vai alla pulizia di jet privati',
      path: '/premium/privatjet',
      text: 'La cabina tra due voli, pianificata con il Suo operatore aereo.',
      detail: 'Pelle, legno laccato, superfici lucide e tessuti pregiati si trovano in pochi metri quadrati, e spesso resta solo il tempo tra due voli. Quali prodotti sono ammessi a bordo lo decide Lei con il Suo operatore aereo.',
      notIncluded: 'Non inclusa: la pulizia esterna dell’aereo.',
    },
    {
      title: 'Yacht e motoscafi',
      name: 'Pulizia di yacht e imbarcazioni',
      link: 'Vai alla pulizia di yacht',
      path: '/premium/yacht',
      text: 'Interni e ponte, all’ormeggio sui laghi dei Quattro Cantoni e di Zugo.',
      detail: 'Acqua dolce, polline ed escrementi di uccelli mettono alla prova una barca sul lago in modo diverso dal sale in mare. Puliamo teak, gelcoat e imbottiture all’ormeggio, ogni materiale con il proprio metodo.',
      notIncluded: 'Non inclusi: i lavori sull’opera viva e sul motore.',
    },
  ],
  moreTitle: 'Inoltre per',
  more: [
    { title: 'Abitazioni secondarie e residence', text: 'Pulite prima del Suo arrivo, rimesse in ordine dopo la Sua partenza, con giri di controllo nel frattempo al ritmo concordato.' },
    { title: 'Alberghi', text: 'Pulizie speciali e a fondo prima di un’apertura e dopo un rinnovo. Maggiori informazioni sulle [pulizie a fondo e speciali](/leistungen/sonderreinigungen).' },
    { title: 'Uffici e family office', text: 'Locali riservati, puliti al di fuori dei Suoi orari di lavoro. Maggiori informazioni sulla [pulizia di uffici e studi](/leistungen/bueroreinigung).' },
    { title: 'Locali con opere d’arte e oggetti d’antiquariato', text: 'Puliamo i locali con cura, quadri, sculture e altre opere d’arte solo con la Sua espressa autorizzazione.' },
    { title: 'Eventi privati', text: 'Tutto pronto prima dell’evento e di nuovo in ordine dopo, anche se cade in un fine settimana.' },
    { title: 'Agenti immobiliari e amministrazioni', text: 'Pulizia con breve preavviso prima di vendita, servizio fotografico e consegna.' },
  ],
  discretion: {
    title: 'La discrezione, nero su bianco',
    paragraphs: [
      'Chi pulisce da Lei viene a sapere più di quanto dica un’offerta. Che cosa resta riservato, e per quanto tempo, si può fissare in un accordo di riservatezza.',
    ],
  },
  // Che cosa regola di solito un tale accordo, non il contenuto di un nostro modello; senza pena convenzionale (non confermata).
  // Art. 11 CO letto il 28.09.2026 su fedlex.admin.ch, nessuna consulenza legale.
  nda: {
    kind: 'checklist',
    id: 'geheimhaltung',
    title: 'Che cosa dovrebbe regolare un accordo di riservatezza',
    intro: 'L’elenco mostra che cosa regola di solito un tale accordo e La aiuta a verificare un testo.',
    groups: [
      {
        title: 'Chi e che cosa',
        items: [
          'Chi è vincolato: l’azienda e tutte le persone che lavorano da Lei',
          'Che cosa è riservato: indirizzo, assenze, ospiti, locali, arredamento e documenti',
          'Nessuna foto in casa, a bordo o in cabina e nessuna informazione sui social media',
        ],
      },
      {
        title: 'Durata e fine',
        items: [
          'Per quanto tempo vale l’obbligo, anche oltre la fine dell’incarico',
          'Come vengono restituiti chiavi e badge e cambiati i codici',
          'Che cosa succede alla fine con documenti come planimetrie o schemi d’allarme: restituzione o distruzione',
        ],
      },
    ],
    note: 'Il CO non richiede alcuna forma speciale per un tale accordo (art. 11 CO), ma una versione firmata ne facilita la prova. Chiarisca i dettagli del Suo caso con la Sua consulenza legale.',
    sources: [
      { label: 'Codice delle obbligazioni, art. 11: forma dei contratti', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_11' },
    ],
    printable: true,
    updated: '2026-09-28',
  },
  promisesTitle: 'Che cosa vale per ogni incarico premium',
  promises,
  stepsTitle: 'Come si svolge una richiesta premium',
  steps: [
    {
      title: 'La Sua richiesta',
      text: 'Dopo la Sua telefonata o il Suo messaggio concordiamo con Lei una data per la visita.',
    },
    {
      title: 'Visita e offerta',
      text: 'In casa, all’ormeggio o in cabina esaminiamo con Lei locali, materiali e accessi, per un jet privato d’intesa con il Suo operatore aereo. Su questa base redigiamo la Sua offerta scritta.',
    },
    {
      title: 'Regole fissate prima di iniziare',
      text: 'Prima di iniziare è stabilito quando veniamo, come vengono gestiti chiavi e impianto d’allarme e quali opere d’arte o oggetti tocchiamo solo con la Sua autorizzazione.',
    },
    {
      title: 'Il Suo team fisso',
      text: 'Da Lei viene sempre lo stesso team, che conosce le regole stabilite prima del primo intervento.',
    },
  ],
  faq: [
    {
      question: 'Come rimane riservata la mia richiesta?',
      answer: 'Delle richieste premium si occupa personalmente il gerente. Se desidera un accordo di riservatezza, lo indichi possibilmente già nel Suo primo messaggio.',
    },
    {
      question: 'Un agente immobiliare o un’amministrazione può fare la richiesta per il proprietario?',
      answer: 'Sì. Ci indichi nella richiesta chi accompagnerà la visita e chi deve ricevere l’offerta.',
    },
    {
      question: 'Devo affidare un incarico regolare?',
      answer: 'No. Può affidarci anche un singolo intervento, ad esempio prima di un evento privato.',
    },
    {
      question: 'Lavorate anche quando non c’è nessuno in casa?',
      answer: 'Sì, anche mentre Lei è in viaggio. Come entriamo in casa e come usiamo l’impianto d’allarme è concordato prima.',
    },
    {
      question: 'Da che cosa dipende il prezzo di una pulizia premium?',
      answer: 'Per una casa da superficie, materiali e opere d’arte, per una barca da dimensioni, ponte e ormeggio, per un jet da cabina e fascia oraria. A ciò si aggiungono il ritmo e gli interventi la sera o nel fine settimana. Per questo solo l’offerta dopo la visita indica un prezzo.',
    },
    {
      question: 'Possiamo fare la richiesta in inglese, francese o italiano?',
      answer: 'Sì. Comunichiamo con Lei in tedesco, inglese, francese o italiano. Ci scriva nella lingua che preferisce.',
    },
  ],
  places: {
    title: 'Dove siamo a Sua disposizione',
    text: `Sul lago dei Quattro Cantoni da Lucerna e Meggen fino a Weggis, Vitznau, Hergiswil ed Ennetbürgen, sul lago di Zugo e sul lago di Ägeri da Zugo e Walchwil fino a Oberägeri, a Engelberg e nell’intero territorio dei Cantoni di ${cantonListIt}.`,
  },
  cta: {
    title: 'Richiesta discreta',
    text: 'Una telefonata o poche righe tramite il modulo bastano per iniziare.',
  },
}
