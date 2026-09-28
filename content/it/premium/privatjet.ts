import type { ServicePageContent, Source } from '../../types'

/** Privatjet (E85), stesse chiavi e fonti di content/de/premium/privatjet.ts */
const fonte = {
  faa: {
    label: 'FAA Advisory Circular 43.13-1B, cifra 3-25: pulizia delle materie plastiche trasparenti (in inglese)',
    href: 'https://www.faa.gov/documentLibrary/media/Advisory_Circular/AC_43.13-1B_w-chg1.pdf',
  },
  who: {
    label: 'OMS, Guide to Hygiene and Sanitation in Aviation, 3a edizione 2009, capitolo 3 e allegato F (in inglese)',
    href: 'https://iris.who.int/handle/10665/44164',
  },
  cfr: {
    label: '14 CFR 25.853 (a): comportamento al fuoco dei materiali di cabina, norma statunitense per i grandi velivoli (in inglese)',
    href: 'https://www.ecfr.gov/current/title-14/chapter-I/subchapter-C/part-25/subpart-D/subject-group-ECFR1e1f52030ba4797/section-25.853',
  },
  pelle: {
    label: 'Townsend Leather: cura della pelle anilina, indicazioni del produttore (in inglese)',
    href: 'https://townsendleather.com/care-for-anilne-leathers',
  },
  tessuti: {
    label: 'Duncan Aviation: cura di tessuti e pelli negli aerei d’affari (in inglese)',
    href: 'https://www.duncanaviation.aero/intelligence/caring-for-the-fabrics-and-leathers-in-your-business-aircraft',
  },
  osoan: {
    label: 'Ordinanza concernente i sottoprodotti di origine animale (OSOAn), art. 2 cpv. 2bis, art. 4, 5 e 22',
    href: 'https://www.fedlex.admin.ch/eli/cc/2011/372/it',
  },
} satisfies Record<string, Source>

