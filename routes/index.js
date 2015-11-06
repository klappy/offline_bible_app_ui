var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Gateway_language_bible = require('../models/gateway_language_bible');

module.exports = router

/* GET Home Page */
router.get('/home', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});

/* GET Home Page */
router.get('/', function(req, res){
  var authUser = req.session.user
  console.log(authUser);
  return res.render('home', { gateway_language_bible: Gateway_language_bible.info(authUser) });
});

router.get( "/auth/loginCallback", function(req, res){
  //var auth_token = res.params.token;
  var sess = {
    auth_token: res.params.token
  }
  app.use(session(sess));

})


