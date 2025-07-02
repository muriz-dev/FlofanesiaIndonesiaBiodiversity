// Mobile menu toggle
document.getElementById('mobile-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('hidden');
});

// Hide/show header on scroll
let lastScrollY = window.scrollY;

window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const currentScrollY = window.scrollY;
  
  // Determine scroll direction
  if (currentScrollY > lastScrollY) {
    // Scrolling down - hide the header
    header.classList.add('nav-hidden');
  } else {
    // Scrolling up - show the header
    header.classList.remove('nav-hidden');
  }
  
  lastScrollY = currentScrollY;
});
