const express = require("express");
const userContoller = require("./../controllers/userController");

const router = express.Router();

router.route("/").post(userContoller.createUser);

module.exports = router;
