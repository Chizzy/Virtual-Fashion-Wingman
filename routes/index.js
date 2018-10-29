const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const userHelpController = require('../controllers/userHelp')

/* GET home page. */
router.get('/', applicationController.index)

router.get('/signup', authController.signUp)
router.post('/signup', authController.createUser)

router.get('/login', authController.logIn)
router.post('/login', authController.checkUser)

router.get('/logout', authController.logOut)

router.get('/userHelp/new', userHelpController.new)
router.get('/userHelp/:id', userHelpController.show)
router.post('/userHelp', userHelpController.create)
router.get('/userHelp/:id/edit', userHelpController.edit)


module.exports = router
