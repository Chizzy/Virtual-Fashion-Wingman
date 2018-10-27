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
    password: {
        type: String,
        required: true
    },
    img: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }]
})

UserHelp.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

UserHelp.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('UserHelp', UserHelp)