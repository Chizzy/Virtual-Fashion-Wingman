const UserStylist = require('../models/UserStylist')
const Feedback = require('../models/Feedback')

const feedbackController = {
    index: (req, res) => {
        res.send('Waz hannin from Feedback index!')
    }
}

module.exports = feedbackController