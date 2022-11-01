var express = require("express");

var router = express.Router();

const { home, search } = require("../controller/siteController");

router.get("/search", search);
router.get("/", home);

module.exports = router;
