const UserStylist = require('../models/UserStylist')
const Feedback = require('../models/Feedback')

const userStylistController = {
    new: (req, res) => {
        res.send('Waz hannin from UserStylist new!')
    },
    show: (req, res) => {
        res.send('Waz hannin from UserStylist show!')
    },
    create: (req, res) => {
        res.send('Waz hannin from UserStylist create!')
    },
    edit: (req, res) => {
        res.send('Waz hannin from UserStylist edit!')
    },
    update: (req, res) => {
        res.send('Waz hannin from UserStylist update!')
    },
    delete: (req, res) => {
        res.send('Waz hannin from UserStylist delete!')
    }
}

module.exports = userStylistController