const express = require("express");
const postControlers = require("../controllers/postControllers")
const router = express.Router();

router.route("/")
    .get(postControlers.getAllPost)
    .post(postControlers.createNewPost);

router.route("/:id").get(postControlers.getPostById);

module.exports = router;

