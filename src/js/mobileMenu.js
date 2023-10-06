const mobileMenu = document.querySelector('.mobile');
const openMobileBtn = document.querySelector('.open-menu');
const closeMobile = document.querySelector('.is-close');

const toggleMenu = () => {
  const isMenuOpen = openMobileBtn.getAttribute('aria-expanded') === 'true';
  openMobileBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
};
const closeMenuOnLargeScreens = mediaQuery => {
  if (mediaQuery.matches) {
    mobileMenu.classList.remove('is-open');
    openMobileBtn.setAttribute('aria-expanded', false);
  }
};
const mediaQuery = window.matchMedia('(min-width: 768px)');
mediaQuery.addEventListener('change', closeMenuOnLargeScreens);
closeMenuOnLargeScreens(mediaQuery);

openMobileBtn.addEventListener('click', toggleMenu);
closeMobile.addEventListener('click', toggleMenu);
