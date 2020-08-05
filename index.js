var express = require("express");
var app = express();

app.use(express.static("public_html"));

app.listen("3000", function () {
  console.log("Listening on Localhost:3000");
});
