const express = require("express");
const app = express();

app.get("/", (req, res) => {
  console.log("prajwal");
  res.end();
});

module.exports = app;
