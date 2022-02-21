//? HTML
<p id="output"></p>;

//? JS
setInterval("focusMessage()", 1);

function focusMessage() {
  let text;
  if (document.hasFocus()) {
    text = "FOCUS";
  } else {
    text = "NO FOCUS";
  }
  document.getElementById("output").innerHTML = text;
}

// -----------------------------------------------

//? The hasFocus() method returns a true if the document (or any element in the document) has focus.
//? Otherwise it returns false.
