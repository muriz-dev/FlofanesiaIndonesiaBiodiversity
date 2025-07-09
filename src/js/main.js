document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  mobileMenuButton?.addEventListener('click', () => 
    document.getElementById('mobile-menu')?.classList.toggle('hidden'));

  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header?.classList.toggle('nav-hidden', window.scrollY > lastScrollY);
    lastScrollY = window.scrollY;
  });
});
