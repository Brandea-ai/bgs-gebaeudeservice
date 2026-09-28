import type { ServicePageContent, Source } from '../../types'

/** Yacht e barca (E85): stesse chiavi e stesse affermazioni di content/de/premium/yacht.ts, fonti verificate il 28.09.2026 */
const fonti = {
  sika: { label: 'Sika Marine Application Guide: Teak Decking, Maintenance and Repair (2017, in inglese)', href: 'https://gbr.sika.com/dms/getdocument.get/5f0d4442-0769-310e-8a04-89d6f3cb5c90/Marine%20Application%20Guide_12_Teak%20Decking_Maintenance_and_Repair.pdf' },
  hallbergRassy: { label: 'Hallberg-Rassy: Teak deck (in inglese)', href: 'https://shop.hallberg-rassy.com/deck-hull-mooring/teak.html' },
  axopar: { label: 'Axopar Owner’s Manual, 7.1 Cleaning and maintaining the gelcoat surface (in inglese)', href: 'https://manuals.axopar.com/content/p7len/2.0.1.0/en/189.html' },
  iser: { label: 'Informationsstelle Edelstahl Rostfrei: scheda 824 sulla pulizia dell’acciaio inossidabile (2024, in tedesco)', href: 'https://www.edelstahl-rostfrei.de/fileadmin/user_upload/ISER/images/publikationen/iser_MB824_2025.pdf' },
  roehm: { label: 'Röhm: pulire e disinfettare il PLEXIGLAS (211-13, in tedesco)', href: 'https://www.plexiglas.de/files/plexiglas-content/pdf/technische-informationen/211-13-Reinigen-und-Desinfizieren-von-PLEXIGLAS.pdf' },
  sunbrella: { label: 'Sunbrella: Clean Sunbrella Marine Upholstery (in inglese)', href: 'https://www.sunbrella.com/clean-sunbrella-marine-upholstery' },
  meteo: { label: 'MeteoSvizzera: bilancio della stagione pollinica 2022 (in tedesco)', href: 'https://www.meteoschweiz.admin.ch/ueber-uns/meteoschweiz-blog/de/2022/8/pollensaison-2022-der-rueckblick.html' },
  gschg: { label: 'Legge federale sulla protezione delle acque (LPAc, RS 814.20), art. 6 Principio', href: 'https://www.fedlex.admin.ch/eli/cc/1992/1860_1860_1860/it#art_6' },
  bsv: { label: 'Ordinanza sulla navigazione interna (ONI, RS 747.201.1), art. 10 e 108', href: 'https://www.fedlex.admin.ch/eli/cc/1979/337_337_337/it#art_10' },
  hafenLuzern: { label: 'Bootshafen Luzern: regolamento del porto, in vigore dal 1° aprile 2024 (in tedesco)', href: 'https://bootshafen-luzern.ch/hafenreglement/' },
  hafenKehrsiten: { label: 'Bootshafen Hostatt, Kehrsiten: regolamento del porto del 1° gennaio 2018, cifra 10 (in tedesco)', href: 'https://s9de133486e03e91b.jimcontent.com/download/version/1466356984/module/10266661993/name/Hafenordnung.pdf' },
  smrv: { label: 'Cantone di Lucerna: commento all’ordinanza sull’obbligo di notifica e pulizia delle imbarcazioni (SMRV), 17 marzo 2026 (in tedesco)', href: 'https://lawa.lu.ch/-/media/LAWA/Dokumente/njf/lebensraeume/neobiota/Schiffe/Erlaeuterungen_zur_Verordnung.pdf?rev=d06e1b64f51c48c9a2ef5613ea8ef1ce' },
  smrp: { label: 'Umwelt Zentralschweiz: FAQ sull’obbligo di notifica e pulizia delle imbarcazioni (in tedesco)', href: 'https://www.umwelt-zentralschweiz.ch/was-wir-machen/themen/gebietsfremde-arten/aquatische-neobiota/faq-schiffsmelde-und-reinigungspflicht/' },
  zug: { label: 'Cantone di Zugo: obbligo di pulizia delle imbarcazioni (in tedesco)', href: 'https://zg.ch/de/natur-umwelt-tiere/arten-und-lebensraeume/artenmanagement-gewaesser/schiffsreinigungspflicht' },
} satisfies Record<string, Source>

