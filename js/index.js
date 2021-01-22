let gamburger = document.querySelector(".header_burger");
let gamburger_menu = document.querySelector(".header_menu");
let _body = document.querySelector("body");

gamburger.onclick = function (event) {
  gamburger.classList.toggle("active");
  gamburger_menu.classList.toggle("active");
  _body.classList.toggle("lock");
};
