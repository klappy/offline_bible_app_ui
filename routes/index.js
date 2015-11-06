var express = require('express');
var router = express.Router();
var User = require('../models/user');

module.exports = router

/* GET Home Page */
router.get('/home', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});

/* GET Home Page */
router.get('/', function(req, res){
  var authUser = req.session.user
  return res.render('home', { user: User.info(authUser) });
});

/* GET Book Page */
router.get('/books', function(req, res){
  res.render('books');
});

/* GET Chapter Page */
router.get('/chapters', function(req, res){
  res.render('chapters');
});

/* GET Bible Page */
router.get('/bible', function(req, res){
  res.render('bible');
});

