<p id="car">lorem ipsum</p>;

const el = document.getElementsByTagName("p").item(0);
const elFound = el.innerText;

console.log(elFound);

//* lorem ipsum

<p id="car">lorem ipsum</p>;

//? SHORTHAND
const el = document.getElementsByTagName("P")[0];
const elFound = el.innerText;

console.log(elFound);

//* lorem ipsum

// -----------------------------------------------

//? The item() method returns the element at the specified index in an HTMLCollection.
//? The Elements are sorted as they appear in the source code, and the index starts at 0.
