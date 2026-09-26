import { company } from '../../shared/company'
import type { ArticleContent } from '../types'
import { cantonList, languageList, responseTime } from './common'

/**
 * Conseils (M53) en français (M60). Traduction fidèle de content/de/ratgeber.ts :
 * conseils généraux formulés comme tels, pas de prix, de certificats, de
 * références ni de témoignages de clients (E18).
 */

export const ratgeberUebersicht = {
  h1: 'Conseils en nettoyage de bâtiments',
  intro: `Des réponses aux questions sur l’attribution, le coût et le déroulement d’un nettoyage de bâtiments. Par ${company.brand}, pour les entreprises, les gérances et les propriétaires des cantons de ${cantonList}.`,
  services:
    'Directement vers les prestations : [Nettoyage d’entretien](/leistungen/unterhaltsreinigung), [Conciergerie](/leistungen/hauswartung) et [toutes les prestations](/leistungen).',
  byline: `Un conseil de ${company.brand}`,
  updatedLabel: 'Mise à jour',
  publishedLabel: 'Publié le',
}

const reinigungsfirmaFinden: ArticleContent = {
  path: '/blog/richtige-reinigungsfirma-finden',
  h1: 'Comment trouver la bonne entreprise de nettoyage ?',
  subtitle: 'Les questions à clarifier avant d’attribuer le mandat, de l’étendue des prestations jusqu’au contrat.',
  teaser: 'Les questions à clarifier avant d’attribuer le mandat : étendue des prestations, assurance, contrôle de la qualité, références, devis et contrat.',
  updated: '2026-09-26',
  intro: [
    'Des locaux propres et soignés créent une atmosphère de travail agréable et laissent une bonne première impression à la clientèle. L’entreprise de nettoyage qui s’en charge, vous la choisissez généralement pour plusieurs années. Ce guide montre à quoi veiller lors du choix.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'Clarifiez d’abord vos besoins : quelle prestation, à quelle fréquence et à quels horaires.',
      'Demandez trois à cinq devis, chacun après une visite.',
      'Comparez l’étendue des prestations, l’assurance, le contrôle de la qualité, les références, le devis et le contrat.',
      'Posez des questions là où quelque chose reste flou, et faites-vous donner les réponses par écrit.',
    ],
  },
  sections: [
    {
      title: 'Clarifier d’abord les besoins',
      paragraphs: ['Avant de comparer des prestataires, vous devriez savoir ce dont vous avez besoin. Les principales prestations :'],
      definitions: [
        {
          term: 'Nettoyage d’entretien',
          text: 'Le nettoyage récurrent selon une fréquence fixe, par exemple plusieurs fois par semaine. Il maintient les locaux propres et hygiéniques. Plus d’informations sous [Nettoyage d’entretien](/leistungen/unterhaltsreinigung).',
        },
        {
          term: 'Nettoyage en profondeur',
          text: 'Un nettoyage minutieux à intervalles plus espacés. Il élimine les salissures qui subsistent après le nettoyage régulier. Plus d’informations sous [Nettoyages en profondeur et spéciaux](/leistungen/sonderreinigungen).',
        },
        {
          term: 'Conciergerie',
          text: 'Le suivi d’un immeuble au-delà du nettoyage, par exemple avec des rondes de contrôle, des petites réparations et l’élimination des déchets. Plus d’informations sous [Conciergerie](/leistungen/hauswartung).',
        },
      ],
      note: 'Fixez en outre à quelle fréquence et à quels horaires le nettoyage doit avoir lieu, par exemple avant le début du travail ou après la fermeture du magasin. Tous les prestataires ont besoin de ces indications pour que les devis soient comparables.',
    },
    {
      title: 'À quoi veiller',
      subsections: [
        {
          title: 'Étendue des prestations et limites',
          text: 'Faites-vous indiquer par écrit quelles pièces et quelles tâches sont comprises, et lesquelles ne le sont pas. Demandez : qu’est-ce qui fait partie du nettoyage régulier, et qu’est-ce qui est facturé séparément ?',
        },
        {
          title: 'Assurance',
          text: 'Lors des travaux dans vos locaux, quelque chose peut être endommagé. Demandez s’il existe une assurance responsabilité civile d’entreprise et faites-vous attester la somme de couverture.',
        },
        {
          title: 'Contrôle de la qualité et interlocuteur',
          text: 'Demandez comment les nouveaux collaborateurs sont formés et qui contrôle le travail sur place. Il est aussi important de savoir qui est votre interlocuteur et comment les réclamations sont traitées.',
        },
        {
          title: 'Bien évaluer les certificats',
          text: 'Les certificats peuvent montrer que des processus ont été vérifiés selon une norme. Demandez la norme, l’organisme de certification, le champ d’application et la validité. Il est tout aussi important de savoir comment l’entreprise contrôle la qualité au quotidien et corrige les défauts.',
        },
        {
          title: 'Références et évaluations',
          text: 'Demandez des références portant sur des biens comparables. Un entretien avec des clients de référence dépend de leur accord. Consultez aussi les évaluations en ligne.',
        },
        {
          title: 'Devis et prix',
          text: 'Un devis fiable n’est possible qu’après une visite. Veillez à ce que les frais annexes comme le déplacement et les produits de nettoyage soient indiqués et que les nettoyages spéciaux figurent séparément. En cas de devis très avantageux, demandez quelles prestations et quel temps de travail sont compris. Plus d’informations : [Ce qui détermine le coût d’un nettoyage d’entretien](/blog/reinigungskosten-schweiz).',
        },
        {
          title: 'Contrat',
          text: 'La durée, le délai de résiliation et le remplacement en cas de vacances ou de maladie doivent figurer dans le contrat.',
        },
        {
          title: 'Proximité et disponibilité',
          text: 'Demandez en combien de temps quelqu’un est sur place en cas de défaut et comment vous joignez votre interlocuteur.',
        },
      ],
    },
    {
      title: 'Pas à pas jusqu’à l’entreprise de nettoyage',
      ordered: true,
      items: [
        'Clarifier les besoins : noter la prestation, la fréquence, les horaires et les surfaces.',
        'Choisir trois à cinq prestataires actifs dans votre région.',
        'Convenir de visites. Sans visite, pas de devis comparable.',
        'Comparer les devis : étendue, fréquence, frais annexes et durée.',
        'Clarifier les questions ouvertes, de préférence par écrit.',
        'Demander si un nettoyage d’essai ou un début avec une période d’essai est possible.',
        'Conclure le contrat et y inscrire l’interlocuteur.',
      ],
    },
    {
      title: 'Questions pour la visite',
      items: [
        'Qu’est-ce qui est compris exactement, et qu’est-ce qui ne l’est pas ?',
        'À quelle fréquence et à quels horaires le nettoyage a-t-il lieu ?',
        'Qui est mon interlocuteur ?',
        'Comment la qualité est-elle contrôlée ?',
        'Comment le remplacement est-il réglé en cas de vacances ou de maladie ?',
        'Quelle assurance existe, avec quelle couverture ?',
        'Comment la facturation se fait-elle, et qu’est-ce qui coûte en plus ?',
      ],
    },
    {
      title: `Les réponses de ${company.brand} à ces questions`,
      items: [
        'Devis : gratuit et sans engagement, après une visite sur place.',
        `Interlocuteur : notre directeur traite personnellement votre demande. Vous recevez une réponse ${responseTime}.`,
        'Assurance : responsabilité civile d’entreprise avec une couverture de CHF 10 millions.',
        'Expérience : depuis 2006, aujourd’hui plus de 50 collaboratrices et collaborateurs et plus de 120 clients (état septembre 2026).',
        `Langues : ${languageList}.`,
        `Région : les cantons de ${cantonList}, avec toutes nos prestations. Plus d’informations sous [Zone d’intervention](/einzugsgebiet).`,
      ],
    },
  ],
  cta: {
    title: 'Devis sur place',
    text: 'Nous passons chez vous pour un devis gratuit et sans engagement. Décrivez-nous le bien, la surface et la fréquence souhaitée.',
  },
}

