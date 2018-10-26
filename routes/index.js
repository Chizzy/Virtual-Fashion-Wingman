var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' })
});

router.get('/signup', authController.signUp)
router.post('/signup', authController.createUser)



module.exports = router
