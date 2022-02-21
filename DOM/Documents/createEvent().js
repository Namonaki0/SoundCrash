//? HTML
//* <div id="output" onmouseover="this.innerHTML += '#';">#</div>

//* <button onclick="myFunc(event)">click</button>

//? JS
const output = document.querySelector("#output");

function myFunc(event) {
  const mouseEvent = document.createEvent("MouseEvent");
  mouseEvent.initMouseEvent(
    "mouseover",
    true,
    true,
    window,
    0,
    0,
    0,
    0,
    0,
    false,
    false,
    false,
    false,
    0,
    null
  );
  output.dispatchEvent(mouseEvent);
}

//* ############################## --> increase on mouseover or button click

// -----------------------------------------------

//? The createEvent() method creates an event object.
//? The event must be of a legal event type, and must be initialized (dispatched) before use.
