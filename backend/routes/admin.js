const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send(
    "This is the admin route! Kindly leave this route if you are not an ADMIN!"
  );
});

router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
