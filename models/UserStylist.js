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
    img: {
        type: String,
        required: true
    },
    location: String,
    style: String,
    about: String,
    feedbacks: [{
        type: Schema.Types.Feedback,
        ref: 'Feedback'
    }]
})

UserStylist.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

module.exports = mongoose.model('UserStylist', UserStylist)