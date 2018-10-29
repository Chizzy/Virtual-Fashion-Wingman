const UserHelp = require('../models/UserHelp')

const userHelpController = {
    new: (req, res) => {
        res.send('Waz hannin from UserHelp new!')
    },
    show: (req, res) => {
        res.send('Waz hannin from UserHelp show!')
    },
    create: (req, res) => {
        res.send('Waz hannin from UserHelp create!')
    },
    edit: (req, res) => {
        res.send('Waz hannin from UserHelp edit!')
    }
}

module.exports = userHelpController