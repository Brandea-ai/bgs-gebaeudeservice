import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3a (Baureinigung), R3b (Bauendreinigung), R10b, E17
export const baureinigung: ServicePageContent = {
  path: '/leistungen/baureinigung',
  area: 'leistungen',
  eyebrow: 'Einmalige und besondere Reinigung',
  h1: 'Bau- und Bauendreinigung für Neubau und Umbau',
  lead: [
    'Nach Bau- und Umbauarbeiten liegen Staub, Mörtelreste und Schutzfolien überall. Bevor Mieter, Käuferinnen oder Ihr Team einziehen, muss alles bezugsbereit sein, oft auf einen festen Übergabetermin.',
    'Wir reinigen während und nach den Arbeiten, bis die Räume übergeben werden können. Für Bauherrschaften, Architekturbüros, Generalunternehmen und Verwaltungen.',
  ],
  facts: [
    { label: 'Für', value: 'Bauherrschaften, Architekturbüros, Generalunternehmen und Verwaltungen' },
    { label: 'Objekte', value: 'Neubauten, Umbauten und Renovationen' },
    { label: 'Zeitpunkt', value: 'Während der Bauphase und vor der Übergabe' },
  ],
  scope: {
    title: 'Was dazugehört',
    intro:
      'Eine Baureinigung läuft meist in Etappen, abgestimmt auf den Baufortschritt. Welche Etappen wir übernehmen, legen wir mit Ihnen fest.',
    items: [
      'Grobreinigung während der Bauphase',
      'Zwischenreinigungen, etwa vor dem Innenausbau',
      'Bauendreinigung vor der Übergabe',
      'Fenster, Rahmen und Glas von Staub und Rückständen befreien',
      'Klebereste und Schutzfolien entfernen',
      'Böden, Sanitärräume, Küchen und Einbauschränke bezugsbereit reinigen',
    ],
    notIncluded: [
      'Laufende Reinigung nach dem Bezug: siehe [Unterhaltsreinigung](/leistungen/unterhaltsreinigung).',
      'Fassaden: siehe [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Neubauten von Wohn- und Geschäftshäusern, Umbauten einzelner Etagen, renovierte Wohnungen vor der Wiedervermietung oder Ladenlokale vor der Eröffnung. Gemeinsam ist allen ein fester Termin: Übergabe, Bezug oder Eröffnung.',
        'Oft wird die Reinigung erst kurz vor diesem Termin angefragt. Besser ist es, sie früh in den Terminplan aufzunehmen, damit sie nach den letzten Handwerksarbeiten und vor der Abnahme Platz hat.',
      ],
    },
    {
      title: 'Was bei der Bauendreinigung passiert',
      paragraphs: [
        'Baustaub ist fein und setzt sich überall ab: auf Böden, in Fensterfalzen, auf Türrahmen, in Schränken und Schubladen. Deshalb wird von oben nach unten gereinigt und oft in mehr als einem Durchgang.',
        'Dazu kommen Rückstände wie Klebereste, Etiketten und Schutzfolien. Sie werden mit Mitteln und Werkzeugen entfernt, die zur Oberfläche passen, damit Glas, Armaturen und neue Böden nicht zerkratzen.',
      ],
    },
    {
      title: 'Die Etappen im Überblick',
      items: [
        'Grobreinigung: groben Schmutz und Staub entfernen, damit die nächsten Arbeiten auf sauberem Grund beginnen',
        'Zwischenreinigung: vor dem Innenausbau, etwa bevor Böden verlegt oder Küchen montiert werden',
        'Bauendreinigung: gründlich und bezugsbereit, nach den letzten Handwerksarbeiten und vor der Abnahme',
      ],
      paragraphs: [
        'Arbeiten nach der Bauendreinigung noch Handwerker in den Räumen, entsteht neuer Staub. Planen Sie die Endreinigung deshalb nach den letzten Arbeiten ein.',
      ],
    },
    {
      title: 'Zusammenarbeit mit der Bauleitung',
      paragraphs: [
        'Auf der Baustelle gelten die Regeln der Bauleitung. Vor dem ersten Einsatz klären wir Zutritt, Sicherheitsregeln, Strom und Wasser, einen Platz für Geräte und den Umgang mit Abfall.',
        'Hilfreich ist eine Ansprechperson auf der Baustelle, die Termine und Zugang bestätigt. Verschiebt sich der Terminplan, stimmen wir die Einsätze neu mit Ihnen ab.',
      ],
    },
    {
      title: 'Woran Sie eine gute Bauendreinigung erkennen',
      items: [
        'Kein Staubfilm auf Fensterbänken, Türrahmen und in Schubladen',
        'Glas ohne Kleberreste, Schlieren und Kratzer',
        'Schutzfolien an Fenstern, Türen und Geräten sind entfernt',
        'Armaturen und Plättli sind ohne Rückstände',
        'Böden sind sauber, auch in Ecken und entlang der Sockelleisten',
      ],
    },
  ],
  steps: [
    {
      title: 'Etappen planen',
      text: 'Wir stimmen die Einsätze mit Bauleitung und Terminplan ab, damit die Reinigung zum Baufortschritt passt.',
    },
    {
      title: 'Übergabe',
      text: 'Vor der Übergabe reinigen wir die Räume bezugsbereit. Den Termin richten wir nach Ihrem Übergabe- oder Bezugstermin.',
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zwischen Baureinigung und Bauendreinigung?',
      answer:
        'Zur Baureinigung gehören Einsätze während der Bauphase, etwa eine Grobreinigung oder Zwischenreinigungen. Die Bauendreinigung ist die letzte, gründliche Reinigung vor der Übergabe, danach sind die Räume bezugsbereit.',
    },
    {
      question: 'Wann sollten wir die Bauendreinigung einplanen?',
      answer:
        'Sobald der Übergabetermin feststeht. Die Reinigung kommt nach den letzten Handwerksarbeiten und vor der Abnahme. Je früher wir den Termin kennen, desto besser können wir planen.',
    },
    {
      question: 'Gehört die Reinigung der Fenster dazu?',
      answer:
        'Ja, Fenster, Rahmen und Glas reinigen wir bei der Bauendreinigung mit. Für Fassaden gibt es die [Fenster- und Fassadenreinigung](/leistungen/fenster-und-fassadenreinigung).',
    },
    {
      question: 'Was braucht es auf der Baustelle für die Reinigung?',
      answer:
        'Zugang zu den Räumen, Strom und Wasser sowie einen Platz für Geräte. Wo wir das vorfinden, klären wir bei der Besichtigung mit Ihnen oder der Bauleitung.',
    },
    { question: 'Was kostet eine Baureinigung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/sonderreinigungen', text: 'Für eine Grundreinigung, wenn Flächen nach längerer Nutzung wieder gründlich sauber werden sollen.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Für Glasflächen und Fassaden am fertigen Bau.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Für die laufende Reinigung nach dem Bezug.' },
  ],
  cta: {
    title: 'Offerte für Ihre Baustelle',
    text: 'Nennen Sie uns Objekt, Fläche und Übergabetermin. Wir sehen uns die Baustelle an und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}
