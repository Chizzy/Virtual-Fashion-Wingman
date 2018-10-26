const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const UserStylist = new Schema ({
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
    location: String,
    style: String,
    about: String,
    feedbacks: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback'
    }]
})

UserStylist.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

UserStylist.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password)
}

module.exports = mongoose.model('UserStylist', UserStylist)