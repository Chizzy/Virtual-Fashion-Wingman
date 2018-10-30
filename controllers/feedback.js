const User = require('../models/User')
const Feedback = require('../models/Feedback')

const feedbackController = {
    index: (req, res) => {
        res.send('Waz hannin from Feedback index!')
    },
    new: (req, res) => {
        res.send('Waz hannin from Feedback new!')
    },
    show: (req, res) => {
        res.send('Waz hannin from Feedback show!')
    },
    create: (req, res) => {
        res.send('Waz hannin from Feedback create!')
    },
    edit: (req, res) => {
        res.send('Waz hannin from Feedback edit!')
    },
    update: (req, res) => {
        res.send('Waz hannin from Feedback update!')
    },
    delete: (req, res) => {
        res.send('Waz hannin from Feedback delete!')
    }
}

module.exports = feedbackController