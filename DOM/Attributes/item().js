<img id="car" src="pic_car.gif" width="100" height="180"></img>;

const attrs = document.getElementById("car").attributes;
const name1 = attrs.item(2).name;
const name2 = attrs.item(3).name;

console.log(name1, name2);

//* "width" "height"

const attrs = document.getElementById("car").attributes;
const name1 = attrs[2].name;
const name2 = attrs[3].name;

console.log(name1, name2);

//* "width" "height"

// -----------------------------------------------

//? The item() method returns an attribute (by index) from a NamedNodeMap.
