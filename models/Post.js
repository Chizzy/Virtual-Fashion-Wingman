const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema ({
    img: String,
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'UserHelp'
    }, 
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Post', Post)