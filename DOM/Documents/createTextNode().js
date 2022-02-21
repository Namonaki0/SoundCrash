const h1 = document.createElement("h1");
const text = document.createTextNode("This is the title");
h1.appendChild(text);
document.body.appendChild(h1);

//* This is the title --> h1 is created and attached to body

// -----------------------------------------------

//? The createTextNode() method creates a text node.

//? All HTML elements are nodes.
//? Elements are nodes. Attributes are nodes. Texts are nodes.
//? Some elements contain other nodes.
//? Some elements contain text nodes.
//? Some elements consain attribute nodes.
