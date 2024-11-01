const express = require("express");

// for importing the env data
// const dotenv = require("dotenv");

// for importing the notes data from notes.js
const notes = require("./data/notes");
const app = express();
// dotenv.config();

// for creating an API
app.get("/", (req, res) => {
  res.send("API is running....");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//for getting an particular note from notes.js using id's
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);
  res.send(note);
});

// for calling the port from the env file
const PORT = 5000;

app.listen(PORT, console.log("Server started on this PORT 5000"));
// to run this go to server and run command "node server.js"
// to avoid whole long command we have created a start command in package.json so, now we can just run by typing "npm start"
