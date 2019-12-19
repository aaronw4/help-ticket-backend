const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("GET / Server base");
});

module.exports = server;
