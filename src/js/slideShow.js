const navbar = document.querySelector('.reviews__slide__nav__indicator');
const dots = Array.from(navbar.children);
const icons = Array.from(
  document.querySelectorAll('.reviews__slide__nav__indicator .icon')
);
const person = document.querySelector('.reviews__slide__nav__person');

const comments = Array.from(
  document.querySelectorAll('.reviews__slide__track > *')
);

const slideData = [
  {
    commentIndex: 0,
    color: '#ff6809',
    person: 'Tonya Kucherovskaya, Kyiv',
  },
  { commentIndex: 1, color: '#ff6809', person: 'Natasza Solonckiya, Lviv' },
  { commentIndex: 2, color: '#ff6809', person: 'Olga Momotiuk, Dnipro' },
  { commentIndex: 3, color: '#ff6809', person: 'Svietlana Romanova, Charkiv' },
];

function showSlide(commentIndex) {
  comments.forEach((comment, index) => {
    comment.style.opacity = index === commentIndex ? '1' : '0';
  });

  icons.forEach((icon, index) => {
    icon.style.fill =
      index === commentIndex ? slideData[commentIndex].color : '#b9b9b9';
  });

  person.innerHTML = slideData[commentIndex].person;
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

// Set initial state
showSlide(0);
