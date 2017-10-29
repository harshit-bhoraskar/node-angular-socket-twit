'use strict';
angular.module('tweet')
    .factory('FTwitterTweet', ['$http', 'config', function($http, config) {
        return {
            getTopicTweet: function(params) {
                return $http.get(config.twitApiBaseUrl + 'getTopicTweet', {
                    params: params
                });
            }
        }
    }]);