import type { ServicePageContent, Source } from '../../types'

// Même structure et mêmes clés que content/de/leistungen/sonderreinigungen.ts. Les sources sont
// les originaux suisses (surtout en allemand), vérifiés le 28.09.2026.

const nvs: Source = {
  label: 'Association suisse de la pierre naturelle NVS : fiche technique sur le nettoyage des revêtements en pierre naturelle (janvier 2018, en allemand)',
  href: 'https://nvs.ch/fileadmin/user_upload/nvs/1_Dienstleistungen/Technische_Merkblaetter/15_MB_Reinigung_von_Naturstein_Belaegen.pdf',
}
const ceruniqStein: Source = {
  label: 'Ceruniq (association suisse du carrelage) : instructions d’entretien pour la pierre naturelle (février 2025, en allemand)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-natursteinbelaege.pdf',
}
const ceruniqKeramik: Source = {
  label: 'Ceruniq : instructions de nettoyage et d’entretien des revêtements céramiques (février 2025, en allemand)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/reinigungs-und-pflegeanleitung-fuer-keramische-belaege.pdf',
}
const ceruniqErst: Source = {
  label: 'Ceruniq : premier nettoyage des carrelages à joints de ciment (février 2025, en allemand)',
  href: 'https://www.ceruniq.ch/wp-content/uploads/2025/03/erstreinigung-fuer-keramische_belaege.pdf',
}
const isp: Source = {
  label: 'ISP, association suisse du parquet : instructions d’entretien du parquet huilé et vitrifié',
  href: 'https://www.parkett-verband.ch/fr/Parkett/Parkett-ABC-und-Pflegeanleitungen',
}
const forboLinoleum: Source = {
  label: 'Forbo Flooring : recommandation de nettoyage et d’entretien du Marmoleum avec Topshield Pro (03/2022, en allemand)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/9597/Forbo_Linoleum_Reinigung-Pflege_202204.pdf',
}
const forboVinyl: Source = {
  label: 'Forbo Flooring : recommandation de nettoyage et d’entretien des revêtements design Allura en vinyle (en allemand)',
  href: 'https://forbo.blob.core.windows.net/forbodocuments/711557/Forbo_Allura-Designbelage_Reinigung-Pflege_202001.pdf',
}
const bag: Source = {
  label: 'Office fédéral de la santé publique OFSP : « Vorsicht Schimmel », guide sur les moisissures (août 2023, en allemand)',
  href: 'https://www.bag.admin.ch/dam/de/sd-web/wBJWq1KVfpS-/vorsicht-schimmel.pdf',
}
const or257h: Source = {
  label: 'Code des obligations, art. 257h, al. 3 (annonce des travaux sur la chose louée)',
  href: 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr#art_257_h',
}

