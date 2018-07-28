const express = require("express");
let port = process.env.PORT || 9000;
const app = express();

app.use(express.static(__dirname + "/"));

const server = app.listen(port, function() {
  console.log("Express server listening on port " + port);
});
