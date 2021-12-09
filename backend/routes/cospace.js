const router = require("express").Router();
let cospace = require("../models/cospace.model");

router.route("/").get((req, res) => {
  cospace
    .find({})
    .then((cospace) => {
      res.json(cospace);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const cospacename = req.body.databody.title;
  const description = req.body.databody.description;
  const coactors = req.body.databody.coactor;
  const uid = req.body.databody.uid;
  console.log(cospacename);
  const newCospace = new cospace({
    cospacename,
    description,
    coactors,
    uid,
  });
  newCospace
    .save()
    .then(() => res.json("Cospace Created!"))
    .catch((err) => res.status(400).json("Error: " + err));
});
module.exports = router;
