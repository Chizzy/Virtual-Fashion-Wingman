const passport = require('passport')

const authController = {
    signUp: (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect('/')
        }
        res.render('signup', {message: req.flash('signupMessage')})
    },
    createUser: (req, res) => {
        const signupStrategy = passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/signup',
            failureFlash: true
        })
        return signupStrategy (req, res)
    }
}

module.exports = authController