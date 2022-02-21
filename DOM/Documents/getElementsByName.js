//? HTML
{
  /* <form id="identification">
  <label for="firstName">First Name:</label>
  <input id="firstName" type="text" value="Mark"></input>
  <label for="lastName">Last Name:</label>
  <input id="lastName" type="text" value="Smith"></input>
</form>
<form id="companyName">
  <label for="company">Company:</label>
  <input id="company" type="text" value="Honda"></input>
</form> */
}

//? JS
const name = document.getElementsByName("company");

console.log(name);

//* ["<input/>"];

// -----------------------------------------------

//? The getElementsByName() method returns a collection of elements with a specified name.
//? The getElementsByName() method returns an HTMLCollection.
