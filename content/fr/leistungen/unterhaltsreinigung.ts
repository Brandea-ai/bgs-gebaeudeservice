import type { ServicePageContent } from '../../types'

// Mêmes clés que content/de/leistungen/unterhaltsreinigung.ts. Sources juridiques lues le 28.09.2026
// sur fedlex.admin.ch (CO art. 257a, 257b, 269d, 270b ; OBLF art. 4 ; CC art. 712h, 712m).
export const unterhaltsreinigung: ServicePageContent = {
  path: '/leistungen/unterhaltsreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage d’entretien et de cages d’escalier pour immeubles',
  lead: [
    'Tous les occupants d’un immeuble partagent la cage d’escalier, l’ascenseur et la buanderie, et les plaintes pour saleté aboutissent à la gérance. Nous nettoyons ces parties communes plusieurs fois par semaine, selon des prestations convenues par écrit.',
    'Plus bas, vous trouverez un modèle de cahier des charges pour comparer les devis, un aperçu des frais accessoires et de la PPE, ainsi qu’un protocole pour votre tournée de contrôle.',
  ],
  facts: [
    { label: 'Pour', value: 'Immeubles locatifs, PPE, immeubles mixtes, surfaces commerciales' },
    { label: 'Fréquence', value: 'Plusieurs fois par semaine, fixée par zone' },
    { label: 'Compris', value: 'Réapprovisionnement en savon, papier et sacs à ordures' },
    { label: 'Non compris', value: 'Appartements, bureaux, vitres extérieures, nettoyage en profondeur' },
  ],
  sections: [
    {
      title: 'Quand confier la cage d’escalier à une entreprise',
      paragraphs: [
        'Dans de nombreux immeubles locatifs, les locataires nettoient la cage d’escalier à tour de rôle selon un plan. Cela fonctionne tant que chacun participe. Dès que les locataires changent, que les étages restent inégalement propres ou que les plaintes s’accumulent, un nettoyage régulier par une entreprise est en général la solution la plus sereine.',
        'Autres situations typiques : l’entreprise ou le concierge actuel arrête, une gérance reprend un immeuble, ou un commerce avec clientèle s’installe au rez-de-chaussée. La fréquence de nettoyage de l’entrée et de l’ascenseur change alors aussi.',
        'Qui supporte les coûts après le changement dépend du bail et de la loi.',
      ],
    },
    {
      title: 'Réapprovisionnement en savon, papier et sacs à ordures',
      paragraphs: [
        'Locataires et clientèle remarquent un distributeur de savon vide plus vite qu’un palier poussiéreux. C’est pourquoi le réapprovisionnement des consommables fait partie du nettoyage d’entretien.',
        'Les consommables sont achetés soit par nous, soit par vous. Le devis écrit précise quels articles sont concernés et qui les achète.',
      ],
      items: [
        'Papier toilette et essuie-mains en papier pour les WC',
        'Savon liquide pour les distributeurs aux lavabos',
        'Sacs à ordures pour poubelles et conteneurs',
        'Autres articles, si vous les mentionnez dans votre demande',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Cahier des charges type pour les parties communes',
      intro:
        'Un cahier des charges rend les devis comparables, car chaque entreprise calcule avec les mêmes zones, tâches et fréquences. Ce modèle pour un immeuble mixte avec ascenseur et étage commercial n’est pas un devis. Les surfaces de locataires individuels forment des postes séparés, décomptés à part.',
      columns: ['Zone', 'Tâche', 'Fréquence (exemple)'],
      rows: [
        ['Entrée et sas', 'Laver le sol, aspirer le paillasson, nettoyer la porte vitrée', 'À chaque passage'],
        ['Escaliers et paliers', 'Balayer et laver les marches et les coins ; essuyer à l’humide mains courantes et interrupteurs', 'À chaque passage'],
        ['Ascenseur', 'Nettoyer sol, parois, miroir, boutons et portes de la cabine', 'À chaque passage'],
        ['Boîtes aux lettres, portes palières et encadrements', 'Essuyer, enlever les traces de doigts', 'Chaque semaine'],
        ['Buanderie et séchoir', 'Nettoyer le sol, essuyer le bac à laver et les étagères', 'Chaque semaine'],
        ['Couloirs de cave et de galetas, local à vélos', 'Balayer, enlever les toiles d’araignée', 'Chaque mois'],
        ['Couloirs et WC communs de l’étage commercial', 'Nettoyer sols, appareils sanitaires et robinetterie', 'À chaque passage'],
        ['Déchets et consommables', 'Vider les poubelles, réapprovisionner savon, papier et sacs', 'À chaque passage, si convenu'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'nebenkosten',
      title: 'Qui paie le nettoyage : droit du bail et PPE',
      intro:
        'Le Code des obligations, l’ordonnance sur le bail à loyer et le bail à ferme d’habitations et de locaux commerciaux (OBLF) et le Code civil règlent si les coûts du nettoyage de la cage d’escalier restent à la charge des propriétaires ou sont répercutés. L’aperçu résume les dispositions pour les cas les plus fréquents.',
      columns: ['Cas', 'Ce que prévoit la loi', 'Ce que cela signifie en pratique'],
      rows: [
        [
          'Immeuble loué, nettoyage convenu comme frais accessoires',
          'Les frais accessoires sont dus pour les prestations fournies par le bailleur ou un tiers en rapport avec l’usage de la chose (art. 257a al. 1 CO). Ce sont les dépenses effectives qui sont facturées (art. 257b al. 1 CO).',
          'Idéalement, la facture indique le nettoyage par immeuble. Les locataires peuvent consulter les pièces justificatives (art. 257b al. 2 CO).',
        ],
        [
          'Décompte ou forfait',
          'Un décompte des frais accessoires doit être établi et présenté au moins une fois par an. Un forfait doit se fonder sur la moyenne calculée sur trois ans (art. 4 OBLF).',
          'Classer les coûts de nettoyage par immeuble et par année, pour pouvoir justifier plus tard aussi un forfait.',
        ],
        [
          'Immeuble loué, nettoyage non convenu comme frais accessoires',
          'Les frais accessoires ne sont à la charge du locataire que si cela a été convenu spécialement (art. 257a al. 2 CO).',
          'Les coûts restent aux propriétaires. Pour les répercuter, il faut modifier le bail (ligne suivante).',
        ],
        [
          'Jusqu’ici les locataires nettoient, désormais une entreprise',
          'Si le bailleur introduit unilatéralement de nouveaux frais accessoires, les règles de la majoration de loyer s’appliquent : avis motivé sur la formule agréée par le canton, au moins dix jours avant le début du délai de résiliation, et au plus tôt pour le prochain terme de résiliation (art. 269d al. 1 et 3 CO). Les locataires peuvent contester la modification devant l’autorité de conciliation dans les 30 jours (art. 270b al. 2 CO).',
          'Faire coïncider le premier passage de la nouvelle entreprise avec la date des nouveaux frais accessoires. Tant que la modification n’a pas pris effet, les propriétaires supportent les coûts.',
        ],
        [
          'Propriété par étages',
          'Les copropriétaires contribuent aux frais d’entretien courant des parties communes proportionnellement à la valeur de leurs parts (art. 712h al. 1 et 2 CC). Si certaines parties ne servent que très peu ou pas du tout à certains copropriétaires, il en est tenu compte dans la répartition (art. 712h al. 3 CC).',
          'L’assemblée approuve chaque année le devis des frais annuels, les comptes et la répartition des frais (art. 712m al. 1 ch. 4 CC). Des coûts détaillés par zone montrent par exemple si l’ascenseur doit être réparti autrement pour le commerce au rez-de-chaussée.',
        ],
      ],
      note: 'L’aperçu résume les dispositions de manière simplifiée et ne remplace pas un conseil juridique. Vérifiez chaque cas à l’aide du bail et du règlement, au besoin avec un spécialiste.',
      sources: [
        { label: 'Code des obligations (CO), art. 257a, 257b, 269d et 270b', href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_257_a' },
        { label: 'Ordonnance sur le bail à loyer et le bail à ferme d’habitations et de locaux commerciaux (OBLF), art. 4', href: 'https://www.fedlex.admin.ch/eli/cc/1990/835_835_835/fr#art_4' },
        { label: 'Code civil suisse (CC), art. 712h et 712m', href: 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr#art_712_h' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'rundgang',
      title: 'Protocole de tournée après le nettoyage',
      intro:
        'Passez dans l’immeuble le jour du nettoyage ou le lendemain ; plus tard, vous jugez plutôt l’usage. Si quelque chose ne va pas, envoyez-nous le protocole avec la date et une photo.',
      columns: ['Point', 'Conforme', 'Remarque (étage, heure)'],
      rows: [
        ['Paillasson aspiré, pas de sable dans le sas', '☐', ''],
        ['Porte vitrée sans traces ni empreintes', '☐', ''],
        ['Marches, coins et derrière les portes sans poussière', '☐', ''],
        ['Mains courantes, garde-corps et interrupteurs propres', '☐', ''],
        ['Ascenseur : sol, miroir et boutons propres', '☐', ''],
        ['Boîtes aux lettres et portes palières propres', '☐', ''],
        ['Buanderie : sol sec, bac à laver propre', '☐', ''],
        ['Couloirs de cave et de galetas sans toiles d’araignée', '☐', ''],
        ['WC et lavabo propres, la pièce sent le frais', '☐', ''],
        ['Consommables réapprovisionnés, poubelles vidées', '☐', ''],
        ['Jours de nettoyage affichés dans la cage d’escalier', '☐', ''],
        ['Cahier des charges à jour disponible', '☐', ''],
      ],
      printable: true,
      updated: '2026-09-28',
    },
  ],
  scope: {
    title: 'Prestations comprises dans le nettoyage d’entretien',
    intro: 'L’essentiel est le nettoyage de la cage d’escalier. Selon l’immeuble s’ajoutent des locaux annexes et les parties communes d’un étage commercial :',
    items: [
      'Nettoyage de la cage d’escalier : marches, paliers, garde-corps et mains courantes',
      'Entrées avec sas, paillasson et porte vitrée',
      'Cabines d’ascenseur : sol, parois, miroir et tableau de commande',
      'Portes palières et encadrements, interrupteurs, boîtes aux lettres',
      'Buanderies, séchoirs, couloirs de cave et de galetas',
      'Réception, couloirs, WC et cuisines des surfaces commerciales',
      'Sols dans toutes les pièces convenues',
      'Vider les poubelles, réapprovisionner savon et papier',
    ],
    notIncluded: [
      'Le nettoyage à l’intérieur des appartements. Nous ne prenons pas en charge les ménages privés ordinaires ; les villas, lofts et résidences relèvent de notre [offre Premium](/premium).',
      'Bureaux et cabinets avec postes de travail : voir [Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung).',
      'Joints et sols en pierre qui demandent un nettoyage en profondeur ponctuel : [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen). Nettoyage final avant la remise d’un logement : [Nettoyage de fin de bail](/leistungen/umzugsreinigung).',
      'Vitres côté extérieur et façades : [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
      'Rondes de contrôle, installations techniques et petites réparations : [Conciergerie](/leistungen/hauswartung).',
    ],
  },
  steps: [
    {
      title: 'Préparer le début',
      text: 'Avant le premier passage, il faut un accès avec clé ou badge et une place dans l’immeuble pour le matériel et les produits.',
    },
    {
      title: 'Nettoyer selon le cahier des charges',
      text: 'Nous nettoyons les jours convenus selon le cahier des charges, chaque zone à la fréquence qui y est fixée.',
    },
    {
      title: 'Adapter à un nouvel usage',
      text: 'Si un commerce s’installe ou qu’un étage reste vide, les prestations et la fréquence peuvent être redéfinies avec vous.',
    },
  ],
  faq: [
    {
      question: 'À quelle fréquence nettoyer une cage d’escalier ?',
      answer:
        'Cela dépend du nombre de ménages qui l’utilisent et de la saleté qui entre de l’extérieur. Notre nettoyage d’entretien est conçu pour des immeubles nettoyés plusieurs fois par semaine. L’entrée et l’ascenseur demandent en général plus de soin que les couloirs de cave et de galetas.',
    },
    {
      question: 'Combien coûte un nettoyage d’entretien ?',
      answer:
        'Le temps de travail dépend surtout du nombre d’étages et de volées d’escalier, de la présence d’un ascenseur, des locaux annexes, de la fréquence et de l’usage. Une entrée avec un commerce au rez-de-chaussée demande plus de temps qu’une entrée utilisée uniquement par les locataires. Il importe aussi de savoir qui fournit les consommables, nous ou vous. Nous indiquons le prix après la visite dans le devis écrit. Notre [guide sur les coûts du nettoyage](/blog/reinigungskosten-schweiz) explique les facteurs de coût et la comparaison des devis.',
    },
    {
      question: 'Pouvons-nous facturer le nettoyage dans les frais accessoires ?',
      answer:
        'Le CO prévoit que les locataires ne paient les frais accessoires que s’ils ont été convenus spécialement (art. 257a al. 2 CO). Si le nettoyage figure dans le bail comme frais accessoires, il est facturé selon les coûts effectifs ou perçu sous forme de forfait fondé sur la moyenne de trois ans (art. 257b CO, art. 4 OBLF). Si le bailleur l’introduit unilatéralement, les règles de la majoration de loyer s’appliquent, avec la formule agréée par le canton (art. 269d CO), et les locataires peuvent contester la modification dans les 30 jours (art. 270b CO). Vérifiez votre cas à l’aide de votre bail.',
    },
    {
      question: 'Faut-il un local de nettoyage dans l’immeuble ?',
      answer:
        'Il facilite le travail. Dans un local fermant à clé ou un compartiment de cave, le matériel et les produits restent dans l’immeuble entre deux passages. Une arrivée d’eau avec vidoir à proximité évite en plus des trajets.',
    },
    {
      question: 'Les locataires doivent-ils préparer quelque chose ?',
      answer:
        'Non. Il est utile que les escaliers et les couloirs soient libres de chaussures, de vélos et d’autres objets les jours de nettoyage. Un avis dans la cage d’escalier avec les jours de nettoyage suffit généralement.',
    },
    {
      question: 'Le nettoyage d’entretien suffit-il, ou faut-il aussi un nettoyage en profondeur ?',
      answer:
        'Le nettoyage d’entretien enlève la saleté qui s’accumule entre deux passages. Avec les années, des résidus se fixent toutefois dans les joints et sur les sols en pierre, et les couches de protection s’usent. Un [nettoyage en profondeur](/leistungen/sonderreinigungen) ponctuel aide alors, idéalement avant le début d’un nouveau nettoyage d’entretien.',
    },
    {
      question: 'Nous changeons d’entreprise de nettoyage. À quoi faut-il veiller ?',
      answer:
        'Planifiez le début de sorte qu’il n’y ait pas de lacune entre le dernier passage de l’ancienne entreprise et le premier de la nouvelle. Le délai de résiliation figure dans le contrat actuel. Remettez à tous les prestataires le même cahier des charges, sinon vous comparez des prestations différentes. Faites-vous rendre les clés et badges par l’ancienne entreprise contre quittance.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Si, en plus de la cage d’escalier, il faut assurer des rondes de contrôle, les installations techniques et les remises d’appartements.' },
    { path: '/leistungen/sonderreinigungen', text: 'Si une saleté ancienne s’est fixée dans les joints et sur les sols en pierre, idéalement avant le début du nettoyage d’entretien.' },
    { path: '/leistungen/bueroreinigung', text: 'Si la surface commerciale se compose surtout de bureaux ou d’un cabinet avec postes de travail.' },
  ],
  cta: {
    title: 'Un devis pour la cage d’escalier et les parties communes',
    text: 'Indiquez-nous l’adresse, le nombre d’étages et d’appartements, l’ascenseur et les commerces éventuels, ainsi que la fréquence souhaitée. Joignez votre cahier des charges si vous en avez un. Nous visitons l’immeuble puis vous envoyons le devis, les deux gratuitement et sans engagement.',
  },
}
