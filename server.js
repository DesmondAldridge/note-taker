//Global Variables Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const theNotes = require("./db/db.json")

//Express
const app = express();

//Port
const PORT = process.env.PORT || 8080;

//More Express Setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Routes
require("./routes/notesRoutes")(app);
require("./routes/htmlRoutes")(app);


// app.get("/", function (req, res) {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "public/notes.html"));
});

//API Route
app.get("/api/notes", function (req, res) {
  return res.json(theNotes);
});

app.post("/api/notes", function (req, res) {
  let newNote = req.body;
});

// LEFT OFF HERE!!!!!!

//
app.get("/api/characters/:character", function (req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});


app.post("/api/characters", function (req, res) {

  var newCharacter = req.body;

  newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

//Port Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});




