import type { ServicePageContent } from '../../types'

// Stessa struttura e stesse fonti di content/de/leistungen/facility-services.ts (E85).
// Testi di legge letti su fedlex.admin.ch il 28.09.2026 (CO art. 58, 257a, 257b, 335c, 336c;
// CC art. 712h, 712m, 712s; OPI art. 6, 9, in italiano). Rilievi dei revisori FS-R1 a FS-08
// integrati il 28.09.2026.
const co = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/it'
const cc = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/it'
const opi = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/it'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Facility services: pulizia, custodia e aree esterne da un unico fornitore',
  lead: [
    'Chi affida pulizia, custodia e manutenzione delle aree esterne a tre imprese gestisce tre contratti, ognuno con il proprio termine di disdetta. A questo si aggiungono le questioni al confine tra gli incarichi: chi spazza le foglie all’ingresso, chi sostituisce la lampadina del locale biciclette, chi rimette il sapone nei servizi?',
    'Con i facility services forniamo noi stessi queste prestazioni, in un unico contratto. Della manutenzione di riscaldamento, ascensori e protezione antincendio continuano a occuparsi le Sue ditte specializzate. Le segnaliamo i guasti che notiamo.',
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
        'Con un contratto comune, tutti gli interventi arrivano dalla stessa impresa. Chi cura il piazzale nota anche la lampada che lampeggia, e la custodia sostituisce la lampadina nell’ambito dello stesso contratto.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'I punti di contatto che un contratto dovrebbe regolare',
      intro:
        'In questi punti pulizia, custodia e manutenzione delle aree esterne si toccano. Che incarichi una o più imprese, chiarisca i punti «Da fissare nel contratto» prima del primo intervento, idealmente nel capitolato.',
      columns: ['Punto', 'Che cosa vi si incontra', 'Da fissare nel contratto'],
      rows: [
        ['Ingresso e piazzale', 'Foglie e sporco dall’esterno, zerbini, vetro della porta d’ingresso, bucalettere', 'Chi spazza il piazzale, chi pulisce zerbini e vetri, con quale frequenza'],
        ['Vano scala e ascensore', 'Pavimenti, corrimano, finestre, cabina dell’ascensore', 'Se la cabina, con specchio e binari delle porte, rientra nella pulizia del vano scala, chi pulisce le finestre del vano scala dentro e fuori'],
        ['Lavanderia e locale asciugatoio', 'Pulizia del locale, apparecchi comuni, regolamento della casa', 'Che cosa copre la pulizia e che cosa resta agli inquilini secondo il regolamento della casa, per esempio il filtro della lanugine'],
        ['Autorimessa sotterranea e locale biciclette', 'Pavimento, illuminazione, porte e portoni', 'Con quale frequenza si spazza, se è compresa una pulizia a umido, se porte e illuminazione rientrano nei giri di controllo'],
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
        'Un solo contratto per tutto non significa che tutto dipende da noi.',
      columns: ['Compito', 'Noi', 'Amministrazione o proprietari'],
      rows: [
        ['Pulizia interna e vetri', 'pulire con la frequenza concordata', 'definire estensione e accesso ad appartamenti o uffici'],
        ['Giri di controllo', 'controllare parti comuni e aree esterne, segnalare i difetti', 'ricevere le segnalazioni, decidere, conferire gli incarichi'],
        ['Piccole riparazioni, per esempio lampadine', 'eseguirle fino al limite concordato', 'fissare il limite, affidare le riparazioni importanti'],
        ['Riscaldamento, ventilazione, ascensori, antincendio', 'segnalare i guasti che notiamo', 'farli mantenere e riparare da ditte specializzate'],
        ['Cura delle aree esterne', 'secondo il piano di manutenzione', 'approvare il piano di manutenzione'],
        ['Materiale di consumo', 'rifornire dove concordato', 'decidere chi lo fornisce'],
        ['Smaltimento dei rifiuti', 'organizzarlo, tenere pulita la piazzola', 'stabilire piazzola e numero di contenitori'],
      ],
      note:
        'Il CO prevede che il proprietario di un edificio risponda dei danni cagionati da difetto di manutenzione, con riserva del regresso verso altre persone che ne sono responsabili in suo confronto (art. 58 CO). Per questo il contratto dovrebbe indicare chi assume quale compito, a chi si segnalano i difetti e chi decide.',
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
          title: 'Contratti in corso',
          items: [
            'Raccogliere tutti i contratti per pulizia, custodia, aree esterne e vetri',
            'Annotare per ogni contratto il termine di disdetta, la prossima scadenza possibile e se si rinnova tacitamente',
            'Custode dipendente: dopo il tempo di prova, preavviso di un mese nel primo anno di servizio, di due mesi dal secondo al nono, poi di tre mesi, sempre per la fine di un mese. Altri termini valgono solo per accordo scritto, contratto normale o collettivo (art. 335c CO). I periodi di protezione, per esempio in caso di malattia o infortunio, possono prolungare il termine (art. 336c CO)',
          ],
        },
        {
          title: 'Attribuire correttamente i costi',
          items: [
            'Chiedere a ogni fornitore i costi per stabile e per prestazione, per poterli attribuire correttamente in seguito',
            'Stabili locati: le spese accessorie sono a carico degli inquilini solo se il contratto di locazione lo prevede specialmente, e solo per i costi effettivi (art. 257a e 257b CO)',
            'Proprietà per piani: far indicare separatamente i costi delle parti che non servono o servono minimamente a talune unità, per esempio un’autorimessa sotterranea. Secondo il CC se ne deve tenere conto nella ripartizione delle spese (art. 712h cpv. 3 CC)',
          ],
        },
        {
          title: 'Prima dell’inizio',
          items: [
            'Proprietà per piani: verificare se l’amministratore può concludere il contratto. Agisce secondo la legge, il regolamento e le decisioni dell’assemblea, che decide gli altri affari amministrativi (art. 712s cpv. 1 e 712m cpv. 1 n. 1 CC). Verificare anche il contratto di amministrazione',
            'Ritirare ed elencare chiavi, badge e codici delle imprese precedenti',
            'Confermare alle imprese precedenti l’ultimo intervento e la restituzione',
          ],
        },
        {
          title: 'Segnalazioni e informazione',
          items: [
            'Fissare la via delle segnalazioni: chi le riceve e fino a quale importo si ripara senza chiedere',
            'Informare inquilini o collaboratori su chi è responsabile da quale data',
            'Aggiornare l’avviso all’ingresso e i recapiti per le segnalazioni',
            'Aziende: prima del primo intervento, esaminare con il nuovo fornitore i pericoli in azienda e le misure di sicurezza (art. 6 e 9 OPI)',
          ],
        },
      ],
      note: 'Queste indicazioni non sostituiscono una consulenza legale. Verifichi termini e competenze caso per caso, in base ai Suoi contratti e al regolamento.',
      sources: [
        { label: 'Codice delle obbligazioni, art. 335c (termini di disdetta nel rapporto di lavoro)', href: `${co}#art_335_c` },
        { label: 'Codice delle obbligazioni, art. 336c (disdetta in tempo inopportuno da parte del datore di lavoro)', href: `${co}#art_336_c` },
        { label: 'Codice delle obbligazioni, art. 257a e 257b (spese accessorie)', href: `${co}#art_257_a` },
        { label: 'Codice civile, art. 712h (spese nella proprietà per piani)', href: `${cc}#art_712_h` },
        { label: 'Codice civile, art. 712m (competenze dell’assemblea)', href: `${cc}#art_712_m` },
        { label: 'Codice civile, art. 712s (compiti dell’amministratore)', href: `${cc}#art_712_s` },
        { label: 'Ordinanza sulla prevenzione degli infortuni (OPI), art. 6 (informazione dei lavoratori)', href: `${opi}#art_6` },
        { label: 'Ordinanza sulla prevenzione degli infortuni (OPI), art. 9 (cooperazione di più aziende)', href: `${opi}#art_9` },
      ],
      printable: true,
      updated: '2026-09-29',
    },
  ],
  steps: [
    {
      title: 'Un contratto per tutte le prestazioni',
      text: 'Nel contratto figura ogni prestazione con estensione, frequenza e orari d’intervento.',
    },
    {
      title: 'Consegna all’inizio',
      text: 'All’inizio ci consegna chiavi, badge e codici e ci mostra il locale del materiale, la piazzola dei rifiuti e i locali tecnici. Se un contratto attuale dura più a lungo, quella prestazione resta all’impresa attuale fino alla sua scadenza.',
    },
    {
      title: 'Modifiche in un solo punto',
      text: 'Si aggiunge uno stabile, cambia una frequenza o una prestazione viene meno: lo segnali al Suo interlocutore da noi. Si adegua quell’unico contratto.',
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
        'Prima affidare il nuovo contratto, poi disdire. Chi disdice prima i contratti attuali rischia un vuoto se la conclusione del nuovo contratto tarda. La lista di controllo qui sopra riprende termini, costi e consegna punto per punto.',
    },
    {
      question: 'Da che cosa dipende il costo dei facility services?',
      answer:
        'Il prezzo si compone delle singole prestazioni. Dipende dal numero e dalla grandezza degli stabili o delle sedi, dalle superfici per prestazione, dalla frequenza di pulizia e giri di controllo, dall’estensione delle aree esterne, dagli orari d’intervento, da chi fornisce il materiale di consumo e dai tragitti tra gli stabili. Un prezzo standard quindi non esiste. Il prezzo per i Suoi stabili lo riceve per iscritto dopo il sopralluogo.',
    },
    {
      question: 'Non basterebbe la custodia di stabili?',
      answer:
        'La [custodia di stabili](/leistungen/hauswartung) copre giri di controllo, vano scala, lavanderia, piccole riparazioni e smaltimento dei rifiuti. Se si aggiungono pulizia di uffici, pulizia dei vetri o la cura di aree verdi più grandi, un contratto comune è la scelta migliore.',
    },
    {
      question: 'Più stabili o sedi possono rientrare in un solo contratto?',
      answer:
        'Sì. Prestazioni, frequenza e orari d’intervento si possono fissare per ogni stabile o sede. Uno stabile abitativo ha esigenze diverse da un edificio per uffici o da un magazzino, per esempio la pulizia del vano scala al mattino e quella degli uffici la sera dopo l’orario di lavoro.',
    },
    {
      question: 'Che cosa dobbiamo regolare come azienda sulla sicurezza sul lavoro?',
      answer:
        'L’ordinanza sulla prevenzione degli infortuni prevede che Lei informi e istruisca anche i lavoratori di altre aziende che operano presso di Lei sui pericoli e sui provvedimenti di sicurezza sul lavoro (art. 6 OPI). Se su un posto di lavoro operano lavoratori di più aziende, i rispettivi datori di lavoro concordano i provvedimenti necessari (art. 9 OPI). Con un solo fornitore per pulizia, custodia e aree esterne, questo accordo si prende una volta invece di tre.',
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
