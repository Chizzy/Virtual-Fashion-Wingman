const UserStylist = require('../models/UserStylist')
const Feedback = require('../models/Feedback')

const userStylistController = {
    new: (req, res) => {
        res.send('Waz hannin from UserStylist new!')
    }
}

module.exports = userStylistController