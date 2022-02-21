//? HTML
<div id="myDiv" src="/file.html"></div>;

<button onclick="myFunction()">Generate</button>;

//? JS
function myFunction() {
  const div = document.getElementById("myDiv");
  const h1 = div.contentWindow.document.getElementsByTagName("H1")[0];
  const node = document.adoptNode(h1);
  document.body.appendChild(node);
}

//* Adopts the first H1 element in the div.

// -----------------------------------------------

//? The adoptNode() method adopts a node from another document.
//? The adopted node can be of all types.
//? Any child nodes (descendants) of the adopted node, are also adopted.
//? The original node (with child nodes) is removed from the other document.
