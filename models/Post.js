const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema ({
    img: String,
    creator: {
        type: Schema.Types.UserHelp,
        ref: 'UserHelp'
    }, 
    outfit: String,
    feedback: {
        type: Schema.Types.Feedback,
        ref: 'Feedback'
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', Post)