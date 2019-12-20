const express = require("express");
const bcrypt = require("bcryptjs");
const Helper = require("./helpers-models");
const router = express.Router();

router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  const hash = bcrypt.hash(password, 12);
  password = hash;

  try {
    const addedUser = await Helper.addHelper({ username, password });
    res.status(200).json(addedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const helpers = await Helper.getHelpers();
    res.status(200).json(helpers);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
