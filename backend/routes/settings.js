const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send(
    "In this page you will be able to change your username and Password. Also, Display picture changing is available."
  );
});

router.route("/personal").get((req, res) => {
  res.send(
    "You can change your email id, phone number, etc. but not your name ever. Many more features"
  );
});

module.exports = router;
