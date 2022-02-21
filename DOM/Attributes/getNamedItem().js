<img id="car" src="pic_car.gif" width="100" height="180"></img>;

const nodeLocation = document.getElementById("car").attributes;
let value = nodeLocation.getNamedItem("src").value;

console.log(value);

//* pic_car.gif

// -----------------------------------------------

//? The getNamedItem() method returns an attribute node from a NamedNodeMap object.