export const yacht: ServicePageContent = {
  path: '/premium/yacht',
  area: 'premium',
  h1: 'Pulizia di barche e yacht all’ormeggio',
  lead: [
    'Polline, escrementi di uccelli e umidità mettono alla prova ogni stagione un’imbarcazione sul lago. La puliamo là dove si trova, al pontile o in porto, all’interno e all’esterno.',
    'Ciò che scorre giù dal ponte finisce nel lago. Prima del primo intervento tenga quindi a portata di mano il regolamento del porto del Suo ormeggio e le istruzioni di manutenzione del Suo cantiere nautico.',
  ],
  facts: [
    { label: 'Dove', value: 'All’ormeggio, sul lago dei Quattro Cantoni e sul lago di Zugo' },
    { label: 'Orari', value: 'Anche la sera, nel fine settimana e quando Lei non è a bordo' },
    { label: 'Frequenza', value: 'Una volta prima di un evento o regolarmente fino al rimessaggio invernale' },
    { label: 'Non compreso', value: 'Opera viva, antivegetativa, motore e impianti di bordo' },
  ],
  sections: [
    {
      title: 'Perché una barca si pulisce diversamente da una casa',
      paragraphs: [
        'A bordo ci sono materiali che in casa si trovano di rado. Il teak ha fibre morbide che le spazzole dure e l’alta pressione strappano via: il ponte diventa ruvido e si consuma prima del tempo. Il gelcoat perde lucentezza per il sole e per detergenti non adatti, l’acciaio inossidabile arrugginisce se entrano in gioco lana d’acciaio o prodotti al cloro.',
        'I detergenti per la casa sono quindi quasi sempre la scelta sbagliata a bordo. E ciò che aiuta un materiale può danneggiarne un altro: un detergente leggermente acido toglie la ruggine superficiale dalla battagliola, mentre sul gelcoat lì accanto gli acidi non vanno usati.',
      ],
    },
    {
      title: 'Sul lago molte cose sono diverse',
      paragraphs: [
        'Sul lago dei Quattro Cantoni e sul lago di Zugo manca il sale che al mare attacca le ferramenta. In compenso la riva porta a bordo altro: in primavera il polline giallo delle conifere, poi foglie, ragnatele ed escrementi di uccelli, soprattutto agli ormeggi sotto gli alberi. Nel salone chiuso l’umidità ristagna e su cuscini e imbottiture compaiono macchie di muffa.',
        'E tutt’intorno c’è l’acqua. Quali prodotti sono ammessi al pontile lo stabiliscono la legge e il regolamento del porto; la panoramica più in basso elenca le regole con le fonti. Su richiesta usiamo prodotti ecologici, e anche quelli vanno sul ponte solo con parsimonia.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialien',
      title: 'Teak, gelcoat, inox: che cosa aiuta e che cosa danneggia',
      intro: 'Le indicazioni provengono da istruzioni di manutenzione di produttori e organismi specializzati. Se il Suo cantiere nautico ha istruzioni proprie per la Sua imbarcazione, valgono quelle.',
      columns: ['Materiale', 'Come si pulisce', 'Che cosa lo danneggia'],
      rows: [
        [
          'Ponte in teak',
          'Con spugna o spazzola morbida nel senso della fibra, con un detergente delicato per teak, poi risciacquare a fondo con acqua pulita. Il senso della fibra è raccomandato da Sika, produttore di sistemi per ponti in teak, e dal cantiere Hallberg-Rassy.',
          'Idropulitrici e spazzole dure consumano le fibre morbide, le doghe si assottigliano. Secondo Sika, candeggina, acidi forti e prodotti chimici aggressivi non vanno mai usati sul ponte.',
        ],
        [
          'Gelcoat di ponte e sovrastrutture',
          'Lavare con un detergente per imbarcazioni, diluito secondo le istruzioni, e una spazzola morbida; risciacquare con acqua pulita prima e dopo.',
          'Detergenti per la casa, cloro e acidi. Il loro pH non è adatto e può danneggiare la superficie.',
        ],
        [
          'Inox di battagliola, gallocce e ferramenta',
          'Passare un panno morbido nel senso della satinatura. Togliere presto la ruggine superficiale, per esempio con un detergente per inox leggermente acido a base di acido citrico.',
          'Lana d’acciaio e spazzole metalliche in acciaio comune, crema abrasiva, prodotti con acido cloridrico o cloro. Le particelle di ferro della lana d’acciaio restano nella superficie e con l’umidità fanno ruggine.',
        ],
        [
          'Oblò e boccaporti in vetro acrilico',
          'Pulire con acqua, un po’ di detersivo per piatti e un panno morbido che non lascia pelucchi, poi ripassare con un panno leggermente umido.',
          'Strofinare a secco, comuni detergenti per vetri, prodotti con alcol, solventi o diluenti. Graffiano o intaccano il vetro acrilico.',
        ],
        [
          'Cuscini e imbottiture in tessuto da esterni',
          'Spazzolare lo sporco non aderente, pulire con una soluzione di sapone delicato e una spazzola morbida, risciacquare tutti i residui di sapone e lasciare asciugare all’aria.',
          'Candeggina all’ormeggio: può danneggiare l’ambiente, perciò il produttore di tessuti Sunbrella la sconsiglia vicino all’acqua. Può inoltre scolorire i tessuti di altre marche. Sporco lasciato sul posto: su di esso cresce la muffa.',
        ],
      ],
      note: 'Se dopo una pulizia ad acqua un ponte in teak resta bagnato più a lungo in alcuni punti, o il legno lì cambia colore, un comento potrebbe non essere più stagno. È un lavoro per il cantiere nautico.',
      sources: [fonti.sika, fonti.hallbergRassy, fonti.axopar, fonti.iser, fonti.roehm, fonti.sunbrella],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'saisonkalender',
      title: 'Calendario della stagione per la Sua imbarcazione',
      intro: 'Quale pulizia serve e quando, sul lago. I mesi sono indicativi, fioritura e meteo cambiano da un anno all’altro.',
      entries: [
        {
          label: 'Marzo e aprile',
          text: 'Prima della prima uscita: arieggiare e pulire salone e cabine, controllare se i cuscini tolti dal rimessaggio hanno macchie di muffa, preparare ponte, gelcoat e oblò per la stagione.',
        },
        {
          label: 'Aprile e maggio',
          text: 'Fioriscono abeti rossi e pini. Il loro polline si deposita come una pellicola gialla su ponte, cuscini e acqua. Se la barca è ormeggiata sotto gli alberi, in queste settimane conviene pulirla più spesso.',
        },
        {
          label: 'Da giugno ad agosto',
          text: 'Alta stagione con uscite e ospiti a bordo. Nel suo manuale il costruttore Axopar raccomanda di lavare la barca dopo ogni uscita, e ogni settimana se resta all’aperto senza copertura.',
        },
        {
          label: 'Settembre e ottobre',
          text: 'Fine stagione: pulire a fondo e lasciare asciugare tutto prima del rimessaggio invernale. Un telo di plastica come copertura trattiene l’umidità, meglio un telone in tessuto.',
        },
        {
          label: 'Prima di cambiare lago',
          text: 'Se dopo il rimessaggio la barca va in un altro lago, preveda la notifica e la pulizia presso un centro di pulizia autorizzato prima della messa in acqua.',
        },
      ],
      sources: [fonti.meteo, fonti.axopar],
    },
    {
      kind: 'table',
      id: 'regeln-am-see',
      title: 'Che cosa vale all’ormeggio',
      intro: 'Legge, ordinanza e regolamento del porto stabiliscono che cosa può finire in acqua durante la pulizia. La panoramica riassume le regole e non sostituisce una consulenza legale; nel singolo caso conta il testo.',
      columns: ['Regola', 'Che cosa richiede', 'Che cosa significa per la pulizia'],
      rows: [
        [
          'Legge sulla protezione delle acque, art. 6',
          'È vietato introdurre direttamente o indirettamente nelle acque sostanze che possono inquinarle.',
          'Ogni prodotto usato sul ponte può finire nel lago con l’acqua di risciacquo. Quindi il meno possibile, e solo ciò che è adatto al materiale.',
        ],
        [
          'Ordinanza sulla navigazione interna, art. 10',
          'La navigazione conosce lo stesso divieto. Se sostanze pericolose per le acque, come olio o carburante, finiscono in acqua e il conduttore non è in grado di evitare da sé il pericolo, deve avvertire senza indugio la polizia.',
          'Non sciacquare semplicemente via una pellicola d’olio nella sentina o tracce di carburante sullo scafo, ma segnalarle al proprietario.',
        ],
        [
          'Ordinanza sulla navigazione interna, art. 108',
          'I natanti con locali di soggiorno, cucina o impianti sanitari devono essere dotati di recipienti per sostanze fecali, acque di scarico e rifiuti, da vuotare a terra.',
          'L’acqua di pulizia di bagni e cambusa va in questi recipienti o a terra, non fuori bordo.',
        ],
        [
          'Regolamento del porto',
          'Ogni porto disciplina da sé il lavaggio al posto barca, con rigore diverso. Il Bootshafen Luzern vieta i prodotti dannosi per l’ambiente, il Bootshafen Hostatt a Kehrsiten vieta del tutto detergenti e pulitrici a vapore.',
          'Il regolamento del porto del Suo ormeggio stabilisce quali prodotti sono ammessi al pontile. Se vieta del tutto i detergenti, come a Kehrsiten, per lavare al posto barca resta solo acqua pulita.',
        ],
        [
          'Obbligo di notifica e pulizia delle imbarcazioni',
          'Prima che un’imbarcazione immatricolata cambi acque, per esempio passando a un altro lago, il cambio va notificato e la barca pulita da un centro di pulizia autorizzato. Solo con il nulla osta può entrare nelle nuove acque. Il motivo è la cozza quagga, scoperta per la prima volta nel lago dei Quattro Cantoni nell’estate 2024.',
          'L’obbligo vale in tutti i Cantoni della Svizzera centrale, a Lucerna con un’ordinanza propria dal 1° aprile 2026. Lasciare asciugare la barca non vale come pulizia, e la cura all’ormeggio non la sostituisce.',
        ],
      ],
      sources: [fonti.gschg, fonti.bsv, fonti.hafenLuzern, fonti.hafenKehrsiten, fonti.smrv, fonti.smrp, fonti.zug],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Prima del primo intervento all’ormeggio',
      intro: 'Con queste informazioni il primo appuntamento al pontile è breve. Stampi la lista o la consegni al Suo skipper.',
      groups: [
        {
          title: 'Barca',
          items: [
            'Cantiere, modello e lunghezza',
            'Istruzioni di manutenzione del cantiere o del produttore del ponte, se disponibili',
            'Materiali a bordo: teak, gelcoat, inox, vetro acrilico, pelle o tessuto da esterni',
            'Danni noti, per esempio comenti aperti nel teak o crepe nel gelcoat',
            'Gavoni e zone che non dobbiamo aprire',
          ],
        },
        {
          title: 'Ormeggio',
          items: [
            'Porto, pontile e numero del posto barca',
            'Regolamento del porto con le regole sul lavaggio al posto barca',
            'Acqua e corrente al pontile',
            'Accesso e parcheggio vicino al pontile',
            'Smaltimento in porto: rifiuti, aspirazione di acque nere e sentina',
          ],
        },
        {
          title: 'Accesso',
          items: [
            'Chiave, badge o codice per cancello e pontile',
            'Chi apre la barca quando Lei non c’è',
            'Impianto d’allarme a bordo, se presente',
          ],
        },
        {
          title: 'Date',
          items: [
            'Uscite previste e fine settimana con ospiti',
            'Date dell’alaggio e del rimessaggio invernale',
            'Persona di contatto al lago: Lei stesso, il Suo skipper o il responsabile del porto',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Che cosa rientra nella pulizia della barca',
    intro: 'All’ormeggio:',
    items: [
      'Ponte e superfici in teak',
      'Gelcoat di ponte e sovrastrutture',
      'Finestrature e vetri',
      'Imbottiture, cuscini e tessili',
      'Salone, cabine e cambusa',
      'Bagni',
    ],
    notIncluded: [
      'Opera viva e antivegetativa. È un lavoro per il cantiere nautico.',
      'Manutenzione tecnica del motore e degli impianti di bordo, compreso il rimessaggio del motore.',
      'Riparazioni a ponte, comenti o gelcoat.',
      'La pulizia obbligatoria prima di un cambio di lago. Spetta a un centro di pulizia autorizzato.',
    ],
  },
  steps: [
    {
      title: 'Chiavi e accesso',
      text: 'Come saliamo a bordo lo decide Lei: con una chiave, con un badge per il pontile o tramite una persona che apre la barca. Valgono regole fisse, anche durante la Sua assenza.',
    },
    {
      title: 'Un team fisso',
      text: 'Della Sua barca si occupa un team fisso. Se cambiano il posto barca, il badge o la persona che apre la barca, ce lo comunichi prima del prossimo intervento.',
    },
  ],
  faq: [
    {
      question: 'Quanto costa la pulizia di una barca?',
      answer:
        'Il lavoro necessario dipende soprattutto da lunghezza e allestimento della barca, cioè se si tratta di un motoscafo aperto o di uno yacht con salone, cabine e bagni. Contano inoltre la superficie in teak, lo stato, se puliamo l’interno, l’esterno o entrambi, la frequenza e quanto è facile raggiungere l’ormeggio con l’attrezzatura. Le indichiamo un prezzo non appena abbiamo visto la barca.',
    },
    {
      question: 'Ogni quanto va pulita una barca all’ormeggio?',
      answer:
        'Contano posizione e uso. Sotto gli alberi e durante la fioritura in aprile e maggio una barca si sporca più in fretta che a un pontile libero. Per l’alta stagione è utile un ritmo fisso, per esempio ogni settimana o prima dei fine settimana con ospiti. Che cosa raccomanda un costruttore è riportato nel calendario della stagione più in alto.',
    },
    {
      question: 'Un ponte in teak grigio è sporco?',
      answer:
        'Non necessariamente. Al sole il teak assume col tempo una patina grigio argento, e alcuni proprietari desiderano proprio questo colore. Ruvido e macchiato diventa invece il ponte a causa di spazzole dure, alta pressione o prodotti aggressivi. Se deve mantenere la tinta originale, servono prodotti di manutenzione per teak adatti al ponte e ai comenti.',
    },
    {
      question: 'Che cosa aiuta contro le macchie di muffa nel salone?',
      answer:
        'Arieggiare e tenere all’asciutto. Lasciare asciugare del tutto cuscini e imbottiture dopo la pulizia, non lasciare lo sporco sul posto, perché la muffa ci cresce sopra, e in inverno non chiudere la barca ermeticamente nella plastica. Contro le macchie di muffa ostinate il produttore di tessuti Sunbrella raccomanda una soluzione con candeggina, ma la sconsiglia vicino all’acqua. Secondo Sunbrella, le fodere rimovibili si possono lavare anche in lavatrice a freddo.',
    },
    {
      question: 'Dobbiamo essere a bordo durante la pulizia?',
      answer:
        'No. Non è necessario che Lei sia al pontile o a bordo. Chi apre la barca e la richiude lo stabiliamo con Lei una volta sola, poi vale per ogni intervento.',
    },
    {
      question: 'Potete pulire la nostra barca per un cambio di lago?',
      answer:
        'No. Prima che una barca passi in un altro lago, i Cantoni della Svizzera centrale richiedono la pulizia da parte di un centro di pulizia autorizzato, di solito un cantiere nautico. Lei notifica il cambio online a Umwelt Zentralschweiz e dopo la pulizia riceve il nulla osta per il nuovo lago. La nostra cura all’ormeggio non sostituisce questa pulizia.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Se con la barca c’è una casa o un’abitazione secondaria sul lago da preparare prima del Suo arrivo.' },
    { path: '/premium/privatjet', text: 'Se desidera far pulire anche la cabina del Suo jet privato tra un volo e l’altro.' },
    { path: '/premium', text: 'Tutte le offerte della nostra linea premium, dall’accordo di riservatezza al team fisso.' },
  ],
  cta: {
    title: 'Richiedere un’offerta per la Sua barca',
    text: 'Ci indichi cantiere, modello e lunghezza, il porto o il pontile e se dobbiamo pulire l’interno, l’esterno o entrambi, insieme alle date desiderate nella stagione. Non appena avremo visto la barca all’ormeggio, Le invieremo l’offerta, gratuita e senza impegno.',
  },
}
