import type { ServicePageContent } from '../../types'

// Traduzione di content/de/leistungen/baureinigung.ts (E85). Fonti come nel file tedesco,
// collegate alle versioni italiane di fedlex e ai testi del SIGAB (tedesco e francese).
// Secondo giro (rilievi R1 a R6, BR-SO-1 a BR-SO-9): messaggio FF 2022 2743, n. 4.2 (diritto
// transitorio), SIGAB descritto come su sigab.ch.
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Pulizie una tantum e speciali',
  h1: 'Pulizia di cantiere e di fine cantiere per nuove costruzioni e ristrutturazioni',
  lead: [
    'Finite le opere interne, una polvere fine copre ogni superficie, le pellicole protettive restano incollate a finestre e apparecchi, schizzi di malta e di pittura segnano vetri e piastrelle. Entro il collaudo l’edificio deve essere pronto perché inquilini, acquirenti o il Suo team possano entrarvi il giorno della consegna.',
    'Puliamo nelle tappe di cui il Suo cantiere ha bisogno: una pulizia grossolana dopo il rustico, pulizie intermedie prima delle finiture interne e una pulizia accurata prima della consegna. Gli interventi seguono il cronoprogramma della direzione lavori. Così il collaudo inizia su superfici pulite, dove i difetti si vedono.',
  ],
  facts: [
    { label: 'Per', value: 'Committenti, imprese generali, studi di architettura e amministrazioni immobiliari' },
    { label: 'Tappe', value: 'Pulizia grossolana, intermedia e di fine cantiere, singolarmente o insieme' },
    { label: 'Pulizia finale', value: 'Dopo gli ultimi artigiani, prima del collaudo' },
    { label: 'Serve sul posto', value: 'Accesso, corrente, acqua e uno spazio per gli attrezzi' },
    { label: 'Non compreso', value: 'Facciata e pulizia regolare dopo l’insediamento' },
  ],
  scope: {
    title: 'Che cosa comprende la pulizia di cantiere',
    intro:
      'La pulizia di cantiere si svolge a tappe, al ritmo dell’avanzamento dei lavori. Può affidarci tutte le tappe o solo la pulizia di fine cantiere prima della consegna.',
    items: [
      'Pulizia grossolana dopo il rustico: rimuovere sporco grossolano e polvere dai piani',
      'Pulizie intermedie prima della posa dei pavimenti o del montaggio delle cucine',
      'Pulizia di fine cantiere prima del collaudo, dall’alto verso il basso e se necessario in più passaggi',
      'Liberare finestre, telai, battute e vetri da polvere di cantiere e residui',
      'Rimuovere pellicole protettive, etichette, residui di colla e schizzi di malta e di pittura',
      'Pulire pavimenti, servizi igienici, cucine e armadi a muro dentro e fuori, pronti per l’uso',
    ],
    notIncluded: [
      'La facciata dell’edificio ultimato rientra nella [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
      'Dopo l’insediamento la [pulizia di manutenzione](/leistungen/unterhaltsreinigung) si occupa della pulizia regolare.',
    ],
  },
  sections: [
    {
      title: 'Polvere, pellicole e schizzi: che cosa risolve la pulizia di fine cantiere',
      paragraphs: [
        'La polvere di cantiere è fine e si deposita ovunque: sui pavimenti, nelle battute delle finestre, sui telai delle porte, negli armadi e nei cassetti. Per questo si pulisce dall’alto verso il basso, spesso in più di un passaggio, affinché la polvere non ricada su superfici già pulite.',
        'Pellicole, colla e schizzi secchi aderiscono più tenacemente della polvere. Ogni superficie richiede il suo prodotto e il suo attrezzo, perché vetri, acciaio inox, rubinetteria e pavimenti nuovi vanno consegnati senza graffi. La tabella più sotto mostra che cosa conta per il vetro.',
      ],
    },
    {
      title: 'Pulizia grossolana nel rustico, perché le finiture partano pulite',
      paragraphs: [
        'Finché i piani sono vuoti, macerie e polvere si rimuovono in fretta e a fondo. Posatori di pavimenti, gessatori e montatori di cucine iniziano così su una base pulita, e a ogni intervento meno polvere passa alle tappe successive.',
        'Ogni pulizia intermedia toglie lavoro alla pulizia di fine cantiere. Conta soprattutto quando tra l’ultimo artigiano e la consegna restano pochi giorni: la pulizia finale non parte allora da zero.',
      ],
    },
    {
      title: 'Ristrutturazione in un edificio abitato o in uso',
      paragraphs: [
        'Durante il risanamento delle colonne montanti o la trasformazione di un piano, il resto dell’edificio resta in uso. Ogni giorno di lavoro porta polvere nella tromba delle scale, nell’ascensore e fino davanti alle porte degli appartamenti. Una pulizia intermedia di questi percorsi comuni a ritmo fisso riduce il disagio per abitanti e personale.',
        'La pulizia di fine cantiere segue poi tappa per tappa, non appena gli artigiani lasciano un appartamento o un settore. Gli appartamenti finiti si possono così consegnare prima che l’intero risanamento sia concluso.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bauablauf',
      title: 'La pulizia nello svolgimento del cantiere',
      intro: 'Quale pulizia arriva quando e chi dà il via libera per la zona, come modello per direzione lavori e bando.',
      columns: ['Tappa', 'Quando nel cantiere', 'Che cosa si pulisce', 'Chi dà il via libera'],
      rows: [
        [
          'Pulizia grossolana',
          'Dopo il rustico, prima dell’inizio delle finiture interne',
          'Rimuovere sporco grossolano e polvere dai piani',
          'Direzione lavori',
        ],
        [
          'Pulizia intermedia',
          'Prima dei lavori delicati come parquet, piastrelle o montaggio della cucina',
          'Polvere su pavimenti, finestre, impianti ed elementi già montati',
          'Direzione lavori',
        ],
        [
          'Pulizia di fine cantiere',
          'Alla fine, quando tutte le imprese hanno terminato',
          'Tutto pronto per l’uso, dall’alto verso il basso, spesso in più passaggi',
          'Direzione lavori o committente',
        ],
        [
          'Pulizia di ripasso',
          'Quando si lavora ancora dopo la pulizia finale, ad esempio per eliminare difetti',
          'Solo i locali in cui gli artigiani hanno lavorato dopo la pulizia finale',
          'Direzione lavori',
        ],
      ],
      note: 'Se dopo la pulizia di fine cantiere gli artigiani lavorano ancora nei locali, si forma nuova polvere. Tenga quindi libera una finestra di tempo per le pulizie di ripasso.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'ausschreibung',
      title: 'Mettere a concorso la pulizia di fine cantiere: i dati che rendono confrontabili le offerte',
      intro: 'Se tutti gli offerenti ricevono gli stessi dati, le offerte si confrontano riga per riga. La lista funziona anche come modello per la Sua richiesta a noi.',
      groups: [
        {
          title: 'Immobile e superfici',
          items: [
            'Tipo di immobile, piani e superficie',
            'Numero di appartamenti, uffici o unità',
            'Piante o piani con i locali da pulire',
            'Pietra naturale, parquet o pavimenti oliati',
            'Cantine e autorimessa: comprese o no',
          ],
        },
        {
          title: 'Vetri e finestre',
          items: [
            'Finestre, porte e parapetti in vetro',
            'Vetri in altezza, ad esempio lucernari',
            'Dove è montato vetro temprato',
            'Lamelle e tapparelle: comprese o no',
          ],
        },
        {
          title: 'Date',
          items: [
            'Tappe desiderate con la data',
            'Data di consegna e data del collaudo',
            'Finestra di tempo tra fine lavori e collaudo',
            'Riserva per una pulizia di ripasso',
          ],
        },
        {
          title: 'Cantiere',
          items: [
            'Accesso al cantiere, chiavi o badge',
            'Corrente, acqua, ascensore e deposito',
            'Regole di sicurezza e persona di contatto',
            'Benne: chi le fornisce e chi smaltisce',
          ],
        },
      ],
      note: 'L’ordinanza sui rifiuti (OPSR) chiede di smaltire separatamente i rifiuti speciali e di separare sul cantiere i restanti rifiuti edili. Se le condizioni di lavoro non lo permettono, la separazione deve avvenire in impianti idonei (art. 17 OPSR). Chiarisca quindi anche dove finiscono pellicole e imballaggi della pulizia.',
      sources: [
        { label: 'Ordinanza sui rifiuti OPSR, art. 17: separazione dei rifiuti edili', href: 'https://www.fedlex.admin.ch/eli/cc/2015/891/it#art_17' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'glas',
      title: 'Vetro nuovo: che cosa lo danneggia e che cosa raccomanda il settore del vetro',
      intro: 'Le finestre vengono spesso montate mesi prima della consegna e subiscono tutto ciò che produce il cantiere. Le raccomandazioni sono del servizio tecnico SIGAB dell’associazione svizzera del vetro piano SFV-ASVP.',
      columns: ['Situazione', 'Perché è delicato', 'Raccomandazione'],
      rows: [
        [
          'Boiacca di cemento, malta o intonaco sul vetro',
          'Sono fortemente alcalini e possono corrodere il vetro e renderlo opaco. Una forte corrosione è irreparabile e il vetro va sostituito.',
          'Rimuovere subito. Ammorbidire prima i residui di calcestruzzo, poi toglierli con cura.',
        ],
        [
          'Polvere di cantiere secca',
          'Strofinare un panno umido sullo sporco secco trascina granelli appuntiti sul vetro e lo graffia.',
          'Lavorare con molta acqua pulita: ammorbidire, sciogliere, risciacquare. Panni in microfibra solo con cautela.',
        ],
        [
          'Schizzi di pittura e di malta',
          'Se si passa una lama o un raschietto su tutto il vetro, le particelle di sporco vengono sfregate nel vetro. Ne nasce una rete di graffi sottili. La lucidatura dovrebbe allora coprire tutta la superficie visibile e costa più della sostituzione del vetro.',
          'Usare le lame solo in singoli punti e con grande attenzione, mai su tutta la superficie.',
        ],
        [
          'Etichette e nastro adesivo',
          'Particolarmente delicato sui vetri rivestiti e con il caldo. I detergenti con soluzioni alcaline o acidi possono distruggere il rivestimento e la superficie del vetro.',
          'Rimuovere la colla al più presto, con cautela, usando isopropanolo o acetone.',
        ],
        [
          'Vetro di sicurezza temprato',
          'Più sensibile ai graffi del normale vetro float, senza essere di qualità inferiore. Secondo le norme di prodotto il vetro precompresso non può più essere lavorato dopo la tempra, quindi nemmeno lucidato.',
          'Pulire con particolare cura.',
        ],
      ],
      note: 'Secondo la lunga esperienza peritale del SIGAB, gran parte dei graffi nasce da una pulizia di fine cantiere non appropriata, e spesso si vede solo con il sole radente. Esamini quindi le vetrate con la direzione lavori prima della pulizia finale e documenti i danni esistenti. Altrimenti più tardi serve spesso una perizia per stabilire quando è nato un graffio.',
      sources: [
        {
          label: 'SIGAB: vetri sporchi e pulizia sbagliata causano danni (metall, aprile 2020, articolo in tedesco e francese)',
          href: 'https://www.sigab.ch/fileadmin/dam/upload/sigab/news/Fachartikel_DE/2020_04_Metall_Glaeser-im-Baualltag.pdf',
        },
        { label: 'SIGAB: pulire le finestre senza causare graffi (marzo 2021, in tedesco)', href: 'https://www.sigab.ch/de/wissen/detail/fensterputzen-ohne-kratzer-zu-verursachen' },
      ],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'uebergabe',
      title: 'Lista di controllo per la consegna dopo la pulizia di fine cantiere',
      intro: 'Per il sopralluogo prima del collaudo. Guardi il vetro alla luce del giorno, anche di sbieco.',
      groups: [
        {
          title: 'Vetri, finestre e porte',
          items: [
            'Pellicole, etichette e colla rimosse',
            'Vetri senza aloni, schizzi e graffi',
            'Battute e telai senza polvere di cantiere',
          ],
        },
        {
          title: 'Cucina, bagno e arredi fissi',
          items: [
            'Rubinetteria e apparecchi sanitari senza residui di malta e di pittura',
            'Armadi e cassetti puliti all’interno',
            'Piastrelle e fughe senza residui',
          ],
        },
        {
          title: 'Pavimenti e superfici',
          items: [
            'Pavimenti puliti fin negli angoli',
            'Davanzali e porte senza polvere',
            'Scale e corrimano senza polvere',
          ],
        },
        {
          title: 'Prima del collaudo dell’opera',
          items: [
            'Nessun artigiano più nei locali',
            'Danni preesistenti documentati',
            'Elenco dei difetti per locale ed elemento',
            'Termine d’avviso chiarito (vedi nota)',
          ],
        },
      ],
      note: 'Il CO prevede che il committente verifichi la costruzione dopo la consegna e ne segnali i difetti agli appaltatori (art. 367 CO). Per i contratti d’appalto su opere immobiliari conclusi a partire dal 1° gennaio 2026 il termine è di almeno 60 giorni, e per i difetti che emergono solo più tardi decorre dalla loro scoperta (art. 370 CO). Per i contratti più vecchi vale ancora il diritto anteriore: l’avviso va dato immediatamente. Il caso concreto lo chiarisca con la direzione lavori o con la Sua consulenza legale.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 367 e 370: verificazione, avviso dei difetti e approvazione', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it#art_367' },
        { label: 'Messaggio sui difetti di costruzione, FF 2022 2743, n. 4.2: diritto transitorio', href: 'https://www.fedlex.admin.ch/eli/fga/2022/2743/it' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Tappe nel cronoprogramma',
      text: 'Pulizia grossolana, intermedia e finale figurano con la data nel cronoprogramma della direzione lavori. Se il cantiere slitta, gli interventi vengono ripianificati con la direzione lavori.',
      figure: 'start',
    },
    {
      title: 'Pulizia finale locale per locale',
      text: 'Dopo gli ultimi artigiani ogni locale viene pulito dall’alto verso il basso, pellicole e residui vengono rimossi, finché lo spazio è pronto per l’uso.',
      figure: 'besichtigung',
    },
    {
      title: 'Collaudo su superfici pulite',
      text: 'Lei o la Sua direzione lavori controlla con la lista di controllo per la consegna. Sulle superfici pulite emergono anche i difetti di costruzione nascosti sotto la polvere.',
      figure: 'offerte',
    },
  ],
  faq: [
    {
      question: 'Qual è la differenza tra pulizia di cantiere, pulizia di fine cantiere e pulizia fine lavori?',
      answer:
        'Pulizia di cantiere è il termine generale per tutti gli interventi sul cantiere, dalla pulizia grossolana dopo il rustico alle pulizie intermedie. La pulizia di fine cantiere è l’ultima pulizia accurata prima del collaudo, dopo la quale l’immobile è pronto per l’uso. Pulizia fine lavori o pulizia post cantiere indicano di solito la stessa pulizia di fine cantiere.',
    },
    {
      question: 'Quando va inserita nel cronoprogramma la pulizia di fine cantiere?',
      answer:
        'Appena Le è nota la data di consegna. Arriva dopo gli ultimi lavori degli artigiani e prima del collaudo e ha bisogno di una sua finestra di tempo. La durata dipende da superficie, quota di vetro e numero di passaggi.',
    },
    {
      question: 'Quanto costa una pulizia di cantiere?',
      answer:
        'L’impegno dipende soprattutto dalla superficie e dal numero di piani, dalla quota di vetro e dalla sua altezza, dalla quantità di pellicole, colla e schizzi, dal numero di tappe e di passaggi, dal tempo a disposizione fino alla consegna e da corrente, acqua e ascensore sul cantiere. Con la lista per il bando di questa pagina ha insieme i dati che ci servono per l’offerta.',
    },
    {
      question: 'Perché il vetro nuovo a volte ha dei graffi dopo la pulizia di cantiere?',
      answer:
        'Secondo gli esperti del vetro del SIGAB, per lo più a causa di una pulizia sbagliata: una lama passata su tutto il vetro, oppure un panno strofinato su polvere di cantiere secca. Il vetro di sicurezza temprato è particolarmente sensibile. Questi graffi sottili spesso non si notano subito, ma solo con il sole radente.',
    },
    {
      question: 'Chi rimuove pellicole protettive, etichette e residui di colla?',
      answer:
        'Fa parte della pulizia di fine cantiere, con prodotti adatti a ogni superficie. La tabella sul vetro nuovo mostra a che cosa fare attenzione sul vetro. Ci indichi già nella richiesta le superfici vetrate con etichette o nastro adesivo.',
    },
    {
      question: 'Pulizia di cantiere o pulizia di fine locazione: che cosa serve dopo un rinnovo?',
      answer:
        'Se in un appartamento sono stati rifatti pavimenti, cucina o bagno, la polvere di cantiere si trova nelle battute, negli armadi e su tutte le superfici, insieme a pellicole e schizzi: serve una pulizia di cantiere. Se gli inquilini se ne vanno senza lavori, è adatta la [pulizia di fine locazione](/leistungen/umzugsreinigung) con garanzia di consegna.',
    },
    {
      question: 'Le finestre fanno parte della pulizia di fine cantiere?',
      answer:
        'Sì, compresi telai, battute e vetri. La cura regolare di vetri e facciata dell’edificio abitato rientra nella nostra [pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung).',
    },
  ],
  related: [
    {
      path: '/leistungen/umzugsreinigung',
      text: 'Quando un appartamento passa senza lavori ai prossimi inquilini e la pulizia finale deve avere la garanzia di consegna.',
    },
    {
      path: '/leistungen/fenster-und-fassadenreinigung',
      text: 'Quando facciata e superfici vetrate dell’edificio ultimato vanno pulite regolarmente.',
    },
    {
      path: '/leistungen/unterhaltsreinigung',
      text: 'Quando l’edificio è abitato e tromba delle scale, parti comuni o uffici devono restare puliti in modo continuo.',
    },
  ],
  cta: {
    title: 'Richiedere una pulizia di fine cantiere',
    text: 'Ci indichi il tipo di immobile, la superficie utile, il numero di appartamenti o unità, le tappe desiderate e la data di consegna. Con questi dati prepariamo il sopralluogo del cantiere, gratuito e senza impegno come l’offerta.',
  },
}
