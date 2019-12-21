const express = require("express");
const helperRoute = require("../helpers/helpers-route");
const ticketRoute = require("../tickets/tickets-route");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/helper", helperRoute);
server.use("/api/ticket", ticketRoute);

server.get("/", (req, res) => {
  res.send("GET / Server base");
});

module.exports = server;
