var navMain = document.querySelector('.header__site-navigation');

var navToggle = document.querySelector('.header__burger-menu-btn');

navMain.classList.remove('header__site-navigation--opened');
navMain.classList.add('header__site-navigation--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('header__site-navigation--closed')) {
    navMain.classList.remove('header__site-navigation--closed');
    navMain.classList.add('header__site-navigation--opened');
  } else {
    navMain.classList.add('header__site-navigation--closed');
    navMain.classList.remove('header__site-navigation--opened');
  }
});
