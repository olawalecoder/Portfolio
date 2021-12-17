const openMenu = document.querySelector('.button');
const closeMenu = document.querySelectorAll('.hide');
const slideMenu = document.querySelector('#slidebar');

openMenu.addEventListener('click', () => {
  slideMenu.classList.add('appear');
});

closeMenu.forEach((element) => {
  element.addEventListener('click', () => slideMenu.classList.remove('appear'));
});

const openPop = document.querySelectorAll('.open-button');
const closePop = document.querySelector('.title-x');
const popUp = document.querySelector('.pop-container');

openPop.forEach((element) => {
  element.addEventListener('click', () => popUp.classList.add('pop'));
});

closePop.addEventListener('click', () => {
  popUp.classList.remove('title');
});
