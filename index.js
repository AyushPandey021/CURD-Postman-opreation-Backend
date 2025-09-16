// Building out First project✅⭐
// Create✅
// Show all notes✅
// Update✅
// Delete✅

const express = require("express");
const app = express();
app.use(express.json());

let notes = [];

// CREATE - Add a new note
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  res.json({ message: "Created ⭐", notes });
});

// READ - Get all notes
app.get("/notes", (req, res) => {
  res.json(notes);
});

// DELETE - Remove a note by index
app.delete("/notes/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= notes.length) {
    return res.status(400).json({ message: "Invalid note index ❌" });
  }

  notes.splice(index, 1); // ✅ removes element properly
  res.json({ message: "Note deleted successfully ✅", notes });
});

// PATCH - Update note title by index
app.patch("/notes/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { title } = req.body;

  if (isNaN(index) || index < 0 || index >= notes.length) {
    return res.status(400).json({ message: "Invalid note index ❌" });
  }

  if (!title) {
    return res.status(400).json({ message: "Title is required ❌" });
  }

  notes[index].title = title;
  res.json({ message: "Note updated successfully ✅", notes });
});

app.listen(6000, () => {
  console.log("Server started 🍏 on port 6000");
});
