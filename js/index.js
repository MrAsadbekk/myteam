var elButton = document.querySelector(".header__btn");
var elMenu = document.querySelector(".menu");
elButton.addEventListener("click", function (evt) {
  elMenu.classList.toggle("open-menu");
  elButton.classList.toggle("open-btn");
});
