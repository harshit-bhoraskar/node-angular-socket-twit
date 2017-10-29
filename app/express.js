 var morgan = require('morgan'),
     cookieParser = require('cookie-parser'),
     bodyParser = require('body-parser'),
     path = require('path'),
     express = require('express'),
     public = path.join(__dirname + '../public/')

 module.exports = function(options) {
     var app = options.app;

     app.use(express.static('public'));
     app.get('/', function(req, res) {
         res.sendFile(public + 'index.html');
     });
     app.use(bodyParser.urlencoded({
         extended: true
     }));
     app.use(bodyParser.json());


     if (process.env.NODE_ENV === 'development') {
         app.use(morgan('dev'));

         // development error handler with stacktrace print.
         app.use(function(err, req, res, next) {
             res.status(err.status || 500);
             res.render('error', {
                 message: err.message,
                 error: err
             });
         });
     } else {
         // production error handler.
         app.use(function(err, req, res, next) {
             res.status(err.status || 500);
             res.render('error', {
                 message: err.message,
                 error: {}
             });
         });
     }

 };