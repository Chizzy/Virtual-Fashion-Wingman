const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Feedback = new Schema ({
    
})

module.exports = mongoose.model('Feedback', Feedback)