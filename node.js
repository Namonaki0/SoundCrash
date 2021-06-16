//? NODE ---------------------------------------

const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.get("/", (req, res) => {
  res.send("THIS IS THE PAGE");
  console.log("logged");
});

app.listen(3000);

//? ---------------------------------------------------

mongoose.connect(
  "mongodb+srv://sccluster.l8n0h.mongodb.net/SoundCrashDB",
  { useNewUrlParser: true },
  () => {
    console.log("CONNECTED TO DATABASE");
  }
);
