const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
const fs = require("fs");
fs.readFile("data.json", "utf8", (error) => {
  if (error) throw error;
});

let jsonFile = fs.readFileSync("data.json", "utf8");

app.get("/flights", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "origin, content-type, accept");
  return res.send(jsonFile);
});

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  const host = server.address().address;
  const port = server.address().port;
  console.log(`Server listening on http://${host}:${port}`);
});
