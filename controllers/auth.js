const passport = require('passport')

const authController = {
    signUp: (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect('/')
        }
        res.render('app/signup', {
            message: req.flash('signupMessage')
        })
    },
    createUser: (req, res) => {

        console.log(req.body)
        const signupStrategy = passport.authenticate('local-signup', {
            successRedirect: '/',
            failureRedirect: '/signup',
            failureFlash: true
        })
        return signupStrategy(req, res)
    },
    logIn: (req, res) => {
        res.render('app/login', {
            message: req.flash('loginMessage')
        })
    },
    checkUser: (req, res) => {
        const loginStrategy = passport.authenticate('local-login', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        })
        return loginStrategy(req, res)
    },
    logOut: (req, res) => {
        req.logOut()
        res.redirect('/')
    }
}

module.exports = authController