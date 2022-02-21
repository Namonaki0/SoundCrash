//? HTML
<iframe
  id="defaultFrame"
  src="/default.asp" //? ---> content
  style="height:380px;width:100%;"
></iframe>;

<button onclick="importTitle()">Import</button>; //? --> document title is added with every click

//? JS
function importTitle() {
  const frame = document.getElementById("defaultFrame");
  const frameTitle = frame.contentWindow.document.getElementsByTagName("H1")[0];
  const node = document.importNode(frameTitle, true);
  document.body.appendChild(node);
}

// -----------------------------------------------

//? The importNode() method imports a node from another document.
//? Whith the second parameter set to true, child nodes will also be imported.
//? The imported node is not removed from the original document.
//? The imported node is a copy of the original.
