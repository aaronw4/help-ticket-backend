const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Helper = require("./helpers-models");
const router = express.Router();

router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  password = hash;

  try {
    await Helper.addHelper({ username, password });
    res.status(200).json({ message: "user successfully added to database" });
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

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const helper = await Helper.getHelper(username);
    if (helper.length && bcrypt.compareSync(password, helper[0].password)) {
      const token = getToken(helper[0].username);
      req.headers.authorization = token;
      res.status(200).json({
        message: `you have logged in as ${helper[0].username}`,
        token: token
      });
    } else {
      res.status(403).json({ message: "incorrect credentials" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

function getToken(username) {
  const payload = {
    sub: username
  };

  const options = {
    expiresIn: "12hr"
  };

  return jwt.sign(
    payload,
    process.env.JWT_SECRET || "THIS WAS SUPPOSED TO BE RANDOM",
    options
  );
}

module.exports = router;
