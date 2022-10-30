var express = require('express')

var router = express.Router()

const newsController = require('../controller/newsController')

router.use('/', newsController)

module.exports = router