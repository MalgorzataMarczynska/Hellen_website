const main = document.querySelector('body');
const scrollUpBtn = document.querySelector('button[data-scroll]');

window.addEventListener('scroll', () => {
  const maxHeight = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = (window.scrollY * 100) / maxHeight;

  if (scrollPosition > window.innerHeight / 100) {
    scrollUpBtn.classList.add('scroll-up-button');
  } else {
    scrollUpBtn.classList.remove('scroll-up-button');
  }
});
scrollUpBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  scrollUpBtn.classList.remove('scroll-up-button');
  console.log(
    'scroll position after click',
    scrollPosition,
    'window height',
    window.innerHeight / 100
  );
});
