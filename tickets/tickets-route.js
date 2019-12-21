const express = require("express");
const Ticket = require("./tickets-models");

const router = express.Router();

router.get("/", (req, res) => {
  try {
    const tickets = Ticket.getTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
