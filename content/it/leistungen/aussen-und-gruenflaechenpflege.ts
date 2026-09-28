import type { ServicePageContent } from '../../types'

export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Manutenzione di giardini e aree verdi per stabili',
  lead: [
    'Prato, siepi e piazzali richiedono molto lavoro a maggio e quasi nessuno a gennaio. Curiamo le aree esterne del Suo stabile secondo un piano di manutenzione che segue questo ciclo annuale: siepi in inverno, erbacce nelle fughe prima che vadano a seme, foglie rimosse prima che rendano scivolosi i vialetti.',
    'Ci occupiamo della manutenzione del giardino per amministrazioni immobiliari, comunioni dei proprietari per piani e aziende, come servizio a sé o insieme al [servizio di custodia](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Taglio delle siepi', value: 'Da novembre a marzo, fuori dal periodo di nidificazione' },
    { label: 'Erbacce sui vialetti', value: 'Rimosse meccanicamente, perché lì i diserbanti sono vietati' },
    { label: 'Frequenza', value: 'Secondo il piano di manutenzione, più fitta a inizio estate' },
    { label: 'Intervento', value: 'Da solo o con il servizio di custodia' },
    { label: 'Non offriamo', value: 'Servizio invernale, sistemazione di giardini, nuovi impianti' },
  ],
  scope: {
    title: 'Che cosa comprende la manutenzione del giardino',
    intro: 'Svolgiamo questi lavori per le superfici indicate nel piano di manutenzione:',
    items: [
      'Tagliare il prato',
      'Rifilare i bordi del prato e tagliare i margini',
      'Tagliare siepi e arbusti, in inverno fuori dal periodo di nidificazione',
      'Diserbare e curare aiuole e bordure',
      'Rimuovere le foglie da prato, vialetti e piazzali',
      'Tenere puliti vialetti, piazzali e parcheggi',
      'Rimuovere meccanicamente le erbacce da fughe e superfici in ghiaia',
      'Raccogliere i rifiuti nelle aree esterne',
    ],
    notIncluded: [
      'Servizio invernale, come sgombero della neve e spargimento del sale',
      'Sistemazione di giardini e nuovi impianti, ad esempio una nuova siepe o una nuova aiuola',
      'Giri di controllo dell’edificio: rientrano nel [servizio di custodia](/leistungen/hauswartung)',
      'Pulizia di vetri e facciate: rientra nella [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung)',
    ],
  },
  sections: [
    {
      title: 'Quando nessuno si occupa più delle aree esterne',
      paragraphs: [
        'Il custode va in pensione, i proprietari per piani non tagliano più l’erba da soli, oppure un nuovo complesso è abitato e nessuno è responsabile di prato e siepi. A quel punto serve qualcuno che segua le aree esterne tutto l’anno.',
        'Curiamo complessi residenziali con parco giochi, stabili commerciali con parcheggio e aree artigianali con superfici in ghiaia. La base è un piano di manutenzione che indica per ogni superficie i lavori e il loro ritmo. Così si può comunicare agli inquilini quando si taglia l’erba e quando si potano le siepi.',
      ],
    },
    {
      title: 'Potare le siepi in inverno, d’estate solo liberare i passaggi',
      paragraphs: [
        'Ogni estate le autorità invitano i proprietari a tagliare le siepi. Per gli uccelli è il momento peggiore: merli, verdoni e beccafichi nidificano allora nelle siepi fitte. La Stazione ornitologica svizzera di Sempach raccomanda quindi di potare gli arbusti da novembre a marzo.',
        'In inverno la struttura dei rami è ben visibile e il taglio può seguire la forma naturale della pianta. Lungo vialetti e marciapiedi tagliamo allora abbastanza da lasciarli liberi per tutta l’estate. Se un passaggio si richiude comunque, basta un taglio leggero, dopo aver controllato che non ci siano nidi.',
      ],
    },
    {
      title: 'Combinare giardino e giro di controllo',
      paragraphs: [
        'Se la manutenzione delle aree esterne è abbinata al [servizio di custodia](/leistungen/hauswartung), lavori in giardino e giro di controllo si possono combinare. Chi taglia l’erba e spazza all’esterno nota anche la lastra smossa, la luce esterna guasta o il pozzetto intasato.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'pflegekalender',
      title: 'Calendario di manutenzione per prato, siepi e piazzali',
      intro: 'Le aree esterne non richiedono lo stesso lavoro ogni mese. La tabella mostra che cosa va fatto e quando, e serve da traccia per il piano di manutenzione del Suo stabile.',
      columns: ['Periodo', 'Prato', 'Siepi e arbusti', 'Vialetti, piazzali e aiuole'],
      rows: [
        [
          'Marzo e aprile',
          'Rastrellare rami e foglie dell’inverno, primo taglio appena l’erba cresce',
          'Concludere la potatura degli arbusti entro fine marzo',
          'Spazzare ghiaietto e sporco invernale, diserbare le aiuole e coprirle con pacciame o corteccia',
        ],
        [
          'Maggio e giugno',
          'Piena crescita: tagliare regolarmente, rifilare i bordi',
          'Nessuna potatura. Se un vialetto si richiude, tagliare leggermente dopo aver controllato che non ci siano nidi',
          'Spazzare e diserbare le fughe prima che le erbacce vadano a seme',
        ],
        [
          'Luglio e agosto',
          'Tagliare secondo crescita e meteo',
          'Periodo di nidificazione: lasciare in pace le siepi',
          'Tagliare le infiorescenze delle piante invasive prima che i semi maturino',
        ],
        [
          'Settembre e ottobre',
          'Rastrellare regolarmente le foglie, ultimo taglio prima dell’inverno',
          'Lasciare gli arbusti indigeni con bacche, sono cibo invernale per gli uccelli. Per il lauroceraso invece tagliare le bacche prima che i semi maturino',
          'Rimuovere le foglie da vialetti e piazzali, sotto gli arbusti possono restare',
        ],
        [
          'Da novembre a febbraio',
          'Riposo, rimuovere solo foglie e rami caduti',
          'Periodo principale di potatura: formare, diradare, tagliare generosamente lungo i vialetti',
          'Rimuovere foglie e rami da vialetti e piazzali',
        ],
      ],
      note: 'Lungo strade e marciapiedi valgono inoltre le norme del Cantone e del Comune. La Città di Lucerna richiede un’altezza libera di 2,50 m sopra i percorsi pedonali e ciclabili e di 4,50 m sopra la carreggiata. Per questo la Stazione ornitologica consiglia di tagliare generosamente lungo i vialetti già in inverno.',
      sources: [
        { label: 'Stazione ornitologica svizzera: potatura di siepi e arbusti nelle agglomerazioni', href: 'https://www.vogelwarte.ch/it/consigli/potatura-di-siepi-e-arbusti-nelle-agglomerazioni-quando-e-come/' },
        { label: 'UFAM: 10 misure preventive e alternative agli erbicidi, 2019 (in tedesco)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/9yHQQ2lBw2VU/merkblatt_10_vorbeugendemassnahmenundalternativenzumherbizideins.pdf' },
        { label: 'Città di Lucerna: taglio della vegetazione (in tedesco)', href: 'https://www.stadtluzern.ch/dienstleistungeninformation/54265' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'spritzmittelverbot',
      title: 'Erbacce e muschio: dove i prodotti sono vietati',
      intro: 'Sulle superfici pavimentate manca lo strato di humus che potrebbe trattenere le sostanze attive, e la pioggia le porta nei pozzetti e nei corsi d’acqua. Per questo l’ordinanza sulla riduzione dei rischi inerenti ai prodotti chimici (ORRPChim) vi vieta gli erbicidi e, da dicembre 2020, anche i prodotti contro alghe e muschio. Vale per le aziende come per i privati.',
      columns: ['Superficie', 'Che cosa vale', 'Che cosa funziona invece'],
      rows: [
        [
          'Vialetti, accessi, piazzali e parcheggi, compresi cordoli, marciapiedi, pozzetti e canalette',
          'Vietato, anche su ghiaia, marna, selciati e grigliati erbosi e su una striscia di 50 cm lungo queste superfici',
          'Spazzare regolarmente perché il materiale fine non si accumuli nelle fughe, raschiare le fughe, estirpare le erbacce prima che vadano a seme',
        ],
        [
          'Tetti e terrazze',
          'Vietato, anche i prodotti contro alghe e muschio',
          'Diserbare e spazzolare a mano',
        ],
        [
          'Scarpate e strisce verdi lungo le strade',
          'Vietato, singole piante problematiche solo se lo sfalcio non basta',
          'Falciare e asportare il materiale tagliato',
        ],
        [
          'Siepi, ruscelli e stagni, ciascuno con una striscia di 3 m',
          'Vietati tutti i prodotti fitosanitari, non solo gli erbicidi. Lungo le siepi fanno eccezione singole piante problematiche, se lo sfalcio non basta',
          'Diserbare, falciare, coprire il terreno con pacciame',
        ],
      ],
      note: 'La tolleranza riduce i costi, scrive l’UFAM: eliminare le erbacce su tutta la superficie non è necessario ovunque. Se fughe e fessure vengono riempite di nuovo e la pavimentazione risanata, lì le erbacce non possono più crescere.',
      sources: [
        { label: 'ORRPChim (RS 814.81), allegato 2.4 n. 4bis e allegato 2.5 n. 1.1', href: 'https://www.fedlex.admin.ch/eli/cc/2005/478/it' },
        { label: 'UFAM: divieti per erbicidi e biocidi su e lungo strade, sentieri, piazzali, terrazze e tetti, 2021 (in tedesco)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/Cp1cASoaj-UD/merkblatt_verwendungsverbotefuerunkrautvertilgungsmittelaufundan.pdf' },
        { label: 'UFAM: protezione dei vegetali nel Comune (in tedesco)', href: 'https://www.bafu.admin.ch/de/pflanzenschutz-in-der-gemeinde' },
        { label: 'UFAM: 10 misure preventive e alternative agli erbicidi, 2019 (in tedesco)', href: 'https://www.bafu.admin.ch/dam/de/sd-web/9yHQQ2lBw2VU/merkblatt_10_vorbeugendemassnahmenundalternativenzumherbizideins.pdf' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'invasive-pflanzen',
      title: 'Piante invasive in giardino: le regole dal 2024',
      intro: 'Dal 1° settembre 2024 l’ordinanza sull’emissione deliberata nell’ambiente (OEDA) disciplina in modo più severo le piante da giardino invasive. Le piante dell’allegato 2.2 non possono più essere cedute a terzi. Per l’allegato 2.1 vige un divieto di utilizzo, è consentita solo la lotta.',
      columns: ['Pianta', 'Che cosa vale', 'Cura e smaltimento'],
      rows: [
        [
          'Lauroceraso',
          'Allegato 2.2: le siepi esistenti possono restare ed essere tagliate, vendita e cessione sono vietate',
          'Tagliare le bacche prima che i semi maturino. Compostare il materiale tagliato senza frutti, frutti e radici nei rifiuti domestici',
        ],
        [
          'Buddleja e palma di Fortune («palma ticinese»)',
          'Allegato 2.2: stesse regole del lauroceraso',
          'Tagliare le infiorescenze prima che maturino semi o frutti e gettarle nei rifiuti domestici',
        ],
        [
          'Poligoni asiatici, ad esempio il poligono del Giappone',
          'Allegato 2.1: non curare, non trapiantare, solo combattere',
          'Tutte le parti della pianta nei rifiuti domestici, anche piccoli pezzi di radice ributtano. Smaltire il materiale di scavo con radici solo in modo appropriato',
        ],
        [
          'Verghe d’oro americane',
          'Allegato 2.1: solo combattere',
          'Falciare al più tardi alla fioritura, parti con fiori, semi o radici in un sacco nei rifiuti domestici',
        ],
        [
          'Ambrosia con foglie di artemisia',
          'Allegato 2.1. Lotta obbligatoria secondo il diritto agricolo. La guida pratica dei Cantoni della Svizzera centrale chiede inoltre di segnalare i ritrovamenti al servizio cantonale',
          'Estirpare con guanti, durante la fioritura anche con mascherina antipolvere, tutta la pianta nei rifiuti domestici',
        ],
      ],
      note: 'Il diritto ambientale non obbliga a eliminare le piante invasive dal proprio terreno. Diverso il caso dell’ambrosia: il diritto agricolo impone di combatterla. Per tutte vale l’obbligo di diligenza, i proprietari devono quindi impedire che si diffondano. Per questo semi e radici non vanno mai nel compost del giardino.',
      sources: [
        { label: 'Ordinanza sull’emissione deliberata nell’ambiente OEDA (RS 814.911), art. 15 e allegati 2.1 e 2.2', href: 'https://www.fedlex.admin.ch/eli/cc/2008/614/it' },
        { label: 'UFAM: modifica dell’ordinanza sull’emissione deliberata nell’ambiente', href: 'https://www.bafu.admin.ch/it/modifica-dellordinanza-sullemissione-deliberata-nellambiente' },
        { label: 'Cantoni della Svizzera centrale: guida pratica neofite, 2025 (in tedesco)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Praxishilfe_Neophyten.pdf' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'pflegeplan',
      title: 'Piano di manutenzione: che cosa deve contenere',
      intro: 'Più superfici e richieste sono descritte con precisione, più facile è confrontare le offerte. L’elenco aiuta a raccogliere il necessario prima del sopralluogo.',
      groups: [
        {
          title: 'Superfici',
          items: [
            'Prato in metri quadrati, meglio se segnato sulla planimetria',
            'Siepi: lunghezza in metri, altezza, uno o due lati',
            'Aiuole, bordure e fioriere',
            'Vialetti, piazzali, parcheggi, parco giochi e terrazze sul tetto con la loro pavimentazione',
          ],
        },
        {
          title: 'Ritmo e orari',
          items: [
            'Taglio dell’erba e diserbo: quante volte nel periodo di crescita',
            'Giorni e orari adatti agli inquilini o all’attività',
            'Eventi prima dei quali le aree esterne devono essere curate',
            'Taglio delle siepi in inverno, fuori dal periodo di nidificazione',
          ],
        },
        {
          title: 'Scarti verdi e competenze',
          items: [
            'Scarti verdi: contenitore, raccolta comunale o trasporto',
            'Punti noti con piante invasive',
            'Parti di giardino curate da inquilini o proprietari',
            'Allacciamento dell’acqua, locale attrezzi e accesso per le macchine',
          ],
        },
        {
          title: 'Dopo ogni intervento',
          items: [
            'Bordi del prato rifilati con precisione',
            'Vialetti e piazzali senza foglie, materiale tagliato ed erbacce nelle fughe',
            'Passaggi, zone di visibilità e marciapiedi liberi',
            'Aiuole diserbate, materiale tagliato nel punto concordato',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Piano di manutenzione',
      text: 'Ogni superficie è nel piano con i suoi lavori e il suo ritmo, dal bordo del prato al taglio delle siepi.',
    },
    {
      title: 'Stagione da marzo a ottobre',
      text: 'Nel periodo di crescita tagliamo l’erba, diserbiamo e spazziamo al ritmo concordato. Per un intervento in più, ad esempio prima di un evento, basta avvisarci.',
    },
    {
      title: 'Potatura in inverno',
      text: 'Tra novembre e marzo segue la potatura di siepi e arbusti, insieme alla rimozione di foglie e rami dove cadono.',
    },
  ],
  faq: [
    {
      question: 'Da che cosa dipendono i costi della manutenzione del giardino?',
      answer:
        'Soprattutto dalla superficie e da quanto lavoro manuale richiede. Un prato aperto si taglia in fretta a macchina, mentre fughe, superfici in ghiaia e scarpate richiedono tempo. Si aggiungono lunghezza e altezza delle siepi, il numero di interventi nel periodo di crescita e lo smaltimento degli scarti verdi.',
    },
    {
      question: 'Potete spruzzare un diserbante sul piazzale davanti allo stabile?',
      answer:
        'No, non è permesso a nessuno. Gli erbicidi sono vietati su vialetti, piazzali e parcheggi e su una striscia di 50 cm lungo di essi, come pure su tetti e terrazze. Per questo rimuoviamo le erbacce meccanicamente: spazzare, raschiare le fughe, diserbare.',
    },
    {
      question: 'La nostra siepe di lauroceraso deve sparire?',
      answer:
        'No. Le siepi esistenti possono restare ed essere tagliate, dal 1° settembre 2024 sono vietate la vendita e la cessione. L’UFAM consiglia di tagliare le bacche prima che i semi maturino. Altrimenti gli uccelli portano i semi più lontano, fino al bosco.',
    },
    {
      question: 'Il Comune chiede un taglio, ma è il periodo di nidificazione. Che fare?',
      answer:
        'I proprietari fondiari devono potare per tempo le piante lungo le strade, nel Cantone di Lucerna secondo il § 86 cpv. 7 della legge sulle strade. Il profilo di spazio libero, cioè lo spazio sopra marciapiede e strada, deve restare sgombro (§ 91). D’estate tagliamo solo ciò che sporge in questo spazio, e solo dopo aver controllato che non ci siano nidi. La potatura principale segue in inverno ed è abbastanza generosa lungo i vialetti da lasciare poco da ritagliare l’anno seguente.',
    },
    {
      question: 'Dove finiscono erba tagliata, foglie e rami?',
      answer:
        'Le soluzioni sono tre: il contenitore per scarti verdi dello stabile, la raccolta comunale degli scarti verdi oppure il trasporto. I rami possono anche restare in un mucchio in un angolo tranquillo, dove svernano i ricci. Le parti di piante invasive con fiori, semi o radici vanno nei rifiuti domestici, mai nel compost del giardino.',
    },
    {
      question: 'Possiamo affidare solo le aree esterne, senza servizio di custodia?',
      answer:
        'Sì, la manutenzione del giardino esiste come servizio a sé, anche accanto a un servizio di custodia già in atto. Il piano di manutenzione indica allora con precisione quali superfici curiamo noi e quali restano al custode.',
    },
    {
      question: 'Piantate anche nuove siepi o realizzate aiuole?',
      answer:
        'No, non offriamo sistemazioni di giardini né nuovi impianti, curiamo aree esterne esistenti. Un consiglio della Stazione ornitologica per le nuove siepi: al momento della piantagione lasciare abbastanza distanza dal vialetto, perché resti libero anche dopo anni.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Se oltre a prato e siepi vanno seguiti anche vano scale, impianti tecnici e giri di controllo.' },
    { path: '/leistungen/facility-services', text: 'Se le aree esterne devono entrare in un unico contratto con pulizia e custodia, seguito da una sola persona.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Se ingresso e vano scale devono restare puliti come il piazzale, allo stesso ritmo.' },
  ],
  cta: {
    title: 'Richiedere la manutenzione del giardino del Suo stabile',
    text: 'Ci indichi il luogo, il tipo di stabile e le superfici approssimative: metri quadrati di prato, metri di siepe, vialetti e piazzali. Una planimetria delle aree esterne è utile. Dopo un sopralluogo delle aree esterne riceve la nostra offerta per la manutenzione del giardino, gratuita e senza impegno. Il piano di manutenzione nasce insieme a Lei dopo l’affidamento dell’incarico.',
  },
}
