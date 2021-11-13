const router = require("express").Router();
let cospace = require("../models/cospace.model");

router.route("/").get((req, res) => {
  cospace
    .find()
    .then((cospace) => res.json(cospace))
    .catch((err) => res.status(400).json("Error: " + err));
});
router.route("/add").post((req, res) => {
  const cospacename = req.body.cospacename;
  const description = req.body.description;
  const coactors = req.body.coactors;
  const date = Date.parse(req.body.date);
  const newCospace = new cospace({
    cospacename,
    description,
    coactors,
    date,
  });
  newCospace
    .save()
    .then(() => res.json("Cospace Created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
