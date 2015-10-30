var express = require('express');
var router = express.Router();
var User = require('../models/user');

module.exports = function(app, passport,models) {

    var api = require('./api.js')(models);

    // app.get('/', function(req, res){
    //     res.render('index');
    // });

    app.get('/partials/:name', showClientRequest, function (req, res) {
        var name = req.params.name;
        res.render('partials/' + name);
    });

    app.get('/partials/auth/:name', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),function (req, res) {
        var name = req.params.name;
        res.render('partials/auth/' + name);
    });

    // 
    /* GET Home Page */
    app.get('/home', function(req, res){
     var authUser = req.session.user
     return res.render('home', { user: User.info(authUser) });
    });
    /* GET Home Page */
    app.get('/', function(req, res){
     var authUser = req.session.user
     return res.render('index', { user: User.info(authUser) });
    });

    app.get('/api/people', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.getPeople);

    app.post('/api/person', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.createPerson);

    app.put('/api/person/:id', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.updatePerson);

    app.delete('/api/person/:id', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.removePerson);

    app.get('/api/things', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.getThings);

    app.post('/api/thing', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.createThing);

    app.put('/api/thing/:id', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.updateThing);

    app.get('/api/thing/:id', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.updateThing);

    app.delete('/api/thing/:id', showClientRequest, passport.authenticate('local-authorization', {
        session: false
    }),api.removeThing);





    function showClientRequest(req, res, next) {
        var request = {
            REQUEST : {
                HEADERS: req.headers,
                BODY : req.body
            }
        }
        console.log(request)
        return next();
    }
}