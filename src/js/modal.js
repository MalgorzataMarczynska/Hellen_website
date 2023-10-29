const modal = document.querySelector('.backdrop');
const triggers = document.querySelectorAll('.open-modal');
const closeButton = document.querySelector('.closeModal-button');
const mobileMenu = document.querySelector('.mobile');

function toggleModal() {
  modal.classList.toggle('show-modal');
  if (mobileMenu.classList.contains('is-open')) {
    mobileMenu.classList.remove('is-open');
  }
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

triggers[0].addEventListener('click', toggleModal);
triggers[1].addEventListener('click', toggleModal);
closeButton.addEventListener('click', toggleModal);
window.addEventListener('click', windowOnClick);
