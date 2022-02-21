//* <h1>This is a title</h1>
//* <p>some text here</p>

//* <button onclick="myFunc()">replace everything</button>

function myFunc() {
  document.open();
  document.write("<h1>Replace title</h1>");
  document.write("<p>replace the text</p>");
  document.close();
}

//* Replace title
//* replace the text

// -----------------------------------------------

//? The close() method closes a window previously opened with the open() method.
