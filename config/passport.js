const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

const passportConfig = (passport) => {
    const strategyFields = {
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }

    const localSignupCallback = (req, email, password, callback) => {
        User.findOne({'local.email': email}).then((user) => {
            if (user) {
                return callback (null, false, req.flash('signupMessage', 'This email is already in use.'))
            } else {
                const newUser = new User()
                newUser.local.email = email
                newUser.local.password = newUser.encrypt(password)
                newUser.save().then((saved) => {
                    return callback (null, saved)
                })
            }
        })
    }


    passport.use('local-signup', new LocalStrategy(strategyFields, localSignupCallback))

    const localLoginCallback = (req, email, password, callback) => {
        User.findOne({'local.email': email}).then((user) => {
            if (!user) {
                return callback (null, false, req.flash('loginMessage', 'Username or Password not found. Please try again.'))
            }
            if (!user.validPassword(password)) {
                return callback (null, false, req.flash('loginMessage', 'Username or Password not found. Please try again.'))
            }
            return callback (null, user)
        })
    }

    passport.use('local-login', new LocalStrategy(strategyFields, localLoginCallback))

    passport.serializeUser(function (user, callback) {
        callback(null, user.id)
    })
     passport.deserializeUser(function (id, callback) {
         User.findById(id, function(err, user) {
             callback(err, user)
         })
     })
}

module.exports = passportConfig