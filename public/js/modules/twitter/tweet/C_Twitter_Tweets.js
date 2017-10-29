'use strict';
angular.module('tweet')
    .controller('CTwitterTweet', [
        '$scope',
        '$stateParams',
        'FTwitterTweet',
        function($scope, $stateParams, FTwitterTweet) {
            $scope.topicName = $stateParams.tn;
            $scope.resultType = 'recent';
            $scope.newTweet = false;
            var newTwit = [];
            $scope.getTopicTweet = function() {
                $scope.showLoader = true;
                $scope.newTweet = false;
                newTwit = [];
                FTwitterTweet.getTopicTweet({ q: $stateParams.tn, result_type: $scope.resultType }).then(function(response) {
                    $scope.tweet = response.data.DATA;
                    $scope.showLoader = false;
                    var socket = io('http://localhost:3000');
                    socket.on('tweet', function(data) {
                        if (data) {
                            if (data.length) {
                                angular.forEach(data, function(o) { newTwit.unshift(o) });
                            } else if (Object.keys(data).length) {
                                newTwit.unshift(data)
                            }
                            if (newTwit.length) {
                                // Update scope object if newTwit is available.
                                $scope.$apply(function() {
                                    $scope.newTweet = true;
                                });
                            }
                        }
                    });
                }, function(error) {
                    $scope.showLoader = false;
                    $scope.status = 'Unable to load tweets.'; // or we can use notification system
                });
            }
            $scope.showNewTweet = function() {
                $scope.tweet = newTwit.concat($scope.tweet);
                newTwit = [];
                $scope.newTweet = false;
            }
            $scope.getTopicTweet();
        }
    ]);