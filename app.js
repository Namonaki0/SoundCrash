//? VIEWPORT SCALE
// let width = document.getElementById("width");
// var onresize = function () {
//   width.innerText = document.body.clientWidth;
//   width.classList.add("display-width");
//   setTimeout(() => {
//     width.classList.remove("display-width");
//   }, 2000);
// };
// window.addEventListener("resize", onresize);
//? //////////////////////////

//? GLOBAL
const navLinks = document.querySelector(".nav-links");
const menu = document.querySelector(".burger-menu");
const menuBarOne = menu.querySelector(".one");
const menuBarTwo = menu.querySelector(".two");
const socialMediaMenu = document.querySelector(".menu-social-media");

const contents = document.querySelectorAll(".bottom-inner-content");
const reviewerName = document.querySelectorAll(".reviewer-name");
const reviewerTitle = document.querySelectorAll(".reviewer-title");
const reviewersReview = document.querySelectorAll(".reviewer-review");

//? EVENT LISTENERS
menu.addEventListener("click", () => {
  navLinks.classList.toggle("menu-active");
  menuBarOne.classList.toggle("rotate-one");
  menuBarTwo.classList.toggle("rotate-two");
  document.body.classList.toggle("scroll");
  menu.classList.toggle("burger-padding");
  socialMediaMenu.classList.toggle("social-media-visible");
});

const reviews = [
  (michael = {
    name: "Michael Gerwitz",
    title: "SVP of content for SoundCrash",
    review:
      "Sevendust have been one of those hidden gems for the past 20 plus years and Blood & Stone proves just that. Join me as I dissect the record track by track.",
    posted: "02.09.20",
    views: 1999,
  }),
  (maurice = {
    name: "Maurice Paultz",
    title: "Senior reviewer",
    review:
      "This record is proof that Chester's voice was something unique and that no one could ever replace him as a vocalist. Oustanding effort by Grey Daze by remastering their old tracks.",
    posted: "01.09.20",
    views: 8772,
  }),
  (annabelle = {
    name: "Annabelle Gerard",
    title: "Senior talent relations for SoundCrash",
    review:
      "The latest from Northlane is such a solid piece of work. One the best things to come out of 2020 for sure. Find the full length review inside.",
    posted: "12.08.20",
    views: 3526,
  }),
];

function reviewsPanel() {
  //? REVIEWS
  reviewerName[0].innerHTML = `${michael.name}`;
  reviewerTitle[0].innerHTML = `${michael.title}`;
  reviewersReview[0].innerHTML = `${michael.review}`;

  reviewerName[1].innerHTML = `${maurice.name}`;
  reviewerTitle[1].innerHTML = `${maurice.title}`;
  reviewersReview[1].innerHTML = `${maurice.review}`;

  reviewerName[2].innerHTML = `${annabelle.name}`;
  reviewerTitle[2].innerHTML = `${annabelle.title}`;
  reviewersReview[2].innerHTML = `${annabelle.review}`;
}

reviewsPanel();

document.addEventListener("DOMContentLoaded", () => {
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
});

//? MAIL CHIMP - SUBSCRIPTION PAGE

type = "text/javascript";
src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"(function (
  $
) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  // fnames[3] = "ADDRESS";
  // ftypes[3] = "address";
  // fnames[4] = "PHONE";
  // ftypes[4] = "phone";
  // fnames[5] = "BIRTHDAY";
  // ftypes[5] = "birthday";
})(jQuery);
var $mcj = jQuery.noConflict(true);
