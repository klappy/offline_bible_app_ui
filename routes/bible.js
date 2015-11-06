var express = require('express');
var router = express.Router();


router.get('https://localhost:3000/api/bible', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});
