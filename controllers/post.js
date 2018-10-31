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
        Post.findById(req.params.id).then((post) => {
            res.render('post/show', {
                post: post
            })
        })
    },
    create: (req, res) => {
        Post.create({
            img: req.body.img,
            creator: req.user._id,
            content: req.body.content
        }).then((newPost) => {
            res.redirect(`/posts/${newPost._id}`)
        })
        // .then((newPost) => {
        //     User.posts.push(newPost)
        // })
    },
    edit: (req, res) => {
        Post.findById(req.params.id).then((post) => {
            res.render('post/edit', {
                post: post
            })
        })
    },
    update: (req, res) => {
        Post.findByIdAndUpdate(req.params.id, req.body).then((updatedPost) => {
            res.redirect(`/posts/${updatedPost._id}`)
        })
    },
    delete: (req, res) => {
        Post.findByIdAndRemove(req.params.id).then(() => {
            res.redirect('/')
        })
    }
}

module.exports = postController