//Scroll to contact section
document.addEventListener("DOMContentLoaded", function() {
  const contactLink = document.getElementById('contact-link');

  if (contactLink) {
    contactLink.addEventListener('click', scrollToSection);
  }

  function scrollToSection(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
});

// Current year
document.addEventListener("DOMContentLoaded", function() {
  const currentYearElement = document.getElementById('current-year');

  if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  }
});
