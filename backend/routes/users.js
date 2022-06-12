const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// Registration
router.post("/register", (req, res) => {
  try {
    const salt = bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });

    // saving user & displaying the response
    const user = newUser.save();

    res.status(200).json(user._id);
  } catch (error) {
    console.log(error);
    res.status(500).json(err);
  }
});
