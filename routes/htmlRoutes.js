const path = require("path");
const notesData = require("../db/notesData");



app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = notesData;

