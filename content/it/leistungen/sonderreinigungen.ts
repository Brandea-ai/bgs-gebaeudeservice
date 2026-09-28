import type { ServicePageContent, Source } from '../../types'

// Stessa struttura e stesse chiavi di content/de/leistungen/sonderreinigungen.ts. Le fonti sono
// gli originali svizzeri (perlopiù in tedesco), verificati il 28.09.2026.

const nvs: Source = {
  label: 'Associazione svizzera della pietra naturale NVS: scheda tecnica sulla pulizia dei pavimenti in pietra naturale (gennaio 2018, in tedesco)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqStein: Source = {
  label: 'Ceruniq (associazione svizzera delle piastrelle): istruzioni di cura per la pietra naturale (febbraio 2025, in tedesco)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-natursteinbelaege.pdf',
}
const ceruniqKeramik: Source = {
  label: 'Ceruniq: istruzioni di pulizia e cura dei rivestimenti in ceramica (febbraio 2025, in tedesco)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqErst: Source = {
  label: 'Ceruniq: prima pulizia delle piastrelle con fughe cementizie (febbraio 2025, in tedesco)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const isp: Source = {
  label: 'ISP, associazione svizzera del parquet: istruzioni di cura per parquet oliato e verniciato (in tedesco)',
  href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring: raccomandazione di pulizia e cura per Marmoleum con Topshield Pro (03/2022, in tedesco)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyl: Source = {
  label: 'Forbo Flooring: raccomandazione di pulizia e cura per i pavimenti design Allura in vinile (in tedesco)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const bag: Source = {
  label: 'Ufficio federale della sanità pubblica UFSP: «Vorsicht Schimmel», guida sulle muffe (agosto 2023, in tedesco)',
  href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf',
}
const or257h: Source = {
  label: 'Codice delle obbligazioni, art. 257h cpv. 3 (annuncio dei lavori sulla cosa locata)',
  href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_257_h',
}

export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Pulizia a fondo secondo il pavimento',
  h1: 'Pulizie a fondo e speciali per stabili e superfici commerciali',
  lead: [
    'Il vano scale, il pavimento dell’ufficio o i servizi igienici non sembrano più puliti nonostante la pulizia regolare: le fughe sono grigie, sul pavimento restano vecchi strati di prodotti di cura, sulla rubinetteria c’è il calcare. Una pulizia a fondo toglie tutto questo, con prodotti adatti al pavimento.',
    'La eseguiamo per amministrazioni immobiliari, comunioni dei proprietari per piani, proprietari e aziende. Qui trova che cosa sopporta ogni pavimento, come distinguere lo sporco da un danno e modelli per la preparazione, l’avviso agli inquilini e il controllo finale.',
  ],
  facts: [
    { label: 'Intervento', value: 'Una tantum o a intervalli più lunghi, spesso tra due locazioni o utilizzi' },
    { label: 'Durante i lavori', value: 'Pavimenti bagnati, zone chiuse a tratti' },
    { label: 'La Sua parte', value: 'Liberare i pavimenti, spegnere il riscaldamento a pavimento, informare gli inquilini' },
    { label: 'Non compreso', value: 'Levigatura, verniciatura, rifacimento delle fughe e riparazioni' },
  ],
  sections: [
    {
      title: 'Ciò che la pulizia regolare non toglie più',
      paragraphs: [
        'La pulizia di manutenzione rimuove lo sporco degli ultimi giorni. Ciò che si accumula in mesi resta: prodotti di cura applicati strato dopo strato che inglobano lo sporco, calcare sulla rubinetteria, fughe grigie, zone di passaggio appiccicose.',
        'Una pulizia a fondo rimuove questi strati fino a liberare di nuovo la superficie originale. Ha senso soprattutto in questi casi:',
      ],
      items: [
        'Superficie per uffici o commerciale tra due locazioni',
        'Dopo un lungo periodo sfitto o un uso intenso',
        'Prima dell’inizio di una nuova [pulizia di manutenzione](/leistungen/unterhaltsreinigung), perché parta da uno stato pulito',
        'Quando i pavimenti restano opachi nonostante la cura e le fughe sono più scure delle piastrelle',
      ],
    },
    {
      title: 'Servizi igienici: calcare, incrostazioni di urina e fughe',
      paragraphs: [
        'Calcare e incrostazioni di urina si tolgono con prodotti acidi. Proprio questi però intaccano le fughe cementizie e la pietra calcarea. Per questo pavimento e fughe vengono prima saturati d’acqua, il prodotto agisce solo per poco e alla fine si risciacqua più volte con acqua pulita.',
        'Le fughe davanti a WC e orinatoi richiedono lavoro a mano con la spazzola, perché una macchina non raggiunge i bordi. I punti neri nelle fughe in silicone sono un altro caso: si tratta di muffa nel materiale, e la fuga va sostituita.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bodenbelaege',
      title: 'Quale pavimento sopporta quale pulizia',
      intro:
        'In una pulizia a fondo decide il prodotto: ciò che scioglie il calcare sul granito intacca il marmo. La tabella riassume le raccomandazioni delle associazioni di categoria svizzere e dei produttori.',
      columns: ['Pavimento', 'Che cosa conta', 'Che cosa danneggia'],
      rows: [
        [
          'Marmo, pietra calcarea, travertino',
          'Prodotti a pH neutro o leggermente alcalini, poi risciacquare a fondo e aspirare completamente l’acqua sporca.',
          'Qualsiasi acido, anche aceto, acido citrico e detergenti acidi per bagno o sanitari: intacca la superficie. I dischi abrasivi possono graffiare la pietra lucidata.',
        ],
        [
          'Granito, gneiss, quarzite',
          'Resistenti agli acidi, tutti i metodi di pulizia sono possibili, anche la rimozione del calcare con prodotti acidi.',
          'L’acido cloridrico e l’acido solforico scoloriscono la pietra. Le fughe cementizie accanto vanno comunque protette bagnandole prima.',
        ],
        [
          'Piastrelle e gres porcellanato con fughe cementizie',
          'Sciogliere grasso e vecchi prodotti di cura con un detergente alcalino, il calcare con un detergente per sanitari. Bagnare sempre prima, lasciare agire poco, risciacquare più volte con acqua pulita. Spegnere prima del tutto il riscaldamento a pavimento.',
          'Prodotti acidi su fughe asciutte: intaccano la malta e possono danneggiare fughe scure o colorate. Troppo detergente con additivi di cura lascia macchie permanenti.',
        ],
        [
          'Linoleum',
          'Detergenti con pH inferiore a 9. I pavimenti più recenti hanno uno strato protettivo di fabbrica che deve restare intatto durante la pulizia.',
          'Soluzioni fortemente alcaline, acidi, detergenti per sanitari, polveri abrasive e solventi forti.',
        ],
        [
          'Pavimenti in plastica (PVC, vinile)',
          'Prima di un nuovo rivestimento protettivo, strofinare a macchina con un decerante adatto al vinile e risciacquare con acqua pulita. Il pavimento deve essere privo di residui e completamente asciutto.',
          'Polveri abrasive, acidi, detergenti per sanitari e solventi forti.',
        ],
        [
          'Parquet verniciato',
          'Passare solo un panno ben strizzato, se serve con un detergente neutro. Macchine per la pulizia solo con il consenso del produttore.',
          'Pulizia con molta acqua, apparecchi a vapore e prodotti abrasivi.',
        ],
        [
          'Parquet oliato',
          'Pulire con i prodotti del sistema di olio utilizzato, poi oliare regolarmente.',
          'Pulitori a vapore, prodotti abrasivi e panni in microfibra non approvati per il parquet.',
        ],
      ],
      note:
        'Fanno stato le istruzioni di cura del produttore del pavimento. Se il pavimento è sconosciuto, prima di ogni pulizia a fondo si fa una prova in un punto poco visibile, e la pietra sconosciuta si tratta come il marmo.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, ceruniqErst, forboLinoleum, forboVinyl, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'schaden-oder-schmutz',
      title: 'Sporco o danneggiato?',
      intro:
        'Una pulizia a fondo toglie lo sporco, non i danni. Con questa tabella valuta durante il giro di controllo se la pulizia aiuterà o se il lavoro spetta a un altro specialista.',
      columns: ['Che cosa vede', 'Causa più frequente', 'Che cosa aiuta'],
      rows: [
        [
          'Macchie opache e ruvide su marmo o pietra calcarea lucidati',
          'Un acido ha intaccato la superficie, per esempio aceto, succo di limone o un anticalcare.',
          'Levigatura e lucidatura da parte di una ditta specializzata in pietra naturale. Una pulizia non riporta la lucentezza.',
        ],
        [
          'Fughe cementizie grigie, solide e senza crepe',
          'Grasso, sporco e residui di prodotti di cura sulla superficie della fuga.',
          'Pulizia a fondo con un detergente alcalino, bagnando prima le fughe.',
        ],
        [
          'Fughe che si sgretolano, si sfaldano o mancano in alcuni punti',
          'La malta delle fughe è intaccata, per esempio da prodotti acidi usati senza bagnare prima.',
          'Rifare le fughe da parte di un piastrellista. Una pulizia a fondo può peggiorare il danno.',
        ],
        [
          'Punti neri nelle fughe in silicone di doccia, vasca o cucina',
          'Muffa nel materiale della fuga.',
          'Far rimuovere e rinnovare il sigillante da uno specialista e verificare la causa dell’umidità.',
        ],
        [
          'Zone di passaggio sulla pietra naturale più scure dei bordi',
          'Patina d’uso: i pori più fini sono pieni di polvere.',
          'Anche una pulizia a fondo in genere non la toglie del tutto. Pulire sempre superfici intere, altrimenti compaiono differenze di tonalità.',
        ],
        [
          'Parquet grigio, ruvido o scoperto nelle zone di passaggio',
          'La verniciatura o lo strato di olio è consumato.',
          'Parquettista: a seconda della superficie, oliare di nuovo oppure levigare e verniciare.',
        ],
      ],
      note:
        'Documenti questi punti prima della pulizia, meglio con fotografie. Così in seguito è chiaro che cosa c’era già prima.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, bag, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'checkliste-grundreinigung',
      title: 'Lista di controllo per preparazione e collaudo',
      intro:
        'Per l’amministrazione, il custode o la direzione aziendale: che cosa va sbrigato prima della data e come verificare il risultato.',
      groups: [
        {
          title: 'Prima della data',
          items: [
            'Annotare il pavimento di ogni locale, cercare le istruzioni di cura ricevute alla consegna dell’edificio',
            'Documentare con fotografie i danni noti: punti intaccati da acidi, fughe che si staccano, parquet consumato',
            'Informare per tempo inquilini o personale, per esempio con l’avviso qui sotto',
            'Far spegnere del tutto il riscaldamento a pavimento nei locali interessati',
            'Regolare l’accesso per il giorno dell’intervento, lasciare accessibili acqua, uno scarico e prese elettriche',
            'Mobili grandi: decidere se verranno spostati o resteranno al loro posto',
            'Il giorno prima liberare i pavimenti: scarpe, biciclette, passeggini, piante, sedie, cestini',
            'Prevedere un passaggio asciutto verso appartamenti, bucalettere e ascensore',
          ],
        },
        {
          title: 'Al collaudo',
          items: [
            'Le fughe sono chiare come le piastrelle, non solo la superficie delle piastrelle è pulita',
            'Nessun bordo di calcare su rubinetteria, pareti della doccia e piastrelle murali',
            'Nessun velo in luce radente: illuminare il pavimento di piatto con una torcia',
            'Nessuna zona appiccicosa e nessun bordo bianco di residui di prodotto negli angoli',
            'Anche zoccolini, porte e telai delle porte sono stati puliti',
            'Nessuna nuova macchia opaca sulla pietra, silicone e fughe intatti',
          ],
        },
      ],
      sources: [or257h, ceruniqErst],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'aushang',
      title: 'Modello: avviso agli inquilini',
      paragraphs: [
        'Titolo: Pulizia a fondo del vano scale',
        'Il [data] tra le [ora] e le [ora] il vano scale [e la lavanderia] verrà pulito a fondo. In questo periodo i pavimenti saranno bagnati e alcuni tratti chiusi per breve tempo.',
        'Vi preghiamo di riporre scarpe, biciclette, passeggini e piante nel vostro appartamento o in cantina entro la sera prima. Ciò che resta nel vano scale non può essere pulito.',
        'Per domande: [amministrazione, nome, telefono].',
      ],
      note:
        'Il Codice delle obbligazioni prevede che il locatore annunci tempestivamente al conduttore i lavori sulla cosa locata e, nell’eseguirli, abbia riguardo per i suoi interessi. Se una pulizia vi rientri va valutato caso per caso. Un avviso affisso è la via semplice.',
      sources: [or257h],
    },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia a fondo',
    intro:
      'Lei sceglie le superfici, noi le puliamo una volta o a intervalli più lunghi. Per vetri e facciate c’è la [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung), per le nuove costruzioni la [pulizia di fine cantiere](/leistungen/baureinigung).',
    items: [
      'Pavimenti: sporco incrostato e residui di vecchi prodotti di cura, metodo secondo il pavimento',
      'Fughe tra le piastrelle di pavimento e parete',
      'Servizi igienici: calcare e incrostazioni di urina su WC, orinatoi, lavabi, rubinetteria e piastrelle',
      'Cucine e angoli caffè: grasso su frontali, piani di lavoro e piastrelle murali',
      'Zoccolini, porte e telai delle porte',
      'Vani scale, entrate e lavanderie negli stabili con inquilini',
    ],
    notIncluded: [
      'Levigare, lucidare e verniciare pietra o parquet: è un lavoro per una ditta specializzata in pietra naturale o per un parquettista.',
      'Rifare le fughe e sostituire le fughe in silicone.',
      'La cura regolare successiva: a questo serve la [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
      'Pulizia finale alla riconsegna di un appartamento: un servizio a sé, la [pulizia di fine locazione](/leistungen/umzugsreinigung).',
    ],
  },
  steps: [
    {
      title: 'Preparare',
      text: 'Lei informa inquilini o personale, libera i pavimenti e fa spegnere il riscaldamento a pavimento. La lista di controllo qui sopra La guida.',
    },
    {
      title: 'Pulire',
      text: 'Locale per locale: applicare il prodotto adatto al pavimento e lasciarlo agire, sciogliere lo sporco a macchina e a mano lungo i bordi, aspirare l’acqua sporca, risciacquare con acqua pulita.',
    },
    {
      title: 'Consegna',
      text: 'Quando i pavimenti sono asciutti, Le consegniamo le superfici. Le verifichi con la lista di controllo prima di rimettere mobili e materiale.',
    },
  ],
  faq: [
    {
      question: 'Quanto costa una pulizia a fondo?',
      answer:
        'Il prezzo dipende soprattutto dalla superficie, dal pavimento e dallo stato: quanti strati di prodotti di cura e quanto calcare vanno rimossi. Si aggiungono la parte di lavoro a mano su fughe, angoli e servizi igienici, il momento dell’intervento, per esempio un fine settimana, e quanto sono liberi i locali. Esaminiamo questi punti sul posto e poi Le indichiamo un prezzo per il Suo immobile.',
    },
    {
      question: 'Per quanto tempo i locali non sono utilizzabili?',
      answer:
        'Durante la pulizia e finché il pavimento è asciutto. Quanto dura dipende da superficie, pavimento e aerazione. Nei vani scale si può lavorare a tratti, così che un passaggio resti libero. Per uffici e studi medici sono adatti i fine settimana e le ferie aziendali.',
    },
    {
      question: 'Quali prodotti sono adatti al marmo e alle altre pietre naturali?',
      answer:
        'Per marmo, pietra calcarea e travertino prodotti a pH neutro o leggermente alcalini, mai acidi. Già l’aceto o un anticalcare intaccano la superficie. Granito, gneiss e quarzite sopportano anche i prodotti acidi. Se nessuno sa quale pietra è stata posata, la si tratta come il marmo finché una prova in un punto nascosto non fa chiarezza.',
    },
    {
      question: 'E se il pavimento è danneggiato anziché sporco?',
      answer:
        'Allora una pulizia ne recupera solo una parte. Il marmo intaccato da acidi va levigato e lucidato, il parquet consumato richiede un parquettista, le fughe dilavate un piastrellista. Ciò che vediamo prima Glielo diciamo apertamente, perché Lei possa affidare il lavoro giusto. Per una prima valutazione aiuta la tabella «Sporco o danneggiato?».',
    },
    {
      question: 'Ogni quanto serve una pulizia a fondo?',
      answer:
        'Non c’è un ritmo fisso. Per i pavimenti in pietra naturale l’associazione svizzera della pietra naturale indica una frequenza mensile, semestrale o annuale, secondo lo sporco e le esigenze igieniche. Da Lei lo mostra lo stato: fughe scure, zone di passaggio opache, segni sugli zoccolini. Una buona pulizia regolare e uno zerbino all’entrata che trattiene la sabbia allungano l’intervallo.',
    },
    {
      question: 'Non basta una pulizia di manutenzione più accurata?',
      answer:
        'Di solito no, perché i prodotti sono diversi. La pulizia di manutenzione lavora in modo delicato e spesso con additivi di cura, e sotto si formano strati con il tempo. La pulizia a fondo rimuove questi strati con prodotti più forti e macchine. Dopo, la [pulizia di manutenzione](/leistungen/unterhaltsreinigung) mantiene lo stato.',
    },
    {
      question: 'Che cosa va tolto prima della pulizia a fondo?',
      answer:
        'Tutto ciò che sta sul pavimento e si può portare via: scarpe, biciclette, passeggini, piante, sedie, cestini. I mobili grandi possono restare, ma la superficie sotto non viene pulita. Tenga pronte anche le istruzioni di cura del pavimento, se ci sono.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Quando lo stato pulito dopo la pulizia a fondo va mantenuto con un ritmo fisso.' },
    { path: '/leistungen/umzugsreinigung', text: 'Quando un appartamento deve essere pronto per la riconsegna tra due locazioni, con garanzia di consegna.' },
    { path: '/leistungen/baureinigung', text: 'Quando dopo una nuova costruzione o una ristrutturazione vanno tolti polvere di cantiere e residui degli artigiani.' },
  ],
  cta: {
    title: 'Richiedere una pulizia a fondo',
    text: 'Ci indichi indirizzo, superfici con dimensione approssimativa, pavimenti e la Sua finestra temporale. Le fotografie di pavimenti e fughe può inviarcele in seguito per e-mail. Con queste informazioni pianifichiamo il sopralluogo, che come l’offerta è gratuito e senza impegno.',
  },
}
