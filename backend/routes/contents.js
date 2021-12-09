const router = require("express").Router();

router.route("/").get((req, res) => {
  res.send(
    "This page is specially for media contents display purposes. You can opt for videos or media adding an extra route on the above site"
  );
});

router.route("/videos").get((req, res) => {
  res.send(
    "Here! You will experience miniYoutube experiences. Kindly upload at least one video through the uploading route and then see the contents."
  );
});

router.route("/images").get((req, res) => {
  res.send(
    "Images! Images!! Images!!! Cool views of the beaches, heavenly views of mountains and rivers are waiting for you to be seen!"
  );
});

module.exports = router;
