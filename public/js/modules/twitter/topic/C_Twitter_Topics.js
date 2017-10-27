'use strict';
angular.module('topic', [])
    .constant("config", {
        apiBaseUrl: "api/twit/" // module based API base path
    })
    .controller('CTwitterTopic', [
        '$scope',
        'FTwitterTopic',
        function($scope, FTwitterTopic) {
            FTwitterTopic.getTopic().then(function(response) {
                $scope.topics = response.data.DATA;
            }, function(error) {
                $scope.status = 'Unable to load topics data'; // or we can use notification system
            });
        }
    ]);