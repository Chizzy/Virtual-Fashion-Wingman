const UserHelp = require('../models/UserHelp')
const Post = require('../models/Post')

const postController = {
    index: (req, res) =>
    res.send('Waz hannin from Post index!')
}

module.exports = postController