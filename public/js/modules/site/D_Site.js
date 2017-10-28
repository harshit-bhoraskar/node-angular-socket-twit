'use strict';
angular.module('site')
    .directive('twitterLoader', function() {
        return {
            restrict: 'E',
            scope: {
                'showLoader': '=showLoader'
            },
            template: '<div ng-show="showLoader" class="clearfix"><div class="twitter-bird-animation"></div>' +
                '<div class="loading">' +
                '<span class="text">Loading</span>' +
                '<span class="blob1 blob"></span>' +
                '<span class="blob2 blob"></span>' +
                '<span class="blob3 blob"></span>' +
                '</div></div>'
        }
    })