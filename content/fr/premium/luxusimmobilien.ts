import type { ServicePageContent, Source } from '../../types'

// Mêmes clés et sources que content/de/premium/luxusimmobilien.ts (E85, sources lues le 28.09.2026).

const nvs: Source = {
  label: 'Association suisse de la pierre naturelle NVS : fiche sur le nettoyage des revêtements en pierre naturelle (janvier 2018, en allemand)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}

export const luxusimmobilien: ServicePageContent = {
  path: '/premium/luxusimmobilien',
  area: 'premium',
  h1: 'Nettoyage de villas avec une équipe fixe qui connaît les matériaux',
  lead: [
    'Un lavabo en marbre, à côté un robinet en laiton, dans le séjour un parquet en chêne huilé : dans une villa, presque chaque surface demande un autre produit. Ce qui débarrasse le robinet du calcaire peut laisser une tache mate sur la pierre voisine.',
    'Nous nettoyons villas, lofts et résidences avec une équipe fixe qui connaît vos matériaux et vos règles. Elle vient régulièrement, autour de vos réceptions ou pendant vos voyages. Le tableau des matériaux et la liste pour le premier tour de la maison se trouvent sur cette page, prêts à imprimer.',
  ],
  facts: [
    { label: 'Pour', value: 'Propriétaires, leurs gérances et leurs courtiers' },
    { label: 'Horaires', value: 'En semaine, le soir, le week-end ou pendant vos voyages' },
    { label: 'Équipe', value: 'Attribuée de façon fixe et vérifiée par nos soins' },
    { label: 'Non compris', value: 'Restauration d’œuvres d’art et d’antiquités' },
  ],
  scope: {
    title: 'Ce que comprend l’entretien de votre maison',
    intro: 'Vous choisissez les pièces et les surfaces lors du premier tour de la maison. Le plus souvent, ce sont celles-ci :',
    items: [
      'Séjours, chambres à coucher et chambres d’amis',
      'Cuisines et salles de bains, avec des produits adaptés à la pierre, à la laque et à la robinetterie',
      'Sols en pierre naturelle et en parquet, selon la notice d’entretien de chaque revêtement',
      'Surfaces laquées brillantes, verre et miroirs',
      'Nettoyage avant votre arrivée, après votre départ et rondes de contrôle entre-temps',
      'Interventions avant et après des réceptions ou des fêtes de famille, aussi le week-end',
      'Pièces abritant des œuvres d’art et des antiquités, les œuvres elles-mêmes uniquement avec votre accord',
      'Interventions à bref délai avant une vente, une séance photo ou une remise, aussi sur mandat d’un courtier ou d’une gérance',
    ],
    notIncluded: [
      'Restauration d’œuvres d’art et d’antiquités.',
      'Le nettoyage des œuvres d’art elles-mêmes, tant que vous ne l’avez pas expressément autorisé.',
    ],
  },
  sections: [
    {
      title: 'Une salle de bains, trois matériaux',
      paragraphs: [
        'La salle de bains montre pourquoi connaître les matériaux va au-delà de la prudence. Un grand fabricant de robinetterie recommande l’acide citrique contre le calcaire sur le robinet. Sur le lavabo en marbre juste à côté, ce même acide attaque le poli, et l’éponge de cuisine à tampon vert le raye.',
        'C’est pourquoi nous n’utilisons jamais un seul produit pour tout. Lors du premier tour, nous passons en revue, pièce par pièce, la pierre, le bois et les finitions de votre maison. S’il existe des notices d’entretien du fabricant, de la menuiserie ou de l’architecte d’intérieur, elles priment sur toute règle générale.',
      ],
    },
    {
      title: 'Résidence secondaire et voyages : prête à votre arrivée',
      paragraphs: [
        'Une maison au bord du lac ou un appartement à la montagne reste souvent vide pendant des semaines. Avant votre arrivée, nous nettoyons pour que vous n’ayez plus rien à faire en arrivant. Après votre départ, nous remettons la maison en ordre.',
        'Entre-temps, nous passons aussi souvent que vous le souhaitez. Vous décidez de ce que nous surveillons, par exemple si les fenêtres et les portes sont fermées ou si de l’eau fuit quelque part. Ce que nous remarquons est transmis à la personne que vous désignez : vous-même, votre gérance ou une personne de confiance.',
      ],
    },
    {
      title: 'Avant une vente, une séance photo ou une remise',
      paragraphs: [
        'Courtiers et gérances peuvent nous mandater au nom des propriétaires, aussi à bref délai. Pour les photos, seul compte ce que voit l’appareil : verre, miroirs, sols polis et façades de cuisine montrent chaque trace sous une lumière rasante.',
        'Indiquez-nous la date du photographe ou de la première visite, les pièces qui seront montrées et comment nous entrons dans la maison. Une fois la maison vidée, le nettoyage final avant la remise aux nouveaux propriétaires passe par le [nettoyage de fin de bail](/leistungen/umzugsreinigung).',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'materialkunde',
      title: 'Quel entretien pour quel matériau',
      intro:
        'Les règles de base des associations professionnelles et des fabricants pour les surfaces les plus fréquentes dans les villas. À imprimer pour toutes les personnes qui nettoient chez vous.',
      columns: ['Matériau', 'Pour qu’il reste beau', 'Ce qui l’abîme'],
      rows: [
        [
          'Marbre, calcaire, travertin',
          'D’abord enlever le sable et la poussière à sec. Ensuite un nettoyant neutre ou un savon pour pierre, rincer à l’eau claire et sécher les surfaces polies, sinon des traces d’eau restent visibles.',
          'Tout acide, y compris le vinaigre, le citron et les détartrants : il ternit la surface. Les produits à récurer et les éponges à tampon vert ou bleu rayent le poli.',
        ],
        [
          'Granit, gneiss, quartzite',
          'Résistants aux acides. Selon l’association suisse de la pierre naturelle, toutes les méthodes de nettoyage courantes sont possibles.',
          'La confusion : si l’on ne sait pas quelle pierre a été posée, un essai à un endroit caché montre si elle est sensible aux acides.',
        ],
        [
          'Parquet vitrifié ou huilé',
          'Aspirer et essuyer de temps en temps avec un chiffon humide. Microfibres seulement si le fabricant les autorise. Le parquet huilé demande un entretien régulier selon son système de traitement.',
          'Nettoyage à grande eau, autolaveuses et appareils à vapeur',
        ],
        [
          'Laque brillante, par exemple sur les façades de cuisine',
          'Peau de chamois ou chiffon doux en cuir, eau chaude avec un nettoyant ménager doux, toujours essuyer sans appuyer',
          'Microfibres, chiffons durcis et produits agressifs : ils laissent des rayures durables.',
        ],
        [
          'Robinetterie',
          'Mettre le produit sur un chiffon doux en coton, ne pas le vaporiser directement. Un fabricant recommande l’acide citrique contre le calcaire, mais jamais sur la pierre naturelle voisine.',
          'Vinaigre, acides acétique, formique, phosphorique et chlorhydrique, eau de Javel, éponges à récurer, brosses et microfibres',
        ],
        [
          'Rembourrages, rideaux, tapis',
          'L’étiquette d’entretien et les indications du fabricant',
          'Tout traitement dont le symbole est barré sur l’étiquette',
        ],
      ],
      note:
        'Les notices d’entretien de vos fabricants priment toujours. Si elles diffèrent de ce tableau, nous les suivons.',
      sources: [
        nvs,
        { label: 'Natural Stone Institute : Care & Cleaning of Natural Stone (en anglais)', href: 'https://www.naturalstoneinstitute.org/consumers/care/' },
        { label: 'Association suisse du parquet ISP : notions de base et notices d’entretien (en allemand)', href: 'https://www.parkett-verband.ch/de/Parkett/Parkett-ABC-und-Pflegeanleitungen' },
        { label: 'Kurt Keller AG : conseils d’entretien des façades, surfaces et armoires (en allemand)', href: 'https://www.kkag.ch/de/reinigung-und-pflege/pflegehinweise-fur-fronten-oberflachen-und-schranke/' },
        { label: 'hansgrohe : détartrer et nettoyer la robinetterie (en allemand)', href: 'https://www.hansgrohe.de/bad/ratgeber/pflege-wartung/armaturen-entkalken' },
        { label: 'GINETEX Germany : symboles d’entretien (en allemand)', href: 'https://ginetex.de/pflegekennzeichnung/pflegesymbole/' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'gemaelde-und-kunst',
      title: 'Tableaux et œuvres d’art : là où le nettoyage s’arrête',
      paragraphs: [
        'Les œuvres d’art elles-mêmes, nous ne les nettoyons qu’avec votre accord explicite. La raison figure dans les recommandations des instituts de conservation : même un mauvais dépoussiérage peut abîmer durablement un tableau.',
      ],
      items: [
        'Chiffons à poussière, secs ou humides, poils durs et plumeaux n’ont rien à faire sur un tableau. Les fils s’accrochent à la peinture en relief, poils et plumes rayent, l’humidité peut détacher la peinture.',
        'Une peinture qui se soulève ou s’écaille n’est pas touchée. Une surface peinte mate peut garder des zones brillantes durables après un simple passage au pinceau.',
        'Nettoyer la surface d’un tableau et réparer des dommages est l’affaire d’une restauratrice ou d’un restaurateur.',
        'Pour l’emplacement, les spécialistes conseillent : pas au-dessus de la cheminée, jamais en plein soleil et avec une humidité relative aussi constante que possible, entre 40 et 60 pour cent.',
      ],
      note:
        'La restauration ne fait pas partie de notre prestation. L’Association suisse de conservation et restauration SKR répertorie les spécialistes en Suisse dans son annuaire.',
      sources: [
        { label: 'Smithsonian Museum Conservation Institute : Caring for Your Paintings (en anglais)', href: 'https://mci.si.edu/caring-your-paintings' },
        { label: 'Institut canadien de conservation : Basic care, Paintings (en anglais)', href: 'https://www.canada.ca/en/conservation-institute/services/care-objects/fine-art/basic-care-paintings.html' },
        { label: 'Association suisse de conservation et restauration SKR', href: 'https://restaurierung.swiss/fr' },
      ],
    },
    {
      kind: 'checklist',
      id: 'erster-rundgang',
      title: 'Avant la première intervention : la liste pour le tour de la maison',
      intro:
        'Nous passons ces points en revue avec vous lors du premier tour. Imprimée, la liste vous aide à vous préparer, vous, votre gérance ou votre courtier.',
      groups: [
        {
          title: 'Pièces et matériaux',
          items: [
            'Quelles pièces sont nettoyées et dans lesquelles personne n’entre',
            'Quelles pierres, quels bois et quelles finitions ont été posés, dans la mesure où on le sait',
            'Notices d’entretien du fabricant, de la menuiserie ou de l’architecte d’intérieur',
            'Produits que vous préférez ou excluez',
          ],
        },
        {
          title: 'Art et objets de valeur',
          items: [
            'Quelles œuvres d’art et antiquités ne sont touchées qu’avec votre accord',
            'Vitrines, collections et armoires qui restent fermées',
            'Où se trouvent les pièces fragiles, pour que personne ne les heurte en nettoyant la pièce',
            'Consignes d’entretien d’une galerie ou d’un restaurateur, s’il y en a',
          ],
        },
        {
          title: 'Clés, alarme et accès',
          items: [
            'Comment les clés sont remises et conservées',
            'Qui active et désactive l’alarme, et comment',
            'Qui est dans la maison à l’arrivée de l’équipe',
            'Si vous souhaitez un accord de confidentialité',
          ],
        },
        {
          title: 'Horaires et signalements',
          items: [
            'Horaires fixes, aussi le soir ou le week-end',
            'Vos dates de voyage, pour que la maison soit prête avant votre arrivée',
            'À quelle fréquence quelqu’un passe pendant votre absence',
            'Qui est informé de ce que nous remarquons, et par quel moyen',
          ],
        },
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Règles pour les clés et l’alarme',
      text: 'Après votre accord sur le devis, nous convenons de la remise et de la conservation des clés, de l’utilisation de l’alarme et, si vous le souhaitez, d’un accord de confidentialité.',
    },
    {
      title: 'Première intervention',
      text: 'L’équipe qui viendra désormais chez vous travaille dès le premier jour selon les consignes d’entretien réunies lors du tour de la maison.',
    },
    {
      title: 'Entretien courant',
      text: 'L’équipe vient aux heures convenues et, pendant votre absence, aussi pour des rondes de contrôle. Si vos projets changent, par exemple avant une réception ou un voyage, nous adaptons les interventions.',
    },
  ],
  faq: [
    {
      question: 'De quoi dépend le prix de l’entretien d’une villa ?',
      answer:
        'Il n’y a pas de forfait, car les maisons diffèrent beaucoup. L’effort dépend surtout de la surface habitable et du nombre de pièces, de la part de surfaces délicates comme la pierre naturelle, la laque brillante et le parquet huilé, et du rythme : chaque semaine, chaque mois ou seulement avant des réceptions. S’y ajoutent des prestations comme les rondes de contrôle pendant votre absence. Nous vous donnons le prix après le tour de la maison, pour votre maison précisément.',
    },
    {
      question: 'De quoi avez-vous besoin avant la première intervention ?',
      answer:
        'L’accès à la maison, les règles pour l’alarme, les notices d’entretien existantes pour les sols, la pierre et la cuisine, et une personne informée de ce que nous remarquons. La liste à imprimer figure plus haut, sous « Avant la première intervention ».',
    },
    {
      question: 'Est-ce toujours les mêmes personnes qui viennent ?',
      answer:
        'Oui. Votre maison est confiée à une équipe fixe qui connaît vos pièces, vos matériaux et vos règles pour les clés et l’alarme. Toutes les personnes de l’équipe ont été vérifiées par nos soins.',
    },
    {
      question: 'Nettoyez-vous aussi nos tableaux et nos sculptures ?',
      answer:
        'Uniquement avec votre accord explicite. Nous nettoyons avec soin les pièces qui abritent de l’art ; sinon, les œuvres elles-mêmes restent intactes. Selon les instituts de conservation, le nettoyage de la surface d’un tableau et toute restauration relèvent d’un ou d’une spécialiste.',
    },
    {
      question: 'Pouvons-nous imposer les produits d’entretien ?',
      answer:
        'Oui. Si le fabricant de vos sols, de votre cuisine ou de votre robinetterie recommande certains produits, nous travaillons avec eux. Sur le marbre, le calcaire et le travertin, nous déconseillons les produits contenant de l’acide, même ceux réputés doux.',
    },
    {
      question: 'Nettoyez-vous aussi avant et après une réception ?',
      answer:
        'Oui, en plus de l’entretien courant, et aussi le week-end. Indiquez-nous la date, le nombre approximatif d’invités et les pièces utilisées.',
    },
    {
      question: 'Comment savoir quelle pierre a été posée dans notre maison ?',
      answer:
        'Le plus sûr est de consulter les documents de construction ou le fournisseur de la pierre qui, selon l’association suisse de la pierre naturelle, peut aussi indiquer la bonne méthode de nettoyage. À défaut, un essai à un endroit caché montre si la pierre est sensible aux acides. Comme l’essai rend la surface rugueuse à cet endroit, il revient à un ou une spécialiste.',
    },
  ],
  related: [
    { path: '/premium/yacht', text: 'Si un bateau fait partie de la maison au bord du lac : teck, gelcoat et sellerie à la place d’amarrage.' },
    { path: '/leistungen/umzugsreinigung', text: 'Lors d’un départ ou d’une vente : le nettoyage final avant la remise, pour les villas aussi pour les particuliers.' },
    { path: '/premium', text: 'Toutes les prestations premium, de la résidence secondaire au family office, sur une seule page.' },
  ],
  cta: {
    title: 'Convenir d’un tour de votre maison',
    text: 'Pour le devis, il nous faut le lieu, la surface habitable approximative et le nombre de pièces, les matériaux particuliers que vous connaissez, et s’il s’agit d’un entretien courant, d’une résidence secondaire ou d’un seul événement. Nous faisons le tour avec vous, votre gérance ou votre courtier, sous confidentialité si vous le souhaitez. Le tour de la maison et le devis ne vous coûtent rien et ne vous engagent à rien.',
  },
}