export const privatjet: ServicePageContent = {
  path: '/premium/privatjet',
  area: 'premium',
  h1: 'Pulizia di jet privati: cabina, cucina di bordo e toilette',
  lead: [
    'Dopo un volo a lungo raggio restano aloni di caffè sulla radica, briciole nei binari dei sedili e impronte sui finestrini della cabina. Prima della partenza successiva a volte restano solo poche ore.',
    'Puliamo cabina, cucina di bordo e toilette del Suo jet privato tra due voli, con i prodotti approvati per il Suo aeromobile. Qui sotto trova che cosa sopportano i materiali a bordo, che cosa si può fare in base al tempo di sosta e che cosa va definito prima del primo intervento.',
  ],
  facts: [
    { label: 'Prestazioni', value: 'Cabina, cucina di bordo e toilette' },
    { label: 'Non compreso', value: 'Esterno, serbatoi della toilette e parte tecnica' },
    { label: 'Prodotti', value: 'Solo quelli approvati dal Suo operatore' },
    { label: 'Orari', value: 'Tra due voli, anche di sera e nel fine settimana' },
    { label: 'Accesso', value: 'Lo regola il Suo operatore con l’aerodromo' },
  ],
  sections: [
    {
      title: 'La cabina tra due voli',
      paragraphs: [
        'In un jet privato è l’occasione a stabilire che cosa comprende la pulizia interna dell’aereo. Dopo un volo al completo sono le imbottiture, la moquette e la cucina di bordo. Dopo una sosta presso l’impresa di manutenzione, polvere e impronte coprono rivestimenti, tavoli e finestrini. Prima di un volo con ospiti conta ogni dettaglio che si vede salendo a bordo.',
        'La finestra temporale la stabilisce il Suo piano di volo. Prima si conosce la partenza successiva, più precisamente si può pianificare che cosa deve essere pronto. Quali lavori rientrano in un’ora e quali richiedono una notte lo mostra la tabella dei tempi di sosta più sotto.',
      ],
    },
    {
      title: 'Cucina di bordo e toilette',
      paragraphs: [
        'Nella cucina di bordo le bevande penetrano in fughe, guide dei cassetti e vani che si vedono solo dopo aver tolto gli inserti. Nella toilette contano WC, lavabo, rubinetteria, specchio, maniglie e il pavimento attorno al WC.',
        'Nel piano esemplificativo dell’OMS la pulizia della toilette figura per intero già per una sosta inferiore a un’ora. Solo il rifornimento di sapone e articoli da toilette avviene allora su richiesta. Per i resti alimentari di voli transfrontalieri valgono regole proprie, vedi la lista di controllo più sotto.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'kabinenmaterialien',
      title: 'Materiali della cabina e che cosa li danneggia',
      intro:
        'Quali prodotti sono ammessi a bordo lo decidono il costruttore dell’aeromobile e il Suo operatore. Secondo la guida dell’OMS, il servizio tecnico dell’operatore approva ogni prodotto prima dell’uso, la lista figura di norma nel manuale di manutenzione.',
      columns: ['Materiale', 'Che cosa conta', 'Che cosa lo danneggia'],
      rows: [
        [
          'Finestrini, lato interno',
          'Prodotti approvati e un panno non abrasivo, poi ripassare con acqua e asciugare. Per la plastica la FAA indica molta acqua, sapone delicato e un panno morbido senza granelli.',
          'Sulla plastica: alcol, acetone, diluenti e detergenti spray per vetri la ammorbidiscono, si formano fini crepe. Strofinare a secco graffia e carica di elettricità statica.',
        ],
        [
          'Pelle anilina (senza finitura pigmentata)',
          'Togliere la polvere con un panno morbido appena umido, lo sporco più forte con acqua e sapone delicato senza detergenti. Asciugare all’aria, lontano da calore e sole.',
          'I detergenti non adatti la scuriscono subito, l’acqua dura lascia aloni. Non strofinare con forza né inzuppare, tamponare subito ciò che si è versato.',
        ],
        [
          'Tessuti e moquette',
          'Tamponare subito le macchie con un panno pulito. Staccare i residui appiccicosi con una spatola, poi aspirare.',
          'Strofinare spinge lo sporco più a fondo nel tessuto. Smacchiatori non approvati.',
        ],
        [
          'Legno laccato, superfici lucide, rivestimenti',
          'Prodotti della lista approvata, panni morbidi e puliti.',
          'Lucidante, cera o impregnante senza approvazione. Secondo la norma statunitense per i grandi velivoli anche le finiture applicate devono superare la prova di comportamento al fuoco.',
        ],
        [
          'Disinfezione in cucina di bordo e toilette',
          'Solo prodotti della lista approvata dall’operatore, usati esattamente secondo le istruzioni.',
          'Molti disinfettanti sono ossidanti. Possono intaccare i metalli e ridurre la resistenza al fuoco delle imbottiture.',
        ],
      ],
      note: 'Se i documenti del costruttore o dell’allestitore indicano altro, valgono quelli.',
      sources: [fonte.who, fonte.faa, fonte.pelle, fonte.tessuti, fonte.cfr],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'bodenzeit',
      title: 'Che cosa fare in base al tempo di sosta',
      intro:
        'Nel suo piano esemplificativo l’Organizzazione mondiale della sanità suddivide la pulizia della cabina in base al tempo a terra. Il piano viene dal traffico di linea. Per un jet privato mostra che cosa conviene fare durante una sosta breve e che cosa richiede una notte a terra.',
      columns: ['Tempo a terra', 'Standard nel piano dell’OMS', 'Solo su richiesta nel piano dell’OMS'],
      rows: [
        [
          'Meno di 60 minuti',
          'Rifiuti da cabina, armadi e cucina di bordo, riporre cuscini e coperte. Pulizia della toilette: WC e sedile, lavabo, rubinetteria, specchio, pareti, maniglie e pavimento.',
          'Tavolini e braccioli, lavello e piani di lavoro della cucina di bordo, forno, rifornire sapone e articoli da toilette. Moquette e pavimenti solo se necessario.',
        ],
        [
          'Più di 60 minuti',
          'In aggiunta svuotare le tasche dei sedili, pulire in cucina di bordo lavello, rubinetteria, piani di lavoro e tavoli ribaltabili, rifornire sapone e articoli da toilette.',
          'Aspirare i sedili in tessuto, pulire i sedili in pelle, aspirare la moquette, forno dentro e fuori, pavimento della cucina di bordo, tavolini e braccioli.',
        ],
        [
          'Durante la notte',
          'Tutto quanto nelle righe sopra, anche ciò che lì è solo su richiesta. In più finestrini lato interno, pavimenti in vinile della cabina, togliere i cuscini dei sedili e aspirare sotto, macchie sulla moquette, binari dei sedili, soffitto, pareti laterali, armadi, porte, schermi e griglie di ventilazione della cucina di bordo.',
          'Nulla: a questo livello tutto è previsto.',
        ],
      ],
      note: 'Se il tempo non basta, l’OMS dà la precedenza a rifiuti, cucina di bordo e toilette. Come trappole per lo sporco cita le guide delle attrezzature di catering, i vani della cucina di bordo, lo scarico del lavello, gli armadietti della toilette e il vano della cassetta di pronto soccorso.',
      sources: [fonte.who],
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'erster-einsatz',
      title: 'Lista di controllo per il primo intervento a bordo',
      intro:
        'Definisca questi punti con il Suo operatore prima del primo intervento. In seguito valgono per ognuno dei successivi.',
      groups: [
        {
          title: 'Luogo e accesso',
          items: [
            'Aerodromo e hangar o piazzola in cui si trova l’aeromobile',
            'Chi accompagna il nostro team all’aeromobile o autorizza l’accesso, con numero di telefono',
            'Se a bordo sono disponibili corrente e luce (hangar o gruppo di alimentazione a terra)',
            'La finestra temporale tra l’atterraggio e la partenza successiva',
          ],
        },
        {
          title: 'Cabina e prodotti',
          items: [
            'Quali zone sono comprese e quali no',
            'Lista dei prodotti di pulizia e dei disinfettanti approvati',
            'Indicazioni di cura dell’allestitore per pelle, legno e tessuti',
            'Chi decide su prodotti di cura, lucidante o impregnante',
          ],
        },
        {
          title: 'Cucina di bordo e rifiuti',
          items: [
            'Chi prende in consegna i resti alimentari: da aeromobili impiegati nel traffico transfrontaliero sono sottoprodotti di origine animale della categoria 1 da incenerire',
            'Dove vanno gli altri rifiuti',
          ],
        },
        {
          title: 'Consegna e discrezione',
          items: [
            'Chi prende in consegna la cabina dopo la pulizia',
            'Come trattiamo oggetti personali e documenti a bordo',
            'Se desidera un accordo di riservatezza',
          ],
        },
      ],
      sources: [fonte.osoan, fonte.who],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Che cosa puliamo a bordo',
    intro: 'A seconda dell’occasione e del tempo di sosta, ne fanno parte:',
    items: [
      'Sedili in pelle e rivestimenti in tessuto, binari dei sedili e ripiani laterali',
      'Moquette e pavimenti, anche sotto i sedili',
      'Tavoli, rivestimenti e mobili in legno o in lacca lucida',
      'Finestrini lato interno, specchi e vetri',
      'Maniglie, interruttori e altri punti toccati spesso',
      'Schermi e comandi dei sedili',
      'Cucina di bordo: piani di lavoro, lavello, vani e cassetti',
      'Toilette: WC, lavabo, rubinetteria, specchio e pavimento',
    ],
    notIncluded: [
      'Pulizia esterna di fusoliera, finestrini e motori',
      'Svuotamento dei serbatoi della toilette e rifornimento di acqua potabile',
      'Smontaggio di sedili, moquette o rivestimenti',
      'Riparazioni di pelle, legno o lacca',
    ],
  },
  steps: [
    {
      title: 'Approvazioni',
      text: 'Il Suo operatore ci indica i prodotti ammessi e regola l’accesso all’aeromobile. Entrambe le cose valgono poi per ogni intervento successivo.',
    },
    {
      title: 'Pulizia durante la sosta',
      text: 'Puliamo nella finestra temporale che il Suo piano di volo lascia libera, anche di sera o nel fine settimana.',
    },
    {
      title: 'Consegna della cabina',
      text: 'La cabina viene presa in consegna dalla persona che ha designato, ad esempio un membro dell’equipaggio o del Suo operatore.',
    },
  ],
  faq: [
    {
      question: 'Quanto costa la pulizia della cabina di un jet privato?',
      answer:
        'Non esiste un prezzo forfettario. L’impegno dipende dalla grandezza della cabina e dal numero di sedili, dai materiali, dallo stato dopo il volo e dal tempo di sosta. Si aggiungono gli interventi di sera o nel fine settimana e se veniamo una volta o regolarmente. L’importo Le arriva per iscritto, dopo che abbiamo visto la cabina.',
    },
    {
      question: 'Quali prodotti di pulizia usate a bordo?',
      answer:
        'I prodotti approvati per il Suo aeromobile. La lista si trova di norma nel manuale di manutenzione o presso la Sua impresa di manutenzione. I detergenti per la casa non vanno a bordo: gli spray per vetri e l’alcol ammorbidiscono i vetri in plastica, i detergenti non adatti scuriscono la pelle anilina (vedi la tabella dei materiali della cabina più sopra).',
    },
    {
      question: 'Trattate o impregnate anche pelle e legno?',
      answer:
        'Noi puliamo. Prodotti di cura, lucidanti e impregnanti lasciano uno strato sul materiale. Se applicarli a bordo lo decide la Sua impresa di manutenzione, il perché è spiegato nella tabella dei materiali della cabina più sopra.',
    },
    {
      question: 'Pulite anche l’esterno dell’aeromobile?',
      answer:
        'No. Puliamo la cabina, compresi cucina di bordo e toilette. Pulizia esterna, serbatoi della toilette e acqua potabile spettano alla manutenzione e all’assistenza a terra.',
    },
    {
      question: 'Come arriva il vostro team all’aeromobile?',
      answer:
        'L’accesso all’hangar o alla piazzola lo regola Lei o il Suo operatore con l’aerodromo, ad esempio con un accompagnamento. Preveda un po’ di tempo per questo nella finestra temporale.',
    },
    {
      question: 'Che cosa succede con i resti alimentari della cucina di bordo?',
      answer:
        'Se provengono da aeromobili che attraversano il confine, in Svizzera i resti alimentari sono sottoprodotti di origine animale della categoria 1, il gruppo a più alto rischio. L’ordinanza ne prescrive l’incenerimento. Chi li prende in consegna va definito nella lista di controllo per il primo intervento, più sopra.',
    },
    {
      question: 'Il nostro operatore o il nostro family office può commissionare la pulizia?',
      answer:
        'Sì. La richiesta può arrivare da proprietari, operatori, family office o assistenti. Conta che ci sia una persona in grado di approvare prodotti e accesso.',
    },
    {
      question: 'Come trattate gli oggetti personali a bordo?',
      answer:
        'Come decide Lei: lasciarli al loro posto, riporli in un vano preciso o non toccarli affatto. Questo vale anche per documenti e apparecchi.',
    },
  ],
  related: [
    { path: '/premium/luxusimmobilien', text: 'Se accanto al jet va curata anche una villa, una residenza o un’abitazione secondaria.' },
    { path: '/premium/yacht', text: 'Se in estate si aggiunge una barca sul lago dei Quattro Cantoni o sul lago di Zugo.' },
    { path: '/premium', text: 'Se desidera affidare con discrezione anche family office, uffici ed eventi.' },
  ],
  cta: {
    title: 'Richiedere con discrezione la pulizia della cabina',
    text: 'Per l’offerta ci servono il tipo di aeromobile, l’aerodromo in cui di solito è di base, le Sue finestre temporali abituali e la lista dei prodotti approvati dal Suo operatore. Dopo uno sguardo alla cabina riceve l’offerta, gratuita e senza impegno.',
  },
}
