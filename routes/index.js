var request = require('request');
var async = require('async');

var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Gateway_language = require('../models/gateway_language_bible');

module.exports = router

/* GET Home Page */
router.get('/', function(req, res){
  var authUser = req.session.user
  console.log(authUser);
  console.log("auth");
  async.parallel([
    function(callback) {
      var url = "http://172.17.42.1:32774/api/bibles";
      request(url, function(err, response, body) {
        if(err) {
         console.log(err);
         callback(true);
         return;
        }
        obj = JSON.parse(body);
        callback(false, obj);
      });
    }
  ],
  function(err, results) {
    if(err) {
      console.log(err);
      res.send(500,"Server Error");
      return;
    }
      console.log("###################");
      console.log(results[0]);
      res.render('home', {api1 : results[0]});
    }
  );
  // return res.render('home', { gateway_language_list: val});
});

router.post('/create_bible', function(req, res){
  var authUser = req.session.user
  console.log(authUser);
  var body = {
    "bibleId": req.body.bibleid,
    "version": req.body.version,
    "langCode": req.body.langcode,
    "bibleUrl": req.body.bibleUrl
  };
  console.log(body);
    return res.render('home', { gateway_language_formData: gateway_language_bibles });
});


/* GET Home Page */
router.get('/home', function(req, res){
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

