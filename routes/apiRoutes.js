

const fs = require("fs");
// var idMaker = idStamper();

function idStamper() {
  var theData = fs.readFileSync("../db/db.json", "utf-8");
  var dataJSON = JSON.parse(theData);
  for (var i = 0; i < dataJSON.length; i++){
    dataJSON[i].id = "" + i;
  }
  return dataJSON;
}


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    idMaker = idStamper();
    res.JSON(idMaker);
  });




  app.post("/api/notes", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    if (notesData.length < 5) {
      notesData.push(req.body);
      res.json(true);
    }
    else {
      waitListData.push(req.body);
      res.json(false);
    }
  });



  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = 0;
    waitListData.length = 0;

    res.json({ ok: true });
  });
};
