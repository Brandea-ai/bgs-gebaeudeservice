import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Nettoyage ponctuel et spécial',
  h1: 'Nettoyage en profondeur et spécial pour immeubles et surfaces commerciales',
  lead: [
    'Certaines salissures ne sont plus atteintes par le nettoyage courant : le calcaire dans les sanitaires, la graisse dans les cuisines, la saleté dans les joints et les coins, les anciennes couches sur les sols. Il faut alors un nettoyage en profondeur, ponctuel ou à intervalles plus espacés.',
    'Nous réalisons des nettoyages en profondeur et spéciaux pour des gérances, des propriétaires et des entreprises. Pour le nettoyage final lors de la remise d’un logement, nous proposons le [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung).',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires, communautés de PPE et entreprises' },
    { label: 'Type', value: 'Ponctuel ou à intervalles plus espacés' },
    { label: 'Surfaces', value: 'Logements, bureaux et surfaces commerciales' },
  ],
  scope: {
    title: 'Nos nettoyages en profondeur et spéciaux',
    items: [
      'Nettoyage en profondeur de logements, de bureaux et de surfaces commerciales',
      '[Nettoyage de déménagement et de fin de bail](/leistungen/umzugsreinigung) avec garantie de remise',
      '[Nettoyage de fin de chantier](/leistungen/baureinigung) après des travaux de construction ou de transformation',
      '[Nettoyage de fenêtres et de vitres](/leistungen/fenster-und-fassadenreinigung)',
      '[Nettoyage de façades](/leistungen/fenster-und-fassadenreinigung), aussi à haute pression',
    ],
    notIncluded: [
      'Nettoyage régulier : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyages de fin de bail mandatés par les locataires d’appartements individuels.',
    ],
  },
  sections: [
    {
      title: 'Ce qui caractérise un nettoyage en profondeur',
      paragraphs: [
        'Un nettoyage en profondeur va plus loin que le nettoyage courant. Il élimine les salissures incrustées avec le temps : le calcaire et le tartre urinaire dans les sanitaires, la graisse dans les cuisines, la saleté dans les joints, les coins et sur les plinthes, les résidus d’anciens produits d’entretien sur les sols.',
        'Pour les sols, la façon de procéder dépend du revêtement, par exemple pierre naturelle, carrelage, linoléum ou parquet. Nous clarifions lors de la visite quelle méthode et quels produits conviennent.',
      ],
    },
    {
      title: 'Occasions typiques',
      paragraphs: [
        'Un nettoyage en profondeur vaut toujours la peine lorsqu’une surface repart à zéro ou a été fortement utilisée pendant longtemps :',
      ],
      items: [
        'Avant la relocation de surfaces de bureaux ou commerciales',
        'Après une utilisation intensive ou une longue période d’inoccupation',
        'Avant le début d’un [nettoyage d’entretien](/leistungen/unterhaltsreinigung)',
        'Lorsque le nettoyage courant n’élimine plus les salissures incrustées',
      ],
    },
    {
      title: 'Nettoyage de déménagement et de fin de bail',
      paragraphs: [
        'Pour le nettoyage final lors de la remise d’un appartement ou d’une surface commerciale, une page séparée donne tous les détails : [nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung). Nous le proposons aux gérances, aux propriétaires et aux entreprises et, pour les villas et les résidences, également aux particuliers dans le cadre de notre [offre Premium](/premium).',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'Un nettoyage en profondeur demande du temps et des locaux aussi dégagés que possible. Dans les bureaux et les surfaces commerciales, il peut souvent être placé sur un week-end, pendant les vacances d’entreprise ou entre deux baux. Dans les immeubles habités, il faut un avis préalable, car la cage d’escalier ou la buanderie, par exemple, ne sont pas utilisables pendant un court moment.',
        'La fréquence utile d’un nettoyage en profondeur dépend de l’utilisation et de la sollicitation. Avec un bon nettoyage courant, il devient moins souvent nécessaire.',
      ],
    },
    {
      title: 'À quoi reconnaître un bon nettoyage en profondeur',
      items: [
        'Les joints sont de nouveau clairs, pas seulement les carreaux',
        'La robinetterie et le carrelage sont sans traces de calcaire',
        'Le sol est sans traces ni endroits collants',
        'Les plinthes, les portes et les encadrements sont nettoyés aussi',
        'Les surfaces délicates sont intactes, car les produits sont adaptés au matériau',
      ],
    },
  ],
  steps: [
    {
      title: 'Date',
      text: 'Nous planifions l’intervention à la date qui convient à votre utilisation ou à votre activité.',
    },
    {
      title: 'Remise',
      text: 'Après l’intervention, nous vous remettons les locaux. Si un nettoyage régulier doit suivre, nous en discutons volontiers avec vous.',
    },
  ],
  faq: [
    {
      question: 'Qu’est-ce qu’un nettoyage en profondeur ?',
      answer:
        'Une intervention ponctuelle et minutieuse, qui élimine aussi les salissures incrustées avec le temps, par exemple le calcaire, la graisse, la saleté dans les joints ou les anciennes couches d’entretien sur les sols.',
    },
    {
      question: 'Quand un nettoyage en profondeur vaut-il la peine ?',
      answer:
        'Par exemple avant une relocation, après une utilisation intensive ou lorsque le nettoyage courant n’élimine plus les salissures incrustées. Lors de la visite, nous vous disons si un nettoyage en profondeur est nécessaire.',
    },
    {
      question: 'Quelle est la différence avec le nettoyage d’entretien ?',
      answer:
        'Le nettoyage d’entretien maintient les surfaces propres selon une fréquence fixe, le nettoyage en profondeur est une intervention ponctuelle et minutieuse. Les deux se combinent : d’abord un nettoyage en profondeur, puis le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) régulier.',
    },
    {
      question: 'Les locaux doivent-ils être vides pour le nettoyage en profondeur ?',
      answer:
        'Pas entièrement, mais plus les surfaces sont dégagées, plus le nettoyage peut être minutieux. Nous clarifions lors de la visite ce qui reste en place et qui le déplace.',
    },
    {
      question: 'Prenez-vous aussi en charge les nettoyages de fin de bail ?',
      answer:
        'Oui, avec garantie de remise, pour les gérances, les propriétaires et les entreprises. Tout le reste figure sous [Nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung).',
    },
    { question: 'Combien coûte un nettoyage en profondeur ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/umzugsreinigung', text: 'Pour le nettoyage final avant la remise d’un appartement ou d’une surface commerciale, avec garantie de remise.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Si un nettoyage régulier doit suivre le nettoyage en profondeur.' },
    { path: '/leistungen/baureinigung', text: 'Pour le nettoyage pendant et après des travaux de construction ou de transformation.' },
  ],
  cta: {
    title: 'Un devis pour votre nettoyage en profondeur',
    text: 'Décrivez-nous le bien, le motif et la date. Nous examinons les locaux et établissons votre devis, gratuit et sans engagement.',
  },
}
