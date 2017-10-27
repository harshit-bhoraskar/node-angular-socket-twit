'use strict';
angular.module('tweet', [])
    .controller('CTwitterTweet', [
        '$scope',
        '$stateParams',
        function($scope, $stateParams) {
            alert($stateParams.q);
        }
    ]);