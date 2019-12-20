const express = require("express");
const helperRoute = require('../helpers/helpers-route');
const server = express();

server.use(express.json());
server.use('/api/helper', helperRoute);

server.get("/", (req, res) => {
  res.send("GET / Server base");
});

module.exports = server;
