import type { ServicePageContent, Source } from '../../types'

// Stesse chiavi e fonti di content/de/premium/luxusimmobilien.ts (E85, fonti lette il 28.09.2026).

const nvs: Source = {
  label: 'Associazione svizzera della pietra naturale NVS: scheda sulla pulizia dei rivestimenti in pietra naturale (gennaio 2018, in tedesco)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Pulizia di ville con un team fisso che conosce i materiali',
  lead: [
    'Un lavabo in marmo, accanto un rubinetto in ottone, nel soggiorno un parquet di rovere oliato: in una villa quasi ogni superficie richiede un prodotto diverso.',
    'Puliamo ville, loft e residenze a Lucerna, Zugo e dintorni con un team fisso che conosce i Suoi materiali e le Sue regole. Viene con regolarità, in occasione dei Suoi ricevimenti o mentre è in viaggio.',
  ],
  facts: [
    { label: 'Per', value: 'Proprietari, le loro amministrazioni e agenti immobiliari' },
    { label: 'Orari', value: 'Nei giorni feriali, la sera, nel fine settimana o durante i Suoi viaggi' },
    { label: 'Team', value: 'Assegnato in modo fisso e verificato da noi' },
    { label: 'Da stampare', value: 'Tabella dei materiali e lista per il primo giro' },
  ],
  scope: {
    title: 'Che cosa comprende la cura della Sua casa',
    intro: 'Quali locali e superfici includere lo decide Lei durante il primo giro della casa. Di solito sono questi:',
    items: [
      'Soggiorni, camere da letto e camere per gli ospiti',
      'Cucine e bagni, con prodotti adatti a pietra, lacca e rubinetteria',
      'Pavimenti in pietra naturale e parquet secondo le istruzioni di cura di ciascun rivestimento',
      'Superfici laccate lucide, vetro e specchi',
      'Pulizia prima del Suo arrivo, dopo la Sua partenza e giri di controllo nel periodo intermedio',
      'Interventi prima e dopo ricevimenti o feste di famiglia, anche nel fine settimana',
      'Spazi abitativi in cui si trovano opere d’arte e pezzi d’antiquariato',
      'Interventi con breve preavviso prima di una vendita, di un servizio fotografico o di una consegna, anche su incarico di un agente immobiliare o di un’amministrazione',
    ],
    notIncluded: [
      'Il restauro di opere d’arte e di pezzi antichi.',
      'La pulizia delle opere d’arte stesse, finché Lei non la autorizza espressamente.',
    ],
  },
  sections: [
    {
      title: 'Ciò che aiuta il rubinetto danneggia il marmo',
      paragraphs: [
        'Il bagno mostra perché conoscere i materiali è più che semplice prudenza. Contro il calcare sul rubinetto un grande produttore di rubinetteria raccomanda l’acido citrico. Sul lavabo in marmo accanto, proprio questo acido intacca la lucidatura, e la spugna da cucina con il lato verde abrasivo può graffiarla.',
        'Per questo da noi non esiste un prodotto buono per tutto. Durante il primo giro esaminiamo locale per locale quale pietra, quale legno e quali finiture sono presenti. La tabella più in basso riassume che cosa giova a ogni materiale e che cosa lo danneggia.',
      ],
    },
    {
      title: 'Abitazione secondaria e viaggi: tutto pronto al Suo arrivo',
      paragraphs: [
        'Una casa sul lago dei Quattro Cantoni o sul lago di Zugo resta spesso vuota per settimane. Prima del Suo arrivo puliamo, affinché arrivando non debba fare più nulla. Dopo la Sua partenza rimettiamo in ordine la casa.',
        'Nel frattempo passiamo a controllare con la frequenza che desidera. Decide Lei a che cosa prestiamo attenzione, per esempio se finestre e porte sono chiuse o se da qualche parte esce acqua. Ciò che notiamo viene comunicato alla persona che Lei indica: a Lei, alla Sua amministrazione o a una persona di fiducia.',
      ],
    },
    {
      title: 'Prima di una vendita, di un servizio fotografico o di una consegna',
      paragraphs: [
        'Agenti immobiliari e amministrazioni possono incaricarci a nome dei proprietari, anche con breve preavviso. Per le foto conta ciò che vede l’obiettivo: vetro, specchi, pavimenti lucidati e frontali della cucina mostrano ogni alone nella luce radente.',
        'Ci indichi la data del servizio fotografico o della prima visita, i locali che verranno mostrati e come accediamo alla casa. Quando la casa è sgomberata, la pulizia finale prima della consegna ai nuovi proprietari rientra nella nostra [pulizia di trasloco](/leistungen/umzugsreinigung).',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialkunde',
      title: 'Quale cura richiede ogni materiale',
      intro:
        'Le regole di base di associazioni di categoria e produttori per le superfici più frequenti nelle ville. Da stampare per tutte le persone che puliscono in casa Sua.',
      columns: ['Materiale', 'Come mantenerlo bello', 'Che cosa lo danneggia'],
      rows: [
        [
          'Marmo, calcare, travertino',
          'Prima togliere a secco sabbia e polvere. Poi un detergente neutro o un sapone per pietra, ripassare con acqua pulita e asciugare le superfici lucidate, altrimenti restano macchie d’acqua.',
          'Qualsiasi acido, anche aceto, limone e anticalcare: rende opaca la superficie. Prodotti abrasivi e spugne con lato verde o blu possono graffiare la lucidatura.',
        ],
        [
          'Granito, gneiss, quarzite',
          'Resistenti agli acidi. Secondo l’associazione svizzera della pietra naturale, qui si possono usare tutti i metodi di pulizia usuali.',
          'Confondere le pietre: se non è chiaro quale pietra sia stata posata, una prova in un punto nascosto mostra se è sensibile agli acidi.',
        ],
        [
          'Parquet verniciato o oliato',
          'Aspirare e di tanto in tanto passare un panno umido. Panni in microfibra solo se il produttore li approva. Il parquet oliato richiede un trattamento regolare secondo il suo sistema di cura.',
          'Pulizia con molta acqua, lavasciuga e apparecchi a vapore',
        ],
        [
          'Frontali laccati, da opachi a lucidi',
          'Un detergente domestico delicato sciolto in acqua calda, con panni morbidi in pelle o panni spugna. Poi asciugare con un panno morbido che non lascia pelucchi, sempre senza premere. Sulla lacca lucida bastano di solito pelle di daino e acqua calda.',
          'Panni in microfibra, stracci induriti e prodotti aggressivi: possono lasciare graffi permanenti.',
        ],
        [
          'Rubinetteria',
          'Mettere il prodotto su un panno morbido di cotone, non spruzzarlo direttamente. Un produttore raccomanda l’acido citrico contro il calcare.',
          'Aceto, acido acetico, formico, fosforico e cloridrico, candeggina al cloro, spugne abrasive, spazzole e microfibra',
        ],
      ],
      note:
        'Le istruzioni di cura dei Suoi produttori hanno sempre la precedenza. Se differiscono da questa tabella, ci atteniamo a esse.',
      sources: [
        nvs,
        { label: 'Natural Stone Institute: Care & Cleaning of Natural Stone (in inglese)', href: 'https://www.naturalstoneinstitute.org/consumers/care/' },
        { label: 'Associazione svizzera del parquet ISP: nozioni di base e istruzioni di cura (in tedesco)', href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen' },
        { label: 'Kurt Keller AG: indicazioni di cura per frontali, superfici e armadi (in tedesco)', href: 'https://www.kkag.ch/de/reinigung-und-pflege/pflegehinweise-fur-fronten-oberflachen-und-schranke/' },
        { label: 'hansgrohe: decalcificare e pulire la rubinetteria (in tedesco)', href: 'https://www.hansgrohe.de/bad/ratgeber/pflege-wartung/armaturen-entkalken' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'gemaelde-und-kunst',
      title: 'Dipinti e opere d’arte: dove finisce la pulizia',
      paragraphs: [
        'Le opere d’arte in sé le puliamo solo se Lei lo autorizza espressamente. Il motivo sta nelle raccomandazioni degli istituti di conservazione: anche una spolveratura sbagliata può danneggiare un dipinto in modo duraturo.',
      ],
      items: [
        'Panni per la polvere, asciutti o umidi, setole dure e piumini non vanno usati su un dipinto. I fili si impigliano nel colore in rilievo, setole e piume graffiano, l’umidità può staccare il colore.',
        'Il colore che si solleva o si sfalda non viene toccato. Le superfici pittoriche opache possono prendere macchie lucide permanenti anche solo passando un pennello.',
        'Pulire la superficie di un dipinto e riparare i danni è compito di una restauratrice o di un restauratore.',
        'Per la collocazione gli esperti consigliano: non sopra il camino, mai alla luce diretta del sole e con un’umidità relativa il più possibile costante tra il 40 e il 60 per cento.',
      ],
      note:
        'Trova specialisti in Svizzera nell’elenco dell’Associazione svizzera per la conservazione ed il restauro SCR.',
      sources: [
        { label: 'Smithsonian Museum Conservation Institute: Caring for Your Paintings (in inglese)', href: 'https://mci.si.edu/caring-your-paintings' },
        { label: 'Istituto canadese di conservazione: Basic care, Paintings (in inglese)', href: 'https://www.canada.ca/en/conservation-institute/services/care-objects/fine-art/basic-care-paintings.html' },
        { label: 'Associazione svizzera per la conservazione ed il restauro SCR', href: 'https://restaurierung.swiss/it' },
      ],
    },
    {
      kind: 'checklist',
      id: 'erster-rundgang',
      title: 'Prima del primo intervento: la lista per il giro della casa',
      intro:
        'Esaminiamo questi punti con Lei durante il primo giro. Stampata, la lista aiuta Lei, la Sua amministrazione o il Suo agente immobiliare a prepararsi.',
      groups: [
        {
          title: 'Locali e materiali',
          items: [
            'Quali locali vengono puliti e in quali non entra nessuno',
            'Quali pietre, legni e finiture sono stati posati, per quanto noto',
            'Istruzioni di cura del produttore, della falegnameria o dell’architettura d’interni',
            'Prodotti che preferisce o esclude',
          ],
        },
        {
          title: 'Arte e oggetti di valore',
          items: [
            'Se autorizza la pulizia di singole opere d’arte o oggetti d’antiquariato',
            'Vetrine, collezioni e armadi che restano chiusi',
            'Dove si trovano gli oggetti delicati, perché nessuno li urti durante la pulizia',
            'Indicazioni di cura di una galleria o di un restauratore, se disponibili',
          ],
        },
        {
          title: 'Chiavi, allarme e accesso',
          items: [
            'Come vengono consegnate e custodite le chiavi',
            'Chi inserisce e disinserisce l’impianto d’allarme, e come',
            'Chi è in casa quando arriva il team',
            'Se desidera un accordo di riservatezza',
          ],
        },
        {
          title: 'Orari e segnalazioni',
          items: [
            'Orari fissi, anche la sera o nel fine settimana',
            'Le date dei Suoi viaggi, affinché la casa sia pronta prima del Suo arrivo',
            'Con quale frequenza qualcuno passa durante la Sua assenza',
            'Chi viene informato di ciò che notiamo, e in che modo',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Regole per chiavi e allarme',
      text: 'Dopo la Sua accettazione dell’offerta concordiamo consegna e custodia delle chiavi, la gestione dell’impianto d’allarme e, se lo desidera, un accordo di riservatezza.',
    },
    {
      title: 'Primo intervento',
      text: 'Il team che da quel momento verrà da Lei lavora fin dal primo giorno secondo le indicazioni di cura raccolte durante il giro della casa.',
    },
    {
      title: 'Cura continuativa',
      text: 'Il team viene agli orari concordati e, durante la Sua assenza, anche per i giri di controllo. Se i Suoi piani cambiano, per esempio prima di un ricevimento o di un viaggio, adattiamo gli interventi.',
    },
  ],
  faq: [
    {
      question: 'Da che cosa dipende il prezzo per la cura di una villa?',
      answer:
        'Non esiste un forfait, perché le case sono molto diverse tra loro. Il lavoro necessario dipende soprattutto dalla superficie abitabile e dal numero di locali, dalla quota di superfici delicate come pietra naturale, lacca lucida e parquet oliato, e dal ritmo: ogni settimana, ogni mese o solo prima dei ricevimenti. A ciò si aggiungono prestazioni come i giri di controllo durante la Sua assenza. Il prezzo glielo indichiamo dopo il giro della casa, per la Sua casa in particolare.',
    },
    {
      question: 'Di che cosa avete bisogno da noi prima del primo intervento?',
      answer:
        'L’accesso alla casa, le regole per l’impianto d’allarme, le istruzioni di cura disponibili per pavimenti, pietra e cucina e una persona che viene informata di ciò che notiamo. La lista da stampare si trova più in alto, sotto «Prima del primo intervento».',
    },
    {
      question: 'Chi entra in casa nostra?',
      answer:
        'Un team fisso assegnato alla Sua casa, che conosce le regole per chiavi e allarme concordate con Lei. Tutte le persone del team sono state verificate da noi.',
    },
    {
      question: 'Possiamo indicare noi i prodotti di cura?',
      answer:
        'Sì. Se il produttore dei Suoi pavimenti, della Sua cucina o della Sua rubinetteria raccomanda determinati prodotti, lavoriamo con quelli. Sulla lista per il primo giro può annotare anche i prodotti che preferisce o esclude.',
    },
    {
      question: 'Pulite anche prima e dopo un ricevimento?',
      answer:
        'Sì, in aggiunta alla cura continuativa e anche nel fine settimana. Ci indichi la data, il numero approssimativo di ospiti e i locali utilizzati.',
    },
    {
      question: 'Come scopriamo quale pietra è stata posata nella nostra casa?',
      answer:
        'Nel modo più affidabile dai documenti di costruzione o dal fornitore della pietra che, secondo l’associazione svizzera della pietra naturale, sa indicare anche il metodo di pulizia adatto. Se mancano le indicazioni, una prova in un punto nascosto mostra se la pietra è sensibile agli acidi. Poiché la prova rende ruvido il punto, va affidata a una persona specializzata.',
    },
    {
      question: 'Perché il pavimento in pietra è più chiaro sotto il tappeto che nei punti di passaggio?',
      answer:
        'Fa parte della patina d’uso descritta dall’associazione svizzera della pietra naturale: i pori più fini si riempiono di polvere e alcune particelle di colore della pietra sbiadiscono. Sotto mobili e tappeti arrivano meno polvere e meno luce, perciò lì la pietra resta più chiara, mentre le zone molto calpestate diventano più scure. Nemmeno una pulizia a fondo elimina in genere del tutto questa patina. Se si pulisce a fondo solo una parte del pavimento, possono persino nascere nuove differenze di tonalità.',
    },
  ],
  related: [
    { path: '/premium/yacht', text: 'Se alla casa sul lago appartiene anche una barca: teak, gelcoat e imbottiture all’ormeggio.' },
    { path: '/leistungen/umzugsreinigung', text: 'In caso di trasloco o vendita: la pulizia finale prima della consegna, per le ville anche per i privati.' },
    { path: '/premium', text: 'Tutti i servizi premium, dall’abitazione secondaria al family office, in un’unica pagina.' },
  ],
  cta: {
    title: 'Concordare un giro della Sua casa',
    text: 'Per l’offerta ci servono il luogo, la superficie abitabile approssimativa e il numero di locali, i materiali particolari che conosce e se si tratta di cura continuativa, di un’abitazione secondaria o di un singolo evento. Facciamo il giro con Lei, con la Sua amministrazione o con il Suo agente immobiliare, su richiesta con riservatezza. Il giro della casa e l’offerta non Le costano nulla e non La impegnano a nulla.',
  },
}
