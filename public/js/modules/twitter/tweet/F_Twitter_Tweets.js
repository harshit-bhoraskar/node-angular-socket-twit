'use strict';
angular.module('tweet')
    .factory('FTwitterTweet', ['$http', 'config', function($http, config) {
        return {
            getTweet: function(param) {
                return $http.get(config.apiBaseUrl + '');
            }
        }
    }]);