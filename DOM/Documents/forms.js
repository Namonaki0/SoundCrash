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

//?JS
const formLength = document.forms.length;
console.log(formLength);

//* 2

const companyNameId = document.forms[1].id;
//? OR
const companyNameId = document.forms.item(1).id;

console.log(companyNameId);

//* companyName

const innerContent = document.forms.namedItem("companyName").innerHTML;

console.log(innerContent);

//* <label for='company'>Company:</label>
//* <input id='company' type='text' value='Honda'></input>

// -----------------------------------------------

//? The forms property returns a collection of all <form> elements in a document.
//? The forms property returns an HTMLCollection.
//? The forms property is read-only.
