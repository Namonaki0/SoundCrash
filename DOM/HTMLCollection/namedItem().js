//? HTML
//* <button id="myBtn">click</button>;

//? JS
const myBtn = document.getElementsByTagName("BUTTON").namedItem("myBtn");

console.log(myBtn.innerHTML);

//* click

// -----------------------------------------------

//? The namedItem() method returns the element with the specified ID, or name, in an HTMLCollection.
//? A shorthand method can also be used, and will produce the same result:
const myBtn = document.getElementsByTagName("BUTTON")["myBtn"];
