const User = require('../models/User')
const Post = require('../models/Post')

const postController = {
    index: (req, res) => {
        Post.find().populate('creator').then((posts) => {
            res.render('post/index', {
                posts: posts
            })
        })
    },
    new: (req, res) => {
        res.render('post/new')
    },
    show: (req, res) => {
        res.send('Waz hannin from Post show!')
    },
    create: (req, res) => {
        Post.create({
            img: req.body.img,
            creator: req.user._id,
            content: req.body.content
        }).then((newPost) => {
            res.redirect(`/posts/${newPost._id}`)
        })
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