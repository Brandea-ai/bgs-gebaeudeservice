import type { ServicePageContent } from '../../types'
import { answers } from '../common'

// Grundlage: R3c (acht Aufgaben, ohne Winterdienst und Pikett), E29, E53 (keine Partner), W08, K02
export const hauswartung: ServicePageContent = {
  path: '/leistungen/hauswartung',
  area: 'leistungen',
  eyebrow: 'Betreuung von Liegenschaften',
  h1: 'Hauswartung für Wohn- und Geschäftshäuser',
  lead: [
    'Eine Liegenschaft braucht mehr als Reinigung: Jemand muss regelmässig nach dem Rechten sehen, kleine Schäden beheben, die Entsorgung organisieren und bei Wohnungsübergaben dabei sein. Das übernimmt die Hauswartung.',
    'Für Verwaltungen, Eigentümer und Stockwerkeigentümerschaften, die nicht selbst nach dem Rechten sehen können oder wollen. Welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden, halten wir schriftlich fest.',
  ],
  facts: [
    { label: 'Für', value: 'Verwaltungen, Eigentümer und Stockwerkeigentümerschaften' },
    { label: 'Objekte', value: 'Wohn- und Geschäftsliegenschaften' },
    { label: 'Umfang', value: 'Aufgaben nach Bedarf, schriftlich festgehalten' },
  ],
  scope: {
    title: 'Was die Hauswartung übernimmt',
    intro: 'Aus diesen Aufgaben stellen wir die Hauswartung für Ihre Liegenschaft zusammen:',
    items: [
      'Kontrollgänge: regelmässig nach dem Rechten sehen und Mängel melden',
      'Treppenhaus: reinigen und in Ordnung halten',
      'Waschküche und Trockenräume sauber halten',
      'Kleinreparaturen, etwa Leuchtmittel ersetzen',
      'Haustechnik im Blick behalten und Störungen melden',
      'Bei Wohnungsübergaben mitwirken',
      'Entsorgung von Abfall und Wertstoffen organisieren',
      'Umgebungspflege, mehr dazu unter [Aussen- und Grünflächenpflege](/leistungen/aussen-und-gruenflaechenpflege)',
    ],
    notIncluded: [
      'Winterdienst bieten wir nicht an.',
      'Pikett- und Notfalldienst rund um die Uhr.',
      'Grössere Reparaturen und Handwerksarbeiten.',
    ],
  },
  sections: [
    {
      title: 'Typische Objekte und Situationen',
      paragraphs: [
        'Mehrfamilienhäuser und Wohnanlagen, Stockwerkeigentum, Wohn- und Geschäftshäuser mit Läden oder Büros im Erdgeschoss. Überall dort braucht es jemanden, der regelmässig vorbeikommt, die Waschküche in Ordnung hält und sieht, wenn etwas nicht stimmt.',
        'Häufig kommt die Anfrage, wenn der bisherige Hauswart aufhört, wenn eine Verwaltung eine Liegenschaft neu übernimmt oder wenn in einer Stockwerkeigentümerschaft niemand die Aufgaben mehr übernehmen will.',
      ],
    },
    {
      title: 'Was beim Kontrollgang passiert',
      paragraphs: [
        'Beim Kontrollgang sehen wir nach dem Rechten, so oft wie mit Ihnen vereinbart. Was wir selbst beheben können, etwa ein Leuchtmittel ersetzen, erledigen wir. Alles andere melden wir der Stelle, die wir mit Ihnen festgelegt haben.',
      ],
      items: [
        'Beleuchtung im Treppenhaus, im Keller und in der Umgebung',
        'Türen, Schlösser und Briefkastenanlage',
        'Waschküche, Trockenräume und Keller',
        'Heizraum und Haustechnik auf sichtbare Störungen',
        'Abfallplatz und Umgebung',
      ],
    },
    {
      title: 'Haustechnik im Blick',
      paragraphs: [
        'Hauswartung heisst nicht Wartung der Anlagen. Heizung, Lüftung, Lift und Brandschutz warten Fachfirmen. Die Hauswartung sieht regelmässig hin, bemerkt Störungen früh und meldet sie, etwa eine Fehlermeldung an der Heizung, einen tropfenden Hahn in der Waschküche oder einen Lift, der nicht richtig hält.',
      ],
    },
    {
      title: 'Wohnungsübergaben',
      paragraphs: [
        'Wie wir bei Wohnungsübergaben mitwirken, legen wir mit der Verwaltung fest, etwa ob wir die Wohnung öffnen, Schlüssel übergeben oder Zählerstände notieren. Abnahme und Protokoll bleiben bei der Verwaltung.',
        'Braucht die Wohnung vor der Übergabe eine Endreinigung, gibt es dafür die [Umzugsreinigung mit Abnahmegarantie](/leistungen/umzugsreinigung).',
      ],
    },
    {
      title: 'Zusammenarbeit mit Verwaltung und Eigentümerschaft',
      paragraphs: [
        'Eine gute Hauswartung lebt von klaren Absprachen: welche Aufgaben, wie oft, wer Meldungen empfängt und welche kleinen Arbeiten ohne Rückfrage erledigt werden dürfen. Das halten wir schriftlich fest.',
        'Auch die Mieterschaft sollte wissen, an wen sie sich wendet. Wer dafür Ansprechperson ist, legen wir gemeinsam mit Ihnen fest.',
      ],
    },
    {
      // Suchbegriff «Pflichtenheft Hauswartung» (SEO 28.09.2026), Zielgruppe Verwaltungen, ohne Winterdienst (E29)
      title: 'Pflichtenheft für die Hauswartung: was hineingehört',
      paragraphs: [
        'Ein Pflichtenheft hält fest, was die Hauswartung in einer Liegenschaft übernimmt, wie oft und wer wofür zuständig ist. Es schafft Klarheit für Verwaltung, Eigentümerschaft, Mieterschaft und Hauswartung und macht Offerten vergleichbar.',
        'Bei uns entsteht diese Aufstellung nach dem Rundgang: Welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden, halten wir schriftlich fest. Diese Punkte gehören in ein Pflichtenheft:',
      ],
      items: [
        'Aufgaben und Rhythmus je Bereich: Treppenhaus, Eingang, Waschküche und Trockenräume, Keller und Abfallplatz, jeweils mit Tätigkeit und Häufigkeit',
        'Kontrollgänge: wie oft, welche Räume und Anlagen dazugehören und wie festgehalten wird, was auffällt',
        'Umgebung: welche Flächen gepflegt werden, etwa Rasen, Hecken, Beete, Wege und Plätze',
        'Zuständigkeiten und Meldewege: wer Meldungen der Hauswartung empfängt, welche kleinen Arbeiten ohne Rückfrage erledigt werden und an wen sich die Mieterschaft wendet',
        'Schlüssel und Zugang: welche Schlüssel, Badges und Codes die Hauswartung erhält und wie sie aufbewahrt werden',
        'Material: wer Reinigungsmittel, Verbrauchsmaterial und Geräte stellt und wo sie gelagert werden',
        'Abgrenzung zu Handwerkern: welche Arbeiten Fachbetriebe übernehmen, etwa grössere Reparaturen und die Wartung von Heizung, Lift und Brandschutz, und wer sie beauftragt',
      ],
    },
  ],
  steps: [
    {
      title: 'Aufgaben festlegen',
      text: 'Wir halten fest, welche Aufgaben wir übernehmen, wie oft wir vor Ort sind und wem wir Mängel melden.',
    },
    {
      title: 'Start',
      text: 'Wir beginnen zum vereinbarten Datum. Braucht die Liegenschaft später mehr oder weniger, passen wir die Aufgaben mit Ihnen an.',
    },
  ],
  faq: [
    {
      question: 'Welche Aufgaben übernimmt eine Hauswartung?',
      answer:
        'Typisch sind Kontrollgänge, die Reinigung von Treppenhaus, Waschküche und Trockenräumen, Kleinreparaturen, der Blick auf die Haustechnik, die Entsorgung, die Mitwirkung bei Wohnungsübergaben und die Umgebungspflege. Welche Aufgaben wir in Ihrer Liegenschaft übernehmen und wie oft, halten wir mit Ihnen schriftlich fest, wie in einem Pflichtenheft.',
    },
    {
      question: 'Was ist der Unterschied zur Unterhaltsreinigung?',
      answer:
        'Die Unterhaltsreinigung reinigt in einem festen Rhythmus. Die Hauswartung geht weiter: Kontrollgänge, Kleinreparaturen, Haustechnik, Entsorgung, Wohnungsübergaben und Umgebungspflege. Wer nur Reinigung braucht, ist mit der [Unterhaltsreinigung](/leistungen/unterhaltsreinigung) richtig.',
    },
    {
      question: 'Übernehmen Sie auch grössere Reparaturen?',
      answer:
        'Nein, wir übernehmen Kleinreparaturen. Für grössere Arbeiten braucht es einen Fachbetrieb. Schäden, die wir bei Kontrollgängen feststellen, melden wir Ihnen.',
    },
    {
      question: 'Bieten Sie Winterdienst oder einen Pikettdienst an?',
      answer: 'Nein. Winterdienst und Pikettdienst gehören nicht zu unserem Angebot.',
    },
    {
      question: 'Können wir einzelne Aufgaben wählen?',
      answer: 'Ja. Wir stellen die Hauswartung aus den Aufgaben zusammen, die Ihre Liegenschaft braucht.',
    },
    {
      question: 'Wie oft kommt die Hauswartung vorbei?',
      answer:
        'Das hängt von Grösse, Alter und Nutzung der Liegenschaft ab. Wie oft wir vor Ort sind, halten wir mit den übrigen Aufgaben schriftlich fest.',
    },
    { question: 'Sind Sie versichert?', answer: answers.versicherung },
    { question: 'Was kostet die Hauswartung?', answer: answers.kosten },
    { question: 'In welchen Regionen sind Sie tätig?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Für Umgebung und Grünflächen der Liegenschaft.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Wenn nur die Reinigung vergeben werden soll.' },
    { path: '/leistungen/facility-services', text: 'Wenn Reinigung, Hauswartung und Umgebung in einen Vertrag gehören.' },
  ],
  cta: {
    title: 'Offerte für Ihre Liegenschaft',
    text: 'Nennen Sie uns Objekt, Anzahl Wohnungen oder Flächen und die Aufgaben, die Sie abgeben möchten. Wir machen einen Rundgang und erstellen Ihnen eine Offerte, kostenlos und unverbindlich.',
  },
}
