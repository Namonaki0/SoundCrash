<div id="output"></div>;

const names = ["Rob", "Mary", "John", "Steve", "Carrie"];

const fragment = document.createDocumentFragment();

for (let name in names) {
  const lis = document.createElement("li");
  lis.textContent = names[name];
  fragment.appendChild(lis);
}

document.getElementById("output").appendChild(fragment);

//* Rob
//* Mary
//* John
//* Steve
//* Carrie

// -----------------------------------------------

<div id="output">
  <ul class="list">
    <li>Joseph</li>
    <li>Michael</li>
  </ul>
</div>;

const names = ["Rob", "Mary", "John", "Steve", "Carrie"];

const fragment = document.createDocumentFragment();

for (let name in names) {
  const lis = document.createElement("li");
  lis.textContent = names[name];
  fragment.appendChild(lis);
}

document.querySelector("#output > .list").appendChild(fragment);

//* Joseph
//* Michael
//* Rob
//* Mary
//* John
//* Steve
//* Carrie

// -----------------------------------------------

//? The createDocumentFragment() method creates an offscreen node.
//? The offscreen node can be used to build a new document fragment that can be insert into any document.
//? The createDocumentFragment() method can also be used to extract parts of a document, change, add, or delete some of the content, and insert it back to the document.

//* You can always edit HTML elements directly. But a better way is to construct an (offscreen) document fragment, and attach this fragment to the real (live) DOM when it is ready. Because you insert the fragment when it is ready, there will be only one reflow and one single render.
//* If you want to append HTML elements items in a loops, using document fragments also improves performance.

//! Document nodes appended to the document fragment, are removed from the original document.
