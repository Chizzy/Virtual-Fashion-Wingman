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

router.get('/user/:id', userController.show)
router.get('/user/:id/edit', userController.edit)
router.put('/user/:id', userController.update)
router.patch('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

router.get('/posts', postController.index)
router.get('/user/:id/posts/new', postController.new)
router.get('/posts/:id', postController.show)
router.post('/posts',  postController.create)
router.get('/posts/:id/edit', postController.edit)
router.put('/posts/:id', postController.update)
router.patch('/posts/:id', postController.update)
router.delete('/posts/:id', postController.delete)

router.get('/feedback/:id', feedbackController.show)
router.post('/feedbacks', feedbackController.create)
router.delete('/user/:id/feedbacks/:id', feedbackController.delete)

module.exports = router
