const express = require("express");
require("dotenv").config();

const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/twitter", (req, res) => {
  res.send("chaitanya.com");
});
app.get("/login", (req, res) => {
  res.send("<h2>Hello whatsapp</h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example ruunning on port ${port}`);
});
