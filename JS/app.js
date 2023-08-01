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

const svgIcons = document.querySelector("#svg-icon");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 800"><defs><linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="nnneon-grad"><stop stop-color="hsl(221, 38%, 75%)" stop-opacity="1" offset="0%"></stop><stop stop-color="hsl(221, 60%, 25%)" stop-opacity="1" offset="100%"></stop></linearGradient><filter id="nnneon-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feGaussianBlur stdDeviation="0 0" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter><filter id="nnneon-filter2" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feGaussianBlur stdDeviation="16 12" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur></filter></defs><g stroke-width="16" stroke="url(#nnneon-grad)" fill="none"><path d="M400 226.795166015625L550.0000095849032 313.3975856398686V486.60242488835587L400 573.2048445125995L249.99999041509682 486.60242488835587V313.3975856398686L400 226.795166015625Z " filter="url(#nnneon-filter)"></path><path d="M412 226.795166015625L562.0000095849032 313.3975856398686V486.60242488835587L412 573.2048445125995L261.9999904150968 486.60242488835587V313.3975856398686L412 226.795166015625Z " filter="url(#nnneon-filter2)" opacity="0.25"></path><path d="M388 226.795166015625L538.0000095849032 313.3975856398686V486.60242488835587L388 573.2048445125995L237.99999041509682 486.60242488835587V313.3975856398686L388 226.795166015625Z " filter="url(#nnneon-filter2)" opacity="0.25"></path><path d="M400 226.795166015625L550.0000095849032 313.3975856398686V486.60242488835587L400 573.2048445125995L249.99999041509682 486.60242488835587V313.3975856398686L400 226.795166015625Z "></path></g></svg>`;

for (let i = 0; i < 4; i++) {
  svgIcons.innerHTML += `${svg}`;
}
