<img id="car" src="pic_car.gif" width="100" height="180"></img>;

const imgMap = document.getElementsByTagName("img")[0].attributes;
const node = document.createAttribute("class");
node.value = "car-img";
imgMap.setNamedItem(node);

console.log(imgMap);

//* {
//*     "0": {},
//*     "1": {},
//*     "2": {},
//*     "3": {},
//*     "4": {}
//* }

const imgMap = document.getElementsByTagName("img")[0];
imgMap.setAttribute("class", "car-img");

console.log(imgMap);

//* <img id="car" src="pic_car.gif" width="100" height="180" class="car-img"></img>

// -----------------------------------------------

//? The setNamedItem() method adds an attribute node to a NamedNodeMap.

//? If the attribute node already exists, it will be replaced, and the replaced attribute node is returned, otherwise the return value is null.
