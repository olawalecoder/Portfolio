const openMenu = document.querySelector('.button');
const closeMenu = document.querySelectorAll('.hide');
const slideMenu = document.querySelector('#slidebar');

openMenu.addEventListener('click', () => {
  slideMenu.classList.add('appear');
});

closeMenu.forEach((element) => {
  element.addEventListener('click', () => slideMenu.classList.remove('appear'));
});

// const openPop = document.querySelectorAll('.open-button');
// const closePop = document.querySelector('.title-x');
// const popUp = document.querySelector('.pop-container');

// openPop.forEach((element) => {
//   element.addEventListener('click', () => popUp.classList.add('pop'));
// });

// closePop.addEventListener('click', () => {
//   popUp.classList.remove('title');
// });

// const myProjects = [
//   {
//     project: 1,
//     title: 'Multi Post Stories',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/Placeholder.png',
//     technologies: ['css', 'html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   {
//     project: 2,
//     title: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/holder-2.png',
//     technologies: ['html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   {
//     project: 3,
//     title: 'Data Dashboard Healthcare',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/holder-2.png',
//     technologies: ['html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   {
//     project: 4,
//     title: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/holder-2.png',
//     technologies: ['html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   {
//     project: 5,
//     title: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/holder-2.png',
//     technologies: ['html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   {
//     project: 6,
//     title: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/holder-2.png',
//     technologies: ['html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   {
//     project: 7,
//     title: 'Profesional Art Printing Data',
//     description: "A daily selection of privately personalized reads;
//     no accounts or sign-ups required. has been the industry's standard.",
//     img: 'img/holder-2.png',
//     technologies: ['html', 'bootstrap', 'ruby'],
//     live: 'url()',
//     source: 'url()',
//   },
//   ];