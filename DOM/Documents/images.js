//? HTML
{
  /* <img src="index.jpg" id="one"> 1</img>
<img src="codes.jpg" id="two">2</img>
<img src="reviews.jpg" id="three">3</img>

<div id="output"></div> */
}

//? JS
const images = document.images;
const output = document.querySelector("#output");

let text;

for (let i = 0; i < images.length; i++) {
  console.log(images[i].src);
}

//* "https://cdpn.io/cpe/boomboom/index.jpg"
//* "https://cdpn.io/cpe/boomboom/codes.jpg"
//* "https://cdpn.io/cpe/boomboom/reviews.jpg"

// -----------------------------------------------

//? The images property returns a collection of all <img> elements in a document.
//? The images property returns an HTMLCollection.
//? The images property is read-only.
