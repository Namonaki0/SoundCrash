<div id="root"></div>;

document.addEventListener("DOMContentLoaded", myFunction);

function myFunction() {
  document.getElementById("root").textContent = "Hello World";
}

//* Hello World

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("root").textContent = "Hi there";
});

//* Hi there

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("root").textContent = "Hi there";
});

//* Hi there

// -----------------------------------------------

//? The addEventListener() method attaches an event handler to the document.
