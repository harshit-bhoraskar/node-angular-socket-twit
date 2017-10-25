var C_Twitter = require('../modules/twitter/C_Twitter');
module.exports = function(app, passport, client) {
    app.use('/api/twit', require('../modules/twitter/C_Twitter')); // Twitter module 
    //app.use('/api/xyz', require('../modules/xyz/C_Xyz')); // xyz module 
}