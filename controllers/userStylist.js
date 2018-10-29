const UserStylist = require('../models/UserStylist')
const Feedback = require('../models/Feedback')

const userStylistController = {
    new: (req, res) => {
        res.send('Waz hannin from UserStylist new!')
    },
    show: (req, res) => {
        res.send('Waz hannin from UserStylist show!')
    }
}

module.exports = userStylistController