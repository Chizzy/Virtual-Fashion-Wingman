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
    },
    update: (req, res) => {
        res.send('Waz hannin from UserHelp update!')
    },
    delete: (req, res) => {
        res.send('Waz hannin from UserHelp delete!')
    }
}

module.exports = userHelpController