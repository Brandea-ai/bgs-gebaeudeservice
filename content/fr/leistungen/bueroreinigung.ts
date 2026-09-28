import type { ServicePageContent } from '../../types'

// Mêmes clés et sources que content/de/leistungen/bueroreinigung.ts (E85)
export const bueroreinigung: ServicePageContent = {
  path: '/leistungen/bueroreinigung',
  area: 'leistungen',
  eyebrow: 'Nettoyage régulier',
  h1: 'Nettoyage de bureaux et de cabinets',
  lead: [
    'Un bureau doit être prêt chaque matin : corbeilles vides, kitchenette propre, savon et papier réapprovisionnés. Nous nettoyons bureaux, administrations et cabinets selon un rythme fixe, avant l’arrivée de votre équipe ou après son départ.',
    'Ce qui est nettoyé à chaque passage et ce qui ne l’est qu’une fois par semaine figure dans un cahier des charges. Les locaux où l’équipe peut entrer, vous les fixez avant le début. Vous trouverez sur cette page des modèles à imprimer pour les deux, ainsi que les plages horaires que la loi sur le travail impose aux interventions de nettoyage.',
  ],
  facts: [
    { label: 'Horaires', value: 'Tôt le matin ou le soir, en dehors de vos heures de travail et de consultation' },
    { label: 'Fréquence', value: 'Chaque jour, plusieurs fois par semaine ou une fois par semaine' },
    { label: 'Langues de l’équipe', value: 'Allemand, anglais, français et italien' },
    { label: 'Non compris', value: 'Fenêtres, cage d’escalier de l’immeuble, instruments des cabinets' },
  ],
  scope: {
    title: 'Ce que comprend le nettoyage de bureaux',
    intro: 'Prestations typiques pour bureaux, administrations et cabinets. Le cahier des charges plus haut indique à quelle fréquence chaque point est traité.',
    items: [
      'Vider les corbeilles et le vieux papier, remplacer les sacs',
      'Surfaces de travail dégagées, étagères, poignées de porte et interrupteurs',
      'Sols des bureaux, couloirs et salles de séance, aspirés ou lavés à l’humide selon le revêtement',
      'Réception, entrée et portes vitrées',
      'Kitchenettes et salles de pause',
      'Sanitaires avec WC, lavabo et miroir',
      'Réapprovisionner savon, papier et sacs poubelle',
      'Dans les cabinets : réception, salle d’attente et surfaces autorisées des salles de soins',
    ],
    notIncluded: [
      'Cage d’escalier, ascenseur et entrée de l’immeuble entier : voir [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
      'Nettoyage en profondeur des moquettes et des sols, par exemple avant un emménagement : voir [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
      'Fenêtres à l’intérieur et à l’extérieur : voir [Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung).',
      'Le retraitement des instruments et des dispositifs médicaux, qui reste du ressort de l’équipe de votre cabinet.',
    ],
  },
  sections: [
    {
      title: 'Un passage de haut en bas',
      paragraphs: [
        'Les déchets passent en premier : vider les corbeilles, porter le vieux papier au point de collecte, poser des sacs neufs. Viennent ensuite les surfaces de bureau dégagées, les étagères et les poignées de porte, puis la kitchenette et les sanitaires. Les sols se font à la fin, pour qu’aucun sol fraîchement nettoyé ne reçoive à nouveau poussière ou gouttes.',
        'WC et lavabos demandent leurs propres chiffons et gants, qui ne touchent jamais un bureau ni la machine à café. Beaucoup d’entreprises de nettoyage les distinguent donc par des couleurs. Vous pouvez le vérifier vous-même lors des premiers passages.',
      ],
    },
    {
      title: 'Dans les cabinets médicaux et de thérapie, votre plan d’hygiène fait foi',
      paragraphs: [
        'À la réception et dans la salle d’attente, beaucoup de mains touchent chaque jour les mêmes endroits : poignées de porte, comptoir, accoudoirs et tablettes. Le plan d’hygiène de votre cabinet prescrit les produits à utiliser et la fréquence, et l’équipe s’y conforme.',
        'Dans les salles de soins, l’équipe nettoie les sols et les surfaces que l’équipe de votre cabinet autorise. Votre équipe retraite elle-même les instruments et les dispositifs médicaux, et les appareils et médicaments ne font pas partie du nettoyage.',
      ],
    },
    {
      title: 'Ce que vous devriez voir le lendemain matin',
      paragraphs: [
        'Cinq minutes en ouvrant la porte suffisent pour contrôler un passage. Si vous remarquez quelque chose, signalez-le le jour même, tant qu’il est clair de quel passage il s’agit.',
      ],
      items: [
        'Corbeilles vides et munies d’un sac neuf',
        'Kitchenette sans traces de café, évier propre et sec',
        'Portes vitrées sans traces de doigts à hauteur de poignée',
        'Savon, papier et essuie-mains réapprovisionnés dans les sanitaires',
        'Documents et affaires personnelles là où vous les avez laissés',
        'Fenêtres fermées, lumière éteinte, portes verrouillées',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'leistungsverzeichnis',
      title: 'Cahier des charges bureau : quoi nettoyer à quelle fréquence',
      intro:
        'Exemple pour un bureau avec réception, kitchenette et deux WC. Biffez ce qui ne vous concerne pas et ajoutez vos propres locaux. Avec la même liste, vous pouvez comparer les devis de différents prestataires.',
      columns: ['Zone', 'À chaque passage', 'Chaque semaine', 'Sur demande'],
      rows: [
        ['Postes de travail', 'Vider les corbeilles, sacs neufs', 'Essuyer à l’humide les surfaces dégagées', 'Écrans, claviers, téléphones, chaises'],
        ['Kitchenette', 'Évier, plans de travail, machine à café à l’extérieur, sol', 'Façades des armoires et des appareils', 'Intérieur du réfrigérateur'],
        ['Sanitaires', 'WC, lavabo, miroir, sol, savon et papier', 'Carrelage mural près des lavabos, portes', 'Détartrer la robinetterie, cloisons'],
        ['Réception et salle d’attente', 'Comptoir, poignées, porte vitrée d’entrée', 'Chaises, tablettes, parois vitrées', 'Dépoussiérer plantes et décoration'],
        ['Sols', 'Couloirs, réception, kitchenette, sanitaires', 'Bureaux individuels et salles de séance', 'Plinthes et angles'],
        ['Portes et interrupteurs', 'Poignées de la kitchenette et des WC', 'Poignées et interrupteurs partout', 'Battants, encadrements, radiateurs'],
      ],
      note: 'Les fréquences sont un exemple. Une kitchenette pour trente personnes demande plus qu’une kitchenette pour cinq. Votre propre cahier des charges fait partie du devis.',
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'timeline',
      id: 'einsatzzeiten',
      title: 'Horaires d’intervention et loi sur le travail',
      intro:
        'La loi sur le travail s’applique à l’équipe de nettoyage. Elle découpe la journée en plages horaires, et celles-ci déterminent quand un nettoyage de bureaux est possible sans autorisation et quand des majorations s’appliquent.',
      entries: [
        {
          label: '6 h à 8 h',
          text: 'Travail de jour. Kitchenette et WC sont propres à l’arrivée des premiers. Si votre équipe commence à 7 h 30, la plage est courte pour de grandes surfaces.',
        },
        {
          label: 'Pendant les heures de travail',
          text: 'Travail de jour. Convient aux sanitaires très fréquentés, à la réception ou au cabinet pendant la pause de midi. Aspirateurs et sols mouillés dérangent les conversations.',
        },
        {
          label: '18 h à 20 h',
          text: 'Travail de jour. La plupart des postes sont libres, les déchets de la journée sont là. Dites-nous quels locaux passent en dernier, parce qu’on y travaille encore.',
        },
        {
          label: '20 h à 23 h',
          text: 'Travail du soir, sans autorisation. Les locaux sont vides et calmes, l’accès, l’alarme et la fermeture doivent donc être réglés.',
        },
        {
          label: '23 h à 6 h',
          text: 'Travail de nuit : interdit en principe, seulement avec autorisation, et le travail de nuit temporaire donne droit à une majoration de salaire d’au moins 25 %. Sans autorisation, ce n’est possible que si l’entreprise cliente relève elle-même de règles spéciales, par exemple parce qu’elle travaille 24 heures sur 24, et que le nettoyage de nuit est nécessaire à sa bonne marche.',
        },
        {
          label: 'Dimanche et jours fériés',
          text: 'Interdit du samedi 23 h au dimanche 23 h, ainsi que le jour de la fête nationale et les jours fériés cantonaux assimilés au dimanche. Les dérogations suivent les mêmes règles que la nuit, et le travail dominical temporaire donne droit à une majoration de salaire de 50 %. Le samedi en journée est du travail de jour ordinaire.',
        },
      ],
      note: 'Avec l’accord de son personnel, une entreprise peut déplacer la plage, au plus tôt dès 5 h et au plus tard jusqu’à 24 h (art. 10 LTr). Pour un bureau ordinaire, cela signifie : planifiez le nettoyage du lundi au samedi entre 6 h et 23 h, hors jours fériés, et aucune autorisation n’est nécessaire.',
      sources: [
        { label: 'Loi sur le travail (LTr), art. 10 et 16 à 20a', href: 'https://www.fedlex.admin.ch/eli/cc/1966/57_57_57/fr#art_10' },
        { label: 'Ordonnance 2 relative à la loi sur le travail (OLT 2), art. 51 Entreprises de nettoyage', href: 'https://www.fedlex.admin.ch/eli/cc/2000/244/fr#art_51' },
      ],
    },
    {
      kind: 'checklist',
      id: 'vertrauliche-raeume',
      title: 'Locaux confidentiels : à régler avant le premier passage',
      intro:
        'Qui nettoie le soir entre dans des locaux avec dossiers du personnel, contrats et données de patients. La loi sur la protection des données exige de votre entreprise une sécurité des données adéquate par rapport au risque (art. 8 LPD), et l’ordonnance cite pour cela le contrôle de l’accès aux locaux : seules les personnes autorisées doivent pouvoir accéder aux locaux où des données personnelles sont traitées (art. 3 OPDo). Avec cette liste, vous fixez où l’équipe de nettoyage peut aller.',
      groups: [
        {
          title: 'Locaux',
          items: [
            'Locaux que l’équipe nettoie seule',
            'Locaux nettoyés seulement en présence d’une personne de chez vous, par exemple bureau du personnel, archives ou salle des serveurs',
            'Locaux où l’on n’entre pas du tout',
            'Armoires, tiroirs et bacs contenant des documents : ne pas ouvrir, ne pas déplacer',
          ],
        },
        {
          title: 'Bureaux, papier et écrans',
          items: [
            'Documents rangés le soir, bureaux dégagés',
            'Écrans verrouillés, pas de mots de passe sur des bouts de papier',
            'Conteneurs verrouillables pour le papier confidentiel, qui ne sont pas vidés avec le vieux papier',
            'Imprimantes et photocopieuses sans impressions oubliées',
          ],
        },
        {
          title: 'Clés, badges et alarme',
          items: [
            'Qui reçoit clés, badges ou codes, et pour quelles portes',
            'Comment l’alarme est enclenchée et déclenchée, et qui l’équipe appelle en cas de fausse alarme',
            'Qui contrôle à la fin lumières, fenêtres et portes',
            'Ce qui s’applique en cas de perte d’une clé ou d’un badge',
          ],
        },
        {
          title: 'En plus dans les cabinets et études',
          items: [
            'Dossiers de patients, agenda et résultats ne traînent pas à la réception',
            'Salles de soins : quelles surfaces nettoie l’équipe et lesquelles votre équipe de cabinet',
            'Secret professionnel (art. 321 CP), par exemple chez les médecins, physiothérapeutes, avocats et notaires : dossiers rangés avant l’arrivée de l’équipe',
          ],
        },
      ],
      note: 'Cette liste ne remplace pas un conseil juridique. Clarifiez au cas par cas les mesures dont votre entreprise a besoin. Selon la loi sur la protection des données, les données sur la santé sont des données sensibles (art. 5 LPD).',
      sources: [
        { label: 'Loi fédérale sur la protection des données (LPD), art. 5 et 8', href: 'https://www.fedlex.admin.ch/eli/cc/2022/491/fr#art_8' },
        { label: 'Ordonnance sur la protection des données (OPDo), art. 3 contrôle de l’accès', href: 'https://www.fedlex.admin.ch/eli/cc/2022/568/fr#art_3' },
        { label: 'Code pénal suisse (CP), art. 321 secret professionnel', href: 'https://www.fedlex.admin.ch/eli/cc/54/757_781_799/fr#art_321' },
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'offerten-vergleichen',
      title: 'Comparer les devis point par point',
      intro:
        'Un tarif horaire bas dit peu si moins d’heures sont comptées. Placez les devis côte à côte et passez les mêmes points pour chacun. Notre guide [Que coûte un nettoyage d’entretien ?](/blog/reinigungskosten-schweiz) explique les facteurs de coût généraux.',
      groups: [
        {
          title: 'Étendue',
          items: [
            'Un cahier des charges nomme-t-il chaque local et chaque fréquence ?',
            'Kitchenettes et sanitaires sont-ils compris à chaque passage ou seulement chaque semaine ?',
            'Combien d’heures par passage et combien de passages par mois sont comptés ?',
            'Quelles plages horaires sont prévues, et se situent-elles entre 6 h et 23 h ?',
          ],
        },
        {
          title: 'Prix et contrat',
          items: [
            'Quel est le montant mensuel, avec ou sans TVA ?',
            'Les consommables sont-ils compris, et qui les recommande ?',
            'Les majorations pour la nuit, le dimanche ou les jours fériés sont-elles indiquées ?',
            'Qui remplace l’équipe pendant les vacances ou en cas de maladie ?',
            'Quelle est la durée du contrat, et avec quel délai peut-il être résilié ?',
          ],
        },
      ],
      note: 'Pour chaque devis, multipliez les heures par passage par le nombre de passages par mois. Seul ce chiffre montre si deux prestataires parlent du même travail.',
      printable: true,
      updated: '2026-09-28',
    },
  ],
  steps: [
    {
      title: 'Fixer locaux et accès',
      text: 'Avant le premier passage, vous parcourez les locaux avec nous : ce que l’équipe nettoie, ce qui ne se fait qu’en votre présence, qui reçoit clés ou badges et comment se manipule l’alarme.',
      figure: 'besichtigung',
    },
    {
      title: 'Plan d’intervention fixe',
      text: 'Jours et plages horaires sont fixés, par exemple lundi, mercredi et vendredi dès 18 h. Le cahier des charges règle ce qui se fait à chaque passage et ce qui se fait chaque semaine.',
      figure: 'start',
    },
    {
      title: 'Signaler les changements',
      text: 'Si vous déménagez, si votre équipe s’agrandit ou si les heures de consultation changent, nous adaptons l’étendue et le rythme. Prévenez-nous par téléphone ou par e-mail.',
      figure: 'anfrage',
    },
  ],
  faq: [
    {
      question: 'Combien coûte le nettoyage de bureaux ?',
      answer:
        'Nous indiquons un prix après la visite, car deux bureaux de même taille peuvent représenter des volumes de travail très différents. Douze bureaux individuels avec chacun leur corbeille prennent plus de temps qu’un open space de même surface. Ce qui fait la différence : le nombre de postes de travail, de kitchenettes et de sanitaires, les revêtements de sol et les surfaces vitrées, le rythme, l’horaire, dans les cabinets les exigences du plan d’hygiène, et la question de savoir si les consommables sont compris. La liste de contrôle plus haut montre comment comparer les devis.',
    },
    {
      question: 'À quelle fréquence faut-il nettoyer un bureau ?',
      answer:
        'Ce sont les locaux avec de l’eau qui donnent le rythme. Kitchenettes et sanitaires demandent de l’entretien à chaque passage, donc chaque jour ou plusieurs fois par semaine dans un bureau où travaillent beaucoup de personnes. Postes de travail et salles de séance se contentent souvent d’un nettoyage hebdomadaire. Une réception avec clientèle demande plus qu’un back-office.',
    },
    {
      question: 'Comment l’équipe de nettoyage entre-t-elle dans le bâtiment quand plus personne n’est là ?',
      answer:
        'Avec une clé, un badge ou un code que vous remettez à l’équipe. Avant le premier passage, on règle avec vous qui reçoit quoi et comment sont gérés l’alarme, la lumière et la fermeture. La liste « Locaux confidentiels » plus haut contient tous les points à remplir.',
    },
    {
      question: 'Devons-nous ranger les postes de travail, et qu’advient-il des documents confidentiels ?',
      answer:
        'On essuie les surfaces dégagées, ce qui se trouve sur le bureau reste en place. Un bureau dégagé le soir est donc doublement utile : la surface est mieux nettoyée, et les papiers confidentiels ne traînent pas. Pour le papier à détruire, des conteneurs verrouillables qui ne sont pas vidés avec le vieux papier conviennent.',
    },
    {
      question: 'Les écrans et les claviers sont-ils compris ?',
      answer:
        'Sur demande, comme point séparé du cahier des charges. Les écrans se nettoient uniquement avec un chiffon légèrement humide et non pelucheux, jamais vaporisés directement. Claviers et téléphones se nettoient quand l’ordinateur est verrouillé, pour qu’aucune touche ne déclenche quoi que ce soit.',
    },
    {
      question: 'Qui fournit le savon, le papier et les sacs poubelle ?',
      answer:
        'Le réapprovisionnement se fait à chaque passage. Qui achète le matériel, c’est vous qui décidez : soit l’entreprise de nettoyage l’apporte et le facture, soit vous l’achetez vous-même et l’équipe réapprovisionne à partir de votre stock. L’important est que le devis indique la variante retenue, sinon deux prix ne sont pas comparables.',
    },
    {
      question: 'Suivez-vous notre plan d’hygiène dans les cabinets ?',
      answer:
        'Oui. Votre plan d’hygiène fixe produits, surfaces et fréquence, et l’équipe travaille selon ce plan. Tenez-le prêt pour la visite, il deviendra la base du cahier des charges de votre cabinet.',
    },
  ],
  related: [
    { path: '/leistungen/unterhaltsreinigung', text: 'Si, en plus de vos bureaux, la cage d’escalier, l’ascenseur et l’entrée de tout l’immeuble doivent être nettoyés.' },
    { path: '/leistungen/sonderreinigungen', text: 'Pour le nettoyage en profondeur lors de l’emménagement dans de nouveaux bureaux ou avant de rendre d’anciens locaux.' },
    { path: '/leistungen/fenster-und-fassadenreinigung', text: 'Pour les fenêtres et les façades vitrées, à l’intérieur et à l’extérieur, qui ne font pas partie du nettoyage courant des bureaux.' },
  ],
  cta: {
    title: 'Un devis pour votre bureau ou votre cabinet',
    text: 'Pour le devis, il nous faut l’adresse, la surface approximative et le nombre d’étages, de postes de travail, de kitchenettes et de WC. Ajoutez les plages horaires où le nettoyage est possible et, pour les cabinets, le plan d’hygiène. Nous passons ensuite chez vous ; la visite et le devis écrit sont gratuits et sans engagement.',
  },
}
