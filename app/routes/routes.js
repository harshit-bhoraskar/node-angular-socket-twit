var C_Twitter = require('../modules/twitter/C_Twitter');
module.exports = function(options) {
    var app = options.app;
    app.use('/api/twit', require('../modules/twitter/C_Twitter')(options)); // Twitter module 
    //app.use('/api/xyz', require('../modules/xyz/C_Xyz')); // xyz module 
}