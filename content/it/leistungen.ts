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
      'Servizi igienici, cucine e locali pausa',
      'Lavanderie, cantine e locali accessori',
      'Svuotare i cestini e rifornire il materiale di consumo',
    ],
    notIncluded: [
      'Uffici e studi: vedi [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Pulizie a fondo una tantum: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen), pulizie finali prima della riconsegna alla pagina [Pulizia di fine locazione](/leistungen/umzugsreinigung).',
      'Finestre all’esterno e facciate: vedi [Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Economie domestiche private. Per ville e residenze è a disposizione il nostro [settore Premium](/premium).',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Una pulizia di manutenzione conviene ovunque molte persone utilizzino le stesse superfici. Nelle case plurifamiliari si tratta di vano scale, ascensore e lavanderia. Negli stabili abitativi e commerciali si aggiungono ingressi frequentati dal pubblico, nelle superfici commerciali ricezione, corridoi e servizi igienici.',
        'Spesso la richiesta arriva quando la soluzione adottata finora non regge più: la pulizia da parte degli inquilini non funziona, l’impresa precedente cessa l’attività o un’amministrazione immobiliare assume un nuovo stabile.',
      ],
    },
    {
      title: 'Servizio di rifornimento',
      paragraphs: [
        'Nell’ambito della pulizia di manutenzione riforniamo il materiale di consumo. Quali articoli ne fanno parte e chi li acquista lo stabiliamo nell’offerta.',
      ],
      items: [
        'Carta igienica, asciugamani di carta e sapone',
        'Sacchi per i rifiuti e panni per la pulizia',
        'Altro materiale di consumo previo accordo',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'La frequenza delle pulizie dipende dall’utilizzo, non solo dalla superficie. Un ingresso molto frequentato dal pubblico richiede più cura di un corridoio in cantina percorso da poche persone. Conviene quindi una cadenza per ogni zona, anziché una sola per tutto l’edificio. La nostra proposta la discutiamo con Lei dopo il sopralluogo.',
      ],
      items: [
        'Ingresso, ascensore e vano scale: più spesso, perché qui entra la maggior parte dello sporco dall’esterno',
        'Servizi igienici e cucine: più spesso, per motivi di igiene',
        'Cantine, solai e locali accessori: più di rado, secondo l’utilizzo',
        'Vetri nella zona d’ingresso: secondo necessità, più spesso con la pioggia e in inverno',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia di manutenzione',
      paragraphs: [
        'Pulito significa più di un pavimento lavato. Durante un giro nello stabile questi punti Le mostrano rapidamente quanto accuratamente si pulisce:',
      ],
      items: [
        'Corrimano, interruttori della luce e pulsanti dell’ascensore sono puliti, non solo i pavimenti',
        'Negli angoli, sugli spigoli dei gradini e dietro le porte non resta sporco',
        'I servizi igienici hanno un odore fresco, sapone e carta sono riforniti',
        'Le porte a vetri all’ingresso sono senza aloni e impronte',
        'L’entità concordata è fissata per iscritto, così entrambe le parti sanno che cosa vale',
      ],
    },
    {
      title: 'Collaborazione con amministrazione e proprietà',
      paragraphs: [
        'Prima dell’inizio chiariamo con Lei l’accesso allo stabile, ad esempio con chiave o badge, e dove possono stare attrezzi e prodotti per la pulizia. Un locale di pulizia chiudibile a chiave o un compartimento in cantina facilita il lavoro.',
        'Per gli inquilini è utile un breve avviso che indichi in quali giorni si pulisce. Così in quei giorni scale e corridoi restano liberi da scarpe, biciclette e altri oggetti.',
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
      text: 'Iniziamo alla data concordata. Se l’utilizzo cambia, concordiamo con Lei un nuovo volume di lavoro o una nuova cadenza.',
    },
  ],
  faq: [
    {
      question: 'Con quale frequenza si dovrebbe pulire?',
      answer:
        'Dipende da quanto intensamente sono utilizzate le superfici. Dopo il sopralluogo Le proponiamo una cadenza. La pulizia di manutenzione è pensata per immobili che vengono puliti più volte alla settimana.',
    },
    {
      question: 'Qual è la differenza rispetto alla pulizia a fondo?',
      answer:
        'La pulizia di manutenzione mantiene pulite le superfici con una cadenza fissa. Una pulizia a fondo è un intervento unico e approfondito, che rimuove anche lo sporco che la pulizia regolare non raggiunge. Maggiori informazioni alla pagina [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Possiamo modificare la cadenza in seguito?',
      answer: 'Sì. Se l’utilizzo cambia, concordiamo con Lei un nuovo volume di lavoro o una nuova cadenza.',
    },
    {
      question: 'Le inquiline e gli inquilini devono preparare qualcosa?',
      answer:
        'No. È utile che nei giorni di pulizia scale e corridoi siano liberi da scarpe, biciclette e altri oggetti. Di solito basta un breve avviso nel vano scale.',
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
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo, ad esempio prima dell’inizio o dopo un utilizzo intenso.' },
  ],
  cta: {
    title: 'Offerta per il Suo stabile',
    text: 'Ci descriva l’immobile, la superficie e la cadenza desiderata. Veniamo da Lei per il sopralluogo e Le allestiamo un’offerta, gratuita e senza impegno.',
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
    { label: 'Orari', value: 'Previo accordo, in funzione dei Suoi orari di lavoro e di apertura' },
    { label: 'Cadenza', value: 'Più volte alla settimana, secondo superficie e utilizzo' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità esatta la stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Postazioni di lavoro e superfici libere',
      'Pavimenti di uffici, corridoi e sale riunioni',
      'Ricezione, zona d’ingresso e porte a vetri',
      'Angoli cucina e locali pausa',
      'Servizi igienici',
      'Rifiuti e carta straccia, rifornimento del materiale di consumo',
    ],
    notIncluded: [
      'Vani scale e locali comuni di interi stabili: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Pulizie a fondo una tantum: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
      'Ricondizionamento di strumenti e dispositivi medici, che resta di competenza del team del Suo studio.',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Piccoli uffici con poche postazioni, amministrazioni su più piani, studi medici e di terapia con sala d’attesa: i locali sono diversi, l’esigenza è la stessa. Al mattino tutto deve essere pulito e pronto, senza che nessuno si accorga della pulizia.',
        'Spesso la richiesta arriva con il trasloco in nuovi locali, quando il team cresce o quando la pulizia attuale non si adatta più agli orari di lavoro.',
      ],
    },
    {
      title: 'Che cosa succede durante un intervento',
      paragraphs: [
        'Si è dimostrata valida una sequenza fissa, dall’alto verso il basso e dal pulito allo sporco: svuotare rifiuti e carta straccia, pulire superfici libere e postazioni di lavoro, pulire angolo cucina e servizi igienici, rifornire il materiale di consumo e per ultimi i pavimenti. Così nessun pavimento già pulito si sporca di nuovo.',
        'Se ne fanno parte anche schermi, tastiere, telefoni o piante lo chiariamo durante il sopralluogo e lo stabiliamo nell’offerta.',
      ],
    },
    {
      title: 'Pulizia negli studi medici',
      paragraphs: [
        'Negli studi ci atteniamo al Suo piano d’igiene. Quali locali e superfici puliamo e di che cosa si occupa il team del Suo studio lo chiariamo durante il sopralluogo e lo stabiliamo nell’offerta.',
        'Alla ricezione e in sala d’attesa maniglie, bancone, sedie e ripiani sono toccati da molte persone. Quali prodotti valgono per queste superfici è indicato nel Suo piano d’igiene. Sale di trattamento e apparecchi restano come li prescrive il team del Suo studio.',
      ],
    },
    {
      title: 'Orari e accesso',
      paragraphs: [
        'La maggior parte degli uffici viene pulita al di fuori dell’orario di lavoro, al mattino presto o la sera. Negli studi l’orario dipende dalle ore di consultazione. Gli orari d’intervento li stabiliamo con Lei.',
        'Per l’accesso servono di solito una chiave o un badge e regole chiare per impianto d’allarme, luci e chiusura. Lo chiariamo prima del primo intervento.',
      ],
    },
    {
      title: 'Che cosa determina l’impegno',
      paragraphs: [
        'Quanto dura un intervento e quanto spesso passiamo dipende meno dalla sola superficie che dall’uso dei locali. Chiariamo questi punti durante il sopralluogo:',
      ],
      items: [
        'Superficie e tipo di locali, ad esempio uffici singoli, open space, sale riunioni e ricezione',
        'Numero di postazioni di lavoro e intensità d’uso dei locali',
        'Angoli cucina e servizi igienici, che richiedono più tempo delle superfici d’ufficio',
        'Pavimenti come moquette, parquet, pietra o vinile',
        'Porte a vetri, pareti vetrate e altre superfici in vetro',
        'Ritmo e orari d’intervento',
        'Accesso con chiave, badge o impianto d’allarme',
        'Se il materiale di consumo come sapone, carta e sacchi per i rifiuti è compreso',
      ],
    },
    {
      title: 'Quali informazioni inserire nella richiesta d’offerta',
      paragraphs: [
        'Più la Sua richiesta è precisa, meglio possiamo preparare il sopralluogo. Sono utili queste informazioni:',
      ],
      items: [
        'Indirizzo e tipo di azienda, ad esempio ufficio, amministrazione o studio',
        'Superficie approssimativa e numero di piani',
        'Numero di postazioni di lavoro, sale riunioni, angoli cucina e servizi igienici',
        'Ritmo desiderato e orari in cui deve avvenire la pulizia',
        'Particolarità come studi medici con piano d’igiene, zone riservate o grandi superfici vetrate',
        'Se desidera prodotti di pulizia ecologici',
        'Data d’inizio desiderata e persona di riferimento per il sopralluogo',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia di uffici',
      items: [
        'I cestini sono svuotati e dotati di sacchi nuovi',
        'L’angolo cucina è senza aloni di caffè, il lavello pulito e asciutto',
        'Porte e pareti in vetro sono senza impronte',
        'I distributori di sapone e di carta nei servizi igienici sono riforniti',
        'Documenti e oggetti personali restano come li ha lasciati',
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
      text: 'Iniziamo alla data concordata. Se le Sue esigenze cambiano, adeguiamo con Lei il volume di lavoro e la cadenza.',
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
        'Sì. Negli studi ci atteniamo al Suo piano d’igiene e chiariamo durante il sopralluogo di quali locali e superfici ci occupiamo.',
    },
    {
      question: 'Dobbiamo riordinare le postazioni prima della pulizia?',
      answer:
        'Puliamo le superfici libere. Meno oggetti ci sono sulle scrivanie, più accuratamente si può pulire. Come desidera regolarsi con documenti, schermi e tastiere lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Come avviene la consegna delle chiavi e come entra il vostro team nell’edificio?',
      answer:
        'Prima del primo intervento stabiliamo con Lei quali chiavi, badge o codici riceve il nostro team e quali regole valgono per allarme, luci e chiusura.',
    },
    {
      question: 'Le vostre collaboratrici e i vostri collaboratori parlano anche inglese?',
      answer: `${answers.sprachen} È un vantaggio pratico se nel Suo ufficio si parlano più lingue.`,
    },
    {
      question: 'Chi risponde se durante la pulizia si danneggia qualcosa?',
      answer:
        'Disponiamo di un’assicurazione di responsabilità civile aziendale con una copertura di CHF 10 milioni. Se dopo un intervento nota un danno, ce lo segnali subito.',
    },
    {
      question: 'Quanto dura il contratto e come si può disdire?',
      answer:
        'Durata e disdetta vengono concordate nell’offerta. Ci comunichi i Suoi desideri in merito durante il sopralluogo.',
    },
    { question: 'Pulite anche con prodotti ecologici?', answer: answers.mittel },
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
  h1: 'Pulizie a fondo e speciali per stabili e superfici commerciali',
  lead: [
    'Certe incrostazioni la pulizia regolare non le raggiunge più: calcare nei servizi igienici, grasso nelle cucine, sporco nelle fughe e negli angoli, vecchi strati sui pavimenti. Allora serve una pulizia a fondo, una tantum o a intervalli più lunghi.',
    'Eseguiamo pulizie a fondo e speciali per amministrazioni immobiliari, proprietari e aziende. Per la pulizia finale alla riconsegna dell’appartamento c’è la [pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung).',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari, comunioni dei proprietari per piani e aziende' },
    { label: 'Tipo', value: 'Una tantum o a intervalli più lunghi' },
    { label: 'Superfici', value: 'Superfici abitative, uffici e superfici commerciali' },
  ],
  scope: {
    title: 'Le nostre pulizie a fondo e speciali',
    items: [
      'Pulizia a fondo di superfici abitative, uffici e superfici commerciali',
      '[Pulizia di fine locazione e pulizia finale dell’appartamento](/leistungen/umzugsreinigung) con garanzia di consegna',
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
      title: 'Che cosa caratterizza una pulizia a fondo',
      paragraphs: [
        'Una pulizia a fondo va oltre la pulizia regolare. Rimuove lo sporco incrostato nel tempo: calcare e incrostazioni di urina nei servizi igienici, grasso nelle cucine, sporco nelle fughe, negli angoli e sui battiscopa, residui di vecchi prodotti di cura sui pavimenti.',
        'Per i pavimenti il procedimento dipende dal rivestimento, ad esempio pietra naturale, piastrelle, linoleum o parquet. Quale metodo e quali prodotti sono adatti lo chiariamo durante il sopralluogo.',
      ],
    },
    {
      title: 'Occasioni tipiche',
      paragraphs: [
        'Una pulizia a fondo conviene sempre quando una superficie ricomincia da capo o è stata utilizzata a lungo e intensamente:',
      ],
      items: [
        'Prima di una nuova locazione di uffici o superfici commerciali',
        'Dopo un utilizzo intenso o un lungo periodo di inutilizzo',
        'Prima che inizi una [pulizia di manutenzione](/leistungen/unterhaltsreinigung)',
        'Quando la pulizia regolare non rimuove più lo sporco incrostato',
      ],
    },
    {
      title: 'Pulizia di fine locazione e pulizia finale dell’appartamento',
      paragraphs: [
        'Per la pulizia finale alla riconsegna di un appartamento o di una superficie commerciale c’è una pagina dedicata con tutti i dettagli: [pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung). La offriamo ad amministrazioni immobiliari, proprietari e aziende; per ville e residenze, nel [settore Premium](/premium), anche a privati.',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'Una pulizia a fondo richiede tempo e locali il più possibile liberi. In uffici e superfici commerciali la si può spesso collocare in un fine settimana, durante le vacanze aziendali o tra due locazioni. Negli stabili con inquilini serve un preavviso, perché ad esempio vano scale o lavanderia non sono utilizzabili per poco tempo.',
        'Con quale frequenza una pulizia a fondo sia utile dipende da utilizzo e sollecitazione. Con una buona pulizia regolare diventa necessaria più di rado.',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia a fondo',
      items: [
        'Le fughe sono di nuovo chiare, non solo le piastrelle',
        'Rubinetteria e piastrelle sono senza aloni di calcare',
        'Il pavimento è senza aloni e senza punti appiccicosi',
        'Battiscopa, porte e telai delle porte sono puliti anch’essi',
        'Le superfici delicate sono intatte, perché i prodotti sono adatti al materiale',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Data',
      text: 'Fissiamo l’intervento alla data più adatta al Suo utilizzo o alla Sua attività.',
    },
    {
      title: 'Consegna',
      text: 'Dopo l’intervento Le consegniamo i locali. Se in seguito si desidera una pulizia regolare, ne parliamo volentieri con Lei.',
    },
  ],
  faq: [
    {
      question: 'Che cos’è una pulizia a fondo?',
      answer:
        'Un intervento unico e approfondito che rimuove anche lo sporco incrostato nel tempo, ad esempio calcare, grasso, sporco nelle fughe o vecchi strati di prodotti di cura sui pavimenti.',
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
    {
      question: 'I locali devono essere vuoti per la pulizia a fondo?',
      answer:
        'Non del tutto, ma più le superfici sono libere, più accuratamente si può pulire. Che cosa resta al suo posto e chi lo sposta lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Eseguite anche pulizie di fine locazione?',
      answer:
        'Sì, con garanzia di consegna, per amministrazioni immobiliari, proprietari e aziende. Tutti i dettagli alla pagina [Pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung).',
    },
    { question: 'Quanto costa una pulizia a fondo?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/umzugsreinigung', text: 'Per la pulizia finale prima della riconsegna di un appartamento o di una superficie commerciale, con garanzia di consegna.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Se dopo la pulizia a fondo si desidera una pulizia regolare.' },
    { path: '/leistungen/baureinigung', text: 'Per la pulizia durante e dopo lavori di costruzione e di ristrutturazione.' },
  ],
  cta: {
    title: 'Offerta per la Sua pulizia a fondo',
    text: 'Ci descriva l’immobile, il motivo della pulizia e la data. Visitiamo i locali e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di trasloco e di fine locazione con garanzia di consegna',
  lead: [
    'Alla riconsegna dell’appartamento l’amministrazione controlla ogni locale: cucina, bagno, finestre, lamelle, armadi e locali accessori. Affinché la riconsegna avvenga senza contestazioni, l’appartamento deve essere pulito a fondo, e questo entro una data fissa.',
    'Eseguiamo la pulizia di trasloco e di fine locazione di appartamenti e superfici commerciali per amministrazioni immobiliari, proprietari e aziende, con garanzia di consegna: se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari, comunioni dei proprietari per piani e aziende' },
    { label: 'Immobili', value: 'Appartamenti e superfici commerciali prima della riconsegna' },
    { label: 'Garanzia', value: 'Garanzia di consegna, dettagli nell’offerta' },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia finale',
    intro: 'L’entità esatta della pulizia dell’appartamento la stabiliamo nell’offerta dopo il sopralluogo. Di norma:',
    items: [
      'Cucina con forno, piano cottura, cappa aspirante, frigorifero e armadi, all’interno e all’esterno',
      'Bagno e WC con rubinetteria, piastrelle, fughe e specchi, liberati dal calcare',
      'Finestre all’interno e all’esterno, con telai, battute e davanzali',
      'Lamelle e persiane previo accordo',
      'Armadi a muro, porte, telai delle porte, interruttori e prese',
      'Pavimenti e battiscopa in tutti i locali',
      'Balcone o terrazzino, compartimento in cantina e in solaio',
    ],
    notIncluded: [
      'Pulizie di fine locazione su incarico di inquiline e inquilini di singoli appartamenti. Per ville e residenze è a disposizione il nostro [settore Premium](/premium).',
      'Trasporto del trasloco e sgombero di mobili.',
      'Riparazioni, lavori di pittura ed eliminazione di danni.',
      'Pulizia a fondo senza riconsegna: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'La garanzia di consegna',
      paragraphs: [
        'Se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
        'La garanzia si riferisce alla nostra pulizia. Danni, usura o riparazioni che vengono annotati alla riconsegna non riguardano la pulizia e quindi non ne fanno parte.',
      ],
    },
    {
      title: 'Quanto deve essere pulito un appartamento alla riconsegna?',
      paragraphs: [
        'Quanto a fondo si debba pulire lo stabilisce di solito il contratto di locazione. In Svizzera è consuetudine una pulizia approfondita dell’intero appartamento, compresi i locali accessori. Alla riconsegna l’amministrazione guarda quindi anche dove nella vita quotidiana si pulisce di rado: nel forno, nella cappa aspirante, sulle lamelle, nelle battute delle finestre e negli armadi.',
        'Che cosa valga nel singolo caso è indicato nel contratto di locazione e nel verbale di riconsegna. Questa pagina offre una panoramica e non sostituisce una consulenza giuridica.',
      ],
    },
    {
      title: 'Pianificazione e data',
      paragraphs: [
        'La pulizia finale si colloca tra il trasloco e la riconsegna. È meglio che i locali siano allora vuoti, affinché si possano pulire anche armadi, pavimenti dietro i mobili e installazioni fisse. Pianifichi la pulizia in modo che tra pulizia e riconsegna passi il minor tempo possibile.',
        'Prenoti per tempo, non appena è fissata la data di riconsegna. A fine mese e in corrispondenza delle date di trasloco usuali nel luogo molte date sono richieste.',
      ],
      items: [
        'Mobili e oggetti personali sono stati sgomberati',
        'Corrente e acqua sono ancora allacciate',
        'Le chiavi di appartamento, cantina, solaio e bucalettere sono disponibili',
      ],
    },
    {
      title: 'Per chi eseguiamo la pulizia di fine locazione',
      paragraphs: [
        'Per amministrazioni immobiliari che rendono gli appartamenti pronti per l’uso tra due locazioni. Per proprietari e proprietari per piani che vendono, consegnano o rilocano un appartamento. E per aziende che lasciano uffici o superfici commerciali.',
        'Non serviamo inquiline e inquilini di singoli appartamenti. Per ville e residenze eseguiamo la pulizia finale nel [settore Premium](/premium) anche per privati.',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia finale',
      items: [
        'Forno, teglie e cappa aspirante sono senza pellicola di grasso',
        'Rubinetteria, vetro della doccia e piastrelle sono senza aloni di calcare',
        'Finestre, telai e battute sono senza aloni e senza polvere',
        'Gli armadi sono puliti e asciutti all’interno',
        'Lungo i battiscopa non restano bordi di polvere',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Sopralluogo e offerta',
      text: 'Visitiamo l’appartamento o la superficie, possibilmente prima del trasloco, e chiariamo con Lei entità del lavoro e data. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Pulizia finale',
      text: 'Puliamo tra il trasloco e la riconsegna, alla data concordata.',
    },
    {
      title: 'Riconsegna',
      text: 'Alla riconsegna vale la garanzia di consegna prevista nell’offerta.',
    },
  ],
  faq: [
    {
      question: 'Quanto costa una pulizia di fine locazione?',
      answer:
        'Dipende soprattutto dalla grandezza e dallo stato dell’appartamento, dal numero di finestre e lamelle, da locali accessori come cantina, solaio o balcone e dalla data. Per questo indichiamo i prezzi solo nell’offerta, dopo aver visto l’immobile. Sopralluogo e offerta sono gratuiti e senza impegno.',
    },
    {
      question: 'Quanto deve essere pulito un appartamento alla riconsegna in Svizzera?',
      answer:
        'È consuetudine una pulizia approfondita dell’intero appartamento, compresi i locali accessori: cucina con elettrodomestici, bagno e WC, finestre all’interno e all’esterno con i telai, lamelle, armadi, pavimenti, cantina, solaio e balcone. Che cosa valga nel singolo caso lo stabiliscono il contratto di locazione e il verbale di riconsegna. Questa risposta non è una consulenza giuridica.',
    },
    {
      question: 'Che cosa succede se l’amministrazione contesta qualcosa alla riconsegna?',
      answer:
        'Se in occasione della riconsegna l’amministrazione contesta qualcosa della nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
    },
    {
      question: 'Quando conviene prenotare la pulizia di fine locazione?',
      answer:
        'Non appena è fissata la data di riconsegna. A fine mese e in corrispondenza delle date di trasloco usuali nel luogo molte date sono richieste. La pulizia la collochiamo tra il trasloco e la riconsegna.',
    },
    {
      question: 'I locali devono essere vuoti per la pulizia finale?',
      answer:
        'Idealmente sì. Nei locali vuoti si possono pulire anche armadi, installazioni fisse e pavimenti dietro i mobili, ed è proprio lì che l’amministrazione controlla alla riconsegna.',
    },
    {
      question: 'Eseguite la pulizia di fine locazione anche per inquiline e inquilini?',
      answer:
        'No. Eseguiamo la pulizia di fine locazione per amministrazioni immobiliari, proprietari e aziende. Per ville e residenze è disponibile nel [settore Premium](/premium) anche per privati.',
    },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo senza riconsegna, ad esempio prima dell’inizio di una pulizia di manutenzione.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per superfici vetrate e facciate dell’intero stabile.' },
    { path: '/leistungen/hauswartung', text: 'Se il servizio di custodia deve collaborare alle riconsegne degli appartamenti.' },
  ],
  cta: {
    title: 'Offerta per la Sua pulizia di fine locazione',
    text: 'Ci indichi l’immobile, la grandezza e la data di riconsegna. Visitiamo i locali e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di cantiere e di fine cantiere per nuove costruzioni e ristrutturazioni',
  lead: [
    'Dopo lavori di costruzione e di ristrutturazione, polvere, residui di malta e pellicole protettive si trovano ovunque. Prima che inquilini, acquirenti o il Suo team si insedino, tutto deve essere pronto per l’uso, spesso entro una data di consegna fissa.',
    'Puliamo durante e dopo i lavori, fino a quando i locali possono essere consegnati. Per committenti, studi di architettura, imprese generali e amministrazioni immobiliari.',
  ],
  facts: [
    { label: 'Per', value: 'Committenti, studi di architettura, imprese generali e amministrazioni immobiliari' },
    { label: 'Cantieri', value: 'Nuove costruzioni, trasformazioni e rinnovi' },
    { label: 'Momento', value: 'Durante la fase di costruzione e prima della consegna' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro:
      'Una pulizia di cantiere si svolge perlopiù a tappe, in funzione dell’avanzamento dei lavori. Di quali tappe ci occupiamo lo stabiliamo con Lei.',
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
      'Facciate: vedi [Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Nuove costruzioni di stabili abitativi e commerciali, trasformazioni di singoli piani, appartamenti rinnovati prima della nuova locazione o negozi prima dell’apertura. Tutti hanno in comune una data fissa: consegna, insediamento o apertura.',
        'Spesso la pulizia viene richiesta solo poco prima di questa data. È meglio inserirla presto nel cronoprogramma, affinché trovi posto dopo gli ultimi lavori degli artigiani e prima del collaudo.',
      ],
    },
    {
      title: 'Che cosa succede durante la pulizia di fine cantiere',
      paragraphs: [
        'La polvere di cantiere è fine e si deposita ovunque: sui pavimenti, nelle battute delle finestre, sui telai delle porte, negli armadi e nei cassetti. Per questo si pulisce dall’alto verso il basso e spesso in più di un passaggio.',
        'A ciò si aggiungono residui come colla, etichette e pellicole protettive. Vengono rimossi con prodotti e attrezzi adatti alla superficie, affinché vetri, rubinetteria e pavimenti nuovi non si graffino.',
      ],
    },
    {
      title: 'Le tappe in sintesi',
      items: [
        'Pulizia grossolana: rimuovere sporco grossolano e polvere, affinché i lavori successivi inizino su una base pulita',
        'Pulizia intermedia: prima delle finiture interne, ad esempio prima della posa dei pavimenti o del montaggio delle cucine',
        'Pulizia di fine cantiere: approfondita e pronta per l’uso, dopo gli ultimi lavori degli artigiani e prima del collaudo',
      ],
      paragraphs: [
        'Se dopo la pulizia di fine cantiere gli artigiani lavorano ancora nei locali, si forma nuova polvere. Pianifichi quindi la pulizia finale dopo gli ultimi lavori.',
      ],
    },
    {
      title: 'Collaborazione con la direzione lavori',
      paragraphs: [
        'Sul cantiere valgono le regole della direzione lavori. Prima del primo intervento chiariamo accesso, norme di sicurezza, corrente e acqua, uno spazio per gli attrezzi e la gestione dei rifiuti.',
        'È utile un interlocutore sul cantiere che confermi date e accesso. Se il cronoprogramma si sposta, coordiniamo di nuovo gli interventi con Lei.',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia di fine cantiere',
      items: [
        'Nessuna pellicola di polvere su davanzali, telai delle porte e nei cassetti',
        'Vetri senza residui di colla, aloni e graffi',
        'Le pellicole protettive su finestre, porte e apparecchi sono rimosse',
        'Rubinetteria e piastrelle sono senza residui',
        'I pavimenti sono puliti, anche negli angoli e lungo i battiscopa',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Sopralluogo e offerta',
      text: 'Visitiamo il cantiere e chiariamo con Lei entità del lavoro e scadenze. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Pianificare le tappe',
      text: 'Coordiniamo gli interventi con la direzione lavori e il cronoprogramma, affinché la pulizia segua l’avanzamento del cantiere.',
    },
    {
      title: 'Consegna',
      text: 'Prima della consegna puliamo i locali rendendoli pronti per l’uso. Fissiamo la data in base alla Sua data di consegna o d’insediamento.',
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
        'Sì, finestre, telai e vetri li puliamo nell’ambito della pulizia di fine cantiere. Per le facciate c’è la [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'Che cosa serve sul cantiere per la pulizia?',
      answer:
        'Accesso ai locali, corrente e acqua e uno spazio per gli attrezzi. Dove li troviamo lo chiariamo durante il sopralluogo con Lei o con la direzione lavori.',
    },
    { question: 'Quanto costa una pulizia di cantiere?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Per una pulizia a fondo, quando le superfici devono tornare accuratamente pulite dopo un lungo utilizzo.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per superfici vetrate e facciate dell’edificio ultimato.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Per la pulizia regolare dopo l’insediamento.' },
  ],
  cta: {
    title: 'Offerta per il Suo cantiere',
    text: 'Ci indichi l’edificio, la superficie e la data di consegna. Visitiamo il cantiere e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di vetri e facciate per aziende e stabili',
  lead: [
    'Finestre sporche e facciate ingrigite si notano, negli stabili commerciali come in quelli abitativi. Puliamo vetri e facciate una tantum o a intervalli regolari.',
    'Per le facciate impieghiamo anche l’alta pressione. Quale metodo si addice al materiale lo chiariamo durante il sopralluogo.',
  ],
  facts: [
    { label: 'Per', value: 'Aziende, amministrazioni immobiliari e proprietari' },
    { label: 'Superfici', value: 'Finestre, superfici vetrate, telai e facciate' },
    { label: 'Cadenza', value: 'Una tantum o a intervalli regolari' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'L’entità del servizio la stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Finestre all’interno e all’esterno, con telai e battute',
      'Facciate in vetro, porte a vetri e pareti in vetro',
      'Vetrine e zone d’ingresso',
      'Davanzali, lamelle e tende da sole, previo accordo',
      'Pulizia di facciate, anche ad alta pressione',
    ],
    notIncluded: [
      'Pulizia degli spazi interni: vedi [Pulizia di manutenzione](/leistungen/unterhaltsreinigung) o [Pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Rinnovo, tinteggiatura e riparazioni della facciata.',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Edifici per uffici con facciate in vetro, negozi con vetrine, stabili abitativi con molte finestre nel vano scale, edifici commerciali con facciate grigie o verdi. Ovunque il vetro determina la prima impressione, e in controluce lo sporco si nota subito.',
        'Spesso la pulizia si rende necessaria in primavera dopo l’inverno, quando si aggiunge il polline, oppure prima di un evento, di una locazione o di una vendita.',
      ],
    },
    {
      title: 'Come si puliscono vetri e facciate',
      paragraphs: [
        'Il vetro viene pulito perlopiù con acqua, un detergente delicato e un tergivetro, poi si ripassano telai e battute. Per superfici vetrate grandi e alte esistono aste telescopiche con acqua pura trattata, che asciuga senza lasciare residui.',
        'Per le facciate decide il materiale. Superfici lisce e resistenti sopportano spesso l’alta pressione, intonaco delicato, legno o vecchia pietra naturale richiedono un procedimento più delicato. Quale metodo sia adatto lo chiariamo durante il sopralluogo.',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'Con quale frequenza pulire i vetri dipende da posizione, utilizzo ed esigenze. Vetrine e ingressi li vedono tutti, le finestre di un magazzino quasi nessuno.',
      ],
      items: [
        'Ingressi, vetrine e porte a vetri: più spesso, perché tutti li vedono e li toccano',
        'Finestre di uffici e vani scale: a intervalli regolari, spesso secondo la stagione',
        'Facciate: più di rado, quando diventano visibili sporco, alghe o un velo grigio',
        'Con gelo, tempesta o pioggia forte all’esterno non si può lavorare bene, preveda quindi un certo margine',
      ],
    },
    {
      title: 'Che cosa chiariamo durante il sopralluogo',
      items: [
        'Quanto sono alte le superfici e come raggiungerle in sicurezza',
        'Se le finestre si possono aprire o sono raggiungibili solo dall’esterno',
        'Di quale materiale sono telai e facciata',
        'Accesso, parcheggio e sbarramenti, ad esempio sul marciapiede davanti all’edificio',
        'Se occorre informare le inquiline e gli inquilini, perché le finestre vengono pulite dall’interno',
      ],
    },
    {
      title: 'Come riconoscere una buona pulizia delle finestre',
      items: [
        'In controluce non si vedono aloni',
        'Il vetro è pulito fino agli angoli, anche sul bordo verso il telaio',
        'Telai, battute e davanzali sono puliti anch’essi, per quanto concordato',
        'All’interno non restano gocce e macchie d’acqua su pavimenti e davanzali',
      ],
    },
  ],
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
      answer: 'Sì, se il materiale lo consente. Quale metodo si addice alla Sua facciata lo chiariamo durante il sopralluogo.',
    },
    {
      question: 'Come pulite finestre e facciate alte?',
      answer:
        'Dipende dall’edificio e dall’accesso. Lo chiariamo durante il sopralluogo e indichiamo nell’offerta come raggiungiamo le superfici.',
    },
    {
      question: 'Le inquiline e gli inquilini devono essere a casa?',
      answer:
        'Per le finestre che si possono pulire solo dall’interno serve l’accesso all’appartamento o all’ufficio. Lo chiariamo durante il sopralluogo, affinché possa informare per tempo gli inquilini.',
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
    text: 'Ci indichi edificio, superfici e data desiderata. Esaminiamo tutto sul posto e Le allestiamo un’offerta, gratuita e senza impegno.',
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
    steps.anfrage,
    {
      title: 'Visita dell’azienda e offerta',
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

const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Custodia di stabili abitativi e per uffici',
  lead: [
    'Uno stabile ha bisogno di più della sola pulizia: qualcuno deve controllare regolarmente che tutto sia in ordine, riparare piccoli danni, organizzare lo smaltimento ed essere presente alle consegne e riconsegne degli appartamenti. Questo è il compito del servizio di custodia.',
    'Per amministrazioni immobiliari, proprietari e comunioni dei proprietari per piani che non possono o non vogliono controllare di persona. Quali compiti svolgiamo, con quale frequenza siamo sul posto e a chi segnaliamo i difetti lo stabiliamo per iscritto.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e comunioni dei proprietari per piani' },
    { label: 'Immobili', value: 'Stabili abitativi e commerciali' },
    { label: 'Prestazioni', value: 'Compiti secondo le esigenze, stabiliti per iscritto' },
  ],
  scope: {
    title: 'Che cosa comprende il servizio di custodia',
    intro: 'Con questi compiti componiamo il servizio di custodia per il Suo stabile:',
    items: [
      'Giri di controllo: verificare regolarmente che tutto sia in ordine e segnalare i difetti',
      'Vano scale: pulire e mantenere in ordine',
      'Mantenere puliti lavanderia e locali di asciugatura',
      'Piccole riparazioni, ad esempio sostituire lampadine',
      'Tenere d’occhio l’impiantistica dell’edificio e segnalare i guasti',
      'Collaborare alle consegne e riconsegne degli appartamenti',
      'Organizzare lo smaltimento di rifiuti e materiali riciclabili',
      'Manutenzione delle aree esterne, maggiori informazioni alla pagina [Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Non offriamo il servizio invernale.',
      'Servizio di picchetto e d’emergenza 24 ore su 24.',
      'Riparazioni più importanti e lavori artigianali.',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Case plurifamiliari e complessi residenziali, proprietà per piani, stabili abitativi e commerciali con negozi o uffici al pianterreno. Ovunque serve qualcuno che passi regolarmente, mantenga in ordine la lavanderia e si accorga quando qualcosa non va.',
        'Spesso la richiesta arriva quando il custode precedente smette, quando un’amministrazione immobiliare assume un nuovo stabile o quando in una comunione dei proprietari per piani nessuno vuole più occuparsi dei compiti.',
      ],
    },
    {
      title: 'Che cosa succede durante il giro di controllo',
      paragraphs: [
        'Durante il giro di controllo verifichiamo che tutto sia in ordine, con la frequenza concordata con Lei. Ciò che possiamo sistemare noi, ad esempio sostituire una lampadina, lo facciamo. Tutto il resto lo segnaliamo al servizio che abbiamo stabilito con Lei.',
      ],
      items: [
        'Illuminazione nel vano scale, in cantina e nelle aree esterne',
        'Porte, serrature e impianto bucalettere',
        'Lavanderia, locali di asciugatura e cantina',
        'Locale caldaia e impiantistica, per verificare guasti visibili',
        'Area rifiuti e aree esterne',
      ],
    },
    {
      title: 'Uno sguardo sull’impiantistica',
      paragraphs: [
        'Custodia non significa manutenzione degli impianti. Riscaldamento, ventilazione, ascensore e protezione antincendio li mantengono imprese specializzate. Il servizio di custodia controlla regolarmente, nota presto i guasti e li segnala, ad esempio un messaggio di errore sul riscaldamento, un rubinetto che gocciola in lavanderia o un ascensore che non si ferma correttamente.',
      ],
    },
    {
      title: 'Consegne e riconsegne degli appartamenti',
      paragraphs: [
        'Come collaboriamo alle consegne e riconsegne degli appartamenti lo stabiliamo con l’amministrazione, ad esempio se apriamo l’appartamento, consegniamo le chiavi o annotiamo le letture dei contatori. Riconsegna e verbale restano di competenza dell’amministrazione.',
        'Se prima della riconsegna l’appartamento necessita di una pulizia finale, c’è la [pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Collaborazione con amministrazione e proprietà',
      paragraphs: [
        'Un buon servizio di custodia vive di accordi chiari: quali compiti, con quale frequenza, chi riceve le segnalazioni e quali piccoli lavori si possono eseguire senza chiedere. Lo stabiliamo per iscritto.',
        'Anche gli inquilini dovrebbero sapere a chi rivolgersi. Chi è l’interlocutore per loro lo stabiliamo insieme a Lei.',
      ],
    },
    {
      title: 'Capitolato per la custodia di stabili: che cosa deve contenere',
      paragraphs: [
        'Un capitolato stabilisce che cosa svolge il servizio di custodia in uno stabile, con quale frequenza e chi è responsabile di che cosa. Crea chiarezza per amministrazione, proprietà, inquilini e custode e rende confrontabili le offerte.',
        'Da noi questo elenco nasce dopo la visita dello stabile: mettiamo per iscritto quali compiti assumiamo, quanto spesso siamo sul posto e a chi segnaliamo i difetti. Questi punti vanno inseriti in un capitolato:',
      ],
      items: [
        'Compiti e ritmo per ogni area: vano scala, ingresso, lavanderia e locali di asciugatura, cantina e area rifiuti, ciascuno con attività e frequenza',
        'Giri di controllo: con quale frequenza, quali locali e impianti comprendono e come si annota ciò che si nota',
        'Aree esterne: quali superfici vengono curate, ad esempio prati, siepi, aiuole, vialetti e piazzali',
        'Responsabilità e canali di segnalazione: chi riceve le segnalazioni del custode, quali piccoli lavori si possono svolgere senza chiedere e a chi si rivolgono gli inquilini',
        'Chiavi e accesso: quali chiavi, badge e codici riceve il custode e come vengono custoditi',
        'Materiale: chi fornisce prodotti di pulizia, materiale di consumo e attrezzature e dove vengono depositati',
        'Limiti rispetto agli artigiani: quali lavori spettano a ditte specializzate, ad esempio riparazioni più importanti e la manutenzione di riscaldamento, ascensore e protezione antincendio, e chi le incarica',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Visita dello stabile e offerta',
      text: 'Visitiamo lo stabile e chiariamo con Lei quali compiti sono necessari. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Stabilire i compiti',
      text: 'Stabiliamo quali compiti svolgiamo, con quale frequenza siamo sul posto e a chi segnaliamo i difetti.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se in seguito lo stabile ha bisogno di più o di meno, adeguiamo con Lei i compiti.',
    },
  ],
  faq: [
    {
      question: 'Quali compiti svolge un servizio di custodia?',
      answer:
        'Di solito giri di controllo, la pulizia di vano scala, lavanderia e locali di asciugatura, piccole riparazioni, uno sguardo sull’impiantistica, lo smaltimento dei rifiuti, la collaborazione alle consegne degli appartamenti e la cura delle aree esterne. Quali compiti assumiamo nel Suo stabile e con quale frequenza lo stabiliamo con Lei per iscritto, come in un capitolato.',
    },
    {
      question: 'Qual è la differenza rispetto alla pulizia di manutenzione?',
      answer:
        'La pulizia di manutenzione si svolge con una cadenza fissa. Il servizio di custodia va oltre: giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti e manutenzione delle aree esterne. Chi ha bisogno solo della pulizia trova la soluzione giusta nella [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
    },
    {
      question: 'Eseguite anche riparazioni più importanti?',
      answer:
        'No, eseguiamo piccole riparazioni. Per lavori più importanti serve un’impresa specializzata. Le segnaliamo i danni che constatiamo durante i giri di controllo.',
    },
    {
      question: 'Offrite un servizio invernale o un servizio di picchetto?',
      answer: 'No. Il servizio invernale e il servizio di picchetto non fanno parte della nostra offerta.',
    },
    {
      question: 'Possiamo scegliere singoli compiti?',
      answer: 'Sì. Componiamo il servizio di custodia con i compiti di cui il Suo stabile ha bisogno.',
    },
    {
      question: 'Con quale frequenza passa il servizio di custodia?',
      answer:
        'Dipende da grandezza, età e utilizzo dello stabile. Con quale frequenza siamo sul posto lo stabiliamo per iscritto insieme agli altri compiti.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
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
    text: 'Ci indichi lo stabile, il numero di appartamenti o le superfici e i compiti che desidera affidarci. Visitiamo lo stabile e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Manutenzione delle aree esterne e verdi per stabili',
  lead: [
    'Le aree esterne sono la prima cosa che inquilini, clientela e visitatori vedono di uno stabile. Aree verdi curate, vialetti e piazzali puliti fanno quindi parte della manutenzione tanto quanto il vano scale.',
    'Curiamo le aree esterne del Suo stabile, singolarmente o nell’ambito del [servizio di custodia](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e aziende' },
    { label: 'Intervento', value: 'Singolarmente o nell’ambito del servizio di custodia' },
    { label: 'Non offriamo', value: 'Servizio invernale' },
  ],
  scope: {
    title: 'Che cosa comprende',
    intro: 'Quali lavori svolgiamo lo stabiliamo dopo il sopralluogo. Di norma:',
    items: [
      'Tagliare l’erba e rifilare i bordi',
      'Curare siepi, arbusti e aiuole',
      'Rimuovere il fogliame',
      'Mantenere puliti vialetti, piazzali e parcheggi',
      'Rimuovere le erbacce da piazzali e fughe',
      'Raccogliere i rifiuti nelle aree esterne',
    ],
    notIncluded: ['Non offriamo il servizio invernale.', 'Costruzione di giardini e nuove sistemazioni a verde.'],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Complessi residenziali con prato, siepi e parco giochi, stabili commerciali con parcheggio e zona d’ingresso, edifici artigianali con aiuole e superfici in ghiaia. Le aree esterne sono la prima cosa che vedono i visitatori e ciò che gli inquilini usano ogni giorno.',
        'Spesso la richiesta arriva quando le aree esterne finora venivano curate di passaggio e ciò non basta più, oppure quando pulizia, custodia e aree esterne devono essere affidate insieme.',
      ],
    },
    {
      title: 'Manutenzione nel corso dell’anno',
      paragraphs: [
        'I lavori seguono la stagione. Di norma si svolgono così:',
      ],
      items: [
        'Primavera: liberare vialetti e piazzali dallo sporco dell’inverno, curare le aiuole, primo taglio dell’erba',
        'Estate: tagliare regolarmente l’erba, rimuovere le erbacce da piazzali e fughe, liberare leggermente i passaggi se necessario',
        'Autunno: rimuovere il fogliame, preparare le aiuole per l’inverno',
        'Inverno: potare siepi e arbusti, fuori dal periodo di nidificazione. Non offriamo il servizio invernale, sgombero della neve e spargimento di sale richiedono un’altra soluzione',
      ],
    },
    {
      title: 'Pianificazione e cadenza',
      paragraphs: [
        'La frequenza della manutenzione dipende da stagione e condizioni meteo. Nel periodo di crescita il prato richiede più attenzione che a fine autunno. Il piano di manutenzione lo stabiliamo per iscritto; interventi supplementari, ad esempio prima di un evento, li concorda con noi.',
        'Nell’ambito del [servizio di custodia](/leistungen/hauswartung) la manutenzione delle aree esterne si può combinare con i giri di controllo: chi lavora all’esterno vede anche quando qualcosa non va nell’edificio.',
      ],
    },
    {
      title: 'Come riconoscere aree esterne curate',
      items: [
        'I bordi del prato sono rifilati con precisione',
        'Vialetti e piazzali sono senza fogliame, rifiuti ed erbacce nelle fughe',
        'Le siepi sono in forma, passaggi e visuali restano liberi',
        'Le aiuole sono curate e senza erbacce',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    steps.besichtigung,
    {
      title: 'Piano di manutenzione',
      text: 'Stabiliamo quali lavori svolgiamo e con quale frequenza, in funzione della stagione.',
    },
    {
      title: 'Manutenzione',
      text: 'Curiamo le aree esterne secondo il piano. Interventi supplementari, ad esempio prima di un evento, li concorda con noi.',
    },
  ],
  faq: [
    { question: 'Eseguite anche il servizio invernale?', answer: 'No, non offriamo il servizio invernale.' },
    {
      question: 'Posso affidare la manutenzione delle aree esterne senza il servizio di custodia?',
      answer: 'Sì. La manutenzione delle aree esterne e verdi è disponibile singolarmente o nell’ambito del [servizio di custodia](/leistungen/hauswartung).',
    },
    {
      question: 'Quando è meglio potare le siepi?',
      answer:
        'Fuori dal periodo di nidificazione, che per molte specie va dalla primavera alla fine dell’estate. La Stazione ornitologica svizzera di Sempach raccomanda di potare gli arbusti in inverno, da novembre a marzo. Se in estate passaggi o visuali si chiudono, di solito basta una leggera potatura di forma con attenzione ai nidi. Il momento adatto per le Sue siepi lo fissiamo nel piano di manutenzione.',
    },
    {
      question: 'Realizzate anche nuovi giardini?',
      answer: 'No. La costruzione di giardini e le nuove sistemazioni a verde non fanno parte della nostra offerta. Curiamo aree esterne esistenti.',
    },
    { question: 'Quanto costa la manutenzione delle aree esterne?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Se oltre alle aree esterne si desidera la cura dell’edificio e dell’impiantistica.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono rientrare in un unico contratto.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Per facciate e superfici vetrate.' },
  ],
  cta: {
    title: 'Offerta per la manutenzione delle Sue aree esterne',
    text: 'Ci indichi stabile e superfici. Visitiamo le aree esterne e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Facility services: pulizia, custodia e aree esterne da un unico fornitore',
  lead: [
    'Chi affida pulizia, custodia e manutenzione delle aree esterne a imprese diverse ha più contratti, più interlocutori e molto coordinamento. Con i facility services tutto è fornito da noi.',
    'Avrà un solo contratto e un solo interlocutore. Quali servizi ne fanno parte lo definiamo insieme a Lei.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e aziende' },
    { label: 'Prestazioni', value: 'Combinate secondo le esigenze a partire dai nostri servizi' },
    { label: 'Contratto', value: 'Un contratto, un interlocutore' },
  ],
  scope: {
    title: 'Che cosa si può combinare',
    intro: 'I facility services li componiamo a partire dai nostri servizi:',
    items: [
      '[Pulizia di manutenzione](/leistungen/unterhaltsreinigung) con servizio di rifornimento',
      '[Pulizia di uffici e studi](/leistungen/bueroreinigung)',
      '[Custodia di stabili](/leistungen/hauswartung)',
      '[Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung)',
      '[Pulizie a fondo e speciali](/leistungen/sonderreinigungen)',
      '[Pulizia industriale e di capannoni](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Facility management tecnico, come la manutenzione di riscaldamento, ventilazione o ascensori.',
      'Servizio invernale.',
      'L’intermediazione di imprese terze, ad esempio aziende artigianali.',
    ],
  },
  sections: [
    {
      title: 'Situazioni tipiche',
      paragraphs: [
        'Un’amministrazione immobiliare gestisce più stabili e non vuole coordinare un’impresa diversa per ogni compito. Un’azienda ha uffici, un capannone e aree esterne e vuole un unico riferimento per tutto. Oppure una proprietà assume uno stabile e cerca una soluzione coerente fin dall’inizio.',
      ],
    },
    {
      title: 'Come da singoli servizi nasce un contratto',
      paragraphs: [
        'Durante la visita esaminiamo di che cosa ha bisogno il Suo immobile: pulizia interna, vetri, custodia, aree esterne. Ne nasce un contratto in cui ogni servizio figura con entità e cadenza.',
        'Se in seguito si aggiunge o viene meno qualcosa, ne parla in un unico punto, con il Suo interlocutore presso di noi.',
      ],
    },
    {
      title: 'I vantaggi per Lei',
      items: [
        'Un solo interlocutore per pulizia, custodia e aree esterne',
        'Un solo contratto invece di più, con una visione d’insieme su tutti i servizi',
        'Meno coordinamento tra imprese, ad esempio su chi pulisce il vano scale dopo lavori nelle aree esterne',
        'Uno sguardo sull’intero immobile: chi pulisce nell’edificio vede anche quando all’esterno qualcosa non va',
      ],
    },
    {
      title: 'Limiti e collaborazione',
      paragraphs: [
        'Per noi facility services significa: i servizi che eseguiamo noi stessi. Il facility management tecnico, ad esempio la manutenzione di riscaldamento, ventilazione o ascensori, non ne fa parte, così come l’intermediazione di aziende artigianali.',
        'I guasti che notiamo durante il lavoro Glieli segnaliamo, affinché possa incaricare l’impresa specializzata adatta.',
      ],
    },
  ],
  steps: [
    steps.anfrage,
    {
      title: 'Visita degli stabili e offerta',
      text: 'Visitiamo i Suoi stabili e chiariamo quali servizi sono necessari. In seguito riceve un’offerta scritta, gratuita e senza impegno.',
    },
    {
      title: 'Un solo contratto',
      text: 'I servizi di cui il Suo immobile ha bisogno li fissiamo in un unico contratto.',
    },
    {
      title: 'Un solo interlocutore',
      text: 'Per tutti i servizi ha un solo interlocutore presso di noi. Per le modifiche si rivolge sempre alla stessa persona.',
    },
  ],
  faq: [
    {
      question: 'Che cosa intendete per facility services?',
      answer:
        'Pulizia, custodia e manutenzione delle aree esterne da un unico fornitore, in un solo contratto e con un solo interlocutore. Il facility management tecnico, ad esempio la manutenzione di riscaldamento e ventilazione, non ne fa parte.',
    },
    {
      question: 'Possiamo iniziare con un singolo servizio?',
      answer:
        'Sì. Può iniziare con un servizio, ad esempio la [pulizia di manutenzione](/leistungen/unterhaltsreinigung), e aggiungerne altri in seguito.',
    },
    {
      question: 'Qual è la differenza rispetto al servizio di custodia?',
      answer:
        'Il [servizio di custodia](/leistungen/hauswartung) è un singolo servizio con giri di controllo, piccole riparazioni, impiantistica e smaltimento. I facility services lo combinano con pulizia e manutenzione delle aree esterne in un unico contratto.',
    },
    {
      question: 'Chi è il nostro interlocutore?',
      answer: 'Per tutti i servizi ha un solo interlocutore presso di noi. Per le modifiche si rivolge sempre alla stessa persona.',
    },
    { question: 'Quanto costano i facility services?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
    { question: 'Siete assicurati?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Pulizia regolare di stabili e superfici commerciali.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Manutenzione delle aree esterne e delle aree verdi.' },
  ],
  cta: {
    title: 'Offerta per facility services',
    text: 'Ci indichi i Suoi stabili e i servizi che desidera affidare. Visitiamo gli stabili e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}

export const leistungen = {
  unterhaltsreinigung,
  bueroreinigung,
  sonderreinigungen,
  umzugsreinigung,
  baureinigung,
  fensterUndFassade,
  industrieUndHallen,
  hauswartung,
  aussenUndGruen,
  facilityServices,
}