export const sonderreinigungen: ServicePageContent = {
  path: '/leistungen/sonderreinigungen',
  area: 'leistungen',
  eyebrow: 'Nettoyage en profondeur selon le revêtement',
  h1: 'Nettoyage en profondeur et spécial pour immeubles et surfaces commerciales',
  lead: [
    'La cage d’escalier, le sol du bureau ou les sanitaires ne paraissent plus propres malgré le nettoyage courant : les joints sont gris, d’anciennes couches d’entretien collent au sol, le calcaire s’est déposé sur la robinetterie. Un nettoyage en profondeur élimine tout cela, avec des produits adaptés au revêtement.',
    'Nous le réalisons pour des gérances, des communautés de PPE, des propriétaires et des entreprises. Vous trouverez ici ce que chaque sol supporte, comment distinguer la saleté d’un dommage, et des modèles pour la préparation, l’avis aux locataires et le contrôle final.',
  ],
  facts: [
    { label: 'Intervention', value: 'Ponctuelle ou à intervalles espacés, souvent entre deux locations ou utilisations' },
    { label: 'Pendant les travaux', value: 'Sols mouillés, zones fermées tronçon par tronçon' },
    { label: 'Votre part', value: 'Dégager les sols, couper le chauffage au sol, informer les locataires' },
    { label: 'Non compris', value: 'Ponçage, vitrification, rejointoiement et réparations' },
  ],
  sections: [
    {
      title: 'Ce que le nettoyage courant n’enlève plus',
      paragraphs: [
        'Le nettoyage d’entretien ramasse la saleté des derniers jours. Ce qui s’accumule pendant des mois reste en place : des produits d’entretien appliqués couche après couche qui emprisonnent la saleté, du calcaire sur la robinetterie, des joints gris, des zones de passage collantes.',
        'Un nettoyage en profondeur retire ces couches jusqu’à retrouver la surface d’origine. Il se justifie surtout dans ces cas :',
      ],
      items: [
        'Surface de bureau ou commerciale entre deux locations',
        'Après une longue période d’inoccupation ou une utilisation intensive',
        'Avant le début d’un nouveau [nettoyage d’entretien](/leistungen/unterhaltsreinigung), pour qu’il parte d’un état propre',
        'Lorsque les sols restent ternes malgré l’entretien et que les joints sont plus foncés qu’aux endroits protégés',
      ],
    },
    {
      title: 'Sanitaires : calcaire, tartre urinaire et joints',
      paragraphs: [
        'Les sanitaires demandent souvent un nettoyage spécial. Il s’attaque à des salissures tenaces bien localisées plutôt qu’à toute la surface, ici surtout au calcaire et au tartre urinaire.',
        'Les deux s’enlèvent avec des produits acides, qui attaquent les joints de ciment. C’est pourquoi les carreaux et les joints sont d’abord saturés d’eau, le produit n’agit que peu de temps, et l’on rince plusieurs fois à l’eau claire à la fin. Sur le marbre, le calcaire et le travertin, aucun acide n’a sa place, même après avoir mouillé le sol.',
        'Les joints devant les WC et les urinoirs demandent un travail à la brosse, car une machine n’atteint pas les bords. Les points noirs dans les joints en silicone sont un autre cas : il s’agit de moisissure dans le matériau, et le joint doit être remplacé.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'bodenbelaege',
      title: 'Quel sol supporte quel nettoyage',
      intro:
        'Dans un nettoyage en profondeur, c’est le produit qui décide : ce qui dissout le calcaire sur le granit attaque le marbre. Le tableau résume les recommandations des associations professionnelles suisses et des fabricants.',
      columns: ['Revêtement', 'Ce qui compte', 'Ce qui abîme'],
      rows: [
        [
          'Marbre, calcaire, travertin',
          'Produits au pH neutre ou légèrement alcalins, puis rincer soigneusement et aspirer toute l’eau sale.',
          'Tout acide, y compris le vinaigre, l’acide citrique et les nettoyants acides pour salle de bains ou sanitaires : il attaque la surface. Les disques abrasifs peuvent rayer la pierre polie.',
        ],
        [
          'Granit, gneiss, quartzite',
          'Résistants aux acides, toutes les méthodes de nettoyage sont possibles, y compris le détartrage avec des produits acides.',
          'Les acides chlorhydrique et sulfurique décolorent la pierre. Les joints de ciment voisins doivent quand même être protégés en les mouillant d’abord.',
        ],
        [
          'Carrelage et grès cérame à joints de ciment',
          'Dissoudre la graisse et les anciens produits d’entretien avec un nettoyant alcalin, le calcaire avec un nettoyant sanitaire. Toujours mouiller d’abord, laisser agir peu de temps, rincer plusieurs fois à l’eau claire. Couper entièrement le chauffage au sol avant.',
          'Des produits acides sur des joints secs : ils attaquent le mortier et peuvent abîmer les joints foncés ou colorés. Trop de nettoyant avec additifs d’entretien laisse des taches durables.',
        ],
        [
          'Linoléum',
          'Nettoyants d’un pH inférieur à 9. Forbo livre son linoléum avec une couche de protection d’usine que le nettoyage ne doit ni enlever ni abîmer.',
          'Solutions fortement alcalines, acides, nettoyants sanitaires, poudres à récurer et solvants puissants.',
        ],
        [
          'Sols plastiques (PVC, vinyle)',
          'Avant un nouveau revêtement de protection, frotter à la machine avec un décapant adapté au vinyle et rincer à l’eau claire. Le sol doit être exempt de résidus et entièrement sec.',
          'Poudres à récurer, acides, nettoyants sanitaires et solvants puissants.',
        ],
        [
          'Parquet vitrifié',
          'Essuyer seulement avec un chiffon bien essoré, avec un nettoyant neutre si nécessaire. Machines de nettoyage uniquement avec l’accord du fabricant.',
          'Nettoyage à grande eau, appareils à vapeur et produits abrasifs.',
        ],
        [
          'Parquet huilé',
          'Nettoyer avec les produits du système d’huile utilisé, puis huiler régulièrement.',
          'Nettoyeurs à vapeur, produits abrasifs et chiffons en microfibre non autorisés pour le parquet.',
        ],
      ],
      note:
        'Ce sont les instructions d’entretien du fabricant du revêtement qui font foi. Si le revêtement est inconnu, un essai à un endroit discret précède tout nettoyage en profondeur. Pour la pierre naturelle, la NVS recommande en outre un test préalable pour savoir si la pierre supporte l’acide.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, ceruniqErst, forboLinoleum, forboVinyl, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'schaden-oder-schmutz',
      title: 'Sale ou endommagé ?',
      intro:
        'Un nettoyage en profondeur enlève la saleté, pas les dommages. Avec ce tableau, vous jugez lors de votre tour d’inspection si un nettoyage aidera ou si le travail revient à un autre spécialiste.',
      columns: ['Ce que vous voyez', 'Cause la plus fréquente', 'Ce qui aide'],
      rows: [
        [
          'Taches mates et rugueuses sur du marbre ou du calcaire poli',
          'Un acide a attaqué la surface, par exemple du vinaigre, du jus de citron ou un détartrant.',
          'Ponçage et polissage par une entreprise spécialisée en pierre naturelle. Un nettoyage ne rendra pas l’éclat.',
        ],
        [
          'Joints de ciment gris, solides et sans fissures',
          'Graisse, saleté et restes de produits d’entretien à la surface du joint.',
          'Nettoyage en profondeur avec un nettoyant alcalin, en mouillant d’abord les joints.',
        ],
        [
          'Joints qui s’effritent, se désagrègent ou manquent par endroits',
          'Le mortier des joints est attaqué, par exemple par des produits acides utilisés sans mouiller d’abord.',
          'Faire refaire les joints par un carreleur. Un nettoyage en profondeur peut aggraver le dommage.',
        ],
        [
          'Points noirs dans les joints en silicone de la douche, de la baignoire ou de la cuisine',
          'Moisissure dans le matériau du joint.',
          'Faire retirer et renouveler le mastic par un spécialiste, et vérifier la cause de l’humidité.',
        ],
        [
          'Zones de passage plus foncées que les bords sur de la pierre naturelle',
          'Patine d’usage : les pores les plus fins sont remplis de poussière.',
          'Même un nettoyage en profondeur ne l’enlève en général pas entièrement. Toujours nettoyer des surfaces entières, sinon des différences de teinte apparaissent.',
        ],
        [
          'Parquet gris, rugueux ou mis à nu dans les zones de passage',
          'La vitrification ou la couche d’huile est usée.',
          'Parqueteur : selon la surface, huiler à nouveau ou poncer et vitrifier.',
        ],
      ],
      note:
        'Relevez ces endroits avant le nettoyage, idéalement avec des photos. Il sera ainsi clair plus tard ce qui existait déjà avant.',
      sources: [nvs, ceruniqStein, ceruniqKeramik, bag, isp],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'checkliste-grundreinigung',
      title: 'Liste de contrôle pour la préparation et la réception',
      intro:
        'Pour la gérance, le concierge ou la direction d’exploitation : ce qui doit être réglé avant la date et comment contrôler le résultat.',
      groups: [
        {
          title: 'Avant la date',
          items: [
            'Noter le revêtement de chaque pièce, retrouver les instructions d’entretien remises à la fin du chantier',
            'Relever les dommages connus avec des photos : endroits attaqués par un acide, joints qui se détachent, parquet usé',
            'Informer à temps les locataires ou le personnel, par exemple avec l’avis ci-dessous',
            'Faire couper entièrement le chauffage au sol dans les pièces concernées',
            'Régler l’accès pour le jour de l’intervention, garder l’eau, un évier et des prises accessibles',
            'La veille, dégager les sols. Déplacer les grands meubles ou les laisser sciemment en place : la surface en dessous n’est alors pas nettoyée',
          ],
        },
        {
          title: 'Lors de la réception',
          items: [
            'Les joints ont retrouvé leur couleur d’origine : comparez avec un endroit protégé, par exemple sous un meuble',
            'Aucune trace de calcaire sur la robinetterie, les parois de douche et le carrelage mural',
            'Aucun voile en lumière rasante : éclairer le sol à plat avec une lampe de poche',
            'Aucune zone collante et aucun bord blanc de restes de produit dans les coins',
            'Les plinthes, les portes et les cadres de porte ont aussi été nettoyés',
            'Aucune nouvelle tache mate sur la pierre, silicone et joints intacts',
          ],
        },
      ],
      sources: [or257h, ceruniqErst],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'text',
      id: 'aushang',
      title: 'Modèle : avis aux locataires',
      paragraphs: [
        'Titre : Nettoyage en profondeur de la cage d’escalier',
        'Le [date], entre [heure] et [heure], la cage d’escalier [et la buanderie] sera nettoyée à fond. Pendant ce temps, les sols seront mouillés et certains tronçons brièvement fermés. Pour accéder aux logements, aux boîtes aux lettres et à l’ascenseur, passez par [indiquer un passage sec].',
        'Merci de rentrer vos chaussures, vélos, poussettes et plantes dans votre logement ou à la cave au plus tard la veille au soir. Ce qui reste dans la cage d’escalier ne peut pas être nettoyé.',
        'Pour toute question : [gérance, nom, téléphone].',
      ],
      note:
        'Le Code des obligations prévoit que le bailleur annonce à temps au locataire les travaux sur la chose louée et tienne compte de ses intérêts lors de leur accomplissement. Si un nettoyage en fait partie, c’est à apprécier au cas par cas. Un avis affiché est la solution simple.',
      sources: [or257h],
    },
  ],
  scope: {
    title: 'Ce que comprend le nettoyage en profondeur',
    intro:
      'Vous choisissez les surfaces, nous les nettoyons une fois ou à intervalles espacés. Pour le verre et les façades, il y a le [nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung), pour les nouvelles constructions le [nettoyage de fin de chantier](/leistungen/baureinigung).',
    items: [
      'Sols : saleté incrustée et résidus d’anciens produits d’entretien, méthode selon le revêtement',
      'Joints entre les carreaux de sol et de mur',
      'Sanitaires : calcaire et tartre urinaire sur les WC, urinoirs, lavabos, la robinetterie et le carrelage',
      'Cuisines et kitchenettes : graisse sur les façades d’armoires, les plans de travail et le carrelage mural',
      'Plinthes, portes et cadres de porte',
      'Cages d’escalier, entrées et buanderies dans les immeubles avec locataires',
    ],
    notIncluded: [
      'Poncer, polir et vitrifier la pierre ou le parquet : c’est le travail d’une entreprise spécialisée en pierre naturelle ou d’un parqueteur.',
      'Refaire les joints et remplacer les joints en silicone.',
      'L’entretien courant ensuite : c’est le rôle du [nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyage final à la remise d’un logement : une prestation à part, le [nettoyage de fin de bail](/leistungen/umzugsreinigung).',
    ],
  },
  steps: [
    {
      title: 'Préparer',
      text: 'Vous suivez la liste de contrôle ci-dessus et affichez l’avis à temps.',
    },
    {
      title: 'Nettoyer',
      text: 'Pièce par pièce : appliquer le produit adapté au revêtement et le laisser agir, détacher à la machine et à la main le long des bords, aspirer l’eau sale, rincer à l’eau claire.',
    },
    {
      title: 'Remise',
      text: 'Après l’intervention, nous vous remettons les surfaces. Contrôlez-les avec la liste de contrôle et ne remettez meubles et matériel en place qu’une fois le sol sec.',
    },
  ],
  faq: [
    {
      question: 'Combien coûte un nettoyage en profondeur ?',
      answer:
        'Le prix dépend surtout de la surface, du revêtement et de l’état : combien de couches d’entretien et combien de calcaire il faut enlever. S’y ajoutent la part de travail à la main sur les joints, les coins et les sanitaires, le moment de l’intervention, par exemple un week-end, et le degré de dégagement des locaux. Nous examinons ces points sur place et vous indiquons ensuite un prix pour votre bien.',
    },
    {
      question: 'Combien de temps les locaux sont-ils inutilisables ?',
      answer:
        'Pendant le nettoyage et jusqu’à ce que le sol soit sec. La durée dépend de la surface, du revêtement et de l’aération. Dans les cages d’escalier, on peut travailler tronçon par tronçon, de sorte qu’un passage reste libre. Pour les bureaux et les cabinets, les week-ends et les vacances d’entreprise conviennent bien.',
    },
    {
      question: 'Quels produits conviennent au marbre et aux autres pierres naturelles ?',
      answer:
        'Pour le marbre, le calcaire et le travertin, des produits au pH neutre ou légèrement alcalins, jamais d’acide. Même du vinaigre ou un détartrant attaque la surface. Le granit, le gneiss et le quartzite supportent aussi les produits acides. Si personne ne sait quelle pierre a été posée, le test préalable décrit par l’Association suisse de la pierre naturelle aide : si une goutte d’acide fait effervescence sur un endroit caché et légèrement poncé, la pierre ne supporte pas l’acide.',
    },
    {
      question: 'Et si le sol est endommagé plutôt que sale ?',
      answer:
        'Un nettoyage n’en rétablit alors qu’une partie. Un marbre attaqué par un acide doit être poncé et poli, un parquet usé demande un parqueteur, des joints érodés un carreleur. Ce que nous constatons au préalable, nous vous le disons franchement, pour que vous puissiez confier le travail au bon corps de métier. Le tableau « Sale ou endommagé ? » aide pour une première estimation.',
    },
    {
      question: 'À quelle fréquence faut-il un nettoyage en profondeur ?',
      answer:
        'Il n’y a pas de rythme fixe. Pour les sols en pierre naturelle, l’Association suisse de la pierre naturelle indique une fréquence mensuelle, semestrielle ou annuelle selon l’encrassement et les exigences d’hygiène. Chez vous, c’est l’état qui le montre : joints foncés, zones de passage ternes, traces sur les plinthes. Un bon nettoyage courant et un tapis à l’entrée qui retient le sable allongent l’intervalle.',
    },
    {
      question: 'Un nettoyage d’entretien plus minutieux ne suffit-il pas ?',
      answer:
        'En général non, car les produits sont différents. Le nettoyage d’entretien travaille en douceur et souvent avec des additifs d’entretien, et des couches se forment en dessous avec le temps. Le nettoyage en profondeur retire ces couches avec des produits plus puissants et des machines. Ensuite, le [nettoyage d’entretien](/leistungen/unterhaltsreinigung) maintient cet état.',
    },
    {
      question: 'Un mauvais nettoyage peut-il faire perdre la garantie ?',
      answer:
        'C’est possible. Les instructions de nettoyage de l’association du carrelage Ceruniq précisent qu’un nettoyage inapproprié fait perdre la garantie. Ces instructions prévoient que le carreleur y inscrive les nettoyants recommandés et, pour le premier nettoyage, aussi le mortier de jointoiement utilisé. Si vous préparez les instructions remises à la fin du chantier avant le nettoyage en profondeur, vous voyez donc quels produits sont prévus pour le revêtement.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Lorsque l’état propre obtenu après le nettoyage en profondeur doit être maintenu à un rythme fixe.' },
    { path: '/leistungen/umzugsreinigung', text: 'Lorsqu’un logement doit être prêt à être remis entre deux locations, avec garantie de remise.' },
    { path: '/leistungen/baureinigung', text: 'Lorsque la poussière de chantier et les résidus laissés par les artisans doivent disparaître après une construction ou une transformation.' },
  ],
  cta: {
    title: 'Demander un nettoyage en profondeur',
    text: 'Indiquez-nous l’adresse, les surfaces avec leur taille approximative, les revêtements et votre créneau. Vous pouvez nous envoyer ensuite par e-mail des photos des sols et des joints. Avec ces informations, nous planifions la visite qui, comme le devis, est gratuite et sans engagement.',
  },
}
