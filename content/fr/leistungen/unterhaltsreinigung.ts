import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage d’entretien pour immeubles et surfaces commerciales',
  lead: [
    'La cage d’escalier, l’entrée et les locaux communs façonnent l’image d’un immeuble, pour les locataires comme pour la clientèle et les visiteurs. Avec un nettoyage d’entretien, ils restent propres sans que vous ayez à vous en occuper vous-même.',
    'Nous nettoyons des immeubles locatifs, des immeubles mixtes d’habitation et de commerce ainsi que des surfaces commerciales selon une fréquence fixe, que nous définissons avec vous après la visite. Nous réapprovisionnons également les consommables.',
  ],
  facts: [
    { label: 'Pour', value: 'Immeubles locatifs, immeubles mixtes d’habitation et de commerce, surfaces commerciales' },
    { label: 'Fréquence', value: 'Plusieurs fois par semaine, selon la surface et l’utilisation' },
    { label: 'Compris', value: 'Service de réapprovisionnement des consommables' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons après la visite ce que nous nettoyons et à quelle fréquence. Prestations typiques :',
    items: [
      'Cages d’escalier, entrées et ascenseurs',
      'Sols dans toutes les pièces convenues',
      'Portes, mains courantes, interrupteurs et vitrages de l’entrée',
      'Sanitaires, cuisines et salles de pause',
      'Buanderies, caves et locaux annexes',
      'Vider les poubelles et réapprovisionner les consommables',
    ],
    notIncluded: [
      'Bureaux et cabinets : voir [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Nettoyages en profondeur ponctuels : voir [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen), nettoyages finaux avant la remise sous [Nettoyage de fin de bail](/leistungen/umzugsreinigung).',
      'Fenêtres côté extérieur et façades : voir [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
      'Ménages privés. Pour les villas et les résidences, nous proposons notre [offre Premium](/premium).',
    ],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Un nettoyage d’entretien vaut la peine partout où de nombreuses personnes utilisent les mêmes surfaces. Dans un immeuble locatif, ce sont la cage d’escalier, l’ascenseur et la buanderie. Dans un immeuble mixte d’habitation et de commerce s’ajoutent des entrées fréquentées par le public, dans les surfaces commerciales la réception, les couloirs et les sanitaires.',
        'La demande arrive souvent lorsque la solution actuelle ne suffit plus : le nettoyage par les locataires ne fonctionne pas, l’entreprise actuelle arrête, ou une gérance reprend un nouvel immeuble.',
      ],
    },
    {
      title: 'Service de réapprovisionnement',
      paragraphs: [
        'Dans le cadre du nettoyage d’entretien, nous réapprovisionnons les consommables. Le devis précise les articles concernés et qui les fournit.',
      ],
      items: [
        'Papier toilette, essuie-mains en papier et savon',
        'Sacs à ordures et chiffons de nettoyage',
        'Autres consommables selon entente',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'La fréquence de nettoyage dépend de l’utilisation, pas seulement de la surface. Une entrée très fréquentée demande plus de soin qu’un couloir de cave où peu de gens passent. Il est donc judicieux de fixer une fréquence par zone plutôt qu’une seule pour tout l’immeuble. Nous discutons de notre proposition avec vous après la visite.',
      ],
      items: [
        'Entrée, ascenseur et cage d’escalier : plus souvent, car c’est là qu’entre la plus grande partie de la saleté',
        'Sanitaires et cuisines : plus souvent, pour des raisons d’hygiène',
        'Caves, galetas et locaux annexes : moins souvent, selon l’utilisation',
        'Vitrages de l’entrée : selon les besoins, plus souvent par temps de pluie et en hiver',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage d’entretien',
      paragraphs: [
        'Propre ne veut pas seulement dire un sol lavé. Ces points vous montrent rapidement, lors d’un tour de l’immeuble, avec quel soin le nettoyage est fait :',
      ],
      items: [
        'Les mains courantes, les interrupteurs et les boutons d’ascenseur sont propres, pas seulement les sols',
        'Aucune saleté ne reste dans les coins, sur les nez de marche et derrière les portes',
        'Les sanitaires sentent le frais, le savon et le papier sont réapprovisionnés',
        'Les portes vitrées de l’entrée sont sans traces ni empreintes de doigts',
        'L’étendue convenue est fixée par écrit, pour que les deux parties sachent ce qui s’applique',
      ],
    },
    {
      title: 'Collaboration avec la gérance et les propriétaires',
      paragraphs: [
        'Avant le début, nous clarifions avec vous l’accès à l’immeuble, par exemple avec une clé ou un badge, et l’endroit où les appareils et les produits de nettoyage peuvent être rangés. Un local de nettoyage fermant à clé ou un compartiment de cave facilite le travail.',
        'Pour les locataires, un court avis indiquant les jours de nettoyage est utile. Les escaliers et les couloirs restent alors libres de chaussures, de vélos et d’autres objets ces jours-là.',
      ],
    },
  ],
  steps: [
    {
      title: 'Accord',
      text: 'Avec votre accord, nous fixons les pièces à nettoyer, la fréquence et les consommables à réapprovisionner.',
    },
    {
      title: 'Début',
      text: 'Nous commençons à la date convenue. Si l’utilisation change, nous revoyons avec vous l’étendue ou la fréquence.',
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence faut-il nettoyer ?',
      answer:
        'Cela dépend de l’intensité d’utilisation des surfaces. Après la visite, nous vous proposons une fréquence. Le nettoyage d’entretien est conçu pour des biens nettoyés plusieurs fois par semaine.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage en profondeur ?',
      answer:
        'Le nettoyage d’entretien maintient les surfaces propres selon une fréquence fixe. Un nettoyage en profondeur est une intervention ponctuelle et minutieuse, qui élimine aussi les salissures que le nettoyage courant n’atteint pas. Plus d’informations sous [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
    },
    {
      question: 'Pourrons-nous modifier la fréquence plus tard ?',
      answer: 'Oui. Si l’utilisation change, nous revoyons avec vous l’étendue ou la fréquence.',
    },
    {
      question: 'Les locataires doivent-ils préparer quelque chose ?',
      answer:
        'Non. Il est utile que les escaliers et les couloirs soient libres de chaussures, de vélos et d’autres objets les jours de nettoyage. Un court avis dans la cage d’escalier suffit généralement.',
    },
    { question: 'Nettoyez-vous avec des produits respectueux de l’environnement ?', answer: answers.mittel },
    { question: 'Combien coûte un nettoyage d’entretien ?', answer: `${answers.kosten} Plus d’informations dans notre guide : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).` },
    {
      question: 'À quoi faut-il veiller en choisissant une entreprise de nettoyage ?',
      answer:
        'À une étendue des prestations clairement décrite, à une assurance attestée, à un interlocuteur attitré et à un devis établi après une visite. Plus d’informations dans notre guide : [Comment trouver la bonne entreprise de nettoyage ?](/blog/richtige-reinigungsfirma-finden)',
    },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/bueroreinigung', text: 'S’il s’agit surtout de bureaux ou d’un cabinet.' },
    { path: '/leistungen/hauswartung', text: 'Si, en plus du nettoyage, il faut des rondes de contrôle, des petites réparations et l’élimination des déchets.' },
    { path: '/leistungen/sonderreinigungen', text: 'Pour un nettoyage en profondeur, par exemple avant le début ou après une utilisation intensive.' },
  ],
  cta: {
    title: 'Un devis pour votre immeuble',
    text: 'Décrivez-nous le bien, la surface et la fréquence souhaitée. Nous passons pour la visite et établissons votre devis, gratuit et sans engagement.',
  },
}
