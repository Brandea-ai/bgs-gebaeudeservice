import type { ServicePageContent } from '../../types'

// Stessa struttura e stesse fonti di content/de/leistungen/facility-services.ts (E85).
// Testi di legge letti su fedlex.admin.ch il 28.09.2026 (CO, CC, OPI in italiano).
const co = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it'
const cc = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it'
const opi = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/it'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Facility services: pulizia, custodia e aree esterne da un unico fornitore',
  lead: [
    'Chi affida pulizia, custodia e manutenzione delle aree esterne a tre imprese gestisce tre contratti, ognuno con il proprio termine di disdetta. A questo si aggiungono le domande di mezzo: chi spazza le foglie all’ingresso, chi sostituisce la lampada del locale biciclette, chi rimette il sapone nei servizi?',
    'Con i facility services forniamo noi stessi queste prestazioni, in un unico contratto. Riscaldamento, ascensori e protezione antincendio restano in manutenzione presso le Sue ditte specializzate. I guasti che notiamo lì, li segnaliamo a Lei.',
  ],
  facts: [
    { label: 'Prestazioni', value: 'Pulizia, custodia, aree esterne e vetri, solo ciò che forniamo noi stessi' },
    { label: 'Non compreso', value: 'Manutenzione di riscaldamento, ventilazione e ascensori, riparazioni importanti' },
    { label: 'Contratto', value: 'Un contratto e un interlocutore per tutte le prestazioni' },
    { label: 'Inizio', value: 'Cominciare con una prestazione e aggiungerne altre alla scadenza dei vecchi contratti' },
  ],
  scope: {
    title: 'Che cosa si può riunire in un contratto',
    intro: 'Componiamo i facility services a partire dalle nostre prestazioni, adatte a ogni stabile e a ogni sede:',
    items: [
      '[Pulizia di manutenzione](/leistungen/unterhaltsreinigung) di vani scala, parti comuni e superfici commerciali, con servizio di rifornimento',
      '[Pulizia di uffici e studi](/leistungen/bueroreinigung) in orari compatibili con i Suoi orari di apertura',
      '[Custodia di stabili](/leistungen/hauswartung) con giri di controllo, piccole riparazioni e smaltimento dei rifiuti',
      '[Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege): prati, siepi, aiuole, vialetti e piazzali',
      '[Pulizia di vetri e facciate](/leistungen/fenster-und-fassadenreinigung) con la frequenza concordata',
      '[Pulizie a fondo e speciali](/leistungen/sonderreinigungen) quando pavimenti o locali richiedono più della pulizia corrente',
      '[Pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung) al cambio di inquilini',
      '[Pulizia industriale e di capannoni](/leistungen/industrie-und-hallenreinigung) per capannoni, magazzini e aree di produzione',
    ],
    notIncluded: [
      'Il facility management tecnico: manutenzione e controllo di riscaldamento, ventilazione, ascensori e impianti antincendio.',
      'Il facility management commerciale, come gestione delle locazioni, contabilità o conteggio delle spese accessorie.',
      'Riparazioni importanti e lavori artigianali, compresa l’intermediazione di artigiani.',
      'Un servizio di emergenza e di picchetto 24 ore su 24, per esempio per un danno d’acqua di notte.',
      'Il servizio invernale, nemmeno come parte di un contratto comune.',
    ],
  },
  sections: [
    {
      title: 'Quando conviene un solo contratto per tutto',
      paragraphs: [
        'Un’amministrazione immobiliare gestisce più stabili e non vuole coordinare tre imprese per ogni edificio. Un’azienda ha uffici, un magazzino e un parcheggio e cerca un unico interlocutore per tutto. Una comunione di comproprietari perde il suo custode e vuole regolare nello stesso momento anche pulizia e aree esterne.',
        'Se Le serve una sola prestazione, la sua pagina è il punto di partenza migliore, per esempio la [pulizia di manutenzione](/leistungen/unterhaltsreinigung). Un contratto comune diventa sensato non appena due o più prestazioni si incontrano nello stesso stabile.',
      ],
    },
    {
      title: 'All’ingresso si incontrano tre incarichi',
      paragraphs: [
        'Foglie sul piazzale, impronte sulla porta a vetri, una lampada che lampeggia sopra l’ingresso. Con contratti separati, ciascuno di questi punti spetta a un’altra impresa. Ogni limite deve allora figurare in un contratto, altrimenti qualcosa resta indietro o viene fatto due volte.',
        'In un contratto comune ogni prestazione figura con estensione e frequenza, e tutti gli interventi arrivano dalla stessa impresa. Chi cura il piazzale vede anche la lampada e la segnala.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'I punti di contatto che un contratto dovrebbe regolare',
      intro:
        'In questi punti pulizia, custodia e manutenzione delle aree esterne si toccano. Che incarichi una o più imprese: la colonna di destra va nel contratto o nel capitolato.',
      columns: ['Punto', 'Che cosa vi si incontra', 'Da fissare nel contratto'],
      rows: [
        ['Ingresso e piazzale', 'Foglie e sporco dall’esterno, zerbini, vetro della porta d’ingresso, bucalettere', 'Chi spazza il piazzale, chi pulisce zerbini e vetri, con quale frequenza'],
        ['Vano scala e ascensore', 'Pavimenti, corrimano, cabina dell’ascensore, illuminazione', 'Se la cabina viene pulita insieme al vano scala, a chi segnalare i guasti dell’ascensore'],
        ['Cantina, lavanderia, locale asciugatoio', 'Pulizia, ordine, apparecchi usati dagli inquilini', 'Chi segnala una lavatrice guasta, e a chi'],
        ['Locale rifiuti e piazzola dei contenitori', 'Pulizia, contenitori nel giorno di raccolta, materiali riciclabili', 'Chi porta fuori i contenitori e li ritira, chi pulisce la piazzola'],
        ['Autorimessa sotterranea e locale biciclette', 'Spazzatura, illuminazione, porte e portoni', 'Frequenza della pulizia, chi segnala un portone che non si chiude più'],
        ['Servizi e cucinette in azienda', 'Pulizia e materiale di consumo', 'Chi fornisce sapone, carta e sacchi per i rifiuti, chi li rifornisce'],
        ['Dopo lavori di artigiani', 'Polvere e sporco nel vano scala e nell’ascensore', 'Chi pulisce dopo, e su quale budget'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Chi fa che cosa in un contratto comune',
      intro:
        'Un solo contratto per tutto non significa che tutto dipende da noi. La tabella mostra che cosa eseguiamo noi e che cosa resta all’amministrazione o ai proprietari.',
      columns: ['Compito', 'Noi', 'Amministrazione o proprietari'],
      rows: [
        ['Pulizia interna e vetri', 'pulire secondo contratto, con la frequenza concordata', 'definire l’estensione, annunciare l’accesso ad appartamenti o uffici'],
        ['Giri di controllo', 'controllare parti comuni, cantine e aree esterne, segnalare i difetti', 'ricevere le segnalazioni, decidere, conferire gli incarichi'],
        ['Piccole riparazioni, per esempio lampadine', 'eseguirle noi fino al limite concordato', 'fissare il limite, affidare le riparazioni importanti ad artigiani'],
        ['Riscaldamento, ventilazione, ascensori, antincendio', 'segnalare i guasti che notiamo', 'gestire i contratti di manutenzione con le ditte specializzate e incaricarle'],
        ['Aree esterne e verdi', 'curarle secondo il piano di manutenzione', 'approvare il piano di manutenzione'],
        ['Materiale di consumo', 'rifornire dove il servizio è concordato', 'decidere chi fornisce il materiale'],
        ['Smaltimento dei rifiuti', 'organizzare rifiuti e materiali riciclabili, tenere pulita la piazzola', 'stabilire la piazzola e il numero di contenitori'],
      ],
      note:
        'Secondo l’art. 58 CO il proprietario di un edificio risponde dei danni cagionati da difetto di manutenzione, anche se ha affidato dei compiti ad altri. Per questo il contratto deve indicare a chi si segnalano i difetti e chi decide.',
      sources: [{ label: 'Codice delle obbligazioni, art. 58 (responsabilità del proprietario d’opere)', href: `${co}#art_58` }],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'wechsel',
      title: 'Lista di controllo: da più imprese a un solo contratto',
      intro:
        'Il passaggio riesce meglio un passo alla volta, seguendo i termini dei contratti in corso. I punti da spuntare:',
      groups: [
        {
          title: 'Contratti in corso e decisione',
          items: [
            'Raccogliere tutti i contratti per pulizia, custodia, aree esterne e vetri',
            'Annotare per ogni contratto il termine di disdetta e la prossima scadenza possibile',
            'Se il custode è Suo dipendente, vale il diritto del lavoro: salvo diversa regola nel contratto di lavoro, in un contratto normale o collettivo, un mese nel primo anno di servizio, due mesi dal secondo al nono, poi tre mesi, sempre per la fine di un mese (art. 335c CO)',
            'Proprietà per piani: verificare se l’amministratore può concludere il contratto o se decide l’assemblea dei comproprietari. Fanno stato regolamento, contratto di amministrazione e decisioni (art. 712m e 712s CC)',
          ],
        },
        {
          title: 'Attribuire correttamente i costi',
          items: [
            'Chiedere a ogni fornitore i costi per stabile e per prestazione, per poterli attribuire correttamente in seguito',
            'Stabili locati: le spese accessorie sono a carico degli inquilini solo se il contratto di locazione lo prevede specialmente, e solo per i costi effettivi (art. 257a e 257b CO)',
            'Proprietà per piani: far indicare separatamente i costi delle parti che non servono a tutte le unità, per esempio un’autorimessa sotterranea. Il CC chiede di tenerne conto nella ripartizione delle spese (art. 712h cpv. 3 CC)',
          ],
        },
        {
          title: 'Prima dell’inizio',
          items: [
            'Far iniziare ogni prestazione alla scadenza del relativo contratto attuale',
            'Ritirare ed elencare chiavi, badge e codici delle imprese precedenti',
            'Confermare alle imprese precedenti l’ultimo intervento e la restituzione',
            'Aziende: informare il nuovo fornitore sui pericoli in azienda e sulle misure di protezione. Se più aziende lavorano nello stesso luogo, i datori di lavoro si accordano (art. 6 e 9 OPI)',
          ],
        },
        {
          title: 'Segnalazioni e informazione',
          items: [
            'Fissare la via delle segnalazioni: chi le riceve e fino a quale importo si ripara senza chiedere',
            'Informare inquilini o collaboratori su chi è responsabile da quale data',
            'Aggiornare l’avviso all’ingresso e i recapiti per le segnalazioni',
          ],
        },
      ],
      note: 'Queste indicazioni non sostituiscono una consulenza legale. Verifichi termini e competenze caso per caso, in base ai Suoi contratti e al regolamento.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 335c (termini di disdetta nel rapporto di lavoro)', href: `${co}#art_335_c` },
        { label: 'Codice delle obbligazioni, art. 257a e 257b (spese accessorie)', href: `${co}#art_257_a` },
        { label: 'Codice civile, art. 712h (spese nella proprietà per piani)', href: `${cc}#art_712_h` },
        { label: 'Codice civile, art. 712m e 712s (assemblea e amministratore)', href: `${cc}#art_712_m` },
        { label: 'Ordinanza sulla prevenzione degli infortuni (OPI), art. 6 e 9', href: `${opi}#art_9` },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Un contratto per tutte le prestazioni',
      text: 'Nel contratto figura ogni prestazione con estensione, frequenza e orari d’intervento, insieme alla persona a cui segnaliamo difetti e guasti.',
      figure: 'offerte',
    },
    {
      title: 'Consegna sul posto',
      text: 'All’inizio riceviamo chiavi, badge e codici per i locali concordati. Lei ci mostra il locale del materiale, la piazzola dei rifiuti e i locali tecnici per i giri di controllo.',
      figure: 'besichtigung',
    },
    {
      title: 'Inizio prestazione per prestazione',
      text: 'Ogni prestazione inizia alla scadenza del contratto precedente. Se un contratto dura più a lungo, quella prestazione resta fino ad allora all’impresa attuale.',
      figure: 'start',
    },
    {
      title: 'Modifiche in un solo punto',
      text: 'Si aggiunge uno stabile, cambia una frequenza o una prestazione viene meno: lo segnali al Suo interlocutore da noi. Si adegua l’unico contratto.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Che differenza c’è tra facility services e facility management?',
      answer:
        'Il facility management comprende spesso anche la gestione degli impianti tecnici e l’amministrazione commerciale. I nostri facility services riuniscono le prestazioni che forniamo noi stessi: pulizia, custodia, manutenzione delle aree esterne e vetri. Gli impianti li mantengono le Sue ditte specializzate, l’amministrazione resta a Lei.',
    },
    {
      question: 'Come si passa da più imprese a una sola?',
      answer:
        'Un passo alla volta. Ogni prestazione passa a noi alla scadenza del contratto precedente. Può quindi cominciare con una prestazione e aggiungere le altre più tardi. Quali termini valgono e che cosa sistemare prima dell’inizio è indicato nella lista di controllo di questa pagina.',
    },
    {
      question: 'Da che cosa dipende il costo dei facility services?',
      answer:
        'Il prezzo si compone delle singole prestazioni. Dipende dal numero e dalla grandezza degli stabili o delle sedi, dalle superfici per prestazione, dalla frequenza di pulizia e giri di controllo, dall’estensione delle aree esterne, dagli orari d’intervento, da chi fornisce il materiale di consumo e dai tragitti tra gli stabili. Un prezzo standard quindi non esiste. Il prezzo per i Suoi stabili lo riceve per iscritto dopo il sopralluogo.',
    },
    {
      question: 'Che cosa resta a noi come amministrazione o proprietari?',
      answer:
        'Le decisioni: quali prestazioni, quale budget, quale ditta specializzata per riscaldamento, ascensore o riparazioni. Anche la responsabilità per la manutenzione dell’edificio resta al proprietario. Le nostre segnalazioni aiutano a vedere presto i difetti. Che cosa succede poi, lo decide Lei.',
    },
    {
      question: 'Non basterebbe la custodia di stabili?',
      answer:
        'La [custodia di stabili](/leistungen/hauswartung) copre giri di controllo, vano scala, lavanderia, piccole riparazioni e smaltimento dei rifiuti. Se si aggiungono pulizia di uffici, pulizia dei vetri o la cura di aree verdi più grandi, un contratto comune è la scelta migliore.',
    },
    {
      question: 'Più stabili o sedi possono rientrare in un solo contratto?',
      answer:
        'Sì. È utile indicare per ogni stabile quali prestazioni ne fanno parte, con quale frequenza, e chi riceve le segnalazioni sul posto. Così i costi si possono attribuire a ogni stabile, cosa importante per le spese accessorie e la proprietà per piani.',
    },
    {
      question: 'Che cosa dobbiamo regolare come azienda sulla sicurezza sul lavoro?',
      answer:
        'Se lavoratori di un’altra azienda operano presso di Lei, deve informarli sui pericoli e sulle misure di protezione in azienda. Se più aziende lavorano nello stesso luogo, i datori di lavoro si accordano. Lo chiede l’ordinanza sulla prevenzione degli infortuni (art. 6 e 9 OPI). Con un solo fornitore per pulizia, custodia e aree esterne, questo accordo si prende una volta invece di tre.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Quando servono soprattutto giri di controllo, vano scala, lavanderia e smaltimento e la pulizia è già affidata.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Quando vuole riassegnare prima solo la pulizia regolare di vani scala e parti comuni.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Quando si riassegnano solo le aree esterne, per esempio perché il giardiniere attuale smette.' },
  ],
  cta: {
    title: 'Un’offerta per i facility services',
    text: 'Per l’offerta ci servono gli indirizzi degli stabili o delle sedi, le prestazioni che desidera affidare e la scadenza dei contratti attuali. Poi visitiamo gli stabili insieme a Lei, gratuitamente e senza impegno.',
  },
}
