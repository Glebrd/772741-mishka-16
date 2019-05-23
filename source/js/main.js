var navMain = document.querySelector(".header__site-navigation");

var navToggle = document.querySelector(".header__burger-menu-btn");

navMain.classList.remove("header__site-navigation--opened");
navMain.classList.add("header__site-navigation--closed");

navToggle.addEventListener("click", function () {
  if (navMain.classList.contains("header__site-navigation--closed")) {
    navMain.classList.remove("header__site-navigation--closed");
    navMain.classList.add("header__site-navigation--opened");
  } else {
    navMain.classList.add("header__site-navigation--closed");
    navMain.classList.remove("header__site-navigation--opened");
  }
});

// var link = document.querySelector(".goods__cart-link");
// var popup = document.querySelector(".modal");
//   document.addEventListener("click", function (evt) {
//     console.log(evt.target);
//     if ((evt.target.classList.contains("goods__cart-link"))||(evt.target.classList.contains("goods__cart-icon"))||(evt.target.parentElement.classList.contains("goods__cart-icon"))) {
//       evt.preventDefault();
//       popup.classList.add("modal-show"); }
//     else if (evt.target.closest(".modal")) { return; }
//     else {popup.classList.remove("modal-show"); }
//   })

// вызов модального окна в каталоге

var popup = document.querySelector(".modal");
var link = document.querySelectorAll(".goods__cart-link");
var overlay = document.querySelector(".overlay");

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];

// }


for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
  })}

for (var i = 0; i < link.length; i++) {
  overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
  })}

// вызов модального окна на главной странице

// var popup = document.querySelector(".modal");
var deal = document.querySelector(".deal-of-the-week__btn");
// var overlay = document.querySelector(".overlay");

deal.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.add("modal--show");
  overlay.classList.add("overlay--show");
})

overlay.addEventListener("click", function (evt){
  evt.preventDefault();
  popup.classList.remove("modal--show");
  overlay.classList.remove("overlay--show");
})

// overlay.addEventListener("click", function (evt) {
//   for (i = 0; i < links.length; ++i) {
//       evt.preventDefault();
//       popup.classList.remove("modal-show");
//       overlay.classList.remove("overlay--show");
//     }
//   })
