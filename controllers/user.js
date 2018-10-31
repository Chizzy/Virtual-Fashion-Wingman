const User = require('../models/User')
const Post = require('../models/Post')
const Feedback = require('../models/Feedback')

const userController = {
    index: (req, res) => {
        User.findById(req.params.id).populate('posts').then((user) => {
            res.render('user/index', {user: user})
        })
    },
    show: (req, res) => {
        User.findById(req.params.id).populate('feedbacks , posts').then((user) => {
            res.render('user/show', {user: user})
        })
    },
    edit: (req, res) => {
        User.findById(req.params.id).then((user) => {
            res.render('user/edit', {user: user})
        })
    },
    update: (req, res) => {
        User.findByIdAndUpdate(req.params.id, req.body).then((updatedUser) => {
            res.redirect(`/user/${updatedUser._id}`)
        })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = userController