const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const UserHelp = new Schema ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    img: String,
    posts: [{
        type: Schema.Types.Post,
        ref: 'Post'
    }]
})

UserHelp.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}


module.exports = mongoose.model('UserHelp', UserHelp)