const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    res.send(users);
  } catch (err) {
    res.status(403);
    res.send(`Fail to get users => ${err}`);
  }
});

router.post("/", (req, res) => {
  const user = new User({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    role: req.body.role,
    skills: req.body.skills,
  });

  user
    .save()

    .then(() => {
      res.status(201);
      res.send("Success to create user");
    })
    .catch((err) => {
      res.status(403);
      res.send(`Fail to create user => ${err}`);
    });
});

module.exports = router;
