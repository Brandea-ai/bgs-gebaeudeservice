import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Cura degli stabili',
  h1: 'Custodia di stabili abitativi e per uffici',
  lead: [
    'Uno stabile ha bisogno di più della sola pulizia: qualcuno deve controllare regolarmente che tutto sia in ordine, riparare piccoli danni, organizzare lo smaltimento ed essere presente alle consegne e riconsegne degli appartamenti. Questo è il compito del servizio di custodia.',
    'Per amministrazioni immobiliari, proprietari e comunioni dei proprietari per piani che non possono o non vogliono controllare di persona. Quali compiti svolgiamo, con quale frequenza siamo sul posto e a chi segnaliamo i difetti lo stabiliamo per iscritto.',
  ],
  facts: [
    { label: 'Per', value: 'Amministrazioni immobiliari, proprietari e comunioni dei proprietari per piani' },
    { label: 'Immobili', value: 'Stabili abitativi e commerciali' },
    { label: 'Prestazioni', value: 'Compiti secondo le esigenze, stabiliti per iscritto' },
  ],
  scope: {
    title: 'Che cosa comprende il servizio di custodia',
    intro: 'Con questi compiti componiamo il servizio di custodia per il Suo stabile:',
    items: [
      'Giri di controllo: verificare regolarmente che tutto sia in ordine e segnalare i difetti',
      'Vano scale: pulire e mantenere in ordine',
      'Mantenere puliti lavanderia e locali di asciugatura',
      'Piccole riparazioni, ad esempio sostituire lampadine',
      'Tenere d’occhio l’impiantistica dell’edificio e segnalare i guasti',
      'Collaborare alle consegne e riconsegne degli appartamenti',
      'Organizzare lo smaltimento di rifiuti e materiali riciclabili',
      'Manutenzione delle aree esterne, maggiori informazioni alla pagina [Manutenzione delle aree esterne e verdi](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Non offriamo il servizio invernale.',
      'Servizio di picchetto e d’emergenza 24 ore su 24.',
      'Riparazioni più importanti e lavori artigianali.',
    ],
  },
  sections: [
    {
      title: 'Immobili e situazioni tipiche',
      paragraphs: [
        'Case plurifamiliari e complessi residenziali, proprietà per piani, stabili abitativi e commerciali con negozi o uffici al pianterreno. Ovunque serve qualcuno che passi regolarmente, mantenga in ordine la lavanderia e si accorga quando qualcosa non va.',
        'Spesso la richiesta arriva quando il custode precedente smette, quando un’amministrazione immobiliare assume un nuovo stabile o quando in una comunione dei proprietari per piani nessuno vuole più occuparsi dei compiti.',
      ],
    },
    {
      title: 'Che cosa succede durante il giro di controllo',
      paragraphs: [
        'Durante il giro di controllo verifichiamo che tutto sia in ordine, con la frequenza concordata con Lei. Ciò che possiamo sistemare noi, ad esempio sostituire una lampadina, lo facciamo. Tutto il resto lo segnaliamo al servizio che abbiamo stabilito con Lei.',
      ],
      items: [
        'Illuminazione nel vano scale, in cantina e nelle aree esterne',
        'Porte, serrature e impianto bucalettere',
        'Lavanderia, locali di asciugatura e cantina',
        'Locale caldaia e impiantistica, per verificare guasti visibili',
        'Area rifiuti e aree esterne',
      ],
    },
    {
      title: 'Uno sguardo sull’impiantistica',
      paragraphs: [
        'Custodia non significa manutenzione degli impianti. Riscaldamento, ventilazione, ascensore e protezione antincendio li mantengono imprese specializzate. Il servizio di custodia controlla regolarmente, nota presto i guasti e li segnala, ad esempio un messaggio di errore sul riscaldamento, un rubinetto che gocciola in lavanderia o un ascensore che non si ferma correttamente.',
      ],
    },
    {
      title: 'Consegne e riconsegne degli appartamenti',
      paragraphs: [
        'Come collaboriamo alle consegne e riconsegne degli appartamenti lo stabiliamo con l’amministrazione, ad esempio se apriamo l’appartamento, consegniamo le chiavi o annotiamo le letture dei contatori. Riconsegna e verbale restano di competenza dell’amministrazione.',
        'Se prima della riconsegna l’appartamento necessita di una pulizia finale, c’è la [pulizia di fine locazione con garanzia di consegna](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Collaborazione con amministrazione e proprietà',
      paragraphs: [
        'Un buon servizio di custodia vive di accordi chiari: quali compiti, con quale frequenza, chi riceve le segnalazioni e quali piccoli lavori si possono eseguire senza chiedere. Lo stabiliamo per iscritto.',
        'Anche gli inquilini dovrebbero sapere a chi rivolgersi. Chi è l’interlocutore per loro lo stabiliamo insieme a Lei.',
      ],
    },
    {
      title: 'Capitolato per la custodia di stabili: che cosa deve contenere',
      paragraphs: [
        'Un capitolato stabilisce che cosa svolge il servizio di custodia in uno stabile, con quale frequenza e chi è responsabile di che cosa. Crea chiarezza per amministrazione, proprietà, inquilini e custode e rende confrontabili le offerte.',
        'Da noi questo elenco nasce dopo la visita dello stabile: mettiamo per iscritto quali compiti assumiamo, quanto spesso siamo sul posto e a chi segnaliamo i difetti. Questi punti vanno inseriti in un capitolato:',
      ],
      items: [
        'Compiti e ritmo per ogni area: vano scala, ingresso, lavanderia e locali di asciugatura, cantina e area rifiuti, ciascuno con attività e frequenza',
        'Giri di controllo: con quale frequenza, quali locali e impianti comprendono e come si annota ciò che si nota',
        'Aree esterne: quali superfici vengono curate, ad esempio prati, siepi, aiuole, vialetti e piazzali',
        'Responsabilità e canali di segnalazione: chi riceve le segnalazioni del custode, quali piccoli lavori si possono svolgere senza chiedere e a chi si rivolgono gli inquilini',
        'Chiavi e accesso: quali chiavi, badge e codici riceve il custode e come vengono custoditi',
        'Materiale: chi fornisce prodotti di pulizia, materiale di consumo e attrezzature e dove vengono depositati',
        'Limiti rispetto agli artigiani: quali lavori spettano a ditte specializzate, ad esempio riparazioni più importanti e la manutenzione di riscaldamento, ascensore e protezione antincendio, e chi le incarica',
      ],
    },
  ],
  steps: [
    {
      title: 'Stabilire i compiti',
      text: 'Stabiliamo quali compiti svolgiamo, con quale frequenza siamo sul posto e a chi segnaliamo i difetti.',
    },
    {
      title: 'Inizio',
      text: 'Iniziamo alla data concordata. Se in seguito lo stabile ha bisogno di più o di meno, adeguiamo con Lei i compiti.',
    },
  ],
  faq: [
    {
      question: 'Quali compiti svolge un servizio di custodia?',
      answer:
        'Di solito giri di controllo, la pulizia di vano scala, lavanderia e locali di asciugatura, piccole riparazioni, uno sguardo sull’impiantistica, lo smaltimento dei rifiuti, la collaborazione alle consegne degli appartamenti e la cura delle aree esterne. Quali compiti assumiamo nel Suo stabile e con quale frequenza lo stabiliamo con Lei per iscritto, come in un capitolato.',
    },
    {
      question: 'Qual è la differenza rispetto alla pulizia di manutenzione?',
      answer:
        'La pulizia di manutenzione si svolge con una cadenza fissa. Il servizio di custodia va oltre: giri di controllo, piccole riparazioni, impiantistica, smaltimento, consegne e riconsegne degli appartamenti e manutenzione delle aree esterne. Chi ha bisogno solo della pulizia trova la soluzione giusta nella [pulizia di manutenzione](/leistungen/unterhaltsreinigung).',
    },
    {
      question: 'Eseguite anche riparazioni più importanti?',
      answer:
        'No, eseguiamo piccole riparazioni. Per lavori più importanti serve un’impresa specializzata. Le segnaliamo i danni che constatiamo durante i giri di controllo.',
    },
    {
      question: 'Offrite un servizio invernale o un servizio di picchetto?',
      answer: 'No. Il servizio invernale e il servizio di picchetto non fanno parte della nostra offerta.',
    },
    {
      question: 'Possiamo scegliere singoli compiti?',
      answer: 'Sì. Componiamo il servizio di custodia con i compiti di cui il Suo stabile ha bisogno.',
    },
    {
      question: 'Con quale frequenza passa il servizio di custodia?',
      answer:
        'Dipende da grandezza, età e utilizzo dello stabile. Con quale frequenza siamo sul posto lo stabiliamo per iscritto insieme agli altri compiti.',
    },
    { question: 'Siete assicurati?', answer: answers.versicherung },
    { question: 'Quanto costa il servizio di custodia?', answer: answers.kosten },
    { question: 'In quali regioni operate?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Per le aree esterne e le aree verdi dello stabile.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Se si desidera affidare solo la pulizia.' },
    { path: '/leistungen/facility-services', text: 'Se pulizia, custodia e aree esterne devono rientrare in un unico contratto.' },
  ],
  cta: {
    title: 'Offerta per il Suo stabile',
    text: 'Ci indichi lo stabile, il numero di appartamenti o le superfici e i compiti che desidera affidarci. Visitiamo lo stabile e Le allestiamo un’offerta, gratuita e senza impegno.',
  },
}
