// Libraries
const express = require("express");
const cors = require("cors");

// Express
const app = express();

// Middlesware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Public route
app.use(express.static("public"));
// View engine
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  return res.render("pages");
});
app.post("/", (req, res) => {});

module.exports = app;
