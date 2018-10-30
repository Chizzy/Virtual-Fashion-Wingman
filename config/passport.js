const LocalStrategy = require('passport-local').Strategy
const User = require('../models/User')

const passportConfig = (passport) => {
    console.log("Passport config loaded")
    const strategyFields = {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }
    passport.use('local-signup', new LocalStrategy(strategyFields,  function(req, email, password, callback)  {
        console.log("IN LOCAL SIGNUP")
        User.findOne({
                'email': email
            }).then((user) => {
                if (user) {
                    console.log(user)
                    return callback(null, false, req.flash('signupMessage', 'This email is already in use.'))
                } else {
                    const newUser = new User()
                    newUser.type = req.body.type
                    newUser.name = req.body.name
                    newUser.email = req.body.email
                    newUser.password = newUser.encrypt(password)
                    newUser.img = req.body.img
                    newUser.location = req.body.location
                    newUser.about = req.body.about
                    console.log(newUser)
                    newUser.save().then((saved) => {
                        return callback(null, saved)
                    })
                }
            })
            .catch((err) => {
                console.log(err)
            })
    }
))

    const localLoginCallback = (req, email, password, callback) => {
        User.findOne({
            'email': email
        }).then((user) => {
            if (!user) {
                return callback(null, false, req.flash('loginMessage', 'Username or Password not found. Please try again.'))
            }
            if (!user.validPassword(password)) {
                return callback(null, false, req.flash('loginMessage', 'Username or Password not found. Please try again.'))
            }
            return callback(null, user)
        })
    }

    passport.use('local-login', new LocalStrategy(strategyFields, localLoginCallback))

    passport.serializeUser(function (user, callback) {
        callback(null, user.id)
    })
    passport.deserializeUser(function (id, callback) {
        User.findById(id, function (err, user) {
            callback(err, user)
        })
    })
}

module.exports = passportConfig