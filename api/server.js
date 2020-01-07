const express = require("express");
const userRoute = require("../users/users-route");
const ticketRoute = require("../auth/tickets/tickets-route");
const adminRoute = require("../auth/admin/admin-router");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(cors());
server.use("/api/user", userRoute);
server.use("/api/ticket", ticketRoute);
server.use("/api/admin", adminRoute);

server.get("/", (req, res) => {
  res.send("GET / Server base");
});

module.exports = server;
