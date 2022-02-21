<img id="car" src="pic_car.gif" width="100" height="180"></img>;

const attrs = document.getElementById("car").attributes;
attrs.removeNamedItem("width");

console.log(getNamedItem("width"));

//* null

// -----------------------------------------------

//? The removeNamedItem() method removes a node (by name) in a NamedNodeMap.
//? When removing the type attribute of an input element, the element will be of type text, which is the default value.
