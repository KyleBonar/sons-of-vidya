var express = require("express");
var app = express();

app.use(express.static("dist"));

//rest will fall here and be handled by react app
app.get("*", function(req, res) {
  console.log("YO!");
  res.sendFile(`${process.cwd()}/dist/index.html`);
});

app.listen(5000, function() {
  console.log("Example app listening on port 5000!");
});
