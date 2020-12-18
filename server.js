const express = require("express");
// const favicon = require('express-favicon');
const path = require("path");
const port = process.env.PORT || 9139;
const app = express();
// app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));
app.get("/ping", function (req, res) {
  return res.send("pong");
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
//app.listen(port);
app.listen(port, "0.0.0.0", (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`==> 🌎 app listening on http://localhost:${port}.`);
});