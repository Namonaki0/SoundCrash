//? GLOBAL
const reviewerName = document.querySelectorAll(".reviewer-name");
const reviewerTitle = document.querySelectorAll(".reviewer-title");
const reviewersReview = document.querySelectorAll(".reviewer-review");

document.addEventListener("DOMContentLoaded", reviewsPanel);

//? REVIEWS
async function reviewsPanel() {
  const res = await fetch(`data/reviews.json`);
  const reviews = await res.json();

  reviewerName[0].innerHTML = `${reviews[0].reviewer}`;
  reviewerTitle[0].innerHTML = `${reviews[0].title}`;
  reviewersReview[0].innerHTML = `${reviews[0].review}`;

  reviewerName[1].innerHTML = `${reviews[1].reviewer}`;
  reviewerTitle[1].innerHTML = `${reviews[1].title}`;
  reviewersReview[1].innerHTML = `${reviews[1].review}`;

  reviewerName[2].innerHTML = `${reviews[2].reviewer}`;
  reviewerTitle[2].innerHTML = `${reviews[2].title}`;
  reviewersReview[2].innerHTML = `${reviews[2].review}`;
}
