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

/** Kontakt (E80, Audit Inhalt 9, Audit visuell /kontakt), Übersetzung von content/de/seiten.ts */
export const contact = {
  h1: 'Contatto e offerta',
  lead: `Per telefono, e-mail o modulo. Riceve una risposta ${responseTime}.`,
  channels: {
    title: 'Come raggiungerci',
    phone: { title: 'Telefono', mobile: 'Cellulare', hint: 'Per domande e per fissare l’appuntamento per il sopralluogo.', action: 'Chiamare' },
    email: { title: 'E-mail', hint: 'Per richieste con documenti come piante, elenchi delle superfici o foto.', action: 'Scrivere un’e-mail' },
    address: { title: 'Indirizzo', hint: 'Qui si trova la nostra sede. Il sopralluogo si svolge da Lei, sul posto.', action: 'Alla cartina' },
  },
  brief: {
    title: 'Che cosa mettere nella richiesta',
    items: [
      { key: 'rolle' as const, title: 'Chi chiede', text: 'amministrazione immobiliare, comunione dei proprietari per piani, proprietario, azienda o cliente privato con villa o residenza secondaria.' },
      { key: 'objekt' as const, title: 'Immobile', text: 'ufficio, studio, casa plurifamiliare, capannone o villa.' },
      { key: 'ort' as const, title: 'Luogo', text: 'indirizzo o NPA.' },
      { key: 'groesse' as const, title: 'Dimensioni', text: 'superficie in m², numero di appartamenti, piani o stabili.' },
      { key: 'leistung' as const, title: 'Servizio', text: 'ad esempio pulizia di manutenzione, custodia di stabili o una pulizia singola.' },
      { key: 'rhythmus' as const, title: 'Cadenza e orari', text: 'con quale frequenza e quando, ad esempio prima dell’inizio del lavoro, la sera o il sabato.' },
      { key: 'start' as const, title: 'Inizio', text: 'da quando, e per pulizie di cantiere e di fine locazione la data di consegna.' },
      { key: 'zugang' as const, title: 'Accesso e particolarità', text: 'chiave o badge, pavimenti delicati, grandi superfici vetrate.' },
    ],
  },
  steps: {
    title: 'Che cosa succede dopo l’invio',
    items: [
      { title: 'Risposta', text: 'Il gerente legge personalmente la Sua richiesta e Le propone una data per il sopralluogo.' },
      { title: 'Sopralluogo', text: 'Con Lei o con la Sua persona di contatto percorriamo tutti i locali e le superfici interessati. Così vediamo stato, materiali e accesso.' },
      { title: 'Offerta', text: 'L’offerta arriva per iscritto. Indica locali e compiti, con quale frequenza li svolgiamo e in quali orari.' },
      { title: 'Inizio', text: 'Con la Sua conferma è fissato il primo giorno d’intervento. Orari e accesso all’immobile sono allora concordati con Lei.' },
    ] satisfies Step[] as Step[],
  },
  visit: {
    title: 'Preparare il sopralluogo',
    intro: 'Che cosa tenere a disposizione per l’appuntamento sul posto:',
    items: [
      'L’accesso a tutti i locali da pulire o da curare, anche cantina, solaio, lavanderia e locali tecnici',
      'Piante o un elenco delle superfici, se disponibili',
      'Il capitolato d’oneri o l’elenco delle prestazioni attuale, se un’impresa lavora già da Lei',
      'Gli orari desiderati e la data di inizio',
      'Una persona di contatto che possa rispondere a domande su utilizzo e accesso',
    ],
    note: 'Il sopralluogo è gratuito, l’offerta segue per iscritto.',
  },
  map: {
    title: 'Come trovarci',
    text: `La nostra sede è a ${company.address.city}. Da qui raggiungiamo il Suo immobile in tutta la nostra zona d’intervento.`,
  },
  faq: [
    { question: 'Quanto tempo ci vuole per ricevere l’offerta?', answer: 'Prima fissiamo con Lei la data del sopralluogo. Poi redigiamo l’offerta sulla base di ciò che abbiamo visto sul posto. Se piante o un elenco delle superfici sono pronti già all’appuntamento, dopo dobbiamo fare meno domande.' },
    { question: 'Quanto mi costa il sopralluogo?', answer: 'Niente. Non paga né il sopralluogo né l’offerta, e l’offerta non La impegna a nulla.' },
    { question: 'Posso inviare piante o foto?', answer: `Sì, per e-mail a ${company.email}. Il modulo non accetta file. Scriva semplicemente nella richiesta che i documenti seguiranno per e-mail.` },
    { question: 'Venite anche fuori da Lucerna?', answer: `Sì. La nostra zona comprende cinque Cantoni interi: ${cantonListIt}. Tutti i servizi vi sono offerti alle stesse condizioni. Località e cartina si trovano alla pagina [Zona d’intervento](/einzugsgebiet).` },
    { question: 'I danni durante il lavoro sono assicurati?', answer: 'Sì, tramite la nostra assicurazione di responsabilità civile aziendale. La somma assicurata è di CHF 10 milioni.' },
    { question: 'Lavorate con prodotti ecologici?', answer: 'Su richiesta sì. Lo indichi preferibilmente già nella richiesta, alla voce «Immobile e richiesta».' },
    { question: 'In quale lingua posso fare la richiesta?', answer: 'In tedesco, inglese, francese o italiano. La consigliamo nella Sua lingua.' },
    { question: 'È possibile anche a breve termine?', answer: 'In questo caso ci telefoni invece di scrivere. Al telefono sa più rapidamente se e quando è possibile un intervento.' },
  ],
  cta: {
    title: 'Richiedere un’offerta per le pulizie',
    text: 'L’offerta ha bisogno di queste indicazioni. Ciò che ancora non sa, lo lasci aperto.',
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

export const premiumOverview: Seiten['premiumOverview'] = {
  line: premiumLine,
  h1: 'Pulizie per esigenze particolari',
  lead: 'Per ville e residenze, abitazioni secondarie, alberghi con esigenze particolari, family office, jet privati e yacht. Sempre lo stesso team, con discrezione, con la conoscenza dei materiali delicati e nella Sua lingua.',
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
  discretion: {
    title: 'Discrezione fin dal primo messaggio',
    paragraphs: [
      'La Sua richiesta è trattata personalmente dal gerente. Su richiesta sottoscriviamo un accordo di riservatezza.',
      'Da Lei lavora sempre lo stesso team, verificato da noi. Conosce la Sua casa, i Suoi desideri e le regole per chiavi e impianto d’allarme che concordiamo con Lei.',
      'Le opere d’arte le puliamo solo con la Sua autorizzazione. Gli orari si adeguano a Lei, anche la sera, nel fine settimana o durante la Sua assenza.',
    ],
  },
  promisesTitle: 'Su che cosa può contare',
  promises,
  places: {
    title: 'Dove siamo a Sua disposizione',
    text: `Sul lago dei Quattro Cantoni da Lucerna e Meggen fino a Weggis, Vitznau, Hergiswil ed Ennetbürgen, sul lago di Zugo e sul lago di Ägeri da Zugo e Walchwil fino a Oberägeri, a Engelberg e nell’intero territorio dei Cantoni di ${cantonListIt}.`,
  },
  cta: {
    title: 'Richiesta discreta',
    text: 'Ci telefoni o ci scriva. La Sua richiesta è trattata personalmente dal gerente, su richiesta con vincolo di riservatezza.',
  },
}
