var fs = require("fs");
var util = require("util")

var notesData = JSON.parse(fs.readFileSync(__dirname + "/db.json"));

module.exports = notesData;