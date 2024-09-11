const express = require("express");
const blogController = require("../controllers/blogController.js");

const router = express.Router();

router.route("/").post(blogController.addBlog);

module.exports = router;
