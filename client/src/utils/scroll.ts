export const scrollToContact = () => {
  const contactForm = document.getElementById('kontakt-formular');
  if (contactForm) {
    contactForm.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start' 
    });
  }
};
