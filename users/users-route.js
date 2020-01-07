const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./users-models");
const router = express.Router();

router.post("/register", async (req, res) => {
  let { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);
  password = hash;

  try {
    const id = await User.addUser({ username, password });
    console.log("ID: ", id);
    const successAdd = await User.usersRolesAdd(id[0]);
    res.status(200).json({ message: "user successfully added to database" });
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.getUser(username);
    if (user.length && bcrypt.compareSync(password, user[0].password)) {
      const token = getToken(user[0].username);
      req.headers.authorization = token;
      res.status(200).json({
        message: `you have logged in as ${user[0].username}`,
        token: token,
        data: user
      });
    } else {
      res.status(403).json({ message: "incorrect credentials" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/roles", verifyUser, async (req, res) => {
  const { roleId } = req.body;

  try {
    const role = await User.getRole(roleId);
    await User.editRole(req.user.id, roleId);
    res.status(200).json({
      message: `successfully changed ${req.user.username}'s role to ${role[0]}`
    });
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

async function verifyUser(req, res, next) {
  const { username } = req.body;

  try {
    const user = await User.getUser(username);
    req.user = user[0];
    next();
  } catch (error) {
    res.status(500).json(error);
  }
}

module.exports = router;
