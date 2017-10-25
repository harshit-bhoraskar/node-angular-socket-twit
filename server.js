var express = require('express'),
    app = express(),
    connection = require('./app/config/Conf_Server');

// Bootstrap application.
require('./app/express')(app);
require('./app/routes/routes')(app);

app.listen(connection.server_port, connection.server_ip, function() {
    console.log("Listening on " + connection.server_ip + ", port " + connection.server_port)
});

// development error handler with stacktrace print.
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler.
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;