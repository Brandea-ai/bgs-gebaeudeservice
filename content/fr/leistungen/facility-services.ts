import type { ServicePageContent } from '../../types'
import { answers } from '../common'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Facility services : nettoyage, conciergerie et abords d’un seul prestataire',
  lead: [
    'Confier le nettoyage, la conciergerie et l’entretien des abords à différentes entreprises, c’est plusieurs contrats, plusieurs interlocuteurs et beaucoup de coordination. Avec les facility services, tout vient de nous.',
    'Vous avez un seul contrat et un seul interlocuteur. Nous composons avec vous les prestations comprises.',
  ],
  facts: [
    { label: 'Pour', value: 'Gérances, propriétaires et entreprises' },
    { label: 'Étendue', value: 'Composée à partir de nos prestations selon vos besoins' },
    { label: 'Contrat', value: 'Un contrat, un interlocuteur' },
  ],
  scope: {
    title: 'Ce qui peut être combiné',
    intro: 'Nous composons les facility services à partir de nos propres prestations :',
    items: [
      '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung) avec service de réapprovisionnement',
      '[Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung)',
      '[Conciergerie](/leistungen/hauswartung)',
      '[Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege)',
      '[Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung)',
      '[Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen)',
      '[Nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung)',
    ],
    notIncluded: [
      'Le facility management technique, comme l’entretien du chauffage, de la ventilation ou des ascenseurs.',
      'Le service hivernal.',
      'La mise en relation avec des entreprises tierces, par exemple des artisans.',
    ],
  },
  sections: [
    {
      title: 'Situations typiques',
      paragraphs: [
        'Une gérance s’occupe de plusieurs immeubles et ne veut pas coordonner une entreprise différente pour chaque tâche. Une entreprise a des bureaux, une halle et des abords et veut un seul interlocuteur pour tout. Ou des propriétaires reprennent un immeuble et cherchent une solution cohérente dès le départ.',
      ],
    },
    {
      title: 'Comment des prestations séparées deviennent un contrat',
      paragraphs: [
        'Lors du tour des lieux, nous examinons ce dont votre bien a besoin : nettoyage intérieur, vitres, conciergerie, abords. Il en résulte un contrat dans lequel chaque prestation figure avec son étendue et sa fréquence.',
        'Si quelque chose s’ajoute ou disparaît par la suite, vous en discutez à un seul endroit, avec votre interlocuteur chez nous.',
      ],
    },
    {
      title: 'Ce que cela vous apporte',
      items: [
        'Un seul interlocuteur pour le nettoyage, la conciergerie et les abords',
        'Un seul contrat au lieu de plusieurs, avec une vue d’ensemble de toutes les prestations',
        'Moins de coordination entre entreprises, par exemple pour savoir qui nettoie la cage d’escalier après des travaux aux abords',
        'Un regard sur l’ensemble du bien : qui nettoie à l’intérieur voit aussi quand quelque chose ne va pas dehors',
      ],
    },
    {
      title: 'Limites et collaboration',
      paragraphs: [
        'Chez nous, facility services signifie : les prestations que nous fournissons nous-mêmes. Le facility management technique, par exemple l’entretien du chauffage, de la ventilation ou des ascenseurs, n’en fait pas partie, pas plus que la mise en relation avec des artisans.',
        'Nous vous signalons les pannes que nous remarquons pendant le travail, pour que vous puissiez mandater l’entreprise spécialisée adéquate.',
      ],
    },
  ],
  steps: [
    {
      title: 'Un contrat',
      text: 'Les prestations dont votre bien a besoin sont fixées dans un seul contrat.',
    },
    {
      title: 'Un interlocuteur',
      text: 'Pour toutes les prestations, vous avez un seul interlocuteur chez nous. Vous discutez des modifications à un seul endroit.',
    },
  ],
  faq: [
    {
      question: 'Qu’entendez-vous par facility services ?',
      answer:
        'Le nettoyage, la conciergerie et l’entretien des abords d’un seul prestataire, dans un seul contrat et avec un seul interlocuteur. Le facility management technique, par exemple l’entretien du chauffage et de la ventilation, n’en fait pas partie.',
    },
    {
      question: 'Pouvons-nous commencer par une seule prestation ?',
      answer:
        'Oui. Vous pouvez commencer par une prestation, par exemple le [nettoyage d’entretien](/leistungen/unterhaltsreinigung), et en ajouter d’autres plus tard.',
    },
    {
      question: 'Quelle est la différence avec la conciergerie ?',
      answer:
        'La [conciergerie](/leistungen/hauswartung) est une prestation à part, avec des rondes de contrôle, des petites réparations, la technique du bâtiment et l’élimination des déchets. Les facility services la combinent avec le nettoyage et l’entretien des abords dans un seul contrat.',
    },
    {
      question: 'Qui est notre interlocuteur ?',
      answer: 'Pour toutes les prestations, vous avez un seul interlocuteur chez nous. Vous discutez des modifications à un seul endroit.',
    },
    { question: 'Combien coûtent les facility services ?', answer: answers.kosten },
    { question: 'Dans quelles régions intervenez-vous ?', answer: answers.gebiet },
    { question: 'Êtes-vous assurés ?', answer: answers.versicherung },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Rondes de contrôle, petites réparations, technique du bâtiment, élimination des déchets et états des lieux.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Nettoyage régulier d’immeubles et de surfaces commerciales.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Entretien des abords et des espaces verts.' },
  ],
  cta: {
    title: 'Un devis pour vos facility services',
    text: 'Indiquez-nous vos immeubles et les prestations que vous souhaitez confier. Nous faisons un tour des lieux et établissons votre devis, gratuit et sans engagement.',
  },
}
