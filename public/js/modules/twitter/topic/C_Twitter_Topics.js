'use strict';
angular.module('topic')
    .controller('CTwitterTopic', [
        '$scope',
        'FTwitterTopic',
        function($scope, FTwitterTopic) {
            $scope.showLoader = true;
            FTwitterTopic.getTopic().then(function(response) {
                $scope.topics = response.data.DATA;
                $scope.showLoader = false;
            }, function(error) {
                $scope.showLoader = false;
                $scope.status = 'Unable to load topics data'; // or we can use notification system
            });
        }
    ]);