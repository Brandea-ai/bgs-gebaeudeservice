import { company, premiumLabel } from "../../shared/company";
import type { NavDictionary } from "../de/navigation";

/** English texts of menu, footer, contact form and 404 page (M60) */

const responseTime = "within 24 hours on working days";

export const nav: NavDictionary = {
  serviceGroups: [
    {
      title: "Cleaning",
      links: [
        {
          path: "/leistungen/unterhaltsreinigung",
          label: "Maintenance cleaning",
        },
        {
          path: "/leistungen/bueroreinigung",
          label: "Office and practice cleaning",
        },
        { path: "/leistungen/sonderreinigungen", label: "Special cleaning" },
        { path: "/leistungen/baureinigung", label: "Construction cleaning" },
        {
          path: "/leistungen/fenster-und-fassadenreinigung",
          label: "Windows and facades",
        },
        {
          path: "/leistungen/industrie-und-hallenreinigung",
          label: "Industrial and warehouse",
        },
      ],
    },
    {
      title: "Caretaking and grounds",
      links: [
        { path: "/leistungen/hauswartung", label: "Caretaking" },
        {
          path: "/leistungen/aussen-und-gruenflaechenpflege",
          label: "Grounds and green spaces",
        },
        { path: "/leistungen/facility-services", label: "Facility services" },
        { path: "/leistungen", label: "All services" },
      ],
    },
    {
      title: premiumLabel,
      links: [
        { path: "/premium", label: "Premium overview" },
        { path: "/premium/luxusimmobilien", label: "Luxury properties" },
        { path: "/premium/privatjet", label: "Private jet cleaning" },
        { path: "/premium/yacht", label: "Yacht cleaning" },
      ],
    },
  ],
  menu: {
    home: { path: "/", label: "Home" },
    services: "Services",
    after: [
      { path: "/einzugsgebiet", label: "Service area" },
      { path: "/ueber-uns", label: "About us" },
      { path: "/blog", label: "Guides" },
    ],
    cta: { href: "#kontakt-formular", label: "Request a quote" },
    open: "Open menu",
    close: "Close menu",
    label: "Main menu",
  },
  footer: {
    newBrandLine: `A brand of ${company.legalName}`,
    about: `Cleaning and caretaking for businesses and discerning private clients. Based in ${company.address.city}.`,
    companyLinks: [
      { path: "/ueber-uns", label: "About us" },
      { path: "/kontakt", label: "Contact" },
      { path: "/blog", label: "Guides" },
    ],
    areaTitle: "Service area",
    areaLink: {
      path: "/einzugsgebiet",
      label: "Lucerne, Zug, Aargau, Nidwalden and Obwalden",
    },
    rights: `${company.legalName}. All rights reserved.`,
    legal: [
      { path: "/impressum", label: "Legal notice" },
      { path: "/datenschutz", label: "Privacy" },
    ],
  },
  contactForm: {
    title: "Get in touch",
    intro: `Request a non-binding quote. We will get back to you ${responseTime}.`,
    choose: "Please select...",
    fields: {
      name: { label: "Name *", placeholder: "Your full name" },
      email: { label: "Email *", placeholder: "name@company.ch" },
      phone: { label: "Phone", placeholder: "Your phone number" },
      service: { label: "Service required" },
      location: {
        label: "Location or postcode of the property",
        placeholder: "e.g. 6300 Zug",
      },
      frequency: { label: "Frequency" },
      message: {
        label: "Your message *",
        placeholder: "Tell us what you need...",
      },
    },
    serviceOptions: [
      {
        group: "Premium",
        options: [
          {
            value: "Luxusimmobilien",
            label: "Luxury properties (villas, lofts)",
          },
          { value: "Privatjet-Reinigung", label: "Private jet cleaning" },
          { value: "Yacht-Reinigung", label: "Yacht cleaning" },
          {
            value: "Zweitwohnungen und Residences",
            label: "Second homes and residences",
          },
          { value: "Hotels", label: "Hotels" },
        ],
      },
      {
        group: "Cleaning and caretaking",
        options: [
          { value: "Unterhaltsreinigung", label: "Maintenance cleaning" },
          { value: "Büroreinigung", label: "Office and practice cleaning" },
          {
            value: "Sonderreinigungen",
            label: "Special cleaning (deep cleaning, move-out cleaning)",
          },
          {
            value: "Baureinigung",
            label: "Construction and post-construction cleaning",
          },
          {
            value: "Fenster- und Fassadenreinigung",
            label: "Window and facade cleaning",
          },
          {
            value: "Industrie- und Hallenreinigung",
            label: "Industrial, warehouse and machine cleaning",
          },
          { value: "Hauswartung", label: "Caretaking" },
          {
            value: "Aussen- und Grünflächenpflege",
            label: "Grounds and green space maintenance",
          },
          {
            value: "Facility Services",
            label: "Facility services (several services)",
          },
        ],
      },
      {
        group: "Other",
        options: [
          { value: "Beratung", label: "Advice" },
          { value: "Andere", label: "Other" },
        ],
      },
    ],
    frequencyOptions: [
      "One-off",
      "Weekly",
      "Several times a week",
      "Daily",
      "Not yet decided",
    ],
    consentBefore: "I have read the",
    consentLink: "privacy policy",
    consentAfter:
      "and agree that my details will be used to process my enquiry. *",
    required: "* Required fields",
    submit: "Send message",
    sending: "Sending...",
    success: `Thank you! Your message has been sent. We will get back to you ${responseTime}.`,
    error: `Your message could not be sent. Please call us (${company.phone.display}) or write to ${company.email}.`,
  },
  notFound: {
    title: "Page not found",
    text: "This page does not exist or is no longer available. One of these links may help.",
    links: [
      { path: "/", label: "Go to the home page" },
      { path: "/leistungen", label: "All services" },
      { path: "/kontakt", label: "Contact and quote" },
    ],
  },
  languageSwitch: "Language",
  chrome: {
    skip: "Skip to content",
    answer: `Reply ${responseTime}`,
    seat: `Based in ${company.address.city}`,
    megaTitle: "On-site quote",
    megaText:
      "We visit your property and prepare a written quote, free of charge and without obligation.",
    phone: "Phone",
    email: "Email",
    address: "Address",
    contactEyebrow: "Contact",
    trust: [
      { key: "seit", label: "Since 2006", text: "Cleaning and caretaking" },
      {
        key: "versichert",
        label: "CHF 10 million",
        text: "Liability insurance",
      },
      {
        key: "register",
        label: "Registered",
        text: "Commercial register of Lucerne",
      },
      {
        key: "sprachen",
        label: "Four languages",
        text: "German, English, French, Italian",
      },
      { key: "antwort", label: "24 hours", text: "Reply on working days" },
      {
        key: "offerte",
        label: "Free of charge",
        text: "Quote after a site visit",
      },
    ],
    mobileCta: "Quote",
    scrollHint: "Scroll",
  },
  errorPage: { title: "Sorry, something went wrong.", reload: "Reload page" },
};
