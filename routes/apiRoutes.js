var data = require("../db/notesData");
const fs = require("fs");
const notesData = require("../db/notesData");


    app.get("api/notes", (req, res) => {
        res.json(notesData);
    });

    app.post("api/notes/", (req, res) => {
        notesData.push(req.body);
        fs.writeFileSync("./db/db.json", JSON.stringify(notesData), function(err) {
            if (err) throw (err);        
        }); 
    
        res.json(true);    
    
    });

    app.delete("api/notes/:note", (req, res) => {
        let id = req.params.note;
        notesData - notesData.filter(data => data.id !==id)
        fs.writeFileSync("./db/db.json", JSON.stringify(notesData));
        res.json({ok: true});
    }); 



module.exports = notesData;