const kosten: ArticleContent = {
  path: '/blog/reinigungskosten-schweiz',
  h1: 'Combien coûte un nettoyage d’entretien ?',
  subtitle: 'Les principaux facteurs de coût et comment obtenir un devis fiable.',
  teaser: 'Ce qui détermine le prix d’un nettoyage d’entretien, comment il est facturé et comment comparer les devis.',
  updated: '2026-09-26',
  intro: [
    'Ce guide porte sur le [nettoyage d’entretien](/leistungen/unterhaltsreinigung), c’est-à-dire le nettoyage régulier d’immeubles, de bureaux et de surfaces commerciales. Il explique ce qui détermine le prix et ce qu’un devis devrait contenir.',
  ],
  summary: {
    title: 'En bref',
    items: [
      'Le prix dépend surtout de la surface, de la fréquence, de l’utilisation et des horaires d’intervention.',
      'Un chiffre fiable n’est possible qu’après une visite.',
      'Comparez les devis selon l’étendue des prestations et le montant mensuel, pas seulement selon le tarif horaire.',
      'Nous passons pour la visite gratuitement et sans engagement.',
    ],
  },
  sections: [
    {
      title: 'Les facteurs de coût',
      definitions: [
        { term: 'Surface et types de locaux', text: 'La taille, les revêtements de sol, les sanitaires et les surfaces vitrées déterminent le temps de travail.' },
        {
          term: 'Fréquence',
          text: 'Avec un nettoyage fréquent, le travail par intervention diminue souvent, mais le nombre d’interventions augmente. Ce qui compte, c’est le montant mensuel indiqué dans le devis.',
        },
        { term: 'Utilisation', text: 'Les entrées très fréquentées, les cuisines et les sanitaires demandent plus de temps que les locaux peu utilisés.' },
        {
          term: 'Horaires d’intervention',
          text: 'Un nettoyage le soir, la nuit ou le week-end peut entraîner des suppléments. Demandez si ces suppléments sont compris dans le devis.',
        },
        {
          term: 'Prestations supplémentaires',
          text: 'Les consommables, le nettoyage des vitres ou un [nettoyage en profondeur](/leistungen/sonderreinigungen) avant le début peuvent figurer séparément.',
        },
      ],
    },
    {
      title: 'Pourquoi nous n’indiquons pas de prix en ligne',
      paragraphs: [
        'Deux biens de même surface peuvent représenter un travail très différent, selon le revêtement de sol, l’utilisation et l’accès. Un prix sans visite serait donc soit trop élevé, soit inexact par la suite. Nous n’indiquons un prix que dans le devis, après avoir vu le bien.',
      ],
    },
    {
      title: 'Comment la facturation se fait',
      paragraphs: [
        'Les tarifs horaires, les forfaits mensuels ou les prix au mètre carré sont courants. Demandez comment la facturation se fait et ce qui est compris dans chaque cas. C’est la seule façon de comparer les devis.',
      ],
    },
    {
      title: 'Comparer les devis',
      paragraphs: ['Un devis comparable indique au moins :'],
      items: [
        'les pièces et les tâches comprises',
        'la fréquence et les horaires d’intervention',
        'les consommables et les produits de nettoyage',
        'les éventuels suppléments et frais annexes comme le déplacement',
        'la durée et le délai de résiliation',
      ],
      note: 'Plus d’informations : [À quoi veiller en choisissant une entreprise de nettoyage](/blog/richtige-reinigungsfirma-finden).',
    },
    {
      title: `Comment obtenir votre devis chez ${company.brand}`,
      ordered: true,
      items: [
        `Vous nous appelez ou nous écrivez. Notre directeur traite personnellement votre demande, vous recevez une réponse ${responseTime}.`,
        'Nous examinons le bien sur place et clarifions l’étendue, la fréquence et les horaires.',
        'Vous recevez un devis écrit, gratuit et sans engagement.',
      ],
      note: `Pour le déplacement, les mêmes conditions s’appliquent dans l’ensemble des cantons de ${cantonList}.`,
    },
  ],
  cta: {
    title: 'Un devis pour votre bien',
    text: 'Décrivez-nous le bien, la surface et la fréquence souhaitée. Nous passons pour la visite et établissons votre devis, gratuit et sans engagement.',
  },
}

export const ratgeber = { reinigungsfirmaFinden, kosten }
