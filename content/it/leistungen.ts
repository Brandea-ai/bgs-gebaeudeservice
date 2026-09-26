import type { ServicePageContent } from '../types'
import { answers, steps } from './common'

/**
 * Testi delle nove pagine dei servizi sotto /leistungen, in italiano (M29, M60).
 * Traduzione fedele di content/de/leistungen.ts. Le descrizioni generali di un
 * servizio («di norma») non sono un impegno: l’entità vincolante è nell’offerta.
 */

const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizia regolare',
  h1: 'Pulizia di manutenzione per stabili e superfici commerciali',
  lead: [
    'Vano scale, ingresso e locali comuni determinano l’impressione che uno stabile lascia, sia agli inquilini sia alla clientela e ai visitatori. Con una pulizia di manutenzione restano puliti, senza che Lei debba occuparsene personalmente.',
    'Puliamo case plurifamiliari, stabili abitativi e commerciali e superfici commerciali con una cadenza fissa, che stabiliamo con Lei dopo il sopralluogo. Nel contempo riforniamo il materiale di consumo.',
  ],
  facts: [
    { label: 'Per', value: 'Case plurifamiliari, stabili abitativi e commerciali, superfici commerciali' },
    { label: 'Cadenza', value: 'Più volte alla settimana, secondo superficie e utilizzo' },
    { label: 'Compreso', value: 'Servizio di rifornimento del materiale di consumo' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'Che cosa puliamo e con quale frequenza lo stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Vani scale, ingressi e ascensori',
      'Pavimenti in tutti i locali concordati',
      'Porte, corrimano, interruttori e vetri nella zona d’ingresso',
      'Servizi igienici, cucine e locali di soggiorno',
      'Lavanderie, cantine e locali accessori',
      'Svuotare i rifiuti e rifornire il materiale di consumo',
    ],
    notIncluded: [
      'Uffici e studi: vedi [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Pulizie a fondo o di fine locazione una tantum: vedi [Pulizie speciali](/leistungen/sonderreinigungen).',
      'Finestre all’esterno e facciate: vedi [Pulizia di finestre e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Economie domestiche private. Per ville e residenze è a disposizione il nostro [settore Premium](/premium).',
    ],
  },
  sections: [
    {
      title: 'Servizio di rifornimento',
      paragraphs: [
        'Nell’ambito della pulizia di manutenzione riforniamo il materiale di consumo. Quali articoli ne fanno parte e chi li acquista lo stabiliamo nell’offerta.',
      ],
      items: [
        'Carta igienica, asciugamani di carta e sapone',
        'Sacchi per i rifiuti e panni per la pulizia',
        'Altro materiale di consumo secondo accordi',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Accordo',
      text: 'Con la Sua conferma è stabilito quali locali puliamo, con quale frequenza e che cosa riforniamo.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se l’utilizzo cambia, concordiamo con Lei una nuova entità o una nuova cadenza.',
    },
  ],
  faq: [
    {
      question: 'Con quale frequenza si dovrebbe pulire?',
      answer:
        'Dipende da quanto intensamente sono utilizzate le superfici. Dopo il sopralluogo Le proponiamo una cadenza. La pulizia di manutenzione è pensata per oggetti che vengono puliti più volte alla settimana.',
    },
    {
      question: 'Qual è la differenza rispetto alla pulizia a fondo?',
      answer:
        'La pulizia di manutenzione mantiene pulite le superfici con una cadenza fissa. Una pulizia a fondo è un intervento unico e approfondito, che rimuove anche lo sporco che la pulizia regolare non raggiunge. Fa parte delle nostre [pulizie speciali](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Possiamo modificare la cadenza in seguito?',
      answer: 'Sì. Se l’utilizzo cambia, concordiamo con Lei una nuova entità o una nuova cadenza.',
    },
    { question: 'Pulite con prodotti ecologici?', answer: answers.mittel },
    { question: 'Quanto costa una pulizia di manutenzione?', answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).` },
    {
      question: 'A che cosa prestare attenzione nella scelta di un’impresa di pulizie?',
      answer:
        'A un’entità del servizio descritta chiaramente, a un’assicurazione comprovata, a un interlocutore fisso e a un’offerta allestita dopo un sopralluogo. Maggiori informazioni nella guida: [Come trovare l’impresa di pulizie giusta?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'Se si tratta soprattutto di uffici o di uno studio.' },
    { path: '/leistungen/hauswartung', text: 'Se oltre alla pulizia servono anche giri di controllo, piccole riparazioni e smaltimento.' },
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo o una pulizia di fine locazione con garanzia di riconsegna.' },
  ],
  cta: {
    title: 'Offerta per il Suo stabile',
    text: 'Ci descriva oggetto, superficie e cadenza desiderata. Veniamo per il sopralluogo e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizia regolare',
  h1: 'Pulizia di uffici e studi',
  lead: [
    'In uffici e studi la pulizia non deve disturbare l’attività: nessun aspirapolvere durante una riunione, nessun pavimento bagnato durante le ore di consultazione. Per questo stabiliamo con Lei gli orari d’intervento, in funzione dei Suoi orari di lavoro e di apertura.',
    'Puliamo uffici, amministrazioni e studi con una cadenza fissa. Le nostre collaboratrici e i nostri collaboratori parlano tedesco, inglese, francese e italiano, un vantaggio pratico per aziende con un team internazionale.',
  ],
  facts: [
    { label: 'Per', value: 'Uffici, amministrazioni e studi' },
    { label: 'Orari', value: 'Su accordo, in funzione dei Suoi orari di lavoro e di apertura' },
    { label: 'Cadenza', value: 'Più volte alla settimana, secondo superficie e utilizzo' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità esatta la stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Postazioni di lavoro e superfici libere',
      'Pavimenti di uffici, corridoi e sale riunioni',
      'Ricezione, zona d’ingresso e porte a vetri',
      'Angoli cucina e locali di soggiorno',
      'Servizi igienici',
      'Rifiuti e carta straccia, rifornimento del materiale di consumo',
    ],
    notIncluded: [
      'Vani scale e locali comuni di interi stabili: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Pulizie a fondo una tantum: vedi [Pulizie speciali](/leistungen/sonderreinigungen).',
      'Ricondizionamento di strumenti e dispositivi medici, che resta di competenza del team del Suo studio.',
    ],
  },
  sections: [
    {
      title: 'Pulizia negli studi medici',
      paragraphs: [
        'Negli studi ci atteniamo al Suo piano d’igiene. Quali locali e superfici puliamo e che cosa assume il team dello studio lo chiariamo durante il sopralluogo e lo stabiliamo nell’offerta.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Orari e accesso',
      text: 'Stabiliamo quando puliamo e come accediamo all’edificio, ad esempio con chiave o badge.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se le Sue esigenze cambiano, adeguiamo con Lei entità e cadenza.',
    },
  ],
  faq: [
    {
      question: 'Pulite al di fuori dei nostri orari di lavoro?',
      answer:
        'Gli orari d’intervento li stabiliamo con Lei, in funzione dei Suoi orari di lavoro e di apertura. Al momento della richiesta ci indichi quando desidera che si pulisca.',
    },
    {
      question: 'Pulite anche studi medici e di terapia?',
      answer:
        'Sì. Negli studi ci atteniamo al Suo piano d’igiene e chiariamo durante il sopralluogo quali locali e superfici assumiamo.',
    },
    {
      question: 'Le vostre collaboratrici e i vostri collaboratori parlano anche inglese?',
      answer: `${answers.sprachen} È un vantaggio pratico se nel Suo ufficio si parlano più lingue.`,
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'Quanto costa la pulizia di uffici?', answer: `${answers.kosten} Maggiori informazioni nella guida: [Da che cosa dipendono i costi di una pulizia di manutenzione](/blog/reinigungskosten-schweiz).` },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Per vani scale e locali comuni dell’intero stabile.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per finestre e superfici vetrate, anche all’esterno.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono essere affidate a un unico fornitore.' },
  ],
  cta: {
    title: 'Offerta per il Suo ufficio o il Suo studio',
    text: 'Ci indichi superficie, locali e orari desiderati. Veniamo da Lei e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizie speciali: pulizia a fondo e pulizia di fine locazione',
  lead: [
    'Alcune pulizie non si fanno ogni settimana: prima della riconsegna di un appartamento, quando lo sporco si è depositato a lungo o quando dopo lavori edili resta della polvere. Per questi casi ci sono le nostre pulizie speciali.',
    'Le eseguiamo per amministrazioni immobiliari, proprietari e aziende, una tantum o a intervalli più lunghi.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari, comunioni di proprietari per piani e aziende' },
    { label: 'Tipo', value: 'Una tantum o a intervalli più lunghi' },
    { label: 'Pulizia di fine locazione', value: 'Con garanzia di riconsegna' },
  ],
  scope: {
    title: 'Le nostre pulizie speciali',
    items: [
      'Pulizia a fondo di superfici abitative, uffici e superfici commerciali',
      'Pulizia di fine locazione e di riconsegna dell’appartamento con garanzia di riconsegna',
      '[Pulizia di fine cantiere](/leistungen/baureinigung) dopo lavori di costruzione e di ristrutturazione',
      '[Pulizia di finestre e vetri](/leistungen/fenster-und-fassadenreinigung)',
      '[Pulizia di facciate](/leistungen/fenster-und-fassadenreinigung), anche ad alta pressione',
    ],
    notIncluded: [
      'Pulizia regolare: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Pulizie di fine locazione su incarico di inquiline e inquilini di singoli appartamenti.',
    ],
  },
  sections: [
    {
      title: 'Pulizia a fondo',
      paragraphs: [
        'Una pulizia a fondo va oltre la pulizia regolare. Rimuove lo sporco che si è depositato a lungo su pavimenti, nei servizi igienici e nelle cucine, su porte e superfici.',
        'È utile ad esempio prima di una nuova locazione di uffici o superfici commerciali, dopo un utilizzo intenso o prima che inizi una [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      ],
    },
    {
      title: 'Pulizia di fine locazione con garanzia di riconsegna',
      paragraphs: [
        'Alla riconsegna di un appartamento o di una superficie commerciale tutto deve essere pulito, affinché la riconsegna avvenga senza contestazioni. Puliamo a fondo i locali prima della riconsegna, con garanzia di riconsegna: se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
        'Offriamo la pulizia di fine locazione ad amministrazioni immobiliari, proprietari e aziende; per ville e residenze, nel [settore Premium](/premium), anche a privati.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Data',
      text: 'Fissiamo l’intervento alla data che si accorda con la Sua riconsegna o con la Sua attività.',
    },
    {
      title: 'Consegna',
      text: 'Dopo l’intervento Le consegniamo i locali. Per la pulizia di fine locazione vale la garanzia di riconsegna secondo l’offerta.',
    },
  ],
  faq: [
    {
      question: 'Che cosa significa garanzia di riconsegna?',
      answer:
        'Se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
    },
    {
      question: 'Quando conviene una pulizia a fondo?',
      answer:
        'Ad esempio prima di una nuova locazione, dopo un utilizzo intenso o quando la pulizia regolare non rimuove più lo sporco incrostato. Durante il sopralluogo Le diciamo se una pulizia a fondo è necessaria.',
    },
    {
      question: 'Qual è la differenza rispetto alla pulizia di manutenzione?',
      answer:
        'La pulizia di manutenzione mantiene pulite le superfici con una cadenza fissa, la pulizia a fondo è un intervento unico e approfondito. Le due si possono combinare: prima una pulizia a fondo, poi la [pulizia di manutenzione](/leistungen/unterhaltsreinigung) regolare.',
    },
    { question: 'Quanto costa una pulizia speciale?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Per la pulizia durante e dopo lavori di costruzione e di ristrutturazione.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per superfici vetrate e facciate, anche ad alta pressione.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Se dopo la pulizia a fondo si desidera una pulizia regolare.' },
  ],
  cta: {
    title: 'Offerta per la Sua pulizia speciale',
    text: 'Ci descriva oggetto, occasione e data. Visitiamo i locali e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di cantiere e di fine cantiere per nuove costruzioni e ristrutturazioni',
  lead: [
    'Dopo lavori di costruzione e di ristrutturazione polvere, residui di malta e pellicole protettive sono ovunque. Prima che inquilini, acquirenti o il Suo team si insedino, tutto deve essere pronto per l’uso, spesso entro una data di consegna fissa.',
    'Puliamo durante e dopo i lavori, fino a quando i locali possono essere consegnati. Per committenti, studi di architettura, imprese generali e amministrazioni immobiliari.',
  ],
  facts: [
    { label: 'Per', value: 'Committenti, studi di architettura, imprese generali e amministrazioni immobiliari' },
    { label: 'Oggetti', value: 'Nuove costruzioni, trasformazioni e rinnovi' },
    { label: 'Momento', value: 'Durante la fase di costruzione e prima della consegna' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro:
      'Una pulizia di cantiere si svolge perlopiù a tappe, in funzione dell’avanzamento dei lavori. Quali tappe assumiamo lo stabiliamo con Lei.',
    items: [
      'Pulizia grossolana durante la fase di costruzione',
      'Pulizie intermedie, ad esempio prima delle finiture interne',
      'Pulizia di fine cantiere prima della consegna',
      'Liberare finestre, telai e vetri da polvere e residui',
      'Rimuovere residui di colla e pellicole protettive',
      'Pulire pavimenti, servizi igienici, cucine e armadi a muro fino a renderli pronti per l’uso',
    ],
    notIncluded: [
      'Pulizia regolare dopo l’insediamento: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Facciate: vedi [Pulizia di finestre e facciate](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Sopralluogo e offerta',
      text: 'Visitiamo il cantiere e chiariamo con Lei entità del lavoro e scadenze. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Pianificare le tappe',
      text: 'Coordiniamo gli interventi con la direzione lavori e il programma, affinché la pulizia segua l’avanzamento del cantiere.',
    },
    {
      title: 'Consegna',
      text: 'Prima della consegna puliamo i locali rendendoli pronti per l’uso. La data si orienta alla Sua data di consegna o d’insediamento.',
    },
  ],
  faq: [
    {
      question: 'Qual è la differenza tra pulizia di cantiere e pulizia di fine cantiere?',
      answer:
        'La pulizia di cantiere comprende gli interventi durante la fase di costruzione, ad esempio una pulizia grossolana o pulizie intermedie. La pulizia di fine cantiere è l’ultima pulizia approfondita prima della consegna; dopo, i locali sono pronti per l’uso.',
    },
    {
      question: 'Quando dovremmo pianificare la pulizia di fine cantiere?',
      answer:
        'Non appena è fissata la data di consegna. La pulizia avviene dopo gli ultimi lavori degli artigiani e prima del collaudo. Prima conosciamo la data, meglio possiamo pianificare.',
    },
    {
      question: 'È compresa la pulizia delle finestre?',
      answer:
        'Sì, finestre, telai e vetri li puliamo nell’ambito della pulizia di fine cantiere. Per le facciate c’è la [pulizia di finestre e facciate](/leistungen/fenster-und-fassadenreinigung).',
    },
    { question: 'Quanto costa una pulizia di cantiere?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Per pulizie a fondo e pulizie di fine locazione con garanzia di riconsegna.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per superfici vetrate e facciate dell’edificio ultimato.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Per la pulizia regolare dopo l’insediamento.' },
  ],
  cta: {
    title: 'Offerta per il Suo cantiere',
    text: 'Ci indichi oggetto, superficie e data di consegna. Visitiamo il cantiere e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di finestre e facciate per aziende e stabili',
  lead: [
    'Finestre sporche e facciate ingrigite si notano, negli stabili commerciali come in quelli abitativi. Puliamo vetri e facciate una tantum o a intervalli regolari.',
    'Per le facciate impieghiamo anche l’alta pressione. Quale metodo si addice al materiale lo chiariamo durante il sopralluogo sull’oggetto.',
  ],
  facts: [
    { label: 'Per', value: 'Aziende, amministrazioni immobiliari e proprietari' },
    { label: 'Superfici', value: 'Finestre, superfici vetrate, telai e facciate' },
    { label: 'Cadenza', value: 'Una tantum o a intervalli regolari' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità la stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Finestre all’interno e all’esterno, con telai e battute',
      'Facciate in vetro, porte a vetri e pareti in vetro',
      'Vetrine e zone d’ingresso',
      'Davanzali e tende da sole e lamelle secondo accordi',
      'Pulizia di facciate, anche ad alta pressione',
    ],
    notIncluded: [
      'Pulizia degli spazi interni: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung) o [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Rinnovo, tinteggiatura e riparazioni della facciata.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Sopralluogo e offerta',
      text: 'Visitiamo sul posto superfici vetrate e facciata, chiariamo accesso e metodo e Le allestiamo un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Intervento',
      text: 'Puliamo alla data concordata, su richiesta a intervalli fissi.',
    },
  ],
  faq: [
    {
      question: 'Con quale frequenza si dovrebbero pulire le finestre?',
      answer:
        'Dipende da posizione e utilizzo. Lungo una strada molto trafficata i vetri si sporcano più in fretta che nel verde. Dopo il sopralluogo Le proponiamo una cadenza.',
    },
    {
      question: 'Pulite le facciate ad alta pressione?',
      answer: 'Sì, se il materiale lo consente. Quale metodo si addice alla Sua facciata lo chiariamo durante il sopralluogo sull’oggetto.',
    },
    {
      question: 'Come pulite finestre e facciate alte?',
      answer:
        'Dipende dall’edificio e dall’accesso. Lo chiariamo durante il sopralluogo e indichiamo nell’offerta come raggiungiamo le superfici.',
    },
    { question: 'Quanto costa la pulizia?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Per la pulizia regolare di stabili e superfici commerciali.' },
    { path: '/leistungen/bueroreinigung', text: 'Per uffici e studi, in funzione dei Suoi orari di lavoro.' },
    { path: '/leistungen/baureinigung', text: 'Per vetri e telai dopo lavori di costruzione e di ristrutturazione.' },
  ],
  cta: {
    title: 'Offerta per finestre e facciata',
    text: 'Ci indichi edificio, superfici e data desiderata. Visitiamo tutto sul posto e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const industrieUndHallen: ServicePageContent = {
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
    intro: 'L’entità la stabiliamo dopo un giro della Sua azienda. Di norma:',
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
        'Puliamo i macchinari secondo le Sue direttive e d’intesa con il Suo servizio di manutenzione. Quando un impianto è fermo, che cosa viene pulito e quali prodotti sono adatti lo stabiliamo prima dell’intervento.',
        'Le Sue norme di sicurezza e d’esercizio valgono anche per il nostro team. Le chiariamo con Lei prima del primo intervento.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Giro dell’azienda e offerta',
      text: 'Visitiamo sul posto capannoni, impianti e processi. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
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
        'Lo chiariamo durante il giro dell’azienda. Alcune zone si possono pulire durante l’attività, altre solo nelle pause, tra un turno e l’altro o durante i fermi. Gli orari li stabiliamo con Lei.',
    },
    {
      question: 'Pulite anche i macchinari?',
      answer: 'Sì. Che cosa viene pulito su un macchinario e quando si ferma a tale scopo lo stabiliamo con Lei e con il Suo servizio di manutenzione.',
    },
    {
      question: 'Quali regole valgono per il vostro team nella nostra azienda?',
      answer: 'Le Sue norme di sicurezza e d’esercizio. Le chiariamo con Lei prima del primo intervento.',
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
    text: 'Ci indichi superfici, macchinari e orari d’esercizio. Facciamo un giro dell’azienda e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Custodia di stabili abitativi e commerciali',
  lead: [
    'Uno stabile ha bisogno di più della sola pulizia: qualcuno deve controllare regolarmente che tutto sia in ordine, riparare piccoli danni, organizzare lo smaltimento ed essere presente alle riconsegne degli appartamenti. Questo è il compito del servizio di custodia.',
    'Per amministrazioni immobiliari, proprietari e comunioni di proprietari per piani. Quali compiti assumiamo lo stabiliamo per iscritto.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e comunioni di proprietari per piani' },
    { label: 'Oggetti', value: 'Stabili abitativi e commerciali' },
    { label: 'Non offerto', value: 'Servizio invernale e servizio di picchetto' },
  ],
  scope: {
    title: 'Che cosa assume il servizio di custodia',
    intro: 'Con questi compiti componiamo il servizio di custodia per il Suo stabile:',
    items: [
      'Giri di controllo: verificare regolarmente che tutto sia in ordine e segnalare i difetti',
      'Vano scale: pulire e mantenere in ordine',
      'Mantenere puliti lavanderia e locali di asciugatura',
      'Piccole riparazioni, ad esempio sostituire lampadine',
      'Tenere d’occhio l’impiantistica dell’edificio e segnalare i guasti',
      'Collaborare alle riconsegne degli appartamenti',
      'Organizzare lo smaltimento di rifiuti e materiali riciclabili',
      'Cura delle aree esterne, maggiori informazioni alla pagina [Cura delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Non offriamo il servizio invernale.',
      'Servizio di picchetto e d’emergenza 24 ore su 24.',
      'Riparazioni più importanti e lavori artigianali.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Giro dello stabile e offerta',
      text: 'Visitiamo lo stabile e chiariamo con Lei quali compiti si presentano. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Stabilire i compiti',
      text: 'Stabiliamo quali compiti assumiamo, con quale frequenza siamo sul posto e a chi segnaliamo i difetti.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se in seguito lo stabile ha bisogno di più o di meno, adeguiamo con Lei i compiti.',
    },
  ],
  faq: [
    {
      question: 'Qual è la differenza rispetto alla pulizia di manutenzione?',
      answer:
        'La pulizia di manutenzione pulisce con una cadenza fissa. Il servizio di custodia va oltre: giri di controllo, piccole riparazioni, impiantistica, smaltimento, riconsegne degli appartamenti e cura delle aree esterne. Chi ha bisogno solo della pulizia trova la soluzione giusta nella [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
    },
    {
      question: 'Eseguite anche riparazioni più importanti?',
      answer:
        'No, eseguiamo piccole riparazioni. Per lavori più importanti serve un’impresa specializzata. I danni che constatiamo durante i giri di controllo glieli segnaliamo.',
    },
    {
      question: 'Offrite un servizio invernale o un servizio di picchetto?',
      answer: 'No. Servizio invernale e servizio di picchetto non fanno parte della nostra offerta.',
    },
    {
      question: 'Possiamo scegliere singoli compiti?',
      answer: 'Sì. Componiamo il servizio di custodia con i compiti di cui il Suo stabile ha bisogno.',
    },
    { question: 'Quanto costa il servizio di custodia?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Per le aree esterne e le aree verdi dello stabile.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Se si desidera affidare solo la pulizia.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono rientrare in un unico contratto.' },
  ],
  cta: {
    title: 'Offerta per il Suo stabile',
    text: 'Ci indichi oggetto, numero di appartamenti o superfici e i compiti che desidera affidare. Facciamo un giro dello stabile e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Cura delle aree esterne e verdi per stabili',
  lead: [
    'Le aree esterne sono la prima cosa che inquilini, clientela e visitatori vedono di uno stabile. Aree verdi curate, vialetti e piazzali puliti fanno quindi parte della cura quanto il vano scale.',
    'Curiamo le aree esterne del Suo stabile, singolarmente o nell’ambito del [servizio di custodia](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e aziende' },
    { label: 'Intervento', value: 'Singolarmente o nell’ambito del servizio di custodia' },
    { label: 'Non offerto', value: 'Servizio invernale' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'Quali lavori assumiamo lo stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Tagliare l’erba e rifilare i bordi',
      'Curare siepi, arbusti e aiuole',
      'Rimuovere il fogliame',
      'Mantenere puliti vialetti, piazzali e parcheggi',
      'Rimuovere le erbacce su piazzali e nelle fughe',
      'Raccogliere i rifiuti nelle aree esterne',
    ],
    notIncluded: ['Non offriamo il servizio invernale.', 'Lavori di giardinaggio e nuove sistemazioni.'],
  },
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Piano di cura',
      text: 'Stabiliamo quali lavori assumiamo e con quale frequenza, in funzione della stagione.',
    },
    {
      title: 'Cura',
      text: 'Curiamo le aree esterne secondo il piano. Interventi supplementari, ad esempio prima di un evento, li concorda con noi.',
    },
  ],
  faq: [
    { question: 'Eseguite anche il servizio invernale?', answer: 'No, non offriamo il servizio invernale.' },
    {
      question: 'Posso affidare la cura delle aree esterne senza il servizio di custodia?',
      answer: 'Sì. La cura delle aree esterne e verdi è disponibile singolarmente o nell’ambito del [servizio di custodia](/leistungen/hauswartung).',
    },
    { question: 'Quanto costa la cura delle aree esterne?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Se oltre alle aree esterne si desidera la cura dell’edificio e dell’impiantistica.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono rientrare in un unico contratto.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per facciate e superfici vetrate.' },
  ],
  cta: {
    title: 'Offerta per la cura delle Sue aree esterne',
    text: 'Ci indichi stabile e superfici. Visitiamo le aree esterne e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Facility services: pulizia, custodia e aree esterne da un unico fornitore',
  lead: [
    'Chi affida pulizia, custodia e cura delle aree esterne a imprese diverse ha più contratti, più interlocutori e molto coordinamento. Con i facility services tutto è fornito da noi.',
    'Lei ha un solo contratto e un solo interlocutore. Quali servizi ne fanno parte lo definiamo insieme a Lei.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e aziende' },
    { label: 'Entità', value: 'Composta secondo le esigenze a partire dai nostri servizi' },
    { label: 'Contratto', value: 'Un contratto, un interlocutore' },
  ],
  scope: {
    title: 'Che cosa si può combinare',
    intro: 'I facility services li componiamo a partire dai nostri servizi:',
    items: [
      '[Pulizia di manutenzione](/leistungen/unterhaltsreinigung) con servizio di rifornimento',
      '[Pulizia di uffici e studi](/leistungen/bueroreinigung)',
      '[Custodia di stabili](/leistungen/hauswartung)',
      '[Cura delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Pulizia di finestre e facciate](/leistungen/fenster-und-fassadenreinigung)',
      '[Pulizie speciali](/leistungen/sonderreinigungen), ad esempio pulizie a fondo',
      '[Pulizia industriale e di capannoni](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Facility management tecnico, come la manutenzione di riscaldamento, ventilazione o ascensori.',
      'Servizio invernale.',
      'L’intermediazione di imprese terze, ad esempio aziende artigianali.',
    ],
  },
  steps: [
    steps.anfrage,
    {
      title: 'Giro degli stabili e offerta',
      text: 'Visitiamo i Suoi stabili e chiariamo quali servizi sono necessari. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Un solo contratto',
      text: 'I servizi di cui il Suo oggetto ha bisogno li stabiliamo in un unico contratto.',
    },
    {
      title: 'Un solo interlocutore',
      text: 'Per tutti i servizi ha un solo interlocutore presso di noi. Le modifiche le discute in un unico punto.',
    },
  ],
  faq: [
    {
      question: 'Che cosa intendete per facility services?',
      answer:
        'Pulizia, custodia e cura delle aree esterne da un unico fornitore, in un solo contratto e con un solo interlocutore. Il facility management tecnico, ad esempio la manutenzione di riscaldamento e ventilazione, non ne fa parte.',
    },
    {
      question: 'Possiamo iniziare con un singolo servizio?',
      answer:
        'Sì. Può iniziare con un servizio, ad esempio la [pulizia di manutenzione](/leistungen/unterhaltsreinigung), e aggiungerne altri in seguito.',
    },
    { question: 'Quanto costano i facility services?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Giri di controllo, piccole riparazioni, impiantistica, smaltimento e riconsegne degli appartamenti.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Pulizia regolare di stabili e superfici commerciali.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Cura delle aree esterne e delle aree verdi.' },
  ],
  cta: {
    title: 'Offerta per facility services',
    text: 'Ci indichi i Suoi stabili e i servizi che desidera affidare. Facciamo un giro degli stabili e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
