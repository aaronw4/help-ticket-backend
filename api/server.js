const express = require("express");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.send("GET / Server base");
});

module.exports = server;
