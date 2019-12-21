const express = require("express");
const Ticket = require("./tickets-models");
const restricted = require("../auth/restricted-middleware");

const router = express.Router();

router.get("/", restricted, async (req, res) => {
  try {
    const tickets = await Ticket.getTickets();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
