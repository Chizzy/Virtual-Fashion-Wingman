const express = require('express')
const router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const userController = require('../controllers/user')
const postController = require('../controllers/post')
const feedbackController = require('../controllers/feedback')

/* GET home page. */
router.get('/', applicationController.index)

router.get('/signup', authController.signUp)
router.post('/signup', authController.createUser)

router.get('/login', authController.logIn)
router.post('/login', authController.checkUser)

router.get('/logout', authController.logOut)

router.get('/user/new', userController.new)
router.get('/user/:id', userController.show)
router.post('/user', userController.create)
router.get('/user/:id/edit', userController.edit)
router.put('/user/:id', userController.update)
router.patch('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

router.get('/user/:id/posts', postController.index)
router.get('/user/:id/posts/new', postController.new)
router.get('/user/:id/posts/:id', postController.show)
router.post('/user/:id/posts',  postController.create)
router.get('/user/:id/posts/:id/edit', postController.edit)
router.put('/user/:id/posts/:id', postController.update)
router.patch('/user/:id/posts/:id', postController.update)
router.delete('/user/:id/posts/:id', postController.delete)

router.get('/user/:id/feedbacks', feedbackController.index)
router.get('/user/:id/feedbacks/new', feedbackController.new)
router.get('/user/:id/feedbacks/:id', feedbackController.show)
router.post('/user/:id/feedbacks', feedbackController.create)
router.get('/user/:id/feedbacks/:id/edit', feedbackController.edit)
router.patch('/user/:id/feedbacks/:id', feedbackController.update)
router.put('/user/:id/feedbacks/:id', feedbackController.update)
router.delete('/user/:id/feedbacks/:id', feedbackController.delete)

module.exports = router
