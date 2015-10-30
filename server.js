/**
 * Module dependencies
*/
var express  = require('express');
var mongoose = require('mongoose');
//var passport = require('passport');
var flash    = require('connect-flash');
var http = require('http');
var path = path = require('path');
//var uuid = require('node-uuid');
var auth = require('node-auth');

var logger = require('morgan');
var methodOverride = require('method-override');

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var multer = require('multer');
var errorHandler = require('errorhandler');
var json = require('json')

var vhost = 'nodejsapp.local'
var port     = process.env.PORT || 4000;
var ip     = process.env.IP || "localhost";

var app = express();

var connection = require('./config/database')(mongoose);
var models = require('./models/models')(connection);
//require('./config/passport')(passport,models); // pass passport for configuration


var session = require('express-session');

// TODO - Why Do we need this key ?
app.use(session({secret: 'mySecretKey'}));


mw = auth({
  auth: {
    host: 'https://staging-auth.sovee.com/'
  },
  loginErrorHandler: loginErrorHandler
});

function loginErrorHandler(req, res) {
return res.json('Login error.');
}

var routes = require('./app/routes.js');
app.use('/api', mw.api);
app.use(/^\/(?!api(\/|$)).*$/, mw.app);
app.use(mw.routes);

// set up our express application
app.set('port', port);
app.use(logger('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
// app.use(bodyParser()); // get information from html forms //body-parser deprecated bodyParser
app.set('view engine', 'html'); // set up html for templating
app.engine('.html', require('ejs').__express);
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.session({ secret: 'keyboard cat' }));// persistent login sessions
app.use(methodOverride());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(flash()); // use connect-flash for flash messages stored in session

//passport configuration
//app.use(passport.initialize());
//app.use(passport.session());// persistent login sessions

//require('./app/routes.js')(app, passport,models); // load our routes and pass in our app and fully configured passport

// development only
if (app.get('env') === 'development') {
    app.use(errorHandler());
};

// production only
if (app.get('env') === 'production') {
    // TODO
};

//express.vhost(vhost, app);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + vhost+":"+server.address().port);
});