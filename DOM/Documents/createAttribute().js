//? HTML
//* <h1>This is a title</h1>
//* <p>some text here</p>

//? CSS
//* .newVal {
//*   font-style: italic;
//* }

//? JS
const title = document.getElementsByTagName("h1")[0];

window.onload = function () {
  const attr = document.createAttribute("class");
  attr.value = "newVal";
  title.setAttributeNode(attr);
};

//* This is a title -> ITALIC TEXT
//* some text here

// -----------------------------------------------

//? HTML
//* <h1>This is a title</h1>
//* <p>some text here</p>

//? CSS
//* .newVal {
//*   font-style: italic;
//* }

const title = document.getElementsByTagName("h1")[0];

window.onload = function () {
  const attr = document.createAttribute("style");
  attr.value = "color: red";
  title.setAttributeNode(attr);
};

//* This is a title -> RED TEXT COLOUR
//* some text here

// -----------------------------------------------

//? The createAttribute() method creates an attribute and returns the attribute as an Attr object.
