var express = require('express');

var router = express.Router();

const { home, search } = require('../controller/siteController');

router.use('/search', search);
router.use('/', home);

module.exports = router;
