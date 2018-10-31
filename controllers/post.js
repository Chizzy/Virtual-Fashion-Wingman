const User = require('../models/User')
const Post = require('../models/Post')

const postController = {
    index: (req, res) => {
        Post.find().populate('creator').then((posts) => {
            res.render('post/index', {posts: posts})
        })
    },
    new: (req, res) => {
        res.send('Waz hannin from Post new!')
    },
    show: (req, res) => {
        res.send('Waz hannin from Post show!')
    },
    create: (req, res) => {
        res.send('Waz hannin from Post create!')
    },
    edit: (req, res) => {
        res.send('Waz hannin from Post edit!')
    },
    update: (req, res) => {
        res.send('Waz hannin from Post update!')
    },
    delete: (req, res) => {
        res.send('Waz hannin from Post delete!')
    }
}

module.exports = postController