var express = require('express'),
    app = express(),
    http = require('http'),
    server = http.createServer(app),
    io = require('socket.io').listen(server), // Pass a http.Server instance to the listen method
    connection = require('./app/config/Conf_Server');


// Bootstrap application.
var options = {
    app: app,
    io: io
}
require('./app/express')(options);
require('./app/routes/routes')(options);

server.listen(connection.server_port, connection.server_ip, function() {
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