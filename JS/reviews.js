//? GLOBAL
const reviewerName = document.querySelectorAll(".reviewer-name");
const reviewerTitle = document.querySelectorAll(".reviewer-title");
const reviewersReview = document.querySelectorAll(".reviewer-review");

//? REVIEWS DATA
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

document.addEventListener("DOMContentLoaded", reviewsPanel);

//? REVIEWS
function reviewsPanel() {
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
