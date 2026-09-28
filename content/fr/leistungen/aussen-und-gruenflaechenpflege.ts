import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const aussenUndGruen: ServicePageContent = {
  path: '/leistungen/aussen-und-gruenflaechenpflege',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Entretien des extérieurs et des espaces verts pour immeubles',
  lead: [
    'Les abords sont la première chose que locataires, clientèle et visiteurs voient d’un immeuble. Des espaces verts soignés, des chemins et des places propres font donc autant partie de l’entretien que la cage d’escalier.',
    'Nous entretenons les abords de votre immeuble, séparément ou dans le cadre de la [conciergerie](/leistungen/hauswartung).',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et entreprises' },
    { label: 'Intervention', value: 'Séparément ou dans le cadre de la conciergerie' },
    { label: 'Pas dans notre offre', value: 'Service hivernal' },
  ],
  scope: {
    title: 'Ce qui est compris',
    intro: 'Nous fixons après la visite les travaux que nous prenons en charge. Prestations typiques :',
    items: [
      'Tondre le gazon et tailler les bordures',
      'Entretenir haies, arbustes et plates-bandes',
      'Ramasser les feuilles mortes',
      'Maintenir propres chemins, places et places de parc',
      'Désherber les places et les joints',
      'Ramasser les déchets aux abords',
    ],
    notIncluded: ['Nous ne proposons pas de service hivernal.', 'Aménagement paysager et création de nouveaux espaces verts.'],
  },
  sections: [
    {
      title: 'Biens et situations typiques',
      paragraphs: [
        'Ensembles résidentiels avec gazon, haies et place de jeux, immeubles commerciaux avec parking et entrée, bâtiments artisanaux avec plates-bandes et surfaces en gravier. Les abords sont la première chose que voient les visiteurs, et ce que les locataires utilisent tous les jours.',
        'La demande arrive souvent lorsque les abords étaient jusqu’ici entretenus à côté et que cela ne suffit plus, ou lorsque le nettoyage, la conciergerie et les abords doivent être confiés ensemble.',
      ],
    },
    {
      title: 'L’entretien au fil des saisons',
      paragraphs: [
        'Les travaux suivent la saison. Le déroulement typique est le suivant :',
      ],
      items: [
        'Printemps : débarrasser chemins et places des salissures de l’hiver, entretenir les plates-bandes, première tonte',
        'Été : tondre régulièrement le gazon, désherber les places et les joints, dégager légèrement les passages si nécessaire',
        'Automne : ramasser les feuilles mortes, préparer les plates-bandes pour l’hiver',
        'Hiver : tailler les haies et les arbustes, en dehors de la période de nidification. Nous ne proposons pas de service hivernal, le déneigement et le salage nécessitent une autre solution',
      ],
    },
    {
      title: 'Planification et fréquence',
      paragraphs: [
        'La fréquence d’entretien dépend de la saison et de la météo. Pendant la période de croissance, le gazon demande plus d’attention qu’à la fin de l’automne. Nous fixons le plan d’entretien. Pour des interventions supplémentaires, par exemple avant un événement, il suffit de nous en parler.',
        'Dans le cadre de la [conciergerie](/leistungen/hauswartung), l’entretien des abords et les rondes de contrôle peuvent être combinés : qui travaille dehors voit aussi quand quelque chose ne va pas au bâtiment.',
      ],
    },
    {
      title: 'À quoi reconnaître des abords bien entretenus',
      items: [
        'Les bordures du gazon sont nettement taillées',
        'Les chemins et les places sont sans feuilles, déchets ni mauvaises herbes dans les joints',
        'Les haies sont en forme, les passages et les champs de vision restent dégagés',
        'Les plates-bandes sont soignées et sans mauvaises herbes',
      ],
    },
  ],
  steps: [
    {
      title: 'Plan d’entretien',
      text: 'Nous fixons les travaux que nous prenons en charge et leur fréquence, en fonction de la saison.',
    },
    {
      title: 'Entretien',
      text: 'Nous entretenons les abords selon le plan. Pour des interventions supplémentaires, par exemple avant un événement, il suffit de nous en parler.',
    },
  ],
  faq: [
    { question: 'Assurez-vous aussi le service hivernal ?', answer: 'Non, nous ne proposons pas de service hivernal.' },
    {
      question: 'Puis-je confier l’entretien des abords sans la conciergerie ?',
      answer: 'Oui. L’entretien des extérieurs et des espaces verts est proposé séparément ou dans le cadre de la [conciergerie](/leistungen/hauswartung).',
    },
    {
      question: 'Quand vaut-il mieux tailler les haies ?',
      answer:
        'En dehors de la période de nidification, qui s’étend chez de nombreuses espèces du printemps à la fin de l’été. La Station ornithologique suisse de Sempach recommande de tailler les arbustes en hiver, de novembre à mars. Si des passages ou des champs de vision se referment en été, une légère taille de forme, attentive aux nids, suffit le plus souvent. Nous fixons le moment adapté à vos haies dans le plan d’entretien.',
    },
    {
      question: 'Aménagez-vous aussi de nouveaux jardins ?',
      answer: 'Non. L’aménagement paysager et la création de nouveaux espaces verts ne font pas partie de notre offre. Nous entretenons des abords existants.',
    },
    { question: 'Combien coûte l’entretien des abords ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Si, en plus des abords, le bâtiment et sa technique doivent aussi être suivis.' },
    { path: '/leistungen/facility-services', text: 'Si le nettoyage, la conciergerie et l’entretien des abords doivent figurer dans un seul contrat.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les façades et les surfaces vitrées.' },
  ],
  cta: {
    title: 'Un devis pour l’entretien de vos abords',
    text: 'Indiquez-nous l’immeuble et les surfaces. Nous examinons les abords et établissons votre devis, gratuit et sans engagement.',
  },
}
