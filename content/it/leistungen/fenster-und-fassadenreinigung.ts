import type { ServicePageContent } from '../../types'

// Stesse chiavi e fonti di content/de (fonti lette il 28.09.2026). Le fonti senza versione italiana sono collegate in tedesco.
export const fensterUndFassade: ServicePageContent = {
  path: '/leistungen/fenster-und-fassadenreinigung',
  area: 'leistungen',
  eyebrow: 'Vetri e facciate',
  h1: 'Pulizia di vetri e facciate per aziende e stabili',
  lead: [
    'Aloni in controluce, telai grigi e una facciata con patina verde li vede chiunque entri nell’edificio. Puliamo finestre, facciate in vetro, vetrine e facciate per amministrazioni immobiliari, proprietari e aziende, una tantum o con una cadenza fissa.',
    'Qui trova che cosa chiarire prima dell’incarico: quale accesso si addice a quale altezza, dove può defluire l’acqua della pulizia di una facciata e come informare gli inquilini. La checklist e la tabella delle acque di scarico si stampano direttamente, l’avviso agli inquilini va riportato sulla Sua carta intestata.',
  ],
  facts: [
    { label: 'Superfici', value: 'Finestre, facciate in vetro, vetrine, telai e facciate' },
    { label: 'Facciata', value: 'Alta pressione se il materiale la sopporta' },
    { label: 'Meteo', value: 'Nessun lavoro all’esterno con gelo, tempesta o pioggia forte' },
    { label: 'Non compreso', value: 'Spazi interni, tinteggiatura e riparazioni della facciata' },
    { label: 'Da stampare', value: 'Checklist e tabella delle acque di scarico' },
  ],
  scope: {
    title: 'Le superfici che puliamo',
    intro: 'È Lei a scegliere quali superfici pulire. Le più frequenti sono:',
    items: [
      'Finestre all’interno e all’esterno, con telai e battute',
      'Finestre del vano scale e dei locali comuni negli stabili abitativi',
      'Facciate in vetro, porte a vetri e pareti in vetro',
      'Vetrine e ingressi vetrati',
      'Davanzali e lamelle su richiesta',
      'Facciate, ad alta pressione se il materiale la sopporta',
    ],
    notIncluded: [
      'Pulizia degli spazi interni: vedi [pulizia di manutenzione](/leistungen/unterhaltsreinigung) o [pulizia di uffici e studi](/leistungen/bueroreinigung).',
      'Vetri con malta, schizzi di pittura o etichette dopo lavori edili: vedi [pulizia di cantiere](/leistungen/baureinigung).',
      'Rinnovo, tinteggiatura e riparazioni della facciata.',
    ],
  },
  sections: [
    {
      title: 'Il momento giusto dell’anno',
      paragraphs: [
        'Lo sporco sul vetro si nota soprattutto in controluce: agli ingressi, sulle vetrine e sulle facciate in vetro che clienti e inquilini vedono ogni giorno. Oltre alla cadenza fissa, una nuova locazione, una vendita o un evento nello stabile sono motivi tipici per fissare una data.',
      ],
      items: [
        'Primavera: dopo la fioritura principale degli alberi, altrimenti il polline si posa di nuovo sul vetro in pochi giorni',
        'Autunno: dopo la caduta delle foglie e prima della stagione buia, quando il sole basso mostra ogni alone',
        'Gelo, tempesta e pioggia forte: i lavori all’esterno slittano, preveda quindi una data di riserva',
        'Prima di una locazione o di una vendita: pulire solo quando nello stabile non sono più previsti lavori che fanno polvere',
      ],
    },
    {
      title: 'Acqua pura, tergivetro, alta pressione: che cosa va dove',
      paragraphs: [
        'Il vetro raggiungibile si pulisce con acqua, un detergente delicato e il tergivetro, poi si ripassano telai e battute. Per i vetri in alto esistono aste telescopiche alimentate con acqua pura: è demineralizzata e perciò asciuga senza macchie di calcare.',
        'Per le facciate decide il materiale. Superfici lisce e resistenti sopportano spesso l’alta pressione, intonaco delicato, legno o vecchia pietra naturale richiedono meno pressione o un altro metodo. L’eventuale uso di detergenti determina anche che cosa fare con le acque di scarico.',
      ],
    },
  ],
  tools: [
    {
      kind: 'checklist',
      id: 'checkliste-fenster',
      title: 'Checklist dalla richiesta alla verifica finale',
      intro: 'Con questi dati si può calcolare con precisione un’offerta per vetri e facciata. L’ultimo gruppo La aiuta a controllare il risultato.',
      groups: [
        {
          title: 'Da preparare per la richiesta',
          items: [
            'Indirizzo, tipo di edificio e numero di piani',
            'Numero approssimativo di finestre o superficie vetrata, con foto della facciata e dell’ingresso',
            'Quali finestre si aprono e come: verso l’interno, solo a ribalta o vetrate fisse',
            'Materiale di telai e facciata, se noto: legno, metallo, plastica, intonaco, pietra naturale',
            'Superfici desiderate: esterno, interno o entrambi, con telai, davanzali, lamelle',
            'Data o cadenza desiderata e orari in cui nello stabile non si può disturbare',
          ],
        },
        {
          title: 'In più per la facciata',
          items: [
            'Superficie totale delle facciate da pulire, in m²',
            'Che cosa disturba: velo grigio, patina verde, macchie',
            'Terreno sotto la facciata: prato, ghiaia, aiuole o superficie impermeabilizzata',
            'Dove scaricano caditoie e pozzetti attorno all’edificio, informa il Comune',
            'Se lo stabile si trova in una zona di protezione delle acque sotterranee o vicino a ruscello, fiume o lago',
          ],
        },
        {
          title: 'Prima dell’intervento',
          items: [
            'Informare inquilini o personale, con data, fascia oraria e consegna delle chiavi',
            'Far liberare i davanzali interni e alzare le lamelle',
            'Tenere libero lo spazio per un veicolo, una piattaforma di lavoro elevabile o un ponteggio',
            'Su marciapiede o strada: ottenere l’autorizzazione del Comune per il suolo pubblico',
            'Garantire l’accesso a tetto, cortile o locale tecnico, se serve',
          ],
        },
        {
          title: 'Verifica dopo la pulizia',
          items: [
            'In controluce non si vedono aloni',
            'Il vetro è pulito fino agli angoli, anche sul bordo verso il telaio',
            'Telai, battute e davanzali sono puliti, per quanto concordato',
            'All’interno non restano gocce e macchie d’acqua su pavimenti e davanzali',
            'Piazzale e aiuole sotto la facciata sono privi di residui',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'aushang-mieterschaft',
      printable: true,
      printHeader: false,
      updated: '2026-09-29',
      title: 'Avviso agli inquilini: modello da adattare',
      intro: 'Le finestre che si puliscono solo dall’interno richiedono l’accesso ad appartamenti o uffici. Riporti il testo sulla Sua carta intestata, sostituisca i dati tra parentesi quadre e affigga l’avviso all’ingresso.',
      columns: ['Parte', 'Testo dell’avviso'],
      rows: [
        ['Titolo', 'Pulizia delle finestre nel Suo appartamento il [data]'],
        ['Data', 'Il [data] tra le [ora] e le [ora] vengono pulite le finestre dello stabile [indirizzo]. Alcune finestre si possono pulire solo dall’interno.'],
        ['Accesso', 'La preghiamo di essere a casa o di depositare la chiave entro il [data] presso [amministrazione o custode].'],
        ['Preparazione', 'La preghiamo di togliere piante e oggetti dai davanzali e di alzare le lamelle.'],
        ['Impedimento', 'Se la data non Le va bene, contatti [nome, telefono] entro il [data].'],
        ['Mittente', '[Amministrazione], [luogo e data dell’avviso]'],
      ],
    },
    {
      kind: 'table',
      id: 'zugang-hoehe',
      title: 'Finestre alte e facciate: quale accesso è adatto',
      intro: 'La Suva preferisce le misure di protezione tecniche ai dispositivi di protezione individuale. Le finestre che si aprono verso l’interno permettono di pulire in sicurezza anche il lato esterno dall’interno. Per tutte le altre superfici la tabella riassume la pubblicazione della Suva, completata dall’autorizzazione per il suolo pubblico.',
      columns: ['Accesso', 'Adatto per', 'Presupposti e limiti'],
      rows: [
        ['Asta telescopica', 'Superfici lisce, dal suolo o da un altro punto sicuro, fino a 10 m di altezza', 'Non serve una scala, si possono applicare diversi attrezzi.'],
        ['Scala', 'Lavori leggeri che non si estendono su superfici grandi, e solo se non si può impiegare un mezzo più sicuro', 'Con un’altezza di caduta superiore a 2 m in generale non è il mezzo giusto. Se la scala deve comunque essere usata, serve una protezione contro le cadute dall’alto. Secondo le indicazioni del fabbricante, le scale movibili con piattaforma si possono usare anche con una superficie di appoggio oltre i 2 m.'],
        ['Ponteggio mobile su ruote', 'Pulizia ad altezze basse o medie', 'Altezza di lavoro al massimo 8 m all’esterno e 12 m all’interno. Il suolo deve essere piano, stabile e libero, la zona di pericolo messa in sicurezza.'],
        ['Piattaforma di lavoro elevabile', 'Edifici piccoli o lavori di poca entità su edifici grandi', 'Lo spazio per la piattaforma deve essere disponibile e restare libero. Su marciapiede o strada serve di regola un’autorizzazione del Comune.'],
        ['Dispositivo di sicurezza nel telaio', 'Lavori dal davanzale esterno, applicato dall’interno', 'Uno specialista verifica prima se i telai sono adatti. Serve l’accesso ai locali.'],
        ['Installazione fissa', 'Vetrate fisse e facciate di grandi edifici, senza aprire le finestre né disturbare l’attività', 'Secondo la Suva la soluzione migliore e, a lungo termine, la più economica. Installarla in seguito è oneroso, spesso impossibile.'],
        ['Lavori in sospensione su funi', 'Casi eccezionali, quando altre installazioni non sono possibili', 'Due funi fissate separatamente, sorveglianza da parte di una seconda persona, salvataggio garantito.'],
      ],
      note: 'Se pianifica una nuova costruzione, una trasformazione o un risanamento, pensi fin dall’inizio alla pulizia di vetri e facciata. E chieda per ogni offerta con quale accesso si lavora.',
      sources: [
        { label: 'Suva 44033: pulizia e manutenzione di finestre, facciate e tetti (dicembre 2025)', href: 'https://www.suva.ch/44033.i' },
        { label: 'Città di Lucerna: domanda di utilizzo del suolo pubblico (in tedesco)', href: 'https://www.stadtluzern.ch/politikverwaltung/stadtverwaltung/formularabisz/13472/detail' },
        { label: 'Città di Zugo: utilizzo del suolo pubblico durante lavori edili (in tedesco)', href: 'https://stadtzug.ch/de/bauen/bauvorhaben/benuetzung-oeffentlicher-grund' },
      ],
    },
    {
      kind: 'table',
      id: 'abwasser-fassade',
      title: 'Pulizia di facciate: dove possono finire le acque di scarico',
      intro: 'È vietato introdurre direttamente o indirettamente o lasciare infiltrarsi nelle acque sostanze che possono inquinarle (art. 6 LPAc). Questo vale anche per le caditoie che portano alle acque meteoriche. Finché non esiste un aiuto all’esecuzione intercantonale, i servizi di Lucerna, Zugo, Nidvaldo e Obvaldo si orientano al promemoria dei Cantoni di Basilea Città e Basilea Campagna (lettera del 26.03.2025).',
      columns: ['Situazione', 'Che cosa succede alle acque di scarico', 'Da chiarire prima'],
      rows: [
        ['Senza detergenti, terreno sciolto, meno di 300 m²', 'Alta pressione con acqua fredda, senza installazioni particolari', 'Superficie totale delle facciate da pulire'],
        ['Senza detergenti, terreno sciolto, più di 300 m²', 'Raccogliere con canalette, coprire le caditoie con rete o tessuto non tessuto, scaricare nella canalizzazione delle acque luride fino all’impianto di depurazione', 'Presso il Comune: caditoie e pozzetti sono allacciati alla canalizzazione delle acque luride?'],
        ['Senza detergenti, terreno impermeabilizzato con caditoie', 'Coprire caditoie e canalette, scaricare nella canalizzazione delle acque luride fino all’impianto di depurazione', 'Come sopra. Se le caditoie portano alle acque meteoriche, le acque di scarico non devono finirci.'],
        ['Con detergenti o prodotti contro le alghe', 'Né infiltrazione né scarico in acque o canalizzazione: raccogliere in canalette e contenitori, trattare in un impianto di separazione', 'Quali prodotti si usano. Contro le alghe, se possibile principi attivi degradabili. Informare l’autorità almeno tre giorni lavorativi prima.'],
        ['Zona di protezione delle acque sotterranee S o vicino a ruscello, fiume o lago', 'Nessun detergente. Raccogliere tutta l’acqua, coprire il terreno sciolto, scaricare tutto nella canalizzazione delle acque luride', 'Se lo stabile si trova in una zona di protezione. Informare l’autorità almeno tre giorni lavorativi prima.'],
      ],
      note: 'L’obbligo di diligenza della legge vale per ognuno (art. 3 LPAc). Chieda quindi per ogni offerta di pulizia di facciate: come vengono raccolte le acque di scarico, e dove vengono convogliate? La lettera dei servizi della Svizzera centrale non vale per l’Argovia, dove informa il servizio cantonale.',
      sources: [
        { label: 'Legge sulla protezione delle acque, art. 3 e 6', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/it#art_6' },
        { label: 'Promemoria pulizia di facciate dei Cantoni di Basilea Città e Basilea Campagna (in tedesco)', href: 'https://www.bs.ch/publikationen/merkblatt-fassadenreinigung' },
        { label: 'Umwelt Zentralschweiz: protezione dell’ambiente e delle acque nella pulizia di facciate, 26.03.2025 (in tedesco)', href: 'https://www.azimv.ch/wp-content/uploads/2026/02/Merkblatt_Fassadenreinigung_1_Bestaetigung_Zentralschweiz.pdf' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Data e avviso',
      text: 'Fissata la data, informa inquilini o personale, nel modo più semplice con l’avviso di questa pagina. Se serve il suolo pubblico, l’autorizzazione del Comune deve esserci prima.',
    },
    {
      title: 'Pulizia sul posto',
      text: 'Vetri, telai e le superfici di facciata concordate vengono puliti nel giorno previsto. Con gelo, tempesta o pioggia forte la parte esterna passa alla data di riserva.',
    },
    {
      title: 'Controllo e data successiva',
      text: 'Controlla il risultato in controluce, idealmente con la checklist qui sopra. Con una cadenza fissa pianifica subito anche la data successiva.',
    },
  ],
  faq: [
    {
      question: 'Quanto costa far pulire vetri e facciate?',
      answer:
        'Non indichiamo un prezzo per finestra, perché l’impegno varia molto. Dipende da numero e dimensioni dei vetri, da inglesine e telai e dal fatto che le finestre si aprano verso l’interno o siano raggiungibili solo dall’esterno. Si aggiungono l’accesso (asta telescopica, piattaforma di lavoro elevabile o ponteggio), un’eventuale autorizzazione per il suolo pubblico, il grado di sporco e se si pulisce all’interno, all’esterno o entrambi. Per le facciate contano superficie, materiale, metodo e l’impegno per le acque di scarico.',
    },
    {
      question: 'Con quale cadenza pulire finestre e porte a vetri?',
      answer:
        'Dipende da posizione e utilizzo. Ingressi, porte a vetri e vetrine li vedono e li toccano tutti, perciò richiedono intervalli più brevi delle finestre del vano scale o del magazzino. Lungo una strada molto trafficata, sotto gli alberi o accanto a un cantiere il vetro si sporca più in fretta che in una posizione tranquilla.',
    },
    {
      question: 'Gli inquilini devono essere a casa il giorno della pulizia?',
      answer:
        'Solo se le finestre vengono pulite dall’interno. Questo vale per ogni lato interno e per le finestre il cui lato esterno è raggiungibile solo dall’interno, per esempio perché si aprono verso l’interno. Il vetro raggiungibile dall’esterno si pulisce senza accesso. Chi è assente può depositare la chiave, come previsto dall’avviso qui sopra.',
    },
    {
      question: 'Chi si occupa delle finestre negli appartamenti in affitto?',
      answer:
        'Il Codice delle obbligazioni prevede che il conduttore elimini a proprie spese, secondo gli usi locali, i difetti rimediabili con piccoli lavori di pulitura necessari all’ordinaria manutenzione ([art. 259 CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_259)). Dipende dal contratto e dagli usi locali se vi rientra anche la pulizia delle finestre dell’appartamento. Le finestre del vano scale e dei locali comuni non appartengono a nessun appartamento. Se l’amministrazione fa pulire anche le finestre degli appartamenti, può addebitare i costi come spese accessorie solo se pattuite specialmente nel contratto ([art. 257a CO](https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_257_a)). Verifichi il singolo caso prima di riaddebitare dei costi.',
    },
    {
      question: 'Pulite le facciate ad alta pressione?',
      answer:
        'Sì, se il materiale la sopporta. Casi delicati sono soprattutto l’intonaco fragile, il legno e la vecchia pietra naturale. A seconda della superficie e dei prodotti l’acqua va raccolta, la tabella delle acque di scarico indica in quali casi.',
    },
    {
      question: 'Serve un’autorizzazione se la piattaforma elevabile sta sul marciapiede?',
      answer:
        'Di regola sì. La Città di Lucerna chiede per l’utilizzo del suolo pubblico una domanda con un piano quotato della superficie, seguita dall’autorizzazione o da un sopralluogo. La Città di Zugo riceve online le domande per il suolo pubblico durante lavori edili, per esempio per un ponteggio di facciata. Per una piattaforma elevabile usata per una pulizia si informi presso il Dipartimento delle costruzioni della Città. Negli altri Comuni informa l’ufficio tecnico. Inoltri la domanda per tempo, affinché la data regga.',
    },
    {
      question: 'Che cos’è l’acqua pura?',
      answer:
        'Acqua trattata da cui sono stati tolti i minerali disciolti. Poiché non lascia nulla, asciuga sul vetro senza macchie di calcare. Scorre in aste telescopiche alimentate ad acqua, con cui si puliscono i vetri dal suolo fino a circa 10 m di altezza.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Quando oltre ai vetri anche vano scale e superfici comuni vanno puliti regolarmente.' },
    { path: '/leistungen/baureinigung', text: 'Quando dopo lavori edili o di ristrutturazione malta, pittura ed etichette aderiscono a vetri e telai.' },
    { path: '/leistungen/bueroreinigung', text: 'Quando in uffici e studi vanno puliti anche postazioni di lavoro, pavimenti e servizi igienici.' },
  ],
  cta: {
    title: 'Offerta per finestre e facciata',
    text: 'Ci invii indirizzo, numero di piani, numero approssimativo di finestre e qualche foto. Dopo il sopralluogo riceve l’offerta, gratuita e senza impegno.',
  },
}
