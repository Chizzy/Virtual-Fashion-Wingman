const User = require('../models/User')
const Post = require('../models/Post')
const Feedback = require('../models/Feedback')

const userController = {
    new: (req, res) => {
        res.render('user/new')
    },
    show: (req, res) => {
        res.send('Waz hannin from User show!')
    },
    create: (req, res) => {
        res.send('Waz hannin from User create!')
    },
    edit: (req, res) => {
        res.send('Waz hannin from User edit!')
    },
    update: (req, res) => {
        res.send('Waz hannin from User update!')
    },
    delete: (req, res) => {
        res.send('Waz hannin from User delete!')
    }
}

module.exports = userController