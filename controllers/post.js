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
    }
}

module.exports = postController