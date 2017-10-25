 var morgan = require('morgan'),
     cookieParser = require('cookie-parser'),
     bodyParser = require('body-parser');

 module.exports = function(app) {
     if (process.env.NODE_ENV === 'development') {
         app.use(morgan('dev'));
     }
     app.use(bodyParser.urlencoded({
         extended: true
     }));
     app.use(bodyParser.json());
 };