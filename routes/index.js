const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')

/* GET home page. */
router.get('/', applicationController.index)

// router.get('/signup', authController.signUp)
router.post('/signup', authController.createUser)



module.exports = router
