import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Seed Services
  const services = await Promise.all([
    prisma.service.upsert({
      where: { slug: 'unterhaltsreinigung' },
      update: {},
      create: {
        slug: 'unterhaltsreinigung',
        title: 'Unterhaltsreinigung',
        description:
          'Professionelle regelmäßige Reinigung für Büros, Praxen und gewerbliche Räume.',
        category: 'cleaning',
        features: [
          'Tägliche oder wöchentliche Reinigung',
          'Flexible Zeitplanung',
          'Geschultes Personal',
          'Umweltfreundliche Reinigungsmittel',
        ],
        benefits: [
          'Saubere und hygienische Arbeitsumgebung',
          'Produktivitätssteigerung',
          'Professioneller Eindruck',
          'Kostengünstig',
        ],
        isActive: true,
        displayOrder: 1,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'gartenservice' },
      update: {},
      create: {
        slug: 'gartenservice',
        title: 'Gartenservice',
        description: 'Professionelle Gartenpflege und Landschaftsgestaltung.',
        category: 'gardening',
        features: [
          'Rasenpflege',
          'Heckenschnitt',
          'Bepflanzung',
          'Winterdienst',
        ],
        benefits: [
          'Gepflegter Außenbereich',
          'Jahreszeitenangepasste Pflege',
          'Professionelle Ausrüstung',
          'Zuverlässiger Service',
        ],
        isActive: true,
        displayOrder: 2,
      },
    }),
    prisma.service.upsert({
      where: { slug: 'hausmeisterservice' },
      update: {},
      create: {
        slug: 'hausmeisterservice',
        title: 'Hausmeisterservice',
        description: 'Umfassende Betreuung und Wartung Ihrer Immobilie.',
        category: 'maintenance',
        features: [
          'Kleinreparaturen',
          'Kontrolldienste',
          'Schlüsselnotdienst',
          '24/7 Erreichbarkeit',
        ],
        benefits: [
          'Werterhalt der Immobilie',
          'Schnelle Problemlösung',
          'Fester Ansprechpartner',
          'Dokumentierte Arbeiten',
        ],
        isActive: true,
        displayOrder: 3,
      },
    }),
  ]);

  console.log(`✅ Created ${services.length} services`);

  // Seed FAQs
  const faqs = await Promise.all([
    prisma.fAQ.upsert({
      where: { id: 'faq-1' },
      update: {},
      create: {
        id: 'faq-1',
        question: 'Wie kann ich ein Angebot anfordern?',
        answer:
          'Sie können uns über unser Kontaktformular, per E-Mail oder telefonisch erreichen. Wir erstellen Ihnen gerne ein individuelles Angebot.',
        category: 'general',
        displayOrder: 1,
        isPublished: true,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-2' },
      update: {},
      create: {
        id: 'faq-2',
        question: 'Welche Reinigungsmittel verwenden Sie?',
        answer:
          'Wir verwenden ausschließlich umweltfreundliche und hautverträgliche Reinigungsmittel von renommierten Herstellern.',
        category: 'services',
        displayOrder: 2,
        isPublished: true,
      },
    }),
    prisma.fAQ.upsert({
      where: { id: 'faq-3' },
      update: {},
      create: {
        id: 'faq-3',
        question: 'Sind Sie versichert?',
        answer:
          'Ja, wir verfügen über eine umfassende Betriebshaftpflichtversicherung für alle unsere Dienstleistungen.',
        category: 'general',
        displayOrder: 3,
        isPublished: true,
      },
    }),
  ]);

  console.log(`✅ Created ${faqs.length} FAQs`);

  // Seed Settings
  const settings = await Promise.all([
    prisma.setting.upsert({
      where: { key: 'site_name' },
      update: {},
      create: {
        key: 'site_name',
        value: 'BGS Gebäudeservice',
        type: 'string',
        category: 'general',
        isPublic: true,
      },
    }),
    prisma.setting.upsert({
      where: { key: 'contact_email' },
      update: {},
      create: {
        key: 'contact_email',
        value: 'info@bgs-service.de',
        type: 'string',
        category: 'general',
        isPublic: true,
      },
    }),
    prisma.setting.upsert({
      where: { key: 'contact_phone' },
      update: {},
      create: {
        key: 'contact_phone',
        value: '+49 123 456789',
        type: 'string',
        category: 'general',
        isPublic: true,
      },
    }),
  ]);

  console.log(`✅ Created ${settings.length} settings`);

  console.log('🎉 Database seeding completed!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
