const UserHelp = require('../models/UserHelp')
const Post = require('../models/Post')

const postController = {
    index: (req, res) => {
        res.send('Waz hannin from Post index!')
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
    }
}

module.exports = postController