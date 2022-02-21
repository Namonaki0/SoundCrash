const body = document.querySelector("body");

body.onclick = function () {
  const element = document.activeElement.tagName;
  const output = document.querySelector("#output");
  output.innerHTML = `you clicked on ${element}`;
};

// -----------------------------------------------

//? The activeElement property returns the HTML element that have focus.
//? The activeElement property is read-only.
