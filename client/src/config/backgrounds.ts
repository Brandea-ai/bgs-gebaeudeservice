// Background images configuration for all pages

export const backgrounds = {
  // Main pages
  home: '/backgrounds/modern-office-bg.jpg',
  about: '/backgrounds/glass-building-bg.jpg',
  contact: '/backgrounds/office-cleaning-bg.jpg',
  references: '/backgrounds/premium-hotel-bg.jpg',
  blog: '/backgrounds/facility-management-bg.jpg',
  knowledge: '/backgrounds/commercial-cleaning-bg.jpg',
  downloads: '/backgrounds/building-night-bg.jpg',
  
  // Business services
  bueroreinigung: '/backgrounds/office-cleaning-bg.jpg',
  industriereinigung: '/backgrounds/facility-management-bg.jpg',
  fassadenreinigung: '/backgrounds/glass-building-bg.jpg',
  fensterreinigung: '/backgrounds/glass-building-bg.jpg',
  hallenreinigung: '/backgrounds/facility-management-bg.jpg',
  maschinenreinigung: '/backgrounds/facility-management-bg.jpg',
  baureinigung: '/backgrounds/commercial-cleaning-bg.jpg',
  aussenanlagen: '/backgrounds/building-night-bg.jpg',
  facilityManagement: '/backgrounds/modern-office-bg.jpg',
  
  // Premium services
  privatjet: '/backgrounds/luxury-hotel-bg.jpg',
  yacht: '/backgrounds/premium-hotel-bg.jpg',
  luxusimmobilien: '/backgrounds/premium-hotel-bg.jpg',
  housekeeping: '/backgrounds/luxury-hotel-bg.jpg',
  
  // Basis services
  unterhaltsreinigung: '/backgrounds/commercial-cleaning-bg.jpg',
  hausmeisterservice: '/backgrounds/office-cleaning-bg.jpg',
  winterdienst: '/backgrounds/building-night-bg.jpg',
  sonderleistungen: '/backgrounds/facility-management-bg.jpg',
  beschaffung: '/backgrounds/modern-office-bg.jpg',
  
  // Location pages
  zuerich: '/backgrounds/glass-building-bg.jpg',
  zug: '/backgrounds/modern-office-bg.jpg',
  luzern: '/backgrounds/building-night-bg.jpg',
  stgallen: '/backgrounds/premium-hotel-bg.jpg',
  
  // Blog posts
  blogPost: '/backgrounds/office-cleaning-bg.jpg',
};

export const getBackgroundForPage = (pageName: string): string => {
  const key = pageName.toLowerCase().replace(/[^a-z]/g, '');
  return backgrounds[key as keyof typeof backgrounds] || backgrounds.home;
};
