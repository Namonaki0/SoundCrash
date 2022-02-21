//? HTML
//* <button>click</button>

//? JS
const btn = document.getElementsByTagName("BUTTON");
console.log(btn.item(0).innerHTML);

//* click

// -----------------------------------------------

//? The item() method returns the element at the specified index in an HTMLCollection.
//? The Elements are sorted as they appear in the source code, and the index starts at 0.
//? A shorthand method can also be used, and will produce the same result:
let x = document.getElementsByTagName("P")[0];
