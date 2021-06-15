//? NODE ---------------------------------------

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("THIS IS THE PAGE");
  console.log("logged");
});

app.listen(3000);

//? ---------------------------------------------------
