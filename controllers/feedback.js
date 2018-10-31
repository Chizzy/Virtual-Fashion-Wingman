const User = require('../models/User')
const Feedback = require('../models/Feedback')

const feedbackController = {
    show: (req, res) => {
        res.send('Waz hannin from Feedback show!')
    },
    create: (req, res) => {
        Feedback.create({
            comment: req.body.comment,
            stylist: req.user._id
        }).then((newFeedback) => {
            User.findById(newFeedback.stylist).populate('feedbacks').then(stylist => {
                console.log(stylist.feedbacks)
                stylist.feedbacks.push(newFeedback)
                console.log('feedback', newFeedback)
                stylist.save()
                res.redirect('/posts')
            })
        })
    },
    delete: (req, res) => {
        res.send('Waz hannin from Feedback delete!')
    }
}

module.exports = feedbackController