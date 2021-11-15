const router = require("express").Router();
let User = require("../models/user.model");
const userController = require('../controllers/userController');

router.route("/").get((req, res) => {
  
});

router.route("/add").post(userController.addUser);
router.route("/logout").get(userController.removeUser);

module.exports = router;
