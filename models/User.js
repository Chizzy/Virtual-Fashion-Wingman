const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema ({
    type: ['Stylist', 'Seeking Style Advice'],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    img: String,
    location: String,
    about: String,
    posts: [{
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }],
    feedbacks: [{
        type: Schema.Types.ObjectId,
        ref: 'Feedback'
    }]
})

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
}

User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password)
}
    
 module.exports = mongoose.model('User', User)