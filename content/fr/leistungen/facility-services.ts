import type { ServicePageContent } from '../../types'

// Même structure et mêmes sources que content/de/leistungen/facility-services.ts (E85).
// Textes légaux lus sur fedlex.admin.ch le 28.09.2026 (CO art. 58, 257a, 257b, 335c, 336c ;
// CC art. 712h, 712m, 712s ; OPA art. 6, 9, en français). Constats des relecteurs FS-R1 à FS-08
// intégrés le 28.09.2026.
const co = 'https://www.fedlex.admin.ch/eli/cc/27/317_321_377/fr'
const cc = 'https://www.fedlex.admin.ch/eli/cc/24/233_245_233/fr'
const opa = 'https://www.fedlex.admin.ch/eli/cc/1983/1968_1968_1968/fr'

export const facilityServices: ServicePageContent = {
  path: '/leistungen/facility-services',
  area: 'leistungen',
  eyebrow: 'Suivi d’immeubles',
  h1: 'Facility services : nettoyage, conciergerie et abords d’un seul prestataire',
  lead: [
    'Confier le nettoyage, la conciergerie et l’entretien des abords à trois entreprises, c’est gérer trois contrats, chacun avec son propre délai de résiliation. S’y ajoutent les questions aux frontières entre les mandats : qui balaie les feuilles dans l’entrée, qui remplace l’ampoule du local à vélos, qui remet du savon dans les toilettes ?',
    'Avec les facility services, nous fournissons ces prestations nous-mêmes, dans un seul contrat. Vos entreprises spécialisées continuent d’entretenir le chauffage, les ascenseurs et la protection incendie. Nous vous signalons les pannes que nous y remarquons.',
  ],
  facts: [
    { label: 'Étendue', value: 'Nettoyage, conciergerie, abords et vitres, uniquement ce que nous fournissons nous-mêmes' },
    { label: 'Non compris', value: 'Entretien du chauffage, de la ventilation et des ascenseurs, grosses réparations' },
    { label: 'Contrat', value: 'Un contrat et un interlocuteur pour toutes les prestations' },
    { label: 'Démarrage', value: 'Commencer par une prestation, en ajouter d’autres à l’échéance des anciens contrats' },
  ],
  scope: {
    title: 'Ce qui peut être réuni dans un contrat',
    intro: 'Nous composons les facility services à partir de nos propres prestations, adaptées à chaque immeuble et à chaque site :',
    items: [
      '[Nettoyage d’entretien](/leistungen/unterhaltsreinigung) des cages d’escalier, des parties communes et des surfaces commerciales, avec service de réapprovisionnement',
      '[Nettoyage de bureaux et de cabinets](/leistungen/bueroreinigung) à des heures compatibles avec vos horaires d’ouverture',
      '[Conciergerie](/leistungen/hauswartung) avec rondes de contrôle, petites réparations et élimination des déchets',
      '[Entretien des extérieurs et des espaces verts](/leistungen/aussen-und-gruenflaechenpflege) : pelouses, haies, massifs, chemins et places',
      '[Nettoyage de vitres et de façades](/leistungen/fenster-und-fassadenreinigung) au rythme convenu',
      '[Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen) lorsque sols ou locaux demandent plus que le nettoyage courant',
      '[Nettoyage de fin de bail avec garantie de remise](/leistungen/umzugsreinigung) lors d’un changement de locataire',
      '[Nettoyage industriel et de halles](/leistungen/industrie-und-hallenreinigung) pour halles, entrepôts et surfaces de production',
    ],
    notIncluded: [
      'Le facility management technique : entretien et contrôle du chauffage, de la ventilation, des ascenseurs et des installations de protection incendie.',
      'Le facility management commercial, comme la gérance locative, la comptabilité ou le décompte des frais accessoires.',
      'Les grosses réparations et travaux d’artisans, y compris la mise en relation avec des artisans.',
      'Un service d’urgence et de piquet 24 heures sur 24, par exemple pour un dégât d’eau pendant la nuit.',
      'Le service hivernal, pas même dans le cadre d’un contrat commun.',
    ],
  },
  sections: [
    {
      title: 'Quand un seul contrat pour tout est judicieux',
      paragraphs: [
        'Une gérance s’occupe de plusieurs immeubles et ne veut pas coordonner trois entreprises par bâtiment. Une entreprise a des bureaux, un entrepôt et un parking et cherche un seul interlocuteur pour l’ensemble. Une communauté de copropriétaires perd son concierge et veut régler en même temps le nettoyage et les abords.',
        'Si vous n’avez besoin que d’une seule prestation, sa propre page est le meilleur point de départ, par exemple le [nettoyage d’entretien](/leistungen/unterhaltsreinigung). Un contrat commun devient judicieux dès que deux prestations ou plus se retrouvent sur le même bien.',
      ],
    },
    {
      title: 'À l’entrée, trois mandats se rencontrent',
      paragraphs: [
        'Des feuilles sur le parvis, des traces de doigts sur la porte vitrée, une lampe qui clignote au-dessus de l’entrée. Avec des contrats séparés, chacun de ces endroits relève d’une autre entreprise. Chaque limite doit alors figurer dans un contrat, sinon quelque chose reste en plan ou se fait deux fois.',
        'Avec un contrat commun, toutes les interventions viennent de la même entreprise. Celui qui entretient le parvis remarque aussi la lampe qui clignote, et la conciergerie remplace l’ampoule dans le cadre du même contrat.',
      ],
    },
  ],
  tools: [
    {
      kind: 'table',
      id: 'schnittstellen',
      title: 'Les interfaces qu’un contrat devrait régler',
      intro:
        'À ces endroits, nettoyage, conciergerie et entretien des abords se touchent. Que vous mandatiez une ou plusieurs entreprises, réglez les points « À fixer dans le contrat » avant la première intervention, idéalement dans le cahier des charges.',
      columns: ['Endroit', 'Ce qui s’y rencontre', 'À fixer dans le contrat'],
      rows: [
        ['Entrée et parvis', 'Feuilles et saleté venant de l’extérieur, paillassons, vitre de la porte d’entrée, boîtes aux lettres', 'Qui balaie le parvis, qui nettoie paillassons et vitres, à quelle fréquence'],
        ['Cage d’escalier et ascenseur', 'Sols, mains courantes, fenêtres, cabine d’ascenseur', 'Si la cabine, avec miroir et rails de porte, fait partie du nettoyage de la cage d’escalier, qui nettoie les fenêtres de la cage à l’intérieur et à l’extérieur'],
        ['Buanderie et séchoir', 'Nettoyage du local, appareils communs, règlement de maison', 'Ce que couvre le nettoyage et ce qui reste aux locataires selon le règlement de maison, par exemple le filtre à peluches'],
        ['Parking souterrain et local à vélos', 'Sol, éclairage, portes et portails', 'Fréquence du balayage, si un nettoyage humide est compris, si portes et éclairage font partie des rondes de contrôle'],
        ['Après des travaux d’artisans', 'Poussière et saleté dans la cage d’escalier et l’ascenseur', 'Qui nettoie ensuite, et sur quel budget'],
      ],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'table',
      id: 'zustaendigkeiten',
      title: 'Qui fait quoi dans un contrat commun',
      intro:
        'Un seul contrat pour tout ne signifie pas que tout repose sur nous.',
      columns: ['Tâche', 'Nous', 'Gérance ou propriétaires'],
      rows: [
        ['Nettoyage intérieur et vitres', 'nettoyer au rythme convenu', 'régler l’étendue et l’accès aux logements ou bureaux'],
        ['Rondes de contrôle', 'contrôler parties communes et abords, signaler les défauts', 'recevoir les signalements, décider, passer les commandes'],
        ['Petites réparations, par exemple ampoules', 'les faire jusqu’à la limite convenue', 'fixer la limite, confier les grosses réparations'],
        ['Chauffage, ventilation, ascenseurs, protection incendie', 'signaler les pannes remarquées', 'en confier l’entretien et les réparations à des entreprises spécialisées'],
        ['Entretien des abords', 'd’après le plan d’entretien', 'approuver le plan d’entretien'],
        ['Consommables', 'réapprovisionner si convenu', 'décider qui les fournit'],
        ['Élimination des déchets', 'l’organiser, tenir propre l’emplacement', 'fixer l’emplacement et le nombre de conteneurs'],
      ],
      note:
        'Le CO prévoit que le propriétaire d’un bâtiment répond du dommage causé par le défaut d’entretien, sous réserve de son recours contre les personnes responsables envers lui de ce chef (art. 58 CO). C’est pourquoi le contrat devrait préciser qui assume quelle tâche, à qui les défauts sont signalés et qui décide.',
      sources: [{ label: 'Code des obligations, art. 58 (responsabilité du propriétaire d’un ouvrage)', href: `${co}#art_58` }],
      printable: true,
      updated: '2026-09-28',
    },
    {
      kind: 'checklist',
      id: 'wechsel',
      title: 'Liste de contrôle : de plusieurs entreprises à un seul contrat',
      intro:
        'Le changement se fait le plus simplement étape par étape, en suivant les délais des contrats en cours. Les points à cocher :',
      groups: [
        {
          title: 'Contrats en cours',
          items: [
            'Rassembler les contrats de nettoyage, de conciergerie, d’abords et de vitres',
            'Noter pour chaque contrat le délai, la prochaine échéance et une éventuelle reconduction tacite',
            'Concierge employé : après le temps d’essai, délai de congé d’un mois pendant la première année de service, de deux mois de la deuxième à la neuvième, de trois mois ensuite, chaque fois pour la fin d’un mois. D’autres délais ne valent que par accord écrit, contrat-type ou convention collective (art. 335c CO). Les périodes de protection, par exemple en cas de maladie ou d’accident, peuvent prolonger le délai (art. 336c CO)',
          ],
        },
        {
          title: 'Imputer correctement les coûts',
          items: [
            'Demander à chaque prestataire les coûts par immeuble et par prestation, pour pouvoir les imputer correctement ensuite',
            'Biens loués : les frais accessoires ne sont à la charge des locataires que si le bail le prévoit spécialement, et seulement à hauteur des dépenses effectives (art. 257a et 257b CO)',
            'Propriété par étages : faire indiquer séparément les coûts des parties qui ne servent que très peu ou pas du tout à certaines unités, par exemple un parking souterrain. Selon le CC, il en est tenu compte dans la répartition des frais (art. 712h al. 3 CC)',
          ],
        },
        {
          title: 'Avant le démarrage',
          items: [
            'Propriété par étages : vérifier si l’administrateur peut conclure le contrat. Il agit selon la loi, le règlement et les décisions de l’assemblée, qui règle les autres affaires administratives (art. 712s al. 1 et 712m al. 1 ch. 1 CC). Vérifier aussi le contrat d’administration',
            'Récupérer et lister clés, badges et codes des entreprises précédentes',
            'Confirmer aux entreprises précédentes la dernière intervention et la restitution',
          ],
        },
        {
          title: 'Signalements et information',
          items: [
            'Fixer qui reçoit les signalements et jusqu’à quel montant on répare sans demander',
            'Informer locataires ou collaborateurs de qui est responsable à partir de quelle date',
            'Mettre à jour l’affichage dans l’entrée et les coordonnées pour les signalements',
            'Entreprises : avant la première intervention, passer en revue avec le nouveau prestataire les risques sur place et les mesures de sécurité (art. 6 et 9 OPA)',
          ],
        },
      ],
      note: 'Ces indications ne remplacent pas un conseil juridique. Vérifiez délais et compétences au cas par cas, sur la base de vos contrats et du règlement.',
      sources: [
        { label: 'Code des obligations, art. 335c (délais de congé dans le contrat de travail)', href: `${co}#art_335_c` },
        { label: 'Code des obligations, art. 336c (résiliation en temps inopportun par l’employeur)', href: `${co}#art_336_c` },
        { label: 'Code des obligations, art. 257a et 257b (frais accessoires)', href: `${co}#art_257_a` },
        { label: 'Code civil, art. 712h (frais dans la propriété par étages)', href: `${cc}#art_712_h` },
        { label: 'Code civil, art. 712m (attributions de l’assemblée)', href: `${cc}#art_712_m` },
        { label: 'Code civil, art. 712s (tâches de l’administrateur)', href: `${cc}#art_712_s` },
        { label: 'Ordonnance sur la prévention des accidents (OPA), art. 6 (information des travailleurs)', href: `${opa}#art_6` },
        { label: 'Ordonnance sur la prévention des accidents (OPA), art. 9 (coopération de plusieurs entreprises)', href: `${opa}#art_9` },
      ],
      printable: true,
      updated: '2026-09-29',
    },
  ],
  steps: [
    {
      title: 'Un contrat pour toutes les prestations',
      text: 'Le contrat indique chaque prestation avec son étendue, sa fréquence et ses horaires d’intervention.',
    },
    {
      title: 'Remise au démarrage',
      text: 'Au démarrage, vous nous remettez clés, badges et codes et nous montrez le local de matériel, l’emplacement des déchets et les locaux techniques. Si un contrat actuel court plus longtemps, cette prestation reste chez l’entreprise actuelle jusqu’à son échéance.',
    },
    {
      title: 'Modifications à un seul endroit',
      text: 'Un immeuble s’ajoute, un rythme change ou une prestation disparaît : signalez-le à votre interlocuteur chez nous. C’est ce seul contrat qui est modifié.',
    },
  ],
  faq: [
    {
      question: 'Quelle différence entre facility services et facility management ?',
      answer:
        'Le facility management comprend souvent aussi l’exploitation des installations techniques et la gestion commerciale. Nos facility services réunissent les prestations que nous fournissons nous-mêmes : nettoyage, conciergerie, entretien des abords et vitres. Vos entreprises spécialisées entretiennent la technique, la gérance reste chez vous.',
    },
    {
      question: 'Comment passer de plusieurs entreprises à une seule ?',
      answer:
        'Attribuez d’abord le nouveau contrat, puis résiliez. Résilier les contrats actuels avant, c’est risquer un vide si la conclusion du nouveau contrat prend du retard. La liste de contrôle ci-dessus reprend délais, coûts et remise point par point.',
    },
    {
      question: 'De quoi dépend le coût des facility services ?',
      answer:
        'Le prix se compose des différentes prestations. Il dépend du nombre et de la taille des immeubles ou des sites, des surfaces par prestation, de la fréquence du nettoyage et des rondes de contrôle, de l’étendue des abords, des horaires d’intervention, de qui fournit les consommables et des trajets entre les biens. Il n’existe donc pas de prix standard. Vous recevez le prix pour vos biens par écrit après le tour des lieux.',
    },
    {
      question: 'Une conciergerie ne suffirait-elle pas ?',
      answer:
        'La [conciergerie](/leistungen/hauswartung) couvre les rondes de contrôle, la cage d’escalier, la buanderie, les petites réparations et l’élimination des déchets. Si le nettoyage de bureaux, le nettoyage des vitres ou l’entretien de grands espaces verts s’y ajoutent, un contrat commun convient mieux.',
    },
    {
      question: 'Plusieurs immeubles ou sites peuvent-ils figurer dans un seul contrat ?',
      answer:
        'Oui. Prestations, fréquence et horaires d’intervention peuvent être fixés pour chaque immeuble ou site. Un immeuble d’habitation n’a pas les mêmes besoins qu’un immeuble de bureaux ou un entrepôt, par exemple le nettoyage de la cage d’escalier le matin et celui des bureaux le soir après la fermeture.',
    },
    {
      question: 'Que devons-nous régler en matière de sécurité au travail en tant qu’entreprise ?',
      answer:
        'L’ordonnance sur la prévention des accidents prévoit que vous informiez et instruisiez aussi les travailleurs d’une autre entreprise occupés chez vous sur les risques et les mesures de sécurité au travail (art. 6 OPA). Lorsque des travailleurs de plusieurs entreprises sont occupés sur un même lieu de travail, leurs employeurs conviennent des arrangements nécessaires (art. 9 OPA). Avec un seul prestataire pour le nettoyage, la conciergerie et les abords, cette concertation a lieu une fois au lieu de trois.',
    },
  ],
  related: [
    { path: '/leistungen/hauswartung', text: 'Lorsque les rondes de contrôle, la cage d’escalier, la buanderie et les déchets sont l’essentiel et que le nettoyage est déjà attribué.' },
    { path: '/leistungen/unterhaltsreinigung', text: 'Lorsque vous voulez d’abord réattribuer seulement le nettoyage régulier des cages d’escalier et des parties communes.' },
    { path: '/leistungen/aussen-und-gruenflaechenpflege', text: 'Lorsque seuls les abords sont réattribués, par exemple parce que le jardinier actuel arrête.' },
  ],
  cta: {
    title: 'Un devis pour vos facility services',
    text: 'Pour le devis, il nous faut les adresses des immeubles ou des sites, les prestations que vous souhaitez confier et l’échéance de vos contrats actuels. Ensuite, nous visitons les biens avec vous, gratuitement et sans engagement.',
  },
}
