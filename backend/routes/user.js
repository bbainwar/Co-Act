const router = require("express").Router();
let cospace = require("../models/user.model");

router.route("/").get((req, res) => {
  cospace
    .find({})
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
