<img id="car" src="pic_car.gif" width="100" height="180"></img>;

const el = document.getElementsByTagName("img");
const getEl = el.namedItem("car");

console.log(getEl);

//* <img id="car" src="pic_car.gif" width="100" height="180"></img>

<img id="car" src="pic_car.gif" width="100" height="180"></img>;

//? SHORTHAND
const el = document.getElementsByTagName("img")["car"];

console.log(el);

//* <img id="car" src="pic_car.gif" width="100" height="180"></img>

// -----------------------------------------------

//? The namedItem() method returns the element with the specified ID, or name, in an HTMLCollection.
