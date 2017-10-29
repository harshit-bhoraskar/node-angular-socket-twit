angular.module('topic').factory('FTwitterTopic', ['$http', 'config', function($http, config) {
    return {
        getTopic: function(params) {
            return $http.get(config.twitApiBaseUrl + 'getTrendingTopics');
        }
    }
}]);