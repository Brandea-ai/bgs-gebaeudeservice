import type { ServicePageContent } from '../../types'

export const umzugsreinigung: ServicePageContent = {
  path: '/leistungen/umzugsreinigung',
  area: 'leistungen',
  eyebrow: 'Cambio di inquilino e riconsegna',
  h1: 'Pulizia di fine locazione e di trasloco con garanzia di consegna',
  lead: [
    'Alla riconsegna di un appartamento l’amministrazione lo controlla locale per locale, dal forno al compartimento in cantina, e annota ogni difetto nel verbale di riconsegna. Tra il verbale di riconsegna e l’arrivo dei nuovi inquilini resta di solito poco tempo per la pulizia, e la data di entrata è fissa.',
    'Eseguiamo la pulizia di fine locazione di appartamenti e superfici commerciali per amministrazioni immobiliari, proprietari e aziende, con garanzia di consegna. In questa pagina trova anche la lista di controllo da stampare per la riconsegna, le regole sull’avviso dei difetti e le scadenze di disdetta di Zugo e Obvaldo, con indicazioni per Lucerna, Argovia e Nidvaldo.',
  ],
  facts: [
    { label: 'Garanzia', value: 'Ripassiamo gratuitamente se la nostra pulizia viene contestata, non per danni o usura' },
    { label: 'Momento', value: 'Prima della riconsegna oppure, per le amministrazioni, dopo il verbale' },
    { label: 'Richiesta', value: 'Appena ricevuta la disdetta' },
    { label: 'Non per', value: 'Inquiline e inquilini di singoli appartamenti' },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia finale',
    intro: 'Lavori tipici della pulizia finale di un appartamento:',
    items: [
      'Cucina: forno con le teglie, piano cottura, cappa aspirante, frigorifero e armadi, all’interno e all’esterno',
      'Bagno e WC: rubinetteria, piastrelle, fughe e specchi, liberati dal calcare',
      'Finestre all’interno e all’esterno, con telai, battute e davanzali',
      'Lamelle e persiane, se concordato',
      'Armadi a muro, porte, telai delle porte, interruttori e prese',
      'Pavimenti e battiscopa in tutti i locali',
      'Balcone o terrazzino, compartimento in cantina e in solaio',
    ],
    notIncluded: [
      'Incarichi di inquiline e inquilini di singoli appartamenti. Ville e residenze le seguiamo nel nostro [settore Premium](/premium).',
      'Trasporto del trasloco, sgombero e smaltimento di mobili.',
      'Riparazioni, lavori di pittura ed eliminazione di danni, anche se figurano nel verbale di riconsegna.',
      'Pulizia a fondo senza cambio di occupante, per esempio di pavimenti o piastrelle: vedi [Pulizie a fondo e speciali](/leistungen/sonderreinigungen).',
    ],
  },
  sections: [
    {
      title: 'La garanzia di consegna e i suoi limiti',
      paragraphs: [
        'Se in occasione della riconsegna l’amministrazione contesta qualcosa nella nostra pulizia, ripuliamo gratuitamente. I dettagli sono indicati nell’offerta.',
        'La garanzia si riferisce alla nostra pulizia. Danni, usura o riparazioni che vengono annotati alla riconsegna non riguardano la pulizia e quindi non ne fanno parte.',
        'Contestazioni tipiche sulla pulizia sono una patina di grasso nel forno o il calcare sulla rubinetteria. Se invece è danneggiata la superficie stessa, si tratta di un danno: per esempio una cromatura intaccata, una bruciatura sul parquet o un graffio sul piano cottura. Nessuna nuova pulizia lo elimina, servono gli artigiani.',
      ],
    },
    {
      title: 'Cambio di inquilino, vendita, restituzione di uffici',
      paragraphs: [
        'Le amministrazioni preparano gli appartamenti tra due locazioni. Se gli inquilini uscenti non hanno pulito, o lo hanno fatto male, prima viene il verbale di riconsegna e solo dopo la nostra pulizia. Così può provare le Sue pretese nei confronti degli inquilini.',
        'Proprietari e comproprietari per piani hanno bisogno della pulizia finale prima della consegna all’acquirente o prima della prima locazione.',
        'Le aziende restituiscono uffici e superfici commerciali alla fine del contratto. Con una locazione a tempo determinato questa data è nota fin dall’inizio. Se una locazione a tempo indeterminato viene disdetta in via ordinaria, il termine di preavviso per i locali commerciali è di almeno sei mesi. In entrambi i casi resta il tempo per pianificare la pulizia dopo lo sgombero e un eventuale smontaggio degli allestimenti.',
      ],
    },
    {
      title: 'Che cosa deve essere pronto il giorno della pulizia',
      paragraphs: [
        'Solo un appartamento vuoto si può pulire a fondo. Quando un’azienda restituisce dei locali o un proprietario consegna un immobile all’acquirente, conviene pulire poco prima della consegna. Il locatore o l’acquirente trova così esattamente lo stato in cui abbiamo lasciato i locali.',
      ],
      items: [
        'Mobili, tende e oggetti personali sono sgomberati, anche da cantina e solaio',
        'I lavori di pittura e di riparazione sono conclusi',
        'Elettricità e acqua sono allacciate, la luce funziona in tutti i locali',
        'Sono disponibili le chiavi di appartamento, cantina, solaio e bucalettere',
      ],
    },
  ],
  tools: [
    {
      kind: 'text',
      id: 'abnahme-maengelruege',
      title: 'Riconsegna e avviso dei difetti: prima annotare, poi pulire',
      paragraphs: [
        'Il Codice delle obbligazioni prevede che, al momento della restituzione, il locatore verifichi lo stato dell’appartamento e dia subito notizia al conduttore dei difetti di cui questi deve rispondere (art. 267a CO). Diversamente, il conduttore è liberato dalla sua responsabilità. Fanno eccezione i difetti irriconoscibili mediante l’ordinaria verifica. Vanno segnalati subito dopo la scoperta.',
        'L’appartamento va restituito nello stato risultante da un uso conforme al contratto (art. 267 CO). L’usura normale non è a carico del conduttore. Per distinguere tra danno e usura, l’associazione dei proprietari HEV Schweiz e l’associazione degli inquilini hanno elaborato insieme una tabella paritetica della durata di vita.',
        'Chi fa pulire prima del verbale difficilmente potrà dimostrare in seguito lo stato al momento della restituzione. In pratica:',
      ],
      items: [
        'Annotare lo stato nel verbale prima che una pulizia lo modifichi.',
        'Descrivere ogni difetto singolarmente e con precisione. «Cucina sporca» non basta, «forno e cappa con patina di grasso» sì.',
        'Elencare separatamente sporco, usura normale e danni.',
        'Dire chiaramente che il conduttore deve rispondere dei difetti elencati.',
        'Consegnare subito il verbale al conduttore. Se non partecipa alla restituzione, segnalare i difetti subito per iscritto, per raccomandata a fini di prova.',
      ],
      note: 'Questa panoramica non sostituisce una consulenza giuridica. Chiarisca i singoli casi con la Sua associazione o con l’autorità di conciliazione in materia di locazione.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 267 e 267a (Fedlex, stato 1° gennaio 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_267_a' },
        { label: 'Tribunali zurighesi: avviso dei difetti alla restituzione (in tedesco)', href: 'https://www.gerichte-zh.ch/de/themen/miete/kuendigung-rueckgabe/rueckgabe-und-ausweisung/maengelruege' },
        { label: 'HEV Schweiz: tabella della durata di vita (in tedesco)', href: 'https://www.hev-schweiz.ch/vermieten/verwalten/lebensdauertabelle' },
        { label: 'Associazione inquilini: tabella della durata di vita (in tedesco)', href: 'https://www.mieterverband.ch/mietrecht/unterlagen-und-tools/lebensdauertabelle/' },
      ],
    },
    {
      kind: 'checklist',
      id: 'abnahme-checkliste',
      title: 'Lista di controllo per la riconsegna, locale per locale',
      intro: 'Da stampare per la restituzione di un appartamento. La lista mostra dove si guarda con attenzione alla riconsegna e serve da traccia per il Suo verbale. È una lista di controllo per la riconsegna, non un elenco delle nostre prestazioni.',
      printable: true,
      updated: '2026-09-28',
      groups: [
        {
          title: 'Cucina',
          items: [
            'Forno con teglie e griglie',
            'Piano cottura e cappa con filtro antigrasso',
            'Frigorifero con guarnizioni e cassetto delle verdure',
            'Lavastoviglie con filtro',
            'Armadi all’interno, anche i ripiani alti',
            'Lavello e rubinetteria senza calcare',
          ],
        },
        {
          title: 'Bagno e WC',
          items: [
            'Rubinetteria e soffione senza bordi di calcare',
            'Box doccia, vasca e piastrelle',
            'Fughe e silicone',
            'Specchio e armadietto a specchio',
            'Scarichi e griglie di aerazione',
            'Vaso WC e cassetta di risciacquo',
          ],
        },
        {
          title: 'Finestre e lamelle',
          items: [
            'Vetri all’interno e all’esterno',
            'Telai, battute e guarnizioni',
            'Davanzali interni ed esterni',
            'Lamelle, tapparelle o persiane',
          ],
        },
        {
          title: 'Tutti i locali',
          items: [
            'Pavimenti e battiscopa',
            'Armadi a muro all’interno',
            'Porte, telai e maniglie',
            'Interruttori e prese',
            'Radiatori',
          ],
        },
        {
          title: 'Locali accessori',
          items: [
            'Balcone o terrazzino con ringhiera',
            'Compartimento in cantina e in solaio',
            'Bucalettere',
          ],
        },
        {
          title: 'Verbale',
          items: [
            'Data e ora della restituzione, persone presenti',
            'Chiavi contate: appartamento, cantina, solaio, bucalettere',
            'Difetti descritti uno per uno, danni e usura separati',
            'Verbale consegnato al conduttore o inviato subito',
          ],
        },
      ],
      note: 'Foto datate completano il verbale, soprattutto se il conduttore è assente alla restituzione.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 267a (Fedlex, stato 1° gennaio 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_267_a' },
      ],
    },
    {
      kind: 'table',
      id: 'kuendigungstermine',
      title: 'Scadenze di disdetta per Cantone',
      intro: 'Se una locazione a tempo indeterminato viene disdetta in via ordinaria, il termine di preavviso è di almeno tre mesi per gli appartamenti e di almeno sei mesi per i locali commerciali, ogni volta per la scadenza prevista dal contratto. Se il contratto non ne prevede, vale la scadenza determinata dall’uso locale e, in mancanza di tale uso, la fine di un trimestre di locazione (art. 266a, 266c e 266d CO). Una locazione a tempo determinato cessa senza disdetta alla scadenza pattuita (art. 266 CO).',
      printable: true,
      updated: '2026-09-29',
      columns: ['Cantone', 'Scadenze d’uso locale per gli appartamenti', 'Per la pianificazione'],
      rows: [
        ['Lucerna', 'Non indicate sul sito del Cantone. Fornisce consulenza l’autorità di conciliazione in materia di locazione del Cantone di Lucerna.', 'Secondo il Cantone si disdice di regola per la fine di un mese, e scadenze e termini sono per lo più indicati nel contratto.'],
        ['Zugo', 'Fine marzo, fine giugno, fine settembre', 'Riconsegne e pulizie finali si concentrano su queste tre date.'],
        ['Obvaldo', 'Fine marzo, fine giugno, fine settembre', 'Per una riconsegna a fine giugno la disdetta deve pervenire al più tardi entro fine marzo. Da quel momento la data di riconsegna è fissata.'],
        ['Argovia e Nidvaldo', 'Non indicate sui siti dei Cantoni. Forniscono consulenza le autorità di conciliazione in materia di locazione, in Argovia quella del distretto.', 'Indicare nella richiesta la scadenza riportata nella disdetta.'],
      ],
      note: 'Il conduttore può anche restituire l’appartamento prima della scadenza. È liberato dai suoi obblighi solo se propone un nuovo conduttore solvibile che il locatore non possa ragionevolmente rifiutare e che sia disposto a riprendere il contratto alle medesime condizioni (art. 264 CO). La riconsegna può quindi cadere in qualsiasi data. Richieda la pulizia appena è fissata una data di riconsegna.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 264, 266, 266a, 266c e 266d (Fedlex, stato 1° gennaio 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_266_c' },
        { label: 'Codice di procedura civile, art. 201 cpv. 2 (Fedlex, stato 1° luglio 2026)', href: 'https://www.fedlex.admin.ch/eli/cc/2010/262/it#art_201' },
        { label: 'Cantone di Lucerna: affittare un appartamento (in tedesco)', href: 'https://gruezi.lu.ch/wohnen/wohnung_mieten' },
        { label: 'Cantone di Lucerna: autorità di conciliazione in materia di locazione (in tedesco)', href: 'https://gerichte.lu.ch/organisation/schlichtungsbehoerden/miete_pacht' },
        { label: 'Cantone di Zugo: domande frequenti sul diritto di locazione (in tedesco)', href: 'https://zg.ch/de/recht-justiz/zivilverfahren/schlichtung/faq-zum-mietrecht' },
        { label: 'Cantone di Obvaldo: autorità di conciliazione (in tedesco)', href: 'https://www.ow.ch/fachbereiche/2131' },
        { label: 'Cantone di Argovia: autorità di conciliazione in materia di locazione (in tedesco)', href: 'https://www.ag.ch/de/ueber-uns/gerichte-kanton-aargau/organisation/schlichtungsbehoerden/schlichtungsbehoerden-fuer-miete-und-pacht' },
        { label: 'Cantone di Nidvaldo: autorità di conciliazione (in tedesco)', href: 'https://www.nw.ch/schlichtungsbehoerde/326' },
      ],
    },
  ],
  steps: [
    {
      title: 'Fissare la data',
      text: 'Per le amministrazioni la pulizia avviene tra il verbale di riconsegna e l’arrivo dei nuovi inquilini, per proprietari e aziende tra il trasloco e la consegna. Concordiamo con Lei la consegna delle chiavi.',
    },
    {
      title: 'Pulizia finale',
      text: 'Puliamo i locali vuoti secondo l’entità concordata, dalla cucina a cantina e solaio.',
    },
    {
      title: 'Riconsegna',
      text: 'L’amministrazione controlla i locali. Le contestazioni sulla nostra pulizia le risolviamo nell’ambito della garanzia di consegna.',
    },
  ],
  faq: [
    {
      question: 'Da che cosa dipende il prezzo di una pulizia di fine locazione?',
      answer:
        'Dall’impegno richiesto proprio da questo appartamento: numero di locali e superficie, stato di cucina e bagno (grasso, calcare, nicotina), numero e tipo di finestre, presenza di lamelle, tapparelle o persiane e locali accessori da pulire come cantina, solaio o balcone. Per questo non indichiamo un forfait per locale.',
    },
    {
      question: 'Pulite prima o dopo la riconsegna?',
      answer:
        'Entrambe le cose sono possibili. Quando un’azienda restituisce dei locali o un proprietario consegna un immobile all’acquirente, puliamo prima. Se gli inquilini hanno restituito l’appartamento pulito male, puliamo per l’amministrazione non appena i difetti figurano nel verbale.',
    },
    {
      question: 'A che cosa deve fare attenzione l’amministrazione alla riconsegna?',
      answer:
        'I difetti di cui il conduttore deve rispondere vanno verificati alla restituzione e segnalati subito, altrimenti il conduttore è liberato dalla sua responsabilità (art. 267a CO). Quindi prima il verbale, poi la pulizia. Che cosa conta nel verbale è spiegato sotto [Riconsegna e avviso dei difetti](/leistungen/umzugsreinigung#abnahme-maengelruege).',
    },
    {
      question: 'Quale stato può esigere l’amministrazione alla restituzione?',
      answer:
        'L’appartamento va restituito nello stato risultante da un uso conforme al contratto (art. 267 CO). Quanto a fondo si debba pulire lo stabilisce di solito il contratto di locazione. L’usura normale non è a carico del conduttore. Questa risposta non è una consulenza giuridica.',
    },
    {
      question: 'Quando conviene richiedere la pulizia di fine locazione?',
      answer:
        'Appena ricevuta la disdetta. In caso di disdetta ordinaria restano fino alla fine della locazione almeno tre mesi per un appartamento e almeno sei per un locale commerciale. Se il conduttore restituisce prima, per esempio con un nuovo conduttore, la riconsegna può avvenire anche prima. A Zugo e Obvaldo valgono, salvo accordi diversi, fine marzo, giugno e settembre; a Lucerna, secondo il Cantone, le scadenze sono per lo più indicate nel contratto.',
    },
    {
      question: 'La pulizia può iniziare se nell’appartamento ci sono ancora mobili?',
      answer:
        'Meglio di no. Alla riconsegna l’amministrazione guarda con attenzione dietro i mobili, negli armadi e sotto gli elementi incassati, e questi punti si puliscono a fondo solo in locali vuoti. Iniziamo quindi solo quando tutti i locali sono sgomberati, anche cantina e solaio.',
    },
    {
      question: 'Pulite anche uffici e superfici commerciali prima della restituzione?',
      answer:
        'Sì. Per le aziende puliamo uffici e superfici commerciali prima della consegna al locatore. Se vanno smontati degli allestimenti, la pulizia segue gli artigiani. Dopo trasformazioni importanti è indicata la [pulizia di cantiere e di fine cantiere](/leistungen/baureinigung).',
    },
    {
      question: 'Eseguite la pulizia di fine locazione anche per inquiline e inquilini?',
      answer:
        'No, non accettiamo incarichi di inquiline e inquilini di singoli appartamenti. I nostri committenti sono amministrazioni, proprietari e aziende. Per ville e residenze la pulizia finale è disponibile anche per privati nel nostro [settore Premium](/premium).',
    },
  ],
  related: [
    { path: '/leistungen/baureinigung', text: 'Se l’appartamento viene rinnovato prima della nuova locazione: dopo pittori e artigiani segue la pulizia di fine cantiere.' },
    { path: '/leistungen/sonderreinigungen', text: 'Se pavimenti, piastrelle o fughe hanno bisogno di una pulizia a fondo dopo una lunga locazione, anche senza cambio di inquilino.' },
    { path: '/leistungen/hauswartung', text: 'Se la custodia deve partecipare alle riconsegne degli appartamenti e occuparsi dello stabile tra un cambio e l’altro.' },
  ],
  cta: {
    title: 'Un’offerta per la Sua data di riconsegna',
    text: 'Ci indichi indirizzo, numero di locali o superficie, la data di riconsegna o di entrata e se lamelle o persiane sono comprese. Per più cambi di inquilino, la cosa più semplice è inviarci un elenco con indirizzi e date. L’offerta è gratuita e senza impegno.',
  },
}
