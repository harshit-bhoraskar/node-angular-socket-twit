var express = require('express'),
    _ = require('lodash'),
    TwitRouter = express.Router(), // Twitter Module Router
    Twit = new require('twit')(require('../../config/Conf_Twitter'));


TwitRouter.get('/getTrendingTopics', function(req, res) {
    // returns rending topics.
    Twit.get('trends/place', _.assignIn({
        id: 1940345,
        limit: 25
    }, req.params), function(err, data, response) {
        res.json({
            RESULT_CODE: '1',
            DATA: data && _.head(data) ? _.head(data).trends : []
        });
    });
});
module.exports = TwitRouter