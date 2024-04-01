const express = require('express')
const router = express.Router()
const associationcontroller = require('../controller/associationcontroller')

router.get('/',associationcontroller.associate)

module.exports = router