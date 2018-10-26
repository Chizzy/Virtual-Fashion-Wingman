const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema ({
    img: String,
    creator: {
        type: Schema.Types.UserStylist,
        ref: 'UserHelp'
    }, 
    outfit: String,
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', Post)