var express = require("express");

var router = express.Router();

const { courses, courseDetail } = require("../controller/courseController");

router.get("/:slug", courseDetail);
router.get("/", courses);

module.exports = router;
