const passport = require('passport')

const authController = {
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