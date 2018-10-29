const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const userHelpController = require('../controllers/userHelp')
const postController = require('../controllers/post')
const userStylistController = require('../controllers/userStylist')
const feedbackController = require('../controllers/feedback')

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
router.put('/userHelp/:id', userHelpController.update)
router.patch('/userHelp/:id', userHelpController.update)
router.delete('/userHelp/:id', userHelpController.delete)

router.get('/userHelp/:id/posts', postController.index)
router.get('/userHelp/:id/posts/new', postController.new)
router.get('/userHelp/:id/posts/:id', postController.show)
router.post('/userHelp/:id/posts',  postController.create)
router.get('/userHelp/:id/posts/:id/edit', postController.edit)
router.put('/userHelp/:id/posts/:id', postController.update)
router.patch('/userHelp/:id/posts/:id', postController.update)
router.delete('/userHelp/:id/posts/:id', postController.delete)

router.get('/userStylist/new', userStylistController.new)
router.get('/userStylist/:id', userStylistController.show)
router.post('/userStylist', userStylistController.create)
router.get('/userStylist/:id/edit', userStylistController.edit)
router.patch('/userStylist/:id', userStylistController.update)
router.put('/userStylist/:id', userStylistController.update)
router.delete('/userStylist/:id', userStylistController.delete)

router.get('/userStylist/:id/feedbacks', feedbackController.index)
router.get('/userStylist/:id/feedbacks/new', feedbackController.new)
router.get('/userStylist/:id/feedbacks/:id', feedbackController.show)
router.post('/userStylist/:id/feedbacks', feedbackController.create)
router.get('/userStylist/:id/feedbacks/:id/edit', feedbackController.edit)
router.patch('/userStylist/:id/feedbacks/:id', feedbackController.update)
router.put('/userStylist/:id/feedbacks/:id', feedbackController.update)
router.delete('/userStylist/:id/feedbacks/:id', feedbackController.delete)

module.exports = router
