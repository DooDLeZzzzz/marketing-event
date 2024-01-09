const scrollTopButton = document.querySelector('.scroll-up');

const showButton = () => scrollTopButton.classList.remove('is-hidden');
const hideButton = () => scrollTopButton.classList.add('is-hidden');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    showButton();
  }
  if (window.scrollY < 800) {
    hideButton();
  }
});
