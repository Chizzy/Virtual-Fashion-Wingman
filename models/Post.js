const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Post = new Schema ({
    
})

module.exports = mongoose.model('Post', Post)