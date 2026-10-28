const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('visitorName').value.trim();
  const email = document.getElementById('visitorEmail').value.trim();
  const message = document.getElementById('visitorMessage').value.trim();

  if (!name || !email || !message) {
    formMessage.textContent = 'Please complete all fields.';
    return;
  }

  formMessage.textContent = `Thanks, ${name}! This demo form is working, but it does not send data to a server.`;
  contactForm.reset();
});
