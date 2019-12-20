const express = require("express");
const Helper = require("./helpers-models");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const helpers = await Helper.getHelpers();
    res.status(200).json(helpers);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
