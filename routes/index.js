const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')

/* GET home page. */
router.get('/', applicationController.index)

router.get('/signup', authController.signUp)
router.post('/signup', authController.createUser)

router.get('/login', authController.logIn)
router.post('/login', authController.checkUser)

router.get('/logout', authController.logOut)


module.exports = router
