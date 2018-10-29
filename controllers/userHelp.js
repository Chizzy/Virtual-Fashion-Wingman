const UserHelp = require('../models/UserHelp')

const userHelpController = {
    new: (req, res) => {
        res.send('Waz hannin from UserHelp new!')
    },
    show: (req, res) => {
        res.send('Waz hannin from UserHelp show!')
    }
}

module.exports = userHelpController