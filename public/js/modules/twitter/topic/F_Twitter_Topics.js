angular.module('topic').factory('FTwitterTopic', ['$http', 'config', function($http, config) {
    return {
        getTopic: function(param) {
            return $http.get(config.apiBaseUrl + 'getTrendingTopics');
        }
    }
}]);