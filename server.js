var express = require('express'),
    app = express(),
    socket = require('socket.io'), // Pass a http.Server instance to the listen method
    connection = require('./app/config/Conf_Server');


// Crete Socket and express listener.
var io = socket.listen(app.listen(connection.server_port, connection.server_ip, function() {
    console.log("Listening on " + connection.server_ip + ", port " + connection.server_port)
}));


var options = {
    'app': app,
    'io': io // websocket connection obj
}
// Bootstrap.
require('./app/express')(options);
require('./app/routes/routes')(options);

module.exports = app;