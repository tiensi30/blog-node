var express = require("express");

var router = express.Router();

const newsController = require("../controller/newsController");

router.get("/", newsController);

module.exports = router;
