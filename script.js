// ===== SELECT ELEMENTS =====
const menuToggle = document.getElementById('menu-toggle');
const navbarUl = document.querySelector('#navbar ul');
const links = document.querySelectorAll('#navbar a');
const header = document.querySelector('header');

// ===== MOBILE MENU TOGGLE =====
menuToggle.addEventListener('click', () => {
  navbarUl.classList.toggle('active');
});

// ===== CLOSE MENU ON LINK CLICK =====
links.forEach(link => {
  link.addEventListener('click', () => {
    navbarUl.classList.remove('active');
  });
});

// ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
document.addEventListener('click', (e) => {
  if (!navbarUl.contains(e.target) && !menuToggle.contains(e.target)) {
    navbarUl.classList.remove('active');
  }
});

// ===== SMOOTH SCROLL =====
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// ===== TRANSPARENT → SOLID NAVBAR ON SCROLL =====
const scrollThreshold = 50; // px, adjust as needed

window.addEventListener('scroll', () => {
  if (window.scrollY > scrollThreshold) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
