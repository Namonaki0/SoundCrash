//? GLOBAL
const navLinks = document.querySelector(".nav-links");
const menu = document.querySelector(".burger-menu");
const menuBarOne = menu.querySelector(".one");
const menuBarTwo = menu.querySelector(".two");
const socialMediaMenu = document.querySelector(".menu-social-media");
const contents = document.querySelectorAll(".bottom-inner-content");

//? EVENT LISTENERS
document.addEventListener("DOMContentLoaded", dropDown);
menu.addEventListener("click", menuFunction);

//? MENU EFFECT
function menuFunction() {
  navLinks.classList.toggle("menu-active");
  menuBarOne.classList.toggle("rotate-one");
  menuBarTwo.classList.toggle("rotate-two");
  document.body.classList.toggle("scroll");
  menu.classList.toggle("burger-padding");
  socialMediaMenu.classList.toggle("social-media-visible");
}

//? REVIEWS DROP-DOWN - MOBILE VERSION
function dropDown() {
  const expandMoreSliders = document.querySelectorAll("[expand-more]");

  function expand() {
    const showContent = document.getElementById(this.dataset.target);
    if (showContent.classList.contains("show-text")) {
      this.innerHTML = `<button class="read-more">${this.dataset.showtext}<i class="fas fa-chevron-down"></i></button>`;
    } else {
      this.innerHTML = `<button class="read-more">${this.dataset.hidetext}<i class="fas fa-chevron-up"></i></button>`;
    }
    showContent.classList.toggle("show-text");
  }
  expandMoreSliders.forEach((slider) => {
    slider.addEventListener("click", expand);
  });
}
