const express = require("express");
const app = express();
const mongoose = require("mongoose");

//? NODE ---------------------------------------
require("dotenv/config");

app.get("/", (req, res) => {
  res.send("THIS IS THE PAGE");
  console.log("logged");
});

app.listen(3000);

//? ---------------------------------------------------

//? MONGOOSE ---------------------------------------

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  const api_key = process.env.API_KEY;
  console.log("CONNECTED TO DATABASE");
});
//? ---------------------------------------------------
