const modal = document.querySelector('.backdrop');
const openModalButton = document.querySelector('.to-do__haha-button');
const closeModalButton = document.querySelector('.modal__cross');
const modalButton = document.querySelector('.modal__button');

const toggleModal = () => modal.classList.toggle('is-hidden');

openModalButton.addEventListener('click', toggleModal);
closeModalButton.addEventListener('click', toggleModal);
modalButton.addEventListener('click', toggleModal);
