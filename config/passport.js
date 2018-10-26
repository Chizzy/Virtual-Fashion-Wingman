const LocalStrategy = require('passport-local').Strategy
const UserHelp = require('../models/UserHelp')
const UserStylist = require('../models/UserStylist')

const passportConfig = (passport) => {
    const strategyFields = {
        emailField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }

    const localSignupCallback = (req, email, password, callback) => {
        UserHelp.findOne({'local.email': email}).then((userHelp) => {
            if (userHelp) {
                return callback (null, false, req.flash('signupMessage', 'This email is already in use.'))
            } else {
                const newUserHelp = new UserHelp()
                newUserHelp.local.email = email
                newUserHelp.local.password = newUserHelp.encrypt(password)
                newUserHelp.save().then((saved) => {
                    return callback (null, saved)
                })
            }
        })


        UserStylist.findOne({'local.email': email}).then((userStylist) => {
            if (userStylist) {
                return callback (null, false, req.flash('signupMessage', 'This email is already in use.'))
            } else {
                const newUserStylist = new UserStylist()
                newUserStylist.local.email = email
                newUserStylist.local.password = password
                newUserStylist.save().then((saved) => {
                    return callback (null, saved)
                })
            }
        })
    }

    passport.use('local-signup', new LocalStrategy(strategyFields, localSignupCallback))
}

module.exports = passportConfig